using AIPlusBackend.Dto.Database;
using Microsoft.EntityFrameworkCore;

namespace AIPlusBackend.Dto
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options) { }

        public DbSet<DTreeFullPath> DTreeFullPaths { get; set; }

        public DbSet<ProjectRoom> ProjectRooms { get; set; }
        public DbSet<DTreeACL> DTreeACLs { get; set; }
        public DbSet<AIPlusFileVersion> AIPlusFileVersions { get; set; }
        public DbSet<DTreeCore> DTreeCores { get; set; }
        public DbSet<AIPlusSyncedFile> AIPlusSyncedFiles { get; set; }
        public DbSet<AIPlusTempFile> AIPlusTempFiles { get; set; }
        public DbSet<KUAF> KUAFs { get; set; }
        public DbSet<CatRegionMap> CatRegionMaps { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Exclude KUAFs Table From Migrations
            modelBuilder.Entity<CatRegionMap>().HasNoKey();
            modelBuilder.Entity<CatRegionMap>().ToTable(nameof(CatRegionMap), t => t.ExcludeFromMigrations());
            
            modelBuilder.Entity<DTreeACL>().HasNoKey();
            modelBuilder.Entity<DTreeACL>().ToTable(nameof(DTreeACL), t => t.ExcludeFromMigrations());
            
            modelBuilder.Entity<DTreeFullPath>().HasNoKey();
            modelBuilder.Entity<DTreeFullPath>().ToTable(nameof(DTreeFullPath), t => t.ExcludeFromMigrations());
            
            modelBuilder.Entity<DTreeCore>().HasNoKey();
            modelBuilder.Entity<DTreeCore>().ToTable(nameof(DTreeCore), t => t.ExcludeFromMigrations());
            
            modelBuilder.Entity<KUAF>().HasNoKey();
            modelBuilder.Entity<KUAF>().ToTable(nameof(KUAF), t => t.ExcludeFromMigrations());
        }
    }
}
