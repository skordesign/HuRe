using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HuRe.Db;
using HuRe.Models;
using HuRe.Util;
using Microsoft.EntityFrameworkCore;

namespace Service.Repositories
{
    public interface IAccountRepository
    {
        Task<bool> AddAsync(Account o);
        Task<bool> RemoveAsync(Guid id);
        Task<bool> UpdateAsync(Account o);
        Task<Account> GetAsync(Guid id);
        Task<ICollection<Account>> GetsAsync();
        Account Login(string TenTaiKhoan, string MatKhau);


    }
    public class AccountRepository : IAccountRepository
    {
        private readonly JobDbContext _context;
        public AccountRepository(JobDbContext context)
        {
            _context = context;
        }
        public async Task<bool> AddAsync(Account o)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    var userExist = await _context.Accounts.FirstOrDefaultAsync(e => e.Username == o.Username);
                    if (userExist != null) return false;
                    await _context.Accounts.AddAsync(o);
                    await _context.SaveChangesAsync();
                    return true;
                }
                catch
                {
                    return false;
                }
            }
        }

        public async Task<Account> GetAsync(Guid id)
        {
            var user = await _context.Accounts.FirstOrDefaultAsync(o => o.Guid == id);
            return user ?? new Account();
        }

        public async Task<ICollection<Account>> GetsAsync()
        {
            return await _context.Accounts.ToListAsync();
        }


        public async Task<bool> RemoveAsync(Guid id)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                var userExist = await _context.Accounts.FirstOrDefaultAsync(o => o.Guid == id);
                try
                {
                    if (userExist is null) return false;
                    _context.Accounts.Remove(userExist);
                    return true;
                }
                catch
                {
                    return false;
                }
            }
        }

        public async Task<bool> UpdateAsync(Account o)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    _context.Accounts.Update(o);
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

        public Account Login(string TenTaiKhoan,string MatKhau)
        {
            try
            {
                return _context.Accounts.FirstOrDefault(o => o.Username == TenTaiKhoan && o.PasswordHashed == Protector.HashPassword(MatKhau));
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex);
                return null;
            }
            
        }
    }

}
