using AIPlusBackend.Dto;
using AIPlusBackend.Dto.Database;
using AIPlusBackend.Dto.Chat;
using AIPlusBackend.Services;
using Microsoft.AspNetCore.Mvc;

namespace AIPlusBackend.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class ChatController(ChatService service) : ControllerBase
    {
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();

        [HttpPost("Room/User/{userId}")]
        public async Task<APIResponse<NewChatRoomResponse>> NewChatRoom([FromBody] NewChatRoomRequest body, long userId)
        {
            var result = new APIResponse<NewChatRoomResponse>();

            try
            {
                return await service.NewChatRoom(body, userId);
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }

        [HttpPost("New/{chatId}")]
        public async Task<APIResponse<List<NewChatResponse>>> NewChat([FromBody] List<NewChatRequest> body, long chatId)
        {
            var result = new APIResponse<List<NewChatResponse>>();

            try
            {
                return await service.NewChat(body, chatId);
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }

        [HttpGet("Room/User/{userId}")]
        public async Task<APIResponse<Pagination<ChatRoom>>> GetChat([FromQuery] int pageNumber, [FromQuery] int pageSize, long userId)
        {
            var result = new APIResponse<Pagination<ChatRoom>>();

            try
            {
                return await service.GetChatRoomsByUserId(userId, pageNumber, pageSize);
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }

        [HttpGet("Room/{chatId}/Chats")]
        public async Task<APIResponse<Pagination<Chat>>> GetChatsByChatRoomID([FromQuery] int pageNumber, [FromQuery] int pageSize, long chatId)
        {
            var result = new APIResponse<Pagination<Chat>>();

            try
            {
                return await service.GetChatsByChatId(chatId, pageNumber, pageSize);
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
    }
}
