// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const JoinNewsletter = () => {
//   const [email, setEmail] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 800));

//       // Success notification
//       toast.success(
//         "🎉 Thank you for joining our newsletter! Welcome to our community."
//       );

//       // Reset form
//       setEmail("");
//     } catch (error) {
//       // Error notification
//       toast.error("❌ Subscription failed. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleCancel = () => {
//     toast.info("Maybe next time! Feel free to join whenever you're ready.");
//     setEmail("");
//   };

//   return (
//     <div className="form-container form-container-community">
//       <ToastContainer
//         position="top-right"
//         autoClose={4000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />

//       <h2>Join Our Newsletter</h2>
//       <form className="community-form" onSubmit={handleSubmit}>
//         <p className="newsletter-description">
//           Stay updated with the latest resources, opportunities, and news
//           delivered directly to your inbox.
//         </p>

//         <div className="form-group">
//           <label>Email Address:</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-buttons">
//           <button
//             type="submit"
//             className="submit-button"
//             disabled={isSubmitting || !email}
//           >
//             {isSubmitting ? "Subscribing..." : "Subscribe Now"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default JoinNewsletter;

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JoinNewsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
            email: email,
            _subject: "New Newsletter Signup!",
          }),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success("🎉 Thank you for joining our newsletter!");
        setEmail("");
      } else {
        toast.error("❌ Subscription failed. Please try again later.");
      }
    } catch (error) {
      toast.error("⚠️ Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container form-container-community">
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <h2>Join Our Newsletter</h2>
      <form className="community-form" onSubmit={handleSubmit}>
        <p className="newsletter-description">
          Stay updated with the latest resources, opportunities, and news
          delivered directly to your inbox.
        </p>

        <div className="form-group">
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-buttons">
          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting || !email}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe Now"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinNewsletter;
