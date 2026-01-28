import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrders } from "../context/OrderContext";
import Navbar from "./Navbar";
import "./Checkout.css";

const Checkout = () => {
  const { orders, getTotalPrice } = useOrders();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    payment: "cod",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.address || !formData.city || !formData.pincode) {
      alert("⚠️ Please fill in all required fields!");
      return;
    }

    alert(` Order placed successfully via ${formData.payment.toUpperCase()}!`);
    navigate("/"); // redirect back to homepage or success page
  };

  return (
    <>
      <Navbar />
      <div className="checkout-page">
        <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
        <h2>Checkout</h2>

        <div className="checkout-container">
          {/* ---------- Left Side: Form ---------- */}
          <div className="checkout-form">
            <h3>Delivery Details</h3>
            <form onSubmit={handlePlaceOrder}>
              <label>Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />

              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />

              <label>Address</label>
              <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>

              <label>City</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} required />

              <label>Pincode</label>
              <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />

              <label>Payment Method</label>
              <select name="payment" value={formData.payment} onChange={handleChange}>
                <option value="cod">Cash on Delivery</option>
                <option value="paypal">PayPal</option>
              </select>

              <button type="submit" className="placeorder-btn">Place Order</button>
            </form>
          </div>

          {/* ---------- Right Side: Order Summary ---------- */}
          <div className="order-summary">
            <h3>Your Order</h3>
            {orders.length === 0 ? (
              <p>No items in your cart.</p>
            ) : (
              <ul>
                {orders.map((item) => (
                  <li key={item.id}>
                    <span>{item.name} × {item.quantity}</span>
                    <span>Rs.{(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            )}

            <hr />
            <h4>Grand Total: Rs.{getTotalPrice()}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
