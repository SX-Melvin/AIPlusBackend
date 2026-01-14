namespace AIPlusBackend.Dto.TempFile
{
    public class AddTempFileScheduleRequest
    {
        public string JobId { get; set; }
        public string WorkspaceId { get; set; }
        public int MinutesTillExpired { get; set; } = 30;
        public long? NodeID { get; set; } = null;
    }
}
