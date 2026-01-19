using Newtonsoft.Json;

namespace AIPlusBackend.Dto.FileVersion
{
    public class AddFileVersionRequest
    {
        [JsonProperty("nodeId")]
        public long NodeID { get; set;}
        
        [JsonProperty("name")]
        public string Name { get; set;}
        
        [JsonProperty("parentId")]
        public long ParentID { get; set;}

        [JsonProperty("verNum")]
        public int? VerNum { get; set; } = null;
    }
}
