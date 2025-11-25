using AIPlusBackend.Dto;
using AIPlusBackend.Dto.AIPlus;
using AIPlusBackend.Dto.Chat;
using AIPlusBackend.Dto.Database;
using AIPlusBackend.Services;
using AIPlusBackend.Utils;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace AIPlusBackend.Controllers
{
    [ApiController]
    [Route("Api/[controller]")]
    public class ChatController(ChatService service, AIPlusUtils utils, CSDBUtils csdb) : ControllerBase
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

        [HttpPost("Room/{chatId}/Chat")]
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
        [HttpDelete("Room/{roomId}")]
        public async Task<APIResponse<bool>> DeleteChatRoom(long roomId)
        {
            var result = new APIResponse<bool>();

            try
            {
                return await service.DeleteChatRoom(roomId);
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }

        [HttpPost("User/{userId}/Ask")]
        public async Task AskQuestion([FromBody] AskAgentRequest body, long userId)
        {
            Response.Headers.Append("Cache-Control", "no-cache");
            Response.Headers.Append("Content-Type", "text/event-stream");
            Response.Headers.Append("X-Accel-Buffering", "no");

            var userMessage = body.Data.Messages[0];
            DateTime now = DateTime.Now;
            List<AIPlusAskQuestionResponse> botResponses = [];

            // GET REST OF THE CHAT BY ROOM ID
            if(body.RoomId != null)
            {
                var previousChats = csdb.GetChatsByChatId(body.RoomId.Value, 1, 99999);
                foreach (var item in previousChats.Data)
                {
                    body.Data.Messages.Insert(0, new()
                    {
                        Content = item.Message,
                        Role = item.IsHuman ? "user" : "assistant"
                    });
                }
            }

            // CREATE ROOM ID IF NOT EXIST
            if(body.RoomId == null)
            {
                var chatRoom = csdb.CreateChatRoom(new()
                {
                    CreatedAt = DateTime.Now,
                    Name = userMessage.Content,
                    UserID = userId
                });

                body.RoomId = chatRoom.ID;
            }

            await foreach (var chunk in utils.AskQuestion(body.Data, body.AIPlusToken))
            {
                var json = JsonConvert.SerializeObject(chunk);
                botResponses.Add(chunk);
                await Response.WriteAsync($"data: {json}\n\n");
                await Response.Body.FlushAsync();
            }

            // STORE CHAT IN DB
            if (body.RoomId != null)
            {
                await Response.WriteAsync($"data: {JsonConvert.SerializeObject(new AIPlusAskQuestionResponse()
                {
                    AdditionalData = new AIPlusAskQuestionAdditionalData()
                    {
                        Type = "chat_room_id",
                        Data = body.RoomId.Value.ToString()
                    },
                })}\n\n");
                await Response.Body.FlushAsync();

                string botResponse = "";

                csdb.CreateChat(new()
                {
                    ChatRoomID = body.RoomId.Value,
                    IsHuman = true,
                    CreatedAt = now,
                    Message = userMessage.Content
                });

                foreach (var item in botResponses)
                {
                    if(string.Equals(item.Type, "content", StringComparison.OrdinalIgnoreCase))
                    {
                        botResponse += item.Delta;
                    }
                }

                csdb.CreateChat(new()
                {
                    ChatRoomID = body.RoomId.Value,
                    IsHuman = false,
                    CreatedAt = DateTime.Now,
                    Message = botResponse
                });
            }
        }
    }
}
