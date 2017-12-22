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
        public DbSet<Role> PhanQuyens { get; set; }
        public DbSet<Account> TaiKhoans { get; set; }
        public DbSet<CV> HoSoCaNhans { get; set; }
        public DbSet<JobGroup> NhomViecs { get; set; }
        public DbSet<WorkType> HinhThucLamViecs { get; set; }
        public DbSet<Company> DoanhNghieps { get; set; }
        public DbSet<Job> CongViecs { get; set; }
        public DbSet<Event> SuKiens { get; set; }

        //xử lí ràng buộc thông qua kế thừa hàm OnModelCreating, có thể xử lí trực tiếp trong model
        protected override void OnModelCreating(ModelBuilder builder)
        {
            //set khóa chính
            builder.Entity<Role>().HasKey(k => k.Id);
            builder.Entity<Account>().HasKey(k => k.Guid);
            builder.Entity<Account>()
              .HasOne(o => o.Role)
              .WithMany()
              .HasForeignKey(o => o.RoleId);
            builder.Entity<CV>().HasKey(k => new { k.Id,k.AccountId});
            builder.Entity<CV>()
               .HasOne(o => o.Account)
               .WithMany()
               .HasForeignKey(o => o.AccountId);
            builder.Entity<CV>()
             .HasOne(o => o.JobGroup)
             .WithMany()
             .HasForeignKey(o => o.JobGroupId);
            builder.Entity<CV>()
             .HasOne(o => o.WorkType)
             .WithMany()
             .HasForeignKey(o => o.WorkTypeId);
            builder.Entity<JobGroup>().HasKey(k => k.Id);
            builder.Entity<WorkType>().HasKey(k => k.Id);
            builder.Entity<Event>().HasKey(k => k.Id);
            builder.Entity<Company>().HasKey(k => k.Id);
            builder.Entity<Company>()
              .HasOne(o => o.JobGroup)
              .WithMany()
              .HasForeignKey(o => o.JobGroupId);
            builder.Entity<Job>().HasKey(k => k.Id);
            builder.Entity<Job>()
            .HasOne(o => o.WorkType)
            .WithMany()
            .HasForeignKey(o => o.WorkTypeId);
            builder.Entity<Job>()
           .HasOne(o => o.Company)
           .WithMany()
           .HasForeignKey(o => o.CompanyId);
        }
    }
}
