import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addProduct } from "../redux/actions/productActions";
import ProductCard from "./ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducers.products);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = await response.data;
      dispatch(addProduct(data));
    };
    fetchData();
  }, []);

  return (
    <div className="main">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
