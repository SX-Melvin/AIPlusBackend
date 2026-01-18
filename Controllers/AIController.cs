using AIPlusBackend.Configurations;
using AIPlusBackend.Dto;
using AIPlusBackend.Dto.AIPlus;
using AIPlusBackend.Services;
using AIPlusBackend.Utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Text;
using System.Threading;

namespace AIPlusBackend.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class AIController(AIPlusService service, IOptions<AIPlusConfiguration> config) : ControllerBase
    {
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();

        [HttpPost("Login")]
        public async Task<APIResponse<AIPlusLoginResponse>> Login()
        {
            var result = new APIResponse<AIPlusLoginResponse>();
            try
            {
                return await service.Login();
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }

        [HttpPost("Filing/Suggestion/{userId}")]
        public async Task<APIResponse<AIPlusGetFilingSuggestionResponse>> FilingSuggestion(IFormFile file, long userId)
        {
            var result = new APIResponse<AIPlusGetFilingSuggestionResponse>();
            try
            {
                var filePath = Path.Combine(Path.GetTempPath(), file.FileName);
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }
                return await service.FilingSuggestion(filePath, userId);
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }

        [HttpPost("Ingest/{nodeID}")]
        public async Task<APIResponse<bool>> IngestDocument(long nodeID)
        {
            var result = new APIResponse<bool>();
            try
            {
                return await service.IngestDocument(nodeID);
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
    }
}
