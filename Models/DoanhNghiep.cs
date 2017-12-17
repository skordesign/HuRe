using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HuRe.Models
{
    public class DoanhNghiep :Base
    {
        public string ten_doanh_nghiep { get; set; }
        public string ten_viet_tat { get; set; }
        public string dia_chi { get; set; }
        public string so_dien_thoai { get; set; }
        public string website { get; set; }
        public string quy_mo { get; set; }
        public string urlLogo { get; set; }
        public string nguoi_dai_dien { get; set; }
        public string mo_ta { get; set; }
        public int nhom_viec_id { get; set; }
        public virtual NhomViec NhomViec { get; set; }
    }
}
