// File: src/pages/Register.jsx
import { useState, useEffect } from "react";
import "./Register.css";

const images = [
  "https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1677693972403-db681288b5da?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Register() {
  const [showLogin, setShowLogin] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="left">
        <img
          src={images[currentImage]}
          alt="slide"
          className="background-img"
        />
        <div className="overlay">
          <div className="logo">AMU</div>
          <button className="back-btn">Back to website →</button>
          <div className="tagline">Capturing Moments, Creating Memories</div>
          <div className="dots">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`dot ${idx === currentImage ? "active" : ""}`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="right">
        <h1>{showLogin ? "Login to your account" : "Create an account"}</h1>
        <p>
          {showLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span className="toggle" onClick={() => setShowLogin(!showLogin)}>
            {showLogin ? "Sign up" : "Log in"}
          </span>
        </p>

        <form className="form">
          {!showLogin && (
            <div className="row">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
          )}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Enter your password" />

          {!showLogin && (
            <label className="terms">
              <input type="checkbox" defaultChecked /> I agree to the{" "}
              <a href="#">Terms & Conditions</a>
            </label>
          )}

          <button type="submit" className="submit-btn">
            {showLogin ? "Login" : "Create account"}
          </button>

          <div className="divider">Or register with</div>
          <div className="social-buttons">
            <button className="google">Google</button>
            <button className="apple">Apple</button>
          </div>
        </form>
      </div>
    </div>
  );
}
