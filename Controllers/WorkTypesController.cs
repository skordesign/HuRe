using System.Collections.Generic;
using System.Threading.Tasks;
using HuRe.Models;
using HuRe.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace HuRe.Controllers
{
    [Route("api/work-types")]
    public class WorkTypesController:Controller
    {
        private readonly IRepository<WorkType> _workTypeRepo;
        public WorkTypesController(IRepository<WorkType> workTypeRepo)
        {
            _workTypeRepo = workTypeRepo;
        }
        [HttpGet]
        public async Task<IEnumerable<WorkType>> Get()
        {
            var listWorkType = await _workTypeRepo.GetsAsync();
            return listWorkType;
        }
    }
}