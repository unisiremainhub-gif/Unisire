// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// const ResourcesExplanation = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="detailcard-container">
//       <button className="rater-button self" onClick={() => navigate("/")}>
//         Back to Home &#8592;
//       </button>

//       <div className="apply-form-container">
//         <h2 className="heading-secondary marginbottom">Terms & Conditions</h2>
//         <p className="paragraph-primary">
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. It has survived not only
//           five centuries, but also the leap into electronic typesetting,
//           remaining essentially unchanged. It was popularised in the 1960s with
//           the release of Letraset sheets containing Lorem Ipsum passages, and
//           more recently with desktop publishing software like Aldus PageMaker
//           including versions of Lorem Ipsum.
//         </p>

//         <h3 className="career-requirements lower">1. Udemy</h3>
//         <ul>
//           <li className="icon-paragraph">
//             By accessing or using Inskilliy ("Platform"), you agree to be bound
//             by these Terms & Conditions ("Terms").
//           </li>
//           <li className="icon-paragraph">
//             If you do not agree with any part of these Terms, please do not use
//             our platform.
//           </li>
//           <li className="icon-paragraph">
//             We reserve the right to update these Terms periodically; your
//             continued use of the Platform constitutes acceptance of any changes.
//           </li>
//         </ul>

//         <h3 className="career-requirements lower">2. Youtube Playlist</h3>
//         <ul>
//           <li className="icon-paragraph">
//             Our platform provides free educational resources, career guidance,
//             and proven roadmaps designed by professionals (including experts
//             from S&P 500 companies).
//           </li>
//           <li className="icon-paragraph">
//             We offer resources to help recent college graduates and students
//             acquire essential skills—from cybersecurity and backend development
//             to AI/ML and more.
//           </li>
//           <li className="icon-paragraph">
//             Our resources include real-world resume samples, project showcases,
//             and job descriptions to aid your career growth.
//           </li>
//         </ul>

//         <h3 className="career-requirements lower">3. Youtube Crash Course</h3>
//         <ul>
//           <li className="icon-paragraph">
//             Users must be at least 13 years old. Users under 18 must obtain
//             parental or guardian consent.
//           </li>
//           <li className="icon-paragraph">
//             <strong>Accuracy of Information:</strong> You agree to provide
//             accurate, current, and complete information during registration and
//             while using our platform.
//           </li>
//         </ul>

//         <h3 className="career-requirements lower">4. Documentation</h3>
//         <h4 className="career-requirements lower">Account Creation</h4>
//         <ul>
//           <li className="icon-paragraph">
//             You may need to register for an account to access certain features.
//           </li>
//           <li className="icon-paragraph">
//             You are responsible for maintaining the confidentiality of your
//             account credentials.
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ResourcesExplanation;

import React from "react";
import { useNavigate, Link } from "react-router-dom";

const ResourcesExplanation = () => {
  const navigate = useNavigate();

  return (
    <div className="detailcard-container">
      <button className="rater-button self" onClick={() => navigate(-1)}>
        Back to Previous &#8592;
      </button>

      <div className="apply-form-container">
        <h2 className="heading-secondary marginbottom">
          Resources Explanation
        </h2>
        <p className="paragraph-primary">
          Our platform provides high-quality learning materials sourced from
          trusted platforms like Udemy, YouTube playlists, crash courses, and
          professional documentation. Here's a detailed breakdown:
        </p>

        <h3 className="career-requirements lower">1. Udemy Playlists</h3>
        <ul>
          <li className="icon-paragraph">
            Curated Udemy courses chosen for their quality, practical projects,
            and updated syllabus.
          </li>
          <li className="icon-paragraph">
            Covers Frontend Development, Backend, DevOps, Cybersecurity, AI/ML,
            and more.
          </li>
          <li className="icon-paragraph">
            Lifetime access and certifications after course completion.
          </li>
        </ul>
        <h4 className="career-requirements lower">Advantages:</h4>
        <ul>
          <li className="icon-paragraph">
            Structured learning from beginner to advanced levels.
          </li>
          <li className="icon-paragraph">
            Hands-on real-world projects included.
          </li>
          <li className="icon-paragraph">
            Recognized certificates add weight to your resume.
          </li>
        </ul>

        <h3 className="career-requirements lower">2. YouTube Playlists</h3>
        <ul>
          <li className="icon-paragraph">
            Handpicked playlists from reputed channels like CodeWithHarry,
            freeCodeCamp, Tech With Tim, etc.
          </li>
          <li className="icon-paragraph">
            Full roadmap coverage: HTML, CSS, JavaScript, ReactJS, NodeJS, etc.
          </li>
          <li className="icon-paragraph">
            Free and accessible resources updated regularly.
          </li>
        </ul>
        <h4 className="career-requirements lower">Advantages:</h4>
        <ul>
          <li className="icon-paragraph">
            Learn for free without paying any subscription fees.
          </li>
          <li className="icon-paragraph">
            Updated with latest technology and market demands.
          </li>
          <li className="icon-paragraph">
            Learn directly from professional developers and industry experts.
          </li>
        </ul>

        <h3 className="career-requirements lower">3. YouTube Crash Courses</h3>
        <ul>
          <li className="icon-paragraph">
            Short-duration crash courses ideal for quick skill acquisition (2-10
            hours format).
          </li>
          <li className="icon-paragraph">
            Topics like JavaScript Crash Course, Python for Beginners, Full
            Stack Roadmap Crash, etc.
          </li>
          <li className="icon-paragraph">
            Perfect for revision before interviews and rapid upskilling.
          </li>
        </ul>
        <h4 className="career-requirements lower">Advantages:</h4>
        <ul>
          <li className="icon-paragraph">
            Quick learning for busy students and working professionals.
          </li>
          <li className="icon-paragraph">
            Focus on practical and interview-ready skills.
          </li>
          <li className="icon-paragraph">
            Best for revision right before job interviews.
          </li>
        </ul>

        <h3 className="career-requirements lower">4. Official Documentation</h3>
        <h4 className="career-requirements lower">Why Follow Documentation?</h4>
        <ul>
          <li className="icon-paragraph">
            Directly learning from official sources like MDN Web Docs, ReactJS
            official site, NodeJS docs.
          </li>
          <li className="icon-paragraph">
            Always updated with the latest syntax, best practices, and
            real-world examples.
          </li>
          <li className="icon-paragraph">
            Helps you develop the ability to self-learn anything new
            independently.
          </li>
        </ul>
        <h4 className="career-requirements lower">Advantages:</h4>
        <ul>
          <li className="icon-paragraph">
            Master real-world documentation reading — a must for developers.
          </li>
          <li className="icon-paragraph">
            Helps you debug faster and build according to standards.
          </li>
          <li className="icon-paragraph">
            Boosts your confidence while working in professional teams or
            open-source.
          </li>
        </ul>

        <p className="paragraph-primary">
          Our platform provides high-quality learning materials sourced from
          trusted platforms like Udemy, YouTube playlists, crash courses, and
          professional documentation. Here's a detailed breakdown:
        </p>
      </div>
    </div>
  );
};

export default ResourcesExplanation;
