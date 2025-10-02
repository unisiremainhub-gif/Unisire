// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./css/Careers.css";
// import jobsdata from "./data/datacareers.json";

// const Careers = () => {
//   const navigate = useNavigate();
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     setJobs(jobsdata);
//   }, []);

//   const handleApplyClick = (jobId) => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     navigate(`/careers/application-form/${jobId}`);
//   };

//   return (
//     <div className="career-container-1">
//       <div className="decorative-shape shape-contact-1"></div>
//       <div className="decorative-shape shape-contact-2"></div>
//       <div className="decorative-triangle shape-triangle-1"></div>
//       <div className="decorative-square shape-square-1"></div>

//       <header className="about-header">
//         <h1 className="about-title">We are Hiring</h1>
//         <p className="allparagraph">
//           Join a proven team that has operated multiple tech platforms over the
//           years and now unites them into one powerful learning ecosystem —
//           delivering cutting-edge resources and AI-driven tools for learners
//           across India.
//         </p>
//       </header>

//       <div className="careers-grid">
//         {jobs.map((job) => (
//           <div className="job-card" key={job.id}>
//             <h4 className="career-center">{job.title}</h4>
//             <p className="icon-paragraph">
//               {job.description.slice(0, 200)}
//               {job.description.length > 200 ? "..." : ""}
//             </p>

//             <h5 className="career-requirements">Requirements:</h5>
//             <ul>
//               {job.requirements.slice(0, 4).map((req, index) => (
//                 <li key={index} className="icon-paragraph">
//                   {req}
//                 </li>
//               ))}
//             </ul>

//             <button
//               className="apply-button"
//               onClick={() => handleApplyClick(job.id)}
//             >
//               Apply Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Careers;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Careers.css";
import jobsdata from "./data/datacareers.json";

const Careers = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(jobsdata);
  }, []);

  const handleApplyClick = (jobId) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/careers/application-form/${jobId}`);
  };

  return (
    <div className="career-container-1">
      <div className="decorative-shape shape-contact-1"></div>
      <div className="decorative-shape shape-contact-2"></div>
      <div className="decorative-triangle shape-triangle-1"></div>
      <div className="decorative-square shape-square-1"></div>

      <header className="about-header">
        <h1 className="about-title">We are Hiring</h1>
        <p className="allparagraph">
          Join a proven team that has operated multiple tech platforms over the
          years and now unites them into one powerful learning ecosystem —
          delivering cutting-edge resources and AI-driven tools for learners
          across India.
        </p>
      </header>

      <div className="careers-grid">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h4 className="career-center">{job.title}</h4>
            <p className="icon-paragraph">
              {job.description.slice(0, 200)}
              {job.description.length > 200 ? "..." : ""}
            </p>

            <h5 className="career-requirements">Requirements:</h5>
            <ul>
              {job.requirements.slice(0, 4).map((req, index) => (
                <li key={index} className="icon-paragraph">
                  {req}
                </li>
              ))}
            </ul>

            <button
              className="apply-button"
              onClick={() => handleApplyClick(job.id)}
            >
              Apply Now <span className="arrow">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
