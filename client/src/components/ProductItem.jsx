import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

export default function ProductItem({ _id, image, name, price }) {
  const { currency, products } = useContext(ShopContext);

  // find product by id
  const product = products.find((p) => p._id === _id);

  if (!product || !product.image) return null;

  return (
    <Link
      className=" text-gray-300 cursor-pointer"
      to={`/product/${product._id}`}
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
