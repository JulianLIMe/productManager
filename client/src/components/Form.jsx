import React from "react";

const Form = ({product, handleSubmit, handleChanges, action}) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Title</label>
      <input
        type="text"
        name="title"
        value={product.title}
        onChange={(e) => handleChanges(e)}
        required
      />
      <label>Stock</label>
      <input
        type="number"
        name="stock"
        value={product.stock}
        onChange={(e) => handleChanges(e)}
      />
      <label>Price</label>
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={(e) => handleChanges(e)}
      />
      <label>Category</label>
      <select
        name="category"
        value={product.category}
        onChange={(e) => handleChanges(e)}
      >
        <option value="Home">Home</option>
        <option value="Technology">Technology</option>
        <option value="Clothes">Clothes</option>
        <option value="Cleanliness">Cleanliness</option>
        <option value="Groceries">Groceries</option>
        <option value="Other">Other</option>
      </select>
      <label>Description</label>
      <textarea
        name="description"
        value={product.description}
        onChange={(e) => handleChanges(e)}
        cols="25"
        rows="5"
        maxLength={100}
        required
      ></textarea>
      <button>{action}</button>
    </form>
  );
};

export default Form;
