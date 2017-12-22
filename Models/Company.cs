using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models
{
    public class Company :Base
    {
        public string Name { get; set; }
        public string ShortName { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string Website { get; set; }
        public string Scales { get; set; }
        public string URLLogo { get; set; }
        public string Representor { get; set; }
        public string Description { get; set; }
        public long JobGroupId { get; set; }
        public virtual JobGroup JobGroup { get; set; }
    }
}
