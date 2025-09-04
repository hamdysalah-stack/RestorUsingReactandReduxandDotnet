import { Box } from "@mui/material";
import type { Product } from "../../model/product";
import ProductCart from "./ProductCart";

type Props=
{
    products: Product[];

}



export default function ProductList({products}: Props) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 ,justifyContent:'center'}}>
        {products.map((prod) => (
          <li key={prod.id}>
            <h2>
              <ProductCart key={prod.id} product={prod} />
            </h2>
          </li>
        ))}
      </Box>        
  )
}