import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

export default function CartTotal() {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className=" text-amber-50 p-6 rounded-2xl shadow-lg w-full max-w-md mx-auto">
      {/* Heading */}
      <h1 className="text-2xl font-semibold border-b border-gray-700 pb-3 mb-4">
        Cart Total
      </h1>

      {/* Subtotal */}
      <div className="flex justify-between text-lg py-2">
        <p>Subtotal</p>
        <p>
          {currency} {getCartAmount()}
        </p>
      </div>

      <hr className="border-gray-700" />

      {/* Shipping Fee */}
      <div className="flex justify-between text-lg py-2">
        <p>Shipping fee</p>
        <p>
          {currency}
          {delivery_fee}
        </p>
      </div>

      <hr className="border-gray-700" />

      {/* Total */}
      <div className="flex justify-between text-xl font-bold py-3">
        <b>Total</b>
        <b>
          {currency}
          {getCartAmount() === 0
            ? 0.0
            : (getCartAmount() + delivery_fee).toFixed(2)}
        </b>
      </div>

      {/* Checkout Button */}
      {/* <button
        onClick={() => navigate("/placeorder")}
        className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 rounded-xl transition"
      >
        Proceed to Checkout
      </button> */}
    </div>
  );
}
