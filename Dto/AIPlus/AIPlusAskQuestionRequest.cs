namespace AIPlusBackend.Dto.AIPlus
{
    public class AIPlusAskQuestionRequest
    {
        public long UserId { get; set; }
        public int TopK { get; set; }
        public bool EnableTools { get; set; }
        public List<AIPlusAskQuestionMessage> Messages { get; set; }
    }
    public class AIPlusAskQuestionMessage
    {
        public string Role { get; set; }
        public string Content { get; set; }
    }
}
