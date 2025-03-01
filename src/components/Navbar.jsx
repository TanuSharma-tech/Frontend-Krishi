// import React from "react";
// import { Link, Outlet } from "react-router-dom";
// import LogoutButton from "./LogoutButton";
// import krishiLogo from "../assets/istockphoto-1315470694-1024x1024.jpg"; // Update the path to your logo

// const Navbar = () => {
//   return (
//     <nav className="bg-green-700 p-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="flex items-center">
//           <img
//             src={krishiLogo}
//             alt="KrishiConnect Logo"
//             className="h-10 mr-2"
//           />
//           <span className="text-white text-2xl font-bold">कृषिConnect</span>
//         </Link>
//         <div className="flex space-x-6">
//           <Link
//             to="/"
//             className="text-white hover:text-yellow-300 transition duration-300"
//           >
//             Home
//           </Link>
//           <Link
//             to="/login"
//             className="text-white hover:text-yellow-300 transition duration-300"
//           >
//             Login
//           </Link>
//           <Link
//             to="/signup"
//             className="text-white hover:text-yellow-300 transition duration-300"
//           >
//             Signup
//           </Link>
//           <LogoutButton />
//         </div>
//       </div>
//       <Outlet />
//     </nav>
//   );
// };

// export default Navbar;

// comment out by me
/* import React from "react";
import { Link, Outlet } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import krishiLogo from "../assets/istockphoto-1315470694-1024x1024.jpg"; // Update the path to your logo

const Navbar = () => {
  return (
    <nav className="bg-green-700 h-16 p-4 shadow-lg  sticky">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="flex items-center mb-4 md:mb-0">
          <img
            src={krishiLogo}
            alt="KrishiConnect Logo"
            className="h-10 mr-2"
          />
          <span className="text-white text-2xl font-bold">कृषिConnect</span>
        </Link>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <Link
            to="/home"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            Signup
          </Link>
          <LogoutButton />
        </div>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar; */

import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { Menu, X } from "lucide-react"; // Icon for menu toggle
import krishiLogo from "../assets/istockphoto-1315470694-1024x1024.jpg"; // Update the path to your logo
import "./navbar.css"; // Importing the CSS file
import { Home, LogIn, UserPlus } from "lucide-react"; 



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 h-16 p-4 shadow-lg sticky top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center">
          <img src={krishiLogo} alt="KrishiConnect Logo" className="h-12 mr-2 rounded-full" />
          <span className="text-white text-2xl font-bold">कृषिConnect</span>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-green-700 md:bg-transparent md:flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0 transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
         <Link to="/home" className="nav-links flex items-center gap-2 text-white hover:text-yellow-300 transition duration-300">
  <Home size={20} /> Home
</Link>
<Link to="/login" className="nav-links flex items-center gap-2 text-white hover:text-yellow-300 transition duration-300">
  <LogIn size={20} /> Login
</Link>
<Link to="/signup" className="nav-links flex items-center gap-2 text-white hover:text-yellow-300 transition duration-300">
  <UserPlus size={20} /> Signup
</Link>


          <LogoutButton />
        </div>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar;

