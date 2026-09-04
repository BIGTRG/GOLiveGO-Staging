CREATE VIEW [dbo].[vApprovedProgressNotesWorker]
AS
SELECT         CASE WHEN a.UserId IS NULL THEN 0 ELSE a.UserId END AS UserId, COUNT(CASE WHEN a.UserId IS NULL THEN 0 ELSE a.UserId END) AS An
FROM             dbo.ProgramNotes AS p INNER JOIN
                          dbo.Activities AS a ON p.ActivityId = a.ActivityId
WHERE         (p.Status IN ('Approved', 'Billed', 'Processed'))
GROUP BY  a.UserId

