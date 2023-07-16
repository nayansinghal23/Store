import { actionTypes } from "../contants/action-types";

export const addProduct = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};
