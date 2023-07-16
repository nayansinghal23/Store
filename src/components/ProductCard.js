import React from "react";

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    console.log("Added");
  };

  const handleDeleteFromCart = () => {
    console.log("Deleted");
  };
  return (
    <div className="card">
      <h2>{product.title}</h2>
      <div className="middle">
        <img src={product.image} alt="product" className="image" />
        <p className="description">{product.description}</p>
      </div>
      <p className="trio">
        <span>INR {product.price}</span>
        <span>Rating: {product.rating.rate} / 5</span>
        <span>Available: {product.rating.count}</span>
      </p>
      <div className="buttons">
        <button onClick={handleAddToCart}>+</button>
        <button onClick={handleDeleteFromCart}>-</button>
      </div>
    </div>
  );
};

export default ProductCard;
