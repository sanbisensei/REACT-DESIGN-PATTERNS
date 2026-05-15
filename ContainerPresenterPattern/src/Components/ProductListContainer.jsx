import { useEffect, useState } from "react";
import axios from "axios";
import ProductListPresenter from "./ProductListPresenter";

const ProductListContainer = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/products");
        setData(response.data);
      } catch (error) {
        setError("Failed to fetch products");
      }
    };
    fetchData();
  }, []);
  return (
    <ProductListPresenter
      onAddToCart={handleAddToCart}
      products={data}
      cart={cart}
      error={error}
    />
  );
};

export default ProductListContainer;
