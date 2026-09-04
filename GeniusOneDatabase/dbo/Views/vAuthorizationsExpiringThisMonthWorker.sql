CREATE VIEW [dbo].[vAuthorizationsExpiringThisMonthWorker]
AS
SELECT         CASE WHEN dbo.WorkerCaseAssignments.UserId IS NULL THEN 0 ELSE dbo.WorkerCaseAssignments.UserId END AS UserId, COUNT(CASE WHEN dbo.WorkerCaseAssignments.UserId IS NULL 
                          THEN 0 ELSE dbo.WorkerCaseAssignments.UserId END) AS Axt
FROM             dbo.ClientAuthorizations INNER JOIN
                          dbo.WorkerCaseAssignments ON dbo.ClientAuthorizations.AuthorizationId = dbo.WorkerCaseAssignments.AuthorizationId
WHERE         (MONTH(EndDate) = MONTH(GETDATE())) AND (YEAR(EndDate) = YEAR(GETDATE()))
GROUP BY  UserId

