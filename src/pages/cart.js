import React, { useEffect, useState } from "react";
import Header from "../components/header";
import ProductCard from "../components/productCard";
import axios from "axios";
import Cart from "../components/cart";

const Home = () => {
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

//   useEffect(() => {
//     axios.get("http://localhost:3001/api/v1/users/getProducts")
//       .then(response => {
//         if (response.data && Array.isArray(response.data.data)) {
//           setProducts(response.data.data);
//         } else {
//           setProducts([]); // Ensure products is an array
//         }
//       })
//       .catch(error => {
//         setError(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

  if (loading) {
    return <div>Loading...</div>; // Add a loading state
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Handle and display errors
  }

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
      <Cart/>
    </div>
  );
};

export default Home;
