using Serenity.Web;
using Microsoft.AspNetCore.Mvc;
using OpenAI_API;
using OpenAI_API.Completions;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System;

namespace GeniusOneAi.AiAdvisor.Pages
{
   

    [Route("AiAdvisor/[action]")]
    public class AiAdvisorController : Controller
    {
        private readonly string? openAiApiKey = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("ThirdParty")["Keys:ChatGPT"];

        [PageAuthorize, HttpGet]
        public ActionResult Index()
        {
            return View("~/Modules/AiAdvisor/AiAdvisorIndex.cshtml");
        }
        [PageAuthorize, HttpPost]
        public async Task<IActionResult> SendMessage(string message)
        {
            var response = await GetChatResponseFromOpenAi(message);
            return Json(new AiAdvisorPageModel { Message = response.ToString() });
        }
        [PageAuthorize, HttpPost]
        public async Task<IActionResult> GetMessage(string message)
        {
            var response = await GetFormattedQuestionText(message);
            return Json(new AiAdvisorPageModel { Message = response.ToString() });
        }
        private async Task<string> GetChatResponseFromOpenAi(string message)
        {
            try
            {
                string outPutResult = string.Empty;
                var openai = new OpenAIAPI(openAiApiKey);
                CompletionRequest completionRequest = new CompletionRequest
                {
                    Prompt = message,
                    Model = OpenAI_API.Models.Model.ChatGPTTurboInstruct,
                    MaxTokens = 100,
                    Temperature = 1
                };

                var completions = await openai.Completions.CreateCompletionAsync(completionRequest);

                foreach (var completion in completions.Completions)
                {
                    outPutResult += completion.Text;
                }

                var finalResponse = GetChatTextFormatAnswer(outPutResult);

                return finalResponse;
            }
            catch (Exception ex)
            {
                // Handle the exception appropriately (logging, throwing, etc.)
                //Console.WriteLine($"An error occurred: {ex.Message}");
                return "An error occurred while processing your request.";
            }
        }
        private async Task<string> GetFormattedQuestionText(string message)
        {
            var finalResponse = GetChatTextFormatQuestion(message);
            return finalResponse;
        }
        private static string GetChatTextFormatAnswer(string message)
        {
            var formattedMessage = $"<div class=\"d-flex flex-row justify-content-start mb-4\">" +
                $"<img src=\"/content/serenity/images/blue-logo.png\" alt=\"Chatbot\" style=\"width: 50px; height: 100%;\">" +
                $"<div class=\"p-3 ms-3\" style=\"border-radius: 15px; background-color: rgba(57, 192, 237,.2);\"><p class=\"small mb-0\">{message}</p></div></div>";

            return formattedMessage;
        }
        private static string GetChatTextFormatQuestion(string message)
        {
            var formattedMessage = $"<div class=\"d-flex flex-row justify-content-end mb-4\">" +
                $"<div class=\"p-3 me-3 border\" style=\"border-radius: 15px; background-color: #fbfbfb;\">" +
                $"<p class=\"small mb-0\">{message}</p></div>" +
                $"<img src=\"/content/serenity/images/human.png\" " +
                $"alt=\"User\" style=\"width: 45px; height: 100%;\"></div>";

            return formattedMessage;
        }
    }
}