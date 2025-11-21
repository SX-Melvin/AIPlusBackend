using System.ComponentModel.DataAnnotations.Schema;

namespace AIPlusBackend.Dto.Database
{
    [Table("AIPlus_ChatRooms")]
    public class ChatRoom
    {
        public long ID { get; set; }
        public long UserID { get; set; }
        public string Name { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
