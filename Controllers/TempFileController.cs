using AIPlusBackend.Dto;
using AIPlusBackend.Dto.AIPlus;
using AIPlusBackend.Dto.CSDB;
using AIPlusBackend.Dto.TempFile;
using AIPlusBackend.Services;
using AIPlusBackend.Utils;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Threading;

namespace AIPlusBackend.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class TempFileController(TempFileService service) : ControllerBase
    {
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();

        [HttpPost("AddTempFileSchedule")]
        public async Task<APIResponse<AddTempFileScheduleResponse>> AddTempFileSchedule([FromBody] AddTempFileScheduleRequest body)
        {
            var result = new APIResponse<AddTempFileScheduleResponse>();

            try
            {
                return await service.AddTempFileSchedule(body);
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
    }
}
