using HuRe.Db;
using HuRe.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Repositories
{
    public interface IPhanQuyenRepository : IRepository<Role>
    { 
    }
    public class PhanQuyenRepository : Repository<Role>, IPhanQuyenRepository
    {
        private readonly JobDbContext _context;
        public PhanQuyenRepository(JobDbContext ctx) : base(ctx)
        {
            _context = ctx;
        }
    }
}
