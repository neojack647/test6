using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using static NET6AngularSeed.Services.Helpers.Utilities;

namespace NET6AngularSeed.Context.Entities;
public partial class Auditable: IAuditable
{
  // Audit Tracking
  [Required]
  [StringLength(30)]
  public string InsertBy { get; set; }
  [Column(TypeName = "datetime")]
  public DateTime InsertDate { get; set; }
  [Required]
  [StringLength(30)]
  public string UpdateBy { get; set; }
  [Column(TypeName = "datetime")]
  public DateTime UpdateDate { get; set; }
  [Required]
  [StringLength(1)]
  public string Status { get; set; }
}
