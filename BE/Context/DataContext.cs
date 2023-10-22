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
        public DbSet<Card> Card {get; set; }
        public DbSet<CardType> CardType { get; set; }
        public DbSet<CardElement> CardElement {get; set; }
        public DbSet<CardOrigin> CardOrigin { get; set; }
        public DbSet<CardRarity> CardRarity { get; set; }
    }
}