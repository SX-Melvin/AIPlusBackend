using AIPlusBackend.Dto.AIPlus;
using AIPlusBackend.Services;
using AIPlusBackend.Utils;
using Microsoft.AspNetCore.Mvc;
using System.Text;
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
        [ApiExplorerSettings(IgnoreApi = true)]
        public async Task AskByWorkspace(int ID, [FromBody] AskByWorkspaceRequest body)
        {
            var token = Request.Headers["Authorization"].ToString().Replace("Bearer ", "", StringComparison.OrdinalIgnoreCase).Trim();
            HttpContext.Features.Get<Microsoft.AspNetCore.Http.Features.IHttpResponseBodyFeature>()?.DisableBuffering();
            Response.ContentType = "text/event-stream";
            Response.Headers["Cache-Control"] = "no-cache";
            Response.Headers["X-Accel-Buffering"] = "no";
            Response.Headers["Connection"] = "keep-alive";

            await foreach (var chunk in utils.AskByWorkspace(ID, body, token))
            {
                var bytes = Encoding.UTF8.GetBytes($"data: {chunk}\n\n");
                await Response.Body.WriteAsync(bytes);
                await Response.Body.FlushAsync();
            }
        }
    }
}
