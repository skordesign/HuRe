using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models
{
    public class SuKien:Base
    {
        public string Ten { get; set; }
        public string TieuDe { get; set; }
        public string MoTaNgan { get; set; }
        public string NoiDung { get; set; }
        public string DiaDiem { get; set; }
        public DateTime ThoiGianBatDau { get; set; }
        public DateTime ThoiGianKetThuc { get; set; }
    }
}
