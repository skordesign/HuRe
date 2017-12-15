using System;


namespace HuRe.Models
{
  public class Base 
  {
      [Required]
      [Key]
      public int id {get;set;}
      public DateTime ngay_tao {get;set;}=DateTime.Now;
      public DateTime ngay_sua {get;set;}=DateTime.Now;
  }
}