using NET6AngularSeed.Services.Helpers;
using NET6AngularSeed.Context.Entities;
using NET6AngularSeed.Services;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using NET6AngularSeed.Context.Models;

namespace NET6AngularSeed.Controllers.API
{
  [Route("api/[controller]")]
  [ApiController]
  public class TagController : ControllerBase
  {
    private readonly ITagService _tagService;
    private readonly IMapper _mapper;

    public TagController(ITagService tagService, IMapper mapper)
    {
      _tagService = tagService ?? throw new ArgumentNullException(nameof(tagService));
      _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
    }


    // GET: api/GetTags
    [HttpGet]
    [Route("GetById/{id}")]
    public IActionResult GetById(int id)
    {
      var res = _tagService.GetByIdAsync(id);
      return Ok(res);
    }

    /// <summary>
    /// Get a Tag by Thing Id
    /// </summary>
    /// <param name="id"></param>
    /// <returns>An Async IActionResult</returns>
    /// <response code="200">Returns the requested Thing</response>
    [HttpGet("ThingTags/{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> GetThingTags(int id)
    {
      var res = await _tagService.GetByIdAsync(id);
      return Ok(_mapper.Map<TagDto>(res));
    }


    [HttpGet]
    [Route("Search/{text}")]
    public async Task<IActionResult> Search(string text)
    {
      var res = await _tagService.SearchAsync(text);
      return Ok(_mapper.Map<List<TagDto>>(res));
    }


    /// <summary>
    /// Insert/Update a Tag
    /// /// </summary>
    /// <param name="tag"></param>
    /// <returns>An Async IActionResult</returns>
    /// <response code="200">Returns the Upserted Thing</response>
    [HttpPost]
    [Route("Upsert")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> Upsert([FromBody] TagDto tag)
    {
      var entity = _mapper.Map<Tag>(tag);
      var res = await _tagService.UpsertAsync(entity, User);
      return Ok(_mapper.Map<TagDto>(res));
    }


    [HttpDelete]
    [Route("Delete/{id}")]
    public void DeleteTag(int id)
    {
      _tagService.Delete(id);
    }

  }
}
