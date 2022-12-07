using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NET6AngularSeed.Context.Entities;

[Table("Thing")]
public class Thing : Auditable
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    [MaxLength(20)]
    public string Name { get; set; }
    [MaxLength(50)]
    public string Description { get; set; }
    public int? TypeId { get; set; }
    [ForeignKey("TypeId")]
    public virtual ThingType Type { get; set; }

    public virtual List<Tag> Tags { get; set; } = new List<Tag>();
}
