import { actionTypes } from "../contants/action-types";
import fakeApiStore from "../../apis/fakeStoreApi";

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await fakeApiStore.get("/products");
    dispatch({ type: actionTypes.FETCH_PRODUCTS, payload: response.data });
  };
};

export const addProduct = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const cartFunctionality = (cart) => {
  return {
    type: actionTypes.CART,
    payload: cart,
  };
};

export const selectedItemsCartFunctionality = (selectedItems) => {
  return {
    type: actionTypes.SELECTED_ITEMS,
    payload: selectedItems,
  };
};

export const ratedItemsFunctionality = (ratedItems) => {
  return {
    type: actionTypes.RATED_ITEMS,
    payload: ratedItems,
  };
};

export const checkForRatedItemsFunctionality = (rated) => {
  return {
    type: actionTypes.IS_RATED,
    payload: rated,
  };
};
