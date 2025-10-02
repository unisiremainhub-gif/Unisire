import "../../css/Faq.css";
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaLightbulb } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqRefs = useRef([]);

  const faqs = [
    {
      question: "Does this platform guarantee job placement?",
      answer:
        "We provide top-quality resources, expert guidance, and AI-driven tools to significantly enhance your chances of securing a job. However, placement ultimately depends on your dedication, skill development, and ability to leverage opportunities.",
    },
    {
      question: "Are the learning materials credible and regularly updated?",
      answer:
        "Yes, all our learning materials, roadmaps, and career guidance resources are carefully curated by industry experts. We ensure that our content is regularly updated to reflect the latest industry trends.",
    },
    {
      question: "Does this platform provide free learning resources?",
      answer:
        "Yes, we curate and provide access to the best free learning resources available online, ensuring students can learn effectively without financial constraints.",
    },
    {
      question: "How can I get started with this platform?",
      answer:
        "You can begin by exploring our structured roadmaps, designed to guide you through the essential skills and technologies for various career paths.",
    },
    {
      question: "Who can use this platform?",
      answer:
        "This platform is designed for everyone, including students, freshers, and working professionals pursuing technical degrees.",
    },
    {
      question: "Who designs the content on this platform?",
      answer:
        "The content is carefully curated by Software Development Engineers (SDEs) and experienced industry professionals.",
    },
    {
      question: "Is this platform new?",
      answer:
        "We have integrated all our resources into a single hub—Unisire—making it a one-stop destination for structured learning.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // Adjust height dynamically when activeIndex changes
    faqRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === activeIndex) {
        el.style.height = el.scrollHeight + "px";
      } else {
        el.style.height = "0px";
      }
    });
  }, [activeIndex]);

  return (
    <div className="faq-container">
      <div className="decorative-shape-home shape-1"></div>
      <div className="decorative-shape-home shape-2"></div>

      <FaLightbulb className="floating-icon" />

      <header className="faq-header">
        <h1 className="faq-h1">Frequently Asked Questions</h1>
        <p className="allparagraph">
          Find answers to common questions about our platform and resources.
        </p>
      </header>

      <div className="faq-items-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <FaChevronDown
                className={`chevron ${activeIndex === index ? "rotated" : ""}`}
              />
            </div>
            <div
              className="faq-answer"
              ref={(el) => (faqRefs.current[index] = el)}
            >
              <div className="faq-answer-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
