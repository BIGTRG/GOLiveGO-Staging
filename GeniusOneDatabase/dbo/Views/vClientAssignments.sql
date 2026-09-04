CREATE VIEW dbo.vClientAssignments
AS
SELECT         wca.ClientId, c.LastName + ', ' + c.FirstName + ' (' + c.RecordNumber + ')' + ' : ' + pt.Name AS ClientFullName, wca.UserId, pct.BillCode, ca.AuthorizationId, ca.StartDate, ca.EndDate, pt.Name AS ProgramName
FROM             dbo.Clients AS c INNER JOIN
                          dbo.WorkerCaseAssignments AS wca ON c.ClientId = wca.ClientId INNER JOIN
                          dbo.ProgramCodeTypes AS pct ON wca.ProgramCodeTypeId = pct.ProgramCodeTypeId INNER JOIN
                          dbo.ProgramTypes AS pt ON pct.ProgramTypeId = pt.ProgramTypeId INNER JOIN
                          dbo.ClientAuthorizations AS ca ON wca.AuthorizationId = ca.AuthorizationId
WHERE         (wca.UnassignedDate IS NULL) OR
                          (wca.UnassignedDate = '')

GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane1', @value = N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[74] 4[2] 2[4] 3) )"
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
         Begin Table = "c"
            Begin Extent = 
               Top = 6
               Left = 28
               Bottom = 648
               Right = 350
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "wca"
            Begin Extent = 
               Top = 23
               Left = 401
               Bottom = 608
               Right = 775
            End
            DisplayFlags = 280
            TopColumn = 2
         End
         Begin Table = "pct"
            Begin Extent = 
               Top = 258
               Left = 846
               Bottom = 798
               Right = 1406
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "ca"
            Begin Extent = 
               Top = 17
               Left = 1084
               Bottom = 576
               Right = 1759
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "pt"
            Begin Extent = 
               Top = 179
               Left = 1487
               Bottom = 488
               Right = 1948
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
      Begin ColumnWidths = 12
         Width = 284
         Width = 1500
         Width = 5415
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 4635
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
    ', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'vClientAssignments';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane2', @value = N'     Column = 3675
         Alias = 1455
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
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'vClientAssignments';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = 2, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'vClientAssignments';

