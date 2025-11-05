import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState([]);
  const toastShownRef = useRef(false);

  // 🔁 Load user-specific wishlist when user changes
  useEffect(() => {
    if (user && user._id) {
      const key = `wishlist_${user._id}`;
      const savedWishlist = localStorage.getItem(key);
      setWishlist(savedWishlist ? JSON.parse(savedWishlist) : []);
    } else {
      setWishlist([]);
    }
  }, [user?._id]);

  // 💾 Save wishlist to user-specific key
  useEffect(() => {
    if (user && user._id) {
      localStorage.setItem(`wishlist_${user._id}`, JSON.stringify(wishlist));
    }
  }, [wishlist, user?._id]);

  const addToWishlist = (item) => {
    setWishlist((prev) => {
      if (prev.find((w) => w.id === item.id)) {
        if (!toastShownRef.current) {
          toast.info("Item already in wishlist 💚");
          toastShownRef.current = true;
          setTimeout(() => (toastShownRef.current = false), 500);
        }
        return prev;
      }
      const updated = [...prev, item];
      if (!toastShownRef.current) {
        toast.success(`${item.name} added to wishlist! 💚`);
        toastShownRef.current = true;
        setTimeout(() => (toastShownRef.current = false), 500);
      }
      return updated;
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => {
      const updated = prev.filter((w) => w.id !== id);
      if (!toastShownRef.current) {
        toast.error("Item removed from wishlist 💔");
        toastShownRef.current = true;
        setTimeout(() => (toastShownRef.current = false), 500);
      }
      return updated;
    });
  };

  const clearWishlist = () => {
    setWishlist([]);
    if (user && user._id) {
      localStorage.removeItem(`wishlist_${user._id}`);
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
