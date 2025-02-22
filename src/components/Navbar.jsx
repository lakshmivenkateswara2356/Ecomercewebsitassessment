import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { ShoppingCart, LogIn, Menu, X } from "lucide-react"; // Icons
import "./Navbar.css";

const Navbar = () => {
  const { cart } = useCart();
  const [search, setSearch] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <motion.nav 
        className="navbar-container"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <motion.h1 
          className="projectlogo"
          whileHover={{ scale: 1.1, color: "black" }}
        >
          <Link className="projectlogo" to="/">E-Commerce</Link>
        </motion.h1>

        {/* Search Bar (Visible only on large screens) */}
        <motion.input
          type="text"
          placeholder="Search products..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          whileFocus={{ scale: 1.05 }}
        />

        {/* Login & Cart */}
        <div className="credentials">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/login" className="loginicon">
              <LogIn className="loginicon" />
              <span>Login</span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} className="cart-container">
            <Link to="/cart" className="cart-icon">
              <ShoppingCart />
              {cart.length > 0 && (
                <motion.span
                  className="cart-item-count"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {cart.length}
                </motion.span>
              )}
            </Link>
          </motion.div>

          {/* Hamburger Icon (Visible on mobile) */}
          <motion.div 
            className="hamburger-menu" 
            onClick={() => setIsSidebarOpen(true)}
            whileHover={{ scale: 1.1 }}
          >
            <Menu size={28} />
          </motion.div>
        </div>
      </motion.nav>

      {/* Sidebar for Mobile */}
      <motion.div 
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        initial={{ x: "-100%" }}
        animate={{ x: isSidebarOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="sidebar-header">
          <h2>Categories</h2>
          <motion.div whileHover={{ scale: 1.2 }} onClick={() => setIsSidebarOpen(false)}>
            <X size={30} className="close-icon" />
          </motion.div>
        </div>

        <ul className="sidebar-links">
          <li><Link to="/" onClick={() => setIsSidebarOpen(false)}>All</Link></li>
          <li><Link to="/category/men" onClick={() => setIsSidebarOpen(false)}>Men's Clothing</Link></li>
          <li><Link to="/category/women" onClick={() => setIsSidebarOpen(false)}>Women's Clothing</Link></li>
          <li><Link to="/category/jewelery" onClick={() => setIsSidebarOpen(false)}>Jewelry</Link></li>
          <li><Link to="/category/electronics" onClick={() => setIsSidebarOpen(false)}>Electronics</Link></li>
        </ul>
      </motion.div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && <div className="overlay" onClick={() => setIsSidebarOpen(false)}></div>}
    </div>
  );
};

export default Navbar;
