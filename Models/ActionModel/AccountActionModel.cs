using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace HuRe.Models.ActionModel
{
    public class AccountActionModel
    {
         public int CurrentPage { get; set; }
         public int NumberItemPage { get; set; }
          public int IsActivated { get; set; }
         public int RoleId { get; set; }
         public string KeySearch { get; set; }
    }
}
