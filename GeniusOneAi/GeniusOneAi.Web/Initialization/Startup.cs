using GeniusOneAi.AppServices;
using GeniusOneAi.Modules.Common.CustomClasses;
using GleamTech.AspNet.Core;
using GleamTech.DocumentUltimate;
using GleamTech.DocumentUltimate.AspNet;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using Serenity;
using Serenity.Abstractions;
using Serenity.Data;
using Serenity.Extensions.DependencyInjection;
using Serenity.Localization;
using Serenity.Navigation;
using Serenity.Reporting;
using Serenity.Services;
using Serenity.Web;
using System;
using System.Data.Common;
using System.IO;
//using Telerik.Reporting.Cache.File;
//using Telerik.Reporting.Services;
//using Telerik.WebReportDesigner.Services;

namespace GeniusOneAi
{
    public partial class Startup
    {
        public Startup(IConfiguration configuration, IWebHostEnvironment hostEnvironment)
        {
            Configuration = configuration;
            HostEnvironment = hostEnvironment;
            SqlSettings.AutoQuotedIdentifiers = true;
            RegisterDataProviders();

        }

        public IConfiguration Configuration { get; }
        public IWebHostEnvironment HostEnvironment { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<WebUtillity>();
            services.Configure<StaticFileOptions>(options =>
            {
                var provider = new FileExtensionContentTypeProvider();
                provider.Mappings[".res"] = "application/octet-stream"; 
                options.ContentTypeProvider = provider;
            });
            services.AddRazorPages().AddNewtonsoftJson();
            //services.TryAddSingleton<IReportServiceConfiguration>(sp =>
            //  new ReportServiceConfiguration
            //  {
            //      ReportingEngineConfiguration = ConfigurationHelper.ResolveConfiguration(sp.GetService<IWebHostEnvironment>()),
            //      HostAppId = "GeniusOneCoreApp",
            //      Storage = new FileStorage("c:\\Temp\\"),
            //      ReportSourceResolver = new TypeReportSourceResolver().AddFallbackResolver
            //                             (new UriReportSourceResolver(Path.Combine(sp.GetService<IWebHostEnvironment>().ContentRootPath, "Reports")))
            //  });

            //services.TryAddSingleton<IReportDesignerServiceConfiguration>(sp => new ReportDesignerServiceConfiguration
            //{
            //    DefinitionStorage = new FileDefinitionStorage(Path.Combine(sp.GetService<IWebHostEnvironment>().ContentRootPath, "Reports")),
            //    SettingsStorage = new FileSettingsStorage(Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData), "Telerik Reporting")),
            //});
            services.AddControllers();
            services.AddSingleton<ITypeSource>(new DefaultTypeSource(new[]
            {
                typeof(LocalTextRegistry).Assembly,
                typeof(ISqlConnections).Assembly,
                typeof(IRow).Assembly,
                typeof(SaveRequestHandler<>).Assembly,
                typeof(IDynamicScriptManager).Assembly,
                typeof(Startup).Assembly,
                typeof(Serenity.Extensions.EnvironmentSettings).Assembly,
                typeof(Serenity.Pro.Extensions.BackgroundJobManager).Assembly,
            }));

            services.Configure<ConnectionStringOptions>(Configuration.GetSection(ConnectionStringOptions.SectionKey));
            services.Configure<CssBundlingOptions>(Configuration.GetSection(CssBundlingOptions.SectionKey));
            services.Configure<LocalTextPackages>(Configuration.GetSection(LocalTextPackages.SectionKey));
            services.Configure<ScriptBundlingOptions>(Configuration.GetSection(ScriptBundlingOptions.SectionKey));
            services.Configure<UploadSettings>(Configuration.GetSection(UploadSettings.SectionKey));
            services.Configure<Serenity.Extensions.EnvironmentSettings>(
                Configuration.GetSection(Serenity.Extensions.EnvironmentSettings.SectionKey));
            services.Configure<Serenity.Pro.Extensions.BackgroundJobSettings>(
                Configuration.GetSection(Serenity.Pro.Extensions.BackgroundJobSettings.SectionKey));
            services.Configure<Serenity.Extensions.SmtpSettings>(
                Configuration.GetSection(Serenity.Extensions.SmtpSettings.SectionKey));

            var dataProtectionKeysFolder = Configuration?["DataProtectionKeysFolder"];
            if (!string.IsNullOrEmpty(dataProtectionKeysFolder))
            {
                dataProtectionKeysFolder = Path.Combine(HostEnvironment.ContentRootPath, dataProtectionKeysFolder);
                if (Directory.Exists(dataProtectionKeysFolder))
                    services.AddDataProtection()
                        .PersistKeysToFileSystem(new DirectoryInfo(dataProtectionKeysFolder));
            }

            services.AddAntiforgery(options =>
            {
                options.HeaderName = "X-CSRF-TOKEN";
            });

            services.Configure<KestrelServerOptions>(options =>
            {
                options.AllowSynchronousIO = true;
            });

            services.Configure<IISServerOptions>(options =>
            {
                options.AllowSynchronousIO = true;
            });

            var builder = services.AddControllersWithViews(options =>
            {
                options.Filters.Add(typeof(AutoValidateAntiforgeryTokenAttribute));
                options.Filters.Add(typeof(AntiforgeryCookieResultFilterAttribute));
                options.ModelBinderProviders.Insert(0, new ServiceEndpointModelBinderProvider());
                options.Conventions.Add(new ServiceEndpointActionModelConvention());
            }).AddNewtonsoftJson(options =>
            {
                options.SerializerSettings.ContractResolver = new DefaultContractResolver();
            });

            if (HostEnvironment.IsDevelopment())
                builder.AddRazorRuntimeCompilation();

            Serenity.Pro.Extensions.ExceptionLog.Initialize(services, HostEnvironment.ApplicationName,
                Configuration["Data:Default:ConnectionString"], Configuration["Data:Default:ProviderName"]);

            services.AddAuthentication(o =>
            {
                o.DefaultScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                o.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                o.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            }).AddCookie(o =>
            {
                o.Cookie.Name = ".AspNetAuth";
                o.LoginPath = new PathString("/Account/Login/");
                o.AccessDeniedPath = new PathString("/Account/AccessDenied");
                o.ExpireTimeSpan = TimeSpan.FromMinutes(30);
                o.SlidingExpiration = true;
            });

            services.AddLogging(loggingBuilder =>
            {
                loggingBuilder.AddConfiguration(Configuration.GetSection("Logging"));
                loggingBuilder.AddConsole();
                loggingBuilder.AddDebug();
            });

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddSingleton<Serenity.Extensions.IEmailSender, Serenity.Extensions.EmailSender>();
            services.AddSingleton<Serenity.Pro.Extensions.IBackgroundJobManager, Serenity.Pro.Extensions.BackgroundJobManager>();
            services.AddServiceHandlers();
            services.AddDynamicScripts();
            services.AddCssBundling();
            services.AddScriptBundling();
            services.AddUploadStorage();
            services.AddSingleton<Administration.IUserPasswordValidator, Administration.UserPasswordValidator>();
            services.AddSingleton<IHttpContextItemsAccessor, HttpContextItemsAccessor>();
            services.AddSingleton<IUserAccessor, Administration.UserAccessor>();
            services.AddSingleton<IUserRetrieveService, Administration.UserRetrieveService>();
            services.AddSingleton<IPermissionService, Administration.PermissionService>();
            services.AddSingleton<INavigationModelFactory, Common.NavigationModelFactory>();
            services.AddSingleton<Administration.ISMSService, Administration.FakeSMSService>();
            services.AddSingleton<IReportRegistry, ReportRegistry>();
            services.AddExcelExporter();
            services.AddSingleton<IDataMigrations, DataMigrations>();
            services.AddGleamTech();
            services.AddHttpClient();
        }

        public static void InitializeLocalTexts(IServiceProvider services)
        {
            var env = services.GetRequiredService<IWebHostEnvironment>();

            services.AddAllTexts(new[]
            {
                Path.Combine(env.WebRootPath, "Scripts", "serenity", "texts"),
                Path.Combine(env.WebRootPath, "Scripts", "site", "texts"),
                Path.Combine(env.ContentRootPath, "App_Data", "texts")
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            RowFieldsProvider.SetDefaultFrom(app.ApplicationServices);
            InitializeLocalTexts(app.ApplicationServices);

            var reqLocOpt = new RequestLocalizationOptions
            {
                SupportedUICultures = UserCultureProvider.SupportedCultures,
                SupportedCultures = UserCultureProvider.SupportedCultures
            };
            reqLocOpt.RequestCultureProviders.Clear();
            reqLocOpt.RequestCultureProviders.Add(new UserCultureProvider());
            app.UseRequestLocalization(reqLocOpt);

            app.UseGleamTech();
            System.Net.ServicePointManager.SecurityProtocol |= System.Net.SecurityProtocolType.Tls12;
            DocumentUltimateWebConfiguration.Current.CacheLocation = "~/App_Data/DocumentCache";
            //DocumentUltimateConfiguration.Current.LicenseKey = GeniusOneBase.GleamTechViewerKey;

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            if (!string.IsNullOrEmpty(Configuration["UsePathBase"]))
                app.UsePathBase(Configuration["UsePathBase"]);

            app.UseHttpsRedirection();
            app.UseExceptional();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            ConfigureTestPipeline?.Invoke(app);

            app.UseDynamicScripts();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
                endpoints.MapControllers();
            });

            var backgroundJobManager = app.ApplicationServices
                .GetRequiredService<Serenity.Pro.Extensions.IBackgroundJobManager>();
            backgroundJobManager.Initialize();

            app.ApplicationServices.GetRequiredService<IDataMigrations>().Initialize();
            AppDomain.CurrentDomain.SetData("ContentRootPath", env.ContentRootPath);
            AppDomain.CurrentDomain.SetData("WebRootPath", env.WebRootPath);
            //app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());//Review this for security
        }

        public static Action<IApplicationBuilder> ConfigureTestPipeline { get; set; }

        public static void RegisterDataProviders()
        {
            DbProviderFactories.RegisterFactory("System.Data.SqlClient", SqlClientFactory.Instance);
            DbProviderFactories.RegisterFactory("Microsoft.Data.SqlClient", SqlClientFactory.Instance);
            DbProviderFactories.RegisterFactory("Microsoft.Data.Sqlite", Microsoft.Data.Sqlite.SqliteFactory.Instance);

            // to enable FIREBIRD: add FirebirdSql.Data.FirebirdClient reference, set connections, and uncomment line below
            // DbProviderFactories.RegisterFactory("FirebirdSql.Data.FirebirdClient", FirebirdSql.Data.FirebirdClient.FirebirdClientFactory.Instance);

            // to enable MYSQL: add MySql.Data reference, set connections, and uncomment line below
            // DbProviderFactories.RegisterFactory("MySql.Data.MySqlClient", MySql.Data.MySqlClient.MySqlClientFactory.Instance);

            // to enable POSTGRES: add Npgsql reference, set connections, and uncomment line below
            // DbProviderFactories.RegisterFactory("Npgsql", Npgsql.NpgsqlFactory.Instance);
        }
        
    }

}
