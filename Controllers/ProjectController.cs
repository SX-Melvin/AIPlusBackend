using AIPlusBackend.Configurations;
using AIPlusBackend.Dto;
using AIPlusBackend.Dto.AIPlus;
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
    public class ProjectController(ProjectService service) : ControllerBase
    {
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();

        [HttpPost("New")]
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
        public async Task<APIResponse<Pagination<GetProjectByUserIdResponse>>> GetProjectsByUserId([FromQuery] int pageNumber, [FromQuery] int pageSize, long userId)
        {
            var result = new APIResponse<Pagination<GetProjectByUserIdResponse>>();
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
    }
}
