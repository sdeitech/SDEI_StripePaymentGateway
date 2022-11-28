using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace payment.Model
{
    
    public class PaymentModel
    {
        public string stripeid { get; set; }
        public int Amount { get; set; }
        public DateTime date { get; set; }
    }
}
