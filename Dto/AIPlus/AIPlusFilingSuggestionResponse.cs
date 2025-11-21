using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;

namespace AIPlusBackend.Dto.AIPlus
{
    public class AIPlusFilingSuggestionResponse
    {
        public List<AIPlusAskQuestionResponse> ActualResponse { get; set; }
        public List<long> NodeIDs { get; set; }
    }
}
