using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MarkingSystem.API.Models.Entity
{
    public class Booking
    {
        [Key]
        public int BookingId { get; set; }

        [ForeignKey("CourseId")]
        public int CourseId { get; set; }

        [ForeignKey("UserId")]
        public int StudentId { get; set; }

        public DateTime BookedAt { get; set; } = DateTime.Now;

        [MaxLength(50)]
        public string Status { get; set; }

        public Course Course { get; set; }
        public ApplicationUser User { get; set; }

    }
}
