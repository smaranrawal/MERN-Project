import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faCartShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import { ShopContext } from "../context/ShopContext";

export default function Navbar() {
  const { token, setToken, setCartItems, getCartCount, setUser } =
    useContext(ShopContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const menuLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" },
    { path: "/collection", name: "Collection" },
  ];

  const LogoutUser = () => {
    setToken("");
    setUser(null);
    setCartItems({});
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      {/* Navbar */}
      <header className=" bg-gray-800 text-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center h-16 px-6">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold font-serif text-amber-50"
          >
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
            <div className="relative group">
              {/* User Icon */}
              {/* <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "text-yellow-200" : "hover:text-yellow-300"
                }
              >
                
              </NavLink> */}

              <FontAwesomeIcon
                icon={faUser}
                size="lg"
                className={
                  token
                    ? "text-white hover:text-yellow-300"
                    : "text-gray-300 hover:text-yellow-300 cursor-pointer"
                }
                onClick={() => {
                  if (!token) navigate("/login");
                }}
              />
              {/* Dropdown Menu */}

              {token && (
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                  <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700 rounded-md shadow-lg">
                    <p className="cursor-pointer hover:text-black">
                      My Profile
                    </p>
                    <p
                      onClick={() => navigate("/orders")}
                      className="cursor-pointer hover:text-black"
                    >
                      Orders
                    </p>
                    <p
                      onClick={LogoutUser}
                      className="cursor-pointer hover:text-black"
                    >
                      Logout
                    </p>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-200 relative"
                  : "hover:text-yellow-300 relative"
              }
            >
              <FontAwesomeIcon icon={faCartShopping} size="lg" />
              <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-amber-700 text-white text-xs font-bold rounded-full">
                {getCartCount()}
              </span>
            </NavLink>
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
              <NavLink
                to="/login"
                className="hover:text-yellow-300"
                onClick={() => setIsOpen(false)}
              >
                <FontAwesomeIcon icon={faUser} size="lg" />
              </NavLink>
              <NavLink
                to="/cart"
                className="hover:text-yellow-300 relative"
                onClick={() => setIsOpen(false)}
              >
                <FontAwesomeIcon icon={faCartShopping} size="lg" />
                <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-amber-700 text-white text-xs font-bold rounded-full">
                  {getCartCount()}
                </span>
              </NavLink>
            </div>
            {token && (
              <div className="flex flex-col gap-2 w-full mt-4 bg-gray-800 p-4 rounded-md">
                <p
                  className="cursor-pointer hover:text-amber-400"
                  onClick={() => {
                    navigate("/profile");
                    setIsOpen(false);
                  }}
                >
                  My Profile
                </p>
                <p
                  className="cursor-pointer hover:text-amber-400"
                  onClick={() => {
                    navigate("/orders");
                    setIsOpen(false);
                  }}
                >
                  Orders
                </p>
                <p
                  className="cursor-pointer hover:text-amber-400"
                  onClick={() => {
                    LogoutUser();
                    setIsOpen(false);
                  }}
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Show SearchBar component when showSearch is true */}
      {showSearch && <SearchBar onClose={() => setShowSearch(false)} />}

      <div className="h-16"></div>
    </>
  );
}
