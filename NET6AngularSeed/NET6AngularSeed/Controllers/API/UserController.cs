using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace NET6AngularSeed.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public UserController()
        {
        }

        [HttpGet]
        [Route("IsAdmin")]
        public IActionResult GetIsAdmin()
        {
            ClaimsPrincipal currentUser = User;
            bool isAdmin = currentUser.IsInRole("TSC_Developers"); // || currentUser.IsInRole("ENOM_Admin"); -- or some AD Group related to App
            return Ok(isAdmin);
        }

        [HttpGet]
        [Route("DashboardAccess")]
        public IActionResult GetDashboardAccess()
        {
            ClaimsPrincipal currentUser = User;
            bool authorized = currentUser.IsInRole("TSC_Developers"); // || currentUser.IsInRole("ENOM_Admin"); -- or some AD Group related to App
            return Ok(authorized);
        }
    }
}
