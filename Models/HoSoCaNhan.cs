using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models
{
    public class HoSoCaNhan:Base
    {
        public string ViTriTimViec { get; set; }
        public string DiaDiem { get; set; }
        public string TrinhDo { get; set; }
        public string KinhNghiem { get; set; }
        public Guid TaiKhoanId { get; set; }
        public virtual TaiKhoan TaiKhoan { get; set; }
        public long HinhThucLamViecId { get; set; }
        public virtual HinhThucLamViec HinhThucLamViec { get; set; }
        public long NhomViecId { get; set; }
        public virtual NhomViec NhomViec { get; set; }



    }
}
