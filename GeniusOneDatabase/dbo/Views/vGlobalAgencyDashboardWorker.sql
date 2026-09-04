CREATE VIEW [dbo].[vGlobalAgencyDashboardWorker] AS 
SELECT 
  dbo.Users.UserId, 
  dbo.vRejectedProgressNotesWorker.Rn AS RejectedProgressNotes, 
  dbo.vSavedProgressNotesWorker.Sn AS SavedProgressNotes, 
  dbo.vSubmittedProgressNotesWorker.SUn AS SubmittedProgressNotes, 
  dbo.vApprovedProgressNotesWorker.An AS ApprovedProgressNotes, 
  dbo.vActiveCasesWorker.Ac AS ActiveCases, 
  dbo.vInActiveCasesWorker.Inc AS InActiveCases, 
  dbo.vAuthorizationsExpiringThisMonthWorker.Axt AS AuthorizationsExpiringThisMonth, 
  dbo.vAuthorizationsExpiringNextMonthWorker.Ac AS AuthorizationsExpiringNextMonth, 
  0 AS AppointmentsScheduled, 
  0 AS DocumentsPendingSignature, 
  0 AS DocumentsPendingReview, 
  dbo.vCredentialsExpiringThisMonthWorker.Cxt AS CredentialsExpiringThisMonth, 
  0 AS InvoicesSubmitted, 
  0 AS InvoicesPaid, 
  0.00 AS TotalBilled, 
  0.00 AS TotalPaid 
FROM 
  dbo.vCredentialsExpiringThisMonthWorker 
  RIGHT OUTER JOIN dbo.Users ON dbo.vCredentialsExpiringThisMonthWorker.UserId = dbo.Users.UserId 
  LEFT OUTER JOIN dbo.vAuthorizationsExpiringNextMonthWorker ON dbo.Users.UserId = dbo.vAuthorizationsExpiringNextMonthWorker.UserId 
  LEFT OUTER JOIN dbo.vInActiveCasesWorker ON dbo.Users.UserId = dbo.vInActiveCasesWorker.UserId 
  LEFT OUTER JOIN dbo.vActiveCasesWorker ON dbo.Users.UserId = dbo.vActiveCasesWorker.UserId 
  LEFT OUTER JOIN dbo.vSubmittedProgressNotesWorker ON dbo.Users.UserId = dbo.vSubmittedProgressNotesWorker.UserId 
  LEFT OUTER JOIN dbo.vApprovedProgressNotesWorker ON dbo.Users.UserId = dbo.vApprovedProgressNotesWorker.UserId 
  LEFT OUTER JOIN dbo.vSavedProgressNotesWorker ON dbo.Users.UserId = dbo.vSavedProgressNotesWorker.UserId 
  LEFT OUTER JOIN dbo.vRejectedProgressNotesWorker ON dbo.Users.UserId = dbo.vRejectedProgressNotesWorker.UserId 
  LEFT OUTER JOIN dbo.vAuthorizationsExpiringThisMonthWorker ON dbo.Users.UserId = dbo.vAuthorizationsExpiringThisMonthWorker.UserId 
