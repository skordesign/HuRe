using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HuRe.Models;
using HuRe.Repositories;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HuRe.Controllers
{
    [Route("api/[controller]")]
    public class AppliesController : Controller
    {
        private readonly IApplyRepository _appliesRepo;
        public AppliesController(IApplyRepository appliesRepo)
        {
            _appliesRepo = appliesRepo;
        }
        // GET: api/<controller>
        [HttpGet]
        public async Task<Apply> GetList([FromQuery]long accountId, long jobId)
        {
            return await _appliesRepo.GetApply(accountId, jobId);
        }
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Apply model)
        {
            var isAdded = await _appliesRepo.AddAsync(model);
            return Created("", isAdded);
        }
    }
}
