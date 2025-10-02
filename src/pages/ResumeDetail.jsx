// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { FaThumbsUp, FaThumbsDown, FaEye } from "react-icons/fa";
// import data from "../pages/data/dataresume.json";
// import "./css/ResumeDetail.css";

// const ResumeDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [resume, setResume] = useState(null);
//   const [reactions, setReactions] = useState(() => {
//     const savedReactions = localStorage.getItem("resumeReactions");
//     return savedReactions ? JSON.parse(savedReactions) : {};
//   });

//   // Load resume data
//   useEffect(() => {
//     const foundResume = data.find((resume) => resume.id === parseInt(id));
//     if (foundResume) {
//       // Increment view count when resume is viewed
//       const updatedResume = {
//         ...foundResume,
//         views: (foundResume.views || 0) + 1,
//         likes: foundResume.likes || Math.floor(Math.random() * 100) + 20,
//         dislikes: foundResume.dislikes || Math.floor(Math.random() * 20) + 2,
//       };
//       setResume(updatedResume);
//     }
//   }, [id]);

//   // Save reactions to localStorage
//   useEffect(() => {
//     localStorage.setItem("resumeReactions", JSON.stringify(reactions));
//   }, [reactions]);

//   // Function to determine styling based on filter type
//   const getFilterStyle = (filterType) => {
//     switch (filterType?.toLowerCase()) {
//       case "product based company":
//         return {
//           backgroundColor: "#e6f7ff",
//           color: "#0066cc",
//           border: "2px solid #0066cc",
//         };
//       case "service based company":
//         return {
//           backgroundColor: "#f0f8ff",
//           color: "brown",
//           border: "2px solid brown",
//         };
//       case "startup":
//         return {
//           backgroundColor: "#f5f5f5",
//           color: "#333",
//           border: "2px solid #666",
//         };
//       case "finance":
//         return {
//           backgroundColor: "#fff0f0",
//           color: "#cc0000",
//           border: "2px solid #cc0000",
//         };
//       case "technology":
//         return {
//           backgroundColor: "#f0fff0",
//           color: "#008000",
//           border: "2px solid #008000",
//         };
//       default:
//         return {
//           backgroundColor: "#f8f9fa",
//           color: "#495057",
//           border: "2px solid #6c757d",
//         };
//     }
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

//     // Update the resume's like/dislike counts
//     setResume((prevResume) => {
//       if (!prevResume) return prevResume;

//       const currentReaction = reactions[id];
//       let newLikes = prevResume.likes;
//       let newDislikes = prevResume.dislikes;

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
//         ...prevResume,
//         likes: newLikes,
//         dislikes: newDislikes,
//       };
//     });
//   };

//   const formatNumber = (num) => {
//     if (num >= 1000) {
//       return (num / 1000).toFixed(1) + "k";
//     }
//     return num;
//   };

//   if (!resume) {
//     return <h2>Resume not found</h2>;
//   }

//   const filterStyle = getFilterStyle(resume.resumeFilter);
//   const userReaction = reactions[id];

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
//           onClick={() => navigate("/resources/resumes")}
//         >
//           Back to Resumes &#8592;
//         </button>

//         <h2 className="heading-secondary">{resume.resumeHeading}</h2>

//         {/* Stats Section */}
//         <div
//           className="resume-stats"
//           style={{
//             display: "flex",
//             gap: "20px",
//             alignItems: "center",
//           }}
//         >
//           <div className="stat-item">
//             <FaEye className="stat-icon" />
//             <span>{formatNumber(resume.views || 0)} views</span>
//           </div>

//           <div
//             className="reaction-buttons"
//             style={{ display: "flex", gap: "10px" }}
//           >
//             <button
//               className={`reaction-btn ${
//                 userReaction === "like" ? "active" : ""
//               }`}
//               onClick={() => handleReaction("like")}
//               style={{
//                 background: "rgba(67, 97, 238, 0.1)",
//                 border: "1px solid rgba(67, 97, 238, 0.3)",
//                 borderRadius: "20px",
//                 padding: "8px 15px",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//                 cursor: "pointer",
//                 color: userReaction === "like" ? "#4361ee" : "#666",
//                 transition: "all 0.3s ease",
//                 fontWeight: "500",
//               }}
//             >
//               <FaThumbsUp />
//               <span>{formatNumber(resume.likes || 0)}</span>
//             </button>

//             <button
//               className={`reaction-btn ${
//                 userReaction === "dislike" ? "active" : ""
//               }`}
//               onClick={() => handleReaction("dislike")}
//               style={{
//                 background: "rgba(244, 67, 54, 0.1)",
//                 border: "1px solid rgba(244, 67, 54, 0.3)",
//                 borderRadius: "20px",
//                 padding: "8px 15px",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "8px",
//                 cursor: "pointer",
//                 color: userReaction === "dislike" ? "#F44336" : "#666",
//                 transition: "all 0.3s ease",
//                 fontWeight: "500",
//               }}
//             >
//               <FaThumbsDown />
//               <span>{formatNumber(resume.dislikes || 0)}</span>
//             </button>
//           </div>
//         </div>
//         {/* Display the experience info */}
//         {resume.experience && (
//           <div
//             className="resume-experience-box"
//             style={{
//               marginTop: "15px",
//               padding: "10px 15px",
//               borderRadius: "8px",
//               backgroundColor: "#f9f9f9",
//               border: "1px solid #ddd",
//               fontSize: "1.5rem",
//               fontWeight: "500",
//               color: "#333",
//             }}
//           >
//             <strong style={{ color: "#4361ee" }}>Experience: </strong>
//             {resume.experience}
//           </div>
//         )}

//         {/* Display the filter tag */}
//         {resume.resumeFilter && (
//           <div
//             className="resume-filter-tag"
//             style={{
//               display: "inline-block",
//               padding: "6px 12px",
//               borderRadius: "20px",
//               fontSize: "1.4rem",
//               fontWeight: "600",
//               ...filterStyle,
//             }}
//           >
//             {resume.resumeFilter}
//           </div>
//         )}

//         {/* Display the paragraph here */}
//         {resume.paragraph && (
//           <p
//             className="resume-paragraph"
//             style={{
//               fontSize: "1.7rem",
//               lineHeight: "1.6",
//               color: "#333",
//               marginBottom: "20px",
//               fontStyle: "italic",
//             }}
//           >
//             {resume.paragraph}
//           </p>
//         )}

//         <div className="detailcards-line"></div>

//         {/* Displaying both resume images */}
//         <div className="resume-images-container">
//           <img
//             src={resume.imageLink1}
//             alt={resume.resumeHeading}
//             className=""
//             style={{
//               width: "100%",
//               height: "auto",
//               border: "solid 4px #007bff",
//               borderRadius: "2px",
//               marginBottom: "20px",
//             }}
//           />
//           <img
//             src={resume.imageLink2}
//             alt={resume.resumeHeading}
//             className=""
//             style={{
//               width: "100%",
//               height: "auto",
//               border: "solid 4px #007bff",
//               borderRadius: "2px",
//             }}
//           />
//         </div>
//         <div className="detailcards-line"></div>

//         {/* Displaying all resume details */}
//         <ul className="resumedetail-ul-li-i">
//           {resume.resumePoints.map((point, i) => (
//             <li key={i}>{point}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ResumeDetail;

/* diavle */

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { FaThumbsUp, FaThumbsDown, FaEye } from "react-icons/fa";
import { FaEye } from "react-icons/fa"; // Only importing FaEye since like/dislike icons are commented out
import "./css/ResumeDetail.css";

const ResumeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resume, setResume] = useState(null);

  const data = [
    {
      id: 1,
      resumeFilter: "Product Based Company",
      likes: 143,
      dislikes: 3,
      experienceLevel: "Fresher",
      userReaction: null,
      views: "2000",
      imageLink1: "Resumes/1.1.webp",
      imageLink2: "Resumes/1.2.webp",
      resumeHeading: "Resume That Helped Land a Job at Paytm",
      paragraph:
        "This ATS-optimized resume showcases a strong profile in AI/ML and backend development. It highlights a Computer Science degree and key projects in fraud detection and scalable systems. The format is clean and structured, perfectly tailored for fintech and top tech company applications.",
      resumePoints: [
        "✅ This is the resume of a candidate who completed B.Tech in Computer Science Engineering from Amity University with a CGPA of 9.2.",
        "✅ He successfully secured a Software Engineer position at Paytm, specializing in scalable systems, AI-powered analytics, and cloud-native applications.",
        "✅ His resume achieved an ATS score of 74, making it highly optimized for job applications.",
        "✅ Designed to pass through Applicant Tracking Systems (ATS) used by top tech companies like Paytm and other leading firms.",
        "✅ Follows a structured, professional format with a strong emphasis on AI/ML, backend development, and DevOps.",
        "✅ A perfect reference resume to understand what works in AI, cloud computing, and fintech job applications.",
        "✅ Includes extensive project experience in AI-powered fraud detection, chatbots, and scalable payment systems.",
        "✅ An ideal reference resume to craft your own winning application in AI, software engineering, and fintech domains.",
      ],
    },
    {
      id: 2,
      views: "400",

      resumeFilter: "Service Based Company",
      experienceLevel: "Fresher",
      imageLink1: "Resumes/2.1.webp",
      imageLink2: "Resumes/2.2.webp",
      resumeHeading: "Resume That Helped Land a Job at Adobe",
      paragraph:
        "This resume effectively demonstrates expertise in front-end technologies and UI/UX design. It features a strong academic record from a premier institute and impactful projects in web applications. Its high ATS score makes it a great template for securing roles in product-based companies.",
      resumePoints: [
        "✅ This is the resume of a candidate who completed B.Tech in Computer Science Engineering from IIT Ropar with a CGPA of 9.1.",
        "✅ He successfully secured a Software Engineer position at Adobe, specializing in UI/UX development and JavaScript frameworks.",
        "✅ His resume achieved an ATS score of 78, making it highly optimized for job applications.",
        "✅ Designed to pass through Applicant Tracking Systems (ATS) used by top tech companies like Adobe and other leading firms.",
        "✅ Follows a structured, professional format with a strong emphasis on front-end development, UI/UX, and scalable web applications.",
        "✅ A perfect reference resume to understand what works in UI/UX design, web technologies, and open-source contributions.",
        "✅ Includes extensive project experience in accessible UI component libraries, real-time analytics dashboards, and high-performance web applications.",
        "✅ An ideal reference resume to craft your own winning application in UI/UX, front-end development, and design engineering.",
      ],
    },
    {
      id: 3,
      views: "1500",

      resumeFilter: "Service Based Company",
      experienceLevel: "Fresher",
      imageLink1: "Resumes/3.1.webp",
      imageLink2: "Resumes/3.2.webp",
      resumeHeading: "Resume That Helped Land a Job at Cisco",
      paragraph:
        "Focused on networking and security, this resume is ideal for roles in infrastructure and cloud computing. It highlights a strong foundation from a top NIT and relevant projects in network security. The professional layout is designed to appeal to core networking and IT giants.",
      resumePoints: [
        "✅ This is the resume of a candidate who completed B.Tech in Computer Science Engineering from NIT Odisha with a CGPA of 9.2.",
        "✅ He successfully secured a Software Engineer position at Cisco, specializing in network security, cloud computing, and software-defined networking.",
        "✅ His resume achieved an ATS score of 67, making it highly optimized for job applications.",
        "✅ Designed to pass through Applicant Tracking Systems (ATS) used by top tech companies like Cisco and other leading firms.",
        "✅ Follows a structured, professional format with a strong emphasis on networking technologies, cybersecurity, and cloud infrastructure.",
        "✅ A perfect reference resume to understand what works in network security, cloud-native networking, and SDN automation.",
        "✅ Includes extensive project experience in AI-powered network security systems, IoT-based smart traffic management, and cloud-based networking solutions.",
        "✅ An ideal reference resume to craft your own winning application in networking, cybersecurity, and cloud computing domains.",
      ],
    },
    {
      id: 4,
      views: "1100",

      resumeFilter: "Product Based Company",
      experienceLevel: "Fresher",
      imageLink1: "Resumes/4.1.webp",
      imageLink2: "Resumes/4.2.webp",
      resumeHeading: "Resume That Helped Land a Job at Salesforce",
      paragraph:
        "This resume exemplifies excellence in cloud computing and full-stack enterprise development. With a stellar academic record from IIT, it showcases projects in CRM and API development. It's a benchmark for anyone targeting roles in SaaS and cloud-based solution companies.",
      resumePoints: [
        "✅ This is the resume of a candidate who completed B.Tech in Computer Science Engineering from IIT Delhi with a CGPA of 9.4.",
        "✅ He successfully secured a Software Engineer position at Salesforce, specializing in cloud computing, full-stack development, and scalable enterprise applications.",
        "✅ His resume achieved an ATS score of 78, making it highly optimized for job applications.",
        "✅ Designed to pass through Applicant Tracking Systems (ATS) used by top tech companies like Salesforce and other leading firms.",
        "✅ Follows a structured, professional format with a strong emphasis on backend development, cloud architecture, and system design.",
        "✅ A perfect reference resume to understand what works in cloud-based enterprise applications, API development, and microservices.",
        "✅ Includes extensive project experience in AI-powered market analysis, automated CRM dashboards, and enterprise event management platforms.",
        "✅ An ideal reference resume to craft your own winning application in cloud computing, full-stack development, and system architecture.",
      ],
    },
    {
      id: 5,
      views: "2100",

      resumeFilter: "Product Based Company",
      experienceLevel: "Fresher",
      imageLink1: "Resumes/5.1.webp",
      imageLink2: "Resumes/5.2.webp",
      resumeHeading: "Resume That Helped Land a Job at Flipkart",
      paragraph:
        "This resume is a prime example for backend and cloud engineering aspirants. It highlights tangible achievements like optimizing APIs and reducing deployment time. With a high ATS score, it's perfectly structured for e-commerce and fast-paced tech environments.",
      resumePoints: [
        "✅ This is the resume of a candidate who completed B.Tech in Computer Science from Vellore Institute of Technology (VIT) with a CGPA of 9.1.",
        "✅ She secured a Software Engineer internship at Flipkart, where she optimized high-throughput APIs and reduced deployment time by 50%.",
        "✅ Her resume achieved an ATS score of 80, making it highly optimized for job applications.",
        "✅ Designed to pass through Applicant Tracking Systems (ATS) used by top tech companies like Flipkart, Walmart, and other leading firms.",
        "✅ Highlights strong backend development skills with expertise in microservices, REST APIs, and scalable distributed systems.",
        "✅ A great reference resume for backend development, cloud computing, and system optimization roles.",
        "✅ Includes project experience in AI-powered debugging tools, scalable e-commerce platforms, and AI-driven inventory management systems.",
        "✅ An ideal reference resume to craft your own winning application for high-performance backend and cloud engineering roles.",
      ],
    },
    {
      id: 6,
      views: "700",

      resumeFilter: "Product Based Company",
      experienceLevel: "Fresher",
      imageLink1: "Resumes/6.1.webp",
      imageLink2: "Resumes/6.2.webp",
      resumeHeading: "Resume That Helped Land a Job at NVIDIA",
      paragraph:
        "Tailored for high-performance computing, this resume showcases deep expertise in GPU programming and AI acceleration. It features projects in ray tracing and AI simulations, making it ideal for research and development roles in cutting-edge tech companies.",
      resumePoints: [
        "✅ This is the resume of a candidate who completed B.Tech in Computer Science from Thapar Institute of Engineering and Technology (TIET) with a CGPA of 9.2.",
        "✅ He secured a Software Engineer position at NVIDIA, demonstrating expertise in GPU programming, AI acceleration, and parallel computing.",
        "✅ His resume achieved an ATS score of 82, making it highly optimized for job applications in AI, deep learning, and high-performance computing.",
        "✅ Designed to pass through Applicant Tracking Systems (ATS) used by top tech companies like NVIDIA, Google, and other leading firms.",
        "✅ Highlights strong skills in CUDA, OpenGL, deep learning model optimization, and AI-driven rendering techniques.",
        "✅ A great reference resume for roles in GPU programming, AI research, and high-performance computing.",
        "✅ Includes project experience in AI-powered super-resolution, real-time ray tracing, physics-based AI simulations, and GPU-accelerated computing.",
        "✅ An ideal reference resume to craft your own winning application for AI, deep learning, and GPU computing roles.",
      ],
    },
    {
      id: 7,
      views: "470",

      resumeFilter: "Service Based Company",
      experienceLevel: "Fresher",
      imageLink1: "Resumes/7.1.webp",
      imageLink2: "Resumes/7.2.webp",
      resumeHeading: "Resume That Helped Land a Job at Wipro",
      paragraph:
        "This resume is a solid reference for backend development and automation roles in IT services. It demonstrates practical skills in Java, Spring Boot, and cloud integration. It's well-structured for candidates targeting established tech consulting firms.",
      resumePoints: [
        "✅ This is the resume of a Software Analyst at Wipro with expertise in backend development and automation.",
        "✅ He completed B.Tech in Computer Science from Shri Govindram Seksaria Institute of Technology and Science (SGSITS) with a CGPA of 8.9.",
        "✅ His resume achieved an ATS score of 64, making it highly optimized for job applications in backend development and system optimization.",
        "✅ Designed to pass through Applicant Tracking Systems (ATS) used by top tech companies like Wipro, Tech Mahindra, and other leading firms.",
        "✅ Highlights strong skills in Java, Spring Boot, SQL, API development, cloud computing, and automation.",
        "✅ A great reference resume for roles in software analysis, backend engineering, and enterprise application development.",
        "✅ Includes project experience in smart fleet management, AI-powered task management, and personal finance tracking.",
        "✅ An ideal reference resume to craft your own winning application for software development, cloud integration, and backend engineering roles.",
      ],
    },
    {
      id: 8,
      views: "420",

      resumeFilter: "Product Based Company",
      experienceLevel: "Fresher",
      imageLink1: "Resumes/8.1.webp",
      imageLink2: "Resumes/8.2.webp",
      resumeHeading: "Resume That Helped Land a Job at Morgan Stanley",
      paragraph:
        "This resume is expertly crafted for the fintech and quantitative finance sector. It highlights proficiency in Java, C++, and financial algorithms. The projects in market analytics and risk prediction are highly relevant for top investment banks and financial institutions.",
      resumePoints: [
        "✅ This is the resume of a Software Engineer at Morgan Stanley specializing in financial technology and distributed systems.",
        "✅ He completed B.Tech in Computer Science from Vellore Institute of Technology (VIT) with a CGPA of 9.1.",
        "✅ His resume achieved an ATS score of 71, making it highly optimized for roles in financial software engineering and trading systems.",
        "✅ Designed to pass through Applicant Tracking Systems (ATS) used by top financial firms like Morgan Stanley and FICO.",
        "✅ Highlights strong skills in Java, C++, SQL, financial technologies, and algorithmic trading.",
        "✅ A great reference resume for roles in financial technology, algorithmic trading, and risk management software development.",
        "✅ Includes project experience in real-time market analytics, credit risk prediction, and automated trading bots.",
        "✅ An ideal reference resume to craft your own winning application for fintech, quantitative development, and trading system engineering roles.",
      ],
    },
    {
      id: 9,
      views: "1300",

      resumeFilter: "Service Based Company",
      experienceLevel: "Fresher",
      imageLink1: "Resumes/9.1.webp",
      imageLink2: "Resumes/9.2.webp",
      resumeHeading: "Resume That Helped Land a Job at TCS",
      paragraph:
        "A strong all-rounder resume for software engineering roles in major IT consultancies. It demonstrates balanced skills in full-stack development, system design, and problem-solving. Its high ATS score confirms its effectiveness for large-scale IT recruitment processes.",
      resumePoints: [
        "✅ This is the resume of a Software Engineer at TCS Prime with expertise in Java, C++, and Web Development.",
        "✅ He completed B.Tech in Computer Science from Delhi Technological University (DTU) with a CGPA of 8.7.",
        "✅ His resume achieved an ATS score of 77, making it highly optimized for software engineering and backend development roles.",
        "✅ Designed to pass through Applicant Tracking Systems (ATS) used by major IT companies like TCS.",
        "✅ Highlights strong skills in full-stack development, system design, and problem-solving.",
        "✅ A great reference resume for roles in software engineering, web development, and scalable application design.",
        "✅ Includes project experience in bug tracking systems, task management apps, and university social platforms.",
        "✅ An ideal reference resume to craft your own winning application for TCS, IT consultancies, and full-stack developer roles.",
      ],
    },
    {
      id: 10,
      views: "1900",

      resumeFilter: "Product Based Company",
      experienceLevel: "Fresher",
      imageLink1: "Resumes/11.1.webp",
      imageLink2: "Resumes/11.2.webp",
      resumeHeading: "Resume That Helped Land a Job at Google",
      paragraph:
        "This resume is a benchmark for top-tier tech companies, boasting an exceptional ATS score. It highlights a strong foundation in algorithms, system design, and open-source contributions. The projects demonstrate an ability to handle scalable, full-stack applications effectively.",
      resumePoints: [
        "✅ This is the resume of a Software Engineer at Google with expertise in Data Structures, Algorithms, and System Design.",
        "✅ He completed B.Tech in Computer Science from Netaji Subhas University of Technology (NSUT) with a CGPA of 9.3.",
        "✅ His resume achieved an ATS score of 84, making it highly optimized for software engineering and backend development roles.",
        "✅ Designed to pass through Applicant Tracking Systems (ATS) used by top-tier tech companies like Google and Adobe.",
        "✅ Highlights strong skills in full-stack development, cloud computing, scalable system design, and open-source contributions.",
        "✅ A great reference resume for roles in software engineering, cloud solutions architecture, and large-scale system design.",
        "✅ Includes project experience in e-commerce mobile apps, open-source development, and Java-based productivity software.",
        "✅ An ideal reference resume to craft your own winning application for Google, Adobe, and other top tech companies.",
      ],
    },
  ];
  // COMMENTED OUT: Like/Dislike reactions state management
  // const [reactions, setReactions] = useState(() => {
  //   const savedReactions = localStorage.getItem("resumeReactions");
  //   return savedReactions ? JSON.parse(savedReactions) : {};
  // });

  // Load resume data
  useEffect(() => {
    const foundResume = data.find((resume) => resume.id === parseInt(id));
    if (foundResume) {
      // Increment view count when resume is viewed
      const updatedResume = {
        ...foundResume,
        views: foundResume.views || 0,
        // COMMENTED OUT: Random like/dislike generation
        // likes: foundResume.likes || Math.floor(Math.random() * 100) + 20,
        // dislikes: foundResume.dislikes || Math.floor(Math.random() * 20) + 2,
      };
      setResume(updatedResume);
    }
  }, [id]);

  // COMMENTED OUT: Save reactions to localStorage
  // useEffect(() => {
  //   localStorage.setItem("resumeReactions", JSON.stringify(reactions));
  // }, [reactions]);

  // Function to determine styling based on filter type
  const getFilterStyle = (filterType) => {
    switch (filterType?.toLowerCase()) {
      case "product based company":
        return {
          backgroundColor: "#e6f7ff",
          color: "#0066cc",
          border: "2px solid #0066cc",
        };
      case "service based company":
        return {
          backgroundColor: "#f0f8ff",
          color: "brown",
          border: "2px solid brown",
        };
      case "startup":
        return {
          backgroundColor: "#f5f5f5",
          color: "#333",
          border: "2px solid #666",
        };
      case "finance":
        return {
          backgroundColor: "#fff0f0",
          color: "#cc0000",
          border: "2px solid #cc0000",
        };
      case "technology":
        return {
          backgroundColor: "#f0fff0",
          color: "#008000",
          border: "2px solid #008000",
        };
      default:
        return {
          backgroundColor: "#f8f9fa",
          color: "#495057",
          border: "2px solid #6c757d",
        };
    }
  };

  // COMMENTED OUT: Like/Dislike reaction handler
  // const handleReaction = (reactionType) => {
  //   setReactions((prev) => {
  //     const currentReaction = prev[id];

  //     // If clicking the same reaction again, remove it
  //     if (currentReaction === reactionType) {
  //       const newReactions = { ...prev };
  //       delete newReactions[id];
  //       return newReactions;
  //     }

  //     // Otherwise, set the new reaction
  //     return {
  //       ...prev,
  //       [id]: reactionType,
  //     };
  //   });

  //   // Update the resume's like/dislike counts
  //   setResume((prevResume) => {
  //     if (!prevResume) return prevResume;

  //     const currentReaction = reactions[id];
  //     let newLikes = prevResume.likes;
  //     let newDislikes = prevResume.dislikes;

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

  //     return {
  //       ...prevResume,
  //       likes: newLikes,
  //       dislikes: newDislikes,
  //     };
  //   });
  // };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num;
  };

  if (!resume) {
    return <h2>Resume not found</h2>;
  }

  const filterStyle = getFilterStyle(resume.resumeFilter);
  // COMMENTED OUT: User reaction tracking
  // const userReaction = reactions[id];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="detailcard-container" style={{ maxWidth: "1400px" }}>
        <button
          className="rater-button self"
          onClick={() => navigate("/resources/resumes")}
        >
          Back to Resumes &#8592;
        </button>

        <h2 className="heading-secondary">{resume.resumeHeading}</h2>

        {/* Stats Section */}
        <div
          className="resume-stats"
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <div className="stat-item">
            <FaEye className="stat-icon" />
            <span>{formatNumber(resume.views || 0)} views</span>
          </div>

          {/* COMMENTED OUT: Like/Dislike buttons section */}
          {/* <div
            className="reaction-buttons"
            style={{ display: "flex", gap: "10px" }}
          >
            <button
              className={`reaction-btn ${
                userReaction === "like" ? "active" : ""
              }`}
              onClick={() => handleReaction("like")}
              style={{
                background: "rgba(67, 97, 238, 0.1)",
                border: "1px solid rgba(67, 97, 238, 0.3)",
                borderRadius: "20px",
                padding: "8px 15px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                color: userReaction === "like" ? "#4361ee" : "#666",
                transition: "all 0.3s ease",
                fontWeight: "500",
              }}
            >
              <FaThumbsUp />
              <span>{formatNumber(resume.likes || 0)}</span>
            </button>

            <button
              className={`reaction-btn ${
                userReaction === "dislike" ? "active" : ""
              }`}
              onClick={() => handleReaction("dislike")}
              style={{
                background: "rgba(244, 67, 54, 0.1)",
                border: "1px solid rgba(244, 67, 54, 0.3)",
                borderRadius: "20px",
                padding: "8px 15px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                color: userReaction === "dislike" ? "#F44336" : "#666",
                transition: "all 0.3s ease",
                fontWeight: "500",
              }}
            >
              <FaThumbsDown />
              <span>{formatNumber(resume.dislikes || 0)}</span>
            </button>
          </div> */}
        </div>

        {/* Display the experience info */}
        {resume.experience && (
          <div
            className="resume-experience-box"
            style={{
              marginTop: "15px",
              padding: "10px 15px",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              border: "1px solid #ddd",
              fontSize: "1.5rem",
              fontWeight: "500",
              color: "#333",
            }}
          >
            <strong style={{ color: "#4361ee" }}>Experience: </strong>
            {resume.experience}
          </div>
        )}

        {/* Display the filter tag */}
        {resume.resumeFilter && (
          <div
            className="resume-filter-tag"
            style={{
              display: "inline-block",
              padding: "6px 12px",
              borderRadius: "20px",
              fontSize: "1.4rem",
              fontWeight: "600",
              ...filterStyle,
            }}
          >
            {resume.resumeFilter}
          </div>
        )}

        {/* Display the paragraph here */}
        {resume.paragraph && (
          <p
            className="resume-paragraph"
            style={{
              fontSize: "1.7rem",
              lineHeight: "1.6",
              color: "#333",
              marginBottom: "20px",
              fontStyle: "italic",
            }}
          >
            {resume.paragraph}
          </p>
        )}

        <div className="detailcards-line"></div>

        {/* Displaying both resume images */}
        <div className="resume-images-container">
          <img
            src={`/${resume.imageLink1}`}
            alt={resume.resumeHeading}
            className=""
            style={{
              width: "100%",
              height: "auto",
              border: "solid 4px #007bff",
              borderRadius: "2px",
              marginBottom: "20px",
            }}
            onError={(e) => {
              console.error(`Failed to load image: /${resume.imageLink1}`);
              e.target.style.display = "none";
            }}
          />
          <img
            src={`/${resume.imageLink2}`}
            alt={resume.resumeHeading}
            className=""
            style={{
              width: "100%",
              height: "auto",
              border: "solid 4px #007bff",
              borderRadius: "2px",
            }}
            onError={(e) => {
              console.error(`Failed to load image: /${resume.imageLink2}`);
              e.target.style.display = "none";
            }}
          />
        </div>
        <div className="detailcards-line"></div>

        {/* Displaying all resume details */}
        <ul className="resumedetail-ul-li-i">
          {resume.resumePoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResumeDetail;
