namespace NET6AngularSeed.Context.Models
{
  public class ThingDto
  {
    public int Id { get; set; }
    public string Name { get; set; } = String.Empty;
    
    public string? Description { get; set; }
    public int? TypeId { get; set; }

    public ThingTypeDto Type { get; set; }

    public ICollection<TagDto> Tags { get; set; } = new List<TagDto>();
  }
}
