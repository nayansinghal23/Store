import { actionTypes } from "../contants/action-types";

const initialState = {
  products: [],
  cart: 0,
  selectedCartItems: [],
};

export const productReducers = (state = initialState, action) => {
  if (action.type === actionTypes.SET_PRODUCTS) {
    return { ...state, products: action.payload };
  } else if (action.type === actionTypes.CART) {
    return { ...state, cart: action.payload };
  } else if (action.type === actionTypes.SELECTED_ITEMS) {
    return { ...state, selectedCartItems: action.payload };
  }
  return state;
};
