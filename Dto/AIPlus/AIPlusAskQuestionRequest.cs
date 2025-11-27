using Newtonsoft.Json;

namespace AIPlusBackend.Dto.AIPlus
{
    public class AIPlusAskQuestionRequest
    {
        [JsonProperty("userId")]
        public long UserId { get; set; }

        [JsonProperty("topK")]
        public int TopK { get; set; }

        [JsonProperty("enableTools")]
        public bool EnableTools { get; set; }

        [JsonProperty("messages")]
        public List<AIPlusAskQuestionMessage> Messages { get; set; }
    }
    public class AIPlusAskQuestionMessage
    {
        [JsonProperty("role")]
        public string Role { get; set; }

        [JsonProperty("content")]
        public string Content { get; set; }
    }
}
