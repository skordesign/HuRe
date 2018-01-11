using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HuRe.Db;
using HuRe.Models;
using Microsoft.EntityFrameworkCore;

namespace HuRe.Repositories
{
    public interface IApplyRepository
    {
        Task<bool> AddAsync(Apply model);
        Task<Apply> GetApply(long accountId, long jobId);
        Task<IEnumerable<Apply>> GetAppliesOfAccount(long accountId);
        Task<IEnumerable<Apply>> GetAppliesOfJob(long jobId);
    }
    public class ApplyRepository : IApplyRepository
    {
        private readonly JobDbContext _context;
        public ApplyRepository(JobDbContext context)
        {
            _context = context;
        }

        public async Task<bool> AddAsync(Apply model)
        {
            try
            {
                await _context.Applys.AddAsync(model);
                _context.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<IEnumerable<Apply>> GetAppliesOfAccount(long accountId)
        {
            return await _context.Applys.Where(a => a.AccountId == accountId).ToListAsync();
        }

        public async Task<IEnumerable<Apply>> GetAppliesOfJob(long jobId)
        {
            return await _context.Applys.Where(a => a.JobId == jobId).ToListAsync();
        }

        public async Task<Apply> GetApply(long accountId, long jobId)
        {
            return await _context.Applys.FirstOrDefaultAsync(a => a.JobId == jobId && a.AccountId == accountId);
        }
    }
}