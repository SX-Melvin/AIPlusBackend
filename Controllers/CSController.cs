using AIPlusBackend.Dto;
using AIPlusBackend.Dto.AIPlus;
using AIPlusBackend.Dto.CSDB;
using AIPlusBackend.Services;
using AIPlusBackend.Utils;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Threading;

namespace AIPlusBackend.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class CSController(CSService service) : ControllerBase
    {
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();

        [HttpPost("GetNodePermission")]
        public async Task<List<GetNodePermissionsResponse>> Login([FromBody] List<GetNodePermissionsRequest> body)
        {
            var result = new List<GetNodePermissionsResponse>();
            try
            {
                var res = await service.GetPermissions(body);
                result = res.Data;
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
    }
}
