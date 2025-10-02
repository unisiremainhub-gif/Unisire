// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const WantToContribute = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     phoneCode: "+91",
//     phoneNumber: "",
//     linkedin: "",
//     contributionDetails: "",
//   });
//   const [phoneError, setPhoneError] = useState("");
//   const [linkedinError, setLinkedinError] = useState("");
//   const [wordCount, setWordCount] = useState(0);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validatePhoneNumber = (phone) => /^[0-9]{10}$/.test(phone);
//   const isValidLinkedIn = (url) =>
//     /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_.]+\/?$/.test(url);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "phoneNumber") {
//       setPhoneError(
//         value === "" || validatePhoneNumber(value)
//           ? ""
//           : "Phone number must be 10 digits."
//       );
//     }

//     if (name === "linkedin") {
//       setLinkedinError(
//         value === "" || isValidLinkedIn(value)
//           ? ""
//           : "Please enter a valid LinkedIn profile URL."
//       );
//     }

//     if (name === "contributionDetails") {
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
//     setIsSubmitting(true);

//     // Validate form
//     if (!validatePhoneNumber(formData.phoneNumber)) {
//       setPhoneError("Phone number must be 10 digits.");
//       toast.error("Please fix the phone number error before submitting.");
//       setIsSubmitting(false);
//       return;
//     }
//     if (!isValidLinkedIn(formData.linkedin)) {
//       setLinkedinError("Please enter a valid LinkedIn profile URL.");
//       toast.error("Please fix the LinkedIn URL error before submitting.");
//       setIsSubmitting(false);
//       return;
//     }
//     if (wordCount > 100) {
//       toast.error("Contribution details must be under 100 words.");
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Success notification
//       toast.success("Thank you for your contribution! We will review it soon.");

//       // Reset form
//       setFormData({
//         email: "",
//         phoneCode: "+91",
//         phoneNumber: "",
//         linkedin: "",
//         contributionDetails: "",
//       });
//       setWordCount(0);
//       setPhoneError("");
//       setLinkedinError("");
//     } catch (error) {
//       // Error notification
//       toast.error("Submission failed. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleReject = () => {
//     toast.info("Submission cancelled. Feel free to try again later!");
//     // Optional: Clear form on reject
//     setFormData({
//       email: "",
//       phoneCode: "+91",
//       phoneNumber: "",
//       linkedin: "",
//       contributionDetails: "",
//     });
//     setWordCount(0);
//     setPhoneError("");
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

//       <h2>Contribute to Our Platform</h2>
//       <form className="community-form" onSubmit={handleSubmit}>
//         <p className="newsletter-description">
//           Join our community of contributors and help us create valuable
//           resources. Share your expertise and make a difference!
//         </p>

//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Country Phone Code:</label>
//           <input
//             type="text"
//             name="phoneCode"
//             value={formData.phoneCode}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Phone Number:</label>
//           <input
//             type="text"
//             name="phoneNumber"
//             placeholder="Enter phone number"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             required
//           />
//           {phoneError && <p className="error-message">{phoneError}</p>}
//         </div>

//         <div className="form-group">
//           <label>LinkedIn Profile:</label>
//           <input
//             type="url"
//             name="linkedin"
//             placeholder="https://linkedin.com/in/yourprofile"
//             value={formData.linkedin}
//             onChange={handleChange}
//             required
//           />
//           {linkedinError && <p className="error-message">{linkedinError}</p>}
//         </div>

//         <div className="form-group">
//           <label>What would you like to contribute?</label>
//           <div className="relative">
//             <textarea
//               name="contributionDetails"
//               placeholder="Explain your contribution idea, expertise area, or specific resources you'd like to share..."
//               value={formData.contributionDetails}
//               onChange={handleChange}
//               required
//               rows={5}
//             ></textarea>
//             <div className={`word-count ${wordCount > 100 ? "error" : ""}`}>
//               {wordCount}/100 words
//             </div>
//           </div>
//         </div>

//         <div className="form-buttons">
//           <button
//             type="submit"
//             className="submit-button"
//             disabled={
//               phoneError ||
//               linkedinError ||
//               wordCount > 100 ||
//               isSubmitting ||
//               !formData.email ||
//               !formData.phoneNumber ||
//               !formData.linkedin ||
//               !formData.contributionDetails
//             }
//           >
//             {isSubmitting ? "Submitting..." : "Submit Contribution"}
//           </button>

//           <button
//             type="button"
//             className="reject-button"
//             onClick={handleReject}
//             disabled={isSubmitting}
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default WantToContribute;

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WantToContribute = () => {
  const [formData, setFormData] = useState({
    email: "",
    phoneCode: "+91",
    phoneNumber: "",
    linkedin: "",
    contributionDetails: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [linkedinError, setLinkedinError] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhoneNumber = (phone) => /^[0-9]{10}$/.test(phone);
  const isValidLinkedIn = (url) =>
    /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_.]+\/?$/.test(url);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      setPhoneError(
        value === "" || validatePhoneNumber(value)
          ? ""
          : "Phone number must be 10 digits."
      );
    }

    if (name === "linkedin") {
      setLinkedinError(
        value === "" || isValidLinkedIn(value)
          ? ""
          : "Please enter a valid LinkedIn profile URL."
      );
    }

    if (name === "contributionDetails") {
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
    setIsSubmitting(true);

    // Validate form
    if (!validatePhoneNumber(formData.phoneNumber)) {
      setPhoneError("Phone number must be 10 digits.");
      toast.error("Please fix the phone number error before submitting.");
      setIsSubmitting(false);
      return;
    }
    if (!isValidLinkedIn(formData.linkedin)) {
      setLinkedinError("Please enter a valid LinkedIn profile URL.");
      toast.error("Please fix the LinkedIn URL error before submitting.");
      setIsSubmitting(false);
      return;
    }
    if (wordCount > 100) {
      toast.error("Contribution details must be under 100 words.");
      setIsSubmitting(false);
      return;
    }

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
            email: formData.email,
            phoneCode: formData.phoneCode,
            phoneNumber: formData.phoneNumber,
            linkedin: formData.linkedin,
            contributionDetails: formData.contributionDetails,
            _subject: "🙌 New Contribution Request",
          }),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success(
          "✅ Thank you for your contribution! We will review it soon."
        );

        // Reset form
        setFormData({
          email: "",
          phoneCode: "+91",
          phoneNumber: "",
          linkedin: "",
          contributionDetails: "",
        });
        setWordCount(0);
        setPhoneError("");
        setLinkedinError("");
      } else {
        toast.error("❌ Submission failed. Please try again later.");
      }
    } catch (error) {
      toast.error("⚠️ Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReject = () => {
    toast.info("Submission cancelled. Feel free to try again later!");
    setFormData({
      email: "",
      phoneCode: "+91",
      phoneNumber: "",
      linkedin: "",
      contributionDetails: "",
    });
    setWordCount(0);
    setPhoneError("");
    setLinkedinError("");
  };

  return (
    <div className="form-container form-container-community">
      <ToastContainer position="top-right" autoClose={5000} theme="light" />

      <h2>Contribute to Our Platform</h2>
      <form className="community-form" onSubmit={handleSubmit}>
        <p className="newsletter-description">
          Join our community of contributors and help us create valuable
          resources. Share your expertise and make a difference!
        </p>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Country Phone Code:</label>
          <input
            type="text"
            name="phoneCode"
            value={formData.phoneCode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          {phoneError && <p className="error-message">{phoneError}</p>}
        </div>

        <div className="form-group">
          <label>LinkedIn Profile:</label>
          <input
            type="url"
            name="linkedin"
            placeholder="https://linkedin.com/in/yourprofile"
            value={formData.linkedin}
            onChange={handleChange}
            required
          />
          {linkedinError && <p className="error-message">{linkedinError}</p>}
        </div>

        <div className="form-group">
          <label>What would you like to contribute?</label>
          <div className="relative">
            <textarea
              name="contributionDetails"
              placeholder="Explain your contribution idea, expertise area, or specific resources you'd like to share..."
              value={formData.contributionDetails}
              onChange={handleChange}
              required
              rows={5}
            ></textarea>
            <div className={`word-count ${wordCount > 100 ? "error" : ""}`}>
              {wordCount}/100 words
            </div>
          </div>
        </div>

        <div className="form-buttons">
          <button
            type="submit"
            className="submit-button"
            disabled={
              phoneError ||
              linkedinError ||
              wordCount > 100 ||
              isSubmitting ||
              !formData.email ||
              !formData.phoneNumber ||
              !formData.linkedin ||
              !formData.contributionDetails
            }
          >
            {isSubmitting ? "Submitting..." : "Submit Contribution"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WantToContribute;
