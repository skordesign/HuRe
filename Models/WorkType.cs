﻿

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models
{
    public class WorkType :Base
    {
        public string Name { get; set; }
        public string ShortName { get; set; }
        public string Tag { get; set; }
        public virtual ICollection<CV> CVs { get; set; }
        public virtual ICollection<Job> Jobs { get; set; }
    }
}
