import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductCard from "./ProductCard";
import Ratings from "./Ratings";
import Categories from "./Categories";
import { motion } from "framer-motion";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducers.products);
  const checkRated = useSelector((state) => state.productReducers.isRated);
  const ratedProducts = useSelector(
    (state) => state.productReducers.ratedItemsArray
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <motion.div
      className="main"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <div className="first">
        <Ratings />
        <Categories />
      </div>
      {checkRated
        ? ratedProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        : products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
    </motion.div>
  );
};

export default Products;
