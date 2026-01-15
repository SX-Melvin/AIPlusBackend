using System.ComponentModel.DataAnnotations.Schema;

namespace AIPlusBackend.Dto.Database
{
    [Table("AIPlus_TempFile")]
    public class AIPlusTempFile
    {
        public long ID { get; set; }
        public long? NodeID { get; set; } = null;
        public string WorkspaceID { get; set; }
        public string? JobId { get; set; } = null;
        public string? Name { get; set; } = null;
        public DateTime? DeleteAt { get; set; } = null;
    }
}
