import React from "react";

const Navbar = ({ setToken }) => {
  const handlelogout = () => {
    setToken("");
  };

  return (
    <nav className="bg-gray-800 text-white px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
      {/* Logo / Brand Name */}
      <div className="text-xl sm:text-2xl ml-10 font-bold text-center sm:text-left">
        Dream Closet
      </div>

      {/* Logout Button */}
      <button
        onClick={handlelogout}
        className="bg-red-600 hover:bg-red-700 px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md transition-colors w-full sm:w-auto text-center"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
