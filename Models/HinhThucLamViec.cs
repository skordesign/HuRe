

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models
{
    public class HinhThucLamViec :Base
    {
        public string Ten { get; set; }
        public string TenVietTat { get; set; }
        public string Tag { get; set; }
        public ICollection<HoSoCaNhan> HoSoCaNhans { get; set; }
        public ICollection<CongViec> CongViecs { get; set; }
    }
}
