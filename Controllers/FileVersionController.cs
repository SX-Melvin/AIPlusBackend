using AIPlusBackend.Dto;
using AIPlusBackend.Dto.AIPlus;
using AIPlusBackend.Dto.CSDB;
using AIPlusBackend.Dto.FileVersion;
using AIPlusBackend.Dto.Database;
using AIPlusBackend.Services;
using AIPlusBackend.Utils;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Threading;

namespace AIPlusBackend.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class FileVersionController(FileVersionService service) : ControllerBase
    {
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();

        [HttpPost("NodeID/{nodeId}")]
        public async Task<APIResponse<AIPlusFileVersion?>> AddFileVersion(long nodeId)
        {
            var result = new APIResponse<AIPlusFileVersion?>();

            try
            {
                return await service.AddFileVersion(nodeId);
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }

        [HttpDelete("NodeID/{nodeID}")]
        public async Task<APIResponse<bool>> DeleteFileVersion(long nodeID)
        {
            var result = new APIResponse<bool>();

            try
            {
                return await service.DeleteFileVersion(nodeID);
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
    }
}
