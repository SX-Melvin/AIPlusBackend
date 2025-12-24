namespace AIPlusBackend.Dto.AIPlus
{
    public class AIPlusUploadFileResponse
    {
        public string? JobId { get; set; } = null;
        public string Status { get; set; }
        public string FileName { get; set; }
        public long FileSize { get; set; }
        public string FileHash { get; set; }
        public AIPlusUploadFileExistingFileResponse? ExistingFile { get; set; } = null;
    }

    public class AIPlusUploadFileExistingFileResponse
    {
        public string JobId { get; set; }
        public string FileName { get; set; }
        public long FileSize { get; set; }
    }
}
