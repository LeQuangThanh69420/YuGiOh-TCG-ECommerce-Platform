using System.Net;
using System.Net.Mail;
using BE.Controllers;
using Microsoft.AspNetCore.Mvc;

namespace BE.Controllers
{
    public class EmailModel
    {
        public string To { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
    }
    public class EmailController : BaseApiController
    {
        [NonAction]
        public async Task<ActionResult> SendEmail(EmailModel emailModel)
        {
            try
            {
                // Tạo đối tượng SmtpClient để gửi email
                using (SmtpClient smtpClient = new SmtpClient("smtp.gmail.com"))
                {
                    smtpClient.Port = 587;
                    smtpClient.Credentials = new NetworkCredential("thanh0204466@huce.edu.vn", "THANHLONGLOLlol123123123123123");
                    smtpClient.EnableSsl = true;
                    // Tạo đối tượng MailMessage để cấu hình email
                    MailMessage mail = new MailMessage();
                    mail.From = new MailAddress("thanh0204466@huce.edu.vn");
                    mail.To.Add(emailModel.To);
                    mail.Subject = emailModel.Subject;
                    mail.Body = emailModel.Body;
                    // Gửi email
                    await smtpClient.SendMailAsync(mail);
                }
                return Ok("Email sent successfully!");
            }
            catch (Exception ex)
            {
                return BadRequest($"Email sending failed: {ex.Message}");
            }
        }
    }
}