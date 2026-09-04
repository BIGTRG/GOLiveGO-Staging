using System;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Linq;
using GeniusOneAi.MiscEntities.Entities;
using Serenity.Data;
using System.IO;
using System.Security.Cryptography;
using System.Text;

namespace GeniusOneAi.Modules.Common.CustomClasses
{
    public class GeniusOneBase
    {
        public static string headerUrl = "/Content/site/branding/header.html";
        public static string footerUrl = "/Content/site/branding/footer.html";
        private static string EncryptionKey = "8f7a2c14b6e7d903";
        private static string Salt = "h6$#9aPzLx@2";

        public static string? SystemAccountId = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("Hosting")["Default:SystemAccountId"];
        public static string? DbConn = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("Data")["Default:ConnectionString"];
        public static string? BaseUrl = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("Hosting")["Default:BaseUrl"];
        public static string? GlobalApiKey = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("Api")["Keys:Default"];
        public static string? SelectPdfKey = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("ThirdParty")["Keys:SelectPdf"];
        public static string? ClaimMdApiKey = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("ThirdParty")["Keys:Claim.md"];
        public static string? ChatGptKey = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("ThirdParty")["Keys:ChatGPT"];
        public static string? GleamTechViewerKey = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("ThirdParty")["Keys:GleamTechViewerKey"];
        public static string? BillingProcessDirOutgoingKey = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("BillingExportDirectories")["Keys:Outgoing"];
        public static string? BillingProcessDirTemplateKey = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("BillingExportDirectories")["Keys:Templates"];
        public static string? BillingProcessDirIncomingKey = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("BillingExportDirectories")["Keys:Incoming"];
        public static string? BillingProcessDirArchiveKey = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("BillingExportDirectories")["Keys:Archive"];
        public static string? EmailSender = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("EmailParms")["Keys:Sender"];
        public static string? EmailPassword = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("EmailParms")["Keys:Password"];
        public static string? EmailSmtp = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("EmailParms")["Keys:Smtp"];
        public static string? EmailPort = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("EmailParms")["Keys:Port"];

        public static string GetState(int stateId)
        {
            using var connection = new SqlConnection(DbConn);

            var fields = UsStateTypesRow.Fields;
            var stateRow = connection.Query(new SqlQuery().From(fields).Select(fields.StateCode).Where(fields.Id == stateId)).FirstOrDefault();

            return stateRow != null ? (string)stateRow.StateCode : String.Empty;
        }
        public static int GetStateId(string state)
        {
            using var connection = new SqlConnection(DbConn);

            var fields = UsStateTypesRow.Fields;
            var stateRow = connection.Query<int>(new SqlQuery().From(fields).Select(fields.Id).Where(fields.StateCode == state)).FirstOrDefault();

            return stateRow;
        }
        public static string Encrypt(string plainText)
        {
            byte[] saltBytes = Encoding.UTF8.GetBytes(Salt);
            byte[] plainTextBytes = Encoding.UTF8.GetBytes(plainText);

            using (Aes aesAlg = Aes.Create())
            {
                Rfc2898DeriveBytes keyDerivationFunction = new Rfc2898DeriveBytes(EncryptionKey, saltBytes);
                aesAlg.Key = keyDerivationFunction.GetBytes(32); // 256-bit key
                aesAlg.IV = keyDerivationFunction.GetBytes(16); // 128-bit IV

                using (MemoryStream msEncrypt = new MemoryStream())
                {
                    using (CryptoStream csEncrypt = new CryptoStream(msEncrypt, aesAlg.CreateEncryptor(), CryptoStreamMode.Write))
                    {
                        csEncrypt.Write(plainTextBytes, 0, plainTextBytes.Length);
                        csEncrypt.FlushFinalBlock();
                    }

                    return Convert.ToBase64String(msEncrypt.ToArray());
                }
            }


        }
        public static string Decrypt(string cipherText)
        {
            byte[] saltBytes = Encoding.UTF8.GetBytes(Salt);
            byte[] cipherTextBytes = Convert.FromBase64String(cipherText);

            using (Aes aesAlg = Aes.Create())
            {
                Rfc2898DeriveBytes keyDerivationFunction = new Rfc2898DeriveBytes(EncryptionKey, saltBytes);
                aesAlg.Key = keyDerivationFunction.GetBytes(32); // 256-bit key
                aesAlg.IV = keyDerivationFunction.GetBytes(16); // 128-bit IV

                using (MemoryStream msDecrypt = new MemoryStream())
                {
                    using (CryptoStream csDecrypt = new CryptoStream(msDecrypt, aesAlg.CreateDecryptor(), CryptoStreamMode.Write))
                    {
                        csDecrypt.Write(cipherTextBytes, 0, cipherTextBytes.Length);
                        csDecrypt.FlushFinalBlock();
                    }

                    return Encoding.UTF8.GetString(msDecrypt.ToArray());
                }
            }
        }
        public static bool CheckApiKey(string apiKey)
        {
            return apiKey == GlobalApiKey;
        }

    }
}

