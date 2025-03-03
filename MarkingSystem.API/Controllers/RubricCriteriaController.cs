using MarkingSystem.API.Models.Dto;
using MarkingSystem.API.Service.IService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MarkingSystem.API.Controllers
{
    [Route("api/rubriccriteria")]
    [ApiController]
    [Authorize]
    public class RubricCriteriaController : BaseController<RubricCriteriaDto>
    {
        public RubricCriteriaController(IGenericService<RubricCriteriaDto> service) : base(service)
        {
            
        }
    }
}
