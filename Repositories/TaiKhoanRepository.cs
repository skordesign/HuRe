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
        Task<bool> AddAsync(TaiKhoan o);
        Task<bool> RemoveAsync(Guid id);
        Task<bool> UpdateAsync(TaiKhoan o);
        Task<TaiKhoan> GetAsync(Guid id);
        Task<ICollection<TaiKhoan>> GetsAsync();
        TaiKhoan Login(string TenTaiKhoan, string MatKhau);


    }
    public class TaiKhoanRepository :ITaiKhoanRepository
    {
        private readonly JobDbContext _context;
        public TaiKhoanRepository(JobDbContext context)
        {
            _context = context;
        }
        public async Task<bool> AddAsync(TaiKhoan o)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    var userExist = await _context.TaiKhoans.FirstOrDefaultAsync(e => e.TenTaiKhoan == o.TenTaiKhoan);
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

        public async Task<TaiKhoan> GetAsync(Guid id)
        {
            var user = await _context.TaiKhoans.FirstOrDefaultAsync(o => o.Guid == id);
            return user ?? new TaiKhoan();
        }

        public async Task<ICollection<TaiKhoan>> GetsAsync()
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

        public async Task<bool> UpdateAsync(TaiKhoan o)
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

        public TaiKhoan Login(string TenTaiKhoan,string MatKhau)
        {
            try
            {
                return _context.TaiKhoans.FirstOrDefault(o => o.TenTaiKhoan == TenTaiKhoan && o.MatKhau == Protector.HashPassword(MatKhau));
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex);
                return null;
            }
            
        }
    }

}
