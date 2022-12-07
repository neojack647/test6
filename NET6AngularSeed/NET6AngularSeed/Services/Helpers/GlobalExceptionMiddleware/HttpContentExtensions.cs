using System.IO;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace NET6AngularSeed.Services.Helpers.GlobalExceptionMiddleware
{
  public static class HttpContentExtensions
  {

    private static readonly JsonSerializerOptions defaultOptions = new JsonSerializerOptions
    {
      PropertyNameCaseInsensitive = true,
      PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
    };

    public static async Task<T> ReadAsAsync<T>(this HttpContent content, JsonSerializerOptions options = null)
    {
      using (Stream contentStream = await content.ReadAsStreamAsync())
      {
        return await JsonSerializer.DeserializeAsync<T>(contentStream, options ?? defaultOptions);
      }
    }

  }
}
