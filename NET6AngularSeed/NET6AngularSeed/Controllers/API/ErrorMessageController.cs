using NET6AngularSeed.Services.Helpers;
using NET6AngularSeed.Context.Entities;
using NET6AngularSeed.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using AutoMapper;
using NET6AngularSeed.Context.Models;
using System.Linq.Expressions;
using NET6AngularSeed.Services.Helpers.GlobalExceptionMiddleware;

namespace NET6AngularSeed.Controllers.API;

[Route("api/[controller]")]
[ApiController]
//[Authorize]
public class ErrorMessageController : ControllerBase
{

  public ErrorMessageController()
  {
  }

  /// <summary>
  /// Raise a custom error
  /// </summary>
  /// <returns>An Async IActionResult</returns>
  /// <response code="200">Returns all the things</response>
  [HttpPost("CustomError")]
  [ProducesResponseType(StatusCodes.Status200OK)]
  [ProducesResponseType(StatusCodes.Status400BadRequest)]
  public ActionResult CustomError([FromBody]string customErrorMessage)
  {
    var errorMessage = string.Empty;
    try
    {
      throw new Exception(customErrorMessage);
    }
    catch (Exception e)
    {
      errorMessage += "Custom Error Message: " + e.Message;
      ExceptionMiddleware.LogErrorToAppManager(HttpContext, e);
      return BadRequest(errorMessage);
    }

  }

}
