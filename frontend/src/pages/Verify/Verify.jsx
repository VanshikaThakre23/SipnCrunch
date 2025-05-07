import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import "./Verify.css"

const Verify = () => {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("Verifying your payment...");

  useEffect(() => {
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");

    if (success === "true") {
      axios
        .post("http://localhost:4000/api/order/verify", { orderId })
        .then((res) => {
          if (res.data.success) {
            setMessage("✅ Payment successful! Your order has been placed.");
          } else {
            setMessage("⚠️ Payment succeeded but verification failed.");
          }
        })
        .catch(() => {
          setMessage("⚠️ Payment succeeded but something went wrong.");
        });
    } else {
      setMessage("❌ Payment was cancelled.");
    }
  }, [searchParams]);

  return (
    <div className="verify-page">
      <h2>{message}</h2>
    </div>
  );
};

export default Verify;
