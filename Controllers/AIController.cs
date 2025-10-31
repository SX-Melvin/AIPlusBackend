using AIPlusBackend.Dto.AIPlus;
using AIPlusBackend.Services;
using AIPlusBackend.Utils;
using Microsoft.AspNetCore.Mvc;
using System.Threading;

namespace AIPlusBackend.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class AIController(AIPlusService service, AIPlusUtils utils) : ControllerBase
    {
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();

        [HttpPost("Login")]
        public async Task<AIPlusLoginResponse> Login()
        {
            var result = new AIPlusLoginResponse();
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

        [HttpPost("AskByWorkspace/{ID}")]
        public async IAsyncEnumerable<string> AskByWorkspace(int ID)
        {
            var bearerToken = Request.Headers.Authorization.FirstOrDefault();
            var token = bearerToken?.Replace("Bearer ", "", StringComparison.OrdinalIgnoreCase).Trim();

            await foreach (var chunk in utils.AskByWorkspace(ID, token))
            {
                yield return chunk;
            }
        }
    }
}
