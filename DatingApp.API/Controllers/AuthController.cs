using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.DTOs;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _authSvc;
        public AuthController(IAuthRepository authSvc)
        {
            _authSvc = authSvc;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserDto userDto)
        {
            // TODO: Validate request

            userDto.Username = userDto.Username.ToLower();
            if (await _authSvc.UserExists(userDto.Username))
                return BadRequest("Username already exists");
            
            var userToCreate = new User
            {
                Username = userDto.Username
            };

            var careatedUser = await _authSvc.Register(userToCreate, userDto.Password);

            return StatusCode(201);
        }
    }
}