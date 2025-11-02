using AIPlusBackend.Configurations;
using AIPlusBackend.Dto.AIPlus;
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
                return response.Data;
            }
            catch(Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }

        public async IAsyncEnumerable<string> AskByWorkspace(int ID, AskByWorkspaceRequest body, string? token = null)
        {
            if(token == null)
            {
                var getToken = await Login();
                token = getToken.Token;
            }

            using var httpClient = new HttpClient();
            _logger.Info(token);

            var request = new HttpRequestMessage(HttpMethod.Post, $"{config.Value.Url}/api/workspaces/{ID}/chat/stream");
            request.Content = new StringContent(JsonConvert.SerializeObject(body), Encoding.UTF8, "application/json");
            request.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);

            var response = await httpClient.SendAsync(
                request,
                HttpCompletionOption.ResponseHeadersRead
            );

            response.EnsureSuccessStatusCode();

            // Get the response stream
            using var stream = await response.Content.ReadAsStreamAsync();
            using var reader = new StreamReader(stream);

            string? line;
            while ((line = await reader.ReadLineAsync()) != null)
            {
                if (string.IsNullOrWhiteSpace(line))
                    continue;
                _logger.Info(JsonConvert.SerializeObject(line));
                yield return line; // ← each chunk returned immediately
            }
        }
    }
}
