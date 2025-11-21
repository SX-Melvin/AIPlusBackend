namespace AIPlusBackend.Dto.AIPlus
{
    public class AIPlusAskQuestionResponse
    {
        public string? Type { get; set; } = null;
        public string Delta { get; set; }
        public int TokensUsed { get; set; }
        public int Iterations { get; set; }
        public string Message { get; set; }
    }
}
