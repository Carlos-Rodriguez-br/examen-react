using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Examen.Models
{
    public class GeographicalData:IValidatableObject
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string Description { get; set; }
        public float ValueSale { get; set; }
        public Zone Zone { get; set; }
        public float Latitude { get; set; }
        public float Longitude { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            if(!Enum.IsDefined(typeof(Zone),Zone)){
                yield  return  new  ValidationResult ( " La zona no esta registrada " , new  string [] { nameof ( Zone )});
            }
        }
    }
}