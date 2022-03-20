import React from "react";
import { useLocation } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./ProductDetail.css";

function ProductDetail() {
  const location = useLocation();
  const product = location.state;

  return (
    <div>
      <div className="product-detail container d-flex justify-content-between w-100 py-5 ">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-100 "
            style={{ objectFit: "contain", height: "500px" }}
          />
        </div>
        <div className="col-md-6">
          <span>{product.category}</span>
          <h3 className="font-weight-bold py-2">{product.title}</h3>
          <div className="d-flex align-items-center pb-2">
            {[...new Array(5)].map((arr, index) => {
              return index < product.rating.rate ? (
                <AiFillStar key={index} />
              ) : (
                <AiOutlineStar key={index} />
              );
            })}
            - {product.rating.count}
          </div>
          <p>{product.description}</p>
          <div className="d-flex justify-content-between">
            <h4 className="product-detail-price">${product.price}</h4>
            <button className="btn btn-primary">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
