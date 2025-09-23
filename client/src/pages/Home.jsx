import React from "react";
import homeImage from "../assets/images/home.jpg";
import mensImage from "../assets/mens/pic1.jpg";
import womensImage from "../assets/womens/img1.jpg";
import kidsImage from "../assets/kids/img1.jpeg";
import shirtImg from "../assets/productsimg/shirt1.webp";
import dressImg from "../assets/productsimg/dress1.png";
import jacketImg from "../assets/productsimg/jacket1.png";
import shoesImg from "../assets/productsimg/shoes1.png";

const Home = () => {
  const products = [
    { name: "Shirt", price: "$49.99", img: shirtImg },
    { name: "Dress", price: "$59.99", img: dressImg },
    { name: "Jacket", price: "$89.99", img: jacketImg },
    { name: "Shoes", price: "$69.99", img: shoesImg },
  ];
  return (
    <>
      <main className="bg-gray-600">
        {/* Hero Section */}
        <section className="relative w-full h-[80vh] flex items-center justify-center">
          <img
            src={homeImage}
            alt="Dream Closet Banner"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">
              Welcome to <span className="text-amber-400">Dream Closet</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl font-light text-white">
              Discover the latest trends in fashion for Men, Women, and Kids
            </p>
            <button className="mt-6 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md transition">
              Shop Now
            </button>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 px-6 md:px-20 bg-gray-50">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-md">
              <img
                src={mensImage}
                alt="Men's Fashion"
                className="w-full h-100 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-2xl font-bold text-white">Men</h3>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-md">
              <img
                src={womensImage}
                alt="Women's Fashion"
                className="w-full h-100 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-2xl font-bold text-white">Women</h3>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-md">
              <img
                src={kidsImage}
                alt="Kids' Fashion"
                className="w-full h-100 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-2xl font-bold text-white">Kids</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 px-6 md:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={product.img}
                  alt={product.item}
                  className="w-full h-60 object-center"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold capitalize">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">$49.99</p>
                  <button className="mt-3 w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-medium transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-amber-500 text-white py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Upgrade Your Wardrobe Today
          </h2>
          <p className="mt-4 text-lg">
            Shop the latest arrivals and exclusive collections only at Dream
            Closet
          </p>
          <button className="mt-6 bg-white text-amber-600 hover:bg-gray-100 px-6 py-3 rounded-full text-lg font-semibold shadow-md transition">
            Explore Collection
          </button>
        </section>
      </main>
    </>
  );
};

export default Home;
