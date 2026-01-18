using AIPlusBackend.Configurations;
using AIPlusBackend.Dto;
using AIPlusBackend.Dto.AIPlus;
using AIPlusBackend.Dto.CSDB;
using AIPlusBackend.Dto.Database;
using AIPlusBackend.Dto.TempFile;
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
    public class SyncController(SyncService service, IOptions<AIPlusConfiguration> config) : ControllerBase
    {
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();

        [HttpPost("AddSyncedFile")]
        public async Task<APIResponse<AIPlusSyncedFile?>> AddSyncedFile([FromBody] NewSyncedFileRequest body)
        {
            var result = new APIResponse<AIPlusSyncedFile?>();

            try
            {
                return await service.AddSyncedFile(body);
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
        
        [HttpPost("GetSyncedFiles")]
        public async Task<APIResponse<List<AIPlusSyncedFile>>> GetSyncedFilesByNodeIDs([FromBody] List<long> body)
        {
            var result = new APIResponse<List<AIPlusSyncedFile>>();

            try
            {
                return await service.GetSyncedFilesByNodeIDs(body, config.Value.WorkspaceId);
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
    }
}
