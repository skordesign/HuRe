﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HuRe.Controllers
{
    [Route("api/[controller]")]
    public class TestController : Controller
    {
        [Authorize(ActiveAuthenticationSchemes = "Bearer")]
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Hello", "World" };
        }
    }
}