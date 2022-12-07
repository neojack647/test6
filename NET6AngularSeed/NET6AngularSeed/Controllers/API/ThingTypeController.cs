using NET6AngularSeed.Context.Entities;
using NET6AngularSeed.Context.Models;
using NET6AngularSeed.Services;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

namespace NET6AngularSeed.Controllers.API;


[Route("api/[controller]")]
[ApiController]
//[Authorize]
public class ThingTypeController : ControllerBase
{
  private readonly IThingTypeService _thingTypeService;
  private readonly IMapper _mapper;


  public ThingTypeController(IThingTypeService thingTypeService, IMapper mapper)
  {
    _thingTypeService = thingTypeService;
    _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
  }

  /// <summary>
  /// Get All ThingTypes
  /// </summary>
  /// <returns>An Async IActionResult</returns>
  /// <response code="200">Returns all the thing types</response>
  [HttpGet]
  [ProducesResponseType(StatusCodes.Status200OK)]
  public async Task<ActionResult<IEnumerable<ThingTypeDto>>> Get()
  {
    var res = await _thingTypeService.GetAllAsync();
    return Ok(_mapper.Map<IEnumerable<ThingTypeDto>>(res));
  }

  /// <summary>
  /// Insert/Update (Upsert) Thing Type
  /// </summary>
  /// <param name="thingType"></param>
  /// <returns>An Async ActionResult</returns>
  /// <response code="200">Returns the Upserted Thing Type</response>
  [HttpPost]
  [ProducesResponseType(StatusCodes.Status200OK)]
  [ProducesResponseType(StatusCodes.Status404NotFound)]
  [ProducesResponseType(StatusCodes.Status400BadRequest)]
  public async Task<ActionResult> Post([FromBody] ThingTypeDto thingType)
  {
    var entity = _mapper.Map<ThingType>(thingType);
    var res = await  _thingTypeService.UpsertAsync(entity, User);
    return Ok(_mapper.Map<ThingTypeDto>(res));
  }

  /// <summary>
  /// Delete a Thing Type
  /// /// </summary>
  /// <param name="id"></param>
  /// <returns>An Async IActionResult</returns>
  /// <response code="200">Returns the Upserted Thing</response>
  [HttpDelete("{id}")]
  [ProducesResponseType(StatusCodes.Status200OK)]
  [ProducesResponseType(StatusCodes.Status404NotFound)]
  [ProducesResponseType(StatusCodes.Status400BadRequest)]
  public void Delete(int id)
  {
    _thingTypeService.Delete(id);
  }

}
