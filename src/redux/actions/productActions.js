import { actionTypes } from "../contants/action-types";

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
