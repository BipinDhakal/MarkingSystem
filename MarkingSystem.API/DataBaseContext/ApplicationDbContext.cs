using MarkingSystem.API.Models.Entity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace MarkingSystem.API.DataBaseContext
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        //private readonly string _adminRoleId = Guid.NewGuid().ToString();
        //private readonly string _teacherRoleId = Guid.NewGuid().ToString();
        //private readonly string _studentRoleId = Guid.NewGuid().ToString();
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) 
            : base(options)
        {
        }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        //public DbSet<Booking> Bookings { get; set; }
        //public DbSet<Course> Courses { get; set; }
        //public DbSet<Enrollment> Enrollments { get; set; }
        //public DbSet<FinalMark> FinalMarks { get; set; }
        //public DbSet<Mark> Marks { get; set; }
        //public DbSet<Rubric> Rubrics { get; set; }

        public DbSet<Student> Students { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            this.SeedRoles(modelBuilder);
        }

        private void SeedRoles(ModelBuilder builder)
        {
            builder.Entity<IdentityRole>().HasData(
                new IdentityRole() { Id = Guid.NewGuid().ToString(), Name = "Admin", ConcurrencyStamp = "1", NormalizedName = "ADMIN" },
                new IdentityRole() { Id = Guid.NewGuid().ToString(), Name = "Teacher", ConcurrencyStamp = "2", NormalizedName = "TEACHER" },
                new IdentityRole() { Id = Guid.NewGuid().ToString(), Name = "Student", ConcurrencyStamp = "3", NormalizedName = "STUDENT" }
                );
        }
    }
}
