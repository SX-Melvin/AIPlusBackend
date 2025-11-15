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
            string? permission = null;

            try
            {
                var acls = await csdbUtils.GetDTreeACLsByDataIDs([.. body.Select(x => x.NodeId)]);
                
                foreach (var item in body)
                {
                    // Check if user exist
                    var kuaf = csdbUtils.GetKUAFByID(item.UserId);

                    if (kuaf != null && kuaf.Deleted == 0)
                    {
                        // Check user permission
                        permission = MapUserPermission.GetPermissionFromACL(acls, item.UserId);

                        // Check group permission
                        if (permission == null && kuaf.GroupID != null)
                        {
                            permission = MapUserPermission.GetPermissionFromACL(acls, kuaf.GroupID.Value);
                        }
                    }

                    result.Add(new()
                    {
                        NodeId = item.NodeId,
                        UserId = item.UserId,
                        Permission = permission
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
