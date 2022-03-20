import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";

function ProductList() {
  let [products, setProducts] = useState([]);
  let [filter, setFilter] = useState(products);
  let [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
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

  const productPerPage = 10;
  const pageVisited = pageNumber * productPerPage;
  const displayProducts = (item) =>
    item.slice(pageVisited, pageVisited + productPerPage).map((product) => {
      return <Product data={product} key={product.id} />;
    });
  const pageCount = Math.ceil(products.length / productPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
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
              ? displayProducts(filter)
              : displayProducts(products)}
          </div>
          <div className="d-flex justify-content-center mt-3 mb-5">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              activeClassName={"active"}
              previousClassName={"page-item"}
              nextClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextLinkClassName={"page-link"}
              disabledClassName={"disabled"}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
