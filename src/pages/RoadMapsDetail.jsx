// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   FaStar,
//   FaUsers,
//   FaEye,
//   FaShareAlt,
//   FaTimes,
//   FaCopy,
//   FaCheckCircle,
//   FaFire,
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
// import data from "./data/datacard.json";
// import confetti from "canvas-confetti";
// import "./css/DetailCard.css";

// export const createRipple = (event) => {
//   const button = event.currentTarget;
//   const ripple = document.createElement("span");
//   ripple.classList.add("ripple");

//   const rect = button.getBoundingClientRect();
//   const size = Math.max(rect.width, rect.height);
//   const x = event.clientX - rect.left - size / 2;
//   const y = event.clientY - rect.top - size / 2;

//   ripple.style.width = ripple.style.height = `${size}px`;
//   ripple.style.left = `${x}px`;
//   ripple.style.top = `${y}px`;

//   button.appendChild(ripple);

//   ripple.addEventListener("animationend", () => {
//     ripple.remove();
//   });
// };

// const RoadMapsDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [course, setCourse] = useState(null);
//   const [activeTabs, setActiveTabs] = useState({});
//   const [progress, setProgress] = useState(50);
//   const [showShareModal, setShowShareModal] = useState(false);
//   const [copySuccess, setCopySuccess] = useState("");
//   const [showEnrollModal, setShowEnrollModal] = useState(false);
//   const [selectedLink, setSelectedLink] = useState(null);
//   const [stepStatuses, setStepStatuses] = useState({});

//   useEffect(() => {
//     const foundCourse = data.find((c) => c.id === parseInt(id));
//     setCourse(foundCourse);

//     // Generate random status for each step (for demo purposes)
//     if (foundCourse) {
//       const statuses = {};
//       foundCourse.steps.forEach((step, index) => {
//         // Random status for demo (will be replaced with backend data)
//         const randomStatus = Math.floor(Math.random() * 3); // 0, 1, or 2
//         statuses[index] = randomStatus;
//       });
//       setStepStatuses(statuses);
//     }
//   }, [id]);

//   const getStatusText = (status) => {
//     switch (status) {
//       case 0:
//         return "Uncompleted";
//       case 1:
//         return "In Progress";
//       case 2:
//         return "Completed";
//       default:
//         return "Uncompleted";
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 0:
//         return "#dc3545"; // Red for uncompleted
//       case 1:
//         return "#ffc107"; // Yellow for in progress
//       case 2:
//         return "#28a745"; // Green for completed
//       default:
//         return "#dc3545";
//     }
//   };

//   const handleTabChange = (stepNumber, tab) => {
//     setActiveTabs((prev) => ({
//       ...prev,
//       [stepNumber]: tab,
//     }));
//   };

//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 >= 0.5;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<FaStar key={i} className="star-icon filled" />);
//     }

//     if (hasHalfStar) {
//       stars.push(<FaStar key="half" className="star-icon half" />);
//     }

//     const emptyStars = 5 - stars.length;
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(<FaStar key={`empty-${i}`} className="star-icon empty" />);
//     }

//     return stars;
//   };

//   const openShareModal = () => {
//     setShowShareModal(true);
//     setCopySuccess("");
//   };

//   const closeShareModal = () => {
//     setShowShareModal(false);
//     setCopySuccess("");
//   };

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

//   // Enrollment modal logic
//   const openEnrollModal = (link) => {
//     setSelectedLink(link);
//     setShowEnrollModal(true);
//   };

//   const closeEnrollModal = () => {
//     setShowEnrollModal(false);
//     setSelectedLink(null);
//   };
//   // Inside CourseDetails Component, near other states
//   const [isEnrolled, setIsEnrolled] = useState(false);

//   useEffect(() => {
//     const foundCourse = data.find((c) => c.id === parseInt(id));
//     setCourse(foundCourse);

//     if (foundCourse?.Enrolled === "true") {
//       setIsEnrolled(true);
//     }

//     if (foundCourse) {
//       const statuses = {};
//       foundCourse.steps.forEach((step, index) => {
//         const randomStatus = Math.floor(Math.random() * 3);
//         statuses[index] = randomStatus;
//       });
//       setStepStatuses(statuses);
//     }
//   }, [id]);

//   // update confirmEnroll
//   const confirmEnroll = () => {
//     setIsEnrolled(true); // ✅ mark as enrolled
//     closeEnrollModal();
//     confetti(); // celebration effect 🎉
//   };

//   if (!course) {
//     return (
//       <h2 className="heading-secondary" style={{ textAlign: "center" }}>
//         Course not found! Try navigating from the home page.
//       </h2>
//     );
//   }

//   const shareUrl = window.location.href;
//   const title = course.name;

//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <div className="detailcard-container" style={{ maxWidth: "1400px" }}>
//         <button
//           className="rater-button self"
//           onClick={() => navigate("/resources/roadmaps")}
//         >
//           Back to Courses &#8592;
//         </button>

//         <div style={{ position: "relative" }}>
//           <h2 className="heading-secondary">{course.name}</h2>
//           {course.TrendingTag === "true" && (
//             <div className="trending-tag">
//               <FaFire className="trending-icon" />
//               <span>Trending</span>
//             </div>
//           )}
//         </div>

//         {/* Course Stats */}
//         <div className="course-stats">
//           <div className="stat-item">
//             <div className="stars">{renderStars(course.rating || 0)}</div>
//             <span className="rating-value">{course.rating || "0"}/5</span>
//           </div>

//           <div className="stat-item">
//             <FaUsers className="stat-icon" />
//             <span>{course.enrolledby || "0"} enrolled</span>
//           </div>

//           <div className="stat-item">
//             <FaEye className="stat-icon" />
//             <span>{course.viewCount || "0"} views</span>
//           </div>

//           {/* Completion Rate Stat */}
//           <div className="stat-item">
//             <FaCheckCircle className="stat-icon" />
//             <span>{course.completionRate || "0%"} completion rate</span>
//           </div>

//           <button className="share-course-btn" onClick={openShareModal}>
//             <FaShareAlt />
//             Share
//           </button>

//           <button
//             className={`enroll-btn ${isEnrolled ? "enrolled" : ""}`}
//             onClick={() => openEnrollModal()}
//           >
//             Status : {isEnrolled ? "Enrolled" : "Un-Enroll"}
//           </button>
//         </div>

//         <div className="detailedcard-upper">
//           <img src={course.image} alt={course.name} />
//           <div className="detailcard-mainparagrah">
//             <p className="icon-paragraph">{course.description}</p>
//             <p className="icon-paragraph">
//               <b>Average Duration:</b> {course.duration}
//             </p>
//           </div>
//         </div>

//         {/* Progress */}
//         <div style={{ marginTop: "20px" }}>
//           <div style={{ fontSize: "16px", fontWeight: "bold" }}>
//             Progress: {progress}%
//           </div>
//           <div
//             style={{
//               height: "20px",
//               backgroundColor: "#f0f0f0",
//               borderRadius: "5px",
//               marginTop: "10px",
//             }}
//           >
//             <div
//               style={{
//                 height: "100%",
//                 width: `${progress}%`,
//                 backgroundColor: "#4caf50",
//                 borderRadius: "5px",
//               }}
//             />
//           </div>
//         </div>

//         {/* Steps */}
//         <div className="detailcard-steps">
//           {course.steps.map((step, index) => {
//             const isSimpleButtons =
//               step.buttons &&
//               Array.isArray(step.buttons) &&
//               step.buttons[0]?.content;

//             const status =
//               stepStatuses[index] !== undefined ? stepStatuses[index] : 0;
//             const statusColor = getStatusColor(status);
//             const statusText = getStatusText(status);

//             return (
//               <div key={step.step} className="column-line">
//                 <div className="detailcards-line detail-card-margin"></div>

//                 <div className="detailcard-step">
//                   <div>
//                     <div className="detailcard-icon">{step.icon}</div>
//                   </div>

//                   <div className="detailcard-line"></div>

//                   <div className="detailcard-rightside">
//                     <div
//                       className="step-heading"
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "15px",
//                       }}
//                     >
//                       <h2 style={{ fontSize: "20px", margin: 0 }}>
//                         {step.heading}
//                       </h2>
//                       <span
//                         style={{
//                           backgroundColor: statusColor,
//                           color: "white",
//                           padding: "4px 10px",
//                           borderRadius: "12px",
//                           fontSize: "12px",
//                           fontWeight: "bold",
//                         }}
//                       >
//                         {statusText}
//                       </span>
//                     </div>

//                     <div className="detailcard-paragraphs">
//                       {step.paragraphs?.map((para, index) => (
//                         <div key={index} className="detail-paragraph">
//                           <p
//                             className="icon-paragraph"
//                             dangerouslySetInnerHTML={{
//                               __html: para.paragraph.replace(/\n/g, "<br/>"),
//                             }}
//                           ></p>
//                         </div>
//                       ))}
//                     </div>

//                     {step.buttons && (
//                       <div>
//                         {!isSimpleButtons && (
//                           <div className="tab-buttons">
//                             <div
//                               className={`tab-item-course-detail tab-item-course-detail-1 ripple-effect ${
//                                 !activeTabs[step.step] ||
//                                 activeTabs[step.step] === "non-paid"
//                                   ? "active-tab-course-detail"
//                                   : ""
//                               }`}
//                               onClick={(e) => {
//                                 handleTabChange(step.step, "non-paid");
//                                 createRipple(e);
//                               }}
//                             >
//                               Un-Paid
//                             </div>
//                             <div
//                               className={`tab-item-course-detail tab-item-course-detail-2 ripple-effect ${
//                                 activeTabs[step.step] === "paid"
//                                   ? "active-tab-course-detail"
//                                   : ""
//                               }`}
//                               onClick={(e) => {
//                                 handleTabChange(step.step, "paid");
//                                 createRipple(e);
//                               }}
//                             >
//                               Paid
//                             </div>
//                           </div>
//                         )}

//                         <div className="detail-buttons">
//                           {isSimpleButtons
//                             ? step.buttons.map((btn, idx) => (
//                                 <a
//                                   key={idx}
//                                   href="#"
//                                   className="btn hero-button1 detail-button ripple-effect"
//                                   onClick={(e) => {
//                                     e.preventDefault();
//                                     createRipple(e);
//                                     openEnrollModal(btn.link);
//                                   }}
//                                 >
//                                   {btn.content}
//                                 </a>
//                               ))
//                             : step.buttons.map((buttonObj, index) => {
//                                 if (
//                                   activeTabs[step.step] === "paid" &&
//                                   buttonObj.paid
//                                 ) {
//                                   return buttonObj.paid.buttons?.map(
//                                     (btn, idx) => (
//                                       <a
//                                         key={`${index}-paid-${idx}`}
//                                         href="#"
//                                         className="btn hero-button1 detail-button ripple-effect"
//                                         onClick={(e) => {
//                                           e.preventDefault();
//                                           createRipple(e);
//                                           openEnrollModal(btn.link);
//                                         }}
//                                       >
//                                         {btn.content}
//                                       </a>
//                                     )
//                                   );
//                                 }
//                                 if (
//                                   (!activeTabs[step.step] ||
//                                     activeTabs[step.step] === "non-paid") &&
//                                   buttonObj.unpaid
//                                 ) {
//                                   return buttonObj.unpaid.buttons?.map(
//                                     (btn, idx) => (
//                                       <a
//                                         key={`${index}-unpaid-${idx}`}
//                                         href="#"
//                                         className="btn hero-button1 detail-button ripple-effect"
//                                         onClick={(e) => {
//                                           e.preventDefault();
//                                           createRipple(e);
//                                           openEnrollModal(btn.link);
//                                         }}
//                                       >
//                                         {btn.content}
//                                       </a>
//                                     )
//                                   );
//                                 }
//                                 return null;
//                               })}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="detailcards-line"></div>

//         {/* <div className="final-message">
//           <p className="upper final-message-upper">Final Message</p>
//           <p className="icon-paragraph">{course.finalMessage}</p>
//         </div> */}
//         <div className="final-message">
//           <p className="upper final-message-upper">Final Message</p>

//           {course.finalMessage?.paragraph && (
//             <p className="icon-paragraph">{course.finalMessage.paragraph}</p>
//           )}

//           {course.finalMessage?.lists && (
//             <ul className="final-message-list">
//               {course.finalMessage.lists.map((point, idx) => (
//                 <li key={idx} className="icon-paragraph">
//                   {point}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>

//       {/* Share Modal */}
//       {showShareModal && (
//         <div className="modal-blog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h3>Share this course</h3>
//               <button className="modal-close" onClick={closeShareModal}>
//                 <FaTimes />
//               </button>
//             </div>

//             <div className="modal-blog-preview">
//               <h4 className="modal-blog-title">{course.name}</h4>
//               <p className="modal-blog-snippet">
//                 {course.description.substring(0, 120)}...
//               </p>
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

//       {/* Enroll Modal */}
//       {showEnrollModal && (
//         <div className="modal-blog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h3>Course Enrollment</h3>
//               <button className="modal-close" onClick={closeEnrollModal}>
//                 <FaTimes />
//               </button>
//             </div>

//             <p
//               style={{ marginBottom: "20px", fontSize: "17px", color: "#444" }}
//             >
//               Do you want to enroll in <b>{course.name}</b> before accessing
//               this resource?
//             </p>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "flex-end",
//                 gap: "12px",
//               }}
//             >
//               <button
//                 style={{
//                   padding: "10px 16px",
//                   borderRadius: "8px",
//                   border: "none",
//                   background: "#6c757d",
//                   color: "#fff",
//                   cursor: "pointer",
//                 }}
//                 onClick={closeEnrollModal}
//               >
//                 Cancel
//               </button>
//               <button
//                 style={{
//                   padding: "10px 16px",
//                   borderRadius: "8px",
//                   border: "none",
//                   background: "#28a745",
//                   color: "#fff",
//                   cursor: "pointer",
//                 }}
//                 onClick={confirmEnroll}
//               >
//                 Yes, Enroll
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RoadMapsDetail;

/* disable <functojalites></functojalites> */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaStar,
  FaUsers,
  FaEye,
  FaShareAlt,
  FaTimes,
  FaCopy,
  FaCheckCircle,
  FaFire,
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
import data from "./data/datacard.json";
import confetti from "canvas-confetti";
import "./css/DetailCard.css";
import image1 from "../pages/Images/Roadmaps/1.png";
import image2 from "../pages/Images/Roadmaps/2.png";
import image3 from "../pages/Images/Roadmaps/3.png";
import image4 from "../pages/Images/Roadmaps/4.png";
import image5 from "../pages/Images/Roadmaps/5.png";

export const createRipple = (event) => {
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

const RoadMapsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [activeTabs, setActiveTabs] = useState({});
  const [showShareModal, setShowShareModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");
  const [selectedLink, setSelectedLink] = useState(null);

  useEffect(() => {
    const foundCourse = data.find((c) => c.id === parseInt(id));
    setCourse(foundCourse);
  }, [id]);

  const handleTabChange = (stepNumber, tab) => {
    setActiveTabs((prev) => ({
      ...prev,
      [stepNumber]: tab,
    }));
  };

  const importedImages = [image1, image2, image3, image4, image5];

  const getCourseImage = (courseId) => {
    const imageIndex = (courseId - 1) % importedImages.length;
    return importedImages[imageIndex] || importedImages[0];
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="star-icon filled" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="star-icon half" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="star-icon empty" />);
    }

    return stars;
  };

  const openShareModal = () => {
    setShowShareModal(true);
    setCopySuccess("");
  };

  const closeShareModal = () => {
    setShowShareModal(false);
    setCopySuccess("");
  };

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

  const openLink = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  if (!course) {
    return (
      <h2 className="heading-secondary" style={{ textAlign: "center" }}>
        Course not found! Try navigating from the home page.
      </h2>
    );
  }

  const shareUrl = window.location.href;
  const title = course.name;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(245, 247, 255)",
      }}
    >
      <div className="detailcard-container" style={{ maxWidth: "1400px" }}>
        <button
          className="rater-button self"
          onClick={() => navigate("/resources/roadmaps")}
        >
          Back to Roadmaps &#8592;
        </button>

        <div style={{ position: "relative" }}>
          <h2 className="heading-secondary">{course.name}</h2>
          {course.TrendingTag === "true" && (
            <div className="trending-tag">
              <FaFire className="trending-icon" />
              <span>Trending</span>
            </div>
          )}
        </div>

        <div className="course-stats">
          <div className="stat-item">
            <div className="stars">{renderStars(course.rating || 0)}</div>
            <span className="rating-value">{course.rating || "0"}/5</span>
          </div>

          <div className="stat-item">
            <FaEye className="stat-icon" />
            <span>{course.enrolledby || "0"} views</span>
          </div>

          <div className="stat-item">
            <FaCheckCircle className="stat-icon" />
            <span>{course.completionRate || "0%"} completion rate</span>
          </div>

          <button className="share-course-btn" onClick={openShareModal}>
            <FaShareAlt />
            Share
          </button>
        </div>

        <div className="detailedcard-upper">
          <img
            src={getCourseImage(course.id)}
            alt={course.name}
            style={{
              width: "400px",
            }}
          />
          <div className="detailcard-mainparagrah">
            <p className="icon-paragraph">{course.description}</p>
            <p className="icon-paragraph">
              <b>Average Duration:</b> {course.duration}
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="detailcard-steps">
          {course.steps.map((step) => {
            const isSimpleButtons =
              step.buttons &&
              Array.isArray(step.buttons) &&
              step.buttons[0]?.content;

            return (
              <div key={step.step} className="column-line">
                <div className="detailcards-line detail-card-margin"></div>

                <div className="detailcard-step">
                  <div>
                    <div className="detailcard-icon">{step.icon}</div>
                  </div>

                  <div className="detailcard-line"></div>

                  <div className="detailcard-rightside">
                    <div className="step-heading">
                      <h2 style={{ fontSize: "20px", margin: 0 }}>
                        {step.heading}
                      </h2>
                    </div>

                    <div className="detailcard-paragraphs">
                      {step.paragraphs?.map((para, index) => (
                        <div key={index} className="detail-paragraph">
                          <p
                            className="icon-paragraph"
                            dangerouslySetInnerHTML={{
                              __html: para.paragraph.replace(/\n/g, "<br/>"),
                            }}
                          ></p>
                        </div>
                      ))}
                    </div>

                    {step.buttons && (
                      <div>
                        {!isSimpleButtons && (
                          <div className="tab-buttons">
                            <div
                              className={`tab-item-course-detail tab-item-course-detail-1 ripple-effect ${
                                !activeTabs[step.step] ||
                                activeTabs[step.step] === "non-paid"
                                  ? "active-tab-course-detail"
                                  : ""
                              }`}
                              onClick={(e) => {
                                handleTabChange(step.step, "non-paid");
                                createRipple(e);
                              }}
                            >
                              Un-Paid
                            </div>
                            <div
                              className={`tab-item-course-detail tab-item-course-detail-2 ripple-effect ${
                                activeTabs[step.step] === "paid"
                                  ? "active-tab-course-detail"
                                  : ""
                              }`}
                              onClick={(e) => {
                                handleTabChange(step.step, "paid");
                                createRipple(e);
                              }}
                            >
                              Paid
                            </div>
                          </div>
                        )}

                        <div className="detail-buttons">
                          {isSimpleButtons
                            ? step.buttons.map((btn, idx) => {
                                const isUpcoming =
                                  btn.content.toLowerCase() === "upcoming";
                                return (
                                  <button
                                    key={idx}
                                    className={`btn hero-button1 detail-button ripple-effect ${
                                      isUpcoming ? "disabled-btn" : ""
                                    }`}
                                    disabled={isUpcoming}
                                    onClick={(e) => {
                                      if (!isUpcoming) {
                                        createRipple(e);
                                        openLink(btn.link);
                                      }
                                    }}
                                  >
                                    {btn.content}
                                  </button>
                                );
                              })
                            : step.buttons.map((buttonObj, index) => {
                                if (
                                  activeTabs[step.step] === "paid" &&
                                  buttonObj.paid
                                ) {
                                  return buttonObj.paid.buttons?.map(
                                    (btn, idx) => {
                                      const isUpcoming =
                                        btn.content.toLowerCase() ===
                                        "upcoming";
                                      return (
                                        <button
                                          key={`${index}-paid-${idx}`}
                                          className={`btn hero-button1 detail-button ripple-effect ${
                                            isUpcoming ? "disabled-btn" : ""
                                          }`}
                                          disabled={isUpcoming}
                                          onClick={(e) => {
                                            if (!isUpcoming) {
                                              createRipple(e);
                                              openLink(btn.link);
                                            }
                                          }}
                                        >
                                          {btn.content}
                                        </button>
                                      );
                                    }
                                  );
                                }
                                if (
                                  (!activeTabs[step.step] ||
                                    activeTabs[step.step] === "non-paid") &&
                                  buttonObj.unpaid
                                ) {
                                  return buttonObj.unpaid.buttons?.map(
                                    (btn, idx) => {
                                      const isUpcoming =
                                        btn.content.toLowerCase() ===
                                        "upcoming";
                                      return (
                                        <button
                                          key={`${index}-unpaid-${idx}`}
                                          className={`btn hero-button1 detail-button ripple-effect ${
                                            isUpcoming ? "disabled-btn" : ""
                                          }`}
                                          disabled={isUpcoming}
                                          onClick={(e) => {
                                            if (!isUpcoming) {
                                              createRipple(e);
                                              openLink(btn.link);
                                            }
                                          }}
                                        >
                                          {btn.content}
                                        </button>
                                      );
                                    }
                                  );
                                }
                                return null;
                              })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="detailcards-line"></div>

        <div className="final-message">
          <p className="upper final-message-upper">Final Message</p>

          {course.finalMessage?.paragraph && (
            <p className="icon-paragraph">{course.finalMessage.paragraph}</p>
          )}

          {course.finalMessage?.lists && (
            <ul className="final-message-list">
              {course.finalMessage.lists.map((point, idx) => (
                <li key={idx} className="icon-paragraph">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="modal-blog">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Share this course</h3>
              <button className="modal-close" onClick={closeShareModal}>
                <FaTimes />
              </button>
            </div>

            <div className="modal-blog-preview">
              <h4 className="modal-blog-title">{course.name}</h4>
              <p className="modal-blog-snippet">
                {course.description.substring(0, 120)}...
              </p>
            </div>

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

export default RoadMapsDetail;
