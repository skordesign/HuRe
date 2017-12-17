using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HuRe.Db;
using Microsoft.EntityFrameworkCore;

namespace Service.Repositories
{
    public interface IUserRepository
    {
        Task<bool> AddAsync(User o);
        Task<bool> RemoveAsync(Guid id);
        Task<bool> UpdateAsync(User o);
        Task<User> GetAsync(Guid id);
        Task<ICollection<User>> GetsAsync();
    }
    public class UserRepository : IUserRepository
    {
        private readonly JobDbContext _context;
        public UserRepository(JobDbContext context)
        {
            _context = context;
        }
        public async Task<bool> AddAsync(User o)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    var userExist = await _context.Users.FirstOrDefaultAsync(e => e.Email == o.Email);
                    if (userExist != null) return false;
                    await _context.Users.AddAsync(o);
                    await _context.SaveChangesAsync();
                    return true;
                }
                catch
                {
                    return false;
                }
            }
        }


        public async Task<bool> RemoveAsync(Guid id)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                var userExist = await _context.Users.FirstOrDefaultAsync(o => o.Id == id);
                try
                {
                    if (userExist is null) return false;
                    _context.Users.Remove(userExist);
                    return true;
                }
                catch
                {
                    return false;
                }
            }
        }

        public async Task<bool> UpdateAsync(User o)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    _context.Users.Update(o);
                    await _context.SaveChangesAsync();
                    transaction.Commit();
                    return true;
                }
                catch
                {
                    return false;
                }
            }
        }

        public async Task<User> GetAsync(Guid id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(o => o.Id == id);
            return user ?? new User();
        }

        public async Task<ICollection<User>> GetsAsync()
        {
            return await _context.Users.ToListAsync();
        }
    }
}
