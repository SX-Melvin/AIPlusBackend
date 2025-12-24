namespace AIPlusBackend.Dto.Database
{
    public class DTreeFullPath
    {
        public long ParentID { get; set; }
        public string Name { get; set; }
        public long DataID { get; set; }
        public string FullPath { get; set; }
    }
}
