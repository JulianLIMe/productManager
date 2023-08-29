import axios from "axios";

export const updateState = (dispatch) => {
  try {
    const URI = "http://localhost:3002/api/products/";
    axios.get(URI).then((responsePromise) => {
      dispatch({ type: "GET_PRODUCTS", payload: responsePromise.data });
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const selectProduct = (dispatch, id) => {
  try {
    if (id === null) {
      dispatch({ type: "SELECT_PRODUCT", payload: null });
    } else {
      const URI = `http://localhost:3002/api/product/${id}`;
      axios.get(URI).then((responsePromise) => {
        dispatch({ type: "SELECT_PRODUCT", payload: responsePromise.data });
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
