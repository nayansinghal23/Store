import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const [items, setItems] = useState(0);
  return (
    <div className="navbar">
      <h3>Redux Store</h3>
      <span>
        <AiOutlineShoppingCart />
        {items}
      </span>
    </div>
  );
};

export default Navbar;
