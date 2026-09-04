CREATE VIEW [dbo].[vActiveCasesWorker]
AS
SELECT         CASE WHEN UserId IS NULL THEN 0 ELSE UserId END AS UserId, COUNT(CASE WHEN UserId IS NULL THEN 0 ELSE UserId END) AS Ac
FROM             dbo.WorkerCaseAssignments
WHERE         (UnassignedDate IS NULL)
GROUP BY  UserId

