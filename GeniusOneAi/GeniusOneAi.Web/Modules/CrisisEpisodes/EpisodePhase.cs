using System;
using System.Collections.Generic;

namespace GeniusOneAi.CrisisEpisodes
{
    /// <summary>
    /// Encounter phases of a mobile crisis episode. Goals, activities and notes are keyed to these,
    /// never to weekdays. The order is the clinical pathway; FollowUp covers Day 7 / 14 / 21.
    /// </summary>
    public static class EpisodePhase
    {
        public const string FirstResponder = "E1";
        public const string NeedsAssessment = "E2";
        public const string ActOnNeeds = "E3";
        public const string ConfirmAndLink = "E4";
        public const string PreDischarge = "E5";
        public const string FollowUp = "FU";
        public const string Closed = "Closed";

        public static readonly string[] Ordered = { FirstResponder, NeedsAssessment, ActOnNeeds, ConfirmAndLink, PreDischarge, FollowUp };

        public static readonly Dictionary<string, string> Labels = new(StringComparer.OrdinalIgnoreCase)
        {
            [FirstResponder] = "Encounter 1 - First Responder",
            [NeedsAssessment] = "Encounter 2 - Needs Assessment",
            [ActOnNeeds] = "Encounter 3 - Act on Needs",
            [ConfirmAndLink] = "Encounter 4 - Confirm and Link",
            [PreDischarge] = "Encounter 5 - Pre-Discharge",
            [FollowUp] = "Follow-up (Day 7 / 14 / 21)",
            [Closed] = "Closed",
        };

        public static string Label(string phase) =>
            phase != null && Labels.TryGetValue(phase, out var l) ? l : (phase ?? "");

        /// <summary>Phase reached after the given number of signed encounters (1-based).</summary>
        public static string ForEncounter(int encounterNo)
        {
            if (encounterNo <= 0) return FirstResponder;
            return encounterNo <= 5 ? Ordered[encounterNo - 1] : FollowUp;
        }

        public static string Next(string phase)
        {
            var i = Array.IndexOf(Ordered, phase);
            if (i < 0) return FirstResponder;
            return i + 1 < Ordered.Length ? Ordered[i + 1] : FollowUp;
        }
    }

    public static class EpisodeDisposition
    {
        public const string Discharged = "Discharged";
        public const string LongTermAdmission = "LongTermAdmission";
        public const string Transferred = "Transferred";
        public const string LostContact = "LostContact";
        public const string Other = "Other";
    }
}
