using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models.ResultModels
{
    public class AccountResult
    {
        public long Id { get; set; }
        public string Guid { get; set; }
        public string Username { get; set; }
        public string Class { get; set; }
        public string Lastname { get; set; }
        public string Firstname { get; set; }
        public string Email { get; set; }
        public bool Sex { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string Avatar { get; set; }
        public long RoleId { get; set; }

        public string RoleName { get; set; }
        public string RoleDescription { get; set; }

        public bool IsActivated { get; set; }
    }
}
