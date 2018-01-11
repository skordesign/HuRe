using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HuRe.Models;
using HuRe.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace HuRe.Controllers
{
    [Route("api/companies")]
    public class CompaniesController:Controller
    {
        private readonly IRepository<Company> _companiesRepo;
        private readonly IRepository<Job> _jobRepo;
        public CompaniesController(IRepository<Company> companiesRepo, IRepository<Job> jobRepo)
        {
            _companiesRepo = companiesRepo;
            _jobRepo = jobRepo;
        }

        [HttpGet("{id}")]
        public async Task<Company> Get(long id)
        {
            Company doanhNghiep = await _companiesRepo.GetAsync(id);
            return doanhNghiep;
        }
        [HttpGet("{id}/jobs")]
        public async Task<IEnumerable<Job>> GetJob(long id)
        {
            var jobs = await _jobRepo.GetsAsync();
            return jobs.Where(o=>o.CompanyId==id);
        }
        [HttpGet]
        public async Task<IEnumerable<Company>> Get()
        {
            var doanhNghieps = await _companiesRepo.GetsAsync();
            return doanhNghieps.OrderByDescending(o=>o.Scales).Take(10).ToList();
        }
        [HttpDelete("{id}")]
        public async Task<bool> Delete(long id)
        {
            bool isDeleted = await _companiesRepo.RemoveAsync(id);
            return isDeleted;
        }

        [HttpPost]
        public async Task<bool> Post([FromBody] Company model)
        {
            bool isAdded = await _companiesRepo.AddAsync(model);
            return isAdded;
        }

        [HttpPut("{id}")]
        public async Task<bool> Put(long id, [FromBody] Company model)
        {
            bool isUpdated = await _companiesRepo.UpdateAsync(id, model);
            return isUpdated;
        }
    }
}