using AIPlusBackend.Configurations;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using RestSharp;
using System.Text.RegularExpressions;
using AIPlusBackend.Dto.OTCS;

namespace AIPlusBackend.Utils
{
    public class OTCSUtils(IOptions<OTCSConfiguration> config)
    {
        private readonly NLog.Logger _logger = NLog.LogManager.GetCurrentClassLogger();
        private readonly RestClient _client = new RestClient(config.Value.ApiUrl);
        public string? DownloadFile(long ID, int version, string fileName, string ticket, string? path = null)
        {
            string? result = null;

            try
            {
                fileName = Regex.Replace(fileName, @"[^\u0000-\u007F]", " ");
                var request = new RestRequest($"v2/nodes/{ID}/versions/{version}/content", Method.Get);
                request.AddHeader("OTCSTicket", ticket);

                var savePath = Path.GetTempPath();
                if (path != null)
                {
                    savePath = path;
                }

                var response = _client.Execute(request);

                if (response.IsSuccessful)
                {
                    File.WriteAllBytes(Path.Combine(savePath, fileName), response.RawBytes);
                    result = Path.Combine(savePath, fileName);
                }
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
        public string? GetTicket()
        {
            string? result = null;

            try
            {
                var request = new RestRequest($"v1/auth", Method.Post);
                request.AddParameter("username", config.Value.Username);
                request.AddParameter("password", config.Value.Password);
                var response = _client.Execute(request);
                _logger.Info($"GetTicket Response: {response.Content}");
                var responseData = JsonConvert.DeserializeObject<GetTicketResponse>(response.Content);

                if (responseData.Error != null)
                {
                    _logger.Error(responseData.Error);
                }
                else
                {
                    result = responseData.Ticket;
                }
            }
            catch (Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
    }
}
