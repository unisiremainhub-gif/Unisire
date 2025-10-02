// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ReportAnIssue = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     issue: "",
//   });
//   const [wordCount, setWordCount] = useState(0);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "issue") {
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
//       toast.error("Issue description must be less than 100 words.");
//       return;
//     }

//     if (wordCount < 10) {
//       toast.warning(
//         "Please provide more details about the issue (at least 10 words)."
//       );
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Success notification
//       toast.success(
//         "✅ Thank you for reporting the issue! We'll look into it and get back to you soon."
//       );

//       // Reset form
//       setFormData({ name: "", email: "", issue: "" });
//       setWordCount(0);
//     } catch (error) {
//       // Error notification
//       toast.error("❌ Failed to submit issue report. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleCancel = () => {
//     toast.info("Issue report cancelled. You can report an issue anytime!");
//     setFormData({ name: "", email: "", issue: "" });
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

//       <h2>Report an Issue</h2>
//       <form className="community-form" onSubmit={handleSubmit}>
//         <p className="newsletter-description">
//           Help us improve our platform by reporting any issues you encounter.
//           Your feedback is valuable to us!
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
//         </div>

//         <div className="form-group">
//           <label>Describe the Issue:</label>
//           <div className="relative">
//             <textarea
//               name="issue"
//               placeholder="Please explain the issue in detail, including steps to reproduce if possible..."
//               value={formData.issue}
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
//               !formData.issue
//             }
//           >
//             {isSubmitting ? "Submitting Report..." : "Submit Issue Report"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ReportAnIssue;

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReportAnIssue = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "",
  });
  const [wordCount, setWordCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "issue") {
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
      toast.error("Issue description must be less than 100 words.");
      return;
    }

    if (wordCount < 10) {
      toast.warning(
        "Please provide more details about the issue (at least 10 words)."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/unisire.mainhub@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            issue: formData.issue,
            _subject: "🐞 New Issue Reported",
          }),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success(
          "✅ Thank you for reporting the issue! We'll check it soon."
        );
        setFormData({ name: "", email: "", issue: "" });
        setWordCount(0);
      } else {
        toast.error(
          "❌ Failed to submit issue report. Please try again later."
        );
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

      <h2>Report an Issue</h2>
      <form className="community-form" onSubmit={handleSubmit}>
        <p className="newsletter-description">
          Help us improve our platform by reporting any issues you encounter.
          Your feedback is valuable to us!
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
        </div>

        <div className="form-group">
          <label>Describe the Issue:</label>
          <div className="relative">
            <textarea
              name="issue"
              placeholder="Please explain the issue in detail, including steps to reproduce if possible..."
              value={formData.issue}
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
              !formData.issue
            }
          >
            {isSubmitting ? "Submitting Report..." : "Submit Issue Report"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReportAnIssue;
