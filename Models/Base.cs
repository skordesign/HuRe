using System;
using System.ComponentModel.DataAnnotations;

namespace HuRe.Models
{
  public class Base 
  {
      [Required]
      [Key]
      public long Id {get;set;}
      public DateTime NgayTao {get;set;}=DateTime.Now;
      public DateTime NgaySua  {get;set;}=DateTime.Now;
  }
}