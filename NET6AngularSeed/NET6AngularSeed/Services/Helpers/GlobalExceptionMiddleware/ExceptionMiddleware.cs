using System.Diagnostics;
using System.Net;
using Microsoft.Extensions.Options;
using NET6AngularSeed.Context.Models;

namespace NET6AngularSeed.Services.Helpers.GlobalExceptionMiddleware
{
  public class ExceptionMiddleware
  {
    private readonly RequestDelegate _next;
    private readonly ILogger _logger;
    private readonly Settings _settings;

    public ExceptionMiddleware(RequestDelegate next, ILogger logger, IOptions<Settings> options)
    {
      _logger = logger;
      _next = next;
      _settings = options.Value;
    }

    public async Task InvokeAsync(HttpContext httpContext)
    {
      try
      {
        await _next(httpContext);
      }
      catch (Exception ex)
      {
        _logger.LogError($"Something went wrong: {ex}");
        await HandleExceptionAsync(httpContext, ex);
      }
    }

    private Task HandleExceptionAsync(HttpContext context, Exception exception)
    {
      var request = context.Request.ToString();
      var address = context.Request.Path.Value;
      var userId = context.User.Identity.Name;
      var message = exception.Message;
      var innerExeptionMessage = (exception.InnerException != null) ? exception.InnerException.Message : "";
      var stackTrace = exception.StackTrace;
      // Log Error on App Manager
      LogError(address, userId, request, message, innerExeptionMessage, stackTrace);

      context.Response.ContentType = "application/json";
      context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
      return context.Response.WriteAsync(new ErrorDetails()
      {
        StatusCode = context.Response.StatusCode,
        Message = exception.Message
      }.ToString());
    }

    private static void LogError(
        string address,
        string userId,
        string request,
        string message,
        string innerExeptionMessage,
        string stackTrace)
    {
      var formattedError = FormatError(address, userId, request, message, innerExeptionMessage, stackTrace);
      LogErrorWithFormattedMessage(formattedError);
    }

    public static void LogErrorWithFormattedMessage(string formattedError)
    {
      Trace.TraceError(formattedError);

      //AppManager Logging
      var logger = new AppManagerLogger();
      logger.Error(formattedError);
    }

    public static string FormatError(
        string address,
        string userId,
        string request,
        string message,
        string innerExeptionMessage,
        string stackTrace)
    {
      var formattedError = $"URL: {address} \nUserId: {userId} \nRequest: {request} \nMessage: {message} \n" +
                           $"Inner Exception Message: {innerExeptionMessage} \n------------- \nStackTrace: {stackTrace}";
      return formattedError;
    }

    public static void LogErrorToAppManager(HttpContext httpContext, Exception exception)
    {
      // this is a workaround to send a custom error message to the user and log the exception to app manager
      // using a somewhat different approach than how other exceptions are logged to app manager
      var address = httpContext.Request.Path.Value;
      var userId = httpContext.User.Identity.Name;
      var request = httpContext.Request.ToString();
      var message = exception.Message;
      var innerExeptionMessage = (exception.InnerException != null) ? exception.InnerException.Message : "";
      var stackTrace = exception.StackTrace;
      var formattedErrorMessage = FormatError(
        address, userId, request, message, innerExeptionMessage, stackTrace
      );
      LogErrorWithFormattedMessage(formattedErrorMessage);
    }
  }
}
