import React, { useState, useEffect, useRef } from "react";
import {
  Award,
  Heart,
  Globe,
  Users,
  User,
  Target,
  Shield,
  Briefcase,
  Code,
  GraduationCap,
} from "lucide-react";
import {
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaChartLine,
  FaLinkedin,
} from "react-icons/fa";
import "./css/AboutUs.css";
import Founder from "./Images/Aboutus/Founder.jpg";
import CoFounder from "./Images/Aboutus/CoFounder.jpg";

const FounderCard = ({ name, role, description, image, linkedinUrl }) => {
  return (
    <div className="founder-card">
      <div className="founder-image-container">
        <img src={image} alt={name} className="founder-image" />
        <div className="founder-image-overlay" />
      </div>
      <div className="founder-info">
        <h4 className="founder-name">{name}</h4>
        <p className="founder-role">{role}</p>
        <p className="founder-description">{description}</p>
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-button"
          >
            <FaLinkedin className="linkedin-icon" />
            <span>LinkedIn Profile</span>
          </a>
        )}
      </div>
    </div>
  );
};

const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="value-card">
      <div className="icon-container">
        <Icon className="value-icon" />
      </div>
      <h3 className="value-title">{title}</h3>
      <p className="value-description">{description}</p>
    </div>
  );
};

const AboutUs = () => {
  const [counts, setCounts] = useState({
    platforms: 0,
    students: 0,
    mentors: 0,
  });

  const impactRef = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;

          // Animate counting for each value
          animateCount(0, 5, 2000, (value) =>
            setCounts((prev) => ({ ...prev, platforms: value }))
          );

          animateCount(0, 1000, 2500, (value) =>
            setCounts((prev) => ({ ...prev, students: value }))
          );

          animateCount(0, 200, 1800, (value) =>
            setCounts((prev) => ({ ...prev, mentors: value }))
          );
        }
      },
      { threshold: 0.5 }
    );

    if (impactRef.current) {
      observer.observe(impactRef.current);
    }

    return () => {
      if (impactRef.current) {
        observer.unobserve(impactRef.current);
      }
    };
  }, []);

  const animateCount = (start, end, duration, callback) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      callback(value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return num;
  };

  return (
    <div className="about-us">
      <div className="decorative-shape shape-1"></div>
      <div className="decorative-shape shape-2"></div>

      {/* Header */}
      <header className="about-header about-title-background">
        <h1 className="about-title">About Us</h1>
        <p className="allparagraph">
          For years, we have been running separate platforms for different
          technologies — from coding to data science — each focused on helping
          students master skills and land placements. In 2025, we brought all
          that expertise together into one unified platform called Unisire, so
          learners can access every tech resource in a single place. Our launch
          may look recent, but our journey began long before this.
        </p>
      </header>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="grid-layout">
            <div className="mission">
              <h2 className="section-title center">Our Mission</h2>
              <p className="mission-text">
                To make tech learning and placement preparation accessible to
                every student through Unisire, with practical guidance from
                industry professionals.
              </p>
              <p className="mission-text">
                We're removing the confusion from career prep by bringing
                multiple tech domains into one trusted, updated platform.
              </p>
            </div>
            <div className="vision-card">
              <h2 className="section-title center">Our Vision</h2>
              <ul className="vision-list">
                <li className="vision-item">
                  <Globe className="icon globe-icon" />
                  <p className="mission-text">
                    Build Unisire as the single hub where learning any
                    technology is easy, structured, and career-focused.
                  </p>
                </li>
                <li className="vision-item">
                  <Users className="icon user-icon" style={{ color: "None" }} />
                  <p className="mission-text">
                    Connect students with industry mentors and experts for
                    real-world insights through Unisire.
                  </p>
                </li>

                <li className="vision-item">
                  <Target className="icon target-icon" />
                  <p className="mission-text">
                    Empower learners to turn skills into careers, faster with
                    Unisire.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <h2 className="values-title">Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <FaRocket />
            </div>
            <h5>Innovation</h5>
            <p className="icon-paragraph">
              We evolve with new tech and keep Unisire's content updated for
              industry needs.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FaUsers />
            </div>
            <h5>Community</h5>
            <p className="icon-paragraph">
              A growing network of students, mentors, and professionals helping
              each other succeed on Unisire.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FaLightbulb />
            </div>
            <h5>Clarity</h5>
            <p className="icon-paragraph">
              Unisire provides roadmaps that cut through the noise and give
              clear learning paths.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FaChartLine />
            </div>
            <h5>Results</h5>
            <p className="icon-paragraph">
              Focused on outcomes — skills that get you hired through Unisire.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="impact-section" ref={impactRef}>
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-number indigo-text">
                {formatNumber(counts.platforms)}+
              </div>
              <p className="impact-label">Tech Platforms Built in Past Years</p>
            </div>
            <div className="impact-card">
              <div className="impact-number purple-text">
                {formatNumber(counts.students)}+
              </div>
              <p className="impact-label">Students Helped</p>
            </div>
            <div className="impact-card">
              <div className="impact-number sky-text">
                {formatNumber(counts.mentors)}+
              </div>
              <p className="impact-label">Industry Mentors Connected</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="journey-section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className="journey-content">
            <div className="journey-item">
              <div className="journey-icon-container indigo-bg">
                <Award className="journey-icon indigo-icon" />
              </div>
              <div>
                <h3>2021–2022 – Multiple Tech Platforms</h3>
                <p className="journey-text">
                  Launched dedicated learning platforms for web development,
                  programming, and data science, each with expert-led content.
                </p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-icon-container purple-bg">
                <Users className="journey-icon purple-icon" />
              </div>
              <div>
                <h3>2023–2024 – Community & Mentorship Growth</h3>
                <p className="journey-text">
                  Collaborated with multiple industry professionals and mentors
                  to create more refined, up-to-date content, while reaching
                  thousands of active learners across India.
                </p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-icon-container sky-bg">
                <Target className="journey-icon sky-icon" />
              </div>
              <div>
                <h3>2025 – Unisire Platform Launch</h3>
                <p className="journey-text">
                  Combined all previous platforms into Unisire - one powerful,
                  all-technology learning hub with AI-driven tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Updated with Experience Content */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-experience-content">
            <div className="experience-intro">
              <h3>
                Behind Unisire: Seasoned Professionals Building the Future of
                Tech Education
              </h3>
              <p className="experience-description">
                We are a team of experienced developers, industry professionals,
                and educators who have been building and scaling tech education
                platforms for years. Our collective experience ensures that
                Unisire is built on solid foundations of technical expertise and
                educational excellence.
              </p>
            </div>

            <div className="experience-grid">
              <div className="experience-card">
                <div className="experience-icon">
                  <Briefcase className="icon" />
                </div>
                <h4>Industry Experience</h4>
                <p>
                  Our team brings together{" "}
                  <strong>5+ years of combined experience</strong> in software
                  development, product management, and educational technology.
                  We've worked with startups and established companies, building
                  scalable solutions that serve thousands of users.
                </p>
              </div>

              <div className="experience-card">
                <div className="experience-icon">
                  <Code className="icon" />
                </div>
                <h4>Technical Expertise</h4>
                <p>
                  With expertise across{" "}
                  <strong>
                    full-stack development, AI/ML, data science, and cloud
                    technologies
                  </strong>
                  , we've built multiple successful platforms that have helped
                  students land jobs at top tech companies.
                </p>
              </div>

              <div className="experience-card">
                <div className="experience-icon">
                  <GraduationCap className="icon" />
                </div>
                <h4>Educational Background</h4>
                <p>
                  Our founders and core team include{" "}
                  <strong>computer science graduates</strong>
                  from reputable institutions with specialization in software
                  engineering, artificial intelligence, and educational
                  technology.
                </p>
              </div>

              {/* <div className="experience-card leadership-card">
                <div className="experience-icon">
                  <Users className="icon" />
                </div>
                <h4>Leadership Team</h4>
                <div className="founders-grid">
                  <FounderCard
                    name="Nitin Kelde"
                    role="(Founder of Unisire)"
                    description="Building Unisire by leveraging my network and vision to make structured learning more accessible and professional for everyone."
                    image={Founder}
                    linkedinUrl="https://www.linkedin.com/in/nitinkelde/" // Replace with actual LinkedIn URL
                  />

                  <FounderCard
                    name="Vyasa Khatawadia"
                    role="(Co-Founder of Unisire)"
                    description="Focused on scaling Unisire with innovation and discipline, ensuring the platform reflects trust, professionalism, and long-term value for learners."
                    image={CoFounder}
                    linkedinUrl="https://www.linkedin.com/in/khatiwada-sushant-a9b17022a" // Replace with actual LinkedIn URL
                  />
                </div>
              </div> */}
            </div>

            <div className="team-commitment">
              <h4>Our Commitment</h4>
              <p>
                We're not just building another learning platform. We're
                creating an ecosystem where students can access the same quality
                of education and mentorship that helped us succeed in our own
                tech careers. Every feature in Unisire is designed based on our
                real-world experience and the challenges we've overcome.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
