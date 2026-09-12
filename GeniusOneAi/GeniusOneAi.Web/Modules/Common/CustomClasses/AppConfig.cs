using System;
using System.IO;
using Microsoft.Extensions.Configuration;

namespace GeniusOneAi.Modules.Common.CustomClasses
{
    /// <summary>
    /// Single place that resolves configuration for the static readers in GeniusOneBase and friends.
    /// Layering (last wins): appsettings.json -> appsettings.machine.json (git-ignored, per server)
    /// -> environment variables (e.g. Data__Default__ConnectionString, EmailParms__Keys__Password).
    /// appsettings.json therefore carries no secrets; each server supplies its own.
    /// </summary>
    public static class AppConfig
    {
        private static readonly Lazy<IConfigurationRoot> _root = new(() =>
            new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: false)
                .AddJsonFile("appsettings.machine.json", optional: true, reloadOnChange: false)
                .AddEnvironmentVariables()
                .Build());

        public static IConfigurationRoot Root => _root.Value;

        /// <summary>Read "Section:Key" (colon path). Returns null when missing or set to the "hidden" placeholder.</summary>
        public static string? Get(string path)
        {
            var value = Root[path];
            return string.IsNullOrWhiteSpace(value) || value == "hidden" ? null : value;
        }
    }
}
