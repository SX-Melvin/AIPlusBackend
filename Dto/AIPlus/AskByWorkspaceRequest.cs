using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace AIPlusBackend.Dto.AIPlus
{
    public class AskByWorkspaceRequest
    {
        [JsonProperty("messages")]
        public List<AskByWorkspaceRequestMessage> Messages { get; set; }
        
        [JsonProperty("topK")]
        public int TopK { get; set; }
        
        [JsonProperty("enableTools")]
        public bool EnableTools { get; set; }
    }

    public class AskByWorkspaceRequestMessage
    {
        [JsonProperty("role")]
        public string Role { get; set; }
        
        [JsonProperty("content")]
        public string Content { get; set; }
    }
}
