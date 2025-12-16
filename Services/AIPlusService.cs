using AIPlusBackend.Configurations;
using AIPlusBackend.Dto;
using AIPlusBackend.Dto.AIPlus;
using AIPlusBackend.Utils;
using AIPlusBackend.Utils.Common;
using Microsoft.Extensions.Options;

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
                var wId = Guid.NewGuid().ToString();
                var token = utils.Login().Result.Token;
                var jsonIngested = false;
                var suggestFileIngested = false;

                var jsonFile = await utils.UploadFile(wId, Path.Combine(config.Value.FolderStructureJSONPath, "folders_structure.json"), "", token);
                var suggestFile = await utils.UploadFile(wId, filePath, "", token);

                while(!jsonIngested || !suggestFileIngested)
                {
                    if(!jsonIngested)
                    {
                        var res = await utils.GetJob(jsonFile.JobId, token);
                        if(res.Status == "completed")
                        {
                            jsonIngested = true;
                        } 
                        else if(res.Status == "failed" || res.Error != null)
                        {
                            result.ErrorMessage = res.Error;
                            break;
                        }
                    }

                    if(!suggestFileIngested)
                    {
                        var res = await utils.GetJob(jsonFile.JobId, token);
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

                if(result.ErrorMessage != null)
                {
                    return result;
                }

                var response = await utils.GetFilingSuggestion(wId, token);
                result.Data = response;

                csdb.CreateTempFile(new()
                {
                    DeleteAt = DateTime.Now.AddMinutes(0),
                    JobId = jsonFile.JobId,
                    WorkspaceID = wId
                });
                csdb.CreateTempFile(new()
                {
                    DeleteAt = DateTime.Now.AddMinutes(0),
                    JobId = suggestFile.JobId,
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
