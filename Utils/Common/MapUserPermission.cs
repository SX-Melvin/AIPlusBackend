using AIPlusBackend.Dto.CSDB;
using AIPlusBackend.Dto.Database;

namespace AIPlusBackend.Utils.Common
{
    public static class MapUserPermission
    {
        public static string? GetPermissionFromACL(List<DTreeACL> acl, long userId)
        {
            string? permission = null;
            var aclByUser = acl.FirstOrDefault(x => x.RightID == userId);

            // User is assigned to this node
            if (aclByUser != null)
            {
                permission = GetPermission(aclByUser.See);
            }
            // User is not assigned to this node, lets check the public access instead
            else
            {
                var aclPublicAccess = acl.FirstOrDefault(x => x.RightID == -1);
                if (aclPublicAccess != null)
                {
                    permission = GetPermission(aclPublicAccess.See);
                }
            }

            return permission;
        }

        public static string? GetPermission(byte see)
        {
            if (see == 2)
            {
                return "READ";
            }
            else if (see == 3)
            {
                return "READ";
            }
            else if (see == 4)
            {
                return "WRITE";
            }

            return null;
        }
    }
}
