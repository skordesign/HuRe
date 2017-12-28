using System;
using System.Threading.Tasks;
using HuRe.ResultModels;
using Microsoft.AspNetCore.Mvc;
using Service.Repositories;

namespace HuRe.Controllers
{
    [Route("api/profiles")]
    public class ProfilesController : Controller
    {
        private readonly IAccountRepository _accountRepo;
        public ProfilesController(IAccountRepository accountsRepo)
        {
            _accountRepo = accountsRepo;
        }
        [HttpPost]
        public async Task<AccountInfo> Post([FromBody]Guid guid)
        {
            var accountExist = await _accountRepo.GetAsync(guid);
            return new AccountInfo
            {
                Username = accountExist.Username,
                Avatar = accountExist.Avatar
            };
        }
    }
}