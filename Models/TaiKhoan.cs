using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models
{
    public class TaiKhoan
    {
        public Guid Guid { get; set; }
        public string TenTaiKhoan { get; set; }
        public string Top { get; set; }
        public string Ho { get; set; }
        public string Ten { get; set; }
        public string Email { get; set; }
        public bool GioiTinh { get; set; }
        public DateTime NgaySinh { get; set; }
        public string SDT { get; set; }
        public string DiaChi { get; set; }
        public string MatKhau { get; set; }
        public string Salt { get; set; }
        public string AnhDaiDien { get; set; }
        public int PhanQuyenId { get; set; }
        public virtual PhanQuyen PhanQuyen { get; set; }

    }
}
