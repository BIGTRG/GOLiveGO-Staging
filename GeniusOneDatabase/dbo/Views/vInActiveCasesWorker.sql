CREATE VIEW [dbo].[vInActiveCasesWorker]
AS
SELECT         CASE WHEN UserId IS NULL THEN 0 ELSE UserId END AS UserId, COUNT(CASE WHEN UserId IS NULL THEN 0 ELSE UserId END) AS Inc
FROM             dbo.WorkerCaseAssignments
WHERE         (UnassignedDate IS NOT NULL)
GROUP BY  UserId

