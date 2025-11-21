using AIPlusBackend.Dto;
using AIPlusBackend.Dto.CSDB;
using AIPlusBackend.Dto.TempFile;
using AIPlusBackend.Utils;
using AIPlusBackend.Utils.Common;

namespace AIPlusBackend.Services
{
    public class TempFileService(CSDBUtils csdbUtils)
    {
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();
        public async Task<APIResponse<AddTempFileScheduleResponse>> AddTempFileSchedule(AddTempFileScheduleRequest body)
        {
            var result = new APIResponse<AddTempFileScheduleResponse>();

            try
            {
                var data = csdbUtils.CreateTempFile(new()
                {
                    DeleteAt = DateTime.Now.AddMinutes(body.MinutesTillExpired),
                    JobId = body.JobId,
                    WorkspaceID = body.WorkspaceId
                });

                result.Data = new()
                {
                    WorkspaceID = data.WorkspaceID,
                    JobId = data.JobId,
                    DeleteAt = data.DeleteAt,
                    ID = data.ID
                };
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
