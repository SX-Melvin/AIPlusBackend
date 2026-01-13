using System.ComponentModel.DataAnnotations.Schema;

namespace AIPlusBackend.Dto.Database
{
    [Table("CatRegionMap")]
    public class CatRegionMap
    {
        public long CatID { get; set; }
        public string CatName { get; set; }
        public string AttrName { get; set; }
        public string RegionName { get; set; }
    }
}
