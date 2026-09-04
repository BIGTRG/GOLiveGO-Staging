CREATE VIEW dbo.vMyClients
AS
SELECT         dbo.Clients.ClientId, dbo.Clients.FirstName, dbo.Clients.MiddleName, dbo.Clients.LastName, dbo.Clients.MaidenName, dbo.Clients.OtherName, dbo.Clients.BirthDate, dbo.Clients.Race, dbo.Clients.Gender, dbo.Clients.Ethnicity, 
                          dbo.Clients.MaritalStatus, dbo.Clients.SocialSecurityNum, dbo.Clients.Address1, dbo.Clients.Address2, dbo.Clients.City, dbo.Clients.State, dbo.Clients.Zipcode, dbo.Clients.County, dbo.Clients.PrimaryPhone, 
                          dbo.Clients.SecondaryPhone, dbo.Clients.CellPhone, dbo.Clients.Email, dbo.Clients.CountryOfBirth, dbo.Clients.IsVeteran, dbo.Clients.PrimaryLanguage, dbo.Clients.NextOfKinName, dbo.Clients.NextOfKinPhone, 
                          dbo.Clients.MothersName, dbo.Clients.FathersName, dbo.Clients.LicenseStateId, dbo.Clients.EmploymentStatus, dbo.Clients.NumberInHouse, dbo.Clients.LivingArrangements, dbo.Clients.GrossIncomeDollar, 
                          dbo.Clients.GrossIncomePer, dbo.Clients.NumberDepenentIncome, dbo.Clients.EducationLevel, dbo.Clients.NameOfSchool, dbo.Clients.PrimaryInsuranceTypeId, dbo.Clients.PrimaryInsuranceNumber, 
                          dbo.Clients.PrimaryInsuranceGroup, dbo.Clients.PrimaryInsuranceHolder, dbo.Clients.PrimaryInsuranceHolderDob, dbo.Clients.PrimaryInsuranceRelationship, dbo.Clients.PrimaryInsuranceAddress1, 
                          dbo.Clients.PrimaryInsuranceCity, dbo.Clients.PrimaryInsuranceState, dbo.Clients.PrimaryInsuranceZipCode, dbo.Clients.SecondaryInsuranceTypeId, dbo.Clients.SecondaryInsuranceNumber, 
                          dbo.Clients.SecondaryInsuranceGroup, dbo.Clients.SecondaryInsuranceHolder, dbo.Clients.SecondaryInsuranceHolderDob, dbo.Clients.SecondaryInsuranceRelationship, dbo.Clients.SecondaryInsuranceAddress1, 
                          dbo.Clients.SecondaryInsuranceCity, dbo.Clients.SecondaryInsuranceState, dbo.Clients.SecondaryInsuranceZipCode, dbo.Clients.DischargeDate, dbo.Clients.DiagnosisDate, dbo.Clients.PlanExpirationDate, 
                          dbo.Clients.AdmissionDate, dbo.Clients.ReferralDate, dbo.Clients.ReferralSource, dbo.Clients.DiagnosisNotes, dbo.Clients.GuardianName, dbo.Clients.Notes, dbo.Clients.SystemStatus, dbo.Clients.ClientStatus, 
                          dbo.Clients.SiteTypeId, dbo.Clients.TenantId, dbo.Clients.RecordNumber, dbo.Clients.Pcn, dbo.WorkerCaseAssignments.UserId, dbo.Clients.OriginalServiceDate
FROM             dbo.Clients INNER JOIN
                          dbo.WorkerCaseAssignments ON dbo.Clients.ClientId = dbo.WorkerCaseAssignments.ClientId
WHERE         (dbo.WorkerCaseAssignments.UnassignedDate IS NULL) OR
                          (dbo.WorkerCaseAssignments.UnassignedDate = '')

GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane1', @value = N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[61] 4[18] 2[3] 3) )"
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
         Top = -288
         Left = 0
      End
      Begin Tables = 
         Begin Table = "Clients"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 451
               Right = 227
            End
            DisplayFlags = 280
            TopColumn = 52
         End
         Begin Table = "WorkerCaseAssignments"
            Begin Extent = 
               Top = 6
               Left = 265
               Bottom = 239
               Right = 463
            End
            DisplayFlags = 280
            TopColumn = 1
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 32
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
         Column = 1755
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'vMyClients';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane2', @value = N' = 1350
      End
   End
End
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'vMyClients';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = 2, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'vMyClients';

