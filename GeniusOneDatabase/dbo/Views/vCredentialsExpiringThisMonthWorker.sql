CREATE VIEW [dbo].[vCredentialsExpiringThisMonthWorker]
AS
SELECT         CASE WHEN UserId IS NULL THEN 0 ELSE UserId END AS UserId, COUNT(CASE WHEN UserId IS NULL THEN 0 ELSE UserId END) AS Cxt
FROM             dbo.WorkerCredentials
WHERE         (MONTH(ExpirationDate) = MONTH(GETDATE())) AND (YEAR(ExpirationDate) = YEAR(GETDATE()))
GROUP BY  UserId

