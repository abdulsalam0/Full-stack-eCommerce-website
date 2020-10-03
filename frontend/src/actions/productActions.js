import axios from "axios";

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../constants/productConstants";

//action that will be used to collect data from DB
export const listProducts = () => async (dispatch) => {
  try {
    //while making the request change  type
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("/api/products");

    //changes type if was successful in  getting data
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    //error message is returned if failed
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
