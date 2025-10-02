import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const RoadMapsExplanation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="detailcard-container">
      <button className="rater-button self" onClick={() => navigate(-1)}>
        Back to Previous &#8592;
      </button>

      <div className="apply-form-container">
        <h2 className="heading-secondary marginbottom">
          How Our Resource Curation Works
        </h2>
        <p className="paragraph-primary">
          At Unisire, we've meticulously filtered thousands of online resources
          to bring you only the most effective learning materials. Our
          expert-driven selection process ensures you get quality over quantity,
          saving you from information overload and analysis paralysis.
        </p>

        <h3 className="career-requirements lower">1. Premium Video Courses</h3>
        <ul>
          <li className="icon-paragraph">
            Carefully selected premium courses from top educational platforms
            based on student ratings, instructor credibility, and curriculum
            depth.
          </li>
          <li className="icon-paragraph">
            Comprehensive coverage across Frontend Development, Backend Systems,
            DevOps, Cybersecurity, AI/ML, and emerging technologies.
          </li>
          <li className="icon-paragraph">
            Lifetime access with completion certificates that add professional
            credibility to your profile.
          </li>
        </ul>
        <h4 className="career-requirements lower">Advantages:</h4>
        <ul>
          <li className="icon-paragraph">
            Structured progression from fundamental concepts to advanced
            implementations
          </li>
          <li className="icon-paragraph">
            Real-world projects and case studies that build practical experience
          </li>
          <li className="icon-paragraph">
            Industry-recognized certifications that enhance job applications
          </li>
          <li className="icon-paragraph">
            Dedicated instructor support and community forums for doubt
            resolution
          </li>
        </ul>
        <h4 className="career-requirements lower">Disadvantages:</h4>
        <ul>
          <li className="icon-paragraph">
            Often requires financial investment compared to free alternatives
          </li>
          <li className="icon-paragraph">
            Course quality can vary significantly between different instructors
          </li>
          <li className="icon-paragraph">
            Some content may become outdated if not regularly maintained by
            creators
          </li>
          <li className="icon-paragraph">
            Limited interaction compared to live classroom environments
          </li>
        </ul>

        <h3 className="career-requirements lower">
          2. Comprehensive Video Playlists
        </h3>
        <ul>
          <li className="icon-paragraph">
            Expertly curated video series from trusted educational creators with
            proven track records
          </li>
          <li className="icon-paragraph">
            Complete learning paths covering HTML, CSS, JavaScript, ReactJS,
            Node.js, Python, and modern frameworks
          </li>
          <li className="icon-paragraph">
            Regularly updated content that adapts to current industry standards
            and best practices
          </li>
        </ul>
        <h4 className="career-requirements lower">Advantages:</h4>
        <ul>
          <li className="icon-paragraph">
            Completely free access to high-quality educational content
          </li>
          <li className="icon-paragraph">
            Content stays current with evolving technology trends and
            requirements
          </li>
          <li className="icon-paragraph">
            Learn from industry practitioners with real-world experience
          </li>
          <li className="icon-paragraph">
            Flexible learning pace with pause, rewind, and review capabilities
          </li>
        </ul>
        <h4 className="career-requirements lower">Disadvantages:</h4>
        <ul>
          <li className="icon-paragraph">
            Variable video quality and teaching styles across different creators
          </li>
          <li className="icon-paragraph">
            Limited structured assignments and graded assessments
          </li>
          <li className="icon-paragraph">
            No formal certification upon completion in most cases
          </li>
          <li className="icon-paragraph">
            Potential distractions from advertisements and platform algorithms
          </li>
        </ul>

        <h3 className="career-requirements lower">
          3. Accelerated Learning Courses
        </h3>
        <ul>
          <li className="icon-paragraph">
            Intensive short-format courses designed for rapid skill acquisition
            (typically 2-10 hours)
          </li>
          <li className="icon-paragraph">
            Focused topics including JavaScript Fundamentals, Python
            Programming, Full Stack Overview, and Interview Preparation
          </li>
          <li className="icon-paragraph">
            Ideal for knowledge refreshment and quick competency building in
            specific areas
          </li>
        </ul>
        <h4 className="career-requirements lower">Advantages:</h4>
        <ul>
          <li className="icon-paragraph">
            Time-efficient learning suitable for busy schedules and working
            professionals
          </li>
          <li className="icon-paragraph">
            Concentrated focus on practical, immediately applicable skills
          </li>
          <li className="icon-paragraph">
            Excellent preparation resource for technical interviews and
            assessments
          </li>
          <li className="icon-paragraph">
            Lower commitment threshold encourages consistent learning habits
          </li>
        </ul>
        <h4 className="career-requirements lower">Disadvantages:</h4>
        <ul>
          <li className="icon-paragraph">
            Limited depth and comprehensive coverage compared to full-length
            courses
          </li>
          <li className="icon-paragraph">
            May overlook foundational concepts and theoretical background
          </li>
          <li className="icon-paragraph">
            Reduced hands-on practice and project-building opportunities
          </li>
          <li className="icon-paragraph">
            Can create knowledge gaps if used as primary learning resource
          </li>
        </ul>

        <h3 className="career-requirements lower">
          4. Official Technical Documentation
        </h3>
        <h4 className="career-requirements lower">
          Why Master Documentation Reading?
        </h4>
        <ul>
          <li className="icon-paragraph">
            Direct learning from authoritative sources including MDN Web Docs,
            official framework documentation, and industry standards
          </li>
          <li className="icon-paragraph">
            Always current with latest syntax updates, security practices, and
            implementation guidelines
          </li>
          <li className="icon-paragraph">
            Develops essential self-learning capability crucial for professional
            growth and adaptability
          </li>
        </ul>
        <h4 className="career-requirements lower">Advantages:</h4>
        <ul>
          <li className="icon-paragraph">
            Builds critical skill of independent learning and technical research
          </li>
          <li className="icon-paragraph">
            Enhances debugging efficiency and problem-solving capabilities
          </li>
          <li className="icon-paragraph">
            Increases confidence when contributing to professional projects and
            open-source communities
          </li>
          <li className="icon-paragraph">
            Provides most accurate and comprehensive technical information
            available
          </li>
        </ul>
        <h4 className="career-requirements lower">Disadvantages:</h4>
        <ul>
          <li className="icon-paragraph">
            Steep learning curve for beginners unfamiliar with technical writing
            style
          </li>
          <li className="icon-paragraph">
            Can be overwhelming due to extensive information density
          </li>
          <li className="icon-paragraph">
            Limited step-by-step guidance compared to structured video courses
          </li>
          <li className="icon-paragraph">
            Requires strong self-motivation and disciplined learning approach
          </li>
        </ul>

        <h3 className="career-requirements lower">Our Curation Philosophy</h3>
        <p className="paragraph-primary">
          We understand that every learner has unique needs, preferences, and
          constraints. That's why we provide multiple resource types - not every
          format works for every person or situation. Some learners thrive with
          structured paid courses, while others excel with free community-driven
          content. Our goal is to present the best options so you can choose
          what fits your learning style, timeline, and budget.
        </p>

        <h3 className="career-requirements lower">Important Considerations</h3>
        <ul>
          <li className="icon-paragraph">
            <strong>External Platform Dependency:</strong> These resources are
            hosted on third-party platforms, and we cannot guarantee their
            permanent availability, quality consistency, or free access status
          </li>
          <li className="icon-paragraph">
            <strong>Content Updates:</strong> Technology evolves rapidly, and
            some resources may become outdated despite our continuous monitoring
            and updates
          </li>
          <li className="icon-paragraph">
            <strong>Learning Outcomes:</strong> Your success depends on
            consistent effort, practical application, and supplementing these
            resources with hands-on projects
          </li>
          <li className="icon-paragraph">
            <strong>Financial Considerations:</strong> Some premium resources
            require payment, though we always prioritize free alternatives when
            quality is comparable
          </li>
        </ul>

        <p
          className="paragraph-primary"
          style={{ marginTop: "2rem", fontStyle: "italic" }}
        >
          Remember: The perfect learning resource doesn't exist, but the right
          combination for your specific goals does. We've done the heavy lifting
          of filtering and quality-checking - your focus should be on consistent
          learning and application.
        </p>
      </div>
    </div>
  );
};

export default RoadMapsExplanation;
