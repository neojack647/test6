using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NET6AngularSeed.Context.Entities;

[Table("Tag")]
  public class Tag: Auditable
  {
      [Key]
      public int Id { get; set; }

      [MaxLength(50)]
      public string Description { get; set; }

      public ICollection<Thing> Things { get; } = new List<Thing>();
  }
