using MarkingSystem.API.Models.Dto;
using MarkingSystem.API.Service.IService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MarkingSystem.API.Controllers
{
    [Route("api/booking")]
    [ApiController]
    public class BookingController : BaseController<BookingDto>
    {
        public BookingController(IGenericService<BookingDto> service) : base(service)
        {
        }
    }
}
