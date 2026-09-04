
CREATE VIEW [dbo].[vActivitiesNoteData]
AS
SELECT dbo.Activities.ActivityId, dbo.Activities.UserId, dbo.Activities.ClientId, dbo.Activities.Activity, dbo.Activities.ActivityDate, dbo.Activities.ActivityFromTime, dbo.Activities.ActivityToTime, dbo.Activities.IsBillable, dbo.Activities.BillableAmount, dbo.Activities.Status, dbo.Activities.Notes, dbo.Activities.InvoiceId, dbo.Activities.ProgressNoteId, dbo.Activities.ProgressNoteTemplateId, dbo.Activities.ProgressNoteInOut, dbo.Activities.BillCode, '' AS BillingModifier1, '' AS BillingModifier2, 
         '' AS BillingModifier3, '' AS BillingModifier4, dbo.Activities.Hours, dbo.Activities.TenantId, dbo.Activities.AuthorizationId, dbo.Users.FirstName AS WorkerFirstName, dbo.Users.MiddleName AS WorkerMiddleName, dbo.Users.LastName AS WorkerLastName, dbo.Users.Type AS WorkerTypeId, dbo.Clients.FirstName, dbo.Clients.MiddleName, dbo.Clients.LastName, dbo.Clients.BirthDate, dbo.Clients.Race, dbo.Clients.Gender, dbo.Clients.PrimaryInsuranceTypeId, 
         dbo.Clients.PrimaryInsuranceNumber, dbo.Clients.SecondaryInsuranceTypeId, dbo.Clients.SecondaryInsuranceNumber, PrimaryInsurance.Name AS PrimaryInsuranceName, PrimaryInsurance.PayerId AS PrimaryInsurancePayerId, SecondaryInsurance.Name AS SecondaryInsuranceName, SecondaryInsurance.PayerId AS SecondaryInsurancePayerId, dbo.ProgramNotes.ProgramNoteTemplateId, 
         CASE WHEN dbo.Activities.ProgressNoteLocation = 1 THEN 'Face to Face' WHEN dbo.Activities.ProgressNoteLocation = 2 THEN 'Telehealth' WHEN dbo.Activities.ProgressNoteLocation = 3 THEN 'Face to Face/Covid' WHEN dbo.Activities.ProgressNoteLocation = 4 THEN 'Non Face to Face' ELSE 'Location Error' END AS ProgressNoteLocation, dbo.ProgramNotes.Field00, dbo.ProgramNotes.Field01, dbo.ProgramNotes.Field02, dbo.ProgramNotes.Field03, 
         dbo.ProgramNotes.Field04, dbo.ProgramNotes.Field05, dbo.ProgramNotes.Field06, dbo.ProgramNotes.Field07, dbo.ProgramNotes.Field08, dbo.ProgramNotes.Field09, dbo.ProgramNotes.Field10, dbo.ProgramNotes.Status AS NotesStatus, dbo.ProgramNotes.OriginalSubmittalDate, dbo.ProgramNotes.DateSigned, dbo.ProgramNotes.eSignaturePlainText, dbo.ProgramNotes.SignatureImage, dbo.ProgramNotes.SignatureGUID, dbo.ProgramNotes.FileName, 
         dbo.ProgramNoteTemplates.Field01Label, dbo.ProgramNoteTemplates.Field02Label, dbo.ProgramNoteTemplates.Field03Label, dbo.ProgramNoteTemplates.Field04Label, dbo.ProgramNoteTemplates.Field05Label, dbo.ProgramNoteTemplates.Field06Label, dbo.ProgramNoteTemplates.Field07Label, dbo.ProgramNoteTemplates.Field08Label, dbo.ProgramNoteTemplates.Field09Label, dbo.ProgramNoteTemplates.Field10Label, dbo.ProgramNoteTemplates.Field01Status, 
         dbo.ProgramNoteTemplates.Field02Status, dbo.ProgramNoteTemplates.Field03Status, dbo.ProgramNoteTemplates.Field04Status, dbo.ProgramNoteTemplates.Field05Status, dbo.ProgramNoteTemplates.Field06Status, dbo.ProgramNoteTemplates.Field07Status, dbo.ProgramNoteTemplates.Field08Status, dbo.ProgramNoteTemplates.Field09Status, dbo.ProgramNoteTemplates.Field10Status, dbo.ProgramNoteTemplates.Field01Type, dbo.ProgramNoteTemplates.Field02Type, 
         dbo.ProgramNoteTemplates.Field03Type, dbo.ProgramNoteTemplates.Field04Type, dbo.ProgramNoteTemplates.Field05Type, dbo.ProgramNoteTemplates.Field06Type, dbo.ProgramNoteTemplates.Field07Type, dbo.ProgramNoteTemplates.Field08Type, dbo.ProgramNoteTemplates.Field09Type, dbo.ProgramNoteTemplates.Field10Type, dbo.Clients.RecordNumber, '' AS ProgramName, dbo.SitesTypes.Name AS SiteName, dbo.ProgramNotes.ApprovedBy, 
         dbo.ProgramNotes.DateApproved, dbo.vClientGoals.GoalText AS GoalData, dbo.vClientInterventions.InterventionText AS InterventionData, dbo.WorkerTypes.Name AS WorkerType
FROM  dbo.WorkerTypes RIGHT OUTER JOIN
         dbo.Users ON dbo.WorkerTypes.UserTypeId = dbo.Users.Type RIGHT OUTER JOIN
         dbo.vClientGoals RIGHT OUTER JOIN
         dbo.Clients LEFT OUTER JOIN
         dbo.vClientInterventions ON dbo.Clients.ClientId = dbo.vClientInterventions.ClientId ON dbo.vClientGoals.ClientId = dbo.Clients.ClientId LEFT OUTER JOIN
         dbo.SitesTypes ON dbo.Clients.SiteTypeId = dbo.SitesTypes.SiteTypeId LEFT OUTER JOIN
             (SELECT InsuranceTypeId, Name, Description, Address1, Address2, City, State, Zipcode, County, PrimaryPhone, Type, PayerId, Status
           FROM   dbo.InsuranceTypes AS InsuranceTypes_1) AS SecondaryInsurance ON dbo.Clients.SecondaryInsuranceTypeId = SecondaryInsurance.InsuranceTypeId LEFT OUTER JOIN
             (SELECT InsuranceTypeId, Name, Description, Address1, Address2, City, State, Zipcode, County, PrimaryPhone, Type, PayerId, Status
           FROM   dbo.InsuranceTypes) AS PrimaryInsurance ON dbo.Clients.PrimaryInsuranceTypeId = PrimaryInsurance.InsuranceTypeId RIGHT OUTER JOIN
         dbo.ProgramNotes INNER JOIN
         dbo.Activities ON dbo.ProgramNotes.ActivityId = dbo.Activities.ActivityId INNER JOIN
         dbo.ProgramNoteTemplates ON dbo.ProgramNotes.ProgramNoteTemplateId = dbo.ProgramNoteTemplates.ProgramNoteTemplateId ON dbo.Clients.ClientId = dbo.Activities.ClientId ON dbo.Users.UserId = dbo.Activities.UserId

GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane1', @value = N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[57] 4[39] 2[4] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "WorkerTypes"
            Begin Extent = 
               Top = 653
               Left = 1308
               Bottom = 783
               Right = 1495
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Users"
            Begin Extent = 
               Top = 557
               Left = 136
               Bottom = 972
               Right = 472
            End
            DisplayFlags = 280
            TopColumn = 6
         End
         Begin Table = "vClientGoals"
            Begin Extent = 
               Top = 162
               Left = 1843
               Bottom = 275
               Right = 2030
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Clients"
            Begin Extent = 
               Top = 106
               Left = 641
               Bottom = 421
               Right = 901
            End
            DisplayFlags = 280
            TopColumn = 7
         End
         Begin Table = "vClientInterventions"
            Begin Extent = 
               Top = 300
               Left = 1840
               Bottom = 396
               Right = 2027
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "SitesTypes"
            Begin Extent = 
               Top = 16
               Left = 1840
               Bottom = 146
               Right = 2027
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "SecondaryInsurance"
            Begin Extent = 
               Top = 120
               Left = 2630
               Bottom = 532
               Right = 3181
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'vActivitiesNoteData';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane2', @value = N'
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "PrimaryInsurance"
            Begin Extent = 
               Top = 636
               Left = 2148
               Bottom = 971
               Right = 2864
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "ProgramNotes"
            Begin Extent = 
               Top = 61
               Left = 2183
               Bottom = 478
               Right = 2590
            End
            DisplayFlags = 280
            TopColumn = 8
         End
         Begin Table = "Activities"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 431
               Right = 257
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "ProgramNoteTemplates"
            Begin Extent = 
               Top = 411
               Left = 812
               Bottom = 823
               Right = 1035
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 98
         Width = 284
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 2118
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 14322
         Alias = 2628
         Table = 3228
         Output = 720
    ', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'vActivitiesNoteData';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane3', @value = N'     Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'vActivitiesNoteData';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = 3, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'vActivitiesNoteData';

