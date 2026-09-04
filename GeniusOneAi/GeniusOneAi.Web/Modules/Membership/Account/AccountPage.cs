using GeniusOneAi.Administration;
using GeniusOneAi.Administration.Repositories;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serenity;
using Serenity.Abstractions;
using Serenity.Extensions;
using Serenity.Services;
using System;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace GeniusOneAi.Membership.Pages
{
    [Route("Account/[action]")]
    public partial class AccountController : Controller
    {

        protected ITwoLevelCache Cache { get; }
        protected ITextLocalizer Localizer { get; }

        public AccountController(ITwoLevelCache cache, ITextLocalizer localizer)
        {
            Localizer = localizer ?? throw new ArgumentNullException(nameof(localizer));
            Cache = cache ?? throw new ArgumentNullException(nameof(cache));
        }

        [HttpGet]
        public ActionResult Login(int? denied, string activated, string returnUrl)
        {
            if (denied == 1)
                return View(MVC.Views.Errors.AccessDenied,
                    (object)("~/Account/Login?returnUrl=" + Uri.EscapeDataString(returnUrl)));

            ViewData["Activated"] = activated;
            ViewData["HideLeftNavigation"] = true;

            return View(MVC.Views.Membership.Account.AccountLogin);
        }

        [HttpGet]
        public ActionResult AccessDenied(string returnURL)
        {
            ViewData["HideLeftNavigation"] = !User.IsLoggedIn();

            return View(MVC.Views.Errors.AccessDenied, (object)returnURL);
        }

        [HttpPost, JsonRequest]
        public Result<ServiceResponse> Login(LoginRequest request,
            [FromServices] IUserPasswordValidator passwordValidator,
            [FromServices] IUserRetrieveService userRetriever,
            [FromServices] IEmailSender emailSender = null,
            [FromServices] ISMSService smsService = null)
        {
            return this.ExecuteMethod(() =>
            {
                if (request is null)
                    throw new ArgumentNullException(nameof(request));

                if (string.IsNullOrEmpty(request.Username))
                    throw new ArgumentNullException(nameof(request.Username));

                if (passwordValidator is null)
                    throw new ArgumentNullException(nameof(passwordValidator));

                if (userRetriever is null)
                    throw new ArgumentNullException(nameof(userRetriever));

                var username = request.Username;
                var result = passwordValidator.Validate(ref username, request.Password);
                if (result == PasswordValidationResult.Valid)
                {
                    CheckTwoFactorAuthentication(username, request, userRetriever, emailSender, smsService);

                    var principal = UserRetrieveService.CreatePrincipal(userRetriever, username, authType: "Password");
                    HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal).GetAwaiter().GetResult();
                    return new ServiceResponse();
                }

                throw new ValidationError("AuthenticationError", Texts.Validation.AuthenticationError.ToString(Localizer));
            });
        }

        [Serializable]
        private class TwoFactorData
        {
            public string Username { get; set; }
            public int RetryCount { get; set; }
            public int TwoFactorCode { get; set; }
        }

        private void CheckTwoFactorAuthentication(string username, LoginRequest request, IUserRetrieveService userRetriever,
            IEmailSender emailSender, ISMSService smsService)
        {
            bool isTwoFactorReq = !string.IsNullOrEmpty(request.TwoFactorGuid) || request.TwoFactorCode != null;

            if (isTwoFactorReq)
            {
                if (string.IsNullOrEmpty(request.TwoFactorGuid))
                    throw new ArgumentNullException(nameof(request.TwoFactorGuid));
                if (request.TwoFactorCode is null)
                    throw new ArgumentNullException(nameof(request.TwoFactorCode));

                var key = "TwoFactorAuth:" + request.TwoFactorGuid;
                var data = Cache.Distributed.GetAutoJson<TwoFactorData>(key);
                if (data == null || data.Username == null || data.Username != username)
                    throw new ValidationError("Can't validate credentials. Please try login again!");

                data.RetryCount++;
                if (data.RetryCount > 3)
                {
                    Cache.Distributed.Remove(key);
                    throw new ValidationError("Can't validate credentials. Please try login again!");
                }
                else
                {
                    Cache.Distributed.SetAutoJson(key, data);
                }

                if (data.TwoFactorCode != request.TwoFactorCode)
                    throw new ValidationError("Validation code is invalid. Please check and try again.");

                // login success. clear to not let same two factor guid/two factor code two be reused later
                Cache.Distributed.Remove(key);

                return;
            }

            if (userRetriever is null)
                throw new ArgumentNullException(nameof(userRetriever));

            if (userRetriever.ByUsername(username) is UserDefinition user &&
                ((user.TwoFactorAuth == TwoFactorAuthType.SMS &&
                  user.MobilePhoneVerified &&
                  UserHelper.IsValidPhone(user.MobilePhoneNumber)) ||
                 (user.TwoFactorAuth == TwoFactorAuthType.Email)))
            {
                var data = new TwoFactorData
                {
                    RetryCount = 0,
                    Username = username,
                    TwoFactorCode = new Random().Next(9000) + 1000
                };

                // this is to prevent users from sending too many SMS in a certain time interval
                var throttler = new Throttler(Cache.Memory, "TwoFactorAuthThrottle:" + username, TimeSpan.FromMinutes(5), 10);
                if (!throttler.Check())
                    throw new ValidationError("Can't proceed with two factor authentication. You are over your validation limit!");

                var twoFactorGuid = Guid.NewGuid().ToString("N");

                string authenticationMessage;
                if (user.TwoFactorAuth == TwoFactorAuthType.SMS)
                {
                    if (smsService is null)
                        throw new ArgumentNullException(nameof(smsService));

                    var mobile = user.MobilePhoneNumber.Trim();
                    smsService.Send(
                        phoneNumber: mobile,
                        text: "Please use code " + data.TwoFactorCode + " for GeniusOneAi login.",
                        reason: "Sent by GeniusOneAi system for two factor authenication by SMS (" + user.Username + ")");

                    // mask mobile number
                    mobile = mobile.Substring(0, 2) + new string('*', mobile.Length - 4) + mobile.Substring(mobile.Length - 2, 2);
                    authenticationMessage = "Please enter code sent to your mobile phone with number " + mobile + " in <span class='counter'>{0}</span> seconds." +
                        (smsService is FakeSMSService ?
                            " (You can find a text file under App_Data/SMS directory, as you haven't configured SMS service yet)" : "");
                }
                else
                {
                    if (emailSender is null)
                        throw new ArgumentNullException(nameof(emailSender));

                    emailSender.Send(
                        mailTo: user.Email,
                        subject: "Your two-factor authentication code for GeniusOneAi login",
                        body: "Please use code " + data.TwoFactorCode + " for GeniusOneAi login.");
                    authenticationMessage = "Please enter code sent to your e-mail adress in {0} seconds." +
                        " (If you didn't configure an SMTP server, you can find e-mails under App_Data/Mail directory";
                }

                Cache.Distributed.SetAutoJson("TwoFactorAuth:" + twoFactorGuid, data, TimeSpan.FromMinutes(2));
                throw new ValidationError("TwoFactorAuthenticationRequired",
                    authenticationMessage + "|" + twoFactorGuid, "Two factor authentication is required!");
            }
        }

        public ActionResult ImpersonateAs(string token, [FromServices] IUserRetrieveService userRetriever)
        {
            if (userRetriever is null)
                throw new ArgumentNullException(nameof(userRetriever));

            var bytes = HttpContext.RequestServices.GetDataProtector("ImpersonateAs")
                .Unprotect(Convert.FromBase64String(token));

            using var ms = new MemoryStream(bytes);
            using var br = new BinaryReader(ms);
            var dt = DateTime.FromBinary(br.ReadInt64());
            if (dt < DateTime.UtcNow)
                return new ContentResult { Content = "Your impersonation token is expired. Please refresh the page you were using and try again." };

            var loginAsUser = br.ReadString();

            if (string.Compare(loginAsUser, "admin", StringComparison.OrdinalIgnoreCase) != 0)
                return new ContentResult { Content = "Only admin can use impersonation functionality!" };

            var loginAs = br.ReadString();

            if (string.Compare(loginAs, "admin", StringComparison.OrdinalIgnoreCase) == 0)
                return new ContentResult { Content = "Can't impersonate as admin!" };

            var currentClientId = Request.Headers["User-Agent"] + "|" + HttpContext.Connection.RemoteIpAddress;
            using (var md5 = new MD5CryptoServiceProvider())
            {
                var currentHash = md5.ComputeHash(Encoding.UTF8.GetBytes(currentClientId));
                if (!currentHash.SequenceEqual(br.ReadBytes(currentHash.Length)))
                    return new ContentResult { Content = "Invalid token! User-agent mismatch!" };
            }

            if (userRetriever.ByUsername(loginAs) is not UserDefinition user)
                return new ContentResult { Content = loginAs + " is not a valid username!" };

            if (User?.Identity.Name?.ToLowerInvariant() == loginAsUser.ToLowerInvariant())
                return new ContentResult
                {
                    Content = "Please use Incognito mode by right clicking the impersonation link! " +
                        "If you are already in Incognito mode, signout or close all Incognito browser windows and try again."
                };

            var principal = UserRetrieveService.CreatePrincipal(userRetriever, user.Username, authType: "Impersonation");
            HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, principal).Wait();

            return new RedirectResult("~/");
        }

        private ActionResult Error(string message)
        {
            return View(MVC.Views.Errors.ValidationError, message);
        }

        public string KeepAlive()
        {
            return "OK";
        }

        public ActionResult Signout()
        {
            HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            return new RedirectResult("~/");
        }
    }
}