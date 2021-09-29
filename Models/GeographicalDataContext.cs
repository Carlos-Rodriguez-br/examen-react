using System;
using Microsoft.EntityFrameworkCore;

namespace Examen.Models
{
    public class GeographicalDataContext:DbContext
    {
        public DbSet<GeographicalData> GeographicalData{ get; set;}

        public GeographicalDataContext(DbContextOptions<GeographicalDataContext> options):base(options){
            
        }
    }
}