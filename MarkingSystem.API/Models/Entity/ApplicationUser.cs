using Microsoft.AspNetCore.Identity;

namespace MarkingSystem.API.Models.Entity
{
    public class ApplicationUser : IdentityUser
    {
        public int UserId { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
