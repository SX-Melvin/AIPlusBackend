using AIPlusBackend.Dto.Database;
using Microsoft.EntityFrameworkCore;

namespace AIPlusBackend.Dto
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<DTreeACL> DTreeACLs { get; set; }
        public DbSet<ChatRoom> ChatRooms { get; set; }
        public DbSet<Database.Chat> Chats { get; set; }
        public DbSet<AIPlusTempFile> AIPlusTempFiles { get; set; }
        public DbSet<KUAF> KUAFs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Exclude KUAFs Table From Migrations
            modelBuilder.Entity<DTreeACL>().HasNoKey();
            modelBuilder.Entity<DTreeACL>().ToTable(nameof(DTreeACL), t => t.ExcludeFromMigrations());
            
            modelBuilder.Entity<KUAF>().HasNoKey();
            modelBuilder.Entity<KUAF>().ToTable(nameof(KUAF), t => t.ExcludeFromMigrations());
        }
    }
}
