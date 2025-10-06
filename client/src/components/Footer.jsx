import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Branding */}
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold text-amber-500 mb-4">
            Dream Closet
          </h1>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Discover trendy apparel for men, women, and kids. Shop stylish
            clothes with quality fabrics and unbeatable prices.
          </p>

          {/* Social Media */}
          <div className="flex justify-center sm:justify-start gap-5 mt-4">
            {[
              { icon: faFacebookF, link: "#" },
              { icon: faTwitter, link: "#" },
              { icon: faInstagram, link: "#" },
              { icon: faLinkedinIn, link: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="p-2 border border-gray-600 rounded-full hover:text-amber-400 hover:border-amber-400 transition"
              >
                <FontAwesomeIcon icon={item.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Men Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold text-amber-500 mb-4">Men</h2>
          <ul className="space-y-2 text-gray-300">
            {["T-Shirts", "Shirts", "Jeans", "Jackets"].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-amber-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Women Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold text-amber-500 mb-4">Women</h2>
          <ul className="space-y-2 text-gray-300">
            {["Tops", "Dresses", "Jeans", "Jackets"].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-amber-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kids Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold text-amber-500 mb-4">Kids</h2>
          <ul className="space-y-2 text-gray-300">
            {["T-Shirts", "Shirts", "Jeans", "Jackets"].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-amber-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm px-6">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-amber-400 font-semibold">Dream Closet</span>. All
        Rights Reserved.
      </div>
    </footer>
  );
}
