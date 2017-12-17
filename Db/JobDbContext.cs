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
        public DbSet<PhanQuyen> PhanQuyens { get; set; }
        public DbSet<TaiKhoan> TaiKhoans { get; set; }
        public DbSet<HoSoCaNhan> HoSoCaNhans { get; set; }
        public DbSet<NhomViec> NhomViecs { get; set; }
        public DbSet<HinhThucLamViec> HinhThucLamViecs { get; set; }
        public DbSet<DoanhNghiep> DoanhNghieps { get; set; }
        public DbSet<CongViec> CongViecs { get; set; }
        public DbSet<SuKien> SuKiens { get; set; }

        //xử lí ràng buộc thông qua kế thừa hàm OnModelCreating, có thể xử lí trực tiếp trong model
        protected override void OnModelCreating(ModelBuilder builder)
        {
            //set khóa chính
            builder.Entity<PhanQuyen>().HasKey(k => k.Id);
            builder.Entity<TaiKhoan>().HasKey(k => k.Guid);
            builder.Entity<TaiKhoan>()
              .HasOne(o => o.PhanQuyen)
              .WithMany()
              .HasForeignKey(o => o.PhanQuyenId);
            builder.Entity<HoSoCaNhan>().HasKey(k => new { k.Id,k.TaiKhoanId});
            builder.Entity<HoSoCaNhan>()
               .HasOne(o => o.TaiKhoan)
               .WithMany()
               .HasForeignKey(o => o.TaiKhoanId);
            builder.Entity<HoSoCaNhan>()
             .HasOne(o => o.NhomViec)
             .WithMany()
             .HasForeignKey(o => o.NhomViecId);
            builder.Entity<HoSoCaNhan>()
             .HasOne(o => o.HinhThucLamViec)
             .WithMany()
             .HasForeignKey(o => o.HinhThucLamViecId);
            builder.Entity<NhomViec>().HasKey(k => k.Id);
            builder.Entity<HinhThucLamViec>().HasKey(k => k.Id);
            builder.Entity<SuKien>().HasKey(k => k.Id);
            builder.Entity<DoanhNghiep>().HasKey(k => k.Id);
            builder.Entity<DoanhNghiep>()
              .HasOne(o => o.NhomViec)
              .WithMany()
              .HasForeignKey(o => o.NhomViecId);
            builder.Entity<CongViec>().HasKey(k => k.Id);
            builder.Entity<CongViec>()
            .HasOne(o => o.HinhThucLamViec)
            .WithMany()
            .HasForeignKey(o => o.HinhThucLamViecId);
            builder.Entity<CongViec>()
           .HasOne(o => o.DoanhNghiep)
           .WithMany()
           .HasForeignKey(o => o.DoanhNghiepId);
        }
    }
}
