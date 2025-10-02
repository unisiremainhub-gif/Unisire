// // import React, { useState, useEffect, useRef } from "react";
// // import { FaSearch, FaFilter } from "react-icons/fa";
// // import { useNavigate } from "react-router-dom";
// // import data from "../../data/datacard.json";
// // import "../../css/RoadmapsContainer.css";

// // const RoadMapsContainer = () => {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [filter, setFilter] = useState("");
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const [currentPage, setCurrentPage] = useState(1);

// //   const navigate = useNavigate();
// //   const dropdownRef = useRef(null);
// //   const coursesPerPage = 9;

// //   const filterOptions = [
// //     "All",
// //     "Graphic Designing",
// //     "Web Development",
// //     "App Development",
// //     "Extension Development",
// //     "Programming",
// //     "Cyber Security",
// //   ];

// //   const filteredCourses = data
// //     .filter((course) =>
// //       course.name.toLowerCase().includes(searchTerm.toLowerCase())
// //     )
// //     .filter((course) =>
// //       filter ? course.category?.toLowerCase() === filter.toLowerCase() : true
// //     );

// //   const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
// //   const indexOfLastCourse = currentPage * coursesPerPage;
// //   const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
// //   const currentCourses = filteredCourses.slice(
// //     indexOfFirstCourse,
// //     indexOfLastCourse
// //   );

// //   useEffect(() => {
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   }, [currentPage]);

// //   const handlePageChange = (newPage) => {
// //     if (newPage !== currentPage) {
// //       setCurrentPage(newPage);
// //     }
// //   };

// //   const handleFilterClick = () => {
// //     setIsDropdownOpen((prev) => !prev);
// //   };

// //   const handleOptionSelect = (option) => {
// //     setFilter(option === "All" ? "" : option);
// //     setCurrentPage(1);
// //     setTimeout(() => setIsDropdownOpen(false), 100); // Ensures dropdown closes after click registers
// //   };

// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setIsDropdownOpen(false);
// //       }
// //     };

// //     if (isDropdownOpen) {
// //       document.addEventListener("mousedown", handleClickOutside);
// //     } else {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     }

// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };
// //   }, [isDropdownOpen]);

// //   return (
// //     <>
// //       <p
// //         className="paragraph-primary center"
// //         style={{ margin: "10px", marginBottom: "0px" }}
// //       >
// //         These are the AI tools you can use in your degree to make your work
// //         simpler{" "}
// //         <span
// //           style={{
// //             color: "blue",
// //             cursor: "pointer",
// //             textDecoration: "underline",
// //           }}
// //           onClick={() => navigate("/resources/Roadmaps/roadmaps-explanation")}
// //         >
// //           Read More
// //         </span>
// //         .
// //       </p>

// //       <div className="courses-container">
// //         <div className="course-search-filter" style={{ position: "relative" }}>
// //           <div className="courses-searchbar">
// //             <input
// //               type="text"
// //               placeholder="Search Courses..."
// //               value={searchTerm}
// //               onChange={(e) => {
// //                 setSearchTerm(e.target.value);
// //                 setCurrentPage(1);
// //               }}
// //             />
// //             <span className="courses-search-icon">
// //               <FaSearch />
// //             </span>
// //           </div>

// //           <div
// //             className="resources-filter"
// //             onClick={handleFilterClick}
// //             style={{ position: "relative" }}
// //             ref={dropdownRef}
// //           >
// //             <FaFilter
// //               className="filter-icon"
// //               style={{ cursor: "pointer", fontSize: "20px", color: "white" }}
// //             />
// //             {isDropdownOpen && (
// //               <div
// //                 style={{
// //                   position: "absolute",
// //                   top: "30px",
// //                   right: 0,
// //                   background: "#fff",
// //                   border: "7px solid #6a737d",
// //                   boxShadow: "0 0 10px rgba(0,0,0,0.1)",
// //                   borderRadius: "8px",
// //                   zIndex: 10,
// //                   color: "#6a737d",
// //                 }}
// //               >
// //                 {filterOptions.map((option) => (
// //                   <div
// //                     key={option}
// //                     onClick={() => handleOptionSelect(option)}
// //                     style={{
// //                       padding: "7px 15px",
// //                       cursor: "pointer",
// //                       whiteSpace: "nowrap",
// //                       borderBottom: "1px solid #eee",
// //                       background:
// //                         filter === option || (option === "All" && filter === "")
// //                           ? "#f0f0f0"
// //                           : "white",
// //                     }}
// //                     onMouseEnter={(e) =>
// //                       (e.currentTarget.style.background = "#f5f5f5")
// //                     }
// //                     onMouseLeave={(e) =>
// //                       (e.currentTarget.style.background =
// //                         filter === option || (option === "All" && filter === "")
// //                           ? "#f0f0f0"
// //                           : "white")
// //                     }
// //                   >
// //                     {option}
// //                   </div>
// //                 ))}
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         <section className="courses-cards">
// //           {currentCourses.map((course) => (
// //             <div
// //               key={course.id}
// //               className="course-card"
// //               onClick={() => navigate(`/resources/roadmaps/${course.id}`)}
// //             >
// //               <img src={course.image} alt={course.name} />
// //               <div className="course-info mantain-size">
// //                 <h2 className="margin-bottom text-align courseheading">
// //                   {course.name}
// //                 </h2>
// //               </div>
// //               <div className="course-info margin-top-duration">
// //                 <h5>Duration: {course.duration}</h5>
// //                 <p className="icon-paragraph fontsmall">
// //                   {course.description.substring(0, 100)}...
// //                 </p>
// //               </div>
// //             </div>
// //           ))}
// //         </section>

// //         <div className="pagination-controls">
// //           <button
// //             onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
// //             disabled={currentPage === 1}
// //           >
// //             «
// //           </button>
// //           <span>
// //             {currentPage} of {totalPages}
// //           </span>
// //           <button
// //             onClick={() =>
// //               handlePageChange(Math.min(currentPage + 1, totalPages))
// //             }
// //             disabled={currentPage === totalPages}
// //           >
// //             »
// //           </button>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default RoadMapsContainer;

// import React, { useState, useEffect, useRef } from "react";
// import { FaSearch, FaFilter, FaStar, FaUsers } from "react-icons/fa";
// import { StaticRouter, useNavigate } from "react-router-dom";
// import data from "../../data/datacard.json";
// import "../../css/RoadmapsContainer.css";
// import image1 from "../../Images/Roadmaps/1.png";
// import image2 from "../../Images/Roadmaps/2.png";

// import {
//   MoveRight,
//   Star,
//   StarHalf,
//   StarHalfIcon,
//   StarIcon,
//   StarOff,
//   Stars,
//   StarsIcon,
// } from "lucide-react";

// const RoadMapsContainer = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filter, setFilter] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);

//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);
//   const coursesPerPage = 9;

//   const filterOptions = [
//     "All",
//     "Graphic Designing",
//     "Web Development",
//     "App Development",
//     "Extension Development",
//     "Programming",
//     "Cyber Security",
//   ];

//   const filteredCourses = data
//     .filter((course) =>
//       course.name.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .filter((course) =>
//       filter ? course.category?.toLowerCase() === filter.toLowerCase() : true
//     );

//   const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
//   const indexOfLastCourse = currentPage * coursesPerPage;
//   const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
//   const currentCourses = filteredCourses.slice(
//     indexOfFirstCourse,
//     indexOfLastCourse
//   );

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [currentPage]);

//   const handlePageChange = (newPage) => {
//     if (newPage !== currentPage) {
//       setCurrentPage(newPage);
//     }
//   };

//   const handleFilterClick = () => {
//     // Disable filter functionality
//     // setIsDropdownOpen((prev) => !prev);
//   };

//   const handleOptionSelect = (option) => {
//     // Disable filter functionality
//     // setFilter(option === "All" ? "" : option);
//     // setCurrentPage(1);
//     // setTimeout(() => setIsDropdownOpen(false), 100);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     if (isDropdownOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [isDropdownOpen]);

//   // Function to render star ratings
//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 !== 0;

//     for (let i = 0; i < fullStars; i++) {
//       stars.push(<FaStar key={i} className="course-star-icon filled" />);
//     }

//     if (hasHalfStar) {
//       stars.push(<FaStar key="half" className="course-star-icon half" />);
//     }

//     const emptyStars = 5 - stars.length;
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(
//         <FaStar key={`empty-${i}`} className="course-star-icon empty" />
//       );
//     }

//     return stars;
//   };

//   return (
//     <>
//       <p
//         className="paragraph-primary center"
//         style={{ margin: "10px", marginBottom: "0px" }}
//       >
//         Step-by-Step Roadmaps to Land Your Dream Tech Job{" "}
//         <span
//           style={{
//             color: "blue",
//             cursor: "pointer",
//             textDecoration: "underline",
//           }}
//           onClick={() => navigate("/resources/Roadmaps/roadmaps-explanation")}
//         >
//           Read More
//         </span>
//         .
//       </p>

//       <div className="courses-container">
//         <div className="course-search-filter" style={{ position: "relative" }}>
//           <div className="courses-searchbar">
//             <input
//               type="text"
//               placeholder="Search Courses..."
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value);
//                 setCurrentPage(1);
//               }}
//             />
//             <span className="courses-search-icon">
//               <FaSearch />
//             </span>
//           </div>

//           {/* Disabled Filter Button */}
//           <div
//             className="resources-filter"
//             onClick={handleFilterClick}
//             style={{
//               position: "relative",
//               cursor: "not-allowed",
//               opacity: 0.6,
//               display: "none",
//             }}
//             ref={dropdownRef}
//             title="Filter functionality temporarily disabled"
//           >
//             <FaFilter
//               className="filter-icon"
//               style={{
//                 cursor: "not-allowed",
//                 fontSize: "20px",
//                 color: "white",
//               }}
//             />
//             {/* Comment out dropdown since filter is disabled */}
//             {/* {isDropdownOpen && (
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "30px",
//                   right: 0,
//                   background: "#fff",
//                   border: "7px solid #6a737d",
//                   boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//                   borderRadius: "8px",
//                   zIndex: 10,
//                   color: "#6a737d",
//                 }}
//               >
//                 {filterOptions.map((option) => (
//                   <div
//                     key={option}
//                     onClick={() => handleOptionSelect(option)}
//                     style={{
//                       padding: "7px 15px",
//                       cursor: "pointer",
//                       whiteSpace: "nowrap",
//                       borderBottom: "1px solid #eee",
//                       background:
//                         filter === option || (option === "All" && filter === "")
//                           ? "#f0f0f0"
//                           : "white",
//                     }}
//                     onMouseEnter={(e) =>
//                       (e.currentTarget.style.background = "#f5f5f5")
//                     }
//                     onMouseLeave={(e) =>
//                       (e.currentTarget.style.background =
//                         filter === option || (option === "All" && filter === "")
//                           ? "#f0f0f0"
//                           : "white")
//                     }
//                   >
//                     {option}
//                   </div>
//                 ))}
//               </div>
//             )} */}
//           </div>
//         </div>

//         <section className="courses-cards">
//           {currentCourses.length > 0 ? (
//             currentCourses.map((course) => (
//               <div
//                 key={course.id}
//                 className="course-card"
//                 onClick={() => navigate(`/resources/roadmaps/${course.id}`)}
//               >
//                 <div className="courses-cards-details">
//                   <div className="course-image-wrapper">
//                     <img src={course.image} alt={course.name} />

//                     <div className="course-meta-badge">
//                       <div className="course-meta-details">
//                         <span
//                           style={{
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             gap: "4px",
//                           }}
//                         >
//                           ⭐{course.rating || "0"}
//                         </span>
//                         |
//                         <span
//                           style={{
//                             display: "flex",
//                             justifyContent: "center",
//                             alignItems: "center",
//                             gap: "4px",
//                           }}
//                         >
//                           <FaUsers className="enrollment-icon" />{" "}
//                           {course.enrolledby || "0"}{" "}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="course-info mantain-size">
//                     <h2 className="margin-bottom text-align courseheading">
//                       {course.name}
//                     </h2>
//                   </div>

//                   <div className="course-info margin-top-duration">
//                     <h5>Duration: {course.duration}</h5>
//                     <p className="icon-paragraph fontsmall">
//                       {course.description.substring(0, 100)}...
//                     </p>
//                   </div>
//                 </div>
//                 <div className="course-detail-btn">
//                   <button>
//                     View Details{" "}
//                     <span className="icn">
//                       <MoveRight size={20} />
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="no-roadmaps-found">
//               <h3>No roadmaps found</h3>
//               <p>
//                 {searchTerm
//                   ? `No roadmaps match your search for "${searchTerm}". Try adjusting your search terms.`
//                   : "No roadmaps are currently available. Please check back later."}
//               </p>
//             </div>
//           )}
//         </section>

//         {currentCourses.length > 0 && (
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
//       </div>
//     </>
//   );
// };

// export default RoadMapsContainer;

/* */
import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaFilter, FaStar, FaUsers } from "react-icons/fa";
import { StaticRouter, useNavigate } from "react-router-dom";
import data from "../../data/datacard.json";
import "../../css/RoadmapsContainer.css";

// Import all your images
import image1 from "../../Images/Roadmaps/1.png";
import image2 from "../../Images/Roadmaps/2.png";
import image3 from "../../Images/Roadmaps/3.png";
import image4 from "../../Images/Roadmaps/4.png";
import image5 from "../../Images/Roadmaps/5.png";

// Continue importing all your images...

import {
  MoveRight,
  Star,
  StarHalf,
  StarHalfIcon,
  StarIcon,
  StarOff,
  Stars,
  StarsIcon,
} from "lucide-react";

const RoadMapsContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const coursesPerPage = 9;

  // Create an array of all imported images
  const importedImages = [
    image1,
    image2,
    image3,
    image4,
    image5,

    // Add more as you import them
  ];

  const filterOptions = [
    "All",
    "Graphic Designing",
    "Web Development",
    "App Development",
    "Extension Development",
    "Programming",
    "Cyber Security",
  ];

  const filteredCourses = data
    .filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((course) =>
      filter ? course.category?.toLowerCase() === filter.toLowerCase() : true
    );

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  // Function to get image based on course ID
  const getCourseImage = (courseId) => {
    // Use course ID to get corresponding image from imported images
    // Subtract 1 because array index starts at 0 but IDs usually start at 1
    const imageIndex = (courseId - 1) % importedImages.length;
    return importedImages[imageIndex] || importedImages[0]; // Fallback to first image
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  };

  const handleFilterClick = () => {
    // Disable filter functionality
  };

  const handleOptionSelect = (option) => {
    // Disable filter functionality
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="course-star-icon filled" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="course-star-icon half" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaStar key={`empty-${i}`} className="course-star-icon empty" />
      );
    }

    return stars;
  };

  return (
    <>
      <p
        className="paragraph-primary center"
        style={{ margin: "10px", marginBottom: "0px" }}
      >
        Step-by-Step Roadmaps to Land Your Dream Tech Job{" "}
        <span
          style={{
            color: "blue",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={() => navigate("/resources/Roadmaps/roadmaps-explanation")}
        >
          Read More
        </span>
        .
      </p>

      <div className="courses-container">
        <div className="course-search-filter" style={{ position: "relative" }}>
          <div className="courses-searchbar">
            <input
              type="text"
              placeholder="Search Courses..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
            <span className="courses-search-icon">
              <FaSearch />
            </span>
          </div>

          {/* Disabled Filter Button */}
          <div
            className="resources-filter"
            onClick={handleFilterClick}
            style={{
              position: "relative",
              cursor: "not-allowed",
              opacity: 0.6,
              display: "none",
            }}
            ref={dropdownRef}
            title="Filter functionality temporarily disabled"
          >
            <FaFilter
              className="filter-icon"
              style={{
                cursor: "not-allowed",
                fontSize: "20px",
                color: "white",
              }}
            />
          </div>
        </div>

        <section className="courses-cards">
          {currentCourses.length > 0 ? (
            currentCourses.map((course) => (
              <div
                key={course.id}
                className="course-card"
                onClick={() => navigate(`/resources/roadmaps/${course.id}`)}
              >
                <div className="courses-cards-details">
                  <div className="course-image-wrapper">
                    {/* Use imported image instead of URL from JSON */}
                    <img
                      src={getCourseImage(course.id)}
                      alt={course.name}
                      style={{
                        width: "100%",
                        height: "280px",
                        objectFit: "cover",
                      }}
                    />

                    <div className="course-meta-badge">
                      <div className="course-meta-details">
                        <span
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          ⭐{course.rating || "0"}
                        </span>
                        |
                        <span
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "4px",
                          }}
                        >
                          <FaUsers className="enrollment-icon" />{" "}
                          {course.enrolledby || "0"}{" "}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="course-info mantain-size">
                    <h2 className="margin-bottom text-align courseheading">
                      {course.name}
                    </h2>
                  </div>

                  <div className="course-info margin-top-duration">
                    <h5>Duration: {course.duration}</h5>
                    <p className="icon-paragraph fontsmall">
                      {course.description.substring(0, 100)}...
                    </p>
                  </div>
                </div>
                <div className="course-detail-btn">
                  <button>
                    View Details{" "}
                    <span className="icn">
                      <MoveRight size={20} />
                    </span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-roadmaps-found">
              <h3>No roadmaps found</h3>
              <p>
                {searchTerm
                  ? `No roadmaps match your search for "${searchTerm}". Try adjusting your search terms.`
                  : "No roadmaps are currently available. Please check back later."}
              </p>
            </div>
          )}
        </section>

        {currentCourses.length > 0 && (
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
      </div>
    </>
  );
};

export default RoadMapsContainer;
