import { actionTypes } from "../contants/action-types";

const initialState = {
  products: [],
};

export const productReducers = (state = initialState, action) => {
  if (action.type === actionTypes.SET_PRODUCTS) {
    return { ...state, products: action.payload };
  }
  return state;
};
