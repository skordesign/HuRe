using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HuRe.Db;
using HuRe.Models;
using HuRe.Models.ActionModel;
using HuRe.Models.ResultModels;
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
        Task<ICollection<AccountResult>> GetsAsyncPage( AccountActionModel body);
        int CountAll();
        Task<bool> CheckAsync(string email);
        Task<bool> ActivateAccount(int id,Account o);
    }
    public class AccountRepository : IAccountRepository
    {
        private readonly JobDbContext _context;
        public AccountRepository(JobDbContext context)
        {
            _context = context;
        }
        public Task<bool> CheckAsync(string email)
        {
            var account = _context.Accounts.AllAsync(o => o.Email.Equals(email.Trim()));
            return account;
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
                    transaction.Commit();
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
            return user;
        }

        public async Task<ICollection<Account>> GetsAsync()
        {
            return await _context.Accounts.ToListAsync();
        }
        public async Task<ICollection<AccountResult>> GetsAsyncPage(AccountActionModel body)
        {
            var ofsset = (body.CurrentPage * body.NumberItemPage) - body.NumberItemPage;
            var list = await _context.Accounts.Skip(ofsset).Take(body.NumberItemPage).Select(a =>
                 new AccountResult
                 {
                     Id = a.Id,
                     Username = a.Username,
                     Address = a.Address,
                     Avatar = a.Avatar,
                     Firstname = a.Firstname,
                     Lastname = a.Lastname,
                     DateOfBirth = a.DateOfBirth,
                     Class = a.Class,
                     Guid = a.Guid.ToString(),
                     Sex = a.Sex,
                     Email = a.Email,
                     PhoneNumber = a.PhoneNumber,
                     RoleName = a.Role.Name,
                     RoleDescription = a.Role.Description,
                     RoleId = (long)a.RoleId,
                     IsActivated = a.IsActivated
                 }).ToListAsync();
            //loai bo du lieu tuong ung vs cac dieu kien
            if(body.IsActivated != 0)
            {
                list = list.Where(a => a.IsActivated == (body.IsActivated ==1) ? true :false).ToList();
            }
            if (body.RoleId != 0)
            {
                list = list.Where(a => a.RoleId == body.RoleId).ToList();
            }
            if(body.KeySearch != null)
            {
                list = list.Where(a => a.Username.Contains(body.KeySearch)).ToList();
            }
            return list;
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
                    transaction.Commit();
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
        public async Task<bool> ActivateAccount(int id,Account o)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    //get info account
                    var account = await _context.Accounts.FirstOrDefaultAsync(x => x.Id == id);
                    if (account != null)
                    {
                        //only update status active
                        account.IsActivated = o.IsActivated;
                    }
                    _context.Accounts.Update(account);
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

        public Account Login(string TenTaiKhoan, string MatKhau)
        {
            try
            {
                return _context.Accounts.FirstOrDefault(o => o.Username == TenTaiKhoan && o.PasswordHashed == Protector.HashPassword(MatKhau) && o.IsActivated);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return null;
            }
        }
        public int CountAll()
        {
            return _context.Accounts.Count();
        }
    }

}
