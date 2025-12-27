using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AIPlusBackend.Dto.Database
{
    [Table("AIPlus_ProjectRooms")]
    public class ProjectRoom
    {
        [Key]
        public int ID { get; set; }
        public long UserID { get; set; }
        public string Title { get; set; }
        public string? SessionID { get; set; } = null;
        public DateTime CreatedAt { get; set; }
    }
}
