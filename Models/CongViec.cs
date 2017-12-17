using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models
{
    public class CongViec :Base
    {
        public string dia_diem { get; set; }
        public string tieu_de { get; set; }
        public string mo_ta_ngan { get; set; }
        public string yeu_cau { get; set; }
        public string kinh_nghiem { get; set; }
        public string chuc_vu { get; set; }
        public string bang_cap { get; set; }
        public string quyen_loi { get; set; }
        public string hinh_thuc_lam_viec { get; set; }
        public string so_luong { get; set; }
        public string thoi_gian { get; set; } //thời gian thử việc 
        public string tag_nganh { get; set; }
        public string gioi_tinh { get; set; }
        public string do_tuoi { get; set; }
        public DateTime han_nop_ho_so { get; set; }
        public string nguoi_lien_he { get; set; }
        public string dia_chi_lien_he { get; set; }
        public string so_dien_thoai_lien_he { get; set; }
        public string luot_nop_ho_so { get; set; }
        public string luot_xem { get; set; }
        public decimal muc_luong_thap_nhat { get; set; }
        public decimal muc_luong_cao_nhat { get; set; }
        public string thong_tin_khac { get; set; }
        public int doanh_nghiep_id { get; set; }
        public virtual DoanhNghiep DoanhNghiep { get; set; }
        public int hinh_thuc_lam_viec_id { get; set; }
        public virtual HinhThucLamViec HinhThucLamViec { get; set; }
    }
}
