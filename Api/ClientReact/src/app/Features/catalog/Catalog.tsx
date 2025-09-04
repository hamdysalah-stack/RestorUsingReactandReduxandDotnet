import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import type { Product } from "../../model/product";


export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
    fetch("http://localhost:5000/api/Product")
      .then((response) => response.json())
      .then((data) => setProducts(data));

    return () => {
      setProducts([]);
    };
  }, []);
  return (
    <>
       <ProductList products={products} />

      </>
  )
}
