using System;
using System.Data;
using System.Linq;
using Serenity;
using Serenity.Data;
using Serenity.Services;
using GeniusOneAi.CrisisEpisodes.Entities;
using GoalRow = GeniusOneAi.ClientManager.Entities.ClientGoalsRow;
using NoteRow = GeniusOneAi.ProgramNoteManager.Entities.ProgramNotesRow;

namespace GeniusOneAi.CrisisEpisodes.Services
{
    /// <summary>
    /// Episode lifecycle: open, encounter numbering, phase advance after an approved note, close.
    /// Pure data operations on an existing connection / unit of work so it can be called from
    /// the episode endpoint, the note save handler and (later) the follow-up scheduler.
    /// </summary>
    public static class EpisodeService
    {
        private static readonly CrisisEpisodesRow.RowFields E = CrisisEpisodesRow.Fields;

        public static CrisisEpisodesRow GetOpen(IDbConnection connection, int clientId)
        {
            return connection.TryFirst<CrisisEpisodesRow>(q => q
                .SelectTableFields()
                .Where(E.ClientId == clientId && E.ClosedAt.IsNull())
                .OrderBy(E.OpenedAt, desc: true));
        }

        public static CrisisEpisodesRow Open(IUnitOfWork uow, int clientId, string presentingTrigger, int? userId, int? tenantId, DateTime? projectedDischarge = null)
        {
            var existing = GetOpen(uow.Connection, clientId);
            if (existing != null)
                throw new ValidationError("OpenEpisodeExists",
                    $"This client already has an open crisis episode (#{existing.EpisodeId}, opened {existing.OpenedAt:d}). Close it before opening a new one.");

            var row = new CrisisEpisodesRow
            {
                ClientId = clientId,
                TenantId = tenantId,
                OpenedAt = DateTime.Now,
                OpenedBy = userId,
                PresentingTrigger = presentingTrigger,
                Phase = EpisodePhase.FirstResponder,
                EncounterCount = 0,
                ProjectedDischarge = projectedDischarge ?? DateTime.Today.AddDays(7),
                Owner = userId,
                OwnerCreateDate = DateTime.Now,
            };
            row.EpisodeId = Convert.ToInt32(uow.Connection.InsertAndGetID(row));
            return row;
        }

        /// <summary>Encounter number the next signed note in this episode will carry (signed notes + 1).</summary>
        public static int NextEncounterNumber(IDbConnection connection, int episodeId)
        {
            var n = NoteRow.Fields;
            var signed = connection.Count<NoteRow>(
                n.EpisodeId == episodeId & n.Status.In("Submitted", "Re-Submitted", "Approved"));
            return signed + 1;
        }

        /// <summary>
        /// Called from the note save handler on SignAction. Stamps EncounterNo and Phase on the note
        /// so the number is fixed at the moment of signature and never shifts afterwards.
        /// </summary>
        public static void StampNoteOnSign(IDbConnection connection, NoteRow note)
        {
            if (note.EpisodeId == null) return;
            if (note.EncounterNo == null)
                note.EncounterNo = NextEncounterNumber(connection, note.EpisodeId.Value);
            if (string.IsNullOrEmpty(note.Phase))
                note.Phase = EpisodePhase.ForEncounter(note.EncounterNo.Value);
        }

        /// <summary>
        /// Called from the note save handler on ApproveAction. Moves the episode to the phase that
        /// follows the approved encounter. Goal carry-forward and follow-up scheduling plug in here in later phases.
        /// </summary>
        public static void AdvanceAfterApproval(IUnitOfWork uow, int episodeId, int approvedEncounterNo)
        {
            var ep = uow.Connection.TryById<CrisisEpisodesRow>(episodeId);
            if (ep == null || ep.ClosedAt != null) return;

            var count = Math.Max(ep.EncounterCount ?? 0, approvedEncounterNo);
            var nextPhase = EpisodePhase.ForEncounter(count + 1);

            uow.Connection.UpdateById(new CrisisEpisodesRow
            {
                EpisodeId = episodeId,
                EncounterCount = count,
                Phase = nextPhase,
            });
        }

        public static void Close(IUnitOfWork uow, int episodeId, string disposition, string notes, int? userId)
        {
            var ep = uow.Connection.TryById<CrisisEpisodesRow>(episodeId);
            if (ep == null) throw new ValidationError("Episode not found.");
            if (ep.ClosedAt != null) throw new ValidationError("Episode is already closed.");

            uow.Connection.UpdateById(new CrisisEpisodesRow
            {
                EpisodeId = episodeId,
                ClosedAt = DateTime.Now,
                Disposition = disposition,
                Notes = string.IsNullOrWhiteSpace(notes) ? ep.Notes : notes,
                Phase = EpisodePhase.Closed,
            });

            // Open goals of a closed episode are marked Incomplete so nothing dangles.
            var g = GoalRow.Fields;
            new SqlUpdate(g.TableName)
                .Set(g.Status, "Incomplete")
                .Where(g.EpisodeId == episodeId & (g.Status.IsNull() | g.Status.In("Not Started", "Started")))
                .Execute(uow.Connection, ExpectedRows.Ignore);
        }
    }
}
