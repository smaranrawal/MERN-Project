import React, { useContext } from "react";
import homeImage from "../assets/images/home.jpg";
import mensImage from "../assets/mens/pic1.jpg";
import womensImage from "../assets/womens/img1.jpg";
import kidsImage from "../assets/kids/img1.jpeg";
import shirtImg from "../assets/productsimg/shirt1.webp";
import dressImg from "../assets/productsimg/dress1.png";
import jacketImg from "../assets/productsimg/jacket1.png";
import shoesImg from "../assets/productsimg/shoes1.png";
import { Link } from "react-router-dom";
import Products from "./Products";
import FeaturedProducts from "../components/FeaturedProducts";
import { ShopContext } from "../context/ShopContext";

const Home = () => {
  const { user } = useContext(ShopContext);

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

            {/* Personalized Username Section */}
            {user && (
              <p className="mt-4 text-3xl font-semibold drop-shadow-md animate-fadeIn">
                {/* <span className="text-amber-300 italic font-extrabold">
                  👋 Hello,{" "}
                </span> */}
                <span className="text-amber-400 font-extrabold tracking-wide uppercase">
                  {user.username}👋
                </span>
              </p>
            )}

            <p className="mt-6 text-lg md:text-xl font-light text-white">
              Discover the latest trends in fashion for Men, Women, and Kids
            </p>

            <Link to="/collection">
              <button className="mt-8 bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-transform hover:scale-105">
                Shop Now
              </button>
            </Link>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 px-6 md:px-20 bg-gray-50">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-md">
              <Link to="/collection">
                <img
                  src={mensImage}
                  alt="Men's Fashion"
                  className="w-full h-100 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-2xl font-bold text-white">Men</h3>
                </div>
              </Link>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-md">
              <Link to="/collection">
                <img
                  src={womensImage}
                  alt="Women's Fashion"
                  className="w-full h-100 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-2xl font-bold text-white">Women</h3>
                </div>
              </Link>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-md">
              <Link to="/collection">
                <img
                  src={kidsImage}
                  alt="Kids' Fashion"
                  className="w-full h-100 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <h3 className="text-2xl font-bold text-white">Kids</h3>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 px-6 md:px-20">
          <FeaturedProducts />
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
          <Link to="/collection">
            <button className="mt-6 bg-white text-amber-600 hover:bg-gray-100 px-6 py-3 rounded-full text-lg font-semibold shadow-md transition">
              Explore Collection
            </button>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;
