// import React, { useState, useEffect, useRef } from "react";
// import { FaStar, FaFilter, FaBookmark, FaFire } from "react-icons/fa";
// import { useNavigate, Link } from "react-router-dom";
// import "./css/UpComing.css";
// import "./css/Blogs.css";
// import blogData from "../../src/pages/data/datablogs.json";

// const Blogs = () => {
//   const [visibleBlogs, setVisibleBlogs] = useState(3);
//   const [isLoading, setIsLoading] = useState(false);
//   const [filters, setFilters] = useState({
//     category: null,
//     readTime: null,
//     maxViews: null,
//     trending: null, // Added trending filter
//   });
//   const [stats, setStats] = useState({
//     learners: 0,
//     satisfaction: 0,
//     completion: 0,
//   });
//   const [starVisible, setStarVisible] = useState(true);
//   const [bookmarks, setBookmarks] = useState([]);

//   const heroRef = useRef(null);
//   const counted = useRef(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Load bookmarks from localStorage
//     loadBookmarks();

//     // Make the star icon blink continuously
//     const blinkInterval = setInterval(() => {
//       setStarVisible((prev) => !prev);
//     }, 600); // Blink every 600ms

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !counted.current) {
//           counted.current = true;

//           // Animate counting for each value
//           animateCount(0, 50000, 2000, (value) =>
//             setStats((prev) => ({ ...prev, learners: value }))
//           );

//           animateCount(0, 4.8, 1800, (value) =>
//             setStats((prev) => ({ ...prev, satisfaction: value }))
//           );

//           animateCount(0, 92, 1500, (value) =>
//             setStats((prev) => ({ ...prev, completion: value }))
//           );
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (heroRef.current) {
//       observer.observe(heroRef.current);
//     }

//     return () => {
//       clearInterval(blinkInterval);
//       if (heroRef.current) {
//         observer.unobserve(heroRef.current);
//       }
//     };
//   }, []);

//   // Function to load bookmarks from localStorage
//   const loadBookmarks = () => {
//     try {
//       const savedBookmarks = localStorage.getItem("blogBookmarks");
//       if (savedBookmarks) {
//         const parsedBookmarks = JSON.parse(savedBookmarks);
//         // Ensure we have an array of numbers (blog IDs)
//         if (Array.isArray(parsedBookmarks)) {
//           setBookmarks(parsedBookmarks.map((id) => Number(id)));
//         }
//       }
//     } catch (error) {
//       console.error("Error loading bookmarks from localStorage:", error);
//       setBookmarks([]);
//     }
//   };

//   const animateCount = function (start, end, duration, callback) {
//     let startTimestamp = null;
//     const step = (timestamp) => {
//       if (!startTimestamp) startTimestamp = timestamp;
//       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//       const value = progress * (end - start) + start;
//       callback(Number(value.toFixed(1)));
//       if (progress < 1) {
//         window.requestAnimationFrame(step);
//       }
//     };
//     window.requestAnimationFrame(step);
//   };

//   const formatNumber = (num) => {
//     if (num >= 1000) {
//       return (num / 1000).toFixed(0) + "K+";
//     }
//     return num;
//   };

//   // Extract unique categories from blogData
//   const categories = [...new Set(blogData.map((blog) => blog.category))];

//   // Read time options
//   const readTimeOptions = [
//     { value: "5", label: "< 5 min" },
//     { value: "10", label: "5-10 min" },
//     { value: "15", label: "10-15 min" },
//     { value: "20", label: "> 15 min" },
//   ];

//   // Views options (replacing upvotes)
//   const viewOptions = [
//     { value: "100", label: "100+ views" },
//     { value: "500", label: "500+ views" },
//     { value: "1000", label: "1000+ views" },
//   ];

//   // Trending options
//   const trendingOptions = [
//     { value: "true", label: "Trending" },
//     { value: "false", label: "Not Trending" },
//   ];

//   const createRipple = (event) => {
//     const card = event.currentTarget;
//     const circle = document.createElement("span");
//     const diameter = Math.max(card.clientWidth, card.clientHeight);
//     const radius = diameter / 2;

//     circle.style.width = circle.style.height = `${diameter}px`;
//     circle.style.left = `${
//       event.clientX - card.getBoundingClientRect().left - radius
//     }px`;
//     circle.style.top = `${
//       event.clientY - card.getBoundingClientRect().top - radius
//     }px`;
//     circle.classList.add("ripple");

//     const existingRipple = card.querySelector(".ripple");
//     if (existingRipple) {
//       existingRipple.remove();
//     }

//     card.appendChild(circle);
//   };

//   const loadMoreBlogs = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
//       setIsLoading(false);
//     }, 500);
//   };

//   const handleFilterChange = (filterName, value) => {
//     setFilters((prev) => ({
//       ...prev,
//       [filterName]: value === "all" ? null : value,
//     }));
//     setVisibleBlogs(3); // Reset visible blogs when filters change
//   };

//   const handleBlogClick = (blogId) => {
//     navigate(`/blogs/${blogId}`);
//   };

//   // Toggle bookmark for a blog
//   const toggleBookmark = (blogId, e) => {
//     e.stopPropagation();

//     let updatedBookmarks;
//     if (bookmarks.includes(blogId)) {
//       updatedBookmarks = bookmarks.filter((id) => id !== blogId);
//     } else {
//       updatedBookmarks = [...bookmarks, blogId];
//     }

//     setBookmarks(updatedBookmarks);

//     // Save to localStorage
//     try {
//       localStorage.setItem("blogBookmarks", JSON.stringify(updatedBookmarks));
//     } catch (error) {
//       console.error("Error saving bookmarks to localStorage:", error);
//     }
//   };

//   // Check if a blog is bookmarked
//   const isBookmarked = (blogId) => {
//     return bookmarks.includes(blogId);
//   };

//   // Function to scroll to top
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   const filteredBlogs = blogData.filter((blog) => {
//     // Filter by category (moved first)
//     if (filters.category && blog.category !== filters.category) return false;

//     // Filter by read time
//     if (filters.readTime) {
//       const readTime = parseInt(blog.readTime);
//       const filterTime = parseInt(filters.readTime);

//       if (filterTime === 5 && readTime >= 5) return false;
//       if (filterTime === 10 && (readTime < 5 || readTime >= 10)) return false;
//       if (filterTime === 15 && (readTime < 10 || readTime >= 15)) return false;
//       if (filterTime === 20 && readTime < 15) return false;
//     }

//     // Filter by views
//     if (filters.maxViews && blog.views < parseInt(filters.maxViews))
//       return false;

//     // Filter by trending status
//     if (filters.trending !== null) {
//       const isTrending = blog.TrendingTag === "true";
//       if (filters.trending === "true" && !isTrending) return false;
//       if (filters.trending === "false" && isTrending) return false;
//     }

//     return true;
//   });

//   return (
//     <div className="upcoming-hub">
//       <div className="bg-gradient"></div>

//       <div className="upcoming-container">
//         <header className="hero-section" ref={heroRef}>
//           <div className="hero-content">
//             <div className="hero-badge">
//               <FaStar
//                 className="star-icon"
//                 style={{ opacity: starVisible ? 1 : 0.3 }}
//               />
//               <span>Latest Educational Insights</span>
//             </div>
//             <header className="resources-header">
//               <h1 className="resources-title">EdTech Learning Hub</h1>
//               <p className="allparagraph">
//                 Expand Your Knowledge with Cutting-Edge Resources
//               </p>
//             </header>
//             <div className="hero-stats">
//               <div className="stat">
//                 <span className="stat-number">
//                   {formatNumber(stats.learners)}
//                 </span>
//                 <span className="stat-label">Learners</span>
//               </div>
//               <div className="stat">
//                 <span className="stat-number">{stats.satisfaction}★</span>
//                 <span className="stat-label">Satisfaction</span>
//               </div>
//               <div className="stat">
//                 <span className="stat-number">{stats.completion}%</span>
//                 <span className="stat-label">Completion Rate</span>
//               </div>
//             </div>
//           </div>
//         </header>

//         <div className="events-section">
//           <div className="section-header">
//             <h2>Featured Articles</h2>
//             <p className="allparagraph">
//               Expert insights on digital learning, educational technology, and
//               skill development
//             </p>

//             {/* Saved Blogs Button */}
//             <Link
//               to="/saved-blogs"
//               className="saved-blogs-button"
//               style={{ fontSize: "12px" }}
//               onClick={scrollToTop} // Added scroll to top on click
//             >
//               <FaBookmark /> View Saved Blogs ({bookmarks.length})
//             </Link>
//           </div>

//           {/* Filters Section */}
//           <div className="blog-filters">
//             <div className="filter-group">
//               <div className="filter-group-1">
//                 <FaFilter className="filter-icon" />
//                 <span className="filter-label" style={{ width: "100px" }}>
//                   Filter by:
//                 </span>
//               </div>

//               {/* Category Filter (moved to first) */}
//               <select
//                 className="filter-select"
//                 value={filters.category || "all"}
//                 onChange={(e) => handleFilterChange("category", e.target.value)}
//               >
//                 <option value="all">Category (All)</option>
//                 {categories.map((category) => (
//                   <option key={category} value={category}>
//                     {category}
//                   </option>
//                 ))}
//               </select>

//               {/* Read Time Filter */}
//               <select
//                 className="filter-select"
//                 value={filters.readTime || "all"}
//                 onChange={(e) => handleFilterChange("readTime", e.target.value)}
//               >
//                 <option value="all">Read Time (All)</option>
//                 {readTimeOptions.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </select>

//               {/* Views Filter */}
//               <select
//                 className="filter-select"
//                 value={filters.maxViews || "all"}
//                 onChange={(e) => handleFilterChange("maxViews", e.target.value)}
//               >
//                 <option value="all">Views (All)</option>
//                 {viewOptions.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </select>

//               {/* Trending Filter - Added this new filter */}
//               <select
//                 className="filter-select"
//                 value={filters.trending || "all"}
//                 onChange={(e) => handleFilterChange("trending", e.target.value)}
//               >
//                 <option value="all">Trending (All)</option>
//                 {trendingOptions.map((option) => (
//                   <option key={option.value} value={option.value}>
//                     {option.label}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="section-blogs-cards">
//             {filteredBlogs.slice(0, visibleBlogs).map((blog, index) => (
//               <div
//                 className={`blog-cards ${
//                   index >= visibleBlogs - 3 ? "blog-card-enter" : ""
//                 }`}
//                 key={blog.id}
//                 onClick={(e) => {
//                   createRipple(e);
//                   handleBlogClick(blog.id);
//                 }}
//                 onTouchStart={createRipple}
//               >
//                 <img src={blog.imageUrl} alt={blog.title} />

//                 {/* Trending Tag */}
//                 {blog.TrendingTag === "true" && (
//                   <div className="trending-tag-blog">
//                     <FaFire className="trending-icon" />
//                     <span>Trending</span>
//                   </div>
//                 )}

//                 {/* Bookmark button */}
//                 <button
//                   className={`bookmark-card-btn ${
//                     isBookmarked(blog.id) ? "bookmarked" : ""
//                   }`}
//                   onClick={(e) => toggleBookmark(blog.id, e)}
//                   title={
//                     isBookmarked(blog.id)
//                       ? "Remove from saved"
//                       : "Save for later"
//                   }
//                 >
//                   <FaBookmark />
//                 </button>

//                 <h3 className="blogs-cards-haeding">{blog.title}</h3>
//                 <p className="blog-paragraph">{blog.excerpt}</p>
//                 <p className="blog-author" style={{ fontSize: "15px" }}>
//                   By - <span style={{ color: "#333" }}>{blog.author}</span> |{" "}
//                   {blog.date} |{" "}
//                   <span style={{ color: "#333" }}>
//                     {blog.readTime} min read
//                   </span>
//                 </p>
//                 <div className="blog-meta">
//                   <span className="blog-category">{blog.category}</span>
//                   <span className="blog-views">{blog.views} views</span>
//                 </div>
//                 <button
//                   className="Blog-cards-readmore"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleBlogClick(blog.id);
//                   }}
//                 >
//                   Read More <span className="arrow">→</span>
//                 </button>
//               </div>
//             ))}
//           </div>

//           {visibleBlogs < filteredBlogs.length && (
//             <div className="load-more-container">
//               <button
//                 className={`load-more-button ${isLoading ? "loading" : ""}`}
//                 onClick={loadMoreBlogs}
//                 disabled={isLoading}
//               >
//                 {isLoading ? "Loading..." : "Show More"}
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blogs;

/* */
import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaFilter, FaBookmark, FaFire } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import "./css/UpComing.css";
import "./css/Blogs.css";
import blogData from "../../src/pages/data/datablogs.json";

const Blogs = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    category: null,
    readTime: null,
    maxViews: null,
    trending: null, // Added trending filter
  });
  const [stats, setStats] = useState({
    learners: 0,
    satisfaction: 0,
    completion: 0,
  });
  const [starVisible, setStarVisible] = useState(true);
  const [bookmarks, setBookmarks] = useState([]);

  const heroRef = useRef(null);
  const counted = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Load bookmarks from localStorage
    loadBookmarks();

    // Make the star icon blink continuously
    const blinkInterval = setInterval(() => {
      setStarVisible((prev) => !prev);
    }, 600); // Blink every 600ms

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;

          // Animate counting for each value
          animateCount(0, 50000, 2000, (value) =>
            setStats((prev) => ({ ...prev, learners: value }))
          );

          animateCount(0, 4.8, 1800, (value) =>
            setStats((prev) => ({ ...prev, satisfaction: value }))
          );

          animateCount(0, 92, 1500, (value) =>
            setStats((prev) => ({ ...prev, completion: value }))
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

  // Function to load bookmarks from localStorage
  const loadBookmarks = () => {
    try {
      const savedBookmarks = localStorage.getItem("blogBookmarks");
      if (savedBookmarks) {
        const parsedBookmarks = JSON.parse(savedBookmarks);
        // Ensure we have an array of numbers (blog IDs)
        if (Array.isArray(parsedBookmarks)) {
          setBookmarks(parsedBookmarks.map((id) => Number(id)));
        }
      }
    } catch (error) {
      console.error("Error loading bookmarks from localStorage:", error);
      setBookmarks([]);
    }
  };

  const animateCount = function (start, end, duration, callback) {
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

  // Extract unique categories from blogData
  const categories = [...new Set(blogData.map((blog) => blog.category))];

  // Read time options
  const readTimeOptions = [
    { value: "5", label: "< 5 min" },
    { value: "10", label: "5-10 min" },
    { value: "15", label: "10-15 min" },
    { value: "20", label: "> 15 min" },
  ];

  // Views options (replacing upvotes)
  const viewOptions = [
    { value: "100", label: "100+ views" },
    { value: "500", label: "500+ views" },
    { value: "1000", label: "1000+ views" },
  ];

  // Trending options
  const trendingOptions = [
    { value: "true", label: "Trending" },
    { value: "false", label: "Not Trending" },
  ];

  const createRipple = (event) => {
    const card = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(card.clientWidth, card.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      event.clientX - card.getBoundingClientRect().left - radius
    }px`;
    circle.style.top = `${
      event.clientY - card.getBoundingClientRect().top - radius
    }px`;
    circle.classList.add("ripple");

    const existingRipple = card.querySelector(".ripple");
    if (existingRipple) {
      existingRipple.remove();
    }

    card.appendChild(circle);
  };

  const loadMoreBlogs = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
      setIsLoading(false);
    }, 500);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: value === "all" ? null : value,
    }));
    setVisibleBlogs(3); // Reset visible blogs when filters change
  };

  const handleBlogClick = (blogId) => {
    navigate(`/blogs/${blogId}`);
  };

  // Toggle bookmark for a blog
  const toggleBookmark = (blogId, e) => {
    e.stopPropagation();

    let updatedBookmarks;
    if (bookmarks.includes(blogId)) {
      updatedBookmarks = bookmarks.filter((id) => id !== blogId);
    } else {
      updatedBookmarks = [...bookmarks, blogId];
    }

    setBookmarks(updatedBookmarks);

    // Save to localStorage
    try {
      localStorage.setItem("blogBookmarks", JSON.stringify(updatedBookmarks));
    } catch (error) {
      console.error("Error saving bookmarks to localStorage:", error);
    }
  };

  // Check if a blog is bookmarked
  const isBookmarked = (blogId) => {
    return bookmarks.includes(blogId);
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const filteredBlogs = blogData.filter((blog) => {
    // Filter by category (moved first)
    if (filters.category && blog.category !== filters.category) return false;

    // Filter by read time
    if (filters.readTime) {
      const readTime = parseInt(blog.readTime);
      const filterTime = parseInt(filters.readTime);

      if (filterTime === 5 && readTime >= 5) return false;
      if (filterTime === 10 && (readTime < 5 || readTime >= 10)) return false;
      if (filterTime === 15 && (readTime < 10 || readTime >= 15)) return false;
      if (filterTime === 20 && readTime < 15) return false;
    }

    // Filter by views
    if (filters.maxViews && blog.views < parseInt(filters.maxViews))
      return false;

    // Filter by trending status
    if (filters.trending !== null) {
      const isTrending = blog.TrendingTag === "true";
      if (filters.trending === "true" && !isTrending) return false;
      if (filters.trending === "false" && isTrending) return false;
    }

    return true;
  });

  return (
    <div className="upcoming-hub">
      <div className="bg-gradient"></div>

      <div className="upcoming-container">
        <header className="hero-section" ref={heroRef}>
          <div className="hero-content">
            <div className="hero-badge">
              <FaStar
                className="star-icon"
                style={{ opacity: starVisible ? 1 : 0.3 }}
              />
              <span>Latest Educational Insights</span>
            </div>
            <header className="resources-header">
              <h1 className="resources-title">EdTech Learning Hub</h1>
              <p className="allparagraph">
                Expand Your Knowledge with Cutting-Edge Resources
              </p>
            </header>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">
                  {formatNumber(stats.learners)}
                </span>
                <span className="stat-label">Learners</span>
              </div>
              <div className="stat">
                <span className="stat-number">{stats.satisfaction}★</span>
                <span className="stat-label">Satisfaction</span>
              </div>
              <div className="stat">
                <span className="stat-number">{stats.completion}%</span>
                <span className="stat-label">Completion Rate</span>
              </div>
            </div>
          </div>
        </header>

        <div className="events-section">
          <div className="section-header">
            <h2>Featured Articles</h2>
            <p className="allparagraph">
              Expert insights on digital learning, educational technology, and
              skill development
            </p>

            {/* Saved Blogs Button */}
            <Link
              to="/saved-blogs"
              className="saved-blogs-button"
              style={{ fontSize: "12px", display: "none" }}
              onClick={scrollToTop} // Added scroll to top on click
            >
              <FaBookmark /> View Saved Blogs ({bookmarks.length})
            </Link>
          </div>

          {/* Filters Section */}
          <div className="blog-filters">
            <div className="filter-group">
              <div className="filter-group-1">
                <FaFilter className="filter-icon" />
                <span className="filter-label" style={{ width: "100px" }}>
                  Filter by:
                </span>
              </div>

              {/* Category Filter (moved to first) */}
              <select
                className="filter-select"
                value={filters.category || "all"}
                onChange={(e) => handleFilterChange("category", e.target.value)}
              >
                <option value="all">Category (All)</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {/* Read Time Filter */}
              <select
                className="filter-select"
                value={filters.readTime || "all"}
                onChange={(e) => handleFilterChange("readTime", e.target.value)}
              >
                <option value="all">Read Time (All)</option>
                {readTimeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* Views Filter */}
              <select
                className="filter-select"
                value={filters.maxViews || "all"}
                onChange={(e) => handleFilterChange("maxViews", e.target.value)}
              >
                <option value="all">Views (All)</option>
                {viewOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* Trending Filter - Added this new filter */}
              <select
                className="filter-select"
                value={filters.trending || "all"}
                onChange={(e) => handleFilterChange("trending", e.target.value)}
              >
                <option value="all">Trending (All)</option>
                {trendingOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="section-blogs-cards">
            {filteredBlogs.slice(0, visibleBlogs).map((blog, index) => (
              <div
                className={`blog-cards ${
                  index >= visibleBlogs - 3 ? "blog-card-enter" : ""
                }`}
                key={blog.id}
                onClick={(e) => {
                  createRipple(e);
                  handleBlogClick(blog.id);
                }}
                onTouchStart={createRipple}
              >
                <img src={blog.imageUrl} alt={blog.title} />

                {/* Trending Tag */}
                {blog.TrendingTag === "true" && (
                  <div className="trending-tag-blog">
                    <FaFire className="trending-icon" />
                    <span>Trending</span>
                  </div>
                )}

                {/* Bookmark button */}
                <button
                  style={{ display: "none" }}
                  className={`bookmark-card-btn ${
                    isBookmarked(blog.id) ? "bookmarked" : ""
                  }`}
                  onClick={(e) => toggleBookmark(blog.id, e)}
                  title={
                    isBookmarked(blog.id)
                      ? "Remove from saved"
                      : "Save for later"
                  }
                >
                  <FaBookmark />
                </button>

                <h3 className="blogs-cards-haeding">{blog.title}</h3>
                <p className="blog-paragraph">{blog.excerpt}</p>
                <p className="blog-author" style={{ fontSize: "15px" }}>
                  By - <span style={{ color: "#333" }}>{blog.author}</span> |{" "}
                  {blog.date} |{" "}
                  <span style={{ color: "#333" }}>
                    {blog.readTime} min read
                  </span>
                </p>
                <div className="blog-meta">
                  <span className="blog-category">{blog.category}</span>
                  <span className="blog-views">{blog.views} views</span>
                </div>
                <button
                  className="Blog-cards-readmore"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBlogClick(blog.id);
                  }}
                >
                  Read More <span className="arrow">→</span>
                </button>
              </div>
            ))}
          </div>

          {visibleBlogs < filteredBlogs.length && (
            <div className="load-more-container">
              <button
                className={`load-more-button ${isLoading ? "loading" : ""}`}
                onClick={loadMoreBlogs}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Show More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
