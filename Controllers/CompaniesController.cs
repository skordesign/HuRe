using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HuRe.Models;
using HuRe.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace HuRe.Controllers
{
    [Route("api/companies")]
    public class CompaniesController
    {
        private readonly IRepository<DoanhNghiep> _companiesRepo;
        public CompaniesController(IRepository<DoanhNghiep> companiesRepo)
        {
            _companiesRepo = companiesRepo;
        }

        [HttpGet("{id}")]
        public async Task<DoanhNghiep> Get(long id)
        {
            DoanhNghiep doanhNghiep = await _companiesRepo.GetAsync(id);
            return doanhNghiep;
        }
        [HttpGet]
        public async Task<List<DoanhNghiep>> Get()
        {
            var doanhNghieps = await _companiesRepo.GetsAsync();
            return doanhNghieps.ToList();
        }
        [HttpDelete("{id}")]
        public async Task<bool> Delete(long id)
        {
            bool isDeleted = await _companiesRepo.RemoveAsync(id);
            return isDeleted;
        }

        [HttpPost]
        public async Task<bool> Post([FromBody] DoanhNghiep model)
        {
            bool isAdded = await _companiesRepo.AddAsync(model);
            return isAdded;
        }

        [HttpPut("{id}")]
        public async Task<bool> Put(long id, [FromBody] DoanhNghiep model)
        {
            bool isUpdated = await _companiesRepo.UpdateAsync(id, model);
            return isUpdated;
        }
    }
}