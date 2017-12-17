using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models
{
    public class NhomViec:Base
    {

        public string Ten { get; set; }
        public string MoTa { get; set; }
        public string VietTat { get; set; }
        public string Tag { get; set; }
        public string URLHinhanh { get; set; }
        public ICollection<HoSoCaNhan> HoSoCaNhans { get; set; }
        public ICollection<DoanhNghiep> DoanhNghieps { get; set; }
    }
}
