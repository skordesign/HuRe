using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HuRe.Models;
using HuRe.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace HuRe.Controllers
{
    [Route("api/jobs")]
    public class JobsController:Controller
    {
        private readonly IRepository<Job> _jobRepo;
        public JobsController(IRepository<Job> jobRepo)
        {
            _jobRepo = jobRepo;
        }
        [HttpGet("{id}")]
        public async Task<Job> Get(long id)
        {
            var job = await _jobRepo.GetAsync(id);
            return job;
        }
        [HttpPost]
        public async Task<List<Job>> Get()
        {
            var jobs = await _jobRepo.GetsAsync();
            return jobs.ToList();
        }
        public async Task<bool> Post([FromBody]Job model)
        {
            bool isAdded = await _jobRepo.AddAsync(model);
            return isAdded;
        }
        [HttpPut("{id}")]
        public async Task<bool> Put(long id,[FromBody] Job model)
        {
            bool isUpdated = await _jobRepo.UpdateAsync(model.Id, model);
            return isUpdated;
        }
        [HttpDelete("{id}")]
        public async Task<bool> Delete(long id)
        {
            bool isDeleted = await _jobRepo.RemoveAsync(id);
            return isDeleted;
        }
    }
}
