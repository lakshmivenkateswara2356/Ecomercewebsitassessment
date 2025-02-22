import React from "react";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

import Navbar from './Navbar';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const discount = totalPrice * 0.1;
  const finalPrice = totalPrice - discount;

  return (
  <div>
<Navbar/>
    <div className="totalcontainercart">

      
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="shopingcarrthedd"
      >
        Cart Items
      </motion.h1>

      {cart.length === 0 ? (
        <p className="emptycarrtitems">Your cart is empty. Add items now!</p>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-lg bg-white shadow-lg rounded-lg p-4"
        >
          {cart.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center border-b py-4 justify-between"
            >
              <div className="cartalignment">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="cartproductstoshow"
                />
                <h2 className="producthedtitle">{item.title}</h2>
              </div>

              <div className="flex-5">
                <p className="productpice">${item.price.toFixed(2)}</p>
              </div>

              {/* Remove Button */}
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => removeFromCart(item.id)}
                className="removebutton"
              >
                Remove
              </motion.button>
            </motion.div>
          ))}

          <div className="mt-4 p-4 bg-gray-50 rounded-md shadow-inner">
            <h3 className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
            <h3 className="cartdiscount">Discount (10%): -${discount.toFixed(2)}</h3>
            <h3 className="finalpriceofthecart">Final Price: ${finalPrice.toFixed(2)}</h3>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="checkoutbuttton"
          >
            Checkout
          </motion.button>
        </motion.div>
      )}
    </div>
    </div>
  );
};

export default Cart;
