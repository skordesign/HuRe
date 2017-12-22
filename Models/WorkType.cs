

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models
{
    public class WorkType :Base
    {
        public string Ten { get; set; }
        public string TenVietTat { get; set; }
        public string Tag { get; set; }
        public ICollection<CV> HoSoCaNhans { get; set; }
        public ICollection<Job> CongViecs { get; set; }
    }
}
