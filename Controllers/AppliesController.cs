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
        private readonly IRepository<Apply> _appliesRepo;
        public AppliesController(IRepository<Apply> appliesRepo)
        {
            _appliesRepo = appliesRepo;
        }
        // GET: api/<controller>
        [HttpGet]
        public async Task<IEnumerable<Apply>> Get()
        {
            return await _appliesRepo.GetsAsync();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
