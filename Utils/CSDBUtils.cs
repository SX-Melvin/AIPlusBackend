using AIPlusBackend.Dto;
using AIPlusBackend.Dto.Database;
using Microsoft.EntityFrameworkCore;

namespace AIPlusBackend.Utils
{
    public class CSDBUtils(AppDbContext context)
    {
        private readonly AppDbContext _context = context;
        
        public async Task<List<DTreeACL>> GetDTreeACLsByDataIDs(List<long> nodeIds)
        {
            return await Task.FromResult(_context.DTreeACLs.Where(acl => nodeIds.Contains(acl.DataID)).ToList());
        }
        public string? GetNodeFullPath(long nodeId)
        {
            return _context.Set<DTreeFullPath>()
            .FromSql($"""
                WITH PathCTE AS (
                    SELECT
                        ParentID,
                        DataID,
                        Name,
                        CAST(Name AS NVARCHAR(MAX)) AS FullPath
                    FROM DTreeCore
                    WHERE DataID = {nodeId}

                    UNION ALL

                    -- Walk UP to the root
                    SELECT
                        p.ParentID,
                        p.DataID,
                        p.Name,
                        CAST(p.Name + ' / ' + c.FullPath AS NVARCHAR(MAX)) AS FullPath
                    FROM DTreeCore p
                    JOIN PathCTE c
                        ON p.DataID = c.ParentID
                )
                SELECT TOP 1 *
                FROM PathCTE
                WHERE DataID = 2000;
            """)
            .AsNoTracking().AsEnumerable().FirstOrDefault()?.FullPath;
        }
        public KUAF? GetKUAFByID(long userId)
        {
            return _context.KUAFs.FirstOrDefault(x => x.ID == userId);
        }
        public AIPlusTempFile? CreateTempFile(AIPlusTempFile data)
        {
            _context.AIPlusTempFiles.Add(data);
            _context.SaveChanges();
            return data;
        }
        public List<AIPlusTempFile>? GetExpiredTempFiles()
        {
            return _context.AIPlusTempFiles.Where(x => x.DeleteAt <= DateTime.Now).ToList();
        }
        public bool DeleteTempFile(long id)
        {
            var entity = _context.AIPlusTempFiles.FirstOrDefault(x => x.ID == id);

            if (entity == null)
                return false;

            _context.AIPlusTempFiles.Remove(entity);
            _context.SaveChanges();

            return true;
        }
        public ChatRoom CreateChatRoom(ChatRoom data)
        {
            _context.ChatRooms.Add(data);
            _context.SaveChanges();
            return data;
        }
        public void DeleteChatRoom(long id)
        {
            _context.ChatRooms.Where(x => x.ID == id).ExecuteDelete();
            _context.Chats.Where(x => x.ChatRoomID == id).ExecuteDelete();
        }
        public Pagination<ChatRoom> GetChatRoomsByUser(long userId, int pageNumber, int pageSize)
        {
            var query = _context.ChatRooms
        .Where(x => x.UserID == userId)
        .OrderByDescending(c => c.CreatedAt);

            int totalCount = query.Count();

            var items = query
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            return new Pagination<ChatRoom>
            {
                Data = items,
                TotalPage = (int)Math.Ceiling((double)totalCount / pageSize),
                TotalRecords = totalCount,
                HasNext = pageNumber * pageSize < totalCount,
                PageNumber = pageNumber,
                PageSize = pageSize
            };
        }
        public Pagination<Chat> GetChatsByChatId(long chatId, int pageNumber, int pageSize)
        {
            var query = _context.Chats
                .Where(x => x.ChatRoomID == chatId)
                .OrderByDescending(c => c.CreatedAt);

            int totalCount = query.Count();

            var items = query
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            return new Pagination<Chat>
            {
                Data = items,
                TotalRecords = totalCount,
                HasNext = pageNumber * pageSize < totalCount,
                PageNumber = pageNumber,
                TotalPage = (int)Math.Ceiling((double)totalCount / pageSize),
                PageSize = pageSize
            };
        }
        public Pagination<Chat> GetChatsByChatIdAscending(long chatId, int pageNumber, int pageSize)
        {
            var query = _context.Chats
                .Where(x => x.ChatRoomID == chatId)
                .OrderBy(c => c.CreatedAt);

            int totalCount = query.Count();

            var items = query
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            return new Pagination<Chat>
            {
                Data = items,
                TotalRecords = totalCount,
                HasNext = pageNumber * pageSize < totalCount,
                PageNumber = pageNumber,
                TotalPage = (int)Math.Ceiling((double)totalCount / pageSize),
                PageSize = pageSize
            };
        }
        public Chat CreateChat(Chat data)
        {
            _context.Chats.Add(data);
            _context.SaveChanges();
            return data;
        }
    }
}
