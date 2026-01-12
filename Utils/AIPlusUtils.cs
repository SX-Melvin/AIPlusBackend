using AIPlusBackend.Configurations;
using AIPlusBackend.Dto.AIPlus;
using AIPlusBackend.Utils.Common;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using NLog;
using RestSharp;
using System.Text;

namespace AIPlusBackend.Utils
{
    public class AIPlusUtils(IOptions<AIPlusConfiguration> config)
    {
        public RestClient Client = new(config.Value.Url);
        private readonly Logger _logger = LogManager.GetCurrentClassLogger();

        public async Task<AIPlusLoginResponse> Login()
        {
            AIPlusLoginResponse result = new();

            try
            {
                var request = new RestRequest("/auth/login", Method.Post);
                request.AddStringBody(JsonConvert.SerializeObject(new
                {
                    apiKey = config.Value.ApiKey
                }), DataFormat.Json);
                var response = await Client.ExecuteAsync<AIPlusLoginResponse>(request);
                _logger.Info("AIPlus Login Response: " + response.Content);
                return response.Data;
            }
            catch(Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
        public async Task<AIPlusDeleteFileResponse> DeleteFile(string wID, string jobId, string token)
        {
            AIPlusDeleteFileResponse result = new();

            try
            {
                var request = new RestRequest($"/api/workspaces/{wID}/files/{jobId}", Method.Delete);
                request.AddQueryParameter("deleteStorage", true); // Delete from storage as well
                request.AddHeader("Authorization", $"Bearer {token}");
                var response = await Client.ExecuteAsync<AIPlusDeleteFileResponse>(request);
                _logger.Info("AIPlus Delete File Response: " + response.Content);
                return response.Data;
            }
            catch(Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
        public async Task<AIPlusGetJobResponse> GetJob(string jobId, string token)
        {
            AIPlusGetJobResponse result = new();

            try
            {
                var request = new RestRequest($"/api/jobs/{jobId}", Method.Get);
                request.AddHeader("Authorization", $"Bearer {token}");
                var response = await Client.ExecuteAsync<AIPlusGetJobResponse>(request);
                _logger.Info("AIPlus Get Job Response: " + response.Content);
                return response.Data;
            }
            catch(Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
        public async Task<List<AIPlusAskQuestionResponse>> AskQuestionByWorkspace(string wId, NewProjectRequest body, string token)
        {
            List<AIPlusAskQuestionResponse> result = new();

            try
            {
                var request = new RestRequest($"/api/workspaces/{wId}/chat/stream", Method.Post);
                request.AddHeader("Authorization", $"Bearer {token}");
                request.AddJsonBody(body);

                using var stream = await Client.DownloadStreamAsync(request);

                using var reader = new StreamReader(stream);

                string? line;
                while ((line = await reader.ReadLineAsync()) != null)
                {
                    try
                    {
                        int index = line.IndexOf("data: ", StringComparison.OrdinalIgnoreCase);
                        string cleanString = index < 0 ? line : line.Remove(index, "data: ".Length);
                        var response = JsonConvert.DeserializeObject<AIPlusAskQuestionResponse>(cleanString);
                        if(response != null && response.Type != null)
                        {
                            result.Add(response);
                        }
                    }
                    catch(Exception)
                    {
                        // Usually means the object cant be parse, skipped (not important)
                    }
                }
                _logger.Info($"AIPlus Ask Question Response: {JsonConvert.SerializeObject(result)}");
            }
            catch(Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
        public async Task<AIPlusGetFilingSuggestionResponse> GetFilingSuggestion(string wId, string token, string? documentFileName = null)
        {
            AIPlusGetFilingSuggestionResponse result = new();

            try
            {
                var request = new RestRequest($"/api/workspaces/{wId}/file-document", Method.Post);
                request.AddHeader("Authorization", $"Bearer {token}");
                if(documentFileName != null)
                {
                    request.AddJsonBody(new
                    {
                        documentFileName
                    });
                }

                var response = await Client.ExecuteAsync<AIPlusGetFilingSuggestionResponse>(request);
                _logger.Info("AIPlus Get Filing Suggestion: " + response.Content);
                _logger.Info("AIPlus Get Filing Suggestion: " + documentFileName);
                _logger.Info("AIPlus Get Filing Suggestion: " + wId);
                return response.Data;
            }
            catch(Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
        public async IAsyncEnumerable<AIPlusAskQuestionResponse> AskQuestion(NewProjectRequest body, string token)
        {
            var request = new RestRequest($"/api/workspaces/{config.Value.WorkspaceId}/chat/stream", Method.Post);
            request.AddHeader("Authorization", $"Bearer {token}");
            Console.WriteLine(JsonConvert.SerializeObject(body));
            request.AddJsonBody(body);

            using var stream = await Client.DownloadStreamAsync(request);
            using var reader = new StreamReader(stream);

            string? line;
            while ((line = await reader.ReadLineAsync()) != null)
            {
                int index = line.IndexOf("data: ", StringComparison.OrdinalIgnoreCase);
                string cleanString = index < 0 ? line : line.Remove(index, "data: ".Length);

                if(StringUtils.IsValidJSON(cleanString))
                {
                    var response = JsonConvert.DeserializeObject<AIPlusAskQuestionResponse>(cleanString);
                    if (response != null && response.Type != null)
                    {
                        yield return response;
                    }
                }
            }
        }
        public async Task<AIPlusUploadFileResponse> UploadFile(string wID, string filePath, string metadata, string token)
        {
            AIPlusUploadFileResponse result = new();

            try
            {
                using var http = new HttpClient();
                http.DefaultRequestHeaders.Authorization =
                    new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

                using var form = new MultipartFormDataContent
                {
                    // Add simple string fields
                    { new StringContent(wID), "workspaceId" },
                    { new StringContent(metadata), "metadata" }
                };

                // Add the file
                var fileBytes = await File.ReadAllBytesAsync(filePath);
                var fileContent = new ByteArrayContent(fileBytes);
                fileContent.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/octet-stream");

                form.Add(fileContent, "file", Path.GetFileName(filePath));

                // Send POST request
                var response = await http.PostAsync($"{config.Value.Url}/api/documents", form);
                var json = await response.Content.ReadAsStringAsync();

                // Deserialize response JSON
                result = JsonConvert.DeserializeObject<AIPlusUploadFileResponse>(json);

                _logger.Info("AIPlus Upload File Response: " + json);
                return result;
            }
            catch(Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
    }
}
