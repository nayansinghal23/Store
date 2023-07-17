import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkForRatedItemsFunctionality,
  ratedItemsFunctionality,
} from "../redux/actions/productActions";

const Categories = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducers.products);
  const checkRated = useSelector((state) => state.productReducers.isRated);
  const handleMenCategory = () => {
    dispatch(checkForRatedItemsFunctionality(checkRated));
    let ratedProducts = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].category === "men's clothing") {
        ratedProducts.push(products[i]);
      }
    }
    dispatch(ratedItemsFunctionality(ratedProducts));
  };
  const handleJeweleryCategory = () => {
    dispatch(checkForRatedItemsFunctionality(checkRated));
    let ratedProducts = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].category === "jewelery") {
        ratedProducts.push(products[i]);
      }
    }
    dispatch(ratedItemsFunctionality(ratedProducts));
  };
  const handleElectronicsCategory = () => {
    dispatch(checkForRatedItemsFunctionality(checkRated));
    let ratedProducts = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].category === "electronics") {
        ratedProducts.push(products[i]);
      }
    }
    dispatch(ratedItemsFunctionality(ratedProducts));
  };
  const handleWomenCategory = () => {
    dispatch(checkForRatedItemsFunctionality(checkRated));
    let ratedProducts = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].category === "women's clothing") {
        ratedProducts.push(products[i]);
      }
    }
    dispatch(ratedItemsFunctionality(ratedProducts));
  };
  return (
    <div>
      <button className="category-btn" onClick={handleMenCategory}>
        Men's
      </button>
      <button className="category-btn" onClick={handleJeweleryCategory}>
        Jewelery
      </button>
      <button className="category-btn" onClick={handleElectronicsCategory}>
        Electronics
      </button>
      <button className="category-btn" onClick={handleWomenCategory}>
        Women's
      </button>
    </div>
  );
};

export default Categories;
