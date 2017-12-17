using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using HuRe.Db;
using Microsoft.EntityFrameworkCore;
using Microsoft.WindowsAzure.Storage.Table;

namespace Service.Repositories
{
    public interface IRepository<T> where T : class
    {
        Task<bool> AddAsync(T o);
        Task<bool> RemoveAsync(long id);
        Task<bool> UpdateAsync(long id,T o);
        Task<T> GetAsync(long id);
        Task<ICollection<T>> GetsAsync();
    }

    public class Repository<T> : IRepository<T> where T : class, new()
    {
        private readonly JobDbContext _context;
        private  const string PrimaryKey = "Id";
        public Repository(JobDbContext ctx)
        {
            _context = ctx;
        }
        public async Task<bool> AddAsync(T o)
        {
            try
            {
                DbSet<T> dbset = _context.Set<T>();
                await dbset.AddAsync(o);

                await _context.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<bool> RemoveAsync(long id)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                var exist = await _context.Set<T>().FindAsync(id);
                if (exist is null) return false;
                _context.Set<T>().Remove(exist);
                await _context.SaveChangesAsync();
                transaction.Commit();
                return true;
            }
        }

        public async Task<bool> UpdateAsync(long id,T o)
        {
            using (var transaction = await _context.Database.BeginTransactionAsync())
            {
                try
                {
                    _context.Set<T>().Update(o);
                     _context.SaveChanges();
                    transaction.Commit();
                    return true;
                }
                catch
                {
                    return false;
                }
            }
        }

        public async Task<T> GetAsync(long id)
        {
            try
            {
                //working with dynamically include
                string[] props = typeof(T).GetProperties().Where(o => o.GetAccessors()[0].IsVirtual)
                .Select(x => x.Name).ToArray();
                foreach (var item in props)
                {
                    await _context.Set<T>().Include(item).ToListAsync();
                }
                var result = await _context.Set<T>().FindAsync(id);
                return result ?? new T();
            }
            catch (Exception ex)
            {
                Console.WriteLine("Catch you bitch");
                Console.WriteLine(ex.Message);
                return new T();
            }
        }

        public async Task<ICollection<T>> GetsAsync()
        {
            string[] props = typeof(T).GetProperties().Where(o => o.GetAccessors()[0].IsVirtual)
                .Select(x => x.Name).ToArray();
            List<T> result = null;
            foreach (var item in props)
            {
                result = await _context.Set<T>().Include(item).ToListAsync();
            }
            return result ?? new List<T>();
        }
    }
}
