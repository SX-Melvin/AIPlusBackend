using AIPlusBackend.Dto;
using AIPlusBackend.Dto.CSDB;
using AIPlusBackend.Utils;
using AIPlusBackend.Utils.Common;

namespace AIPlusBackend.Services
{
    public class CSService(CSDBUtils csdbUtils)
    {
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();
        public async Task<APIResponse<List<GetNodePermissionsResponse>>> GetPermissions(List<GetNodePermissionsRequest> body)
        {
            APIResponse<List<GetNodePermissionsResponse>> result = new() { Data = [] };
            
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

                    result.Data.Add(new()
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
                result.ErrorMessage = ex.Message;
            }

            return result;
        }
        public async Task<APIResponse<List<GetNodesResponse>>> GetNodes(List<long> body)
        {
            APIResponse<List<GetNodesResponse>> result = new() { Data = [] };

            try
            {
                var nodes = await csdbUtils.GetDTreesByDataIDs(body);
                
                foreach (var item in nodes)
                {
                    result.Data.Add(new()
                    {
                        NodeId = item.DataID,
                        Name = item.Name
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
    }
}
