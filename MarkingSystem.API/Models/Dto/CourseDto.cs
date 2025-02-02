using System.ComponentModel.DataAnnotations;

namespace MarkingSystem.API.Models.Dto
{
    public class CourseDto
    {
        public int CourseId { get; set; }

        [Required]
        [MaxLength(100)]
        public string CourseName { get; set; }

        public string? Description { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }
    }
}
