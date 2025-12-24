namespace AIPlusBackend.Dto.AIPlus
{
    public class AIPlusGetFilingSuggestionResponse
    {
        public List<AIPlusFilingSuggestionSuggestion> Suggestions { get; set; }
        public AIPlusFilingSuggestionEmailFile EmailFile { get; set; }
        public FoldersFile FoldersFile { get; set; }
    }
    public class AIPlusFilingSuggestionSuggestion
    {
        public string FolderId { get; set; }
        public string FolderName { get; set; }
        public string Confidence { get; set; }
        public string Reasoning { get; set; }
        public string Path { get; set; }
        public bool IsRecommended { get; set; }
    }
    public class FoldersFile
    {
        public string FileName { get; set; }
        public int TotalFolders { get; set; }
        public int RelevantFoldersAnalyzed { get; set; }
    }
    public class AIPlusFilingSuggestionEmailFile
    {
        public string FileName { get; set; }
        public string JobId { get; set; }
    }
}
