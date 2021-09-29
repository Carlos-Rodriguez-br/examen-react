using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Examen.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace Examen.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TemperatureController:ControllerBase
    {
        private readonly HttpClient client;
        private readonly IConfiguration _configuration;

        public TemperatureController(IConfiguration configuration){
            client=new HttpClient();
            _configuration=configuration;
        }

        [HttpGet]
        public async Task<ActionResult<ResponseApiTemperature>> getTemperature(){
            try{
                using (var client = new HttpClient())
                {
                    using (var content = new MultipartFormDataContent())
                    {
                        string urlComplete=_configuration["urlTemperature"] +"?lat="+_configuration["lat"]+"&&lon="+_configuration["lon"]+"&&exclude=minutely,hourly,daily,alerts&units="+_configuration["units"]+"&&appid="+_configuration["apiWeather"];
                        using (
                           var message =
                               await client.GetAsync(urlComplete))
                        {
                            var response = await message.Content.ReadAsStringAsync();
                            var result = JsonSerializer.Deserialize<ResponseApiTemperature>(response);
                            result.current.unit="°C";
                            return result;
                        }
                    }
                }
            }catch(Exception e){
                return Conflict(e);
            }
        }

    }
}