using AIPlusBackend.Dto.CSDB;
using AIPlusBackend.Utils;
using AIPlusBackend.Utils.Common;

namespace AIPlusBackend.Services
{
    public class CSService(CSDBUtils csdbUtils)
    {
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();
        public async Task<List<GetNodePermissionsResponse>> GetPermissions(List<GetNodePermissionsRequest> body)
        {
            var result = new List<GetNodePermissionsResponse>();

            try
            {
                var acls = await csdbUtils.GetDTreeACLsByDataIDs([.. body.Select(x => x.NodeId)]);
                
                foreach (var item in body)
                {
                    result.Add(new()
                    {
                        NodeId = item.NodeId,
                        UserId = item.UserId,
                        Permission = MapUserPermission.GetPermissionFromACL(acls, item.UserId)
                    });
                }
            }
            catch(Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
    }
}
