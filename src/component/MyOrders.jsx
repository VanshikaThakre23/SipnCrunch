import React, { useEffect } from "react";
import { useOrders } from "../context/OrderContext";
import { useWishlist } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./MyOrders.css";

const MyOrders = () => {
  const { orders, removeFromOrders, updateQuantity, getTotalPrice, addToOrders } = useOrders();
  const { wishlist, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("✅ MyOrders component mounted successfully");
  }, []);

  // 🧮 Helper function to safely parse price
  const parsePrice = (price) => {
    if (typeof price === "string") {
      const numeric = price.replace(/[^\d.]/g, ""); // remove Rs. or spaces
      return parseFloat(numeric) || 0;
    }
    return Number(price) || 0;
  };

  return (
    <>
      <Navbar />

      <div className="orders-page">
        {/* ---------- Header ---------- */}
        <div className="orders-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <h2>🛒 My Orders</h2>
        </div>

        {/* ---------- Orders Section ---------- */}
        {orders.length === 0 ? (
          <p className="empty-msg">No orders yet!</p>
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

        {/* ---------- Wishlist Section ---------- */}
        <div className="wishlist-section">
          <h2>❤️ My Wishlist</h2>
          {wishlist.length === 0 ? (
            <p className="empty-msg">Your wishlist is empty!</p>
          ) : (
            <div className="wishlist-container">
              {wishlist.map((item) => (
                <div key={item.id} className="wishlist-card">
                  <img src={item.img} alt={item.name} className="wishlist-img" />
                  <div className="wishlist-info">
                    <h3>{item.name}</h3>
                    <p>Price: Rs.{parsePrice(item.price).toFixed(2)}</p>
                    <div className="wishlist-btns">
                      <button
                        className="remove-btn"
                        onClick={() => {
                          removeFromWishlist(item.id);
                          toast.info(`${item.name} removed from wishlist ❌`);
                        }}
                      >
                        Remove
                      </button>

                      <button
                        className="order-btn"
                        onClick={() => {
                          addToOrders(item);
                          removeFromWishlist(item.id);
                          toast.success(`${item.name} moved to cart 🛒`);
                        }}
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyOrders;
