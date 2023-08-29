import React from "react";
import { useProductContext } from "../contexts/ProductsContext";
import { selectProduct } from "../reducers/productsReducers";
import { formatCurrency } from "../utils/formatCurrency";
import "../styles/ListProducts.css"

const ListProducts = () => {
  const { state, dispatch } = useProductContext();

  return (
    <div className="list_products">
      <header>
        <span>Title</span>
        <span>Price</span>
        <span>Category</span>
      </header>
      {state.products.map((product) => {
        return (
          <div
            className="container_product"
            key={product._id}
            onClick={() => selectProduct(dispatch, product._id)}
          >
            <span>{product.title}</span>
            <span>{formatCurrency(product.price)}</span>
            <span>{product.category}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ListProducts;
