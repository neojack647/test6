using System.ComponentModel.DataAnnotations.Schema;
namespace NET6AngularSeed.Context.Entities;

[Table("TagThing")]
public class TagThing
{
  public int TagId { get; set; }
  public int ThingId { get; set; }
  public virtual Thing Thing { get; set; }
  public virtual Tag Tag { get; set; }

}

