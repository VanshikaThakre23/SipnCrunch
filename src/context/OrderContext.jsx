import React, { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ persist to localStorage
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // ✅ Add item to orders
  const addToOrders = (item) => {
    const numericPrice =
      typeof item.price === "string"
        ? parseFloat(item.price.replace("Rs.", "").trim())
        : Number(item.price);

    setOrders((prevOrders) => {
      const existing = prevOrders.find((order) => order.id === item.id);

      if (existing) {
        // if item already exists, increase quantity
        return prevOrders.map((order) =>
          order.id === item.id
            ? { ...order, quantity: (order.quantity || 1) + 1 }
            : order
        );
      } else {
        // else add new one
        return [...prevOrders, { ...item, price: numericPrice, quantity: 1 }];
      }
    });
  };

  // ✅ Remove item
  const removeFromOrders = (id) => {
    setOrders((prevOrders) => prevOrders.filter((item) => item.id !== id));
  };

  // ✅ Update quantity (increase/decrease)
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

  // ✅ Calculate total price safely
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

  return (
    <OrderContext.Provider
      value={{
        orders,
        addToOrders,
        removeFromOrders,
        updateQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);
