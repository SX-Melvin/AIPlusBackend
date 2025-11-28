using Newtonsoft.Json;

namespace AIPlusBackend.Dto.AIPlus
{
    public class AIPlusAskQuestionResponse
    {
        [JsonProperty("type")]
        public string? Type { get; set; } = null;
        
        [JsonProperty("delta")]
        public string Delta { get; set; }
        
        [JsonProperty("tokenUsed")]
        public int TokensUsed { get; set; }
        
        [JsonProperty("iterations")]
        public int Iterations { get; set; }
        
        [JsonProperty("error")]
        public string Error { get; set; }
        
        [JsonProperty("message")]
        public string Message { get; set; }
        
        [JsonProperty("result")]
        public AIPlusAskQuestionResult Result { get; set; }

        // OUR CUSTOM FIELDS
        [JsonProperty("additional_data")]
        public AIPlusAskQuestionAdditionalData AdditionalData { get; set; }
    }
    public class AIPlusAskQuestionAdditionalData
    {
        [JsonProperty("type")]
        public string? Type { get; set; } = null;
        
        [JsonProperty("data")]
        public string Data { get; set; }
        
    }
    public class AIPlusAskQuestionResult
    {
        [JsonProperty("success")]
        public bool Success { get; set; }

        [JsonProperty("message")]
        public string Message { get; set; }

        [JsonProperty("data")]
        public AIPlusAskQuestionResultData Data { get; set; }
    }
    public class AIPlusAskQuestionResultData
    {
        [JsonProperty("files")]
        public List<AIPlusAskQuestionResultDataFile> Files { get; set; }
    }
    public class AIPlusAskQuestionResultDataFile
    {
        [JsonProperty("jobId")]
        public string JobId { get; set; }

        [JsonProperty("fileName")]
        public string FileName { get; set; }

        [JsonProperty("fileSize")]
        public string FileSize { get; set; }

        [JsonProperty("customMetadata")]
        public AIPlusAskQuestionResultDataFileCustomMetadata CustomMetadata { get; set; }
    }
    public class AIPlusAskQuestionResultDataFileCustomMetadata
    {
        [JsonProperty("nodeId")]
        public string NodeId { get; set; }

        [JsonProperty("format")]
        public string Format { get; set; }
    }
}
