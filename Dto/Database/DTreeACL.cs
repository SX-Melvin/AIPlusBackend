using System.ComponentModel.DataAnnotations.Schema;

namespace AIPlusBackend.Dto.Database
{
    [Table("DTreeACL")]
    public class DTreeACL
    {
        public long OwnerID { get; set; }
        public long ParentID { get; set; }
        public long DataID { get; set; }
        public long RightID { get; set; }
        public int Permissions { get; set; }
        public byte ACLType { get; set; }
        public byte See { get; set; }
    }
}
