import { Ghost, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="notfound-icon-wrapper">
          <Ghost size={100} strokeWidth={1.5} />
        </div>

        <h1 className="notfound-title">404</h1>
        <p className="notfound-text">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <div className="notfound-buttons">
          <Link to="/" className="notfound-btn-primary">
            <Home size={18} /> Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="notfound-btn-outline"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
