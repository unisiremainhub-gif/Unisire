import React, { useState } from "react";
import "./css/MyDashboard.css";
import WishlistAvatar from "./wishlist-avatar.jpg";
import BadgesAvatar from "./badges-avatar.jpg";
import { useNavigate } from "react-router-dom";

const MyDashboard = () => {
  const [activeTab, setActiveTab] = useState("wishlist");

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

  // Sample data - replace with your actual data
  const wishlistItems = [
    {
      id: 1,
      name: "Web Development Bootcamp",
      progress: 70,
      link: "/courses/web-dev",
      thumbnail:
        "https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      id: 2,
      name: "Data Science Fundamentals",
      progress: 30,
      link: "/courses/data-science",
      thumbnail:
        "https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
    {
      id: 3,
      name: "Mobile App Development",
      progress: 0,
      link: "/courses/mobile-dev",
      thumbnail:
        "https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
    },
  ];

  const badges = [];
  const navigate = useNavigate();

  return (
    <div className="my-profile-container">
      <div className="my-profile-card-container">
        <button
          className="rater-button self my-profile-rater-button ripple-effect"
          // onClick={createRipple}
          onClick={() => navigate("/")}
        >
          Back to Home ←
        </button>
        <h2 className="my-profile-heading my-profile-heading-main">
          My Dashboard :)
        </h2>
        <p className="my-profile-subtitle">
          Here's all your personalized information and achievements.
        </p>

        {/* Tab Navigation */}
        <div className="dashboard-tabs">
          <button
            className={`dashboard-tab ripple-effect ${
              activeTab === "wishlist" ? "dashboard-tab-active" : ""
            }`}
            onClick={(e) => {
              setActiveTab("wishlist");
              createRipple(e);
            }}
          >
            My Wishlist
          </button>
          <button
            className={`dashboard-tab ripple-effect ${
              activeTab === "badges" ? "dashboard-tab-active" : ""
            }`}
            onClick={(e) => {
              setActiveTab("badges");
              createRipple(e);
            }}
          >
            My Badges
          </button>
        </div>

        {/* Wishlist Section */}
        <div className="dashboard-section">
          {activeTab === "wishlist" && (
            <>
              {wishlistItems.length > 0 ? (
                <div className="dashboard-content">
                  <h3 className="dashboard-section-title">Saved Items</h3>
                  <div className="dashboard-items">
                    {wishlistItems.map((item, index) => (
                      <React.Fragment key={index}>
                        <div className="dashboard-course-item">
                          <img
                            src={item.thumbnail}
                            alt={item.name}
                            className="course-thumbnail"
                          />
                          <div className="course-info">
                            <h4 className="course-title">{item.name}</h4>
                            <div className="progress-container">
                              <div
                                className="progress-bar"
                                style={{ width: `${item.progress}%` }}
                              ></div>
                            </div>
                            <span className="progress-text">
                              {item.progress}% Complete
                            </span>
                            <div className="dashboard-wishlist-continues">
                              <button
                                className="continue-button ripple-effect"
                                onClick={createRipple}
                                style={{ backgroundColor: "#4361ee" }}
                              >
                                {item.progress > 0
                                  ? "Continue Learning"
                                  : "Start Learning"}
                              </button>
                              <button
                                className="continue-button ripple-effect"
                                onClick={createRipple}
                              >
                                Remove Wishlist
                              </button>
                            </div>
                          </div>
                        </div>
                        {index !== wishlistItems.length - 1 && (
                          <hr className="course-divider" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="dashboard-empty">
                  <img
                    src={WishlistAvatar}
                    alt="Coming soon"
                    className="dashboard-placeholder"
                  />
                  <p className="dashboard-message">
                    Your wishlist is empty. Start saving your favorite items!
                  </p>
                  <button
                    className="mydashboard-rater-button-wishlist rater-button ripple-effect"
                    onClick={createRipple}
                  >
                    Browse Resources
                  </button>
                </div>
              )}
            </>
          )}

          {/* Badges Section */}
          {activeTab === "badges" && (
            <>
              {badges.length > 0 ? (
                <div className="dashboard-content">
                  <h3 className="dashboard-section-title">Your Achievements</h3>
                  <div className="dashboard-badges">
                    {badges.map((badge, index) => (
                      <div key={index} className="dashboard-badge">
                        <div className="badge-icon">{badge.icon}</div>
                        <div className="badge-info">
                          <h4>{badge.name}</h4>
                          <p>{badge.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="dashboard-empty">
                  <img
                    src={BadgesAvatar}
                    alt="Coming soon"
                    className="dashboard-placeholder"
                  />
                  <p className="dashboard-message">
                    You haven't earned any badges yet. Keep learning to unlock
                    achievements!
                  </p>
                  <button
                    className="rater-button ripple-effect mydashboard-rater-button-wishlist"
                    onClick={createRipple}
                  >
                    Explore Courses
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyDashboard;
