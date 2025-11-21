namespace AIPlusBackend.Dto.AIPlus
{
    public class AIPlusGetJobResponse
    {
        public string JobId { get; set; }
        public string Status { get; set; }
        public int Progress { get; set; }
        public string? Error { get; set; } = null;
    }
}
