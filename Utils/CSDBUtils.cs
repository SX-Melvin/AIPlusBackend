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
    }
}
