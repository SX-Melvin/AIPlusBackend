namespace AIPlusBackend.Dto.AIPlus
{
    public class AIPlusDeleteFileResponse: AIPlusCommonResponse
    {
        public string FileName { get; set; }
        public bool StorageDeleted { get; set; }
        public int DeletedChunks { get; set; }
        public string JobId { get; set; }   
    }
}
