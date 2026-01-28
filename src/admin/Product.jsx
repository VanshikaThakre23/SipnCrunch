import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "https://sipncrunch-backend-buop.onrender.com/api/products"
      );
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add new product
  const handleAdd = async () => {
    try {
      const res = await axios.post(
        "https://sipncrunch-backend-buop.onrender.com/api/products",
        { name, price }
      );
      setProducts([...products, res.data]);
      setName("");
      setPrice("");
    } catch (err) {
      console.log(err);
    }
  };

  // Delete product
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://sipncrunch-backend-buop.onrender.com/api/products/${id}`
      );
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminLayout>
      <h2>Products</h2>

      {/* Add Product Form */}
      <div style={{ margin: "20px 0" }}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={handleAdd}>Add Product</button>
      </div>

      {/* Products List */}
      <ul>
        {products.map((p) => (
          <li key={p._id}>
            {p.name} - ₹{p.price}{" "}
            <button onClick={() => handleDelete(p._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </AdminLayout>
  );
};

export default Products;
