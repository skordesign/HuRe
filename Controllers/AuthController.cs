using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using HuRe.Models.ActionModel;
using HuRe.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Service.Repositories;

namespace HuRe.Controllers
{
    public class AuthController : Controller
    {
        private readonly ITaiKhoanRepository _taiKhoanRepo;
        private readonly IPhanQuyenRepository _phanQuyenRepo;
        public AuthController(ITaiKhoanRepository taiKhoanRepo, IPhanQuyenRepository phanQuyenRepo)
        {
            _taiKhoanRepo = taiKhoanRepo;
            _phanQuyenRepo = phanQuyenRepo;
        }
        [AllowAnonymous]
        [HttpPost]
        [Route("api/login")]
        public async Task<IActionResult> LoginAsync([FromBody]LoginActionModel model)
        {
            if (ModelState.IsValid)
            {
                //This method returns user id from username and password.
                var user = _taiKhoanRepo.Login(model.username, model.password);
                if (user == null)
                {
                    return BadRequest("Tài khoản không tồn tại");
                }
                var claims = new List<Claim>
                {
                    new Claim(JwtRegisteredClaimNames.Sub, model.username),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(JwtRegisteredClaimNames.Iat, DateTimeOffset.UtcNow.ToUnixTimeSeconds().ToString(), ClaimValueTypes.Integer64)
                 };
                var role = await _phanQuyenRepo.GetAsync(user.PhanQuyenId);
                claims.Add(new Claim("Role", role.Ten.ToString()));
                //get role bỏ vào token
                var token = new JwtSecurityToken
                (
                    claims: claims,
                    expires: DateTime.UtcNow.AddDays(60),
                    notBefore: DateTime.UtcNow
                );
                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("sadasdsadq4143213dsdadasdasdasdasdsads"));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                var jwt = new JwtSecurityToken(
                    issuer: "JobHutech",
                    audience: "User",
                    claims: claims,
                    notBefore: DateTime.UtcNow,
                    expires: DateTime.UtcNow.Add(TimeSpan.FromDays(1)),
                    signingCredentials: creds);
                var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
                var response = new
                {
                    token = encodedJwt,
                    guid = user.Guid,
                    expires_in = (int)TimeSpan.FromDays(1).TotalSeconds
                };
                return Ok(response);
            }

            return BadRequest();
        }
    }
}