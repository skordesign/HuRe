using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HuRe.Models;
using HuRe.Models.ActionModel;
using HuRe.ResultModels;
using Microsoft.AspNetCore.Mvc;
using Service.Repositories;
using HuRe.Models.ResultModels;
using HuRe.Util;
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
        public async Task<ModelPaging<AccountResult>> Post([FromBody]AccountActionModel form)
        {
            var total = _accountRepo.CountAll();
            var accounts = await _accountRepo.GetsAsyncPage(form);
            return new ModelPaging<AccountResult>
            {
                total = total,
                data = accounts
            };
        }
        [HttpPost("create")]
        public async Task<bool> Create([FromBody]Account form)
        {
            //set pass default 
            form.PasswordHashed = Protector.HashPassword("123456");
            return await _accountRepo.AddAsync(form);
        }
        [HttpPut("{id}")]
        public async Task<bool> Update(int id, [FromBody]Account form)
        {
            return await _accountRepo.ActivateAccount(id, form);
        }
        [HttpGet("{Guid}")]
        public async Task<Account> Get(Guid Guid)
        {
            return await _accountRepo.GetAsync(Guid);
        }
    }
}