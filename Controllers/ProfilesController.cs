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
        public async Task<AccountInfo> Post([FromBody]string guid)
        {
            var accountExist = await _accountRepo.GetAsync(Guid.Parse(guid));
            return new AccountInfo
            {
                Username = accountExist.Username,
                Avatar = accountExist.Avatar
            };
        }
    }
}