namespace NET6AngularSeed.Context.Models
{
  public class TagDto
  {
    public int Id { get; set; }   
    public string? Description { get; set; }
    public ICollection<ThingDto> Things { get; set; } = new List<ThingDto>();
  }
}
