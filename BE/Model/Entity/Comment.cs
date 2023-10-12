using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BE.Model.Entity
{
    public class Comment
    {
        public long CommentId { get; set; }
        public string CommentContent { get; set; }
        public long PostId { get; set; }
    }
}