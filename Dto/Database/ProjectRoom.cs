using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AIPlusBackend.Dto.Database
{
    [Table("AIPlus_ProjectRooms")]
    public class ProjectRoom
    {
        [Key]
        public long ID { get; set; }
        public long UserID { get; set; }
        public string Title { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
