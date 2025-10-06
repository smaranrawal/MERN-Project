import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";

export default function FeaturedProducts() {
  const { products } = useContext(ShopContext);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    setFeaturedProducts(products.slice(0, 10));
  }, [products]); 
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Heading */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-amber-50">
          Featured Products
        </h1>
        <p className="text-gray-400 mt-2">
          Check out our top products selected for you
        </p>
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
