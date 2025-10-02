import React, { useState, useEffect, useRef } from "react";
import {
  FaCalendarAlt,
  FaUserGraduate,
  FaLaptopCode,
  FaPenFancy,
  FaArrowRight,
  FaUsers,
  FaClock,
  FaStar,
  FaThumbsUp,
  FaThumbsDown,
  FaCrown,
  FaTag,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./css/UpComing.css";
import events from "../pages/data/datajoinwaitlist.json";

const UpComing = () => {
  const [stats, setStats] = useState({
    alumni: 0,
    rating: 0,
    success: 0,
  });

  const [reactions, setReactions] = useState(() => {
    // Initialize reactions from localStorage or set defaults
    const savedReactions = localStorage.getItem("eventReactions");
    return savedReactions ? JSON.parse(savedReactions) : {};
  });

  const heroRef = useRef(null);
  const counted = useRef(false);
  const [starVisible, setStarVisible] = useState(true);

  // Save reactions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("eventReactions", JSON.stringify(reactions));
  }, [reactions]);

  useEffect(() => {
    // Make the star icon blink continuously
    const blinkInterval = setInterval(() => {
      setStarVisible((prev) => !prev);
    }, 600); // Blink every 600ms

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;

          // Animate counting for each value
          animateCount(0, 10000, 2000, (value) =>
            setStats((prev) => ({ ...prev, alumni: value }))
          );

          animateCount(0, 4.9, 1800, (value) =>
            setStats((prev) => ({ ...prev, rating: value }))
          );

          animateCount(0, 95, 1500, (value) =>
            setStats((prev) => ({ ...prev, success: value }))
          );
        }
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      clearInterval(blinkInterval);
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const animateCount = (start, end, duration, callback) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = progress * (end - start) + start;
      callback(Number(value.toFixed(1)));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + "K+";
    }
    return num;
  };

  const getIcon = (platformType) => {
    switch (platformType) {
      case "platform":
        return <FaUserGraduate />;
      case "simulator":
        return <FaLaptopCode />;
      case "blog":
        return <FaPenFancy />;
      case "portal":
        return <FaCalendarAlt />;
      case "workshop":
        return <FaUsers />;
      case "events":
        return <FaClock />;
      default:
        return <FaCalendarAlt />;
    }
  };

  const getGradient = (platformType, index) => {
    const gradients = [
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      "linear-gradient(135deg, #e0c3fc 0%, #9bb5ff 100%)",
    ];
    return gradients[index % gradients.length];
  };

  const handleReaction = (eventId, reactionType) => {
    setReactions((prev) => {
      const currentReaction = prev[eventId];

      // If clicking the same reaction again, remove it
      if (currentReaction === reactionType) {
        const newReactions = { ...prev };
        delete newReactions[eventId];
        return newReactions;
      }

      // Otherwise, set the new reaction
      return {
        ...prev,
        [eventId]: reactionType,
      };
    });
  };

  const getReactionCounts = (eventId) => {
    // In a real app, you would fetch these from your backend
    // For now, we'll use mock data based on the event ID
    return {
      likes: Math.floor((eventId * 123) % 100) + 20, // Random-ish number based on ID
      dislikes: Math.floor((eventId * 67) % 20) + 2, // Random-ish number based on ID
    };
  };

  return (
    <div className="upcoming-hub">
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>
      <div className="bg-gradient"></div>

      <div className="upcoming-container">
        <header className="hero-section" ref={heroRef}>
          <div className="hero-content">
            <div className="hero-badge">
              <FaStar
                className="star-icon"
                style={{ opacity: starVisible ? 1 : 0.3 }}
              />
              <span>Upcoming Features</span>
            </div>
            <header className="resources-header">
              <h1 className="resources-title">Learning Resources</h1>
              <p className="allparagraph">
                Curated collection of courses, tools, and opportunities to
                accelerate your career.
              </p>
            </header>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">
                  {formatNumber(stats.alumni)}
                </span>
                <span className="stat-label">Alumni</span>
              </div>
              <div className="stat">
                <span className="stat-number">{stats.rating}★</span>
                <span className="stat-label">Rating</span>
              </div>
              <div className="stat">
                <span className="stat-number">{stats.success}%</span>
                <span className="stat-label">Success Rate</span>
              </div>
            </div>
          </div>
        </header>

        <div className="events-section">
          <div className="section-header">
            <h2>Platform Features</h2>
            <p className="allparagraph">
              Useful tools and resources designed to support your career growth.
            </p>
          </div>

          <div className="events-grid">
            {events.map((event, index) => {
              const reactionCounts = getReactionCounts(event.id);
              const userReaction = reactions[event.id];

              return (
                <div
                  key={event.id}
                  className="event-card"
                  style={{
                    background: getGradient(event.platform, index),
                  }}
                >
                  <Link
                    to={`/Upcoming/join-waitlist/${event.id}`}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <div className="card-header">
                      <div className="icon-wrapper">
                        {getIcon(event.platform)}
                      </div>
                      <div className="event-meta">
                        {/* Show free/premium tag based on event.type */}
                        {/* <div
                          className={`type-tag ${event.tag}`}
                          style={{
                            padding: "0.8rem 0.8rem",
                            marginBottom: "1rem",
                          }}
                        >
                          {event.tag === "premium" ? (
                            <>
                              <FaCrown /> Premium
                            </>
                          ) : (
                            <>
                              <FaTag /> Free
                            </>
                          )}
                        </div> */}
                        <div className="date">
                          <FaCalendarAlt />
                          <span>{event.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="card-content">
                      <h3 className="event-title">{event.title}</h3>
                      <p className="event-description">{event.description}</p>
                      <div className="waitlist-info">
                        <div className="waitlist-count">
                          <FaUsers className="users-icon" />
                          <span>{event.waitlist}</span>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer">
                      <span className="join-btn">
                        <span>Join Waitlist</span>
                        <FaArrowRight className="arrow-icon" />
                      </span>
                    </div>
                  </Link>

                  {/* Like/Dislike Section */}
                  <div
                    className="reaction-section"
                    style={{
                      marginTop: "15px",
                      paddingTop: "15px",
                      borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                      display: "flex",
                      justifyContent: "center",
                      gap: "15px",
                    }}
                  >
                    <button
                      className={`reaction-btn ${
                        userReaction === "like" ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleReaction(event.id, "like");
                      }}
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "20px",
                        padding: "8px 15px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        cursor: "pointer",
                        color:
                          userReaction === "like"
                            ? "#4CAF50"
                            : "rgba(255, 255, 255, 0.8)",
                        transition: "all 0.3s ease",
                        backdropFilter: "blur(10px)",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.1)";
                      }}
                    >
                      <FaThumbsUp />
                      <span>
                        {reactionCounts.likes +
                          (userReaction === "like" ? 1 : 0)}
                      </span>
                    </button>

                    <button
                      className={`reaction-btn ${
                        userReaction === "dislike" ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleReaction(event.id, "dislike");
                      }}
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "20px",
                        padding: "8px 15px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        cursor: "pointer",
                        color:
                          userReaction === "dislike"
                            ? "#F44336"
                            : "rgba(255, 255, 255, 0.8)",
                        transition: "all 0.3s ease",
                        backdropFilter: "blur(10px)",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = "rgba(255, 255, 255, 0.1)";
                      }}
                    >
                      <FaThumbsDown />
                      <span>
                        {reactionCounts.dislikes +
                          (userReaction === "dislike" ? 1 : 0)}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComing;
