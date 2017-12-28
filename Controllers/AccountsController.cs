using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HuRe.Models;
using HuRe.Models.ActionModel;
using HuRe.ResultModels;
using Microsoft.AspNetCore.Mvc;
using Service.Repositories;

namespace HuRe.Controllers
{
    [Route("api/accounts")]
    public class AccountsController : Controller
    {
        private readonly IAccountRepository _accountRepo;
        public AccountsController(IAccountRepository accountsRepo)
        {
            _accountRepo = accountsRepo;
        }
        [HttpPost]
        public async Task<ICollection<Account>> Post([FromBody]AccountActionModel form)
        {
            var ofsset = (form.CurrentPage * form.NumberItemPage) - form.NumberItemPage;
            var accounts= await _accountRepo.GetsAsyncPage(ofsset, form.NumberItemPage);
            return accounts;
        }
    }
}