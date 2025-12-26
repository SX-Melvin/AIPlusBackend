using AIPlusBackend.Configurations;
using AIPlusBackend.Dto;
using AIPlusBackend.Dto.AIPlus;
using AIPlusBackend.Utils;
using AIPlusBackend.Utils.Common;
using Microsoft.Extensions.Options;
using System.Linq;

namespace AIPlusBackend.Services
{
    public class ProjectService(CSDBUtils csdb, IOptions<AIPlusConfiguration> config)
    {
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();
        public async Task<APIResponse<NewProjectResponse>> NewProject(NewProjectRequest body)
        {
            var result = new APIResponse<NewProjectResponse>();

            try
            {
                var data = csdb.CreateProject(new()
                {
                    Title = body.Title,
                    UserID = body.UserId
                });
                result.Data = new()
                {
                    Title = data.Title,
                    UserId = data.UserID
                };
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
                result.ErrorMessage = ex.Message;
            }

            return result;
        }
        
        public async Task<APIResponse<Pagination<GetProjectByUserIdResponse>>> GetProjectByUserId(long userId, int pageNumber, int pageSize)
        {
            var result = new APIResponse<Pagination<GetProjectByUserIdResponse>>();

            try
            {
                
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
                result.ErrorMessage = ex.Message;
            }

            return result;
        }
    }
}
