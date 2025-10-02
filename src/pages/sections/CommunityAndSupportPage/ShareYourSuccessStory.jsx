// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ShareYourSuccessStory = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     linkedin: "",
//     successStory: "",
//   });
//   const [wordCount, setWordCount] = useState(0);
//   const [linkedinError, setLinkedinError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const isValidLinkedIn = (url) =>
//     /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_.]+\/?$/.test(url);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "successStory") {
//       const words = value.trim().split(/\s+/);
//       const count = value.trim() === "" ? 0 : words.length;
//       if (count <= 100) {
//         setFormData({ ...formData, [name]: value });
//         setWordCount(count);
//       }
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }

//     if (name === "linkedin") {
//       setLinkedinError(
//         value === "" || isValidLinkedIn(value)
//           ? ""
//           : "Please enter a valid LinkedIn profile URL."
//       );
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!isValidLinkedIn(formData.linkedin)) {
//       setLinkedinError("Please enter a valid LinkedIn profile URL.");
//       toast.error("❌ Please provide a valid LinkedIn URL before submitting.");
//       return;
//     }

//     if (wordCount > 100) {
//       toast.error("Success story must be less than 100 words.");
//       return;
//     }

//     if (wordCount < 20) {
//       toast.warning(
//         "📝 Please share more details about your success story (minimum 20 words recommended)."
//       );
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Success notification
//       toast.success(
//         "🎉 Thank you for sharing your inspiring success story! Your journey will motivate others in our community."
//       );

//       // Reset form
//       setFormData({
//         fullName: "",
//         email: "",
//         linkedin: "",
//         successStory: "",
//       });
//       setWordCount(0);
//       setLinkedinError("");
//     } catch (error) {
//       // Error notification
//       toast.error(
//         "❌ Failed to submit your success story. Please try again later."
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleCancel = () => {
//     toast.info(
//       "🌟 We'd love to hear your story when you're ready! Your success can inspire others."
//     );
//     setFormData({
//       fullName: "",
//       email: "",
//       linkedin: "",
//       successStory: "",
//     });
//     setWordCount(0);
//     setLinkedinError("");
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

//       <h2>Share Your Success Story</h2>
//       <form className="community-form" onSubmit={handleSubmit}>
//         <p className="newsletter-description">
//           Inspire our community by sharing your journey! Your success story can
//           motivate others and help them learn from your experiences and
//           achievements.
//         </p>

//         <div className="form-group">
//           <label>Full Name:</label>
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Enter your full name"
//             value={formData.fullName}
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
//         </div>

//         <div className="form-group">
//           <label>LinkedIn Profile:</label>
//           <input
//             type="url"
//             name="linkedin"
//             placeholder="https://www.linkedin.com/in/your-profile"
//             value={formData.linkedin}
//             onChange={handleChange}
//             required
//           />
//           {linkedinError && <p className="error-message">{linkedinError}</p>}
//         </div>

//         <div className="form-group">
//           <label>Your Success Story:</label>
//           <div className="relative">
//             <textarea
//               name="successStory"
//               placeholder="Share your inspiring journey... What challenges did you overcome? What helped you succeed? What lessons did you learn? Your story could inspire someone today!"
//               value={formData.successStory}
//               onChange={handleChange}
//               required
//               rows={6}
//             ></textarea>
//             <div className={`word-count ${wordCount > 100 ? "error" : ""}`}>
//               {wordCount}/100 words{" "}
//               {wordCount < 20 && wordCount > 0 && "(minimum 20 recommended)"}
//             </div>
//           </div>
//         </div>

//         <div className="form-buttons">
//           <button
//             type="submit"
//             className="submit-button"
//             disabled={
//               isSubmitting ||
//               linkedinError ||
//               wordCount > 100 ||
//               wordCount < 1 ||
//               !formData.fullName ||
//               !formData.email ||
//               !formData.linkedin ||
//               !formData.successStory
//             }
//           >
//             {isSubmitting ? "Sharing Your Story..." : "Share Success Story"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ShareYourSuccessStory;

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShareYourSuccessStory = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    linkedin: "",
    successStory: "",
  });
  const [wordCount, setWordCount] = useState(0);
  const [linkedinError, setLinkedinError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidLinkedIn = (url) =>
    /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_.]+\/?$/.test(url);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "successStory") {
      const words = value.trim().split(/\s+/);
      const count = value.trim() === "" ? 0 : words.length;
      if (count <= 100) {
        setFormData({ ...formData, [name]: value });
        setWordCount(count);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (name === "linkedin") {
      setLinkedinError(
        value === "" || isValidLinkedIn(value)
          ? ""
          : "Please enter a valid LinkedIn profile URL."
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidLinkedIn(formData.linkedin)) {
      setLinkedinError("Please enter a valid LinkedIn profile URL.");
      toast.error("❌ Please provide a valid LinkedIn URL before submitting.");
      return;
    }

    if (wordCount > 100) {
      toast.error("Success story must be less than 100 words.");
      return;
    }

    if (wordCount < 20) {
      toast.warning(
        "📝 Please share more details about your success story (minimum 20 words recommended)."
      );
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
            fullName: formData.fullName,
            email: formData.email,
            linkedin: formData.linkedin,
            successStory: formData.successStory,
            _subject: "🎉 New Success Story Submitted!",
          }),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success(
          "🎉 Thank you for sharing your inspiring success story! Your journey will motivate others in our community."
        );

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          linkedin: "",
          successStory: "",
        });
        setWordCount(0);
        setLinkedinError("");
      } else {
        toast.error(
          "❌ Failed to submit your success story. Please try again."
        );
      }
    } catch (error) {
      toast.error("⚠️ Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    toast.info(
      "🌟 We'd love to hear your story when you're ready! Your success can inspire others."
    );
    setFormData({
      fullName: "",
      email: "",
      linkedin: "",
      successStory: "",
    });
    setWordCount(0);
    setLinkedinError("");
  };

  return (
    <div className="form-container form-container-community">
      <ToastContainer position="top-right" autoClose={5000} theme="light" />

      <h2>Share Your Success Story</h2>
      <form className="community-form" onSubmit={handleSubmit}>
        <p className="newsletter-description">
          Inspire our community by sharing your journey! Your success story can
          motivate others and help them learn from your experiences and
          achievements.
        </p>

        <div className="form-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
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
        </div>

        <div className="form-group">
          <label>LinkedIn Profile:</label>
          <input
            type="url"
            name="linkedin"
            placeholder="https://www.linkedin.com/in/your-profile"
            value={formData.linkedin}
            onChange={handleChange}
            required
          />
          {linkedinError && <p className="error-message">{linkedinError}</p>}
        </div>

        <div className="form-group">
          <label>Your Success Story:</label>
          <div className="relative">
            <textarea
              name="successStory"
              placeholder="Share your inspiring journey... What challenges did you overcome? What helped you succeed? What lessons did you learn? Your story could inspire someone today!"
              value={formData.successStory}
              onChange={handleChange}
              required
              rows={6}
            ></textarea>
            <div className={`word-count ${wordCount > 100 ? "error" : ""}`}>
              {wordCount}/100 words{" "}
              {wordCount < 20 && wordCount > 0 && "(minimum 20 recommended)"}
            </div>
          </div>
        </div>

        <div className="form-buttons">
          <button
            type="submit"
            className="submit-button"
            disabled={
              isSubmitting ||
              linkedinError ||
              wordCount > 100 ||
              wordCount < 1 ||
              !formData.fullName ||
              !formData.email ||
              !formData.linkedin ||
              !formData.successStory
            }
          >
            {isSubmitting ? "Sharing Your Story..." : "Share Success Story"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShareYourSuccessStory;
