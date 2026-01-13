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
        public List<AIPlusFilingSuggestionSuggestionCategories>? Categories { get; set; } = [];
    }
    public class AIPlusFilingSuggestionSuggestionCategories
    {
        public string Name { get; set; }
        public long? Id { get; set; } = null;
        public List<AIPlusFilingSuggestionSuggestionCategoriesField> Fields { get; set; }
    }
    public class AIPlusFilingSuggestionSuggestionCategoriesField
    {
        public string? Id { get; set; } = null;
        public string Name { get; set; }
        public string? Value { get; set; } = null;
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
