namespace AIPlusBackend.Dto.Chat
{
    public class NewChatRoomRequest
    {
        public string Name { get; set; }
        public List<NewChatRoomMessage> Messages { get; set; }
    }
    public class NewChatRoomMessage {
        public string Message { get; set; }
        public bool IsHuman { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
