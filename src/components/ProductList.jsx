import React, { useEffect, useState } from "react";

import Product from "./Product";

function ProductList() {
  let [products, setProducts] = useState([]);
  let [filter, setFilter] = useState(products);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();
    setProducts(data);
    setIsLoading(true);
  }, []);

  const categoryList = [
    ...new Set(products.map((product) => product.category)),
  ];
  const filterCategory = (catItem) => {
    const filteredData = products.filter(
      (product) => product.category === catItem
    );
    setFilter(filteredData);
  };

  return (
    <div className="container mt-3">
      {!isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="d-flex justify-content-between">
            <h4 className="font-weight-bold">Products</h4>
            <ul className="d-flex list-unstyled">
              <li className="category-item px-2">
                <button
                  type="button"
                  className="btn btn-sm border"
                  onClick={() => setFilter(products)}
                >
                  All
                </button>
              </li>
              {categoryList.map((item, i) => (
                <li className="category-item px-2" key={i}>
                  <button
                    type="button"
                    className="btn btn-sm border"
                    onClick={() => filterCategory(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="row d-flex justify-content-center">
            {filter.length
              ? filter.map((product) => (
                  <Product data={product} key={product.id} />
                ))
              : products.map((product) => (
                  <Product data={product} key={product.id} />
                ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
