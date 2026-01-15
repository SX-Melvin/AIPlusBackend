namespace AIPlusBackend.Dto.AIPlus
{
    public class AIPlusSearchForFilesResponse
    {
        public string WorkspaceId { get; set; }
        public string Query { get; set; }
        public int Total { get; set; }
        public List<AIPlusSearchForFilesResponseFile> Files { get; set; }
    }

    public class AIPlusSearchForFilesResponseFile
    {
        public string JobId { get; set; }
        public string WorkspaceId { get; set; }
        public string FileName { get; set; }
        public string FileType { get; set; }
        public string FilePath { get; set; }
        public long FileSize { get; set; }
        public string FileHash { get; set; }
        public int TotalChunks { get; set; }
        public DateTime CreatedAt { get; set; }

        public AIPlusSearchForFilesResponseFileCustomMetadata CustomMetadata { get; set; }
        public List<AIPlusSearchForFilesResponseFileFileAlias> Aliases { get; set; }
    }
    public class AIPlusSearchForFilesResponseFileFileAlias
    {
        public string AliasId { get; set; }
        public string NodeId { get; set; }
        public string FileName { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
    public class AIPlusSearchForFilesResponseFileCustomMetadata
    {
        public int? NodeId { get; set; } = null;
    }
}
