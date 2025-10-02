// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./css/ApplyForm.css";
// import "./css/ContactUs.css";
// import "./css/DetailCard.css";
// import data from "./data/datacareers.json";

// const ApplicationForm = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const job = data.find((job) => job.id === parseInt(id));

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phoneCode: "+91",
//     phoneNumber: "",
//     currentPosition: "",
//     graduationDegree: "",
//     graduationYear: "", // Added for graduation year
//     experience: "",
//     noticePeriod: "",
//     currentSalary: "",
//     expectedSalary: "",
//     linkedin: "",
//     portfolio: "",
//     resumeDriveLink: "",
//     coverLetter: "",
//     selectedPosition: "",
//   });

//   const [linkedinError, setLinkedinError] = useState("");
//   const [phoneNumberError, setPhoneNumberError] = useState("");
//   const [coverLetterWordCount, setCoverLetterWordCount] = useState(0);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validatePhoneNumber = (number) => number.length === 10;

//   const validateLinkedIn = (url) => {
//     const regex = /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_.]+\/?$/;
//     return regex.test(url);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "phoneNumber") {
//       setPhoneNumberError(
//         value.length > 10 ? "Phone number must be exactly 10 digits." : ""
//       );
//     }

//     if (name === "linkedin") {
//       setLinkedinError(
//         validateLinkedIn(value)
//           ? ""
//           : "Please enter a valid LinkedIn profile URL."
//       );
//     }

//     if (name === "coverLetter") {
//       const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
//       if (wordCount <= 400) {
//         setFormData({ ...formData, [name]: value });
//         setCoverLetterWordCount(wordCount);
//       }
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     if (!validatePhoneNumber(formData.phoneNumber)) {
//       setPhoneNumberError("Phone number must be exactly 10 digits.");
//       toast.error("❌ Please enter a valid 10-digit phone number.");
//       setIsSubmitting(false);
//       return;
//     }

//     if (linkedinError) {
//       toast.error(`❌ ${linkedinError}`);
//       setIsSubmitting(false);
//       return;
//     }

//     if (coverLetterWordCount > 400) {
//       toast.error("❌ Cover letter must be 400 words or less.");
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       toast.success(
//         `🎉 Your application for ${job?.title} has been submitted successfully! We'll review your application and get back to you soon.`,
//         {
//           autoClose: 6000,
//         }
//       );

//       // Reset form
//       setFormData({
//         fullName: "",
//         email: "",
//         phoneCode: "+91",
//         phoneNumber: "",
//         currentPosition: "",
//         graduationDegree: "",
//         graduationYear: "",
//         experience: "",
//         noticePeriod: "",
//         currentSalary: "",
//         expectedSalary: "",
//         linkedin: "",
//         portfolio: "",
//         resumeDriveLink: "",
//         coverLetter: "",
//         selectedPosition: "",
//       });
//       setCoverLetterWordCount(0);
//       setLinkedinError("");
//       setPhoneNumberError("");
//     } catch (error) {
//       toast.error("❌ Failed to submit application. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (!job) {
//     return (
//       <div
//         style={{
//           backgroundColor: "#F5F7FF",
//           minHeight: "100vh",
//           padding: "2rem",
//         }}
//       >
//         <ToastContainer
//           position="top-right"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="light"
//         />
//         <p className="career-requirements lower">
//           Job not found. Please go back and select a valid job.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div style={{ backgroundColor: "#F5F7FF" }}>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />

//       <div className="detailcard-container">
//         <button
//           className="rater-button self"
//           onClick={() => navigate("/careers")}
//         >
//           Back to Careers ←
//         </button>

//         <div className="apply-form-container">
//           <h2 className="heading-secondary marginbottom">
//             Apply for {job.title}
//           </h2>
//           <p className="paragraph-primary">{job.description}</p>

//           <h5 className="career-requirements lower">Job Details:</h5>
//           <ul className="lower">
//             <li>
//               <strong>Location:</strong> {job.location}
//             </li>
//             <li>
//               <strong>Job Type:</strong> {job.jobType}
//             </li>
//             <li>
//               <strong>Experience Required:</strong> {job.experience}
//             </li>
//             <li>
//               <strong>Salary:</strong> {job.salary}
//             </li>
//             <li>
//               <strong>Application Deadline:</strong> {job.applicationDeadline}
//             </li>
//           </ul>

//           <h5 className="career-requirements lower">Responsibilities:</h5>
//           <ul>
//             {job.responsibilities.map((resp, index) => (
//               <li key={index} className="icon-paragraph">
//                 {resp}
//               </li>
//             ))}
//           </ul>

//           <h5 className="career-requirements lower">Requirements:</h5>
//           <ul>
//             {job.requirements.map((req, index) => (
//               <li key={index} className="icon-paragraph">
//                 {req}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div
//           className="contactus-container contactus-main"
//           style={{ background: "inherit" }}
//         >
//           <div className="container-contactus">
//             <div className="contact-form">
//               <h4>Application Form</h4>
//               <p className="icon-paragraph">
//                 Fill in the details to apply for this position.
//               </p>

//               <form onSubmit={handleSubmit}>
//                 <label>Full Name</label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Enter your full name"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                 />

//                 <label>Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                 />

//                 <label>Phone Code</label>
//                 <input
//                   type="text"
//                   name="phoneCode"
//                   value={formData.phoneCode}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                 />

//                 <label>Phone Number</label>
//                 <input
//                   type="text"
//                   name="phoneNumber"
//                   placeholder="Enter 10-digit phone number"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   maxLength="10"
//                   required
//                   disabled={isSubmitting}
//                 />
//                 {phoneNumberError && (
//                   <p
//                     style={{ color: "red", fontSize: "14px", marginTop: "4px" }}
//                   >
//                     {phoneNumberError}
//                   </p>
//                 )}

//                 <label>Current Position</label>
//                 <input
//                   type="text"
//                   name="currentPosition"
//                   placeholder="Enter your current position"
//                   value={formData.currentPosition}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                 />

//                 <label>Graduation Degree</label>
//                 <input
//                   type="text"
//                   name="graduationDegree"
//                   placeholder="Enter your graduation degree"
//                   value={formData.graduationDegree}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                 />

//                 <label>Graduation Year Passout</label>
//                 <input
//                   type="number"
//                   name="graduationYear"
//                   placeholder="Enter your graduation year"
//                   value={formData.graduationYear}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                 />

//                 <label>Years of Experience</label>
//                 <input
//                   type="number"
//                   name="experience"
//                   placeholder="Years of experience"
//                   value={formData.experience}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                 />

//                 <label>Notice Period (in days)</label>
//                 <input
//                   type="number"
//                   name="noticePeriod"
//                   placeholder="Notice period in days"
//                   value={formData.noticePeriod}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                 />

//                 <label>Current Salary (in INR)</label>
//                 <input
//                   type="number"
//                   name="currentSalary"
//                   placeholder="Current salary in INR"
//                   value={formData.currentSalary}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                 />

//                 <label>Expected Salary (in INR)</label>
//                 <input
//                   type="number"
//                   name="expectedSalary"
//                   placeholder="Expected salary in INR"
//                   value={formData.expectedSalary}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                 />

//                 <label>LinkedIn Profile</label>
//                 <input
//                   type="url"
//                   name="linkedin"
//                   placeholder="LinkedIn profile URL"
//                   value={formData.linkedin}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                 />
//                 {linkedinError && (
//                   <p
//                     style={{ color: "red", fontSize: "14px", marginTop: "4px" }}
//                   >
//                     {linkedinError}
//                   </p>
//                 )}

//                 <label>Portfolio (Optional)</label>
//                 <input
//                   type="url"
//                   name="portfolio"
//                   placeholder="Portfolio or project link"
//                   value={formData.portfolio}
//                   onChange={handleChange}
//                   disabled={isSubmitting}
//                 />

//                 <label>Google Drive Resume Link</label>
//                 <input
//                   type="url"
//                   name="resumeDriveLink"
//                   placeholder="Google Drive link to your resume"
//                   value={formData.resumeDriveLink}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                 />

//                 <label>Select Position</label>
//                 <select
//                   name="selectedPosition"
//                   value={formData.selectedPosition}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                 >
//                   <option value="">Select a position</option>
//                   {data.map((job) => (
//                     <option key={job.id} value={job.title}>
//                       {job.title}
//                     </option>
//                   ))}
//                 </select>

//                 <label>Cover Letter</label>
//                 <textarea
//                   name="coverLetter"
//                   placeholder="Write your cover letter (max 400 words)"
//                   value={formData.coverLetter}
//                   onChange={handleChange}
//                   required
//                   disabled={isSubmitting}
//                 ></textarea>
//                 <div style={{ fontSize: "12px", color: "gray" }}>
//                   {coverLetterWordCount}/400 words
//                 </div>

//                 <button type="submit" disabled={isSubmitting}>
//                   {isSubmitting
//                     ? "Submitting Application..."
//                     : "Submit Application"}
//                 </button>
//               </form>

//               <div className="form-footer">
//                 <p className="privacy-note">
//                   Your information is secure. We respect your privacy and will
//                   only use your details for this application process.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ApplicationForm;

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/ApplyForm.css";
import "./css/ContactUs.css";
import "./css/DetailCard.css";
import data from "./data/datacareers.json";

const ApplicationForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = data.find((job) => job.id === parseInt(id));

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneCode: "+91",
    phoneNumber: "",
    currentPosition: "",
    graduationDegree: "",
    graduationYear: "",
    experience: "",
    noticePeriod: "",
    currentSalary: "",
    expectedSalary: "",
    linkedin: "",
    portfolio: "",
    resumeDriveLink: "",
    coverLetter: "",
    selectedPosition: "",
  });

  const [linkedinError, setLinkedinError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [coverLetterWordCount, setCoverLetterWordCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhoneNumber = (number) => number.length === 10;
  const validateLinkedIn = (url) => {
    const regex = /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_.]+\/?$/;
    return regex.test(url);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      setPhoneNumberError(
        value.length > 10 ? "Phone number must be exactly 10 digits." : ""
      );
    }

    if (name === "linkedin") {
      setLinkedinError(
        validateLinkedIn(value)
          ? ""
          : "Please enter a valid LinkedIn profile URL."
      );
    }

    if (name === "coverLetter") {
      const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
      if (wordCount <= 400) {
        setFormData({ ...formData, [name]: value });
        setCoverLetterWordCount(wordCount);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validatePhoneNumber(formData.phoneNumber)) {
      setPhoneNumberError("Phone number must be exactly 10 digits.");
      toast.error("❌ Please enter a valid 10-digit phone number.");
      setIsSubmitting(false);
      return;
    }

    if (linkedinError) {
      toast.error(`❌ ${linkedinError}`);
      setIsSubmitting(false);
      return;
    }

    if (coverLetterWordCount > 400) {
      toast.error("❌ Cover letter must be 400 words or less.");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/unisire.mainhub@gmail.com", // ✅ FormSubmit endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: `💼 Job Application for ${
              formData.selectedPosition || job?.title
            }`,
          }),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success(
          `🎉 Your application for ${job?.title} has been submitted successfully! We'll review your application and get back to you soon.`,
          { autoClose: 6000 }
        );

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phoneCode: "+91",
          phoneNumber: "",
          currentPosition: "",
          graduationDegree: "",
          graduationYear: "",
          experience: "",
          noticePeriod: "",
          currentSalary: "",
          expectedSalary: "",
          linkedin: "",
          portfolio: "",
          resumeDriveLink: "",
          coverLetter: "",
          selectedPosition: "",
        });
        setCoverLetterWordCount(0);
        setLinkedinError("");
        setPhoneNumberError("");
      } else {
        toast.error("❌ Failed to submit application. Please try again later.");
      }
    } catch (error) {
      toast.error("⚠️ Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!job) {
    return (
      <div
        style={{
          backgroundColor: "#F5F7FF",
          minHeight: "100vh",
          padding: "2rem",
        }}
      >
        <ToastContainer position="top-right" autoClose={5000} theme="light" />
        <p className="career-requirements lower">
          Job not found. Please go back and select a valid job.
        </p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#F5F7FF" }}>
      <ToastContainer position="top-right" autoClose={5000} theme="light" />

      <div className="detailcard-container">
        <button
          className="rater-button self"
          onClick={() => navigate("/careers")}
        >
          Back to Careers ←
        </button>

        <div className="apply-form-container">
          <h2 className="heading-secondary marginbottom">
            Apply for {job.title}
          </h2>
          <p className="paragraph-primary">{job.description}</p>

          <h5 className="career-requirements lower">Job Details:</h5>
          <ul className="lower">
            <li>
              <strong>Location:</strong> {job.location}
            </li>
            <li>
              <strong>Job Type:</strong> {job.jobType}
            </li>
            <li>
              <strong>Experience Required:</strong> {job.experience}
            </li>
            <li>
              <strong>Salary:</strong> {job.salary}
            </li>
            <li>
              <strong>Application Deadline:</strong> {job.applicationDeadline}
            </li>
          </ul>

          <h5 className="career-requirements lower">Responsibilities:</h5>
          <ul>
            {job.responsibilities.map((resp, index) => (
              <li key={index} className="icon-paragraph">
                {resp}
              </li>
            ))}
          </ul>

          <h5 className="career-requirements lower">Requirements:</h5>
          <ul>
            {job.requirements.map((req, index) => (
              <li key={index} className="icon-paragraph">
                {req}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="contactus-container contactus-main"
          style={{ background: "inherit" }}
        >
          <div className="container-contactus">
            <div className="contact-form">
              <h4>Application Form</h4>
              <p className="icon-paragraph">
                Fill in the details to apply for this position.
              </p>

              <form onSubmit={handleSubmit}>
                {/* --- Form Fields --- */}
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />

                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />

                <label>Phone Code</label>
                <input
                  type="text"
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />

                <label>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Enter 10-digit phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  maxLength="10"
                  required
                  disabled={isSubmitting}
                />
                {phoneNumberError && (
                  <p
                    style={{ color: "red", fontSize: "14px", marginTop: "4px" }}
                  >
                    {phoneNumberError}
                  </p>
                )}

                <label>Current Position</label>
                <input
                  type="text"
                  name="currentPosition"
                  placeholder="Enter your current position"
                  value={formData.currentPosition}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />

                <label>Graduation Degree</label>
                <input
                  type="text"
                  name="graduationDegree"
                  placeholder="Enter your graduation degree"
                  value={formData.graduationDegree}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />

                <label>Graduation Year Passout</label>
                <input
                  type="number"
                  name="graduationYear"
                  placeholder="Enter your graduation year"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />

                <label>Years of Experience</label>
                <input
                  type="number"
                  name="experience"
                  placeholder="Years of experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />

                <label>Notice Period (in days)</label>
                <input
                  type="number"
                  name="noticePeriod"
                  placeholder="Notice period in days"
                  value={formData.noticePeriod}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />

                <label>Current Salary (in INR)</label>
                <input
                  type="number"
                  name="currentSalary"
                  placeholder="Current salary in INR"
                  value={formData.currentSalary}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />

                <label>Expected Salary (in INR)</label>
                <input
                  type="number"
                  name="expectedSalary"
                  placeholder="Expected salary in INR"
                  value={formData.expectedSalary}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />

                <label>LinkedIn Profile</label>
                <input
                  type="url"
                  name="linkedin"
                  placeholder="LinkedIn profile URL"
                  value={formData.linkedin}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                {linkedinError && (
                  <p
                    style={{ color: "red", fontSize: "14px", marginTop: "4px" }}
                  >
                    {linkedinError}
                  </p>
                )}

                <label>Portfolio (Optional)</label>
                <input
                  type="url"
                  name="portfolio"
                  placeholder="Portfolio or project link"
                  value={formData.portfolio}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />

                <label>Google Drive Resume Link</label>
                <input
                  type="url"
                  name="resumeDriveLink"
                  placeholder="Google Drive link to your resume"
                  value={formData.resumeDriveLink}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />

                <label>Select Position</label>
                <select
                  name="selectedPosition"
                  value={formData.selectedPosition}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select a position</option>
                  {data.map((job) => (
                    <option key={job.id} value={job.title}>
                      {job.title}
                    </option>
                  ))}
                </select>

                <label>Cover Letter</label>
                <textarea
                  name="coverLetter"
                  placeholder="Write your cover letter (max 400 words)"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                ></textarea>
                <div style={{ fontSize: "12px", color: "gray" }}>
                  {coverLetterWordCount}/400 words
                </div>

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting
                    ? "Submitting Application..."
                    : "Submit Application"}
                </button>
              </form>

              <div className="form-footer">
                <p className="privacy-note">
                  Your information is secure. We respect your privacy and will
                  only use your details for this application process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
