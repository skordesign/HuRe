using HuRe.Db;
using HuRe.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Repositories
{
    public interface IRoleRepository : IRepository<Role>
    { 
    }
    public class RoleRepository : Repository<Role>, IRoleRepository
    {
        private readonly JobDbContext _context;
        public RoleRepository(JobDbContext ctx) : base(ctx)
        {
            _context = ctx;
        }
    }
}
