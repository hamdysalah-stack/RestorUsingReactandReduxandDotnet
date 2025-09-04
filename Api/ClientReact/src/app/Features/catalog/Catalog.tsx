import type { Product } from "../../model/product";
import ProductList from "./ProductList";

type Props = {
  products: Product[];
};

export default function Catalog({products}: Props) {
  return (
    <>
       <ProductList products={products} />

      </>
  )
}
