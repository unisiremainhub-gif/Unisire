// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ShareYourExperience = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     position: "",
//     linkedin: "",
//     rating: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({ linkedin: "", email: "" });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   const validateLinkedInUrl = (url) =>
//     !url ||
//     /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_.]+\/?$/.test(url);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     if (name === "linkedin") {
//       setErrors({
//         ...errors,
//         linkedin: validateLinkedInUrl(value)
//           ? ""
//           : "Please enter a valid LinkedIn profile URL",
//       });
//     }

//     if (name === "email") {
//       setErrors({
//         ...errors,
//         email: validateEmail(value) ? "" : "Please enter a valid email address",
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let valid = true;
//     const newErrors = { ...errors };

//     if (!validateEmail(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//       valid = false;
//     }

//     if (formData.linkedin && !validateLinkedInUrl(formData.linkedin)) {
//       newErrors.linkedin = "Please enter a valid LinkedIn profile URL";
//       valid = false;
//     }

//     setErrors(newErrors);
//     if (!valid) {
//       toast.error("❌ Please fix the errors before submitting.");
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Success notification
//       toast.success(
//         "🌟 Thank you for sharing your valuable experience! Your feedback helps us improve."
//       );

//       // Reset form
//       setFormData({
//         name: "",
//         email: "",
//         position: "",
//         linkedin: "",
//         rating: "",
//         message: "",
//       });
//       setErrors({ linkedin: "", email: "" });
//     } catch (error) {
//       // Error notification
//       toast.error(
//         "❌ Failed to submit your experience. Please try again later."
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleCancel = () => {
//     toast.info(
//       "💭 No problem! Feel free to share your experience whenever you're ready."
//     );
//     setFormData({
//       name: "",
//       email: "",
//       position: "",
//       linkedin: "",
//       rating: "",
//       message: "",
//     });
//     setErrors({ linkedin: "", email: "" });
//   };

//   return (
//     <div className="form-container form-container-community">
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

//       <h2>Share Your Experience</h2>
//       <form className="community-form" onSubmit={handleSubmit}>
//         <p className="newsletter-description">
//           Your journey matters! Share your experience to help others learn from
//           your insights and inspire the community with your story.
//         </p>

//         <div className="form-group">
//           <label>Full Name:</label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter your full name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Email Address:</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email address"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           {errors.email && <p className="error-message">{errors.email}</p>}
//         </div>

//         <div className="form-group">
//           <label>Current Position/Role:</label>
//           <input
//             type="text"
//             name="position"
//             placeholder="e.g., Software Engineer, Product Manager, Student, etc."
//             value={formData.position}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>LinkedIn Profile (optional):</label>
//           <input
//             type="url"
//             name="linkedin"
//             placeholder="https://www.linkedin.com/in/your-profile"
//             value={formData.linkedin}
//             onChange={handleChange}
//           />
//           {errors.linkedin && (
//             <p className="error-message">{errors.linkedin}</p>
//           )}
//         </div>

//         <div className="form-group">
//           <label>Overall Rating:</label>
//           <select
//             name="rating"
//             value={formData.rating}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select your rating</option>
//             <option value="5">⭐️⭐️⭐️⭐️⭐️ - Excellent</option>
//             <option value="4">⭐️⭐️⭐️⭐️ - Very Good</option>
//             <option value="3">⭐️⭐️⭐️ - Good</option>
//             <option value="2">⭐️⭐️ - Fair</option>
//             <option value="1">⭐️ - Poor</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Your Experience & Feedback:</label>
//           <textarea
//             name="message"
//             placeholder="Share your story, insights, challenges, successes, or any advice you have for others..."
//             value={formData.message}
//             onChange={handleChange}
//             required
//             rows={6}
//           ></textarea>
//         </div>

//         <div className="form-buttons">
//           <button
//             type="submit"
//             className="submit-button"
//             disabled={
//               isSubmitting ||
//               !formData.name ||
//               !formData.email ||
//               !formData.position ||
//               !formData.rating ||
//               !formData.message ||
//               errors.email ||
//               errors.linkedin
//             }
//           >
//             {isSubmitting
//               ? "Sharing Your Experience..."
//               : "Share Your Experience"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ShareYourExperience;

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShareYourExperience = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    linkedin: "",
    rating: "",
    message: "",
  });
  const [errors, setErrors] = useState({ linkedin: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateLinkedInUrl = (url) =>
    !url ||
    /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_.]+\/?$/.test(url);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "linkedin") {
      setErrors({
        ...errors,
        linkedin: validateLinkedInUrl(value)
          ? ""
          : "Please enter a valid LinkedIn profile URL",
      });
    }

    if (name === "email") {
      setErrors({
        ...errors,
        email: validateEmail(value) ? "" : "Please enter a valid email address",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    const newErrors = { ...errors };

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    if (formData.linkedin && !validateLinkedInUrl(formData.linkedin)) {
      newErrors.linkedin = "Please enter a valid LinkedIn profile URL";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) {
      toast.error("❌ Please fix the errors before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/unisire.mainhub@gmail.com", // ✅ FormSubmit Gmail endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            position: formData.position,
            linkedin: formData.linkedin,
            rating: formData.rating,
            message: formData.message,
            _subject: "🌟 New Experience Shared!",
          }),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success(
          "🌟 Thank you for sharing your valuable experience! Your feedback helps us improve."
        );

        setFormData({
          name: "",
          email: "",
          position: "",
          linkedin: "",
          rating: "",
          message: "",
        });
        setErrors({ linkedin: "", email: "" });
      } else {
        toast.error("❌ Failed to submit your experience. Please try again.");
      }
    } catch (error) {
      toast.error("⚠️ Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container form-container-community">
      <ToastContainer position="top-right" autoClose={5000} theme="light" />

      <h2>Share Your Experience</h2>
      <form className="community-form" onSubmit={handleSubmit}>
        <p className="newsletter-description">
          Your journey matters! Share your experience to help others learn from
          your insights and inspire the community with your story.
        </p>

        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Current Position/Role:</label>
          <input
            type="text"
            name="position"
            placeholder="e.g., Software Engineer, Product Manager, Student, etc."
            value={formData.position}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>LinkedIn Profile (optional):</label>
          <input
            type="url"
            name="linkedin"
            placeholder="https://www.linkedin.com/in/your-profile"
            value={formData.linkedin}
            onChange={handleChange}
          />
          {errors.linkedin && (
            <p className="error-message">{errors.linkedin}</p>
          )}
        </div>

        <div className="form-group">
          <label>Overall Rating:</label>
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value="">Select your rating</option>
            <option value="5">⭐️⭐️⭐️⭐️⭐️ - Excellent</option>
            <option value="4">⭐️⭐️⭐️⭐️ - Very Good</option>
            <option value="3">⭐️⭐️⭐️ - Good</option>
            <option value="2">⭐️⭐️ - Fair</option>
            <option value="1">⭐️ - Poor</option>
          </select>
        </div>

        <div className="form-group">
          <label>Your Experience & Feedback:</label>
          <textarea
            name="message"
            placeholder="Share your story, insights, challenges, successes, or any advice you have for others..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
          ></textarea>
        </div>

        <div className="form-buttons">
          <button
            type="submit"
            className="submit-button"
            disabled={
              isSubmitting ||
              !formData.name ||
              !formData.email ||
              !formData.position ||
              !formData.rating ||
              !formData.message ||
              errors.email ||
              errors.linkedin
            }
          >
            {isSubmitting
              ? "Sharing Your Experience..."
              : "Share Your Experience"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShareYourExperience;
