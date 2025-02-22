import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import axios from "axios";

import Navbar from '../components/Navbar';

import './productdetail.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container">
      <Navbar/>
    <div className="Productdetails">
      
      <div className="productalignement">
      <img src={product.image} alt={product.title} className="detailimage" />

<div>
      <h1 className="detailhedding">{product.title}</h1>
      
      <p className="pproductdiscription">{product.description}</p>
      <p className="productpricing">${product.price}</p>

      <button onClick={() => addToCart(product)} className="addcartbutton">
        Add to Cart
      </button>
      </div>
      </div>

      
    </div>
    </div>
  );
};

export default ProductDetails;
