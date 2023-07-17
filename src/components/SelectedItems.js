import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const SelectedItems = () => {
  const selectedItems = useSelector(
    (state) => state.productReducers.selectedCartItems
  );
  let amount = 0;
  selectedItems.map((item) => (amount += item.price));
  return (
    <div>
      <h1 className="total-amount">Total Amount to Pay :- {amount}</h1>
      {selectedItems.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
};

export default SelectedItems;
