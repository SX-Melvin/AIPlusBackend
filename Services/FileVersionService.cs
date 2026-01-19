using AIPlusBackend.Dto;
using AIPlusBackend.Dto.CSDB;
using AIPlusBackend.Dto.FileVersion;
using AIPlusBackend.Dto.TempFile;
using AIPlusBackend.Utils;
using AIPlusBackend.Dto.Database;

namespace AIPlusBackend.Services
{
    public class FileVersionService(CSDBUtils csdbUtils)
    {
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();
        public async Task<APIResponse<AIPlusFileVersion?>> AddFileVersion(long nodeId)
        {
            var result = new APIResponse<AIPlusFileVersion?>();

            try
            {
                var latestVersion = csdbUtils.GetDTreeByDataID(nodeId);
                if(latestVersion != null && latestVersion.VersionNum.HasValue)
                {
                    var verNum = (int)latestVersion.VersionNum;
                    result.Data = csdbUtils.CreateFileVersion(new()
                    {
                        CreatedAt = DateTime.UtcNow,
                        Name = latestVersion.Name,
                        NodeID = nodeId,
                        ParentID = latestVersion.ParentID,
                        VerNum = verNum
                    });
                }
            }
            catch(Exception ex)
            {
                _logger.Error(ex);
                result.ErrorMessage = ex.Message;
            }

            return result;
        }
        public async Task<APIResponse<bool>> DeleteFileVersion(long nodeID)
        {
            var result = new APIResponse<bool>();

            try
            {
                csdbUtils.DeleteFileVersionByNodeID(nodeID);
            }
            catch(Exception ex)
            {
                _logger.Error(ex);
                result.ErrorMessage = ex.Message;
            }

            return result;
        }
    }
}
