import { actionTypes } from "../contants/action-types";

const initialState = {
  products: [],
  cart: 0,
  selectedCartItems: [],
  ratedItemsArray: [],
  isRated: false,
};

export const productReducers = (state = initialState, action) => {
  if (action.type === actionTypes.FETCH_PRODUCTS) {
    return { ...state, products: action.payload };
  } else if (action.type === actionTypes.SET_PRODUCTS) {
    return { ...state, products: action.payload };
  } else if (action.type === actionTypes.CART) {
    return { ...state, cart: action.payload };
  } else if (action.type === actionTypes.SELECTED_ITEMS) {
    return { ...state, selectedCartItems: action.payload };
  } else if (action.type === actionTypes.RATED_ITEMS) {
    return { ...state, ratedItemsArray: action.payload };
  } else if (action.type === actionTypes.IS_RATED) {
    return { ...state, isRated: true };
  }
  return state;
};
