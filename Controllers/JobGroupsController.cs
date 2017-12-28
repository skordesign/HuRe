using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HuRe.Models;
using HuRe.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace HuRe.Controllers
{
    [Route("api/job-groups")]
    public class JobGroupsController : Controller
    {
        private readonly IRepository<JobGroup> _jobGroupRepo;
        public JobGroupsController(IRepository<JobGroup> jobGroupRepo)
        {
            _jobGroupRepo = jobGroupRepo;
        }
        [HttpGet]
        public async Task<List<JobGroup>> Get()
        {
            var jobGroups = await _jobGroupRepo.GetsAsync();
            return jobGroups.ToList();
        }
    }
}