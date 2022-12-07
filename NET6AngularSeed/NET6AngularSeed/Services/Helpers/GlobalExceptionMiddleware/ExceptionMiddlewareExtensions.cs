using System.Net;
using Microsoft.AspNetCore.Diagnostics;
using NET6AngularSeed.Context.Models;

namespace NET6AngularSeed.Services.Helpers.GlobalExceptionMiddleware
{
  public static class ExceptionMiddlewareExtensions
  {
    public static void ConfigureExceptionHandler(this IApplicationBuilder app, ILogger logger)
    {
      app.UseExceptionHandler(appError =>
      {
        appError.Run(async context =>
        {
          context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
          context.Response.ContentType = "application/json";
          var contextFeature = context.Features.Get<IExceptionHandlerFeature>();
          if (contextFeature != null)
          {
            logger.LogError($"Something went wrong: {contextFeature.Error}");
            await context.Response.WriteAsync(new ErrorDetails()
            {
              StatusCode = context.Response.StatusCode,
              Message = "Internal Server Error."
            }.ToString());
          }
        });
      });
    }

    public static void ConfigureGlobalExceptionMiddleware(this IApplicationBuilder app, ILogger logger)
    {
      app.UseMiddleware<ExceptionMiddleware>(logger);
    }
  }
}
