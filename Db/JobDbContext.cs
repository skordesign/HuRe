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
            builder.Entity<PhanQuyen>().HasKey(k => k.id);
            builder.Entity<TaiKhoan>().HasKey(k => k.id);
            builder.Entity<TaiKhoan>()
              .HasOne(o => o.PhanQuyen)
              .WithMany()
              .HasForeignKey(o => o.phan_quyen_id);
            builder.Entity<HoSoCaNhan>().HasKey(k => new { k.id,k.tai_khoan_id});
            builder.Entity<HoSoCaNhan>()
               .HasOne(o => o.TaiKhoan)
               .WithMany()
               .HasForeignKey(o => o.tai_khoan_id);
            builder.Entity<HoSoCaNhan>()
             .HasOne(o => o.NhomViec)
             .WithMany()
             .HasForeignKey(o => o.nhom_viec_id);
            builder.Entity<HoSoCaNhan>()
             .HasOne(o => o.HinhThucLamViec)
             .WithMany()
             .HasForeignKey(o => o.hinh_thuc_lam_viec_id);
            builder.Entity<NhomViec>().HasKey(k => k.id);
            builder.Entity<HinhThucLamViec>().HasKey(k => k.id);
            builder.Entity<SuKien>().HasKey(k => k.id);
            builder.Entity<DoanhNghiep>().HasKey(k => k.id);
            builder.Entity<DoanhNghiep>()
              .HasOne(o => o.NhomViec)
              .WithMany()
              .HasForeignKey(o => o.nhom_viec_id);
            builder.Entity<CongViec>().HasKey(k => k.id);
            builder.Entity<CongViec>()
            .HasOne(o => o.HinhThucLamViec)
            .WithMany()
            .HasForeignKey(o => o.hinh_thuc_lam_viec_id);
            builder.Entity<CongViec>()
           .HasOne(o => o.DoanhNghiep)
           .WithMany()
           .HasForeignKey(o => o.doanh_nghiep_id);
        }
    }
}
