using NET6AngularSeed.Context;
using NET6AngularSeed.Context.Entities;
using NET6AngularSeed.Services.Base;
namespace NET6AngularSeed.Services;

public interface IThingTypeService : IService<ThingType>
{
}


public class ThingTypeService : BaseService<ThingType, EntityModel>, IThingTypeService
{
  private readonly EntityModel _context;
  public ThingTypeService(EntityModel context)
  {
    _context = context;
  }
}
