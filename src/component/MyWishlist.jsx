import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { useOrders } from "../context/OrderContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./MyOrders.css"; // reuse same CSS for consistency

const MyWishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToOrders } = useOrders();
  const navigate = useNavigate();

  return (
    <div className="orders-page">
      <div className="orders-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h2 className="order-title">
          <i className="fa-solid fa-heart"></i> My Wishlist
        </h2>
      </div>

      {wishlist.length === 0 ? (
        <p className="empty-msg">Your wishlist is empty! 💔</p>
      ) : (
        <div className="wishlist-container">
          {wishlist.map((item) => (
            <div key={item.id} className="wishlist-card">
              <img src={item.img} alt={item.name} className="wishlist-img" />
              <div className="wishlist-info">
                <h3>{item.name}</h3>
                <p>Price: Rs.{item.price}</p>
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
                    Move to Orders
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyWishlist;
