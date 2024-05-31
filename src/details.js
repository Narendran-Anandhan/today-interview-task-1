import React from "react";

const Details = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} style={{ maxWidth: "100%" }} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default Details;
