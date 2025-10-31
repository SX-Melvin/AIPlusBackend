using AIPlusBackend.Dto.AIPlus;
using AIPlusBackend.Utils;
using System.Security.AccessControl;

namespace AIPlusBackend.Services
{
    public class AIPlusService(AIPlusUtils utils)
    {
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();
        public async Task<AIPlusLoginResponse> Login()
        {
            var result = new AIPlusLoginResponse();

            try
            {
                return await utils.Login();
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
    }
}
