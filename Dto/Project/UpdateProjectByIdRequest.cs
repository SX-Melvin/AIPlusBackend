using Newtonsoft.Json;

namespace AIPlusBackend.Dto.AIPlus
{
    public class UpdateProjectByIdRequest
    {
        [JsonProperty("sessionId")]
        public string SessionID { get; set; }

        [JsonProperty("title")]
        public string? Title { get; set; } = null;
    }
}
