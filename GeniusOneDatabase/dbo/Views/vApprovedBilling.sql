CREATE VIEW dbo.vApprovedBilling
AS
SELECT         dbo.Activities.ActivityId, dbo.Activities.UserId, dbo.Activities.ClientId, dbo.Activities.Activity, dbo.Activities.ActivityDate, dbo.Activities.ActivityFromTime, dbo.Activities.ActivityToTime, dbo.Activities.IsBillable, 
                          dbo.Activities.BillableAmount, dbo.Activities.Status, dbo.Activities.Notes, dbo.Activities.InvoiceId, dbo.Activities.ProgressNoteId, dbo.Activities.ProgressNoteTemplateId, dbo.Activities.ProgressNoteLocation, 
                          dbo.Activities.ProgressNoteInOut, dbo.Activities.BillCode, dbo.Activities.Hours, dbo.Activities.AlertSent, dbo.Activities.AuthorizationId, dbo.Activities.TenantId, dbo.Clients.FirstName, dbo.Clients.MiddleName, 
                          dbo.Clients.LastName, dbo.Clients.PrimaryInsuranceTypeId, dbo.Clients.PrimaryInsuranceNumber, dbo.Clients.PrimaryInsuranceGroup, dbo.Clients.PrimaryInsuranceHolder, dbo.Clients.PrimaryInsuranceHolderDob, 
                          dbo.Clients.PrimaryInsuranceRelationship, dbo.Clients.PrimaryInsuranceAddress1, dbo.Clients.PrimaryInsuranceCity, dbo.Clients.PrimaryInsuranceState, dbo.Clients.PrimaryInsuranceZipCode, 
                          dbo.Clients.SecondaryInsuranceTypeId, dbo.Clients.SecondaryInsuranceNumber, dbo.Clients.SecondaryInsuranceGroup, dbo.Clients.SecondaryInsuranceHolder, dbo.Clients.SecondaryInsuranceHolderDob, 
                          dbo.Clients.SecondaryInsuranceRelationship, dbo.Clients.SecondaryInsuranceAddress1, dbo.Clients.SecondaryInsuranceCity, dbo.Clients.SecondaryInsuranceState, dbo.Clients.SecondaryInsuranceZipCode, 
                          dbo.Clients.RecordNumber, dbo.Clients.SocialSecurityNum, dbo.Clients.BirthDate, dbo.Clients.Race, dbo.Clients.Gender, dbo.Clients.OtherName, InsuranceTypes_1.Name AS PrimaryInsuranceName, 
                          dbo.InsuranceTypes.Name AS SecondaryInsuranceName, dbo.Tenants.TenantId AS Expr1, dbo.Tenants.Name, dbo.Tenants.Address1, dbo.Tenants.Address2, dbo.Tenants.City, dbo.Tenants.State, dbo.Tenants.Zipcode, 
                          dbo.Tenants.PrimaryPhone, dbo.Tenants.SecondaryPhone, dbo.Tenants.ContactName, dbo.Tenants.EmployerIdNumber, dbo.Tenants.Notes AS Expr2, dbo.Tenants.TotalBranchOffices, dbo.Tenants.Npi, dbo.Tenants.TaxId, 
                          dbo.Tenants.TaxIdType
FROM             dbo.Activities INNER JOIN
                          dbo.Clients ON dbo.Activities.ClientId = dbo.Clients.ClientId INNER JOIN
                          dbo.Tenants ON dbo.Activities.TenantId = dbo.Tenants.TenantId LEFT OUTER JOIN
                          dbo.InsuranceTypes ON dbo.Clients.SecondaryInsuranceTypeId = dbo.InsuranceTypes.InsuranceTypeId LEFT OUTER JOIN
                          dbo.InsuranceTypes AS InsuranceTypes_1 ON dbo.Clients.PrimaryInsuranceTypeId = InsuranceTypes_1.InsuranceTypeId
WHERE         (dbo.Activities.Activity = 'Patient') AND (dbo.Activities.Status = 'Approved') AND (dbo.Activities.IsBillable = 1)

GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane1', @value = N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1[40] 4[35] 3) )"
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
      ActivePaneConfig = 1
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "Activities"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 365
               Right = 257
            End
            DisplayFlags = 280
            TopColumn = 4
         End
         Begin Table = "Clients"
            Begin Extent = 
               Top = 6
               Left = 295
               Bottom = 360
               Right = 555
            End
            DisplayFlags = 280
            TopColumn = 55
         End
         Begin Table = "InsuranceTypes"
            Begin Extent = 
               Top = 198
               Left = 597
               Bottom = 328
               Right = 772
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "InsuranceTypes_1"
            Begin Extent = 
               Top = 6
               Left = 593
               Bottom = 136
               Right = 768
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Tenants"
            Begin Extent = 
               Top = 51
               Left = 1027
               Bottom = 376
               Right = 1220
            End
            DisplayFlags = 280
            TopColumn = 1
         End
      End
   End
   Begin SQLPane = 
      PaneHidden = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 52
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
         Width = 150', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'vApprovedBilling';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane2', @value = N'0
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
         Column = 2340
         Alias = 8895
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
         Or = 1350
      End
   End
End
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'vApprovedBilling';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = 2, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'vApprovedBilling';

