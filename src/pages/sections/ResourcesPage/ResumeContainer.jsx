// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "../../css/ResumeContainer.css"; // Ensure this file is linked
// // import resumeTemplate from "../../../assests/Resume/Faang.webp";
// // import data from "../../data/dataresume.json"; // Import data

// // const ResumeContainer = () => {
// //   const [modalData, setModalData] = useState({ isOpen: false, image: null });
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [activeFilter, setActiveFilter] = useState("All");
// //   const [experienceFilter, setExperienceFilter] = useState("All");
// //   const [filteredData, setFilteredData] = useState(data);
// //   const resumesPerPage = 5;
// //   const navigate = useNavigate();

// //   //colours
// //   // Function to determine styling based on filter type
// //   const getFilterStyle = (filterType) => {
// //     switch (filterType?.toLowerCase()) {
// //       case "product based company":
// //         return {
// //           backgroundColor: "#e6f7ff",
// //           color: "#0066cc",
// //           border: "2px solid #0066cc",
// //         };
// //       case "service based company":
// //         return {
// //           backgroundColor: "#f0f8ff",
// //           color: "brown",
// //           border: "2px solid brown",
// //         };
// //       case "startup":
// //         return {
// //           backgroundColor: "#f5f5f5",
// //           color: "orange",
// //           border: "2px solid orange",
// //         };
// //       case "finance":
// //         return {
// //           backgroundColor: "#fff0f0",
// //           color: "#cc0000",
// //           border: "2px solid #cc0000",
// //         };
// //       case "technology":
// //         return {
// //           backgroundColor: "#f0fff0",
// //           color: "#008000",
// //           border: "2px solid #008000",
// //         };
// //       default:
// //         return {
// //           backgroundColor: "#f8f9fa",
// //           color: "#495057",
// //           border: "2px solid #6c757d",
// //         };
// //     }
// //   };

// //   // Get all unique filter values from the data
// //   const filterOptions = [
// //     "All",
// //     ...new Set(data.map((resume) => resume.resumeFilter || "Other")),
// //   ];

// //   // Get all unique experience values from the data
// //   const experienceOptions = [
// //     "All",
// //     ...new Set(data.map((resume) => resume.experienceLevel || "Fresher")),
// //   ];

// //   // Function to handle modal open/close
// //   const handleCustomModal = (image = null) => {
// //     setModalData({ isOpen: !!image, image });

// //     if (image) {
// //       document.body.style.overflow = "hidden"; // Disable background scrolling
// //     } else {
// //       document.body.style.overflow = "auto"; // Enable background scrolling
// //     }
// //   };

// //   // Filter resumes based on selected filters
// //   const applyFilters = () => {
// //     let result = data;

// //     // Apply company type filter
// //     if (activeFilter !== "All") {
// //       result = result.filter((resume) => resume.resumeFilter === activeFilter);
// //     }

// //     // Apply experience level filter
// //     if (experienceFilter !== "All") {
// //       result = result.filter(
// //         (resume) => resume.experienceLevel === experienceFilter
// //       );
// //     }

// //     setFilteredData(result);
// //     setCurrentPage(1); // Reset to first page when filters change
// //   };

// //   // Handle company type filter change
// //   const handleFilterChange = (filter) => {
// //     setActiveFilter(filter);
// //   };

// //   // Handle experience level filter change
// //   const handleExperienceFilterChange = (filter) => {
// //     setExperienceFilter(filter);
// //   };

// //   // Apply filters when either filter changes
// //   useEffect(() => {
// //     applyFilters();
// //   }, [activeFilter, experienceFilter]);

// //   // Pagination logic
// //   const totalPages = Math.ceil(filteredData.length / resumesPerPage);
// //   const indexOfLastResume = currentPage * resumesPerPage;
// //   const indexOfFirstResume = indexOfLastResume - resumesPerPage;
// //   const currentResumes = filteredData.slice(
// //     indexOfFirstResume,
// //     indexOfLastResume
// //   );

// //   // Scroll to top when currentPage changes
// //   useEffect(() => {
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   }, [currentPage]); // Runs every time currentPage updates

// //   // Handle pagination click
// //   const handlePageChange = (newPage) => {
// //     if (newPage !== currentPage) {
// //       setCurrentPage(newPage);
// //     }
// //   };

// //   return (
// //     <>
// //       <section className="resume-section">
// //         <div className="resume-upper-section">
// //           {/* Resume Template Section */}
// //           <div className="resume-template">
// //             <img
// //               src={resumeTemplate}
// //               alt="Resume Template"
// //               className="resume-image"
// //               // onClick={() => handleCustomModal(resumeTemplate)}
// //             />
// //             <div className="resume-content">
// //               <h2 className="marginbottom">
// //                 Build Your ATS-Friendly Resume for Free
// //               </h2>
// //               <ul>
// //                 <li>
// //                   1. This template is ATS-friendly and designed to help you get
// //                   hired.
// //                 </li>
// //                 <li>2. It is completely free—no hidden charges!</li>
// //                 <li>
// //                   3. Comes in a professional format tailored for different job
// //                   roles.
// //                 </li>
// //                 <li>
// //                   4. Easy to customize with your details and download instantly.
// //                 </li>
// //                 <li>
// //                   5. Optimized to pass Applicant Tracking Systems (ATS)
// //                   efficiently.
// //                 </li>
// //               </ul>
// //               <div className="resume-btn">
// //                 <button
// //                   className="btn hero-button1"
// //                   onClick={() =>
// //                     window.open(
// //                       "https://www.overleaf.com/gallery/tagged/cv",
// //                       "_blank"
// //                     )
// //                   }
// //                 >
// //                   Create Resume
// //                 </button>
// //                 <button
// //                   className="btn hero-button2"
// //                   onClick={() =>
// //                     window.open(
// //                       "https://www.overleaf.com/gallery/tagged/cv",
// //                       "_blank"
// //                     )
// //                   }
// //                 >
// //                   Check Your ATS Score
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <h2
// //           className="heading-secondary reference"
// //           style={{ marginBottom: "35px", textDecoration: "underline" }}
// //         >
// //           These are some resumes for your reference
// //         </h2>

// //         {/* Filter Section */}
// //         <div className="filter-resume-section">
// //           <h3 className="filter-resume-title">Filter Resumes:</h3>

// //           {/* Company Type Filter */}
// //           <div className="filter-resume-dropdown">
// //             <label htmlFor="company-type-filter">Company Type:</label>
// //             <select
// //               id="company-type-filter"
// //               value={activeFilter}
// //               onChange={(e) => handleFilterChange(e.target.value)}
// //               className="filter-resume-select"
// //             >
// //               {filterOptions.map((filter) => (
// //                 <option key={filter} value={filter}>
// //                   {filter}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>

// //           {/* Experience Level Filter */}
// //           <div className="filter-resume-dropdown">
// //             <label htmlFor="experience-filter">Experience Level:</label>
// //             <select
// //               id="experience-filter"
// //               value={experienceFilter}
// //               onChange={(e) => handleExperienceFilterChange(e.target.value)}
// //               className="filter-resume-select"
// //             >
// //               {experienceOptions.map((option) => (
// //                 <option key={option} value={option}>
// //                   {option}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>
// //         </div>

// //         <p
// //           className="paragraph-primary center"
// //           style={{ margin: "0", marginBottom: "20px" }}
// //         >
// //           These are the AI tools you can use in your degree to make your work
// //           simpler{" "}
// //           <span
// //             style={{
// //               color: "blue",
// //               cursor: "pointer",
// //               textDecoration: "underline",
// //             }}
// //             onClick={() => navigate("/resources/resumes/resumes-explanation")}
// //           >
// //             Read More
// //           </span>
// //           .
// //         </p>

// //         {/* Reference Resumes with Pagination */}
// //         <div
// //           className="resume-upper-section reference-resume-container"
// //           style={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
// //         >
// //           {currentResumes.length > 0 ? (
// //             currentResumes.map((resume, index) => (
// //               <React.Fragment key={resume.id}>
// //                 <div className="resume-template">
// //                   <img
// //                     src={resume.imageLink1}
// //                     alt="Resume Template"
// //                     className="resume-image"
// //                     onClick={() =>
// //                       window.open(`/resources/resumes/${resume.id}`, "_blank")
// //                     }
// //                   />
// //                   <div className="resume-content">
// //                     <h2 className="marginbottom">{resume.resumeHeading}</h2>

// //                     {/* Display company type tag */}
// //                     {resume.resumeFilter && (
// //                       <span
// //                         className="resume-filter-tag"
// //                         style={{
// //                           display: "inline-block",
// //                           padding: "4px 10px",
// //                           borderRadius: "15px",
// //                           fontSize: "1.2rem",
// //                           fontWeight: "600",
// //                           marginBottom: "10px",
// //                           marginRight: "10px",
// //                           ...getFilterStyle(resume.resumeFilter),
// //                         }}
// //                       >
// //                         {resume.resumeFilter}
// //                       </span>
// //                     )}

// //                     {/* Display experience level tag */}
// //                     {resume.experienceLevel && (
// //                       <span
// //                         className="experience-filter-tag"
// //                         style={{
// //                           display: "inline-block",
// //                           padding: "4px 10px",
// //                           borderRadius: "15px",
// //                           fontSize: "1.2rem",
// //                           fontWeight: "600",
// //                           marginBottom: "10px",
// //                           backgroundColor: "#f0f0f0",
// //                           color: "#333",
// //                           border: "2px solid #ccc",
// //                         }}
// //                       >
// //                         {resume.experienceLevel}
// //                       </span>
// //                     )}

// //                     <ul className="singleresume">
// //                       {resume.resumePoints.slice(0, 5).map((point, i) => (
// //                         <li key={i}>{point}</li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 </div>
// //                 {index !== currentResumes.length - 1 && (
// //                   <div className="reference-line"></div>
// //                 )}
// //               </React.Fragment>
// //             ))
// //           ) : (
// //             <div className="no-results">
// //               <h3>No resumes found for the selected filters</h3>
// //               <p>
// //                 Try selecting different filters or check back later for more
// //                 resumes.
// //               </p>
// //             </div>
// //           )}
// //         </div>

// //         {/* Pagination Controls - Only show if there are resumes */}
// //         {filteredData.length > 0 && (
// //           <div className="pagination-controls">
// //             <button
// //               onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
// //               disabled={currentPage === 1}
// //             >
// //               «
// //             </button>
// //             <span>
// //               {currentPage} of {totalPages}
// //             </span>
// //             <button
// //               onClick={() =>
// //                 handlePageChange(Math.min(currentPage + 1, totalPages))
// //               }
// //               disabled={currentPage === totalPages}
// //             >
// //               »
// //             </button>
// //           </div>
// //         )}

// //         {/* Modal for Viewing Resumes */}
// //         {modalData.isOpen && (
// //           <div
// //             className="custom-modal-overlay"
// //             onClick={() => handleCustomModal()}
// //           >
// //             <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
// //               <span
// //                 className="custom-close-modal"
// //                 onClick={() => handleCustomModal()}
// //               >
// //                 &times;
// //               </span>
// //               <img
// //                 src={modalData.image}
// //                 alt="Resume Template"
// //                 className="custom-modal-image"
// //               />
// //             </div>
// //           </div>
// //         )}
// //       </section>
// //     </>
// //   );
// // };

// // export default ResumeContainer;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../css/ResumeContainer.css"; // Ensure this file is linked
// import resumeTemplate from "../../../assests/Resume/Faang.webp";
// import data from "../../data/dataresume.json"; // Import data

// const   ResumeContainer = () => {
//   const [modalData, setModalData] = useState({ isOpen: false, image: null });
//   const [currentPage, setCurrentPage] = useState(1);
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [experienceFilter, setExperienceFilter] = useState("All");
//   const [filteredData, setFilteredData] = useState(data);
//   const resumesPerPage = 5;
//   const navigate = useNavigate();

//   //colours
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
//           color: "orange",
//           border: "2px solid orange",
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

//   // Function to determine styling based on experience level
//   const getExperienceStyle = (experienceLevel) => {
//     switch (experienceLevel?.toLowerCase()) {
//       case "fresher":
//         return {
//           backgroundColor: "#e8f5e9",
//           color: "#2e7d32",
//           border: "2px solid #2e7d32",
//         };
//       case "intermediate":
//         return {
//           backgroundColor: "#fff3e0",
//           color: "#ef6c00",
//           border: "2px solid #ef6c00",
//         };
//       case "experienced":
//         return {
//           backgroundColor: "#e3f2fd",
//           color: "#1565c0",
//           border: "2px solid #1565c0",
//         };
//       case "senior":
//         return {
//           backgroundColor: "#f3e5f5",
//           color: "#7b1fa2",
//           border: "2px solid #7b1fa2",
//         };
//       default:
//         return {
//           backgroundColor: "#f5f5f5",
//           color: "#757575",
//           border: "2px solid #9e9e9e",
//         };
//     }
//   };

//   // Get all unique filter values from the data
//   const filterOptions = [
//     "All",
//     ...new Set(data.map((resume) => resume.resumeFilter || "Other")),
//   ];

//   // Get all unique experience values from the data
//   const experienceOptions = [
//     "All",
//     ...new Set(data.map((resume) => resume.experienceLevel || "Fresher")),
//   ];

//   // Function to handle modal open/close
//   const handleCustomModal = (image = null) => {
//     setModalData({ isOpen: !!image, image });

//     if (image) {
//       document.body.style.overflow = "hidden"; // Disable background scrolling
//     } else {
//       document.body.style.overflow = "auto"; // Enable background scrolling
//     }
//   };

//   // Filter resumes based on selected filters
//   const applyFilters = () => {
//     let result = data;

//     // Apply company type filter
//     if (activeFilter !== "All") {
//       result = result.filter((resume) => resume.resumeFilter === activeFilter);
//     }

//     // Apply experience level filter
//     if (experienceFilter !== "All") {
//       result = result.filter(
//         (resume) => resume.experienceLevel === experienceFilter
//       );
//     }

//     setFilteredData(result);
//     setCurrentPage(1); // Reset to first page when filters change
//   };

//   // Handle company type filter change
//   const handleFilterChange = (filter) => {
//     setActiveFilter(filter);
//   };

//   // Handle experience level filter change
//   const handleExperienceFilterChange = (filter) => {
//     setExperienceFilter(filter);
//   };

//   // Apply filters when either filter changes
//   useEffect(() => {
//     applyFilters();
//   }, [activeFilter, experienceFilter]);

//   // Pagination logic
//   const totalPages = Math.ceil(filteredData.length / resumesPerPage);
//   const indexOfLastResume = currentPage * resumesPerPage;
//   const indexOfFirstResume = indexOfLastResume - resumesPerPage;
//   const currentResumes = filteredData.slice(
//     indexOfFirstResume,
//     indexOfLastResume
//   );

//   // Scroll to top when currentPage changes
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [currentPage]); // Runs every time currentPage updates

//   // Handle pagination click
//   const handlePageChange = (newPage) => {
//     if (newPage !== currentPage) {
//       setCurrentPage(newPage);
//     }
//   };

//   return (
//     <>
//       <section className="resume-section">
//         <div className="resume-upper-section">
//           {/* Resume Template Section */}
//           <div className="resume-template">
//             <img
//               src={resumeTemplate}
//               alt="Resume Template"
//               className="resume-image"
//               // onClick={() => handleCustomModal(resumeTemplate)}
//             />
//             <div className="resume-content">
//               <h2 className="marginbottom">
//                 Build Your ATS-Friendly Resume for Free
//               </h2>
//               <ul>
//                 <li>
//                   1. This template is ATS-friendly and designed to help you get
//                   hired.
//                 </li>
//                 <li>2. It is completely free—no hidden charges!</li>
//                 <li>
//                   3. Comes in a professional format tailored for different job
//                   roles.
//                 </li>
//                 <li>
//                   4. Easy to customize with your details and download instantly.
//                 </li>
//                 <li>
//                   5. Optimized to pass Applicant Tracking Systems (ATS)
//                   efficiently.
//                 </li>
//               </ul>
//               <div className="resume-btn">
//                 <button
//                   className="btn hero-button1"
//                   onClick={() =>
//                     window.open(
//                       "https://www.overleaf.com/gallery/tagged/cv",
//                       "_blank"
//                     )
//                   }
//                 >
//                   Create Resume
//                 </button>
//                 <button
//                   className="btn hero-button2"
//                   onClick={() =>
//                     window.open(
//                       "https://www.overleaf.com/gallery/tagged/cv",
//                       "_blank"
//                     )
//                   }
//                 >
//                   Check Your ATS Score
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <h2
//           className="heading-secondary reference"
//           style={{ marginBottom: "35px", textDecoration: "underline" }}
//         >
//           These are some resumes for your reference
//         </h2>

//         {/* Filter Section */}
//         <div className="filter-resume-section">
//           <h3 className="filter-resume-title">Filter Resumes:</h3>

//           {/* Company Type Filter */}
//           <div className="filter-resume-dropdown">
//             <label htmlFor="company-type-filter">Company Type:</label>
//             <select
//               id="company-type-filter"
//               value={activeFilter}
//               onChange={(e) => handleFilterChange(e.target.value)}
//               className="filter-resume-select"
//             >
//               {filterOptions.map((filter) => (
//                 <option key={filter} value={filter}>
//                   {filter}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Experience Level Filter */}
//           <div className="filter-resume-dropdown">
//             <label htmlFor="experience-filter">Experience Level:</label>
//             <select
//               id="experience-filter"
//               value={experienceFilter}
//               onChange={(e) => handleExperienceFilterChange(e.target.value)}
//               className="filter-resume-select"
//             >
//               {experienceOptions.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <p
//           className="paragraph-primary center"
//           style={{ margin: "0", marginBottom: "20px" }}
//         >
//           These are the AI tools you can use in your degree to make your work
//           simpler{" "}
//           <span
//             style={{
//               color: "blue",
//               cursor: "pointer",
//               textDecoration: "underline",
//             }}
//             onClick={() => navigate("/resources/resumes/resumes-explanation")}
//           >
//             Read More
//           </span>
//           .
//         </p>

//         {/* Reference Resumes with Pagination */}
//         <div
//           className="resume-upper-section reference-resume-container"
//           style={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
//         >
//           {currentResumes.length > 0 ? (
//             currentResumes.map((resume, index) => (
//               <React.Fragment key={resume.id}>
//                 <div className="resume-template">
//                   <img
//                     src={resume.imageLink1}
//                     alt="Resume Template"
//                     className="resume-image"
//                     onClick={() =>
//                       window.open(`/resources/resumes/${resume.id}`, "_blank")
//                     }
//                   />
//                   <div className="resume-content">
//                     <h2 className="marginbottom">{resume.resumeHeading}</h2>

//                     {/* Tags Container */}
//                     <div className="resume-tags-container">
//                       {/* Display company type tag */}
//                       {resume.resumeFilter && (
//                         <span
//                           className="resume-filter-tag"
//                           style={{
//                             display: "inline-block",
//                             padding: "4px 10px",
//                             borderRadius: "15px",
//                             fontSize: "1.2rem",
//                             fontWeight: "600",
//                             marginBottom: "10px",
//                             marginRight: "10px",
//                             ...getFilterStyle(resume.resumeFilter),
//                           }}
//                         >
//                           {resume.resumeFilter}
//                         </span>
//                       )}

//                       {/* Display experience level tag */}
//                       {resume.experienceLevel && (
//                         <span
//                           className="experience-filter-tag"
//                           style={{
//                             display: "inline-block",
//                             padding: "4px 10px",
//                             borderRadius: "15px",
//                             fontSize: "1.2rem",
//                             fontWeight: "600",
//                             marginBottom: "10px",
//                             ...getExperienceStyle(resume.experienceLevel),
//                           }}
//                         >
//                           {resume.experienceLevel}
//                         </span>
//                       )}
//                     </div>

//                     <ul className="singleresume">
//                       {resume.resumePoints.slice(0, 3).map((point, i) => (
//                         <li key={i}>{point}</li>
//                       ))}
//                     </ul>
//                     <button className="resume-view-more-btn">View More</button>
//                   </div>
//                 </div>
//                 {index !== currentResumes.length - 1 && (
//                   <div className="reference-line"></div>
//                 )}
//               </React.Fragment>
//             ))
//           ) : (
//             <div className="no-results">
//               <h3>No resumes found for the selected filters</h3>
//               <p>
//                 Try selecting different filters or check back later for more
//                 resumes.
//               </p>
//             </div>
//           )}
//         </div>

//         {/* Pagination Controls - Only show if there are resumes */}
//         {filteredData.length > 0 && (
//           <div className="pagination-controls">
//             <button
//               onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
//               disabled={currentPage === 1}
//             >
//               «
//             </button>
//             <span>
//               {currentPage} of {totalPages}
//             </span>
//             <button
//               onClick={() =>
//                 handlePageChange(Math.min(currentPage + 1, totalPages))
//               }
//               disabled={currentPage === totalPages}
//             >
//               »
//             </button>
//           </div>
//         )}

//         {/* Modal for Viewing Resumes */}
//         {modalData.isOpen && (
//           <div
//             className="custom-modal-overlay"
//             onClick={() => handleCustomModal()}
//           >
//             <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
//               <span
//                 className="custom-close-modal"
//                 onClick={() => handleCustomModal()}
//               >
//                 &times;
//               </span>
//               <img
//                 src={modalData.image}
//                 alt="Resume Template"
//                 className="custom-modal-image"
//               />
//             </div>
//           </div>
//         )}
//       </section>
//     </>
//   );
// };

// export default ResumeContainer;

/* */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/ResumeContainer.css"; // Ensure this file is linked
import resumeTemplate from "../../../assests/Resume/Faang.webp";

// Data array moved to the top to avoid reference errors
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
const ResumeContainer = () => {
  const [modalData, setModalData] = useState({ isOpen: false, image: null });
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("All");
  const [experienceFilter, setExperienceFilter] = useState("All");
  const [filteredData, setFilteredData] = useState(data);
  const resumesPerPage = 5;
  const navigate = useNavigate();

  // Function to handle resume click - navigate to resume detail page
  const handleResumeClick = (resumeId) => {
    navigate(`/resources/resumes/${resumeId}`);
  };

  // Function to handle "View More" click - same as resume click
  const handleViewMoreClick = (resumeId) => {
    navigate(`/resources/resumes/${resumeId}`);
  };

  //colours
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
          color: "orange",
          border: "2px solid orange",
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

  // Function to determine styling based on experience level
  const getExperienceStyle = (experienceLevel) => {
    switch (experienceLevel?.toLowerCase()) {
      case "fresher":
        return {
          backgroundColor: "#e8f5e9",
          color: "#2e7d32",
          border: "2px solid #2e7d32",
        };
      case "intermediate":
        return {
          backgroundColor: "#fff3e0",
          color: "#ef6c00",
          border: "2px solid #ef6c00",
        };
      case "experienced":
        return {
          backgroundColor: "#e3f2fd",
          color: "#1565c0",
          border: "2px solid #1565c0",
        };
      case "senior":
        return {
          backgroundColor: "#f3e5f5",
          color: "#7b1fa2",
          border: "2px solid #7b1fa2",
        };
      default:
        return {
          backgroundColor: "#f5f5f5",
          color: "#757575",
          border: "2px solid #9e9e9e",
        };
    }
  };

  // Get all unique filter values from the data
  const filterOptions = [
    "All",
    ...new Set(data.map((resume) => resume.resumeFilter || "Other")),
  ];

  // Get all unique experience values from the data
  const experienceOptions = [
    "All",
    ...new Set(data.map((resume) => resume.experienceLevel || "Fresher")),
  ];

  // Function to handle modal open/close
  const handleCustomModal = (image = null) => {
    setModalData({ isOpen: !!image, image });

    if (image) {
      document.body.style.overflow = "hidden"; // Disable background scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable background scrolling
    }
  };

  // Filter resumes based on selected filters
  const applyFilters = () => {
    let result = data;

    // Apply company type filter
    if (activeFilter !== "All") {
      result = result.filter((resume) => resume.resumeFilter === activeFilter);
    }

    // Apply experience level filter
    if (experienceFilter !== "All") {
      result = result.filter(
        (resume) => resume.experienceLevel === experienceFilter
      );
    }

    setFilteredData(result);
    setCurrentPage(1); // Reset to first page when filters change
  };

  // Handle company type filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  // Handle experience level filter change
  const handleExperienceFilterChange = (filter) => {
    setExperienceFilter(filter);
  };

  // Apply filters when either filter changes
  useEffect(() => {
    applyFilters();
  }, [activeFilter, experienceFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / resumesPerPage);
  const indexOfLastResume = currentPage * resumesPerPage;
  const indexOfFirstResume = indexOfLastResume - resumesPerPage;
  const currentResumes = filteredData.slice(
    indexOfFirstResume,
    indexOfLastResume
  );

  // Scroll to top when currentPage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]); // Runs every time currentPage updates

  // Handle pagination click
  const handlePageChange = (newPage) => {
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <section className="resume-section">
        <div className="resume-upper-section">
          {/* Resume Template Section */}
          <div className="resume-template">
            <img
              src={resumeTemplate}
              alt="Resume Template"
              className="resume-image"
              // onClick={() => handleCustomModal(resumeTemplate)}
            />
            <div className="resume-content">
              <h2 className="marginbottom">
                Build Your ATS-Friendly Resume for Free
              </h2>
              <ul>
                <li>
                  1. This template is ATS-friendly and designed to help you get
                  hired.
                </li>
                <li>2. It is completely free—no hidden charges!</li>
                <li>
                  3. Comes in a professional format tailored for different job
                  roles.
                </li>
                <li>
                  4. Easy to customize with your details and download instantly.
                </li>
                <li>
                  5. Optimized to pass Applicant Tracking Systems (ATS)
                  efficiently.
                </li>
              </ul>
              <div className="resume-btn">
                <button
                  className="btn hero-button1"
                  onClick={() => navigate("/upcoming")}
                >
                  Create Resume (Upcoming)
                </button>
                <button
                  className="btn hero-button2"
                  onClick={() => navigate("/upcoming")}
                >
                  Check Your ATS Score (Upcoming)
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2
          className="heading-secondary reference"
          style={{ marginBottom: "35px", textDecoration: "underline" }}
        >
          These are some resumes for your reference
        </h2>

        {/* Filter Section */}
        <div className="filter-resume-section">
          <h3 className="filter-resume-title">Filter Resumes:</h3>

          {/* Company Type Filter */}
          <div className="filter-resume-dropdown">
            <label htmlFor="company-type-filter">Company Type:</label>
            <select
              id="company-type-filter"
              value={activeFilter}
              onChange={(e) => handleFilterChange(e.target.value)}
              className="filter-resume-select"
            >
              {filterOptions.map((filter) => (
                <option key={filter} value={filter}>
                  {filter}
                </option>
              ))}
            </select>
          </div>

          {/* Experience Level Filter */}
          <div className="filter-resume-dropdown">
            <label htmlFor="experience-filter">Experience Level:</label>
            <select
              id="experience-filter"
              value={experienceFilter}
              onChange={(e) => handleExperienceFilterChange(e.target.value)}
              className="filter-resume-select"
            >
              {experienceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p
          className="paragraph-primary center"
          style={{ margin: "0", marginBottom: "20px" }}
        >
          See the exact strategies that helped students land jobs at top tech
          companies{" "}
          <span
            style={{
              color: "blue",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onClick={() => navigate("/resources/resumes/resumes-explanation")}
          >
            Read More
          </span>
          .
        </p>

        {/* Reference Resumes with Pagination */}
        <div
          className="resume-upper-section reference-resume-container"
          style={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
        >
          {currentResumes.length > 0 ? (
            currentResumes.map((resume, index) => (
              <React.Fragment key={resume.id}>
                <div className="resume-template">
                  <img
                    src={`/${resume.imageLink1}`}
                    alt="Resume Template"
                    className="resume-image"
                    onClick={() => handleResumeClick(resume.id)}
                    style={{ cursor: "pointer" }}
                  />
                  <div className="resume-content">
                    <h2 className="marginbottom">{resume.resumeHeading}</h2>

                    {/* Tags Container */}
                    <div className="resume-tags-container">
                      {/* Display company type tag */}
                      {resume.resumeFilter && (
                        <span
                          className="resume-filter-tag"
                          style={{
                            display: "inline-block",
                            padding: "4px 10px",
                            borderRadius: "15px",
                            fontSize: "1.2rem",
                            fontWeight: "600",
                            marginBottom: "10px",
                            marginRight: "10px",
                            ...getFilterStyle(resume.resumeFilter),
                          }}
                        >
                          {resume.resumeFilter}
                        </span>
                      )}

                      {/* Display experience level tag */}
                      {resume.experienceLevel && (
                        <span
                          className="experience-filter-tag"
                          style={{
                            display: "inline-block",
                            padding: "4px 10px",
                            borderRadius: "15px",
                            fontSize: "1.2rem",
                            fontWeight: "600",
                            marginBottom: "10px",
                            ...getExperienceStyle(resume.experienceLevel),
                          }}
                        >
                          {resume.experienceLevel}
                        </span>
                      )}
                    </div>

                    <ul className="singleresume">
                      {resume.resumePoints.slice(0, 3).map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    <button
                      className="resume-view-more-btn"
                      onClick={() => handleViewMoreClick(resume.id)}
                    >
                      View More
                    </button>
                  </div>
                </div>
                {index !== currentResumes.length - 1 && (
                  <div className="reference-line"></div>
                )}
              </React.Fragment>
            ))
          ) : (
            <div className="no-results">
              <h3>No resumes found for the selected filters</h3>
              <p>
                Try selecting different filters or check back later for more
                resumes.
              </p>
            </div>
          )}
        </div>

        {/* Pagination Controls - Only show if there are resumes */}
        {filteredData.length > 0 && (
          <div className="pagination-controls">
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
            >
              «
            </button>
            <span>
              {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                handlePageChange(Math.min(currentPage + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              »
            </button>
          </div>
        )}

        {/* Modal for Viewing Resumes */}
        {modalData.isOpen && (
          <div
            className="custom-modal-overlay"
            onClick={() => handleCustomModal()}
          >
            <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
              <span
                className="custom-close-modal"
                onClick={() => handleCustomModal()}
              >
                &times;
              </span>
              <img
                src={modalData.image}
                alt="Resume Template"
                className="custom-modal-image"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ResumeContainer;
