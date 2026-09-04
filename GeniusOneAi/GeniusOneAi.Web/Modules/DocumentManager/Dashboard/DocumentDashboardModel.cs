namespace GeniusOneAi.DocumentManager
{
    public class DocumentDashboardPageModel
    {
        public int DraftCount { get; set; }
        public int ForApprovalCount { get; set; }
        public int SentCount { get; set; }
        public int ViewedCount { get; set; }
        public int CompletedCount { get; set; }
        public int ExpiredCount { get; set; }
        public int RejectedCount { get; set; }

    }
}