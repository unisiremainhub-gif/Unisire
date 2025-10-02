import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../css/AdminLogin.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate admin authentication
    setTimeout(() => {
      if (email === "admin@example.com" && password === "admin123") {
        navigate("/admin/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
      }
      setLoading(false);
    }, 1000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-decorative-shape shape-1"></div>
      <div className="admin-login-decorative-shape shape-2"></div>

      <div className="admin-login-card">
        <div className="admin-login-header">
          <h2 className="admin-login-title">Admin Portal</h2>
          <p className="admin-login-subtitle">
            Sign in to access the dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="admin-login-form">
          {error && <div className="admin-login-error">{error}</div>}

          <div className="admin-input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
            />
          </div>

          <div className="admin-input-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="admin-login-button"
            disabled={loading}
          >
            {loading ? (
              <span className="admin-login-spinner"></span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        <div className="admin-login-footer">
          <p>
            Having trouble? <a href="/admin/forgot-password">Reset password</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
