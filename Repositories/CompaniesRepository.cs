﻿using HuRe.Db;
using HuRe.Models;
using HuRe.Models.ActionModel;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Repositories
{
    public interface ICompanyRepository : IRepository<Company>
    {
        Task<ICollection<Company>> GetsAsyncPage(FilterPageActionModel body);
        int CountAll(FilterPageActionModel body);
    }
    public class CompaniesRepository : Repository<Company>, ICompanyRepository
    {
        private readonly JobDbContext _context;
        public CompaniesRepository(JobDbContext ctx) : base(ctx)
        {
            _context = ctx;
        }
        public int CountAll(FilterPageActionModel body)
        {
            var list = _context.Companys.ToList();
            if (body.KeySearch != null)
            {
                list = list.Where(a => a.Name.Contains(body.KeySearch) || a.ShortName.Contains(body.KeySearch)).ToList();
            }
            return list.Count;
        }

        public async Task<ICollection<Company>> GetsAsyncPage(FilterPageActionModel body)
        {
            var list = await _context.Companys.ToListAsync();
            if (body.KeySearch != null)
            {
                list = list.Where(a => a.Name.Contains(body.KeySearch) || a.ShortName.Contains(body.KeySearch)).ToList();
            }
            var ofsset = (body.CurrentPage * body.NumberItemPage) - body.NumberItemPage;
            return list.Skip(ofsset).Take(body.NumberItemPage).ToList();
        }
    }
}