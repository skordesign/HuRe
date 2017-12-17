using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models
{
    public class DoanhNghiep :Base
    {
        public string TenDoanhNghiep { get; set; }
        public string TenVietTat { get; set; }
        public string DiaChi { get; set; }
        public string SoDienThoai { get; set; }
        public string Website { get; set; }
        public string QuyMo { get; set; }
        public string URLLogo { get; set; }
        public string NguoiDaiDien { get; set; }
        public string MoTa { get; set; }
        public int NhomViecId { get; set; }
        public virtual NhomViec NhomViec { get; set; }
    }
}
