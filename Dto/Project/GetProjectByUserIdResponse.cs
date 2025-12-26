using Newtonsoft.Json;

namespace AIPlusBackend.Dto.AIPlus
{
    public class GetProjectByUserIdResponse
    {
        [JsonProperty("id")]
        public int ID { get; set; }
        
        [JsonProperty("userId")]
        public long UserId { get; set; }

        [JsonProperty("title")]
        public string Title { get; set; }
        
        [JsonProperty("createdAt")]
        public DateTime CreatedAt { get; set; }
    }
}
