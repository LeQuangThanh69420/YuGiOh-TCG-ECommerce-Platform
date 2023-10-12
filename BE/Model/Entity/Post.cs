using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BE.Model.Entity
{
    public class Post
    {
        public long PostId { get; set; }
        public string PostContent { get; set; }
        public string? Description { get; set; }
    }
}