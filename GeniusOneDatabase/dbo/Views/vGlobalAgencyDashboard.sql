CREATE VIEW dbo.vGlobalAgencyDashboard
AS
SELECT         dbo.Tenants.TenantId, dbo.vRejectedProgressNotes.Rn AS RejectedProgressNotes, dbo.vSavedProgressNotes.Sn AS SavedProgressNotes, dbo.vSubmittedProgressNotes.SUn AS SubmittedProgressNotes, 
                          dbo.vApprovedProgressNotes.An AS ApprovedProgressNotes, dbo.vActiveCases.Ac AS ActiveCases, dbo.vInActiveCases.Inc AS InActiveCases, dbo.vAuthorizationsExpiringThisMonth.Axt AS AuthorizationsExpiringThisMonth, 
                          dbo.vAuthorizationsExpiringNextMonth.Ac AS AuthorizationsExpiringNextMonth, 0 AS AppointmentsScheduled, 0 AS DocumentsPendingSignature, 0 AS DocumentsPendingReview, 
                          dbo.vCredentialsExpiringThisMonth.Cxt AS CredentialsExpiringThisMonth, 0 AS InvoicesSubmitted, 0 AS InvoicesPaid, 0.00 AS TotalBilled, 0.00 AS TotalPaid
FROM             dbo.vCredentialsExpiringThisMonth RIGHT OUTER JOIN
                          dbo.Tenants ON dbo.vCredentialsExpiringThisMonth.TenantId = dbo.Tenants.TenantId LEFT OUTER JOIN
                          dbo.vAuthorizationsExpiringNextMonth ON dbo.Tenants.TenantId = dbo.vAuthorizationsExpiringNextMonth.TenantId LEFT OUTER JOIN
                          dbo.vInActiveCases ON dbo.Tenants.TenantId = dbo.vInActiveCases.TenantId LEFT OUTER JOIN
                          dbo.vActiveCases ON dbo.Tenants.TenantId = dbo.vActiveCases.TenantId LEFT OUTER JOIN
                          dbo.vSubmittedProgressNotes ON dbo.Tenants.TenantId = dbo.vSubmittedProgressNotes.TenantId LEFT OUTER JOIN
                          dbo.vApprovedProgressNotes ON dbo.Tenants.TenantId = dbo.vApprovedProgressNotes.TenantId LEFT OUTER JOIN
                          dbo.vSavedProgressNotes ON dbo.Tenants.TenantId = dbo.vSavedProgressNotes.TenantId LEFT OUTER JOIN
                          dbo.vRejectedProgressNotes ON dbo.Tenants.TenantId = dbo.vRejectedProgressNotes.TenantId LEFT OUTER JOIN
                          dbo.vAuthorizationsExpiringThisMonth ON dbo.Tenants.TenantId = dbo.vAuthorizationsExpiringThisMonth.TenantId

GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane1', @value = N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[54] 4[2] 2[16] 3) )"
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
         Top = -480
         Left = 0
      End
      Begin Tables = 
         Begin Table = "vAuthorizationsExpiringNextMonth"
            Begin Extent = 
               Top = 755
               Left = 1582
               Bottom = 851
               Right = 1881
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Tenants"
            Begin Extent = 
               Top = 115
               Left = 24
               Bottom = 333
               Right = 217
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "vInActiveCases"
            Begin Extent = 
               Top = 439
               Left = 1583
               Bottom = 535
               Right = 1753
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "vActiveCases"
            Begin Extent = 
               Top = 553
               Left = 1583
               Bottom = 649
               Right = 1753
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "vSubmittedProgressNotes"
            Begin Extent = 
               Top = 19
               Left = 1582
               Bottom = 115
               Right = 1752
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "vApprovedProgressNotes"
            Begin Extent = 
               Top = 117
               Left = 1582
               Bottom = 213
               Right = 1752
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "vSavedProgressNotes"
            Begin Extent = 
               Top = 338
               Left = 1582
       ', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'vGlobalAgencyDashboard';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane2', @value = N'        Bottom = 435
               Right = 1752
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "vRejectedProgressNotes"
            Begin Extent = 
               Top = 222
               Left = 1581
               Bottom = 328
               Right = 1751
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "vAuthorizationsExpiringThisMonth"
            Begin Extent = 
               Top = 654
               Left = 1582
               Bottom = 750
               Right = 1861
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "vCredentialsExpiringThisMonth"
            Begin Extent = 
               Top = 889
               Left = 1295
               Bottom = 985
               Right = 1465
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
      Begin ColumnWidths = 19
         Width = 284
         Width = 1500
         Width = 2010
         Width = 1800
         Width = 2160
         Width = 2115
         Width = 1500
         Width = 1500
         Width = 2655
         Width = 4710
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
         Column = 1440
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
         Or = 1350
      End
   End
End
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'vGlobalAgencyDashboard';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = 2, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'vGlobalAgencyDashboard';

