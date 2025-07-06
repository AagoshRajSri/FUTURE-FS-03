// src/pages/Checkout.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = location.state || { cart: [] };

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleOrder = () => {
    if (!name || !address) {
      alert("Please fill in all fields");
      return;
    }

    const orderSummary = cart
      .map((item) => `${item.name} x${item.quantity}`)
      .join(", ");

    alert(`${orderSummary} will be delivered to ${name} at ${address}`);

    // Optional: redirect to home
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Your Full Name"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Your Address"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          rows="4"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          onClick={handleOrder}
          className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-2 rounded-md hover:scale-105 transition-transform"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
