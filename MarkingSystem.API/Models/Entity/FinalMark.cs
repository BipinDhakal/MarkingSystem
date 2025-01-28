using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MarkingSystem.API.Models.Entity
{
    public class FinalMark
    {
        [Key]
        public int FinalMarkId { get; set; }

        [Required]
        [ForeignKey("UserId")]
        public int StudentId { get; set; }

        [Required]
        [ForeignKey("CourseId")]
        public int CourseId { get; set; }

        public float PeerScore { get; set; }

        public float TeacherScore { get; set; }

        public float FinalScore { get; set; }

        public DateTime CalculatedAt { get; set; } = DateTime.Now;

        public ApplicationUser Student { get; set; }
        public Course Course { get; set; }
    }
}
