using AIPlusBackend.Dto;
using AIPlusBackend.Dto.AIPlus;
using AIPlusBackend.Dto.CSDB;
using AIPlusBackend.Dto.Database;
using AIPlusBackend.Dto.TempFile;
using AIPlusBackend.Utils;
using AIPlusBackend.Utils.Common;

namespace AIPlusBackend.Services
{
    public class SyncService(CSDBUtils csdbUtils)
    {
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();
        public async Task<APIResponse<AIPlusSyncedFile?>> AddSyncedFile(NewSyncedFileRequest body)
        {
            var result = new APIResponse<AIPlusSyncedFile?>();

            try
            {
                var node = csdbUtils.GetDTreeByDataID(body.NodeID);

                if (node != null)
                {
                    result.Data = csdbUtils.CreateSyncedFile(new()
                    {
                        NodeID = body.NodeID,
                        JobID = body.JobID,
                        CreatedAt = DateTime.Now,
                        Name = node.Name,
                        Error = body.Error,
                        ParentID = node.ParentID,
                        Status = body.Status,
                        VerNum = node.VersionNum != null ? (int)node.VersionNum.Value : 1,
                        WorkspaceID = body.WorkspaceID
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
        public async Task<APIResponse<List<AIPlusSyncedFile>>> GetSyncedFilesByNodeIDs(List<long> body, string wID)
        {
            var result = new APIResponse<List<AIPlusSyncedFile>>();

            try
            {
                result.Data = csdbUtils.GetSyncedFilesByNodeIDs(body, wID);
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
