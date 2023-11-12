using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BE.Model.Dto
{
    public class UserChangeEmailInputDto
    {
        [Required] public string Username { get; set; }
        [Required][StringLength(16, MinimumLength = 8)] public string CurrentPassword { get; set; }
        [Required] public string CurrentEmail { get; set; }
        [Required] public string NewEmail { get; set; }

    }
}