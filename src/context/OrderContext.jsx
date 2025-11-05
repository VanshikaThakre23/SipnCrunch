import React, { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // ✅ Load user from localStorage and update cart accordingly
  const loadCartForUser = (user) => {
    if (user) {
      const userKey = `orders_${user.email}`;
      const saved = localStorage.getItem(userKey);
      setOrders(saved ? JSON.parse(saved) : []);
    } else {
      // no user → empty cart (guest reset)
      setOrders([]);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const user = storedUser ? JSON.parse(storedUser) : null;
    setCurrentUser(user);
    loadCartForUser(user);
  }, []);

  // ✅ Listen for login/logout events (triggered in AuthContext)
  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem("user");
      const user = storedUser ? JSON.parse(storedUser) : null;
      setCurrentUser(user);
      loadCartForUser(user);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // ✅ Save cart in correct place when updated
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(`orders_${currentUser.email}`, JSON.stringify(orders));
    }
  }, [orders, currentUser]);

  // ✅ Add item
  const addToOrders = (item) => {
    const numericPrice =
      typeof item.price === "string"
        ? parseFloat(item.price.replace("Rs.", "").trim())
        : Number(item.price);

    setOrders((prevOrders) => {
      const existing = prevOrders.find((order) => order.id === item.id);
      if (existing) {
        return prevOrders.map((order) =>
          order.id === item.id
            ? { ...order, quantity: (order.quantity || 1) + 1 }
            : order
        );
      } else {
        return [...prevOrders, { ...item, price: numericPrice, quantity: 1 }];
      }
    });
  };

  // ✅ Remove item
  const removeFromOrders = (id) => {
    setOrders((prevOrders) => prevOrders.filter((item) => item.id !== id));
  };

  // ✅ Update quantity
  const updateQuantity = (id, action) => {
    setOrders((prevOrders) =>
      prevOrders.map((item) => {
        if (item.id === id) {
          let newQty =
            action === "increase"
              ? item.quantity + 1
              : Math.max(item.quantity - 1, 1);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  // ✅ Get total
  const getTotalPrice = () => {
    const total = orders.reduce((sum, item) => {
      const price =
        typeof item.price === "string"
          ? parseFloat(item.price.replace("Rs.", "").trim())
          : Number(item.price);
      return sum + price * (item.quantity || 1);
    }, 0);
    return total.toFixed(2);
  };

  // ✅ Clear cart manually (use this in logout)
  const clearOrders = () => {
    setOrders([]);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addToOrders,
        removeFromOrders,
        updateQuantity,
        getTotalPrice,
        clearOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);
