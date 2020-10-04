import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_FAIL,
} from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
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

export const productDetailReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  // Checks the action status type
  switch (action.type) {
    // When its  making  the request
    case PRODUCT_DETAIL_REQUEST:
      return {
        loading: true,
        ...state,
      };

    // If the request was successful
    case PRODUCT_DETAIL_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };

    // If it the request fails
    case PRODUCT_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    //  Default return
    default:
      return state;
  }
};
