

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models
{
    public class HinhThucLamViec :Base
    {
        public string ten_hinh_thuc_lam_viec { get; set; }
        public string ten_viet_tat { get; set; }
        public string tag { get; set; }
        public ICollection<HoSoCaNhan> HoSoCaNhans { get; set; }
        public ICollection<CongViec> CongViecs { get; set; }
    }
}
