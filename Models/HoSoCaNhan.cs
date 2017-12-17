using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models
{
    public class HoSoCaNhan:Base
    {
        public string vi_tri_tim_viec { get; set; }
        public string dia_diem_lam_viec { get; set; }
        public string trinh_do_hoc_van { get; set; }
        public string kinh_nghiem { get; set; }
        public int tai_khoan_id { get; set; }
        public virtual TaiKhoan TaiKhoan { get; set; }
        public int hinh_thuc_lam_viec_id { get; set; }
        public virtual HinhThucLamViec HinhThucLamViec { get; set; }
        public int nhom_viec_id { get; set; }
        public virtual NhomViec NhomViec { get; set; }



    }
}
