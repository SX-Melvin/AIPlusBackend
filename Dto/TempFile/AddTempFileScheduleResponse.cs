namespace AIPlusBackend.Dto.TempFile
{
    public class AddTempFileScheduleResponse
    {
        public long ID { get; set; }
        public string WorkspaceID { get; set; }
        public string JobId { get; set; }
        public DateTime DeleteAt { get; set; }
    }
}
