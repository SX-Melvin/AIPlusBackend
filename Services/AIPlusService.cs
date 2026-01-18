using AIPlusBackend.Configurations;
using AIPlusBackend.Dto;
using AIPlusBackend.Dto.AIPlus;
using AIPlusBackend.Utils;
using AIPlusBackend.Utils.Common;
using Microsoft.Extensions.Options;
using System.Linq;
using System.Security.Cryptography;

namespace AIPlusBackend.Services
{
    public class AIPlusService(AIPlusUtils utils, CSDBUtils csdb, OTCSUtils otcs, IOptions<AIPlusConfiguration> config)
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
        public async Task<APIResponse<AIPlusSearchForFilesResponse>> SearchForFiles(string fileName)
        {
            var result = new APIResponse<AIPlusSearchForFilesResponse>();

            try
            {
                var token = await utils.Login();
                var data = await utils.SearchForFiles(fileName, config.Value.WorkspaceId, token.Token);
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
                var wId = "smart-filing4";
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

                    foreach(var category in suggestion.Categories)
                    {
                        var cat = csdb.GetCatRegionMapByName(category.Name);
                        if(cat != null)
                        {
                            category.Id = cat.CatID;

                            foreach (var field in category.Fields)
                            {
                                var f = csdb.GetCatRegionMapsByIdAndAttrName(cat.CatID, field.Name);
                                if(f != null)
                                {
                                    field.Id = f.RegionName.Replace("Attr_", "");
                                }
                            }
                        }
                    }


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
        public async Task<APIResponse<bool>> IngestDocument(long nodeID)
        {
            var result = new APIResponse<bool>()
            {
                Data = false
            };

            try
            {
                var node = csdb.GetDTreeByDataID(nodeID);
                if(node != null)
                {
                    var ticket = otcs.GetTicket();
                    var file = otcs.DownloadFile(nodeID, (int)node.VersionNum.Value, node.Name, ticket);
                    if(file != null)
                    {
                        var token = utils.Login().Result.Token;
                        var suggestFileIngested = false;

                        var suggestFile = await utils.UploadFile(config.Value.WorkspaceId, file, "", token);

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

                        result.Data = suggestFileIngested;
                    }
                }
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
