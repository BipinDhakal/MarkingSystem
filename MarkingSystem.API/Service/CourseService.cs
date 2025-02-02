using AutoMapper;
using MarkingSystem.API.DataBaseContext;
using MarkingSystem.API.Models.Dto;
using MarkingSystem.API.Models.Entity;
using MarkingSystem.API.Service.IService;
using Microsoft.EntityFrameworkCore;

namespace MarkingSystem.API.Service
{
    public class CourseService : ICourseService
    {
        private readonly ApplicationDbContext _db;
        private IMapper _mapper;

        public CourseService(ApplicationDbContext db, IMapper mapper)
        {
            _db = db;
            _mapper = mapper;
        }
        public async Task<CourseDto> CreateUpdateCourse(CourseDto courseDto)
        {
            Course course = _mapper.Map<CourseDto, Course>(courseDto);
            if (course.CourseId > 0)
            {
                _db.Courses.Update(course);
            }
            else
            {
                _db.Courses.Add(course);
            }
            await _db.SaveChangesAsync();
            return _mapper.Map<Course, CourseDto>(course);
        }

        public async Task<bool> DeleteCourse(int courseId)
        {
            try
            {
                Course course = await _db.Courses.Where(x => x.CourseId == courseId).FirstOrDefaultAsync();
                if (course == null)
                {
                    return false;
                }
                _db.Courses.Remove(course);
                await _db.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public async Task<CourseDto> GetCourseById(int courseId)
        {
            Course product = await _db.Courses.Where(x => x.CourseId == courseId).FirstOrDefaultAsync();
            return _mapper.Map<CourseDto>(product);
        }

        public async Task<IEnumerable<CourseDto>> GetCourses()
        {
            IEnumerable<Course> ProductList = await _db.Courses.ToListAsync();
            return _mapper.Map<List<CourseDto>>(ProductList);
        }
    }
}
