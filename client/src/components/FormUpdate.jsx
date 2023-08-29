import React, { useState } from "react";
import axios from "axios";
import Form from "./Form";
import "../styles/FormUpdate.css";

const upProduct = (product, id) => {
  axios
    .put(`http://localhost:3002/api/product/${id}`, product)
    .then((responsePromise) => {
      console.log(responsePromise.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const FormUpdate = ({ setIsOpen, product }) => {
  const { _id, title, stock, price, category, description } = product;
  const [updateProduct, setUpdateProduct] = useState({
    title,
    stock,
    price,
    category,
    description,
  });

  const handleChanges = (e) => {
    setUpdateProduct({
      ...updateProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    upProduct(updateProduct, product._id);
    setIsOpen(false);
  };

  return (
    <div className="container_updating">
      <button className="close" onClick={() => setIsOpen(false)}>
        X
      </button>
      <Form
        product={updateProduct}
        handleSubmit={handleSubmit}
        handleChanges={handleChanges}
        action="Update Product"
      />
    </div>
  );
};

export default FormUpdate;
