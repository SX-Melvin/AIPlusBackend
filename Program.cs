using AIPlusBackend.Configurations;
using AIPlusBackend.Dto;
using AIPlusBackend.Services;
using AIPlusBackend.Utils;
using AIPlusBackend.Utils.Scheduler;
using Hangfire;
using Microsoft.EntityFrameworkCore;
using NLog.Extensions.Logging;

var config = new ConfigurationBuilder()
   .SetBasePath(Directory.GetCurrentDirectory())
   .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
   .Build();

NLog.LogManager.Configuration = new NLogLoggingConfiguration(config.GetSection("NLog"));

var builder = WebApplication.CreateBuilder(args);

// Register EF Core with SQL Server
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.Configure<AIPlusConfiguration>(builder.Configuration.GetSection("AIPlus"));
builder.Services.Configure<OTCSConfiguration>(builder.Configuration.GetSection("OTCS"));

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

builder.Services.AddHangfire(x => x.UseSqlServerStorage(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddHangfireServer();

builder.Services.AddScoped<AIPlusService>();
builder.Services.AddScoped<AIPlusUtils>();
builder.Services.AddScoped<TempFileService>();
builder.Services.AddScoped<SyncService>();
builder.Services.AddScoped<ProjectService>();
builder.Services.AddScoped<CSService>();
builder.Services.AddScoped<CSDBUtils>();
builder.Services.AddScoped<OTCSUtils>();

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

var recurringJobs = app.Services.GetRequiredService<IRecurringJobManager>();

// Set scheduler to delete temp files every 10 minutes
recurringJobs.AddOrUpdate<DeleteTempFiles>(
    "delete-temp-files",
    job => job.CheckAndDeleteTempFiles(),
    "*/1 * * * *"
);

await app.RunAsync();
