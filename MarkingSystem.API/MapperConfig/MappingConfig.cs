using AutoMapper;
using MarkingSystem.API.Models.Dto;
using MarkingSystem.API.Models.Entity;

namespace MarkingSystem.API.MapperConfig
{
    public class MappingConfig
    {
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                config.CreateMap<CourseDto, Course>().ReverseMap();
                config.CreateMap<Rubric, RubricDto>().ReverseMap();
                //config.CreateMap<RubricCriteria, RubricCriteriaDto>().ReverseMap();
                config.CreateMap<TimeSlot, TimeSlotDto>().ReverseMap();
                config.CreateMap<Booking, BookingDto>().ReverseMap();
                config.CreateMap<PeerAssignment, PeerAssignmentDto>().ReverseMap();
                config.CreateMap<PeerMark, PeerMarkDto>().ReverseMap();
                config.CreateMap<TeacherMark, TeacherMarkDto>().ReverseMap();
                config.CreateMap<FinalMark, FinalMarkDto>().ReverseMap();
                config.CreateMap<Notification, NotificationDto>().ReverseMap();
            });
            return mappingConfig;
        }
    }
}
