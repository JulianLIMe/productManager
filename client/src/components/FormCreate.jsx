import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import { useProductContext } from "../contexts/ProductsContext";
import { updateState } from "../reducers/productsReducers";
import "../styles/FormCreate.css";

const INITIAL_STATE = {
  title: "",
  stock: 0,
  price: 0,
  category: "Home",
  description: "",
};

const createProduct = (product) => {
  axios
    .post("http://localhost:3002/api/product", product)
    .then((responsePromise) => {
      console.log(responsePromise.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const FormCreate = () => {
  const [product, setProduct] = useState(INITIAL_STATE);
  const { dispatch } = useProductContext();

  const handleChanges = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(product);

    setProduct(INITIAL_STATE);
  };

  useEffect(() => {
    updateState(dispatch);
  }, [product]);

  return (
    <div className="container_create">
      <Form
        product={product}
        handleSubmit={handleSubmit}
        handleChanges={handleChanges}
        action="Create Product"
      />
    </div>
  );
};

export default FormCreate;
