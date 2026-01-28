import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full container mx-auto px-20 py-4 flex items-center justify-between bg-transparent shadow-md">
      
      {/* Left side */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-black">
          BookShop
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-[#D9176C] transition"
          >
            Home
          </Link>

          <Link
            to="/books"
            className="text-gray-700 hover:text-[#D9176C] transition"
          >
            Books
          </Link>

          <Link
            to="/about"
            className="text-gray-700 hover:text-[#D9176C] transition"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="text-gray-700 hover:text-[#D9176C] transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-4 py-2 rounded-md bg-[#D9176C] text-white hover:opacity-90 transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
