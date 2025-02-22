import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import axios from "axios";
import { motion } from "framer-motion";

import Navbar from "./Navbar"; // Importing the Navbar component

import bag from '../assets/bag.jpg';
import electronics from '../assets/electronics.jpg';
import menshirt from '../assets/menshirt.jpg';
import ornments from '../assets/ornments.jpg';
import women from '../assets/women.jpg';

import "./Home.css";

const categoryImages = {
  "men's clothing": menshirt,
  "women's clothing": women,
  "electronics": electronics,
  "jewelery": ornments, // Corrected category name
  "all": bag,
};


const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);

      // Extract unique categories
      const uniqueCategories = [
        "all",
        ...new Set(response.data.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    });
  }, []);

  // Filter products based on search term and selected category
  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "all" || product.category === selectedCategory)
  );

  return (
    <div className="navbarbuilding">
      {/* Navbar Component */}
      <Navbar />

      {/* Category Section */}
      <div className="grttttt">
        {categories.map((category) => (
          <motion.div
            key={category}
            className={`cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 ${
              selectedCategory === category ? "border-4 border-blue-500" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={categoryImages[category] || "https://via.placeholder.com/150"}
              alt={category}
              className="productimages"
            />
            <p className="productfontforsearch">{category.toUpperCase()}</p>
          </motion.div>
        ))}
      </div>

      {/* Product List */}
      <div>
        <h1 className="selectedproducts">{selectedCategory.toUpperCase()}</h1>
        <div className="items">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="productcontainerr"
              whileHover={{ scale: 1.05 }}
            >
              <img src={product.image} alt={product.title} className="appearingpoducts" />
              <h2 className="productname">{product.title}</h2>
              <p className="productprice">${product.price}</p>
              <Link to={`/product/${product.id}`} className="detailsproduct">
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
