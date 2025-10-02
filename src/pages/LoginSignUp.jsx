import React, { useState } from "react";
import "./css/LoginSignUp.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const LoginSignUp = ({ openSignUp, openForgotPassword }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="logincontainer">
      {/* Left Side - Gradient Background */}
      <div className="left-section">
        <h1 className="heading-primary center white">InSkillify</h1>
      </div>

      {/* Right Side - Login Form */}
      <div className="right-section">
        <div className="form-container">
          <div className="text-center">
            <h3 className="heading-secondary font">Welcome Back</h3>
            <p className="icon-paragraph fontsmall">
              Please sign in to your account
            </p>
          </div>

          <form className="login-form">
            <div className="logininputspacing">
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="options">
                <div className="remember-me">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <button
                  type="button"
                  className="forgot-password"
                  onClick={openForgotPassword}
                >
                  Forgot password?
                </button>
              </div>
            </div>

            <button className="btnlogin login-btn">Log In</button>
            <button
              type="button"
              className="btnlogin signup-btn"
              onClick={openSignUp}
            >
              Sign Up
            </button>

            <div className="separator">
              <div className="line"></div>
              <span>Or continue with</span>
              <div className="line"></div>
            </div>

            <div className="social-login">
              <button className="btnlogin signup-btn loginfunc">
                <i className="fab fa-google"></i>
                <p>Continue With Google</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
