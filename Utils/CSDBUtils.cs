using AIPlusBackend.Dto;
using AIPlusBackend.Dto.Database;

namespace AIPlusBackend.Utils
{
    public class CSDBUtils(AppDbContext context)
    {
        private readonly AppDbContext _context = context;
        
        public async Task<List<DTreeACL>> GetDTreeACLsByDataIDs(List<long> nodeIds)
        {
            return await Task.FromResult(_context.DTreeACLs.Where(acl => nodeIds.Contains(acl.DataID)).ToList());
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

    }
}
