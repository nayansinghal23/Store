import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductCard from "./ProductCard";
import Ratings from "./Ratings";
import Categories from "./Categories";

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
    <div className="main">
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
    </div>
  );
};

export default Products;
