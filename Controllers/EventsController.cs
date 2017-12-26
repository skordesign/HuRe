using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HuRe.Models;
using HuRe.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace HuRe.Controllers
{
    [Route("api/events")]
    public class EventsController : Controller
    {
        private readonly IRepository<Event> _eventRepo;
        
        public EventsController(IRepository<Event> eventRepo)
        {
            _eventRepo = eventRepo;
        }
        // [HttpGet("{id}")]
        // // public async Task<Event> Get(long id)
        // // {
        // //     Event event = await _eventRepo.GetsAsync(id);
        // //     return event;
        // // }
        [HttpGet]
        public async Task<List<Event>> Get()
        {
            
            var events = await _eventRepo.GetsAsync();
            return events.ToList();
        }
        [HttpPost]
        public async Task<bool> Post([FromBody]Event model)
        {
            bool isAdded = await _eventRepo.AddAsync(model);
            return isAdded;
        }
        [HttpPut("{id}")]
        public async Task<bool> Put(long id, [FromBody] Event model)
        {
            bool isUpdated = await _eventRepo.UpdateAsync(model.Id, model);
            return isUpdated;
        }
        [HttpDelete("{id}")]
        public async Task<bool> Delete(long id)
        {
            bool isDeleted = await _eventRepo.RemoveAsync(id);
            return isDeleted;
        }
    }
}
