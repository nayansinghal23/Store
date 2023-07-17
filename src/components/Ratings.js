import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkForRatedItemsFunctionality,
  ratedItemsFunctionality,
} from "../redux/actions/productActions";

const Ratings = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducers.products);
  const checkRated = useSelector((state) => state.productReducers.isRated);

  const [rate, setRate] = useState("");
  const handleSubmitRatings = () => {
    dispatch(checkForRatedItemsFunctionality(checkRated));
    let ratedProducts = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i].rating.rate >= rate) {
        ratedProducts.push(products[i]);
      }
    }
    dispatch(ratedItemsFunctionality(ratedProducts));
    setRate("");
  };
  return (
    <div>
      <h4>Ratings: </h4>
      <input
        type="text"
        className="rating-input"
        placeholder="Enter between 0 to 5"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <button
        type="submit"
        className="rating-btn"
        onClick={handleSubmitRatings}
      >
        Find
      </button>
    </div>
  );
};

export default Ratings;
