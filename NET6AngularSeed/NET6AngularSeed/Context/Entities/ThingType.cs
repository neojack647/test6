using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace NET6AngularSeed.Context.Entities;

[Table("ThingType")]
public class ThingType : Auditable
{
  [Key]
  public int Id { get; set; }
  [MaxLength(20)]
  public string Description { get; set; }
}
