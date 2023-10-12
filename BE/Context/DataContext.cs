using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BE.Model.Entity;
using Microsoft.EntityFrameworkCore;

namespace BE.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Post> Post { get; set; }
        public DbSet<Comment> Comment { get; set; }
    }
}