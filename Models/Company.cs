using System.Collections.Generic;

namespace HuRe.Models
{
    public class Company : Base
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Logo { get; set; }
        public virtual ICollection<Job> Jobs { get; set; }
    }
}