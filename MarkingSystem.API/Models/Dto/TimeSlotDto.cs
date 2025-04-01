using System.ComponentModel;

namespace MarkingSystem.API.Models.Dto
{
    public class TimeSlotDto
    {
        public int TimeSlotId { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        [DefaultValue(false)]
        public bool IsClosed { get; set; }
        public int MaxStudents { get; set; } = 8;
    }
}
