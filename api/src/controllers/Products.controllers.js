import modelProducts from "../models/products.js";

export const getProducts = async (req, res) => {
  try {
    const allProducts = await modelProducts.find({});
    return res.json(allProducts);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getAnProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await modelProducts.findById(id);
    console.log("rrr", product);
    return res.json(product);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    console.log(req.body)
    const newProduct = new modelProducts(req.body);
    await newProduct.save();
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await modelProducts.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json(updatedProduct);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleting = await modelProducts.findByIdAndDelete(id);
    return res.json(deleting);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
