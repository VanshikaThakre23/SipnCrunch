// src/utils/toast.js
import { toast } from "react-toastify";

// Prevents duplicate toasts
let lastMessage = "";

export const showToast = (message, type = "info") => {
  if (lastMessage === message) return; // avoid duplicates

  lastMessage = message;
  toast[type](message, {
    position: "top-center",
    autoClose: 1800,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme: "colored",
    style: { fontWeight: "500", fontSize: "1rem" },
    onClose: () => (lastMessage = ""), // reset after toast closes
  });
};
