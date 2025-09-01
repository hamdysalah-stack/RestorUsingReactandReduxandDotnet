using Api.Entities;
using Microsoft.EntityFrameworkCore;

namespace Api.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        {
        }

        public required DbSet<Product> Products { get; set; }
    }
}