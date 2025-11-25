using AIPlusBackend.Dto.AIPlus;
using Azure.Core.Pipeline;

namespace AIPlusBackend.Dto.Chat
{
    public class AskAgentRequest
    {
        public long? RoomId { get; set; } = null;
        public string AIPlusToken { get; set; }
        public AIPlusAskQuestionRequest Data { get; set; }
    }
}
