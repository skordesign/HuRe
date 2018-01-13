using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HuRe.Models;
using HuRe.Models.ActionModel;
using HuRe.Models.ResultModels;
using HuRe.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace HuRe.Controllers
{
    [Route("api/companies")]
    public class CompaniesController:Controller
    {
        private readonly ICompanyRepository _companiesRepo;
        private readonly IRepository<Job> _jobRepo;
        public CompaniesController(ICompanyRepository companiesRepo, IRepository<Job> jobRepo)
        {
            _companiesRepo = companiesRepo;
            _jobRepo = jobRepo;
        }
        [HttpGet("all")]
        public async Task<IEnumerable<Company>> Gets()
        {
            return await _companiesRepo.GetsAsync(); ;
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

        #region api dung cho admin
        [HttpPost("page")]
        public async Task<ModelPaging<Company>> Post([FromBody]FilterPageActionModel form)
        {
            var total = _companiesRepo.CountAll(form);
            var Companys = await _companiesRepo.GetsAsyncPage(form);
            return new ModelPaging<Company>
            {
                total = total,
                data = Companys
            };
        }
        [HttpPost("create")]
        public async Task<bool> Create([FromBody]Company form)
        {
            return await _companiesRepo.AddAsync(form);
        }
        [HttpPut("update/{id}")]
        public async Task<bool> Update(long id, [FromBody]Company form)
        {
            return await _companiesRepo.UpdateAsync(id, form);
        }
        //da co
        [HttpGet("info/{id}")]
        public async Task<Company>GetInfo(long id)
        {
            return await _companiesRepo.GetAsync(id);
        }
        //da co
        [HttpDelete("delete/{id}")]
        public async Task<bool> DeleteAdmin(long id)
        {
            return await _companiesRepo.RemoveAsync(id);
        }
        #endregion
    }
}