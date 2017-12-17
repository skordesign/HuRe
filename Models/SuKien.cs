using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models
{
    public class SuKien:Base
    {
        public string ten_su_kien { get; set; }
        public string tieu_de { get; set; }
        public string mo_ta_ngan { get; set; }
        public string noi_dung { get; set; }
        public string dia_diem { get; set; }
        public DateTime thoi_gian_bat_dau { get; set; }
        public DateTime thoi_gian_ket_thuc { get; set; }
    }
}
