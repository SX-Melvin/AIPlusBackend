using AIPlusBackend.Configurations;
using AIPlusBackend.Dto;
using AIPlusBackend.Dto.AIPlus;
using AIPlusBackend.Services;
using AIPlusBackend.Dto.Database;
using Microsoft.AspNetCore.Mvc;

namespace AIPlusBackend.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class ProjectController(ProjectService service) : ControllerBase
    {
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();

        [HttpPost("")]
        public async Task<APIResponse<NewProjectResponse>> NewProject([FromBody] NewProjectRequest body)
        {
            var result = new APIResponse<NewProjectResponse>();
            try
            {
                return await service.NewProject(body);
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
        
        [HttpGet("User/{userId}/Project")]
        public async Task<APIResponse<Pagination<ProjectRoom>>> GetProjectsByUserId(long userId, [FromQuery] int pageNumber = 1, [FromQuery] int pageSize = 25)
        {
            var result = new APIResponse<Pagination<ProjectRoom>>();
            try
            {
                return await service.GetProjectByUserId(userId, pageNumber, pageSize);
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
        
        [HttpPatch("{id}")]
        public async Task<APIResponse<ProjectRoom?>> UpdateProjectById(long id, [FromBody] UpdateProjectByIdRequest body)
        {
            var result = new APIResponse<ProjectRoom?>();
            try
            {
                return await service.UpdateProjectById(id, body);
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
    }
}
