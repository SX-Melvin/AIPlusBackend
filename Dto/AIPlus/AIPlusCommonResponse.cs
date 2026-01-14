using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace AIPlusBackend.Dto.AIPlus
{
    public class AIPlusCommonResponse
    {
        [JsonProperty("error")]
        public string? Error { get; set; } = null;
    }
}
