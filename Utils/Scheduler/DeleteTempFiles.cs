using AIPlusBackend.Configurations;
using Microsoft.Extensions.Options;

namespace AIPlusBackend.Utils.Scheduler
{
    public class DeleteTempFiles
    {
        private readonly CSDBUtils _dbUtils;
        private readonly AIPlusConfiguration _config;
        private readonly AIPlusUtils _aiPlus;
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();
        public DeleteTempFiles(CSDBUtils dbUtils, AIPlusUtils aIPlusUtils, IOptions<AIPlusConfiguration> config)
        {
            _dbUtils = dbUtils;
            _aiPlus = aIPlusUtils;
            _config = config.Value;
        }

        public async Task CheckAndDeleteTempFiles()
        {
            try
            {
                // Loop each of the expired
                var expireds = _dbUtils.GetExpiredTempFiles();
                _logger.Info($"Found {expireds.Count} Expired Files");

                if(expireds != null && expireds.Count > 0)
                {
                    var token = _aiPlus.Login().Result.Token;
                    foreach (var item in expireds)
                    {
                        // If job id is empty, that means we need to find it from the agent API
                        if(item.JobId == null)
                        {
                            var files = await _aiPlus.SearchForFiles(item.Name, _config.WorkspaceId, token);
                            if (files != null) 
                            {
                                foreach (var file in files.Files)
                                {
                                    // TODO CONTINUE HERE
                                }
                            }
                        }

                        var deleteRes = await _aiPlus.DeleteFile(item, token);
                        _dbUtils.DeleteTempFile(item.ID);
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }
        }
    }
}
