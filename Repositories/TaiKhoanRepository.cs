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
    public interface ITaiKhoanRepository
    {
        Task<bool> AddAsync(Account o);
        Task<bool> RemoveAsync(Guid id);
        Task<bool> UpdateAsync(Account o);
        Task<Account> GetAsync(Guid id);
        Task<ICollection<Account>> GetsAsync();
        Account Login(string TenTaiKhoan, string MatKhau);


    }
    public class TaiKhoanRepository :ITaiKhoanRepository
    {
        private readonly JobDbContext _context;
        public TaiKhoanRepository(JobDbContext context)
        {
            _context = context;
        }
        public async Task<bool> AddAsync(Account o)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    var userExist = await _context.TaiKhoans.FirstOrDefaultAsync(e => e.Username == o.Username);
                    if (userExist != null) return false;
                    await _context.TaiKhoans.AddAsync(o);
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
            var user = await _context.TaiKhoans.FirstOrDefaultAsync(o => o.Guid == id);
            return user ?? new Account();
        }

        public async Task<ICollection<Account>> GetsAsync()
        {
            return await _context.TaiKhoans.ToListAsync();
        }


        public async Task<bool> RemoveAsync(Guid id)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                var userExist = await _context.TaiKhoans.FirstOrDefaultAsync(o => o.Guid == id);
                try
                {
                    if (userExist is null) return false;
                    _context.TaiKhoans.Remove(userExist);
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
                    _context.TaiKhoans.Update(o);
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
                return _context.TaiKhoans.FirstOrDefault(o => o.Username == TenTaiKhoan && o.PasswordHashed == Protector.HashPassword(MatKhau));
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex);
                return null;
            }
            
        }
    }

}
