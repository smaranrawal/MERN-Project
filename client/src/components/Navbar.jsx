import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-grey-800 text-white ">
      <div className="container mx-auto flex justify-between items-center h-14 px-6">
        <NavLink to="/" className="text-xl font-bold font-serif pl-19">
          Dream Closet
        </NavLink>

        <nav>
          <ul className="flex gap-6 font-medium pr-20">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-yellow-200 " : "hover:text-yellow-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-yellow-200 " : "hover:text-yellow-300"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-yellow-200 " : "hover:text-yellow-300"
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive ? "text-yellow-200 " : "hover:text-yellow-300"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "text-yellow-200 " : "hover:text-yellow-300"
                }
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-yellow-200 " : "hover:text-yellow-300"
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
