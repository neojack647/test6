using NET6AngularSeed.Services.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace NET6AngularSeed.Controllers.API
{
    [Route("api/[controller]")]
    [ApiController]
    public class ADController : ControllerBase
    {
        public ADController()
        {
        }

        // GET: api/GetADServices
        [HttpGet]
        [Route("Search/{name}")]
        public IActionResult GetADUser(string name)
        {
            if (name == null) BadRequest();
            try
            {
                var result = ADUtility.ADSearch(name);
                return Ok(result);
            }
            catch (Exception e)
            {
                return Ok(); // Not an error
            }
        }

        [HttpGet]
        [Route("SearchByUID/{uid}")]
        public IActionResult GetADUserByID(string uid)
        {
            if (uid == null) BadRequest();
            try
            {
                var result = ADUtility.ADSearchByUID(uid);
                return Ok(result);
            }
            catch (Exception e)
            {
                return Ok(); // Not an error
            }
        }

        [HttpGet]
        [Route("ManagerByUIDTest/{uid}")]
        public IActionResult GetADUserMgrByID(string uid)
        {
            if (uid == null) BadRequest();
            try
            {
                var result = ADUtility.ADRetrieveManager(uid);
                return Ok(result);
            }
            catch (Exception e)
            {
                return Ok(); // Not an error
            }
        }

    }
}
