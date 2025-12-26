using Newtonsoft.Json;

namespace AIPlusBackend.Dto.AIPlus
{
    public class NewProjectResponse
    {
        [JsonProperty("userId")]
        public long UserId { get; set; }

        [JsonProperty("title")]
        public string Title { get; set; }
    }
}
