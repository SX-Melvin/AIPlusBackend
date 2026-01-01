using AIPlusBackend.Dto;
using AIPlusBackend.Dto.AIPlus;
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
                        CAST(p.Name + ' : ' + c.FullPath AS NVARCHAR(MAX)) AS FullPath
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
        public Pagination<ProjectRoom> GetProjectRoomsByUser(long userId, int pageNumber, int pageSize)
        {
            var query = _context.ProjectRooms
            .Where(x => x.UserID == userId)
            .OrderByDescending(c => c.CreatedAt);

            int totalCount = query.Count();

            var items = query
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            return new Pagination<ProjectRoom>
            {
                Data = items,
                TotalPage = (int)Math.Ceiling((double)totalCount / pageSize),
                TotalRecords = totalCount,
                HasNext = pageNumber * pageSize < totalCount,
                PageNumber = pageNumber,
                PageSize = pageSize
            };
        }
        public ProjectRoom? UpdateProjectRoomById(long id, UpdateProjectByIdRequest data)
        {
            var projectRoom = _context.ProjectRooms.FirstOrDefault(x => x.ID == id);
            if(projectRoom != null)
            {
                if(data.Title != null)
                {
                    projectRoom.Title = data.Title;
                }
                projectRoom.SessionID = data.SessionID;
                _context.SaveChanges();
            }

            return projectRoom;
        }
        public ProjectRoom CreateProject(ProjectRoom data)
        {
            _context.ProjectRooms.Add(data);
            _context.SaveChanges();
            return data;
        }
        public bool DeleteProject(int ID)
        {
            var response = false;
            var data = _context.ProjectRooms.FirstOrDefault(x => x.ID == ID);
            if(data != null)
            {
                _context.ProjectRooms.Remove(data);
                _context.SaveChanges();
                response = true;
            }
            return response;
        }
    }
}
