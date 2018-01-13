using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using HuRe.Models;
using HuRe.Repositories;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;

namespace HuRe.Controllers
{
    [Route("api/jobs")]
    public class JobsController : Controller
    {
        private readonly IRepository<Job> _jobRepo;
        private readonly IHostingEnvironment _hostingEnvironment;
        public JobsController(IRepository<Job> jobRepo, IHostingEnvironment hostingEnvironment)
        {
            _jobRepo = jobRepo;
            _hostingEnvironment = hostingEnvironment;
        }
        [HttpGet("{id}")]
        public async Task<Job> Get(long id)
        {
            var job = await _jobRepo.GetAsync(id);
            job.ContentURL = System.IO.File.ReadAllText(Path.Combine(_hostingEnvironment.WebRootPath, job.ContentURL));
            return job;
        }
        [HttpGet]
        public async Task<IEnumerable<Job>> Get()
        {
            var jobs = await _jobRepo.GetsAsync();
            foreach (var job in jobs)
            {
                job.ContentURL = System.IO.File.ReadAllText(Path.Combine(_hostingEnvironment.WebRootPath, job.ContentURL));
            }
            return jobs;
        }
        [HttpGet("hot-interns")]
        public async Task<IEnumerable<Job>> GetHotIntern()
        {
             var jobs = await _jobRepo.GetsAsync();
            var onlyIntern = jobs.Where(o => o.WorkType.ShortName.Contains("TTS") || o.WorkType.ShortName.Contains("KT"))
            .OrderByDescending(o=>o.AppliedCount).Take(5);
            foreach (var job in onlyIntern)
            {
                job.ContentURL = System.IO.File.ReadAllText(Path.Combine(_hostingEnvironment.WebRootPath, job.ContentURL));
            }
            return onlyIntern;
        }
        [HttpGet("hot-jobs")]
        public async Task<IEnumerable<Job>> GetHotJob()
        {
            var jobs = await _jobRepo.GetsAsync();
            var onlyJobs = jobs.Where(o => o.WorkType.ShortName.Contains("BTG") || o.WorkType.ShortName.Contains("TTG"))
            .OrderByDescending(k=>k.AppliedCount).Take(5);
            foreach (var job in onlyJobs)
            {
                job.ContentURL = System.IO.File.ReadAllText(Path.Combine(_hostingEnvironment.WebRootPath, job.ContentURL));
            }
            return onlyJobs;
        }
        [HttpGet("only-jobs")]
        public async Task<IEnumerable<Job>> GetOnlyJobs()
        {
            var jobs = await _jobRepo.GetsAsync();
            var onlyJobs = jobs.Where(o => o.WorkType.ShortName.Contains("BTG") || o.WorkType.ShortName.Contains("TTG"));
            foreach (var job in onlyJobs)
            {
                job.ContentURL = System.IO.File.ReadAllText(Path.Combine(_hostingEnvironment.WebRootPath, job.ContentURL));
            }
            return onlyJobs;
        }
        [HttpGet("only-interns")]
        public async Task<IEnumerable<Job>> GetOnlyInterns()
        {
            var jobs = await _jobRepo.GetsAsync();
            var onlyIntern = jobs.Where(o => o.WorkType.ShortName.Contains("TTS") || o.WorkType.ShortName.Contains("KT"));
            foreach (var job in onlyIntern)
            {
                job.ContentURL = System.IO.File.ReadAllText(Path.Combine(_hostingEnvironment.WebRootPath, job.ContentURL));
            }
            return onlyIntern;
        }
        [HttpPost]
        public async Task<bool> Post([FromBody]Job model)
        {
            bool isAdded = await _jobRepo.AddAsync(model);
            return isAdded;
        }
        [HttpPut("{id}")]
        public async Task<bool> Put(long id, [FromBody] Job model)
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
