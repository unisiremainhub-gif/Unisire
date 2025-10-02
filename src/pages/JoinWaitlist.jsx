// // import React, { useState, useEffect } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import "./css/ApplyForm.css";
// // import "./css/ContactUs.css";
// // import "./css/DetailCard.css";
// // import events from "../pages/data/datajoinwaitlist.json"; // JSON import
// // import { FaCrown, FaTag } from "react-icons/fa";

// // const JoinWaitlist = () => {
// //   const { id } = useParams();
// //   const navigate = useNavigate();

// //   const feature = events.find((item) => item.id === parseInt(id));

// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     interestedFeature: feature ? feature.title : "",
// //   });

// //   const [emailError, setEmailError] = useState("");

// //   const validateEmail = (email) => {
// //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     return regex.test(email);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

// //     if (name === "email") {
// //       setFormData({ ...formData, [name]: value });
// //       setEmailError(
// //         value && !validateEmail(value)
// //           ? "Please enter a valid email address."
// //           : ""
// //       );
// //     } else {
// //       setFormData({ ...formData, [name]: value });
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (!validateEmail(formData.email)) {
// //       setEmailError("Please enter a valid email address.");
// //       return;
// //     }

// //     if (emailError) {
// //       alert(emailError);
// //       return;
// //     }

// //     alert(
// //       `Thank you ${formData.fullName}! 🎉 You have successfully joined the waitlist for ${feature?.title}.`
// //     );

// //     // Reset form
// //     setFormData({
// //       fullName: "",
// //       email: "",
// //       interestedFeature: feature ? feature.title : "",
// //     });
// //   };

// //   if (!feature) {
// //     return (
// //       <p className="career-requirements lower">
// //         Feature not found. Please go back and select a valid feature.
// //       </p>
// //     );
// //   }

// //   return (
// //     <div style={{ overflow: "hidden", backgroundColor: "#F5F7FF" }}>
// //       <div className="geometric-shape-custom triangle-custom"></div>
// //       <div className="decorative-shape shape-contact-2"></div>

// //       <div className="detailcard-container" style={{ gap: "20px" }}>
// //         <button
// //           className="rater-button self"
// //           onClick={() => navigate("/Upcoming")}
// //         >
// //           ← Back to Upcoming Features
// //         </button>

// //         {/* Feature Details */}
// //         <div className="apply-form-container">
// //           <div style={{ position: "relative" }}>
// //             <h2
// //               className="heading-secondary marginbottom"
// //               style={{ marginBottom: "1.5rem" }}
// //             >
// //               Join the Waitlist of {feature.title} 🚀
// //             </h2>

// //             {/* Free/Premium Tag */}
// //             {/* <div
// //               className="reaction-section"
// //               style={{
// //                 marginBottom: "2rem",
// //                 display: "flex",
// //                 justifyContent: "center",
// //                 gap: "15px",
// //               }}
// //             >
// //               <div className={`type-tag ${feature.tag}`} style={{}}>
// //                 {feature.tag === "premium" ? (
// //                   <>
// //                     <FaCrown /> Premium
// //                   </>
// //                 ) : (
// //                   <>
// //                     <FaTag /> Free
// //                   </>
// //                 )}
// //               </div>
// //             </div> */}
// //           </div>

// //           <p className="paragraph-primary" style={{ marginBottom: "2rem" }}>
// //             Be the first to experience our upcoming platform! Fill in your
// //             details and we'll notify you as soon as we launch.{" "}
// //             {feature.description}
// //           </p>

// //           <h5 className="career-requirements lower">Feature Details:</h5>
// //           <p className="lower">
// //             <strong>Date:</strong> {feature.date} | <strong>Type:</strong>{" "}
// //             {feature.type} | <strong>Category:</strong> {feature.category} |{" "}
// //             <strong>Waitlist:</strong> {feature.waitlist} |{" "}
// //             <strong>Status:</strong> {feature.status}
// //           </p>

// //           <h5 className="career-requirements lower">Key Points:</h5>
// //           <ul>
// //             {feature.points.map((point, index) => (
// //               <li key={index} className="icon-paragraph">
// //                 {point}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Form Section */}
// //         <div
// //           className="contactus-container contactus-main"
// //           style={{ background: "inherit" }}
// //         >
// //           <div className="container-contactus">
// //             <div className="contact-form">
// //               <h4>Waitlist Form</h4>
// //               <p className="icon-paragraph">
// //                 Enter your details to reserve your early access spot.
// //               </p>

// //               <form onSubmit={handleSubmit}>
// //                 <label>Full Name</label>
// //                 <input
// //                   type="text"
// //                   name="fullName"
// //                   placeholder="Enter your full name"
// //                   value={formData.fullName}
// //                   onChange={handleChange}
// //                   required
// //                 />

// //                 <label>Email</label>
// //                 <input
// //                   type="email"
// //                   name="email"
// //                   placeholder="Enter your email address"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                   required
// //                 />
// //                 {emailError && (
// //                   <p
// //                     style={{ color: "red", fontSize: "14px", marginTop: "4px" }}
// //                   >
// //                     {emailError}
// //                   </p>
// //                 )}

// //                 <label>Interested Feature</label>
// //                 <input
// //                   type="text"
// //                   name="interestedFeature"
// //                   value={formData.interestedFeature}
// //                   readOnly
// //                   style={{ background: "#f5f5f5", cursor: "not-allowed" }}
// //                 />

// //                 <button type="submit">Join Waitlist</button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default JoinWaitlist;

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./css/ApplyForm.css";
// import "./css/ContactUs.css";
// import "./css/DetailCard.css";
// import events from "../pages/data/datajoinwaitlist.json"; // JSON import
// import { FaCrown, FaTag } from "react-icons/fa";

// const JoinWaitlist = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const feature = events.find((item) => item.id === parseInt(id));

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     interestedFeature: feature ? feature.title : "",
//   });

//   const [emailError, setEmailError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validateEmail = (email) => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "email") {
//       setFormData({ ...formData, [name]: value });
//       setEmailError(
//         value && !validateEmail(value)
//           ? "Please enter a valid email address."
//           : ""
//       );
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateEmail(formData.email)) {
//       setEmailError("Please enter a valid email address.");
//       toast.error("❌ Please enter a valid email address before submitting.");
//       return;
//     }

//     if (emailError) {
//       toast.error(`❌ ${emailError}`);
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Success notification
//       toast.success(
//         `🎉 Thank you ${formData.fullName}! You have successfully joined the waitlist for ${feature?.title}. We'll notify you as soon as it launches!`,
//         {
//           autoClose: 6000,
//         }
//       );

//       // Reset form
//       setFormData({
//         fullName: "",
//         email: "",
//         interestedFeature: feature ? feature.title : "",
//       });
//       setEmailError("");
//     } catch (error) {
//       // Error notification
//       toast.error("❌ Failed to join waitlist. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleCancel = () => {
//     toast.info(
//       "👋 No problem! You can join the waitlist anytime before the launch."
//     );
//     setFormData({
//       fullName: "",
//       email: "",
//       interestedFeature: feature ? feature.title : "",
//     });
//     setEmailError("");
//   };

//   if (!feature) {
//     return (
//       <div style={{ overflow: "hidden", backgroundColor: "#F5F7FF" }}>
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
//         <p
//           className="career-requirements lower"
//           style={{ textAlign: "center", padding: "2rem" }}
//         >
//           Feature not found. Please go back and select a valid feature.
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div style={{ overflow: "hidden", backgroundColor: "#F5F7FF" }}>
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

//       <div className="geometric-shape-custom triangle-custom"></div>
//       <div className="decorative-shape shape-contact-2"></div>

//       <div className="detailcard-container" style={{ gap: "20px" }}>
//         <button
//           className="rater-button self"
//           onClick={() => navigate("/Upcoming")}
//           style={{ marginBottom: "1rem" }}
//         >
//           ← Back to Upcoming Features
//         </button>

//         {/* Feature Details */}
//         <div className="apply-form-container">
//           <div style={{ position: "relative" }}>
//             <h2
//               className="heading-secondary marginbottom"
//               style={{ marginBottom: "1.5rem" }}
//             >
//               Join the Waitlist for {feature.title} 🚀
//             </h2>

//             {/* Free/Premium Tag - Uncomment if needed */}
//             {/* <div
//               className="reaction-section"
//               style={{
//                 marginBottom: "2rem",
//                 display: "flex",
//                 justifyContent: "center",
//                 gap: "15px",
//               }}
//             >
//               <div className={`type-tag ${feature.tag}`} style={{}}>
//                 {feature.tag === "premium" ? (
//                   <>
//                     <FaCrown /> Premium
//                   </>
//                 ) : (
//                   <>
//                     <FaTag /> Free
//                   </>
//                 )}
//               </div>
//             </div> */}
//           </div>

//           <p className="paragraph-primary" style={{ marginBottom: "2rem" }}>
//             Be the first to experience <strong>{feature.title}</strong>! Fill in
//             your details and we'll notify you as soon as we launch.{" "}
//             {feature.description}
//           </p>

//           <div className="feature-details-section">
//             <h5 className="career-requirements lower">Feature Details:</h5>
//             <p className="lower">
//               <strong>Launch Date:</strong> {feature.date} |{" "}
//               <strong>Type:</strong> {feature.type} | <strong>Category:</strong>{" "}
//               {feature.category} | <strong>Waitlist Count:</strong>{" "}
//               {feature.waitlist} | <strong>Status:</strong>{" "}
//               <span
//                 className={`status-${feature.status.toLowerCase()}`}
//                 style={{ fontSize: "2rem" }}
//               >
//                 {feature.status}
//               </span>
//             </p>

//             <h5 className="career-requirements lower">Key Benefits:</h5>
//             <ul>
//               {feature.points.map((point, index) => (
//                 <li key={index} className="icon-paragraph">
//                   {point}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Form Section */}
//         <div
//           className="contactus-container contactus-main"
//           style={{ background: "inherit" }}
//         >
//           <div className="container-contactus">
//             <div className="contact-form">
//               <div className="form-header">
//                 <h4>🎯 Secure Your Spot</h4>
//                 <p className="icon-paragraph">
//                   Join the exclusive waitlist for early access to{" "}
//                   <strong>{feature.title}</strong>. Limited spots available!
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label>Full Name *</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     placeholder="Enter your full name"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                     disabled={isSubmitting}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>Email Address *</label>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Enter your email address"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     disabled={isSubmitting}
//                   />
//                   {emailError && <p className="error-message">{emailError}</p>}
//                 </div>

//                 <div className="form-group">
//                   <label>Feature You're Joining</label>
//                   <input
//                     type="text"
//                     name="interestedFeature"
//                     value={formData.interestedFeature}
//                     readOnly
//                     className="readonly-input"
//                   />
//                 </div>

//                 <div className="form-buttons">
//                   <button
//                     type="submit"
//                     className="submit-button"
//                     disabled={
//                       isSubmitting ||
//                       !formData.fullName ||
//                       !formData.email ||
//                       emailError
//                     }
//                   >
//                     {isSubmitting
//                       ? "Joining Waitlist..."
//                       : "Join Waitlist Now 🚀"}
//                   </button>

//                   <button
//                     type="button"
//                     className="cancel-button"
//                     onClick={handleCancel}
//                     disabled={isSubmitting}
//                   >
//                     Maybe Later
//                   </button>
//                 </div>

//                 <div className="form-footer">
//                   <p className="privacy-note">
//                     🔒 Your information is secure. We respect your privacy and
//                     will only use your email to notify you about this feature
//                     launch.
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JoinWaitlist;

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/ApplyForm.css";
import "./css/ContactUs.css";
import "./css/DetailCard.css";
import events from "../pages/data/datajoinwaitlist.json"; // JSON import
import { FaCrown, FaTag } from "react-icons/fa";

const JoinWaitlist = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const feature = events.find((item) => item.id === parseInt(id));

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    interestedFeature: feature ? feature.title : "",
  });

  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setFormData({ ...formData, [name]: value });
      setEmailError(
        value && !validateEmail(value)
          ? "Please enter a valid email address."
          : ""
      );
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email address.");
      toast.error("❌ Please enter a valid email address before submitting.");
      return;
    }

    if (emailError) {
      toast.error(`❌ ${emailError}`);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/unisire.mainhub@gmail.com", // ✅ your FormSubmit endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            interestedFeature: formData.interestedFeature,
            _subject: `🚀 New Waitlist Signup for ${formData.interestedFeature}`,
          }),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success(
          `🎉 Thank you ${formData.fullName}! You have successfully joined the waitlist for ${feature?.title}. We'll notify you as soon as it launches!`,
          {
            autoClose: 6000,
          }
        );

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          interestedFeature: feature ? feature.title : "",
        });
        setEmailError("");
      } else {
        toast.error("❌ Failed to join waitlist. Please try again later.");
      }
    } catch (error) {
      toast.error("⚠️ Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    toast.info(
      "👋 No problem! You can join the waitlist anytime before the launch."
    );
    setFormData({
      fullName: "",
      email: "",
      interestedFeature: feature ? feature.title : "",
    });
    setEmailError("");
  };

  if (!feature) {
    return (
      <div style={{ overflow: "hidden", backgroundColor: "#F5F7FF" }}>
        <ToastContainer position="top-right" autoClose={5000} theme="light" />
        <p
          className="career-requirements lower"
          style={{ textAlign: "center", padding: "2rem" }}
        >
          Feature not found. Please go back and select a valid feature.
        </p>
      </div>
    );
  }

  return (
    <div style={{ overflow: "hidden", backgroundColor: "#F5F7FF" }}>
      <ToastContainer position="top-right" autoClose={5000} theme="light" />

      <div className="geometric-shape-custom triangle-custom"></div>
      <div className="decorative-shape shape-contact-2"></div>

      <div className="detailcard-container" style={{ gap: "20px" }}>
        <button
          className="rater-button self"
          onClick={() => navigate("/Upcoming")}
          style={{ marginBottom: "1rem" }}
        >
          ← Back to Upcoming Features
        </button>

        {/* Feature Details */}
        <div className="apply-form-container">
          <div style={{ position: "relative" }}>
            <h2
              className="heading-secondary marginbottom"
              style={{ marginBottom: "1.5rem" }}
            >
              Join the Waitlist for {feature.title} 🚀
            </h2>
          </div>

          <p className="paragraph-primary" style={{ marginBottom: "2rem" }}>
            Be the first to experience <strong>{feature.title}</strong>! Fill in
            your details and we'll notify you as soon as we launch.{" "}
            {feature.description}
          </p>

          <div className="feature-details-section">
            <h5 className="career-requirements lower">Feature Details:</h5>
            <p className="lower">
              <strong>Launch Date:</strong> {feature.date} |{" "}
              <strong>Type:</strong> {feature.type} | <strong>Category:</strong>{" "}
              {feature.category} | <strong>Waitlist Count:</strong>{" "}
              {feature.waitlist} | <strong>Status:</strong>{" "}
              <span
                className={`status-${feature.status.toLowerCase()}`}
                style={{ fontSize: "2rem" }}
              >
                {feature.status}
              </span>
            </p>

            <h5 className="career-requirements lower">Key Benefits:</h5>
            <ul>
              {feature.points.map((point, index) => (
                <li key={index} className="icon-paragraph">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form Section */}
        <div
          className="contactus-container contactus-main"
          style={{ background: "inherit" }}
        >
          <div className="container-contactus">
            <div className="contact-form">
              <div className="form-header">
                <h4>🎯 Secure Your Spot</h4>
                <p className="icon-paragraph">
                  Join the exclusive waitlist for early access to{" "}
                  <strong>{feature.title}</strong>. Limited spots available!
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                  {emailError && <p className="error-message">{emailError}</p>}
                </div>

                <div className="form-group">
                  <label>Feature You're Joining</label>
                  <input
                    type="text"
                    name="interestedFeature"
                    value={formData.interestedFeature}
                    readOnly
                    className="readonly-input"
                  />
                </div>

                <div className="form-buttons">
                  <button
                    type="submit"
                    className="submit-button"
                    disabled={
                      isSubmitting ||
                      !formData.fullName ||
                      !formData.email ||
                      emailError
                    }
                  >
                    {isSubmitting
                      ? "Joining Waitlist..."
                      : "Join Waitlist Now 🚀"}
                  </button>

                  {/* <button
                    type="button"
                    className="cancel-button"
                    onClick={handleCancel}
                    disabled={isSubmitting}
                  >
                    Maybe Later
                  </button> */}
                </div>

                <div className="form-footer">
                  <p className="privacy-note">
                    🔒 Your information is secure. We respect your privacy and
                    will only use your email to notify you about this feature
                    launch.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinWaitlist;
