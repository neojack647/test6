using NET6AngularSeed.Services.Helpers;
using NET6AngularSeed.Context.Entities;
using NET6AngularSeed.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using AutoMapper;
using NET6AngularSeed.Context.Models;
using System.Linq.Expressions;

namespace NET6AngularSeed.Controllers.API;

[Route("api/[controller]")]
[ApiController]
//[Authorize]
public class ThingController : ControllerBase
{
  private readonly IThingService _thingService;
  private readonly IMapper _mapper;

  public ThingController(IThingService thingService, IMapper mapper)
  {
    _thingService = thingService ?? throw new ArgumentNullException(nameof(thingService));
    _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
  }

  /// <summary>
  /// Get All Things
  /// </summary>
  /// <returns>An Async IActionResult</returns>
  /// <response code="200">Returns all the things</response>
  [HttpGet]
  [ProducesResponseType(StatusCodes.Status200OK)]
  public async Task<ActionResult<IEnumerable<ThingDto>>> GetThings()
  {
    var res = await _thingService.GetAllAsync();
    return Ok(_mapper.Map<IEnumerable<ThingDto>>(res));
  }

  /// <summary>
  /// Get All Things
  /// </summary>
  /// <returns>An Async IActionResult</returns>
  /// <response code="200">Returns all the things with type</response>
  [HttpGet]
  [Route("GetThingsIncludeType")]
  [ProducesResponseType(StatusCodes.Status200OK)]
  public async Task<ActionResult<IEnumerable<ThingDto>>> GetThingsIncludeType()
  {
    string[] includes = new string[] { "Type" };
    var res = await _thingService.GetAsync(null, null, includes);
    return Ok(_mapper.Map<IEnumerable<ThingDto>>(res));
  }

  /// <summary>
  /// Get a Thing Collection in Pagaing
  /// </summary>
  /// <param name="parameters"></param>
  /// <returns>An IActionResult Paging Metadata + Collection</returns>
  /// <response code="200">Returns the requested page of things</response>
  [HttpPost]
  [Route("ByPage")]
  [ProducesResponseType(StatusCodes.Status200OK)]
  [ProducesResponseType(StatusCodes.Status404NotFound)]
  [ProducesResponseType(StatusCodes.Status400BadRequest)]
  public IActionResult GetByPage([FromBody] PagingParameters parameters)
  {
    var term = parameters.SearchValue.ToLower();
    Expression<Func<Thing, bool>> filters = x => x.Name.ToLower().Contains(term) || x.Description.ToLower().Contains(term);
    Expression<Func<Thing, object>>[] includes = { x => x.Type, x => x.Tags };
    var result = _thingService.SearchPaging(parameters.SearchValue, parameters.PageSize, parameters.PageNumber,
         parameters.OrderBy, parameters.Direction, includes, filters);
    var collectionDto = _mapper.Map<List<ThingDto>>(result.Collection);
    result.Collection = collectionDto.Cast<dynamic>().ToList();
    return Ok(result);
  }

  /// <summary>
  /// Get a Thing by Id
  /// </summary>
  /// <param name="id"></param>
  /// <returns>An Async IActionResult</returns>
  /// <response code="200">Returns the requested Thing</response>
  [HttpGet("{id}")]
  [ProducesResponseType(StatusCodes.Status200OK)]
  [ProducesResponseType(StatusCodes.Status404NotFound)]
  [ProducesResponseType(StatusCodes.Status400BadRequest)]
  public async Task<IActionResult> GetThing(int id)
  {
    //var res = await _thingService.GetByIdAsync(id);
    Expression<Func<Thing, bool>> filter = x => x.Id == id;
    string[] includes = new string[] { "Type", "Tags" };
    var res = await _thingService.GetAsync(filter, null, includes);
    return Ok(_mapper.Map<ThingDto>(res.FirstOrDefault()));
  }

  /// <summary>
  /// Insert/Update a Thing
  /// /// </summary>
  /// <param name="thing"></param>
  /// <returns>An Async IActionResult</returns>
  /// <response code="200">Returns the Upserted Thing</response>
  [HttpPost]
  [Route("Upsert")]
  [ProducesResponseType(StatusCodes.Status200OK)]
  [ProducesResponseType(StatusCodes.Status400BadRequest)]
  public async Task<IActionResult> Upsert([FromBody] ThingDto thing)
  {
    var entity = _mapper.Map<Thing>(thing);
    var res = await _thingService.UpsertAsync(entity, User);
    return Ok(_mapper.Map<ThingDto>(res));
  }

  /// <summary>
  /// Delete a Thing
  /// /// </summary>
  /// <param name="id"></param>
  /// <returns>An Async IActionResult</returns>
  /// <response code="200">Returns the Upserted Thing</response>
  [HttpDelete]
  [Route("Delete/{id}")]
  public void DeleteThing(int id)
  {
    _thingService.Delete(id);
  }

}
