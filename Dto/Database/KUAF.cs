namespace AIPlusBackend.Dto.Database
{
    public class KUAF
    {
        public long ID { get; set; }
        public long? GroupID { get; set; }
        public long Type { get; set; }
        public string Name { get; set; }
        public byte? Deleted { get; set; } = 1;
    }
}
