using AIPlusBackend.Configurations;
using AIPlusBackend.Dto;
using AIPlusBackend.Dto.AIPlus;
using AIPlusBackend.Dto.Database;
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
                    CreatedAt = data.CreatedAt,
                    ID = data.ID,
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
        
        public async Task<APIResponse<Pagination<ProjectRoom>>> GetProjectByUserId(long userId, int pageNumber = 1, int pageSize = 20)
        {
            var result = new APIResponse<Pagination<ProjectRoom>>();

            try
            {
                result.Data = csdb.GetProjectRoomsByUser(userId, pageNumber, pageSize);
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
                result.ErrorMessage = ex.Message;
            }

            return result;
        }
        public async Task<APIResponse<ProjectRoom?>> UpdateProjectById(long id, UpdateProjectByIdRequest data)
        {
            var result = new APIResponse<ProjectRoom?>();

            try
            {
                result.Data = csdb.UpdateProjectRoomById(id, data);
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
