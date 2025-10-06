import React, { useState } from "react";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";

export default function PaymentMethod() {
  // Form state (optional: you can manage with context or form libs)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
    city: "",
    street: "",
    phone: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // 👉 Here you can handle API call / navigate to confirmation page
    console.log("Placing order with data:", formData);
  };

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* LEFT SIDE: User Info */}
      <div className=" text-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-500 pb-3">
          Shipping Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="p-3 rounded-xl bg-gray-800 border border-gray-400 focus:outline-none"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="p-3 rounded-xl bg-gray-800 border border-gray-400 focus:outline-none"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="mt-4 p-3 w-full rounded-xl bg-gray-800 border border-gray-400 focus:outline-none"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={formData.zip}
            onChange={handleChange}
            className="p-3 rounded-xl bg-gray-800 border border-gray-400 focus:outline-none"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="p-3 rounded-xl bg-gray-800 border border-gray-400 focus:outline-none"
          />
        </div>

        <input
          type="text"
          name="street"
          placeholder="Street"
          value={formData.street}
          onChange={handleChange}
          className="mt-4 p-3 w-full rounded-xl bg-gray-800 border border-gray-400 focus:outline-none"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-4 p-3 w-full rounded-xl bg-gray-800 border border-gray-400 focus:outline-none"
        />
      </div>

      {/* RIGHT SIDE: Cart + Payment */}
      <div className=" text-white p-6 rounded-2xl shadow-lg">
        {/* Cart Summary */}
        <CartTotal />

        {/* Payment Method */}
        <h2 className="text-xl font-semibold mt-6 mb-4 border-b border-gray-700 pb-2">
          Payment Method
        </h2>
        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <input type="radio" name="payment" value="cod" defaultChecked />
            <span>Cash on Delivery</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="radio" name="payment" value="card" />
            <span>Credit / Debit Card</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="radio" name="payment" value="esewa" />
            <span>eSewa / Khalti / Online Wallet</span>
          </label>
        </div>

        {/* Place Order Button */}
        <button
          onClick={() => {
            handlePlaceOrder();
            navigate("/order");
          }}
          className="mt-6 w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 rounded-xl transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
