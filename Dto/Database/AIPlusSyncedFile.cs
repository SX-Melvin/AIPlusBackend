using System.ComponentModel.DataAnnotations.Schema;

namespace AIPlusBackend.Dto.Database
{
    [Table("AIPlus_SyncedFiles")]
    public class AIPlusSyncedFile
    {
        public int ID { get; set; }
        public string JobID { get; set; }
        public string Name { get; set; }
        public long NodeID { get; set; }
        public long ParentID { get; set; }
        public string WorkspaceID { get; set; }
        public string Status { get; set; }
        public string? Error { get; set; } = null;
        public int VerNum { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
