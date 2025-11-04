using AIPlusBackend.Configurations;
using AIPlusBackend.Services;
using AIPlusBackend.Utils;
using Microsoft.Extensions.Options;
using NLog.Extensions.Logging;

var config = new ConfigurationBuilder()
   .SetBasePath(Directory.GetCurrentDirectory())
   .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
   .Build();

NLog.LogManager.Configuration = new NLogLoggingConfiguration(config.GetSection("NLog"));

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<AIPlusConfiguration>(
    builder.Configuration.GetSection("AIPlus"));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder
            .WithExposedHeaders("Content-Type", "Cache-Control")
            .WithOrigins("http://192.168.1.144", "null")
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

builder.Services.AddScoped<AIPlusService>();
builder.Services.AddScoped<AIPlusUtils>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseSwaggerUI();
app.UseSwagger();

app.UseRouting();
app.UseCors("AllowAll");
app.UseAuthorization();
app.MapControllers();

await app.RunAsync();
