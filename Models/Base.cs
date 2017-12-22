using System;
using System.ComponentModel.DataAnnotations;

namespace HuRe.Models
{
  public class Base 
  {
      [Required]
      [Key]
      public long Id {get;set;}
      public DateTime CreatedDate {get;set;}=DateTime.Now;
      public DateTime ModifiedDate  {get;set;}=DateTime.Now;
  }
}