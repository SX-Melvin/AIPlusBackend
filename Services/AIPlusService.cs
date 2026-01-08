using AIPlusBackend.Configurations;
using AIPlusBackend.Dto;
using AIPlusBackend.Dto.AIPlus;
using AIPlusBackend.Utils;
using AIPlusBackend.Utils.Common;
using Microsoft.Extensions.Options;
using System.Linq;

namespace AIPlusBackend.Services
{
    public class AIPlusService(AIPlusUtils utils, CSDBUtils csdb, IOptions<AIPlusConfiguration> config)
    {
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();
        public async Task<APIResponse<AIPlusLoginResponse>> Login()
        {
            var result = new APIResponse<AIPlusLoginResponse>();

            try
            {
                var data = await utils.Login();
                result.Data = data;
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
                result.ErrorMessage = ex.Message;
            }

            return result;
        }
        public async Task<APIResponse<AIPlusGetFilingSuggestionResponse>> FilingSuggestion(string filePath, long userId)
        {
            var result = new APIResponse<AIPlusGetFilingSuggestionResponse>();

            try
            {
                var wId = "smart-filing";
                var token = utils.Login().Result.Token;
                var suggestFileIngested = false;

                var suggestFile = await utils.UploadFile(wId, filePath, "", token);

                while (!suggestFileIngested && suggestFile.ExistingFile == null)
                {
                    if (!suggestFileIngested)
                    {
                        var res = await utils.GetJob(suggestFile.JobId, token);
                        if (res.Status == "completed")
                        {
                            suggestFileIngested = true;
                        }
                        else if (res.Status == "failed" || res.Error != null)
                        {
                            result.ErrorMessage = res.Error;
                            break;
                        }
                    }

                    await Task.Delay(TimeSpan.FromSeconds(2));
                }

                if (result.ErrorMessage != null)
                {
                    return result;
                }

                var response = await utils.GetFilingSuggestion(wId, token, suggestFile.FileName ?? suggestFile.ExistingFile.FileName);

                for (int i = response.Suggestions.Count - 1; i >= 0; i--)
                {
                    var suggestion = response.Suggestions[i];
                    var path = csdb.GetNodeFullPath(Convert.ToInt64(suggestion.FolderId));

                    if (path == null)
                    {
                        response.Suggestions.RemoveAt(i);
                        continue;
                    }

                    suggestion.Path = path;
                }

                result.Data = response;

                csdb.CreateTempFile(new()
                {
                    DeleteAt = DateTime.Now.AddMinutes(0),
                    JobId = suggestFile.JobId ?? suggestFile.ExistingFile.JobId,
                    WorkspaceID = wId
                });
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
                result.ErrorMessage = ex.Message;
            }

            return result;
        }
    }
}
