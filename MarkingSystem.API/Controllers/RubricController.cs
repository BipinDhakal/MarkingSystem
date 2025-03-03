using MarkingSystem.API.Models.Dto;
using MarkingSystem.API.Models.Entity;
using MarkingSystem.API.Service.IService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MarkingSystem.API.Controllers
{
    [Route("api/rubric")]
    [ApiController]
    [Authorize]
    public class RubricController : BaseController<RubricDto>
    {
        public RubricController(IGenericService<RubricDto> service) : base(service)
        {
        }
    }
}
