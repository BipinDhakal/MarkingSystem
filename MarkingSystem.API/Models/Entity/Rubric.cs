using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MarkingSystem.API.Models.Entity
{
    public class Rubric
    {
        [Key]
        public int RubricId { get; set; }

        [Required]
        [ForeignKey("CourseId")]
        public int CourseId{ get; set; }

        [Required]
        [MaxLength(255)]
        public string Criteria { get; set; }

        [Required]
        public int MaxScore { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        public Course Course { get; set; }
    }
}
