using Newtonsoft.Json;

namespace AIPlusBackend.Dto.AIPlus
{
    public class NewSyncedFileRequest
    {
        [JsonProperty("nodeId")]
        public long NodeID { get; set; }
        
        [JsonProperty("jobId")]
        public string JobID { get; set; }

        [JsonProperty("error")]
        public string? Error { get; set; } = null;
        
        [JsonProperty("status")]
        public string Status { get; set; }
        
        [JsonProperty("workspaceId")]
        public string WorkspaceID { get; set; }
    }
}
