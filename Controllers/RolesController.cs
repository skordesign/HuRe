using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HuRe.Models;
using HuRe.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace HuRe.Controllers
{
    [Route("api/roles")]
    public class RolesController:Controller
    {
        private readonly IRepository<Role> _roleRepo;
        public RolesController(IRepository<Role> roleRepo)
        {
            _roleRepo = roleRepo;
        }

        [HttpGet]
        public async Task<List<Role>> Get()
        {
            var roles = await _roleRepo.GetsAsync();
            roles.Remove(roles.FirstOrDefault(i=>i.Name=="Admin"));
            return roles.ToList();
        }
    }
}