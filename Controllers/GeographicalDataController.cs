using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Examen.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Examen.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GeographicalDataController:ControllerBase
    {
        private GeographicalDataContext _context;
        public GeographicalDataController(GeographicalDataContext context){
            _context=context;
        }

        [HttpGet]
        public async Task<List<GeographicalData>> GetAll(){
            return await _context.GeographicalData.ToListAsync();
        }

        [HttpPost]
        public async Task<IActionResult> create([FromBody]GeographicalData data){
            var exist=await _context.GeographicalData.AnyAsync(x=>x.Latitude==data.Latitude && x.Longitude==data.Longitude);
            if(exist){
                return BadRequest("El usuario se encuentra repetido");
            }
            await _context.GeographicalData.AddAsync(data);
            await _context.SaveChangesAsync();
            return Created("Ok",data);
        }

        [HttpGet("getSumZones")]
        public async Task<IEnumerable<ResumeSumZones>> getSumZones(){
            var groupByZone=await _context.GeographicalData.GroupBy(item=>item.Zone).Select(item=>new ResumeSumZones{
                Zone=item.Key,
                Total=item.Select(group=>group.ValueSale).Sum()
            }).ToListAsync();
            return groupByZone;
        }

    }
}