import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const ResumeExplanation = () => {
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
          Resume Reference Library
        </h2>
        <p className="paragraph-primary">
          Our platform provides authentic, anonymized resume examples from
          students and professionals who have successfully secured positions at
          leading tech companies. These references serve as proven templates to
          guide your resume creation process.
        </p>

        <h3 className="career-requirements lower">What We Currently Offer</h3>
        <ul>
          <li className="icon-paragraph">
            <strong>Verified Placement Resumes:</strong> Real resumes from
            candidates placed at companies like Paytm, Microsoft, Google,
            Amazon, and other top-tier organizations
          </li>
          <li className="icon-paragraph">
            <strong>Multiple Career Tracks:</strong> Resume examples across
            various domains including Frontend Development, Backend Engineering,
            Full Stack, DevOps, Data Science, and AI/ML
          </li>
          <li className="icon-paragraph">
            <strong>Experience Levels:</strong> References from fresh graduates
            to experienced professionals showing career progression and skill
            development
          </li>
          <li className="icon-paragraph">
            <strong>Industry-Standard Formats:</strong> Resumes that follow
            current hiring trends and professional presentation standards
          </li>
        </ul>

        <h3 className="career-requirements lower">
          How to Use These References
        </h3>
        <ul>
          <li className="icon-paragraph">
            <strong>Structure Inspiration:</strong> Study the layout, section
            organization, and content flow of successful resumes in your target
            field
          </li>
          <li className="icon-paragraph">
            <strong>Skill Presentation:</strong> Learn how to effectively
            showcase technical skills, projects, and achievements in a
            compelling manner
          </li>
          <li className="icon-paragraph">
            <strong>Keyword Optimization:</strong> Identify industry-specific
            keywords and terminology that resonate with recruiters in your
            desired role
          </li>
          <li className="icon-paragraph">
            <strong>Achievement Articulation:</strong> Understand how to
            transform routine responsibilities into impactful achievements with
            measurable results
          </li>
        </ul>

        <h3 className="career-requirements lower">Privacy & Anonymization</h3>
        <ul>
          <li className="icon-paragraph">
            <strong>Personal Information Protection:</strong> All personally
            identifiable information including names, contact details, and
            specific personal identifiers have been removed or replaced with
            generic placeholders to protect individual privacy
          </li>
          <li className="icon-paragraph">
            <strong>Company Confidentiality:</strong> Sensitive company
            information and proprietary project details have been generalized
            while maintaining the educational value of the resume structure
          </li>
          <li className="icon-paragraph">
            <strong>Educational Integrity:</strong> Academic institutions and
            degree information are preserved to maintain the credibility and
            context of the resume examples
          </li>
          <li className="icon-paragraph">
            <strong>Consent-Based Sharing:</strong> All resumes are shared with
            explicit permission from the individuals, with understanding of the
            anonymization process
          </li>
        </ul>

        <h3 className="career-requirements lower">
          Benefits of Using Resume References
        </h3>
        <ul>
          <li className="icon-paragraph">
            <strong>Proven Success Patterns:</strong> Learn from resumes that
            have actually resulted in job offers and interviews at desirable
            companies
          </li>
          <li className="icon-paragraph">
            <strong>Time Efficiency:</strong> Save countless hours researching
            resume best practices by studying what has worked for others in
            similar positions
          </li>
          <li className="icon-paragraph">
            <strong>Industry Insights:</strong> Gain understanding of what
            different companies and roles prioritize in candidate selection
          </li>
          <li className="icon-paragraph">
            <strong>Confidence Building:</strong> Approach resume creation with
            greater confidence knowing you're following proven templates and
            structures
          </li>
        </ul>

        <h3 className="career-requirements lower">
          Important Limitations & Considerations
        </h3>
        <ul>
          <li className="icon-paragraph">
            <strong>Not One-Size-Fits-All:</strong> These are references, not
            templates to copy verbatim. Your resume should reflect your unique
            experiences and skills
          </li>
          <li className="icon-paragraph">
            <strong>Industry Evolution:</strong> Resume trends and expectations
            change over time. Use these as guidance while staying current with
            modern hiring practices
          </li>
          <li className="icon-paragraph">
            <strong>Regional Variations:</strong> Resume expectations can vary
            by geographic location, company culture, and specific industry norms
          </li>
          <li className="icon-paragraph">
            <strong>Skill Authenticity:</strong> Only include skills and
            experiences you genuinely possess. Misrepresentation can have
            serious consequences during interviews and employment
          </li>
        </ul>

        <h3 className="career-requirements lower">Coming Soon Features</h3>
        <ul>
          <li className="icon-paragraph">
            <strong>Interactive Resume Builder:</strong> Tool to create and
            customize your own resume using proven structures and templates
          </li>
          <li className="icon-paragraph">
            <strong>ATS Score Analysis:</strong> Automated scanning to evaluate
            how well your resume performs with Applicant Tracking Systems used
            by most companies
          </li>
          <li className="icon-paragraph">
            <strong>Personalized Recommendations:</strong> AI-powered
            suggestions for improving your resume based on your target roles and
            companies
          </li>
          <li className="icon-paragraph">
            <strong>Industry-Specific Templates:</strong> Customized resume
            formats optimized for different tech domains and career levels
          </li>
        </ul>

        <h3 className="career-requirements lower">
          Best Practices for Resume Creation
        </h3>
        <ul>
          <li className="icon-paragraph">
            <strong>Customize for Each Application:</strong> Tailor your resume
            to highlight the most relevant skills and experiences for each
            specific job opportunity
          </li>
          <li className="icon-paragraph">
            <strong>Quantify Achievements:</strong> Use numbers and metrics to
            demonstrate impact whenever possible (e.g., "Improved performance by
            40%", "Managed team of 5 developers")
          </li>
          <li className="icon-paragraph">
            <strong>Focus on Results:</strong> Emphasize what you accomplished
            rather than just listing responsibilities or tasks performed
          </li>
          <li className="icon-paragraph">
            <strong>Keep it Concise:</strong> Aim for one page for early-career
            professionals, two pages maximum for experienced candidates
          </li>
          <li className="icon-paragraph">
            <strong>Proofread Thoroughly:</strong> Spelling errors and
            formatting inconsistencies can significantly impact your chances of
            selection
          </li>
        </ul>

        <p
          className="paragraph-primary"
          style={{ marginTop: "2rem", fontStyle: "italic" }}
        >
          Remember: A great resume gets you the interview, but your skills and
          personality get you the job. Use these references as a starting point,
          then make the resume uniquely yours by highlighting your specific
          achievements and capabilities.
        </p>
      </div>
    </div>
  );
};

export default ResumeExplanation;
