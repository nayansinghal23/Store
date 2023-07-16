import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addProduct } from "../redux/actions/productActions";
import ProductCard from "./ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducers.products);
  // console.log(products);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = await response.data;
      dispatch(addProduct(data));
    };
    fetchData();
  }, []);

  /*
  const list = products.map((product) => (
    <div key={product.id} className="card">
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
    </div>
  ));
  */

  return (
    <div>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
