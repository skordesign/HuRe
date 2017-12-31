using System;
using HuRe.Models;

namespace QHDN_GIT.Models
{
    public class Apply
    {
        public long JobId { get; set; }
        public virtual Job Job { get; set; }
        public long AccountId { get; set; }
        public virtual Account Account { get; set; }
        public DateTime TimeApply { get; set; }
        public string Status { get; set; }
    }
}