// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import "./css/Resources.css";
// import CoursesContainer from "./sections/ResourcesPage/CoursesContainer";
// import ResumeContainer from "./sections/ResourcesPage/ResumeContainer";
// import AiContainer from "./sections/ResourcesPage/AiContainer";

// function Resources() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [activeSection, setActiveSection] = useState("resources");

//   useEffect(() => {
//     // Set active section based on URL
//     if (location.pathname === "/resources/resumes") {
//       setActiveSection("resume");
//     } else if (location.pathname === "/resources/ai-tools") {
//       setActiveSection("ai");
//     } else {
//       setActiveSection("resources");
//     }
//   }, [location.pathname]);

//   const handleButtonClick = (section) => {
//     setActiveSection(section);

//     if (section === "resume") {
//       navigate("/resources/resumes");
//     } else if (section === "ai") {
//       navigate("/resources/ai-tools");
//     } else {
//       navigate("/resources/courses");
//     }
//   };

//   return (
//     <div className="resources-hub">
//       {/* Geometric background elements */}
//       <div className="geometric-shape triangle"></div>
//       <div className="geometric-shape circle"></div>
//       <div className="geometric-shape square"></div>

//       {/* Line structures */}
//       <div className="line-structure horizontal"></div>
//       <div className="line-structure vertical"></div>
//       <div className="line-structure diagonal"></div>

//       <div className="resources-main-container">
//         <header className="resources-header">
//           <h1 className="resources-title">Learning Resources</h1>
//           <p className=" allparagraph">
//             Curated collection of courses, resume builders, and AI tools to
//             accelerate your career
//           </p>
//         </header>

//         <div className="resources-buttons">
//           <button
//             className={`resources-button resources-container-button ${
//               activeSection === "resources" ? "active" : ""
//             }`}
//             onClick={() => handleButtonClick("resources")}
//           >
//             Courses
//           </button>
//           <button
//             className={`resources-button resume-container-button ${
//               activeSection === "resume" ? "active" : ""
//             }`}
//             onClick={() => handleButtonClick("resume")}
//           >
//             Resume
//           </button>
//           <button
//             className={`resources-button ai-container-button ${
//               activeSection === "ai" ? "active" : ""
//             }`}
//             onClick={() => handleButtonClick("ai")}
//           >
//             AI Tools
//           </button>
//         </div>

//         {/* {activeSection === "resources" && <CoursesContainer />}
//       {activeSection === "resume" && <ResumeContainer />}
//       {activeSection === "ai" && <AiContainer />} */}
//         <div className="section-wrapper">
//           {activeSection === "resources" && <CoursesContainer />}
//           {activeSection === "resume" && <ResumeContainer />}
//           {activeSection === "ai" && <AiContainer />}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Resources;

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./css/Resources.css";
import RoadMapsContainer from "./sections/ResourcesPage/RoadMapsContainer";
import ResumeContainer from "./sections/ResourcesPage/ResumeContainer";
import AiContainer from "./sections/ResourcesPage/AiContainer";

function Resources() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("resources");

  useEffect(() => {
    if (location.pathname === "/resources/resumes") {
      setActiveSection("resume");
    } else if (location.pathname === "/resources/ai-tools") {
      setActiveSection("ai");
    } else {
      setActiveSection("resources");
    }
  }, [location.pathname]);

  const handleButtonClick = (section) => {
    setActiveSection(section);

    if (section === "resume") {
      navigate("/resources/resumes");
    } else if (section === "ai") {
      navigate("/resources/ai-tools");
    } else {
      navigate("/resources/roadmaps");
    }
  };

  return (
    <div className="resources-hub">
      <div className="geometric-shape triangle"></div>
      <div className="geometric-shape circle"></div>
      <div className="geometric-shape square"></div>

      <div className="line-structure horizontal"></div>
      <div className="line-structure vertical"></div>
      <div className="line-structure diagonal"></div>

      <div className="resources-main-container">
        <header className="resources-header">
          <h1 className="resources-title">Learning Resources</h1>
          <p className="allparagraph">
            Curated collection of roadmaps, resume builders, and AI tools —
            designed to help Indian students upskill faster and land top
            placements.
          </p>
        </header>

        <div className="resources-buttons">
          <button
            className={`resources-button resources-container-button ${
              activeSection === "resources" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("resources")}
          >
            Roadmaps
          </button>
          <button
            className={`resources-button resume-container-button ${
              activeSection === "resume" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("resume")}
          >
            Resume
          </button>
          <button
            className={`resources-button ai-container-button ${
              activeSection === "ai" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("ai")}
          >
            AI Tools
          </button>
        </div>

        <div className="section-wrapper">
          {activeSection === "resources" && <RoadMapsContainer />}
          {activeSection === "resume" && <ResumeContainer />}
          {activeSection === "ai" && <AiContainer />}
        </div>
      </div>
    </div>
  );
}

export default Resources;
