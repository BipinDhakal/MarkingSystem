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
            });
            return mappingConfig;
        }
    }
}
