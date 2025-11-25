namespace AIPlusBackend.Dto
{
    public class Pagination<T>
    {
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 20;
        public int TotalPage { get; set; } = 1;
        public int TotalRecords { get; set; } = 20;
        public bool HasNext { get; set; } = false;
        public List<T> Data { get; set; } = [];
    }
}
