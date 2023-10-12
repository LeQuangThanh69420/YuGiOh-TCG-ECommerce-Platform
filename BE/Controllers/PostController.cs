using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE.Context;
using BE.Model.Dto;
using BE.Model.Entity;
using Microsoft.AspNetCore.Mvc;

namespace BE.Controllers
{
    public class PostController : BaseApiController
    {
        private readonly DataContext _context;
        public PostController(DataContext context) 
        {
            _context = context;
        }
        //search
        [HttpGet("searchPost")]
        public ActionResult<List<Post>> searchPost([FromQuery]PostInputSearchDto input) {
            return _context.Post.Where(p => (input.PostContent==null || input.PostContent=="" || input.PostContent==" " || p.PostContent.Contains(input.PostContent))).ToList();
        }
        //createOrEdit
        //[HttpPost]
        //delete
        //[HttpDelete]
    }
}