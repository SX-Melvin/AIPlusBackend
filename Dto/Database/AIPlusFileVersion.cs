using System.ComponentModel.DataAnnotations.Schema;

namespace AIPlusBackend.Dto.Database
{
    [Table("AIPlus_FileVersions")]
    public class AIPlusFileVersion
    {
        public long ParentID { get; set; }
        public long ID { get; set; }
        public string Name { get; set; }
        public DateTime CreatedAt { get; set; }
        public int VerNum { get; set; }
        public long NodeID { get; set; }
    }
}
