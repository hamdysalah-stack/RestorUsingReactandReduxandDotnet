import ProductList from "./ProductList";
import { useFetchProductQuery } from "./catalogApi";


export default function Catalog() {
  //   const [products, setProducts] = useState<Product[]>([]);


  //   useEffect(() => {
  //   fetch("http://localhost:5000/api/Product")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));

  //   return () => {
  //     setProducts([]);
  //   };
  // }, []);



  const {data,isLoading}=useFetchProductQuery();



  if(isLoading || !data) return <h3>Loading...</h3>
  return (
    <>
       <ProductList products={data} />

      </>
  )
}
