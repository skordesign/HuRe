using HuRe.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using QHDN_GIT.Models;

namespace HuRe.Db
{
    public class JobDbContext : DbContext
    {
        public JobDbContext(DbContextOptions<JobDbContext> options)
            : base(options)
        { }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<CV> CVs { get; set; }
        public DbSet<JobGroup> JobGroups { get; set; }
        public DbSet<WorkType> WorkTypes { get; set; }
        public DbSet<Company> Companys { get; set; }
        public DbSet<Job> Jobs { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<Apply> Applys { get; set; }

        //xử lí ràng buộc thông qua kế thừa hàm OnModelCreating, có thể xử lí trực tiếp trong model
        protected override void OnModelCreating(ModelBuilder builder)
        {
            //set khóa chính
            builder.Entity<Role>().HasKey(k => k.Id);
            builder.Entity<Account>().HasKey(k => k.Id);
            builder.Entity<Account>()
              .HasOne(o => o.Role)
              .WithMany(o => o.Accounts)
              .HasForeignKey(o => o.RoleId)
              .OnDelete(DeleteBehavior.Cascade);
            builder.Entity<Account>()
                .HasOne(o => o.Company)
                .WithMany(o => o.Accounts)
                .HasForeignKey(o => o.CompanyId)
                .OnDelete(DeleteBehavior.Cascade);
            builder.Entity<CV>().HasKey(k => new { k.Id, k.AccountId });
            builder.Entity<CV>()
               .HasOne(o => o.Account)
               .WithMany()
               .HasForeignKey(o => o.AccountId)
               .OnDelete(DeleteBehavior.Cascade);
            builder.Entity<JobGroup>().HasKey(k => k.Id);
            builder.Entity<WorkType>().HasKey(k => k.Id);
            builder.Entity<Event>().HasKey(k => k.Id);
            builder.Entity<Company>().HasKey(k => k.Id);
            builder.Entity<Job>().HasKey(k => k.Id);
            builder.Entity<Job>()
            .HasOne(o => o.WorkType)
            .WithMany(o => o.Jobs)
            .HasForeignKey(o => o.WorkTypeId)
            .OnDelete(DeleteBehavior.Cascade);
            builder.Entity<Job>()
           .HasOne(o => o.Company)
           .WithMany(o => o.Jobs)
           .HasForeignKey(o => o.CompanyId)
           .OnDelete(DeleteBehavior.Cascade);
            builder.Entity<Job>()
           .HasOne(o => o.JobGroup)
           .WithMany(o => o.Jobs)
           .HasForeignKey(o => o.JobGroupId)
           .OnDelete(DeleteBehavior.Cascade);
            builder.Entity<Apply>()
            .HasKey(k => new { k.AccountId, k.JobId });
            builder.Entity<Apply>()
            .HasOne(o => o.Account)
            .WithMany(o => o.Applys)
            .OnDelete(DeleteBehavior.Cascade);
            builder.Entity<Apply>()
           .HasOne(o => o.Job)
           .WithMany(o => o.Applys)
           .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
