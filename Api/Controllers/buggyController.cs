using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    public class buggyController : BaseApiController
    {
        [HttpGet("not-found")]
        public IActionResult GetNotFoundRequest()
        {
            return NotFound();
        }


        [HttpGet("bad-request")]
        public IActionResult GetBadRequest()
        {
            return BadRequest("This is a bad request");
        }


        [HttpGet("unauthorized")]
        public IActionResult GetUnauthorized()
        {
            return Unauthorized("This is an unauthorized request");
        }


        [HttpGet("validation-error")]
        public IActionResult GetValidationError()
        {
            ModelState.AddModelError("Problem1", "This is the first problem");
            ModelState.AddModelError("Problem2", "This is the second problem");
            return ValidationProblem();
        }


        [HttpGet("server-error")]
        public IActionResult GetServerError()
        {
            throw new Exception("This is a server error");
        }

    

}
}