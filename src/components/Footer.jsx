import React, { useState } from "react";
import { FaDiscord, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../pages/Images/Logo/Gemini_Generated_Image_u65uf5u65uf5u65u-removebg-preview.png";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="footer container">
        <div className="footerupper">
          <div className="footerlogo">
            <div style={{ display: "flex", justifyContent: "flex-end" }}></div>
            <Link to="https://example.com">
              <img
                src={logo}
                alt="Platform Logo"
                style={{ style: "60px" }}
                className="loko"
              />
            </Link>
            <p className="iconparagraphlh">
              Stay updated with the latest resources, career guidance, and
              skill-building insights from our platform.
            </p>
            <div className="social-icons-badge">
              <p
                style={{
                  fontSize: "16px",
                  marginBottom: "8px",
                  color: "#000",
                  fontWeight: "500",
                }}
              >
                Follow Us
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="social-icons">
                  <a
                    href="https://discord.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Discord"
                  >
                    <FaDiscord />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </a>
                </div>
                <span className="coming-soon-badge">Coming Soon</span>
              </div>
            </div>
          </div>

          <div className="logofirst">
            <div className="separation">
              <p className="iconparagraphlh">
                <strong>COMMUNITY</strong>
              </p>
              <Link
                to="/community-support?form=want-to-contribute"
                className="footer-links"
                onClick={scrollToTop}
              >
                Want to Contribute?
              </Link>
              <Link
                to="/community-support?form=share-your-success-story"
                className="footer-links"
                onClick={scrollToTop}
              >
                Share Your Success Story
              </Link>
              <Link
                to="/community-support?form=share-your-experience"
                className="footer-links"
                onClick={scrollToTop}
              >
                Share Your Experience
              </Link>

              <p className="iconparagraphlh" style={{ marginTop: "1rem" }}>
                <strong>SUPPORT</strong>
              </p>
              <Link
                to="/community-support?form=report-an-issue"
                className="footer-links"
                onClick={scrollToTop}
              >
                Report an Issue
              </Link>
              <Link
                to="/community-support?form=request-a-resource"
                className="footer-links"
                onClick={scrollToTop}
              >
                Request a Resource
              </Link>
              <Link
                to="/community-support?form=join-news-letter"
                className="footer-links"
                onClick={scrollToTop}
              >
                Join Newsletter
              </Link>
            </div>
          </div>

          <div className="logofirst">
            <div className="separation">
              <p className="iconparagraphlh">
                <strong>TOP Resources</strong>
              </p>
              <Link
                to="/resources/roadmaps"
                className="footer-links"
                onClick={scrollToTop}
              >
                Roadmaps
              </Link>
              <Link
                to="/resources/resumes"
                className="footer-links"
                onClick={scrollToTop}
              >
                Resumes
              </Link>
              <Link
                to="/resources/ai-tools"
                className="footer-links"
                onClick={scrollToTop}
              >
                Ai Tools
              </Link>
            </div>
          </div>

          <div className="logofirst logothird">
            <div className="separation">
              <p className="iconparagraphlh">
                <strong>COMPANY</strong>
              </p>
              <Link
                to="/careers"
                className="footer-links"
                onClick={scrollToTop}
              >
                Careers
              </Link>
              <Link
                to="/about-us"
                className="footer-links"
                onClick={scrollToTop}
              >
                About Us
              </Link>
              <Link
                to="/contact-us"
                className="footer-links"
                onClick={scrollToTop}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="footerdown">
          <div
            className="upper-first upper-first-footer"
            style={{ marginBottom: "1.5rem" }}
          ></div>
          <div className="copyright">
            <p className="iconparagraphlh reserved">
              © 2025 Unisire. All rights reserved.
            </p>
            <p className="iconparagraphlh">
              <Link
                to="/terms-of-service"
                className="footer-links"
                onClick={scrollToTop}
              >
                Terms of Service
              </Link>
              {"|"}
              <Link
                to="/privacy-policy"
                className="footer-links"
                onClick={scrollToTop}
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
