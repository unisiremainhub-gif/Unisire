import React, { useState, useEffect } from "react";
import {
  FaBookmark,
  FaArrowLeft,
  FaExclamationTriangle,
  FaEye,
  FaUser,
  FaCalendarAlt,
  FaClock,
  FaTimes,
  FaFilter,
} from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import "./css/MyDashboard.css";
import "./css/SavedBlogs.css";
import blogData from "../../src/pages/data/datablogs.json";

const SavedBlogs = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [savedBlogs, setSavedBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    // Load bookmarks from localStorage
    const savedBookmarks = localStorage.getItem("blogBookmarks");
    if (savedBookmarks) {
      const bookmarkedIds = JSON.parse(savedBookmarks);
      setBookmarks(bookmarkedIds);

      // Filter blogData to get only saved blogs
      const saved = blogData.filter((blog) => bookmarkedIds.includes(blog.id));
      setSavedBlogs(saved);
      setFilteredBlogs(saved);
    }
  }, []);

  // Extract unique categories from saved blogs
  const categories = [...new Set(savedBlogs.map((blog) => blog.category))];

  // Filter blogs based on selected category
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredBlogs(savedBlogs);
    } else {
      setFilteredBlogs(
        savedBlogs.filter((blog) => blog.category === selectedCategory)
      );
    }
  }, [selectedCategory, savedBlogs]);

  const createRipple = (event) => {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  };

  const handleBlogClick = (blogId) => {
    navigate(`/blogs/${blogId}`);
  };

  const removeBookmark = (blogId, e) => {
    e.stopPropagation();

    const updatedBookmarks = bookmarks.filter((id) => id !== blogId);
    setBookmarks(updatedBookmarks);
    localStorage.setItem("blogBookmarks", JSON.stringify(updatedBookmarks));

    // Update saved blogs list
    const updatedSavedBlogs = savedBlogs.filter((blog) => blog.id !== blogId);
    setSavedBlogs(updatedSavedBlogs);
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K+";
    }
    return num;
  };

  if (savedBlogs.length === 0) {
    return (
      <div className="my-profile-container">
        <div className="my-profile-card-container">
          <button
            className="rater-button self my-profile-rater-button ripple-effect"
            onClick={() => navigate("/blogs")}
          >
            <FaArrowLeft /> Back to Blogs
          </button>
          <h2 className="my-profile-heading my-profile-heading-main">
            Saved Blogs
          </h2>
          <p className="my-profile-subtitle">
            Articles you've bookmarked for later reading.
          </p>

          <div className="dashboard-empty blogs-empty">
            <FaExclamationTriangle
              className="dashboard-placeholder"
              style={{ fontSize: "4rem", color: "#ccc", marginBottom: "20px" }}
            />
            <p className="dashboard-message">
              You haven't saved any articles yet. Start exploring and bookmark
              your favorites!
            </p>
            <button
              className="mydashboard-rater-button-wishlist rater-button ripple-effect"
              onClick={() => navigate("/blogs")}
            >
              Explore Blogs
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-profile-container">
      <div className="my-profile-card-container">
        <button
          className="rater-button self my-profile-rater-button ripple-effect"
          onClick={() => navigate("/blogs")}
        >
          Back to Blogs ←
        </button>
        <h2 className="my-profile-heading my-profile-heading-main">
          Saved Blogs
        </h2>
        <p className="my-profile-subtitle" style={{ marginBottom: "0px" }}>
          Articles you've bookmarked for later reading.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="saved-count-badge" style={{ fontSize: "1.4rem" }}>
            {filteredBlogs.length}{" "}
            {filteredBlogs.length === 1 ? "Article" : "Articles"} Saved
            {selectedCategory !== "all" && ` in ${selectedCategory}`}
          </div>

          {/* Category Filter */}
          {categories.length > 0 && (
            <div className="blog-filters" style={{ marginBottom: "20px" }}>
              <div className="filter-group" style={{ display: "flex" }}>
                <div className="filter-group-1">
                  <FaFilter className="filter-icon" />
                  <span className="filter-label" style={{ width: "150px" }}>
                    Filter by Category:
                  </span>
                </div>
                <select
                  className="filter-select"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{
                    padding: "8px 12px",
                    borderRadius: "6px",
                    border: "1px solid #ddd",
                    fontSize: "14px",
                  }}
                >
                  <option value="all">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="dashboard-content">
          <div className="dashboard-items">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <React.Fragment key={blog.id}>
                  <div
                    className="dashboard-course-item saved-blog-item"
                    onClick={() => handleBlogClick(blog.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="course-thumbnail"
                    />
                    <div
                      className="course-info"
                      style={{ justifyContent: "center" }}
                    >
                      <h4 className="course-title" style={{ margin: "0px" }}>
                        {blog.title}
                      </h4>
                      <p className="blog-excerpt" style={{ margin: "0px" }}>
                        {blog.excerpt}
                      </p>

                      <div
                        className="blog-meta-info"
                        style={{ alignSelf: "start" }}
                      >
                        <span className="meta-item">
                          <FaUser className="meta-icon" /> {blog.author}
                        </span>
                        <span className="meta-item">
                          <FaCalendarAlt className="meta-icon" /> {blog.date}
                        </span>
                        <span className="meta-item">
                          <FaClock className="meta-icon" /> {blog.readTime} min
                          read
                        </span>
                        <span className="meta-item">
                          <FaEye className="meta-icon" />{" "}
                          {formatNumber(blog.views || 0)} views
                        </span>
                      </div>

                      <div
                        className="blog-category-tag"
                        style={{ alignSelf: "start" }}
                      >
                        {blog.category}
                      </div>

                      <div
                        className="dashboard-wishlist-continues"
                        style={{ display: "flex" }}
                      >
                        <button
                          className="continue-button ripple-effect"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBlogClick(blog.id);
                          }}
                          style={{ backgroundColor: "#4361ee" }}
                        >
                          Read Article
                        </button>
                        <button
                          className="continue-button ripple-effect remove-button"
                          onClick={(e) => removeBookmark(blog.id, e)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "5px",
                          }}
                        >
                          <FaTimes /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  {index !== filteredBlogs.length - 1 && (
                    <hr className="course-divider" />
                  )}
                </React.Fragment>
              ))
            ) : (
              <div className="dashboard-empty">
                <FaExclamationTriangle
                  className="dashboard-placeholder"
                  style={{
                    fontSize: "3rem",
                    color: "#ccc",
                    marginBottom: "15px",
                  }}
                />
                <p className="dashboard-message">
                  No saved articles found in the {selectedCategory} category.
                </p>
                <button
                  className="mydashboard-rater-button-wishlist rater-button ripple-effect"
                  onClick={() => setSelectedCategory("all")}
                >
                  View All Saved Articles
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedBlogs;
