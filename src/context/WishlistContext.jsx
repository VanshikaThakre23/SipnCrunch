import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });

  // ✅ Prevent duplicate toasts in Strict Mode
  const toastShownRef = useRef(false);

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
      localStorage.setItem("wishlist", JSON.stringify(updated));

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
      localStorage.setItem("wishlist", JSON.stringify(updated));

      if (!toastShownRef.current) {
        toast.error("Item removed from wishlist 💔");
        toastShownRef.current = true;
        setTimeout(() => (toastShownRef.current = false), 500);
      }

      return updated;
    });
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
