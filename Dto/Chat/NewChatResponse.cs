namespace AIPlusBackend.Dto.Chat
{
    public class NewChatResponse
    {
        public string Message { get; set; }
        public DateTime CreatedAt { get; set; }
        public long ChatID { get; set; }
        public long ID { get; set; }
        public bool IsHuman { get; set; }
    }
}
