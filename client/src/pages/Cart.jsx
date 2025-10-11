import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { products, currency, cartItems, updateQuantity } =
    useContext(ShopContext);
  const navigate = useNavigate();

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item]) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14 mx-5">
      {/* Title */}
      <div className="text-2xl mb-6 text-amber-50 font-semibold">
        <h1 className="text-amber-50">YOUR CART</h1>
      </div>

      {/* Cart Items */}
      <div className="space-y-6">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id.toString() === item._id
          );
          if (!productData) return null;

          return (
            <div
              key={index}
              className="py-4 border-t border-b border-gray-600 text-gray-300 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              {/* Left Section - Product Image & Details */}
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20 rounded-md shadow-md"
                  src={productData.image[0]}
                  alt={productData.name}
                />
                <div>
                  <p className="text-sm sm:text-lg font-medium text-amber-50">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <p className="text-gray-200">
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border border-gray-400 rounded-md bg-slate-50 text-black text-xs sm:text-sm">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quantity Input */}
              <input
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                className="border border-gray-500 h-10 w-12 sm:w-20 px-2 py-1 rounded-md bg-gray-900 text-white text-center"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <FontAwesomeIcon
                onClick={() => updateQuantity(item._id, item.size, 0)}
                icon={faTrash}
                className="text-2xl cursor-pointer"
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <button
            onClick={() => navigate("/placeorder")}
            className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold py-3 rounded-xl transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
