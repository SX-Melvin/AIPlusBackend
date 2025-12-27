using AIPlusBackend.Dto.Database;
using Newtonsoft.Json;

namespace AIPlusBackend.Dto.AIPlus
{
    public class NewProjectResponse
    {
        public long ID { get; set; }
        public long UserId { get; set; }
        public string Title { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
