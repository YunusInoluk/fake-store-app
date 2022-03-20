import React from "react";
import "./product.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
function Product({ data }) {
  //   console.log(data);
  return (
    <div className="card col-lg-2 col-md-3 m-2">
      <div className="img-block h-50 p-2">
        <img src={data.image} className="card-img-top object-fit" alt="..." />
      </div>
      <div className="card-body">
        <div>
          <h6 className="card-title font-weight-bold">{data.title}</h6>
          <div className="d-flex align-items-center">
            {[...new Array(5)].map((arr, index) => {
              return index < data.rating.rate ? (
                <AiFillStar key={index} />
              ) : (
                <AiOutlineStar key={index} />
              );
            })}
            - {data.rating.count}
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span className="price font-weight-bold">${data.price}</span>
          <a href="#" className="btn btn-primary">
            ADD
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
