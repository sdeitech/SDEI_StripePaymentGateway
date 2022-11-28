using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using payment.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace payment.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StripeController : ControllerBase
    {
        [HttpPost]
        [AllowAnonymous]
        [Route("SavePaymnent")]
        public string SavePaymnent([FromBody] PaymentModel tokenModel)
        {
            return "";
          
        }

       
    }
}
