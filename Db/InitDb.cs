using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Db
{
    public class InitDb
    {
         public static void Init(JobDbContext _context)
        {
            _context.Database.EnsureCreated();
        }
    }
}
