using Microsoft.EntityFrameworkCore;
using NET6AngularSeed.Context;
using NET6AngularSeed.Services;
using Newtonsoft.Json.Serialization;
using NET6AngularSeed.Context.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();


builder.Services.AddControllers().AddNewtonsoftJson(options => {
    options.SerializerSettings.Formatting = Newtonsoft.Json.Formatting.Indented;
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
    options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
});
builder.Services.AddControllersWithViews().AddNewtonsoftJson(options => {
    options.SerializerSettings.Formatting = Newtonsoft.Json.Formatting.Indented;
    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
    options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
});

var connectionString = builder.Configuration["ConnectionStrings:EntityModel"];
builder.Services.AddDbContext<EntityModel>(options => options.UseSqlServer(connectionString));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IThingService, ThingService>();
builder.Services.AddScoped<IThingTypeService, ThingTypeService>();
builder.Services.AddScoped<ITagService, TagService>();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

//builder.Services.AddCors(options => {
//    options.AddPolicy(name: "AllowAll", builder => {
//        builder.WithOrigins("https://localhost:44406")
//                        .WithMethods("GET", "POST", "DELETE")
//                        .AllowAnyHeader()
//                        .AllowCredentials();
//    });
//});

// App Settings Global Variables
AppManagerUrl = builder.Configuration["AppManagerUrl"];
AppGuid = builder.Configuration["AppGuid"];
LDAPAddress = builder.Configuration["LDAPAddress"];


// Build
var app = builder.Build();


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();
app.UseRouting();
// app.UseCors("AllowAll");
app.UseAuthorization();
app.MapSwagger();
app.UseSwaggerUI();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Main}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();


public partial class Program
{
  public static string AppManagerUrl { get; private set; }
  public static string AppGuid { get; private set; }
  public static string LDAPAddress { get; private set; }
}
