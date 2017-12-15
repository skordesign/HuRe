using HuRe.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Db
{
    public class JobDbContext : DbContext
    {
        public JobDbContext(DbContextOptions<JobDbContext> options)
            : base(options)
        { }
        public DbSet<CongViec> CongViecs { get; set; }

        //xử lí ràng buộc thông qua kế thừa hàm OnModelCreating, có thể xử lí trực tiếp trong model
        protected override void OnModelCreating(ModelBuilder builder)
        {
            //set khóa chính
            builder.Entity<CongViec>().HasKey(k => k.id);
        }
    }
}
