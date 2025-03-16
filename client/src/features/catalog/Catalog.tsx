import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { getWithAuth } from "../../app/api/api";

export default function Catalog() {
  
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

    // useEffect (() => {
    //   fetch('https://localhost:5001/api/products')
    //     .then(resopne => resopne.json())
    //     .then(data => setProducts(data))
    // }, [])
    useEffect(() => {
      const fetchData = async () => {
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const response = await getWithAuth<any>("https://restore-course-walter.azurewebsites.net/api/products");
          setProducts(response)
        } catch (err) {
          setError("Error fetching data. Please log in again." + err);
        }
      };
  
      fetchData();
    }, []);
    
  return (
    <>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <ProductList products={products}/>
    </>
  )
}