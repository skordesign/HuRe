using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models
{
    public class NhomViec:Base
    {

        public string ten_nhom_viec { get; set; }
        public string mo_ta { get; set; }
        public string viet_tat { get; set; }
        public string tag { get; set; }
        public string hinh_anh { get; set; }
        public ICollection<HoSoCaNhan> HoSoCaNhans { get; set; }
        public ICollection<DoanhNghiep> DoanhNghieps { get; set; }
    }
}
