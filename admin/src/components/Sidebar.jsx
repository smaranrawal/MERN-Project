import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquarePlus,
  faCheckToSlot,
  faClipboardList,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger button (visible only on small screens) */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-amber-400 p-2 rounded-lg focus:outline-none"
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="lg" />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-screen w-64 bg-gray-100 text-gray-900 flex flex-col py-8 shadow-xl transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <nav className="flex flex-col space-y-4 px-6 mt-10 md:mt-0">
          <NavLink
            to="/add"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                isActive
                  ? "bg-amber-500 text-white"
                  : "hover:bg-gray-800 hover:text-amber-300"
              }`
            }
          >
            <FontAwesomeIcon icon={faSquarePlus} className="text-lg" />
            <span>Add Items</span>
          </NavLink>

          <NavLink
            to="/list"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                isActive
                  ? "bg-amber-500 text-white"
                  : "hover:bg-gray-800 hover:text-amber-300"
              }`
            }
          >
            <FontAwesomeIcon icon={faCheckToSlot} className="text-lg" />
            <span>List Items</span>
          </NavLink>

          <NavLink
            to="/orders"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                isActive
                  ? "bg-amber-500 text-white"
                  : "hover:bg-gray-800 hover:text-amber-300"
              }`
            }
          >
            <FontAwesomeIcon icon={faClipboardList} className="text-lg" />
            <span>Orders</span>
          </NavLink>
        </nav>
      </div>

      {/* Background overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;

// /*import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSquarePlus,
//   faCheckToSlot,
//   faClipboardList,
// } from "@fortawesome/free-solid-svg-icons";
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="h-screen w-64 bg-gray-100 text-gray-900 flex flex-col py-8 shadow-xl">
//       {/* Navigation Links */}
//       <nav className="flex flex-col space-y-4 px-6">
//         <NavLink
//           to="/add"
//           className={({ isActive }) =>
//             `flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
//               isActive
//                 ? "bg-amber-500 text-white"
//                 : "hover:bg-gray-800 hover:text-amber-300"
//             }`
//           }
//         >
//           <FontAwesomeIcon icon={faSquarePlus} className="text-lg" />
//           <span>Add Items</span>
//         </NavLink>

//         <NavLink
//           to="/list"
//           className={({ isActive }) =>
//             `flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
//               isActive
//                 ? "bg-amber-500 text-white"
//                 : "hover:bg-gray-800 hover:text-amber-300"
//             }`
//           }
//         >
//           <FontAwesomeIcon icon={faCheckToSlot} className="text-lg" />
//           <span>List Items</span>
//         </NavLink>

//         <NavLink
//           to="/orders"
//           className={({ isActive }) =>
//             `flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
//               isActive
//                 ? "bg-amber-500 text-white"
//                 : "hover:bg-gray-800 hover:text-amber-300"
//             }`
//           }
//         >
//           <FontAwesomeIcon icon={faClipboardList} className="text-lg" />
//           <span>Orders</span>
//         </NavLink>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
