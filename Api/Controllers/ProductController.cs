using Api.Data;
using Api.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers
{
    // [Route("api/[controller]")]
    // [ApiController]
    public class ProductController : BaseApiController
    {

        private readonly StoreContext context;
        public ProductController(StoreContext _context)
        {
            context = _context;

        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {

            return await context.Products.ToListAsync();

        }
        

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await context.Products.FindAsync(id);
            if (product == null) return NotFound();
            return product;
        }
    }
}
