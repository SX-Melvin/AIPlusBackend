namespace AIPlusBackend.Dto.Chat
{
    public class NewChatRequest
    {
        public string Message { get; set; }
        public DateTime CreatedAt { get; set; }
        public bool IsHuman { get; set; }
    }
}
