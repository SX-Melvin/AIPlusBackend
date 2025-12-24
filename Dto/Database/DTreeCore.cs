using System.ComponentModel.DataAnnotations.Schema;

namespace AIPlusBackend.Dto.Database
{
    [Table("DTreeCore")]
    public class DTreeCore
    {
        public long ParentID { get; set; }
        public long DataID { get; set; }
        public string Name { get; set; }
    }
}
