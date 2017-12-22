using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models
{
    public class Role:Base
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public ICollection<Account> Accounts { get; set; }
    }
}
