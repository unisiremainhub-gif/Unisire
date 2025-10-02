import React from "react";
import "./css/MyProfile.css";
import defaultAvatar from "./user-avatar.png";
import { useNavigate } from "react-router-dom";

const MyProfile = ({ profileData }) => {
  const data = profileData || {
    profilePhoto: null,
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: "9876543210",
    countryCode: "+91",
    college: "Example University",
    degree: "Bachelor of Engineering",
    graduationYear: "2024",
    profession: "Web Developer",
    experience: "2",
    skills: "React, Node.js, Python",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    portfolio: "https://johndoeportfolio.com",
    bio: "Passionate developer with experience in web technologies.",
    interests: "Machine Learning, Web Development, Mobile Apps",
    goal: "To become a full-stack developer and contribute to open source projects.",
  };
  const navigate = useNavigate();
  return (
    <div className="my-profile-container">
      <div className="my-profile-card-container">
        <button
          class="rater-button self my-profile-rater-button"
          onClick={() => navigate("/")}
        >
          Back to Home ←
        </button>
        <h2 className="my-profile-heading my-profile-heading-main">
          My Profile :)
        </h2>
        <p className="my-profile-subtitle">
          Here's all the information you've shared with us. You can update it
          anytime.
        </p>
        <div className="my-profile-form-wrapper">
          {/* Avatar Section */}
          <div className="my-profile-avatar-section">
            <div className="my-profile-avatar-container">
              <img
                src={
                  data.profilePhoto
                    ? URL.createObjectURL(data.profilePhoto)
                    : defaultAvatar
                }
                alt="Profile"
                className="my-profile-avatar-image"
              />
            </div>
            <div className="my-profile-avatar-info">
              <h3 className="my-profile-avatar-name">{data.name}</h3>
              <p className="my-profile-avatar-profession">{data.profession}</p>
              {data.experience && (
                <p className="my-profile-avatar-experience">
                  {data.experience} years of experience
                </p>
              )}
            </div>
          </div>

          <div className="my-profile-content">
            {/* Personal Information Section */}
            <div className="my-profile-section">
              <h2 className="my-profile-section-heading">
                <i>Personal Information</i>
              </h2>
              <div className="my-profile-info-grid">
                <div className="my-profile-info-item">
                  <label>Email Address</label>
                  <div className="my-profile-info-value">{data.email}</div>
                </div>
                <div className="my-profile-flex-row">
                  <div className="my-profile-flex-1">
                    <label>Country Code</label>
                    <div className="my-profile-info-value">
                      {data.countryCode}
                    </div>
                  </div>
                  <div className="my-profile-flex-3">
                    <label>Phone Number</label>
                    <div className="my-profile-info-value">
                      {data.phoneNumber}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Professional Section */}
            <div className="my-profile-section">
              <h2 className="my-profile-section-heading">
                <i>Education & Professional Background</i>
              </h2>
              <div className="my-profile-info-grid">
                <div className="my-profile-info-item">
                  <label>College</label>
                  <div className="my-profile-info-value">{data.college}</div>
                </div>
                <div className="my-profile-info-item">
                  <label>Degree</label>
                  <div className="my-profile-info-value">{data.degree}</div>
                </div>
                <div className="my-profile-info-item">
                  <label>Graduation Year</label>
                  <div className="my-profile-info-value">
                    {data.graduationYear}
                  </div>
                </div>
                <div className="my-profile-info-item">
                  <label>Profession</label>
                  <div className="my-profile-info-value">{data.profession}</div>
                </div>
                <div className="my-profile-info-item">
                  <label>Experience</label>
                  <div className="my-profile-info-value">
                    {data.experience || "0"} years
                  </div>
                </div>
                <div className="my-profile-info-item">
                  <label>Skills</label>
                  <div className="my-profile-info-value">{data.skills}</div>
                </div>
              </div>
            </div>

            {/* Portfolio & Links Section */}
            <div className="my-profile-section">
              <h2 className="my-profile-section-heading">
                <i>Portfolio & Links</i>
              </h2>
              <div className="my-profile-info-grid">
                {data.linkedin && (
                  <div className="my-profile-info-item">
                    <label>LinkedIn</label>
                    <a
                      href={data.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="my-profile-link"
                    >
                      {data.linkedin}
                    </a>
                  </div>
                )}
                {data.github && (
                  <div className="my-profile-info-item">
                    <label>GitHub</label>
                    <a
                      href={data.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="my-profile-link"
                    >
                      {data.github}
                    </a>
                  </div>
                )}
                {data.portfolio && (
                  <div className="my-profile-info-item">
                    <label>Portfolio</label>
                    <a
                      href={data.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="my-profile-link"
                    >
                      {data.portfolio}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* About Me Section */}
            <div className="my-profile-section">
              <h2 className="my-profile-section-heading">
                <i>About Me</i>
              </h2>
              <div className="my-profile-info-item">
                <label>Bio</label>
                <div className="my-profile-info-value my-profile-bio-text">
                  {data.bio}
                </div>
              </div>
              <div className="my-profile-info-item">
                <label>Interests</label>
                <div className="my-profile-info-value">{data.interests}</div>
              </div>
              <div className="my-profile-info-item">
                <label>Career Goal</label>
                <div className="my-profile-info-value my-profile-bio-text">
                  {data.goal}
                </div>
              </div>
            </div>
          </div>

          <div className="my-profile-actions">
            <button className="my-profile-edit-button">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
