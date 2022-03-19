import React, { useEffect, useState } from "react";
import Product from "./Product";

function ProductList() {
  let [products, setProducts] = useState([]);
  useEffect(async () => {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();
    setProducts(data);
  }, []);

  return (
    <div className="container mt-3">
      <h4 className="font-weight-bold">Products</h4>
      <div className="row d-flex justify-content-center">
        {products.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
