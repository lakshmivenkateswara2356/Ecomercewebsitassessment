import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Ecomerceasset from '../assets/ecommerce-checkout-laptop-concept-illustration.png';
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User registered successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="keroster">
    <div className="register-container">
      
      <div className="registerbox">
        <h2 className="registerbox">Create an Account</h2>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="register-input"
          />
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="register-input"
          />
          <button type="submit" className="register-button">Sign Up</button>
        </form>
        {error && <p className="error-message">{error}</p>}

        {/* Already have an account? Login link */}
        <p className="signuptext">
          Already have an account? <Link to="/login" className="signuplink">Login</Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Register;