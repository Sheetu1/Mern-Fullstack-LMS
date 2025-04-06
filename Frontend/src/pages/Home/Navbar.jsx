import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { FaGraduationCap } from "react-icons/fa"; // ✅ Cap Icon added

const Navbar = () => {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Hide navbar on auth/verify routes
  const hideNavbarRoutes = ["/login", "/signup", "/verify-email"];
  if (hideNavbarRoutes.includes(location.pathname)) return null;

  return (
    <nav className="w-full px-6 py-4 shadow-md bg-white dark:bg-gray-900 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo & Brand */}
        <Link to="/" className="flex items-center gap-2">
          <FaGraduationCap className="text-2xl text-blue-600" /> {/* ✅ New Logo */}
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            CourseCamp
          </span>
        </Link>

        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-200 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/courses" className="hover:text-blue-600 transition">
            Courses
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Right: Auth & Dark Mode */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="text-gray-700 dark:text-gray-200"
          >
            {darkMode ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          <Link
            to="/login"
            className="px-4 py-1 text-sm rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-1 text-sm rounded bg-gray-800 hover:bg-gray-900 text-white font-semibold"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
