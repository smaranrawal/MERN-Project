import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faCartShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const menuLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
    { path: "/collection", name: "Collection" },
    { path: "/register", name: "Sign Up" },
  ];

  return (
    <>
      <header className="bg-gray-800 text-white shadow-md relative">
        <div className="container mx-auto flex justify-between items-center h-16 px-6">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold font-serif">
            Dream Closet
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            <ul className="flex gap-6 font-medium">
              {menuLinks.map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "text-yellow-200" : "hover:text-yellow-300"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center gap-4 relative">
            <div className="cursor-pointer">
              <FontAwesomeIcon
                icon={faSearch}
                onClick={() => setShowSearch(!showSearch)}
              />
            </div>
            <NavLink to="/login" className="hover:text-yellow-300">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </NavLink>
            <FontAwesomeIcon
              icon={faCartShopping}
              size="lg"
              className="hover:text-yellow-300 cursor-pointer"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-4 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="lg" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-700 px-6 py-4 space-y-4">
            <ul className="flex flex-col gap-4 font-medium">
              {menuLinks.map((link, idx) => (
                <li key={idx}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "text-yellow-200" : "hover:text-yellow-300"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Search & Icons */}
            <div className="flex items-center gap-4 pt-2 relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-3 py-1 rounded-full text-black w-full focus:outline-none"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-8 text-gray-500 cursor-pointer"
                onClick={() => setShowSearch(!showSearch)} // toggle search
              />
              <NavLink to="/login" className="hover:text-yellow-300">
                <FontAwesomeIcon icon={faUser} size="lg" />
              </NavLink>
              <FontAwesomeIcon
                icon={faCartShopping}
                size="lg"
                className="hover:text-yellow-300 cursor-pointer"
              />
            </div>
          </div>
        )}
      </header>

      {/* Show SearchBar component when showSearch is true */}
      {showSearch && <SearchBar onClose={() => setShowSearch(false)} />}
    </>
  );
}
