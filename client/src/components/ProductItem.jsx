import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { products } from "../assets/assets";

export default function ProductItem({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);

  // find product by id
  const product = products.find((p) => p.id === id);

  if (!product || !product.image) return null;

  return (
    // <Link
    //   to={`/product/${product.id}`}
    //   className="group block bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:border-amber-400 transition duration-300"
    // >
    //   {/* Image wrapper with fixed height */}
    //   <div className="w-full h-64 bg-gray-900 flex items-center justify-center overflow-hidden">
    //     <img
    //       src={product.image}
    //       alt={product.name}
    //       className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-500"
    //     />
    //   </div>

    //   {/* Product Details */}
    //   <div className="p-4">
    //     <h3 className="text-lg font-semibold text-amber-50 group-hover:text-amber-300 transition">
    //       {product.name}
    //     </h3>
    //     <p className="text-amber-400 font-medium mt-1">
    //       {currency}
    //       {product.price}
    //     </p>
    //     <p className="text-gray-400 text-sm mt-2 line-clamp-2">
    //       {product.description}
    //     </p>
    //   </div>
    // </Link>

    <Link
      className=" text-gray-300 cursor-pointer"
      to={`/product/${product.id}`}
    >
      <div className="overflow-hidden ">
        <img
          className=" hover:scale-110 transition duration-300 ease-in-out"
          src={product.image[0]}
          alt={product.name}
        />
      </div>

      <p className="pt-3 pb-1 text-sm">{product.name}</p>
      <p className="text-sm font-medium">
        {currency}
        {product.price}
      </p>
    </Link>
  );
}
