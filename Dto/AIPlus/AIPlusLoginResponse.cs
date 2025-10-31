namespace AIPlusBackend.Dto.AIPlus
{
    public class AIPlusLoginResponse
    {
        public string Token { get; set; }
        public string TokenType { get; set; }
        public int ExpiresIn { get; set; }
        public AIPlusLoginResponseUser User { get;set; }

    }
    public class AIPlusLoginResponseUser
    {
        public string UserId { get; set; }
        public string Role { get; set; }
        public List<string> WorkspaceIds { get; set; }

    }
}
