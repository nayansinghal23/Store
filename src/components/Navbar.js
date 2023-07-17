import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state) => state.productReducers.cart);
  const navigate = useNavigate();
  const handleNavigaton = () => {
    navigate("/selectedItems");
  };
  return (
    <div className="navbar">
      <h3>Redux Store</h3>
      <span className="cart" onClick={handleNavigaton}>
        <AiOutlineShoppingCart />
        {cart}
      </span>
    </div>
  );
};

export default Navbar;
