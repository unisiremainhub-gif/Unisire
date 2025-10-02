import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../css/AdminLogin.css";

const AdminLoginResetPassword = () => {
  const [email, setEmail] = useState("");
  const [userInputHint, setUserInputHint] = useState(""); // What user types now
  const [storedHint, setStoredHint] = useState("My favorite vacation spot"); // What was stored before (from backend)
  const [previousPassword, setPreviousPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Password visibility states
  const [showPreviousPassword, setShowPreviousPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setSuccess("");

    // Validate form
    const validationErrors = {};

    if (!email) validationErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      validationErrors.email = "Email is invalid";

    if (!userInputHint) validationErrors.hint = "Hint is required";
    else if (userInputHint !== storedHint)
      validationErrors.hint = "Hint does not match our records";

    if (!previousPassword)
      validationErrors.previousPassword = "Previous password is required";

    if (!newPassword) validationErrors.newPassword = "New password is required";
    else if (newPassword.length < 8)
      validationErrors.newPassword = "Password must be at least 8 characters";

    if (newPassword !== confirmPassword)
      validationErrors.confirmPassword = "Passwords do not match";

    if (previousPassword === newPassword)
      validationErrors.newPassword =
        "New password must be different from previous password";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setSuccess("Password has been reset successfully!");
      setLoading(false);
      // Clear form
      setEmail("");
      setUserInputHint("");
      setPreviousPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }, 1500);
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-decorative-shape shape-1"></div>
      <div className="admin-login-decorative-shape shape-2"></div>

      <div className="admin-login-card">
        <div className="admin-login-header">
          <h2 className="admin-login-title">Reset Password</h2>
          <p className="admin-login-subtitle">
            Please fill in the details to reset your password
          </p>
        </div>

        <form onSubmit={handleSubmit} className="admin-login-form">
          {success && <div className="admin-login-success">{success}</div>}

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
            {errors.email && (
              <span className="input-error">{errors.email}</span>
            )}
          </div>

          <div className="admin-input-group">
            <label htmlFor="hint">Enter Your Password Hint</label>
            <div className="password-input-container">
              <input
                type={showHint ? "text" : "password"}
                id="hint"
                value={userInputHint}
                onChange={(e) => setUserInputHint(e.target.value)}
                placeholder="Enter the hint you created"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowHint(!showHint)}
                aria-label={showHint ? "Hide hint" : "Show hint"}
              >
                {showHint ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.hint && <span className="input-error">{errors.hint}</span>}
            <small className="hint-text">
              Enter the exact hint you provided during account creation
            </small>
          </div>

          <div className="admin-input-group">
            <label htmlFor="previousPassword">Previous Password</label>
            <div className="password-input-container">
              <input
                type={showPreviousPassword ? "text" : "password"}
                id="previousPassword"
                value={previousPassword}
                onChange={(e) => setPreviousPassword(e.target.value)}
                placeholder="Enter your previous password"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPreviousPassword(!showPreviousPassword)}
                aria-label={
                  showPreviousPassword ? "Hide password" : "Show password"
                }
              >
                {showPreviousPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.previousPassword && (
              <span className="input-error">{errors.previousPassword}</span>
            )}
          </div>

          <div className="admin-input-group">
            <label htmlFor="newPassword">New Password</label>
            <div className="password-input-container">
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter your new password"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowNewPassword(!showNewPassword)}
                aria-label={showNewPassword ? "Hide password" : "Show password"}
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.newPassword && (
              <span className="input-error">{errors.newPassword}</span>
            )}
          </div>

          <div className="admin-input-group">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <div className="password-input-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your new password"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="input-error">{errors.confirmPassword}</span>
            )}
          </div>

          <button
            type="submit"
            className="admin-login-button"
            disabled={loading}
          >
            {loading ? (
              <span className="admin-login-spinner"></span>
            ) : (
              "Save Changes"
            )}
          </button>
        </form>

        <div className="admin-login-footer">
          <p>
            Remember your password? <Link to="/admin/login">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginResetPassword;
