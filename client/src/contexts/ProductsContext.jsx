import { createContext, useReducer, useContext, useEffect } from "react";
import axios from "axios";

const INITIAL_SATATE = {
  products: [],
  selectedProduct: null,
};

const ProductsContext = createContext({
  state: INITIAL_SATATE,
  dispatch: () => undefined,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SELECT_PRODUCT":
      return {
        ...state,
        selectedProduct: action.payload,
      };
  }
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_SATATE);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:3002/api/products/")
        .then((responsePromise) => {
          console.log("Delete stricMode to react dont render twice");
          dispatch({ type: "GET_PRODUCTS", payload: responsePromise.data });
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProductContext = () => useContext(ProductsContext);

export { ProductsProvider, useProductContext };
