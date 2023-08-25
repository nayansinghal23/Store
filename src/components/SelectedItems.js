import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const SelectedItems = () => {
  const selectedItems = useSelector(
    (state) => state.productReducers.selectedCartItems
  );
  let amount = 0;
  selectedItems.map((item) => (amount += item.price));
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <h1 className="total-amount">Total Amount to Pay :- {amount}</h1>
      {selectedItems.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </motion.div>
  );
};

export default SelectedItems;
