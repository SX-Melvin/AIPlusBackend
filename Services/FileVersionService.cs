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
        public async Task<APIResponse<AIPlusFileVersion?>> AddFileVersion(AddFileVersionRequest body)
        {
            var result = new APIResponse<AIPlusFileVersion?>();

            try
            {
                if(body.VerNum == null)
                {
                    var latestVersion = csdbUtils.GetDTreeByDataID(body.NodeID);
                    if(latestVersion != null && latestVersion.VersionNum.HasValue)
                    {
                        body.VerNum = (int)latestVersion.VersionNum;
                    }
                }

                var data = csdbUtils.CreateFileVersion(new()
                {
                    CreatedAt = DateTime.UtcNow,
                    Name = body.Name,
                    NodeID = body.NodeID,
                    ParentID = body.ParentID,
                    VerNum = body.VerNum ?? 1
                });

                result.Data = data;
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
