// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./css/ContactUs.css";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneCode: "",
//     phoneNumber: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !formData.firstName.trim() ||
//       !formData.lastName.trim() ||
//       !formData.email.trim() ||
//       !formData.phoneCode.trim() ||
//       !formData.phoneNumber.trim() ||
//       !formData.message.trim()
//     ) {
//       toast.error("❌ Please fill out all fields before submitting.");
//       return;
//     }

//     toast.success(
//       "✅ Your message has been sent. Our team will reach out soon!"
//     );
//   };

//   return (
//     <>
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

//       <div className="contactus-container contactus-main">
//         <div
//           className="decorative-shape shape-contact-1"
//           style={{ zIndex: "0" }}
//         ></div>
//         <div
//           className="decorative-shape shape-contact-3"
//           style={{ zIndex: "0" }}
//         ></div>
//         <div
//           className="decorative-shape shape-contact-4"
//           style={{ zIndex: "0" }}
//         ></div>

//         <header className="about-header">
//           <h1 className="about-title">Contact Us</h1>
//           <p className="allparagraph">
//             Guiding your career journey with expert-curated resources and
//             up-to-date learning tools
//           </p>
//         </header>

//         <div className="container-contactus" style={{ zIndex: "0" }}>
//           <div className="contact-info">
//             <h5 className="career-requirements contact-us-heading">
//               Have questions, need guidance, or want to collaborate? Let's
//               connect and make it happen!
//             </h5>

//             <div className="contact-form">
//               <h4>We're Here to Support You</h4>
//               <p className="icon-paragraph">
//                 Our platform is built to help students, fresh graduates, and
//                 professionals with industry-relevant resources and guidance.
//                 Whether it's a technical doubt, career advice, or an opportunity
//                 to collaborate, our team is ready to assist and connect you with
//                 the right solutions.
//               </p>
//               <form onSubmit={handleSubmit}>
//                 <div className="input-group">
//                   <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     required
//                   />
//                   <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last Name"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//                 <div className="input-group">
//                   <input
//                     type="text"
//                     name="phoneCode"
//                     placeholder="Country Code (e.g., +91)"
//                     value={formData.phoneCode}
//                     onChange={handleChange}
//                     required
//                   />
//                   <input
//                     type="text"
//                     name="phoneNumber"
//                     placeholder="Phone Number"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>
//                 <textarea
//                   name="message"
//                   placeholder="Type your message..."
//                   value={formData.message}
//                   onChange={handleChange}
//                   maxLength="500"
//                   required
//                 ></textarea>
//                 <button type="submit">Submit</button>
//                 <p className="terms">
//                   By contacting us, you agree to our{" "}
//                   <Link
//                     to="/terms-of-service"
//                     onClick={() =>
//                       window.scrollTo({ top: 0, behavior: "smooth" })
//                     }
//                   >
//                     Terms of Service
//                   </Link>{" "}
//                   and{" "}
//                   <Link
//                     to="/privacy-policy"
//                     onClick={() =>
//                       window.scrollTo({ top: 0, behavior: "smooth" })
//                     }
//                   >
//                     Privacy Policy
//                   </Link>
//                   .
//                 </p>
//               </form>
//             </div>

//             <h5 className="career-requirements">
//               We are committed to making education and resources accessible
//               while ensuring a smooth learning experience for every user.
//             </h5>

//             <div className="info-sections">
//               <div style={{ fontSize: "1.2rem" }}>
//                 <h5 className="career-requirements">
//                   Technical Support & Queries
//                 </h5>
//                 <p className="icon-paragraph">
//                   Having trouble using our platform or a specific feature? Our
//                   support team will help you quickly troubleshoot issues,
//                   resolve errors, and answer your queries—so you can focus on
//                   learning without interruptions.
//                 </p>
//               </div>

//               <div style={{ fontSize: "1.2rem" }}>
//                 <h5 className="career-requirements">
//                   Contribute & Share Knowledge
//                 </h5>
//                 <p className="icon-paragraph">
//                   Knowledge grows when shared. If you have study notes, project
//                   insights, tutorials, or industry tips, contribute to our
//                   platform and help thousands of learners enhance their skills
//                   and career opportunities.
//                 </p>
//               </div>

//               <div style={{ fontSize: "1.2rem" }}>
//                 <h5 className="career-requirements">
//                   Collaboration & Partnerships
//                 </h5>
//                 <p className="icon-paragraph">
//                   We partner with universities, tech professionals, and
//                   companies to make learning more impactful. If you're looking
//                   to collaborate on skill-building initiatives, reach out—we'd
//                   love to explore opportunities together.
//                 </p>
//               </div>

//               <div style={{ fontSize: "1.2rem" }}>
//                 <h5 className="career-requirements">Community & Events</h5>
//                 <p className="icon-paragraph">
//                   Join our events to network, learn, and grow with industry
//                   experts and fellow learners. From webinars to career
//                   workshops, we host sessions that prepare you for real-world
//                   opportunities. Interested in hosting or joining an event?
//                   Let's talk!
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactUs;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCode: "",
    phoneNumber: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.phoneCode.trim() ||
      !formData.phoneNumber.trim() ||
      !formData.message.trim()
    ) {
      toast.error("❌ Please fill out all fields before submitting.");
      return;
    }

    setIsSubmitting(true);

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
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneCode: formData.phoneCode,
            phoneNumber: formData.phoneNumber,
            message: formData.message,
            _subject: "📩 New Contact Us Submission",
          }),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success(
          "✅ Your message has been sent. Our team will reach out soon!"
        );
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneCode: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        toast.error("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      toast.error("⚠️ Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} theme="light" />

      <div className="contactus-container contactus-main">
        <div
          className="decorative-shape shape-contact-1"
          style={{ zIndex: "0" }}
        ></div>
        <div
          className="decorative-shape shape-contact-3"
          style={{ zIndex: "0" }}
        ></div>
        <div
          className="decorative-shape shape-contact-4"
          style={{ zIndex: "0" }}
        ></div>

        <header className="about-header">
          <h1 className="about-title">Contact Us</h1>
          <p className="allparagraph">
            Guiding your career journey with expert-curated resources and
            up-to-date learning tools
          </p>
        </header>

        <div className="container-contactus" style={{ zIndex: "0" }}>
          <div className="contact-info">
            <h5 className="career-requirements contact-us-heading">
              Have questions, need guidance, or want to collaborate? Let's
              connect and make it happen!
            </h5>

            <div className="contact-form">
              <h4>We're Here to Support You</h4>
              <p className="icon-paragraph">
                Our platform is built to help students, fresh graduates, and
                professionals with industry-relevant resources and guidance.
                Whether it's a technical doubt, career advice, or an opportunity
                to collaborate, our team is ready to assist and connect you with
                the right solutions.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div className="input-group">
                  <input
                    type="text"
                    name="phoneCode"
                    placeholder="Country Code (e.g., +91)"
                    value={formData.phoneCode}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Type your message..."
                  value={formData.message}
                  onChange={handleChange}
                  maxLength="500"
                  required
                ></textarea>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
                <p className="terms">
                  By contacting us, you agree to our{" "}
                  <Link
                    to="/terms-of-service"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy-policy"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>

            <h5 className="career-requirements">
              We are committed to making education and resources accessible
              while ensuring a smooth learning experience for every user.
            </h5>

            <div className="info-sections">
              <div style={{ fontSize: "1.2rem" }}>
                <h5 className="career-requirements">
                  Technical Support & Queries
                </h5>
                <p className="icon-paragraph">
                  Having trouble using our platform or a specific feature? Our
                  support team will help you quickly troubleshoot issues,
                  resolve errors, and answer your queries—so you can focus on
                  learning without interruptions.
                </p>
              </div>

              <div style={{ fontSize: "1.2rem" }}>
                <h5 className="career-requirements">
                  Contribute & Share Knowledge
                </h5>
                <p className="icon-paragraph">
                  Knowledge grows when shared. If you have study notes, project
                  insights, tutorials, or industry tips, contribute to our
                  platform and help thousands of learners enhance their skills
                  and career opportunities.
                </p>
              </div>

              <div style={{ fontSize: "1.2rem" }}>
                <h5 className="career-requirements">
                  Collaboration & Partnerships
                </h5>
                <p className="icon-paragraph">
                  We partner with universities, tech professionals, and
                  companies to make learning more impactful. If you're looking
                  to collaborate on skill-building initiatives, reach out—we'd
                  love to explore opportunities together.
                </p>
              </div>

              <div style={{ fontSize: "1.2rem" }}>
                <h5 className="career-requirements">Community & Events</h5>
                <p className="icon-paragraph">
                  Join our events to network, learn, and grow with industry
                  experts and fellow learners. From webinars to career
                  workshops, we host sessions that prepare you for real-world
                  opportunities. Interested in hosting or joining an event?
                  Let's talk!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
