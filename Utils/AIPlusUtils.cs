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
        public async Task<AIPlusDeleteFileResponse> DeleteFile(string wID, string jobId, string token)
        {
            AIPlusDeleteFileResponse result = new();

            try
            {
                var request = new RestRequest($"/api/workspaces/{wID}/files/{jobId}", Method.Delete);
                request.AddHeader("Authorization", token);
                var response = await Client.ExecuteAsync<AIPlusDeleteFileResponse>(request);
                return response.Data;
            }
            catch(Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
    }
}
