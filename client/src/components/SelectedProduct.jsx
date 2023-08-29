import React, { useEffect, useState } from "react";
import axios from "axios";
import { useProductContext } from "../contexts/ProductsContext";
import { updateState, selectProduct } from "../reducers/productsReducers";
import FormUpdate from "./FormUpdate";
import { formatCurrency } from "../utils/formatCurrency";
import "../styles/SelectedProduct.css";

const deleteProduct = async (dispatch, id) => {
  try {
    const URI = `http://localhost:3002/api/product/${id}`;
    const response = await axios.delete(URI);
    console.log(response)
    updateState(dispatch);
    selectProduct(dispatch, null);
  } catch (error) {
    console.log(error.message);
  }
};

const SelectedProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useProductContext();

  useEffect(() => {
    updateState(dispatch);
    if (state.selectedProduct) {
      selectProduct(dispatch, state.selectedProduct._id);
    }
  }, [isOpen]);

  return (
    <div className="container_selected">
      {state.selectedProduct && (
        <div className="selected">
          <span>Title: {state.selectedProduct.title}</span>
          <span>Price: {formatCurrency(state.selectedProduct.price)}</span>
          <span>Category: {state.selectedProduct.category}</span>
          <span>Stock: {state.selectedProduct.stock}</span>
          <span className="description">
            Description: {state.selectedProduct.description}
          </span>
          <div className="options">
            <button
              className="delete"
              onClick={() => deleteProduct(dispatch, state.selectedProduct._id)}
            >
              delete
            </button>
            <button className="update" onClick={() => setIsOpen(!isOpen)}>
              update
            </button>
          </div>
        </div>
      )}
      {isOpen && (
        <div className="container_update">
          <FormUpdate setIsOpen={setIsOpen} product={state.selectedProduct} />
        </div>
      )}
    </div>
  );
};

export default SelectedProduct;
