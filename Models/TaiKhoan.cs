using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models
{
    public class TaiKhoan:Base 
    {
        public string tai_khoan { get; set; }
        public string lop { get; set; }
        public string ho { get; set; }
        public string ten { get; set; }
        public string email { get; set; }
        public bool gioi_tinh { get; set; }
        public DateTime ngay_sinh { get; set; }
        public string so_dien_thoai { get; set; }
        public string dia_chi { get; set; }
        public string mat_khau { get; set; }
        public string anh_dai_dien { get; set; }
        public int phan_quyen_id { get; set; }
        public virtual PhanQuyen PhanQuyen { get; set; }

    }
}
