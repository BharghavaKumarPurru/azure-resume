using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

var host = new HostBuilder()
    .ConfigureWebJobs(webJobsBuilder =>
    {
        webJobsBuilder.AddHttp();
        webJobsBuilder.AddCosmosDB();
    })
    .ConfigureLogging(logging =>
    {
    })
    .Build();

host.Run();
