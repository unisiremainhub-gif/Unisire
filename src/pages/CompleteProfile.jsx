// import "./css/CompleteProfile.css";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const CompleteProfile = () => {
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     profilePhoto: null,
//     name: "",
//     email: "",
//     phoneNumber: "",
//     countryCode: "",
//     college: "",
//     degree: "",
//     graduationYear: "",
//     profession: "",
//     experience: "",
//     skills: "",
//     linkedin: "",
//     github: "",
//     portfolio: "",
//     bio: "",
//     interests: "",
//     goal: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData((prev) => ({ ...prev, profilePhoto: file }));
//   };

//   const nextStep = () => {
//     const form = document.querySelector("form");
//     if (!form.checkValidity()) {
//       form.reportValidity();
//       return;
//     }
//     setStep(step + 1);
//   };

//   const prevStep = () => setStep(step - 1);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     navigate("/careers");
//   };

//   return (
//     <div className="profile-detailcard-container">
//       <div className="profile-container">
//         <div className="profile-form-upper">
//           <h2 className="form-heading heading-secondary">
//             Complete Your Profile :)
//           </h2>
//           <p className="icon-paragraph">
//             Our platform is designed to support students, professionals, and
//             educators by providing high-quality resources and assistance.
//           </p>

//           <div className="step-progress-container">
//             <div className="step-progress">
//               <div
//                 className={`step-item ${step >= 1 ? "active" : ""} ${
//                   step > 1 ? "completed" : ""
//                 }`}
//               >
//                 <div className="step-circle">{step > 1 ? "✓" : "1"}</div>
//                 <span className="step-label">Personal Info</span>
//               </div>
//               <div className={`step-line ${step > 1 ? "completed" : ""}`}></div>
//               <div
//                 className={`step-item ${step >= 2 ? "active" : ""} ${
//                   step > 2 ? "completed" : ""
//                 }`}
//               >
//                 <div className="step-circle">{step > 2 ? "✓" : "2"}</div>
//                 <span className="step-label">Education</span>
//               </div>
//               <div className={`step-line ${step > 2 ? "completed" : ""}`}></div>
//               <div className={`step-item ${step >= 3 ? "active" : ""}`}>
//                 <div className="step-circle">3</div>
//                 <span className="step-label">Portfolio</span>
//               </div>
//             </div>
//           </div>

//           <form className="profile-form" onSubmit={handleSubmit}>
//             <h2 className="form-heading-1">
//               <i>
//                 {step === 1
//                   ? "Personal & Contact Info"
//                   : step === 2
//                   ? "Education & Professional Background"
//                   : "Portfolio & Career Personalization"}{" "}
//                 (Step {step} of 3)
//               </i>
//             </h2>

//             {step === 1 && (
//               <div className="new-step-column">
//                 <div>
//                   <label>Profile Photo</label>
//                   <input
//                     type="file"
//                     name="profilePhoto"
//                     accept="image/*"
//                     onChange={handleFileChange}
//                     className="new-input-full"
//                     disabled
//                   />
//                   <p
//                     style={{
//                       fontSize: "12px",
//                       color: "#ff6b6b",
//                       marginTop: "5px",
//                       fontStyle: "italic",
//                     }}
//                   >
//                     Due to high traffic, we are facing server issues. Please try
//                     uploading your photo next time.
//                   </p>
//                 </div>

//                 <div>
//                   <label>Full Name *</label>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Enter your full name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="new-input-full"
//                   />
//                 </div>

//                 <div>
//                   <label>Email Address *</label>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="your.email@example.com"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="new-input-full"
//                   />
//                 </div>

//                 <div className="new-flex-row">
//                   <div className="new-flex-1">
//                     <label>Country Code *</label>
//                     <input
//                       type="text"
//                       name="countryCode"
//                       placeholder="+91"
//                       value={formData.countryCode}
//                       onChange={handleChange}
//                       required
//                       className="new-input-full"
//                     />
//                   </div>
//                   <div className="new-flex-3">
//                     <label>Phone Number *</label>
//                     <input
//                       type="tel"
//                       name="phoneNumber"
//                       placeholder="9876543210"
//                       value={formData.phoneNumber}
//                       onChange={handleChange}
//                       required
//                       className="new-input-full"
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}

//             {step === 2 && (
//               <div className="new-step-column">
//                 <div>
//                   <label>College *</label>
//                   <input
//                     type="text"
//                     name="college"
//                     placeholder="Enter your college/university name"
//                     value={formData.college}
//                     onChange={handleChange}
//                     required
//                     className="new-input-full"
//                   />
//                 </div>

//                 <div>
//                   <label>Degree *</label>
//                   <input
//                     type="text"
//                     name="degree"
//                     placeholder="e.g. Bachelor of Engineering"
//                     value={formData.degree}
//                     onChange={handleChange}
//                     required
//                     className="new-input-full"
//                   />
//                 </div>

//                 <div>
//                   <label>Graduation Year *</label>
//                   <input
//                     type="text"
//                     name="graduationYear"
//                     placeholder="e.g. 2024"
//                     value={formData.graduationYear}
//                     onChange={handleChange}
//                     required
//                     className="new-input-full"
//                   />
//                 </div>

//                 <div>
//                   <label>Profession *</label>
//                   <input
//                     type="text"
//                     name="profession"
//                     placeholder="e.g. Web Developer"
//                     value={formData.profession}
//                     onChange={handleChange}
//                     required
//                     className="new-input-full"
//                   />
//                 </div>

//                 <div>
//                   <label>Experience (in years)</label>
//                   <input
//                     type="number"
//                     name="experience"
//                     placeholder="e.g. 2"
//                     value={formData.experience}
//                     onChange={handleChange}
//                     className="new-input-full"
//                   />
//                 </div>

//                 <div>
//                   <label>Skills *</label>
//                   <select
//                     name="skills"
//                     value={formData.skills}
//                     onChange={handleChange}
//                     required
//                     className="new-input-full"
//                   >
//                     <option value="" disabled>
//                       Select a skill category
//                     </option>
//                     <option value="Programming Languages">
//                       Programming Languages
//                     </option>
//                     <option value="Web Development">Web Development</option>
//                     <option value="Backend & Databases">
//                       Backend & Databases
//                     </option>
//                     <option value="Mobile Development">
//                       Mobile Development
//                     </option>
//                     <option value="Cloud & DevOps">Cloud & DevOps</option>
//                     <option value="Data Science & AI/ML">
//                       Data Science & AI/ML
//                     </option>
//                     <option value="Cybersecurity & Blockchain">
//                       Cybersecurity & Blockchain
//                     </option>
//                     <option value="UI/UX & Design">UI/UX & Design</option>
//                     <option value="Game Development">Game Development</option>
//                     <option value="Other Tech Skills">Other Tech Skills</option>
//                     <option value="Non-Tech Skills">Non-Tech Skills</option>
//                     <option value="Other Skills">Other Skills</option>
//                   </select>
//                 </div>
//               </div>
//             )}

//             {step === 3 && (
//               <div className="new-step-column">
//                 <div>
//                   <label>LinkedIn</label>
//                   <input
//                     type="url"
//                     name="linkedin"
//                     placeholder="https://linkedin.com/in/yourprofile"
//                     value={formData.linkedin}
//                     onChange={handleChange}
//                     className="new-input-full"
//                   />
//                 </div>

//                 <div>
//                   <label>GitHub</label>
//                   <input
//                     type="url"
//                     name="github"
//                     placeholder="https://github.com/yourusername"
//                     value={formData.github}
//                     onChange={handleChange}
//                     className="new-input-full"
//                   />
//                 </div>

//                 <div>
//                   <label>Portfolio</label>
//                   <input
//                     type="url"
//                     name="portfolio"
//                     placeholder="https://yourportfolio.com"
//                     value={formData.portfolio}
//                     onChange={handleChange}
//                     className="new-input-full"
//                   />
//                 </div>

//                 <div>
//                   <label>Bio</label>
//                   <textarea
//                     name="bio"
//                     placeholder="Tell us about yourself..."
//                     value={formData.bio}
//                     onChange={handleChange}
//                     className="new-input-full"
//                     rows="4"
//                   />
//                 </div>

//                 <div>
//                   <label>Interests *</label>
//                   <input
//                     type="text"
//                     name="interests"
//                     placeholder="e.g. Machine Learning, Web Development, Mobile Apps"
//                     value={formData.interests}
//                     onChange={handleChange}
//                     required
//                     className="new-input-full"
//                   />
//                 </div>

//                 <div>
//                   <label>Career Goal *</label>
//                   <textarea
//                     name="goal"
//                     placeholder="What are your career goals and aspirations?"
//                     value={formData.goal}
//                     onChange={handleChange}
//                     required
//                     className="new-input-full"
//                     rows="3"
//                   />
//                 </div>
//               </div>
//             )}

//             <div className="form-navigation">
//               {step > 1 && (
//                 <button
//                   type="button"
//                   className="new-nav-button back"
//                   onClick={prevStep}
//                 >
//                   ← Back
//                 </button>
//               )}
//               {step < 3 && (
//                 <button
//                   type="button"
//                   className="new-nav-button next"
//                   onClick={nextStep}
//                 >
//                   Next →
//                 </button>
//               )}
//               {step === 3 && (
//                 <button type="submit" className="new-nav-button submit">
//                   Submit Profile ✅
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompleteProfile;

import "./css/CompleteProfile.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompleteProfile = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    profilePhoto: null,
    name: "",
    email: "",
    phoneNumber: "",
    countryCode: "+91", // Set default value to +91
    college: "",
    degree: "",
    graduationYear: "",
    profession: "",
    experience: "",
    skills: "",
    linkedin: "",
    github: "",
    portfolio: "",
    bio: "",
    interests: "",
    goal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, profilePhoto: file }));
  };

  const nextStep = () => {
    const form = document.querySelector("form");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/careers");
  };

  return (
    <div className="profile-detailcard-container">
      <div className="profile-container">
        <div className="profile-form-upper">
          <h2 className="form-heading heading-secondary">
            Complete Your Profile :)
          </h2>
          <p className="icon-paragraph">
            Our platform is designed to support students, professionals, and
            educators by providing high-quality resources and assistance.
          </p>

          <div className="step-progress-container">
            <div className="step-progress">
              <div
                className={`step-item ${step >= 1 ? "active" : ""} ${
                  step > 1 ? "completed" : ""
                }`}
              >
                <div className="step-circle">{step > 1 ? "✓" : "1"}</div>
                <span className="step-label">Personal Info</span>
              </div>
              <div className={`step-line ${step > 1 ? "completed" : ""}`}></div>
              <div
                className={`step-item ${step >= 2 ? "active" : ""} ${
                  step > 2 ? "completed" : ""
                }`}
              >
                <div className="step-circle">{step > 2 ? "✓" : "2"}</div>
                <span className="step-label">Education</span>
              </div>
              <div className={`step-line ${step > 2 ? "completed" : ""}`}></div>
              <div className={`step-item ${step >= 3 ? "active" : ""}`}>
                <div className="step-circle">3</div>
                <span className="step-label">Portfolio</span>
              </div>
            </div>
          </div>

          <form className="profile-form" onSubmit={handleSubmit}>
            <h2 className="form-heading-1">
              <i>
                {step === 1
                  ? "Personal & Contact Info"
                  : step === 2
                  ? "Education & Professional Background"
                  : "Portfolio & Career Personalization"}{" "}
                (Step {step} of 3)
              </i>
            </h2>

            {step === 1 && (
              <div className="new-step-column">
                <div>
                  <label>Profile Photo</label>
                  <input
                    type="file"
                    name="profilePhoto"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="new-input-full"
                    // Removed the disabled attribute to make it optional
                  />
                </div>

                <div>
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="new-input-full"
                  />
                </div>

                <div>
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="new-input-full"
                  />
                </div>

                <div className="new-flex-row">
                  <div className="new-flex-1">
                    <label>Country Code *</label>
                    <input
                      type="text"
                      name="countryCode"
                      placeholder="+91"
                      value={formData.countryCode}
                      onChange={handleChange}
                      required
                      className="new-input-full"
                    />
                  </div>
                  <div className="new-flex-3">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="9876543210"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                      className="new-input-full"
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="new-step-column">
                <div>
                  <label>College *</label>
                  <input
                    type="text"
                    name="college"
                    placeholder="Enter your college/university name"
                    value={formData.college}
                    onChange={handleChange}
                    required
                    className="new-input-full"
                  />
                </div>

                <div>
                  <label>Degree *</label>
                  <input
                    type="text"
                    name="degree"
                    placeholder="e.g. Bachelor of Engineering"
                    value={formData.degree}
                    onChange={handleChange}
                    required
                    className="new-input-full"
                  />
                </div>

                <div>
                  <label>Graduation Year *</label>
                  <input
                    type="number"
                    name="graduationYear"
                    placeholder="e.g. 2024"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    required
                    className="new-input-full"
                  />
                </div>

                <div>
                  <label>Profession *</label>
                  <input
                    type="text"
                    name="profession"
                    placeholder="e.g. Web Developer"
                    value={formData.profession}
                    onChange={handleChange}
                    required
                    className="new-input-full"
                  />
                </div>

                <div>
                  <label>Experience (in years) *</label>
                  <input
                    type="number"
                    name="experience"
                    placeholder="e.g. 2"
                    value={formData.experience}
                    onChange={handleChange}
                    required // Made experience compulsory
                    className="new-input-full"
                  />
                </div>

                <div>
                  <label>Select your primary skill area *</label>
                  <select
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    required
                    className="new-input-full"
                  >
                    <option value="" disabled>
                      Select a skill category
                    </option>
                    <option value="Frontend Development">
                      Frontend Development (HTML, CSS, JS, React)
                    </option>
                    <option value="Backend Development">
                      Backend Development (Node.js, Java, Python)
                    </option>
                    <option value="Full Stack Development">
                      Full Stack Development
                    </option>
                    <option value="Data Structures & Algorithms">
                      Data Structures & Algorithms (DSA)
                    </option>
                    <option value="Data Science & AI/ML">
                      Data Science & AI/ML
                    </option>
                    <option value="Cloud & DevOps">
                      Cloud Computing & DevOps
                    </option>
                    <option value="Cybersecurity & Blockchain">
                      Cybersecurity & Blockchain
                    </option>
                    <option value="Mobile Development">
                      Mobile App Development (Android/iOS)
                    </option>
                    <option value="UI/UX & Design">UI/UX & Design</option>
                    <option value="Game Development">Game Development</option>
                    <option value="Competitive Programming">
                      Competitive Programming
                    </option>
                    <option value="Aptitude & Soft Skills">
                      Aptitude & Soft Skills
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="new-step-column">
                <div>
                  <label>LinkedIn</label>
                  <input
                    type="url"
                    name="linkedin"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="new-input-full"
                  />
                </div>

                <div>
                  <label>GitHub</label>
                  <input
                    type="url"
                    name="github"
                    placeholder="https://github.com/yourusername"
                    value={formData.github}
                    onChange={handleChange}
                    className="new-input-full"
                  />
                </div>

                <div>
                  <label>Portfolio</label>
                  <input
                    type="url"
                    name="portfolio"
                    placeholder="https://yourportfolio.com"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="new-input-full"
                  />
                </div>

                <div>
                  <label>Bio</label>
                  <textarea
                    name="bio"
                    placeholder="Tell us about yourself..."
                    value={formData.bio}
                    onChange={handleChange}
                    className="new-input-full"
                    rows="4"
                  />
                </div>

                <div>
                  <label>Interests</label>
                  <input
                    type="text"
                    name="interests"
                    placeholder="e.g. Machine Learning, Web Development, Mobile Apps"
                    value={formData.interests}
                    onChange={handleChange}
                    className="new-input-full"
                  />
                </div>

                <div>
                  <label>Career Goal</label>
                  <textarea
                    name="goal"
                    placeholder="What are your career goals and aspirations?"
                    value={formData.goal}
                    onChange={handleChange}
                    className="new-input-full"
                    rows="3"
                  />
                </div>
              </div>
            )}

            <div className="form-navigation">
              {step > 1 && (
                <button
                  type="button"
                  className="new-nav-button back"
                  onClick={prevStep}
                >
                  ← Back
                </button>
              )}
              {step < 3 && (
                <button
                  type="button"
                  className="new-nav-button next"
                  onClick={nextStep}
                >
                  Next →
                </button>
              )}
              {step === 3 && (
                <button type="submit" className="new-nav-button submit">
                  Submit Profile ✅
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile;
