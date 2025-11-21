using System.ComponentModel.DataAnnotations.Schema;

namespace AIPlusBackend.Dto.Database
{
    [Table("AIPlus_Chats")]
    public class Chat
    {
        public long ID { get; set; }
        public long ChatID { get; set; }
        public string Message { get; set; }
        public bool IsHuman { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
