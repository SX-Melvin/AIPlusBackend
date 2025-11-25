using Newtonsoft.Json;

namespace AIPlusBackend.Dto.AIPlus
{
    public class AIPlusAskQuestionResponse
    {
        [JsonProperty("type")]
        public string? Type { get; set; } = null;
        
        [JsonProperty("delta")]
        public string Delta { get; set; }
        
        [JsonProperty("tokenUsed")]
        public int TokensUsed { get; set; }
        
        [JsonProperty("iterations")]
        public int Iterations { get; set; }
        
        [JsonProperty("message")]
        public string Message { get; set; }

        // OUR CUSTOM FIELDS
        [JsonProperty("additional_data")]
        public AIPlusAskQuestionAdditionalData AdditionalData { get; set; }
    }
    public class AIPlusAskQuestionAdditionalData
    {
        [JsonProperty("type")]
        public string? Type { get; set; } = null;
        
        [JsonProperty("data")]
        public string Data { get; set; }
        
    }
}
