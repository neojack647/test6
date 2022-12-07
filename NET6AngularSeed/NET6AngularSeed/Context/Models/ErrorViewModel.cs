using Newtonsoft.Json;

namespace NET6AngularSeed.Context.Models
{
    public class ErrorViewModel
    {
        public string? RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }

    public class ErrorDetails
    {
      public int StatusCode { get; set; }
      public string Message { get; set; }

      public override string ToString()
      {
        return JsonConvert.SerializeObject(this);
      }
    }
}
