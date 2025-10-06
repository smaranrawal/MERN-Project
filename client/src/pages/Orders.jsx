import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export default function Orders() {
  const { products, currency } = useContext(ShopContext);

  return (
    // <div className="max-w-5xl mx-auto p-6">
    //   {/* Page heading */}
    //   <h1 className="text-3xl font-bold mb-6">My Orders</h1>

    //   {/* Orders list */}
    //   <div className="space-y-6">
    //     {products.slice(1, 4).map((item, index) => (
    //       <div
    //         key={index}
    //         className="flex items-center justify-between bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
    //       >
    //         {/* Left part: image + details */}
    //         <div className="flex items-center space-x-4">
    //           <img
    //             src={item.image[0]}
    //             alt={item.name}
    //             className="w-20 h-20 object-cover rounded-lg"
    //           />
    //           <div>
    //             <h3 className="text-lg font-semibold">{item.name}</h3>
    //             <p className="text-gray-600">
    //               Price: {currency}
    //               {item.price}
    //             </p>
    //             <p className="text-sm text-gray-500">
    //               Order ID: #{index + 1001}
    //             </p>
    //             <p className="text-sm text-green-600 font-medium">
    //               Status: Shipped
    //             </p>
    //           </div>
    //         </div>

    //         {/* Right part: action */}
    //         <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold rounded-lg transition">
    //           Track Order
    //         </button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="space-y-6">
      {products.slice(1, 4).map((item, index) => {
        return (
          <div
            key={index}
            className="py-4 m-4 border-t border-b border-gray-600 text-gray-300 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
          >
            {/* Left Section - Product Image & Details */}
            <div className="flex items-start gap-6">
              <img
                className="w-16 sm:w-20 rounded-md shadow-md"
                src={item.image[0]}
                alt={item.name}
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-400">
                  Price: {currency}
                  {item.price}
                </p>
                <p className="text-sm text-gray-400">
                  Order ID: #{index + 1001}
                </p>
                <p className="text-sm text-green-600 font-medium">
                  Status: Shipped
                </p>
              </div>
            </div>

            <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold rounded-lg transition">
              Track Order
            </button>
          </div>
        );
      })}
    </div>
  );
}
