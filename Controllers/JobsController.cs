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
        private readonly IRepository<CongViec> _jobRepo;
        public JobsController(IRepository<CongViec> jobRepo)
        {
            _jobRepo = jobRepo;
        }
        [HttpGet("{id}")]
        public async Task<CongViec> Get(long id)
        {
            var job = await _jobRepo.GetAsync(id);
            return job;
        }
        [HttpPost]
        public async Task<List<CongViec>> Get()
        {
            var jobs = await _jobRepo.GetsAsync();
            return jobs.ToList();
        }
        public async Task<bool> Post([FromBody]CongViec model)
        {
            bool isAdded = await _jobRepo.AddAsync(model);
            return isAdded;
        }
        [HttpPut("{id}")]
        public async Task<bool> Put(long id,[FromBody] CongViec model)
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
