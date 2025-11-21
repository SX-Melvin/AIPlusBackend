namespace AIPlusBackend.Dto
{
    public class APIResponse<T>
    {
        public string? ErrorMessage { get; set; } = null;
        public T Data { get; set; }
    }
}
