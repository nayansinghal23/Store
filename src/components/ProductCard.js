import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartFunctionality,
  selectedItemsCartFunctionality,
} from "../redux/actions/productActions";

const ProductCard = ({ product }) => {
  const cart = useSelector((state) => state.productReducers.cart);
  const selectedItems = useSelector(
    (state) => state.productReducers.selectedCartItems
  );
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(cartFunctionality(cart + 1));
    dispatch(selectedItemsCartFunctionality([...selectedItems, product]));
  };

  const handleDeleteFromCart = () => {
    if (cart > 0) {
      for (let i = 0; i < selectedItems.length; i++) {
        if (selectedItems[i].id === product.id) {
          selectedItems.splice(i, 1);
          dispatch(selectedItemsCartFunctionality([...selectedItems]));
          dispatch(cartFunctionality(cart - 1));
          break;
        }
      }
    }
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
