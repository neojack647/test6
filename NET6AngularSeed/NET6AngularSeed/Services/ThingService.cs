using NET6AngularSeed.Context;
using NET6AngularSeed.Context.Entities;
using NET6AngularSeed.Services.Base;

namespace NET6AngularSeed.Services;

public interface IThingService : IService<Thing>
{
}


public class ThingService : BaseService<Thing, EntityModel>, IThingService
{
  private readonly EntityModel _context;
  public ThingService(EntityModel context)
  {
    _context = context;
  }
}

