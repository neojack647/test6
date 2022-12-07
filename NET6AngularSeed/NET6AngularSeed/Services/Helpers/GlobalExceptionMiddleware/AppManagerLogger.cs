using Newtonsoft.Json;
using System.Net.Http.Headers;
using NET6AngularSeed.Context.Models;
using Microsoft.Extensions.Options;

namespace NET6AngularSeed.Services.Helpers.GlobalExceptionMiddleware
{
  public class AppManagerLogger : IAppManagerLogger
  {
    private string AppManagerUrl = Program.AppManagerUrl;
    private string AppGuid = Program.AppGuid;


    private const string ProfileUrl = "AppManager/api/application/profile/";  // AppManagerLogUri
    private const string LogUrl = "AppManager/api/logs";  // AppManagerLogUri

    private readonly ApplicationProfile _appProfile;
    public string BaseAddress { get; set; }

    public AppManagerLogger()
    {
      BaseAddress = AppManagerUrl;
      _appProfile = GenerateApplicationProfile(AppGuid);
    }

    private ApplicationProfile GenerateApplicationProfile(string appGuid)
    {
      return GetResult<ApplicationProfile>($"{ProfileUrl}{appGuid}");
    }

    public void Error(string message)
    {
      var log = CreateApplicationEvent(message, (int)LogType.Error, null, null);
      PostLog(LogUrl, log);
    }

    public void Error(string fmt, params object[] vars)
    {
      throw new NotImplementedException();
    }

    public void Error(Exception exception, string fmt, params object[] vars)
    {
      throw new NotImplementedException();
    }

    public void Error(string message, string sessionId, int? scheduleId)
    {
      ApplicationEventModel log = CreateApplicationEvent(message, (int)LogType.Error, sessionId, scheduleId);
      PostLog(LogUrl, log);
    }

    private void PostLog(string uri, ApplicationEventModel log)
    {
      using (var client = CreateHttpClient())
      {
        string inputJson = JsonConvert.SerializeObject(log);
        HttpContent inputContent = new StringContent(inputJson, System.Text.Encoding.UTF8, "application/json");
        HttpResponseMessage response1 = client.PostAsync(uri, inputContent).Result;
      }
    }

    private HttpClient CreateHttpClient()
    {
      return new HttpClient(new HttpClientHandler { UseDefaultCredentials = true }) { BaseAddress = new Uri(BaseAddress) };
    }

    //private T GetResult<T>(string address)
    //{
    //  using (var client = CreateHttpClient())
    //  {
    //    client.DefaultRequestHeaders.Accept.Clear();
    //    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
    //    var response = client.GetAsync(address).Result;
    //    return response.Content.ReadAsAsync<T>().Result;
    //  }
    //}

    private T GetResult<T>(string address)
    {
      using(var client = CreateHttpClient())
      {
        client.DefaultRequestHeaders.Accept.Clear();
        client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        var response = client.GetAsync(address).Result;
        return response.Content.ReadFromJsonAsync<T>().Result;
      }
    }

    private ApplicationEventModel CreateApplicationEvent(string message, int logType, string sessionId, int? scheduleId)
    {
      return new ApplicationEventModel
      {
        LogType = logType,
        Data = message,
        MachineName = Environment.MachineName,
        Logged = DateTime.Now,
        Application = _appProfile.ApplicationID,
        SessionId = sessionId,
        ScheduleId = scheduleId
      };
    }

    public void Information(string message)
    {
      throw new NotImplementedException();
    }

    public void Information(string fmt, params object[] vars)
    {
      throw new NotImplementedException();
    }

    public void Information(Exception exception, string fmt, params object[] vars)
    {
      throw new NotImplementedException();
    }

    public void Information(string message, string sessionId, int? scheduleId)
    {
      var log = CreateApplicationEvent(message, (int)LogType.Information, sessionId, scheduleId);
      PostLog(LogUrl, log);
    }

    public void Information(Exception exception, string sessionId, int? scheduleId)
    {
      throw new NotImplementedException();
    }

    public void Warning(string message)
    {
      var log = CreateApplicationEvent(message, (int)LogType.Warning, null, null);
      PostLog(LogUrl, log);
    }

    public void Warning(string fmt, params object[] vars)
    {
      throw new NotImplementedException();
    }

    public void Warning(Exception exception, string fmt, params object[] vars)
    {
      throw new NotImplementedException();
    }

    public void Warning(string message, string sessionId, int? scheduleId)
    {
      var log = CreateApplicationEvent(message, (int)LogType.Warning, sessionId, scheduleId);
      PostLog(LogUrl, log);
    }

    public void Warning(Exception exception, string sessionId, int? scheduleId)
    {
      throw new NotImplementedException();
    }

    public void Error(Exception exception, string sessionId, int? scheduleId)
    {
      throw new NotImplementedException();
    }

    public void TraceApi(string componentName, string method, TimeSpan timespan)
    {
      throw new NotImplementedException();
    }

    public void TraceApi(string componentName, string method, TimeSpan timespan, string properties)
    {
      throw new NotImplementedException();
    }

    public void TraceApi(string componentName, string method, TimeSpan timespan, string fmt, params object[] vars)
    {
      throw new NotImplementedException();
    }

    public void TraceApi(string message, string sessionId, int? scheduleId)
    {
      throw new NotImplementedException();
    }

    public void TraceApi(Exception exception, string sessionId, int? scheduleId)
    {
      throw new NotImplementedException();
    }
  }

  public class ApplicationProfile
  {
    public int ApplicationID { get; set; }
    public string AppGUID { get; set; }
    public string AppName { get; set; }
    public string AppDescription { get; set; }
    public int ApplicationClass { get; set; }
    public string CurrentVersion { get; set; }
    public bool? AllowPreviousVersions { get; set; }
    public string AppURL { get; set; }
    public string AppIconPath { get; set; }
    public bool Enabled { get; set; }
    public string ErrorNotificationList { get; set; }
    public string MessageNotificationList { get; set; }
  }

  public class ApplicationEventModel
  {
    public int LogType { get; set; }
    public string Data { get; set; }
    public string MachineName { get; set; }
    public DateTime Logged { get; set; }
    public int? Application { get; set; }
    public string SessionId { get; set; }
    public int? ScheduleId { get; set; }
  }

  public interface ILogEvent
  {
    int LogType { get; set; }
    string Data { get; set; }
    string MachineName { get; set; }
    DateTime Logged { get; set; }
    int? Application { get; set; }
    string SessionId { get; set; }
    int? ScheduleId { get; set; }
  }
  public enum LogType { Information = 1, Warning = 4, Error = 6 }

  public interface IAppManagerLogger
  {
    void Information(string message);
    void Information(string fmt, params object[] vars);
    void Information(Exception exception, string fmt, params object[] vars);
    void Information(string message, string sessionId, int? scheduleId);
    void Information(Exception exception, string sessionId, int? scheduleId);

    void Warning(string message);
    void Warning(string fmt, params object[] vars);
    void Warning(Exception exception, string fmt, params object[] vars);
    void Warning(string message, string sessionId, int? scheduleId);
    void Warning(Exception exception, string sessionId, int? scheduleId);

    void Error(string message);
    void Error(string fmt, params object[] vars);
    void Error(Exception exception, string fmt, params object[] vars);
    void Error(string message, string sessionId, int? scheduleId);
    void Error(Exception exception, string sessionId, int? scheduleId);

    void TraceApi(string componentName, string method, TimeSpan timespan);
    void TraceApi(string componentName, string method, TimeSpan timespan, string properties);
    void TraceApi(string componentName, string method, TimeSpan timespan, string fmt, params object[] vars);
    void TraceApi(string message, string sessionId, int? scheduleId);
    void TraceApi(Exception exception, string sessionId, int? scheduleId);
  }
}
