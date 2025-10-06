import React from "react";
import Image from "../assets/images/home2.png";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-8  px-5">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          About <span className="text-amber-600">Dream Closet</span>
        </h1>
        {/* <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Your one-stop destination for{" "}
          <span className="font-medium">stylish </span>
          and <span className="font-medium">affordable fashion</span> for men,
          women, and kids.
        </p> */}
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative">
          <img
            src={Image}
            alt="Dream Closet Fashion"
            className="rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
          />
          <div className="absolute -bottom-6 -left-6 bg-amber-500 text-white px-6 py-3 rounded-lg shadow-lg font-semibold text-sm uppercase">
            Fashion for Everyone
          </div>
        </div>

        {/* Right Text */}
        <div className="text-gray-700">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed mb-8">
            At{" "}
            <span className="font-semibold text-amber-600">Dream Closet</span>,
            we believe fashion should be accessible to everyone. Our journey
            began with a mission to provide trendy and high-quality clothes for
            men, women, and kids — all at prices that won’t break the bank.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What We Offer
          </h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li>
              Latest fashion trends for <b>men, women, and kids</b>
            </li>
            <li>
              <b>Affordable pricing</b> without compromising on quality
            </li>
            <li>Wide range of styles, from casual wear to party outfits</li>
            <li>Easy and secure online shopping experience</li>
          </ul>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Our Mission
        </h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Our mission is simple — to make everyone feel confident and stylish,
          no matter their age or budget. At
          <span className="text-amber-600 font-semibold"> Dream Closet</span>,
          fashion meets affordability.
        </p>
      </div>
    </div>
  );
}
