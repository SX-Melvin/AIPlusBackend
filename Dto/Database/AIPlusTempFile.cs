using System.ComponentModel.DataAnnotations.Schema;

namespace AIPlusBackend.Dto.Database
{
    [Table("AIPlus_TempFile")]
    public class AIPlusTempFile
    {
        public long ID { get; set; }
        public string WorkspaceID { get; set; }
        public string JobId { get; set; }
        public DateTime DeleteAt { get; set; }
    }
}
