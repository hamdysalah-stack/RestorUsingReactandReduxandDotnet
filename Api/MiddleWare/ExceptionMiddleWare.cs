
using System.Net;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace Api.MiddleWare;

public class ExceptionMiddleWare(IHostEnvironment env , ILogger<ExceptionMiddleWare> logger) : IMiddleware
{
    public async Task InvokeAsync(HttpContext context, RequestDelegate next)
    {
        try
        {
            await next(context);
        }
        catch (Exception ex)
        {
            await HandleExceptionAsync(context, ex, env, logger);
        }
    }

    private async Task HandleExceptionAsync(HttpContext context, Exception ex, IHostEnvironment env, ILogger<ExceptionMiddleWare> logger)
    {
        logger.LogError(ex, ex.Message);
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

        var response = new ProblemDetails
        {
            // Status = context.Response.StatusCode,
            Status = 500,

            Title = ex.Message,
            Detail = env.IsDevelopment() ? ex.StackTrace?.ToString() : null
        };

        var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };

        var Json = JsonSerializer.Serialize(response, options);
        await context.Response.WriteAsync(Json); 
    }
}