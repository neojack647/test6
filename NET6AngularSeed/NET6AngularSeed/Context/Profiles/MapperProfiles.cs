using AutoMapper;

namespace NET6AngularSeed.Context.Profiles;

public class MapperProfiles : Profile
{
    public MapperProfiles()
  {
      CreateMap<Entities.Thing, Models.ThingDto>().ReverseMap();
      CreateMap<Entities.ThingType, Models.ThingTypeDto>().ReverseMap();
      CreateMap<Entities.Tag, Models.TagDto>().ReverseMap();
  }
}

