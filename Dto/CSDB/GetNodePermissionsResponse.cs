namespace AIPlusBackend.Dto.CSDB
{
    public class GetNodePermissionsResponse
    {
        public long NodeId { get; set; }
        public long UserId { get; set; }
        public string? Permission { get; set; } = null;
    }
}
