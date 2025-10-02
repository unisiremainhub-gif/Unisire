// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   FaCalendarAlt,
//   FaClock,
//   FaUser,
//   FaThumbsUp,
//   FaThumbsDown,
//   FaEye,
//   FaShareAlt,
//   FaBookmark,
//   FaRegBookmark,
//   FaTimes,
//   FaCopy,
// } from "react-icons/fa";
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   LinkedinShareButton,
//   WhatsappShareButton,
//   FacebookIcon,
//   TwitterIcon,
//   LinkedinIcon,
//   WhatsappIcon,
// } from "react-share";
// import "./css/BlogDetail.css";
// import "./css/Blogs.css";
// import blogData from "../../src/pages/data/datablogs.json";

// const BlogDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [blog, setBlog] = useState(null);
//   const [relatedPosts, setRelatedPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showShareModal, setShowShareModal] = useState(false);
//   const [copySuccess, setCopySuccess] = useState("");
//   const [reactions, setReactions] = useState(() => {
//     const savedReactions = localStorage.getItem("blogReactions");
//     return savedReactions ? JSON.parse(savedReactions) : {};
//   });
//   const [bookmarks, setBookmarks] = useState(() => {
//     const savedBookmarks = localStorage.getItem("blogBookmarks");
//     return savedBookmarks ? JSON.parse(savedBookmarks) : [];
//   });

//   // Check if current blog is bookmarked
//   const isBookmarked = bookmarks.includes(parseInt(id));

//   // Handle scroll progress
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop =
//         window.pageYOffset || document.documentElement.scrollTop;
//       const windowHeight = window.innerHeight;
//       const docHeight = document.documentElement.scrollHeight;
//       const totalScroll = docHeight - windowHeight;
//       const progress = (scrollTop / totalScroll) * 100;
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Load blog data and related posts
//   useEffect(() => {
//     setLoading(true);
//     const foundBlog = blogData.find((blog) => blog.id === parseInt(id));

//     if (foundBlog) {
//       // Increment view count when blog is viewed
//       const updatedBlog = {
//         ...foundBlog,
//         views: (foundBlog.views || 0) + 1,
//       };
//       setBlog(updatedBlog);

//       const availablePosts = blogData.filter(
//         (post) => post.id !== parseInt(id)
//       );
//       const shuffled = [...availablePosts]
//         .sort(() => Math.random() - 0.5)
//         .slice(0, 3);
//       setRelatedPosts(shuffled);
//     }

//     setLoading(false);
//     window.scrollTo(0, 0); // Scroll to top when content changes
//   }, [id]);

//   // Save reactions to localStorage
//   useEffect(() => {
//     localStorage.setItem("blogReactions", JSON.stringify(reactions));
//   }, [reactions]);

//   // Save bookmarks to localStorage
//   useEffect(() => {
//     localStorage.setItem("blogBookmarks", JSON.stringify(bookmarks));
//   }, [bookmarks]);

//   // Handle related post click
//   const handleRelatedPostClick = (postId) => {
//     navigate(`/blogs/${postId}`, { replace: true });
//   };

//   const handleReaction = (reactionType) => {
//     setReactions((prev) => {
//       const currentReaction = prev[id];

//       // If clicking the same reaction again, remove it
//       if (currentReaction === reactionType) {
//         const newReactions = { ...prev };
//         delete newReactions[id];
//         return newReactions;
//       }

//       // Otherwise, set the new reaction
//       return {
//         ...prev,
//         [id]: reactionType,
//       };
//     });

//     // Update the blog's like/dislike counts
//     setBlog((prevBlog) => {
//       if (!prevBlog) return prevBlog;

//       const currentReaction = reactions[id];
//       let newLikes = prevBlog.likes;
//       let newDislikes = prevBlog.dislikes;

//       // If clicking the same reaction again, remove it
//       if (currentReaction === reactionType) {
//         if (reactionType === "like") newLikes--;
//         if (reactionType === "dislike") newDislikes--;
//       }
//       // If switching from one reaction to another
//       else if (currentReaction) {
//         if (currentReaction === "like") newLikes--;
//         if (currentReaction === "dislike") newDislikes--;
//         if (reactionType === "like") newLikes++;
//         if (reactionType === "dislike") newDislikes++;
//       }
//       // If adding a new reaction
//       else {
//         if (reactionType === "like") newLikes++;
//         if (reactionType === "dislike") newDislikes++;
//       }

//       return {
//         ...prevBlog,
//         likes: newLikes,
//         dislikes: newDislikes,
//       };
//     });
//   };

//   // Toggle bookmark
//   const toggleBookmark = () => {
//     const blogId = parseInt(id);
//     if (isBookmarked) {
//       setBookmarks((prev) => prev.filter((id) => id !== blogId));
//     } else {
//       setBookmarks((prev) => [...prev, blogId]);
//     }
//   };

//   // Open share modal
//   const openShareModal = () => {
//     setShowShareModal(true);
//     setCopySuccess("");
//   };

//   // Close share modal
//   const closeShareModal = () => {
//     setShowShareModal(false);
//     setCopySuccess("");
//   };

//   // Copy URL to clipboard
//   const copyToClipboard = () => {
//     navigator.clipboard
//       .writeText(window.location.href)
//       .then(() => {
//         setCopySuccess("Copied!");
//         setTimeout(() => setCopySuccess(""), 2000);
//       })
//       .catch((err) => {
//         console.error("Failed to copy: ", err);
//         setCopySuccess("Failed to copy");
//       });
//   };

//   const formatNumber = (num) => {
//     if (num >= 1000) {
//       return (num / 1000).toFixed(1) + "k";
//     }
//     return num;
//   };

//   if (loading) {
//     return <div className="loading-container">Loading...</div>;
//   }

//   if (!blog) {
//     return <div className="error-container">Post not found</div>;
//   }

//   const userReaction = reactions[id];
//   const shareUrl = window.location.href;
//   const title = blog.title;

//   return (
//     <div className="blog-detail">
//       {/* Scroll Progress Indicator */}
//       <div className="blogs-progress-container">
//         <div
//           className="blogs-progress-bar"
//           style={{ width: `${scrollProgress}%` }}
//         ></div>
//       </div>

//       <div className="blog-detail-container">
//         {/* Header Section */}
//         <button
//           className="rater-button self my-profile-rater-button ripple-effect"
//           onClick={() => navigate("/")}
//           style={{ marginTop: "15px" }}
//         >
//           Back to Blogs ←
//         </button>
//         <header className="blog-header">
//           <div className="header-content">
//             <div className="breadcrumb">{blog.category} / AI Learning</div>
//             <h1 className="blog-title">{blog.title}</h1>
//             <div className="blog-meta">
//               <span className="meta-item">
//                 <FaUser className="meta-icon" /> {blog.author}
//               </span>
//               <span className="meta-item">
//                 <FaCalendarAlt className="meta-icon" /> {blog.date}
//               </span>
//               <span className="meta-item">
//                 <FaClock className="meta-icon" /> {blog.readTime}
//               </span>
//             </div>

//             {/* Stats Section */}
//             <div className="blog-stats">
//               <div className="stat-item">
//                 <FaEye className="stat-icon" />
//                 <span>{formatNumber(blog.views || 0)} views</span>
//               </div>

//               <div className="reaction-buttons">
//                 <button
//                   className={`reaction-btn like ${
//                     userReaction === "like" ? "active" : ""
//                   }`}
//                   onClick={() => handleReaction("like")}
//                 >
//                   <FaThumbsUp />
//                   <span>{formatNumber(blog.likes || 0)}</span>
//                 </button>

//                 <button
//                   className={`reaction-btn dislike ${
//                     userReaction === "dislike" ? "active" : ""
//                   }`}
//                   onClick={() => handleReaction("dislike")}
//                 >
//                   <FaThumbsDown />
//                   <span>{formatNumber(blog.dislikes || 0)}</span>
//                 </button>

//                 <button
//                   className={`bookmark-btn ${isBookmarked ? "active" : ""}`}
//                   onClick={toggleBookmark}
//                 >
//                   {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
//                 </button>

//                 <button className="share-btn" onClick={openShareModal}>
//                   <FaShareAlt />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="header-image">
//             <img src={blog.imageUrl} alt={blog.title} />
//           </div>
//         </header>

//         {/* Main Content Section */}
//         <main className="blog-content" style={{ transform: "none" }}>
//           <div className="content-wrapper">
//             {blog.mainHeading && (
//               <h2 className="content-main-heading">{blog.mainHeading}</h2>
//             )}

//             {blog.content.map((section, index) => {
//               switch (section.type) {
//                 case "paragraph":
//                   return (
//                     <p key={index} className="content-paragraph">
//                       {section.text}
//                     </p>
//                   );
//                 case "heading":
//                   return (
//                     <h2 key={index} className="content-heading">
//                       {section.text}
//                     </h2>
//                   );
//                 case "image":
//                   return (
//                     <div key={index} className="content-image-container">
//                       <img src={section.url} alt="" className="content-image" />
//                       {section.caption && (
//                         <p className="image-caption">{section.caption}</p>
//                       )}
//                     </div>
//                   );
//                 case "quote":
//                   return (
//                     <blockquote key={index} className="content-quote">
//                       <p>{section.text}</p>
//                       {section.author && <footer>— {section.author}</footer>}
//                     </blockquote>
//                   );
//                 case "table":
//                   return (
//                     <div key={index} className="content-table-container">
//                       <table className="content-table">
//                         <thead>
//                           <tr>
//                             {section.data.headers.map((header, i) => (
//                               <th key={i}>{header}</th>
//                             ))}
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {section.data.rows.map((row, i) => (
//                             <tr key={i}>
//                               {row.map((cell, j) => (
//                                 <td key={j}>{cell}</td>
//                               ))}
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   );
//                 case "steps":
//                   return (
//                     <div key={index} className="content-steps-container">
//                       <ol className="content-steps">
//                         {section.items.map((step, i) => {
//                           const stepMatch = step.match(/^(Step \d+:?)(.*)/);
//                           return (
//                             <li key={i} className="content-step">
//                               {stepMatch && (
//                                 <>
//                                   <strong>{stepMatch[1]}</strong>
//                                   {stepMatch[2]}
//                                 </>
//                               )}
//                             </li>
//                           );
//                         })}
//                       </ol>
//                     </div>
//                   );
//                 default:
//                   return null;
//               }
//             })}
//           </div>

//           {/* Author Section */}
//           <div className="author-section">
//             <div className="author-image">
//               <img
//                 src="https://secure.gravatar.com/avatar/be33340e4bb86666fb317d0418c57044d9fdf60d60ad42125bff3bd32bece962?s=240&d=mm&r=g"
//                 alt={blog.author}
//               />
//             </div>
//             <div className="author-info">
//               <h3 className="author-name">About {blog.author}</h3>
//               <p className="author-bio">
//                 Anshuman Singh is a Senior Developer Advocate with 10+ years of
//                 experience in AI and education technology. He specializes in
//                 developer growth strategies and has worked with numerous tech
//                 companies to upskill their engineering teams.
//               </p>
//             </div>
//           </div>
//         </main>

//         {/* Newsletter Section */}
//         <div className="newsletter-section">
//           <div className="newsletter-container">
//             <h3 className="newsletter-title">Join our newsletter!</h3>
//             <p className="newsletter-description">
//               Enter your email to receive our latest newsletter.
//             </p>
//             <div className="newsletter-form">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="newsletter-input"
//               />
//               <button className="newsletter-button">Subscribe Now</button>
//             </div>
//             <p className="newsletter-disclaimer">Don't worry, we don't spam</p>
//           </div>
//         </div>

//         {/* Related Posts Section */}
//         {relatedPosts.length > 0 && (
//           <>
//             <h2 className="related-posts-heading">Related Posts</h2>
//             <div className="section-blogs-cards">
//               {relatedPosts.map((post) => (
//                 <div
//                   className="blog-cards"
//                   key={post.id}
//                   onClick={() => handleRelatedPostClick(post.id)}
//                   style={{ cursor: "pointer" }}
//                 >
//                   <img src={post.imageUrl} alt={post.title} />
//                   <h3 className="blogs-cards-haeding">{post.title}</h3>
//                   <p className="blog-read-time" style={{ fontSize: "14px" }}>
//                     {post.readTime}
//                   </p>
//                   <div className="Blog-cards-readmore">
//                     Read More <span className="arrow">→</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </div>

//       {/* Share Modal */}
//       {/* {showShareModal && (
//         <div className="modal-blog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h3>Share this post</h3>
//               <button className="modal-close" onClick={closeShareModal}>
//                 <FaTimes />
//               </button>
//             </div>
//             <div className="share-url-container">
//               <input
//                 type="text"
//                 value={shareUrl}
//                 readOnly
//                 className="share-url-input"
//               />
//               <button className="copy-btn" onClick={copyToClipboard}>
//                 <FaCopy /> {copySuccess || "Copy"}
//               </button>
//             </div>
//             <div className="social-share-buttons">
//               <FacebookShareButton url={shareUrl} quote={title}>
//                 <FacebookIcon size={40} round />
//               </FacebookShareButton>
//               <TwitterShareButton url={shareUrl} title={title}>
//                 <TwitterIcon size={40} round />
//               </TwitterShareButton>
//               <LinkedinShareButton url={shareUrl} title={title}>
//                 <LinkedinIcon size={40} round />
//               </LinkedinShareButton>
//               <WhatsappShareButton url={shareUrl} title={title}>
//                 <WhatsappIcon size={40} round />
//               </WhatsappShareButton>
//             </div>
//           </div>
//         </div>
//       )} */}
//       {/* Share Modal */}
//       {showShareModal && (
//         <div className="modal-blog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h3>Share this post</h3>
//               <button className="modal-close" onClick={closeShareModal}>
//                 <FaTimes />
//               </button>
//             </div>

//             {/* Blog Preview */}
//             <div className="modal-blog-preview">
//               <h4 className="modal-blog-title">{blog.title}</h4>
//               <p className="modal-blog-snippet">
//                 {blog.content[0]?.text?.substring(0, 120)}...
//               </p>
//             </div>

//             {/* URL + Copy */}
//             <div className="share-url-container">
//               <input
//                 type="text"
//                 value={shareUrl}
//                 readOnly
//                 className="share-url-input"
//               />
//               <button className="copy-btn" onClick={copyToClipboard}>
//                 <FaCopy /> {copySuccess || "Copy"}
//               </button>
//             </div>

//             {/* Social Share */}
//             <div className="social-share-buttons">
//               <FacebookShareButton url={shareUrl} quote={title}>
//                 <FacebookIcon size={46} round />
//               </FacebookShareButton>
//               <TwitterShareButton url={shareUrl} title={title}>
//                 <TwitterIcon size={46} round />
//               </TwitterShareButton>
//               <LinkedinShareButton url={shareUrl} title={title}>
//                 <LinkedinIcon size={46} round />
//               </LinkedinShareButton>
//               <WhatsappShareButton url={shareUrl} title={title}>
//                 <WhatsappIcon size={46} round />
//               </WhatsappShareButton>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogDetail;

/*diable*/

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaThumbsUp,
  FaThumbsDown,
  FaEye,
  FaShareAlt,
  FaBookmark,
  FaRegBookmark,
  FaTimes,
  FaCopy,
} from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";
import "./css/BlogDetail.css";
import "./css/Blogs.css";
import blogData from "../../src/pages/data/datablogs.json";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [blog, setBlog] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");

  // DISABLED: Like/Dislike reactions state management
  // const [reactions, setReactions] = useState(() => {
  //   const savedReactions = localStorage.getItem("blogReactions");
  //   return savedReactions ? JSON.parse(savedReactions) : {};
  // });

  // DISABLED: Bookmarks state management
  // const [bookmarks, setBookmarks] = useState(() => {
  //   const savedBookmarks = localStorage.getItem("blogBookmarks");
  //   return savedBookmarks ? JSON.parse(savedBookmarks) : [];
  // });

  // DISABLED: Check if current blog is bookmarked
  // const isBookmarked = bookmarks.includes(parseInt(id));

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScroll = docHeight - windowHeight;
      const progress = (scrollTop / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load blog data and related posts
  useEffect(() => {
    setLoading(true);
    const foundBlog = blogData.find((blog) => blog.id === parseInt(id));

    if (foundBlog) {
      // Increment view count when blog is viewed
      const updatedBlog = {
        ...foundBlog,
        views: (foundBlog.views || 0) + 1,
      };
      setBlog(updatedBlog);

      const availablePosts = blogData.filter(
        (post) => post.id !== parseInt(id)
      );
      const shuffled = [...availablePosts]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      setRelatedPosts(shuffled);
    }

    setLoading(false);
    window.scrollTo(0, 0); // Scroll to top when content changes
  }, [id]);

  // DISABLED: Save reactions to localStorage
  // useEffect(() => {
  //   localStorage.setItem("blogReactions", JSON.stringify(reactions));
  // }, [reactions]);

  // DISABLED: Save bookmarks to localStorage
  // useEffect(() => {
  //   localStorage.setItem("blogBookmarks", JSON.stringify(bookmarks));
  // }, [bookmarks]);

  // Handle related post click
  const handleRelatedPostClick = (postId) => {
    navigate(`/blogs/${postId}`, { replace: true });
  };

  // DISABLED: Handle like/dislike reactions
  // const handleReaction = (reactionType) => {
  //   setReactions((prev) => {
  //     const currentReaction = prev[id];
  //
  //     // If clicking the same reaction again, remove it
  //     if (currentReaction === reactionType) {
  //       const newReactions = { ...prev };
  //       delete newReactions[id];
  //       return newReactions;
  //     }
  //
  //     // Otherwise, set the new reaction
  //     return {
  //       ...prev,
  //       [id]: reactionType,
  //     };
  //   });
  //
  //   // Update the blog's like/dislike counts
  //   setBlog((prevBlog) => {
  //     if (!prevBlog) return prevBlog;
  //
  //     const currentReaction = reactions[id];
  //     let newLikes = prevBlog.likes;
  //     let newDislikes = prevBlog.dislikes;
  //
  //     // If clicking the same reaction again, remove it
  //     if (currentReaction === reactionType) {
  //       if (reactionType === "like") newLikes--;
  //       if (reactionType === "dislike") newDislikes--;
  //     }
  //     // If switching from one reaction to another
  //     else if (currentReaction) {
  //       if (currentReaction === "like") newLikes--;
  //       if (currentReaction === "dislike") newDislikes--;
  //       if (reactionType === "like") newLikes++;
  //       if (reactionType === "dislike") newDislikes++;
  //     }
  //     // If adding a new reaction
  //     else {
  //       if (reactionType === "like") newLikes++;
  //       if (reactionType === "dislike") newDislikes++;
  //     }
  //
  //     return {
  //       ...prevBlog,
  //       likes: newLikes,
  //       dislikes: newDislikes,
  //     };
  //   });
  // };

  // DISABLED: Toggle bookmark functionality
  // const toggleBookmark = () => {
  //   const blogId = parseInt(id);
  //   if (isBookmarked) {
  //     setBookmarks((prev) => prev.filter((id) => id !== blogId));
  //   } else {
  //     setBookmarks((prev) => [...prev, blogId]);
  //   }
  // };

  // Open share modal
  const openShareModal = () => {
    setShowShareModal(true);
    setCopySuccess("");
  };

  // Close share modal
  const closeShareModal = () => {
    setShowShareModal(false);
    setCopySuccess("");
  };

  // Copy URL to clipboard
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        setCopySuccess("Failed to copy");
      });
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num;
  };

  if (loading) {
    return <div className="loading-container">Loading...</div>;
  }

  if (!blog) {
    return <div className="error-container">Post not found</div>;
  }

  // DISABLED: User reaction state
  // const userReaction = reactions[id];

  const shareUrl = window.location.href;
  const title = blog.title;

  return (
    <div className="blog-detail">
      {/* Scroll Progress Indicator */}
      <div className="blogs-progress-container">
        <div
          className="blogs-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className="blog-detail-container">
        {/* Header Section */}
        <button
          className="rater-button self my-profile-rater-button ripple-effect"
          onClick={() => navigate("/")}
          style={{ marginTop: "15px" }}
        >
          Back to Blogs ←
        </button>
        <header className="blog-header">
          <div className="header-content">
            <div className="breadcrumb">{blog.category} / AI Learning</div>
            <h1 className="blog-title">{blog.title}</h1>
            <div className="blog-meta">
              <span className="meta-item">
                <FaUser className="meta-icon" /> {blog.author}
              </span>
              <span className="meta-item">
                <FaCalendarAlt className="meta-icon" /> {blog.date}
              </span>
              <span className="meta-item">
                <FaClock className="meta-icon" /> {blog.readTime}
              </span>
            </div>

            {/* Stats Section */}
            <div className="blog-stats">
              <div className="stat-item">
                <FaEye className="stat-icon" />
                <span>{formatNumber(blog.views || 0)} views</span>
              </div>

              {/* DISABLED: Reaction and Bookmark Buttons */}
              <div className="reaction-buttons">
                {/* DISABLED: Like Button */}
                {/* <button
                  className={`reaction-btn like ${
                    userReaction === "like" ? "active" : ""
                  }`}
                  onClick={() => handleReaction("like")}
                >
                  <FaThumbsUp />
                  <span>{formatNumber(blog.likes || 0)}</span>
                </button> */}

                {/* DISABLED: Dislike Button */}
                {/* <button
                  className={`reaction-btn dislike ${
                    userReaction === "dislike" ? "active" : ""
                  }`}
                  onClick={() => handleReaction("dislike")}
                >
                  <FaThumbsDown />
                  <span>{formatNumber(blog.dislikes || 0)}</span>
                </button> */}

                {/* DISABLED: Bookmark Button */}
                {/* <button
                  className={`bookmark-btn ${isBookmarked ? "active" : ""}`}
                  onClick={toggleBookmark}
                >
                  {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
                </button> */}

                {/* Share Button (Still Enabled) */}
                <button className="share-btn" onClick={openShareModal}>
                  <FaShareAlt />
                </button>
              </div>
            </div>
          </div>
          <div className="header-image">
            <img src={blog.imageUrl} alt={blog.title} />
          </div>
        </header>

        {/* Main Content Section */}
        <main className="blog-content" style={{ transform: "none" }}>
          <div className="content-wrapper">
            {blog.mainHeading && (
              <h2 className="content-main-heading">{blog.mainHeading}</h2>
            )}

            {blog.content.map((section, index) => {
              switch (section.type) {
                case "paragraph":
                  return (
                    <p key={index} className="content-paragraph">
                      {section.text}
                    </p>
                  );
                case "heading":
                  return (
                    <h2 key={index} className="content-heading">
                      {section.text}
                    </h2>
                  );
                case "image":
                  return (
                    <div key={index} className="content-image-container">
                      <img src={section.url} alt="" className="content-image" />
                      {section.caption && (
                        <p className="image-caption">{section.caption}</p>
                      )}
                    </div>
                  );
                case "quote":
                  return (
                    <blockquote key={index} className="content-quote">
                      <p>{section.text}</p>
                      {section.author && <footer>— {section.author}</footer>}
                    </blockquote>
                  );
                case "table":
                  return (
                    <div key={index} className="content-table-container">
                      <table className="content-table">
                        <thead>
                          <tr>
                            {section.data.headers.map((header, i) => (
                              <th key={i}>{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.data.rows.map((row, i) => (
                            <tr key={i}>
                              {row.map((cell, j) => (
                                <td key={j}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                case "steps":
                  return (
                    <div key={index} className="content-steps-container">
                      <ol className="content-steps">
                        {section.items.map((step, i) => {
                          const stepMatch = step.match(/^(Step \d+:?)(.*)/);
                          return (
                            <li key={i} className="content-step">
                              {stepMatch && (
                                <>
                                  <strong>{stepMatch[1]}</strong>
                                  {stepMatch[2]}
                                </>
                              )}
                            </li>
                          );
                        })}
                      </ol>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* Author Section */}
          <div className="author-section">
            <div className="author-image">
              <img
                src="https://secure.gravatar.com/avatar/be33340e4bb86666fb317d0418c57044d9fdf60d60ad42125bff3bd32bece962?s=240&d=mm&r=g"
                alt={blog.author}
              />
            </div>
            <div className="author-info">
              <h3 className="author-name">About {blog.author}</h3>
              <p className="author-bio">
                Anshuman Singh is a Senior Developer Advocate with 10+ years of
                experience in AI and education technology. He specializes in
                developer growth strategies and has worked with numerous tech
                companies to upskill their engineering teams.
              </p>
            </div>
          </div>
        </main>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div className="newsletter-container">
            <h3 className="newsletter-title">Join our newsletter!</h3>
            <p className="newsletter-description">
              Enter your email to receive our latest newsletter.
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                className="newsletter-input"
              />
              <button className="newsletter-button">Subscribe Now</button>
            </div>
            <p className="newsletter-disclaimer">Don't worry, we don't spam</p>
          </div>
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <>
            <h2 className="related-posts-heading">Related Posts</h2>
            <div className="section-blogs-cards">
              {relatedPosts.map((post) => (
                <div
                  className="blog-cards"
                  key={post.id}
                  onClick={() => handleRelatedPostClick(post.id)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={post.imageUrl} alt={post.title} />
                  <h3 className="blogs-cards-haeding">{post.title}</h3>
                  <p className="blog-read-time" style={{ fontSize: "14px" }}>
                    {post.readTime}
                  </p>
                  <div className="Blog-cards-readmore">
                    Read More <span className="arrow">→</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="modal-blog">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Share this post</h3>
              <button className="modal-close" onClick={closeShareModal}>
                <FaTimes />
              </button>
            </div>

            {/* Blog Preview */}
            <div className="modal-blog-preview">
              <h4 className="modal-blog-title">{blog.title}</h4>
              <p className="modal-blog-snippet">
                {blog.content[0]?.text?.substring(0, 120)}...
              </p>
            </div>

            {/* URL + Copy */}
            <div className="share-url-container">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="share-url-input"
              />
              <button className="copy-btn" onClick={copyToClipboard}>
                <FaCopy /> {copySuccess || "Copy"}
              </button>
            </div>

            {/* Social Share */}
            <div className="social-share-buttons">
              <FacebookShareButton url={shareUrl} quote={title}>
                <FacebookIcon size={46} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={title}>
                <TwitterIcon size={46} round />
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl} title={title}>
                <LinkedinIcon size={46} round />
              </LinkedinShareButton>
              <WhatsappShareButton url={shareUrl} title={title}>
                <WhatsappIcon size={46} round />
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
