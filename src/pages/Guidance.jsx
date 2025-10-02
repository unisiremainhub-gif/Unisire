import React, { useState } from "react";
import "./css/Guidance.css";
import FAQSection from "./sections/MainPage/FAQSection";

function Guidance() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    contactNumber: "",
    course: "",
    userMessage: "",
    sessionTime: "Evening",
    currentYear: "",
    selectedGuidance: "",
    selectedSession: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your request has been submitted. We will contact you soon!");
  };

  return (
    <div className="career-container">
      <h2 className="heading-secondary marginbottom">Our Guidance Program</h2>
      <section className="guidanceWrapper" style={{ borderRadius: "15px" }}>
        <div className="guidanceContainer">
          {/* Introduction Section */}
          <div className="guidanceIntroBox">
            <img
              src="https://media.istockphoto.com/id/1447900634/photo/mature-businessman-mentoring-younger-colleague-working-on-laptop-at-desk.jpg?s=612x612&w=0&k=20&c=kztLjUgQOjhw3tQCfSTyMOOjPwSopG_fwdeMFcYn2Y8="
              alt="Mentor"
              className="guidanceImage"
            />
            <div className="guidanceText">
              <h2 className="expert-marginbottom">
                Expert Mentorship for B.Tech Students
              </h2>
              <p>
                We provide personalized 1-on-1 mentorship in various fields,
                including software development, AI, machine learning,
                cybersecurity, data science, cloud computing, and more.
              </p>
            </div>
          </div>

          {/* Information Section */}
          <div className="guidanceInfo">
            <h5 className="margin-bottom-mentorship">
              Please Ensure These Things!
            </h5>
            <p>
              ✅ We will connect you with a mentor within 2 to 3 business days.
            </p>
            <p>✅ Available mentorship timing: After 7:00 PM.</p>
            <p>✅ Ensure that you are free after 7:00 PM.</p>
            <p>✅ We will notify you via email about your session.</p>
            <p>
              ✅ Please ensure your internet connection is stable for the
              session.
            </p>
            <p>
              ✅ Have your questions or topics ready before the session starts.
            </p>
          </div>

          {/* Booking Form */}
          <div className="guidanceFormBox">
            <h5 className="margin-bottom-mentorship">
              Book Your Mentorship Session
            </h5>
            <form onSubmit={handleSubmit}>
              <div className="guidanceInputBox">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="guidanceInputBox">
                <label>Email Address</label>
                <input
                  type="email"
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="guidanceInputBox">
                <label>Contact Number</label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                  required
                />
              </div>

              <div className="guidanceInputBox">
                <label>Course</label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  placeholder="Enter your course name"
                  required
                />
              </div>

              <div className="guidanceInputBox">
                <label>Your Message (Optional)</label>
                <textarea
                  name="userMessage"
                  value={formData.userMessage}
                  onChange={handleChange}
                  placeholder="Enter any additional details (optional)"
                  rows="3"
                ></textarea>
              </div>

              <div className="guidanceInputBox">
                <label>Preferred Timing</label>
                <select
                  name="sessionTime"
                  value={formData.sessionTime}
                  onChange={handleChange}
                  required
                >
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>

              <div className="guidanceInputBox">
                <label>Current Year</label>
                <select
                  name="currentYear"
                  value={formData.currentYear}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="First Year">First Year</option>
                  <option value="Second Year">Second Year</option>
                  <option value="Third Year">Third Year</option>
                  <option value="Fourth Year">Fourth Year</option>
                </select>
              </div>

              <div className="guidanceInputBox">
                <label>What guidance do you need?</label>
                <select
                  name="selectedGuidance"
                  value={formData.selectedGuidance}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Guidance</option>
                  <option value="Placement Preparation">
                    Placement Preparation
                  </option>
                  <option value="Internship Guidance">
                    Internship Guidance
                  </option>
                  <option value="Software Development">
                    Software Development
                  </option>
                  <option value="GATE Exam Preparation">
                    GATE Exam Preparation
                  </option>
                  <option value="Government Job Exams">
                    Government Job Exams
                  </option>
                  <option value="Higher Studies (MS/M.Tech)">
                    Higher Studies (MS/M.Tech)
                  </option>
                  <option value="Freelancing & Remote Work">
                    Freelancing & Remote Work
                  </option>
                </select>
              </div>

              <div className="guidanceInputBox">
                <label>Session Duration</label>
                <select
                  name="selectedSession"
                  value={formData.selectedSession}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Session</option>
                  <option value="15-minute session: ₹149">
                    15-minute session: ₹149
                  </option>
                  <option value="25-minute session: ₹199">
                    25-minute session: ₹199
                  </option>
                </select>
              </div>

              <button type="submit" className="guidanceSubmitBtn">
                Make Payment
              </button>
            </form>
          </div>
          {/* <div className="guidanceDetailsBox" style={{ marginTop: "40px" }}>
            <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
              Why Choose Our Guidance Program?
            </h2>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.6",
                marginBottom: "7px",
              }}
            >
              1. We provide personalized mentorship based on real-world industry
              experience, empowering you to develop the skills most valued by
              top employers.
            </p>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.6",
                marginBottom: "7px",
              }}
            >
              2. Our mentors are highly experienced professionals who understand
              the challenges faced by students and guide you with practical
              solutions that directly impact your career growth.
            </p>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.6",
                marginBottom: "7px",
              }}
            >
              3. Unlike other platforms that charge anywhere from ₹500 to ₹1500,
              we offer affordable mentorship that focuses on maximizing the
              value of your learning without the unnecessary costs.
            </p>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.6",
                marginBottom: "7px",
              }}
            >
              4. We ensure that each session is tailored to your unique goals,
              whether it's securing a job, cracking competitive exams, or
              mastering a particular skill set, ensuring the most efficient use
              of your time.
            </p>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.6",
                marginBottom: "7px",
              }}
            >
              5. Our goal is to provide mentorship that makes a lasting
              difference, ensuring you not only receive valuable knowledge but
              also the motivation and direction to excel in your career journey.
            </p>
          </div> */}
          {/* <FAQSection></FAQSection> */}
        </div>
      </section>
    </div>
  );
}

export default Guidance;
