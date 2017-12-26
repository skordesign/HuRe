using HuRe.Db;
using HuRe.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace HuRe.Repositories
{
    public interface IEventRepository : IRepository<Event>
    { IEnumerable<Event> ListNewEvent(int numberEvents);
    }
    public class EventRepository : Repository<Event>, IEventRepository
    {
        private readonly JobDbContext _context;
        public EventRepository(JobDbContext ctx) : base(ctx)
        {
            _context = ctx;
        }
        public IEnumerable<Event> ListNewEvent(int numberEvents)
        {
             return _context.Events.Take(numberEvents).Select(a => new Event
            {
                Id = a.Id,
                Name = a.Name,
                Content=a.Content,
                EndTime=a.EndTime,
                ModifiedDate=a.ModifiedDate,
                Place=a.Place,
                ShortDescription=a.ShortDescription,
                StartTime=a.StartTime,
                Title=a.Title
            }).ToList();
        }
    }
}




// ////
// public IEnumerable<EventsActionModel> ListNewEvents(int numberEvents)
//         {
//             return _context.Events.Include(o=>o.Category).Include(k=>k.Account).OrderByDescending(a => a.AddTime).Take(numberEvents).Select(a => new EventsActionModel
//             {
//                 Id = a.Id,
//                 NameEvents = a.Name,
//                 Donors = a.Donors,
//                 NumberCredits = a.NumberCredits,
//                 DateStart = a.DateStart,
//                 DateEnd = a.DateEnd,
//                 Description = a.Description,
//                 Price = a.Price,
//                 Category = a.Category.Name,
//                 UrlImage = a.UrlImage,
//                 Cetificate = a.Cetificate.Name,
//                 idCategory = a.Category.Id,
//                 idCetificate = a.Cetificate.Id,
//                 idTeacher = a.Account.Id,
//                 Teacher = a.Account.FirstName + a.Account.LastName,
//                 AddTime = a.AddTime,
//                 EditTime = a.EditTime
//             }).ToList();
//         }