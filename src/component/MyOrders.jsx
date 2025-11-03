import React, { useEffect, useState } from "react";
import { useOrders } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./MyOrders.css";

const MyOrders = () => {
  const { orders, removeFromOrders, updateQuantity, getTotalPrice } = useOrders();
  const navigate = useNavigate();

  const [pickupLine, setPickupLine] = useState("");

  const pickupLines = [
    "Your cart’s feeling lonely — add something spicy! 🌶️",
    "Even your cart misses you… feed it some love ❤️",
    "Cart’s empty but your appetite isn’t 😉",
    "Add some flavor — your cart deserves better! 🍔",
  ];

  useEffect(() => {
    if (orders.length === 0) {
      const random = Math.floor(Math.random() * pickupLines.length);
      setPickupLine(pickupLines[random]);
    }
  }, [orders]);

  const parsePrice = (price) =>
    typeof price === "string"
      ? parseFloat(price.replace(/[^\d.]/g, "")) || 0
      : Number(price) || 0;

  return (
    <div className="orders-page">
      <div className="orders-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h2 className="order-title">
          <i className="fa-solid fa-cart-shopping"></i> My Orders
        </h2>
      </div>

      {orders.length === 0 ? (
        <p className="empty-msg">{pickupLine}</p>
      ) : (
        <div className="orders-container">
          {orders.map((item) => (
            <div key={item.id} className="order-card">
              <img src={item.img} alt={item.name} className="order-img" />
              <div className="order-info">
                <h3>{item.name}</h3>
                <p>Price: Rs.{parsePrice(item.price).toFixed(2)}</p>

                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, "decrease")}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, "increase")}>+</button>
                </div>

                <p>Total: Rs.{(parsePrice(item.price) * item.quantity).toFixed(2)}</p>

                <button className="remove-btn" onClick={() => removeFromOrders(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="orders-summary">
            <h3>Grand Total: Rs.{getTotalPrice()}</h3>
            <button className="checkout-btn" onClick={() => navigate("/checkout")}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
