using AIPlusBackend.Dto.Database;
using Microsoft.EntityFrameworkCore;

namespace AIPlusBackend.Dto
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<DTreeACL> DTreeACLs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Exclude KUAFs Table From Migrations
            modelBuilder.Entity<DTreeACL>().HasNoKey();
            modelBuilder.Entity<DTreeACL>().ToTable(nameof(DTreeACL), t => t.ExcludeFromMigrations());
        }
    }
}
