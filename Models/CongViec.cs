using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models
{
    public class CongViec :Base
    {
        public string DiaDiem { get; set; }
        public string TieuDe { get; set; }
        public string MoTaNgan { get; set; }
        public string YeuCau { get; set; }
        public string KinhNghiem { get; set; }
        public string ChucVu { get; set; }
        public string BangCap { get; set; }
        public string QuyenLoi { get; set; }
        public string SoLuong { get; set; }
        public string ThoiGian { get; set; } //thời gian thử việc 
        public string TagNganh { get; set; }
        public string GioiTinh { get; set; }
        public string DoTuoi { get; set; }
        public DateTime HanNopHoSo { get; set; }
        public string NguoiLienHe { get; set; }
        public string DiaChiLienHe { get; set; }
        public string SDTLienHe { get; set; }
        public string LuotNopHoSo { get; set; }
        public string LuotXem { get; set; }
        public decimal MucLuongThapNhat { get; set; }
        public decimal MucLuongCaoNhat { get; set; }
        public string ThongTinKhac { get; set; }
        public int DoanhNghiepId { get; set; }
        public virtual DoanhNghiep DoanhNghiep { get; set; }
        public int HinhThucLamViecId { get; set; }
        public virtual HinhThucLamViec HinhThucLamViec { get; set; }
    }
}
