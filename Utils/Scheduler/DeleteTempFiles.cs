namespace AIPlusBackend.Utils.Scheduler
{
    public class DeleteTempFiles
    {
        private readonly CSDBUtils _dbUtils;
        private readonly AIPlusUtils _aiPlus;
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();
        public DeleteTempFiles(CSDBUtils dbUtils, AIPlusUtils aIPlusUtils)
        {
            _dbUtils = dbUtils;
            _aiPlus = aIPlusUtils;  
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
                        await _aiPlus.DeleteFile(item.WorkspaceID, item.JobId, token);
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
