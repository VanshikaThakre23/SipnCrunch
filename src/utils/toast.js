import { toast } from "react-toastify";

let lastMessage = "";

export const showToast = (message, type = "info") => {
  if (lastMessage === message) return; // prevent duplicate same text
  lastMessage = message;

  const options = {
    position: "top-center",
    autoClose: 1800,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme: "colored",
    style: { fontWeight: "500", fontSize: "1rem" },
    onClose: () => {
      lastMessage = ""; // reset tracker once toast closes
    },
  };

  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "warn":
      toast.warn(message, options);
      break;
    case "info":
    default:
      toast.info(message, options);
  }
};
