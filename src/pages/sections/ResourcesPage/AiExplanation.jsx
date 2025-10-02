import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const AiExplanation = () => {
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
          AI Tools Reference Directory
        </h2>
        <p className="paragraph-primary">
          Our platform provides carefully curated references to AI tools that
          can enhance your learning experience, boost productivity, and
          streamline your development workflow. These are third-party tools
          we've evaluated and recommended based on community feedback, expert
          analysis, and practical utility.
        </p>

        <h3 className="career-requirements lower">What We Offer</h3>
        <ul>
          <li className="icon-paragraph">
            <strong>Curated AI Tool References:</strong> Handpicked selection of
            AI tools across different categories including code generation,
            image creation, writing assistance, and productivity enhancement
          </li>
          <li className="icon-paragraph">
            <strong>Use Case Guidance:</strong> Detailed explanations of how
            each tool can be applied to specific learning and development
            scenarios
          </li>
          <li className="icon-paragraph">
            <strong>Tool Comparisons:</strong> Insights into different AI tools
            available for similar tasks, helping you choose the right one for
            your needs
          </li>
          <li className="icon-paragraph">
            <strong>Practical Applications:</strong> Real-world examples of how
            these tools can accelerate your learning and project development
          </li>
        </ul>

        <h3 className="career-requirements lower">AI Tool Categories</h3>

        <h4 className="career-requirements lower">
          1. Code Generation & Assistance
        </h4>
        <ul>
          <li className="icon-paragraph">
            <strong>Purpose:</strong> Tools that help generate, debug, and
            optimize code across multiple programming languages
          </li>
          <li className="icon-paragraph">
            <strong>Common Uses:</strong> Writing boilerplate code, debugging
            errors, learning new syntax, code explanation, and optimization
            suggestions
          </li>
          <li className="icon-paragraph">
            <strong>Learning Benefits:</strong> Accelerate coding practice,
            understand complex concepts through generated examples, and receive
            instant feedback on your code
          </li>
        </ul>

        <h4 className="career-requirements lower">
          2. Image & Content Creation
        </h4>
        <ul>
          <li className="icon-paragraph">
            <strong>Purpose:</strong> AI tools specialized in generating
            realistic images, graphics, and visual content
          </li>
          <li className="icon-paragraph">
            <strong>Common Uses:</strong> Creating project mockups, generating
            portfolio images, designing UI elements, and producing educational
            visual aids
          </li>
          <li className="icon-paragraph">
            <strong>Learning Benefits:</strong> Visualize concepts, create
            professional project presentations, and enhance your design skills
            without extensive graphic design experience
          </li>
        </ul>

        <h4 className="career-requirements lower">
          3. Writing & Documentation
        </h4>
        <ul>
          <li className="icon-paragraph">
            <strong>Purpose:</strong> Tools that assist with technical writing,
            documentation, and content creation
          </li>
          <li className="icon-paragraph">
            <strong>Common Uses:</strong> Writing project documentation,
            creating technical blogs, improving communication clarity, and
            generating reports
          </li>
          <li className="icon-paragraph">
            <strong>Learning Benefits:</strong> Improve technical communication
            skills, learn professional documentation standards, and enhance
            project presentation quality
          </li>
        </ul>

        <h4 className="career-requirements lower">
          4. Productivity & Learning Enhancement
        </h4>
        <ul>
          <li className="icon-paragraph">
            <strong>Purpose:</strong> AI tools designed to optimize learning
            efficiency and workflow management
          </li>
          <li className="icon-paragraph">
            <strong>Common Uses:</strong> Personalized learning path creation,
            study schedule optimization, concept summarization, and knowledge
            gap identification
          </li>
          <li className="icon-paragraph">
            <strong>Learning Benefits:</strong> Maximize study efficiency,
            identify areas for improvement, and maintain consistent learning
            progress
          </li>
        </ul>

        <h3 className="career-requirements lower">
          How to Use These References
        </h3>
        <ul>
          <li className="icon-paragraph">
            <strong>Tool Selection:</strong> Choose AI tools based on your
            specific learning objectives, project requirements, and personal
            workflow preferences
          </li>
          <li className="icon-paragraph">
            <strong>Integration Strategy:</strong> Learn how to effectively
            incorporate AI tools into your existing learning process without
            becoming overly dependent
          </li>
          <li className="icon-paragraph">
            <strong>Best Practices:</strong> Understand when and how to use AI
            assistance versus developing fundamental skills through traditional
            learning methods
          </li>
          <li className="icon-paragraph">
            <strong>Ethical Usage:</strong> Guidelines for using AI tools
            responsibly in academic and professional contexts
          </li>
        </ul>

        <h3 className="career-requirements lower">Important Considerations</h3>
        <ul>
          <li className="icon-paragraph">
            <strong>External Tools:</strong> These are third-party AI tools
            hosted and maintained by their respective providers. We only provide
            references and recommendations
          </li>
          <li className="icon-paragraph">
            <strong>Pricing Models:</strong> Many AI tools operate on freemium
            models with limited free access and premium features requiring
            payment
          </li>
          <li className="icon-paragraph">
            <strong>Tool Evolution:</strong> AI tools evolve rapidly, with
            features, pricing, and availability subject to frequent changes by
            their developers
          </li>
          <li className="icon-paragraph">
            <strong>Learning Balance:</strong> While AI tools can enhance
            learning, they should complement rather than replace fundamental
            skill development and critical thinking
          </li>
        </ul>

        <h3 className="career-requirements lower">
          Benefits of Using AI Tools in Learning
        </h3>
        <ul>
          <li className="icon-paragraph">
            <strong>Accelerated Learning:</strong> Get instant explanations,
            code examples, and problem-solving assistance to overcome learning
            obstacles quickly
          </li>
          <li className="icon-paragraph">
            <strong>Enhanced Productivity:</strong> Automate repetitive tasks
            and focus on core learning objectives and complex problem-solving
          </li>
          <li className="icon-paragraph">
            <strong>Personalized Assistance:</strong> Receive tailored help
            based on your specific learning pace, style, and knowledge gaps
          </li>
          <li className="icon-paragraph">
            <strong>Creative Exploration:</strong> Experiment with ideas and
            concepts that might be difficult to implement manually at your
            current skill level
          </li>
        </ul>

        <h3 className="career-requirements lower">
          Limitations & Responsible Usage
        </h3>
        <ul>
          <li className="icon-paragraph">
            <strong>Dependency Risk:</strong> Over-reliance on AI tools can
            hinder the development of fundamental problem-solving skills and
            deep understanding
          </li>
          <li className="icon-paragraph">
            <strong>Accuracy Verification:</strong> AI-generated content may
            contain errors or outdated information that requires verification
            and critical evaluation
          </li>
          <li className="icon-paragraph">
            <strong>Privacy Considerations:</strong> Be mindful of the data you
            share with third-party AI tools and review their privacy policies
          </li>
          <li className="icon-paragraph">
            <strong>Academic Integrity:</strong> Ensure your use of AI tools
            aligns with academic honor codes and professional ethical standards
          </li>
        </ul>

        <h3 className="career-requirements lower">Our Curation Process</h3>
        <ul>
          <li className="icon-paragraph">
            <strong>Community Feedback:</strong> Tools are evaluated based on
            feedback from our 10,000+ active learners and their real-world usage
            experiences
          </li>
          <li className="icon-paragraph">
            <strong>Expert Analysis:</strong> Each tool undergoes assessment by
            industry professionals for reliability, usefulness, and learning
            value
          </li>
          <li className="icon-paragraph">
            <strong>Continuous Monitoring:</strong> We regularly update our
            recommendations based on tool performance, user satisfaction, and
            emerging alternatives
          </li>
          <li className="icon-paragraph">
            <strong>Practical Focus:</strong> Priority given to tools that
            provide tangible benefits for students and early-career
            professionals
          </li>
        </ul>

        <p
          className="paragraph-primary"
          style={{ marginTop: "2rem", fontStyle: "italic" }}
        >
          Remember: AI tools are powerful assistants, not replacements for
          genuine learning and skill development. Use them to enhance your
          capabilities, accelerate your progress, and overcome challenges, but
          always maintain focus on building solid foundational knowledge and
          critical thinking skills.
        </p>
      </div>
    </div>
  );
};

export default AiExplanation;
