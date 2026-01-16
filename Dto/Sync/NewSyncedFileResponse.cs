using Newtonsoft.Json;

namespace AIPlusBackend.Dto.AIPlus
{
    public class NewSyncedFileResponse
    {
        [JsonProperty("nodeId")]
        public long NodeID { get; set; }
        
        [JsonProperty("jobId")]
        public string JobID { get; set; }
        
        [JsonProperty("workspaceId")]
        public string WorkspaceID { get; set; }
    }
}
