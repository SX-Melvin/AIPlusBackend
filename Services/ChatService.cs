using AIPlusBackend.Dto;
using AIPlusBackend.Dto.Chat;
using AIPlusBackend.Dto.Database;
using AIPlusBackend.Utils;

namespace AIPlusBackend.Services
{
    public class ChatService(CSDBUtils csdbUtils, AIPlusUtils ai)
    {
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();
        public async Task<APIResponse<NewChatRoomResponse>> NewChatRoom(NewChatRoomRequest body, long userId)
        {
            var result = new APIResponse<NewChatRoomResponse>();

            try
            {
                var data = csdbUtils.CreateChatRoom(new()
                {
                    CreatedAt = DateTime.Now,
                    Name = body.Name,
                    UserID = userId,
                });

                foreach (var item in body.Messages)
                {
                    csdbUtils.CreateChat(new()
                    {
                        CreatedAt = item.CreatedAt,
                        ChatRoomID = data.ID,
                        IsHuman = item.IsHuman,
                        Message = item.Message,
                    });
                }

                result.Data = new()
                {
                    Name = data.Name,
                    Id = data.ID,
                    UserId = data.UserID,
                };
            }
            catch(Exception ex)
            {
                _logger.Error(ex);
                result.ErrorMessage = ex.Message;
            }

            return result;
        }
        public async Task<APIResponse<List<NewChatResponse>>> NewChat(List<NewChatRequest> body, long chatID)
        {
            var result = new APIResponse<List<NewChatResponse>>()
            {
                Data = []
            };

            try
            {
                foreach (var item in body)
                {
                    var data = csdbUtils.CreateChat(new()
                    {
                        CreatedAt = item.CreatedAt,
                        ChatRoomID = chatID,
                        IsHuman = item.IsHuman,
                        Message = item.Message,
                    });

                    result.Data.Add(new()
                    {
                        Message = data.Message,
                        ChatID = data.ChatRoomID,
                        CreatedAt = data.CreatedAt,
                        IsHuman = data.IsHuman,
                        ID = data.ID,
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
        public async Task<APIResponse<Pagination<ChatRoom>>> GetChatRoomsByUserId(long userId, int pageNumber, int pageSize)
        {
            var result = new APIResponse<Pagination<ChatRoom>>()
            {
                Data = new()
            };

            try
            {
                var data = csdbUtils.GetChatRoomsByUser(userId, pageNumber, pageSize);
                result.Data = data;
            }
            catch(Exception ex)
            {
                _logger.Error(ex);
                result.ErrorMessage = ex.Message;
            }

            return result;
        }
        public async Task<APIResponse<Pagination<Chat>>> GetChatsByChatId(long chatId, int pageNumber, int pageSize)
        {
            var result = new APIResponse<Pagination<Chat>>()
            {
                Data = new()
            };

            try
            {
                var data = csdbUtils.GetChatsByChatId(chatId, pageNumber, pageSize);
                result.Data = data;
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
