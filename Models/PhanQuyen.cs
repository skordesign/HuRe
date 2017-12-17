using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models
{
    public class PhanQuyen:Base
    {
        public string Ten { get; set; }
        public string MoTa { get; set; }
        public ICollection<PhanQuyen> PhanQuyens { get; set; }
    }
}
