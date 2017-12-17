using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models
{
    public class PhanQuyen:Base
    {
        public string ten_phan_quyen { get; set; }
        public string mo_ta { get; set; }
        public ICollection<PhanQuyen> PhanQuyens { get; set; }
    }
}
