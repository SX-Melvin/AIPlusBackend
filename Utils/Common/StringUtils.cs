using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using NLog;
using System.Text.RegularExpressions;

namespace AIPlusBackend.Utils.Common
{
    public static class StringUtils
    {
        private static readonly Logger _logger = LogManager.GetCurrentClassLogger();
        public static List<long> GetNumbersFromString(string message)
        {
            List<long> result = [];

            try
            {
                // \d{4,} = match any sequence of digits with length >= 4
                var matches = Regex.Matches(message, @"\d{4,}");

                foreach (Match match in matches)
                {
                    if (long.TryParse(match.Value, out long num))
                    {
                        result.Add(num);
                    }
                }
            }
            catch(Exception ex)
            {
                _logger.Error(ex);
            }

            return result;
        }
        public static bool IsValidJSON(string str)
        {
            if (string.IsNullOrWhiteSpace(str))
                return false;

            str = str.Trim();

            if ((str.StartsWith("{") && str.EndsWith("}")) ||
                (str.StartsWith("[") && str.EndsWith("]")))
            {
                try
                {
                    JToken.Parse(str);
                    return true;
                }
                catch (JsonReaderException)
                {
                    return false;
                }
            }

            return false;
        }
    }
}
