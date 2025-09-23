import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

export default function SearchBar({ onClose }) {
  const [search, setSearch] = useState("");
  // const [search, setSearch, showSearch, setShowSearch] =
  //   useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);
  return (
    visible && (
      <div className="w-full bg-gray-600 p-3 flex justify-center items-center gap-3">
        <div className="flex items-center w-full max-w-md bg-white rounded-md shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="text-gray-500 w-5 h-5 mr-3"
          />
        </div>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={onClose}
          className="text-white w-6 h-6 cursor-pointer hover:text-red-400 transition-colors"
        />
      </div>
    )
  );
}
