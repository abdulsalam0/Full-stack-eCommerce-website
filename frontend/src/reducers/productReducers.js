import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";
export const productListReducer = (state = { product: [] }, action) => {
  // Checks the action status type
  switch (action.type) {
    // When its  making  the request
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: [],
      };

    // If the request was successful
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };

    // If it the request fails
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    //  Default return
    default:
      return state;
  }
};
