// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const RequestAResource = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     resourceDetails: "",
//   });
//   const [wordCount, setWordCount] = useState(0);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "resourceDetails") {
//       const words = value.trim().split(/\s+/);
//       const count = value.trim() === "" ? 0 : words.length;
//       if (count <= 100) {
//         setFormData({ ...formData, [name]: value });
//         setWordCount(count);
//       }
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (wordCount > 100) {
//       toast.error("Resource description must be less than 100 words.");
//       return;
//     }

//     if (wordCount < 10) {
//       toast.warning(
//         "Please provide more details about the resource (at least 10 words recommended)."
//       );
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Success notification
//       toast.success(
//         "📚 Thank you for your resource request! We'll review it and notify you when it's available."
//       );

//       // Reset form
//       setFormData({ name: "", email: "", resourceDetails: "" });
//       setWordCount(0);
//     } catch (error) {
//       // Error notification
//       toast.error(
//         "❌ Failed to submit resource request. Please try again later."
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleCancel = () => {
//     toast.info(
//       "Resource request cancelled. Feel free to submit a request anytime!"
//     );
//     setFormData({ name: "", email: "", resourceDetails: "" });
//     setWordCount(0);
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

//       <h2>Request a Resource</h2>
//       <form className="community-form" onSubmit={handleSubmit}>
//         <p className="newsletter-description">
//           Can't find what you're looking for? Let us know what resources you
//           need and we'll work on adding them to our platform!
//         </p>

//         <div className="form-group">
//           <label>Your Name:</label>
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
//         </div>

//         <div className="form-group">
//           <label>Requested Resource Details:</label>
//           <div className="relative">
//             <textarea
//               name="resourceDetails"
//               placeholder="Please describe the resource you need in detail. Include topics, format preferences, and how you plan to use it..."
//               value={formData.resourceDetails}
//               onChange={handleChange}
//               required
//               rows={5}
//             ></textarea>
//             <div className={`word-count ${wordCount > 100 ? "error" : ""}`}>
//               {wordCount}/100 words{" "}
//               {wordCount < 10 && wordCount > 0 && "(minimum 10 recommended)"}
//             </div>
//           </div>
//         </div>

//         <div className="form-buttons">
//           <button
//             type="submit"
//             className="submit-button"
//             disabled={
//               isSubmitting ||
//               wordCount > 100 ||
//               wordCount < 1 ||
//               !formData.name ||
//               !formData.email ||
//               !formData.resourceDetails
//             }
//           >
//             {isSubmitting ? "Submitting Request..." : "Submit Resource Request"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default RequestAResource;

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RequestAResource = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resourceDetails: "",
  });
  const [wordCount, setWordCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "resourceDetails") {
      const words = value.trim().split(/\s+/);
      const count = value.trim() === "" ? 0 : words.length;
      if (count <= 100) {
        setFormData({ ...formData, [name]: value });
        setWordCount(count);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (wordCount > 100) {
      toast.error("Resource description must be less than 100 words.");
      return;
    }

    if (wordCount < 10) {
      toast.warning(
        "Please provide more details about the resource (at least 10 words recommended)."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/unisire.mainhub@gmail.com", // ✅ sends directly to your Gmail
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            resourceDetails: formData.resourceDetails,
            _subject: "📚 New Resource Request Submitted",
          }),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success(
          "📚 Thank you for your resource request! We'll review it and notify you when it's available."
        );
        setFormData({ name: "", email: "", resourceDetails: "" });
        setWordCount(0);
      } else {
        toast.error("❌ Failed to submit resource request. Please try again.");
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

      <h2>Request a Resource</h2>
      <form className="community-form" onSubmit={handleSubmit}>
        <p className="newsletter-description">
          Can't find what you're looking for? Let us know what resources you
          need and we'll work on adding them to our platform!
        </p>

        <div className="form-group">
          <label>Your Name:</label>
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
        </div>

        <div className="form-group">
          <label>Requested Resource Details:</label>
          <div className="relative">
            <textarea
              name="resourceDetails"
              placeholder="Please describe the resource you need in detail. Include topics, format preferences, and how you plan to use it..."
              value={formData.resourceDetails}
              onChange={handleChange}
              required
              rows={5}
            ></textarea>
            <div className={`word-count ${wordCount > 100 ? "error" : ""}`}>
              {wordCount}/100 words{" "}
              {wordCount < 10 && wordCount > 0 && "(minimum 10 recommended)"}
            </div>
          </div>
        </div>

        <div className="form-buttons">
          <button
            type="submit"
            className="submit-button"
            disabled={
              isSubmitting ||
              wordCount > 100 ||
              wordCount < 1 ||
              !formData.name ||
              !formData.email ||
              !formData.resourceDetails
            }
          >
            {isSubmitting ? "Submitting Request..." : "Submit Resource Request"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestAResource;
