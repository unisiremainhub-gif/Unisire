// // import "./css/Faq.css";
// // import React, { useState, useEffect } from "react";
// // import {
// //   FaChevronDown,
// //   FaQuestionCircle,
// //   FaLightbulb,
// //   FaComments,
// // } from "react-icons/fa";

// // const FAQ = () => {
// //   const [activeIndex, setActiveIndex] = useState(null);

// //   const faqs = [
// //     {
// //       question: "Does this platform guarantee job placement?",
// //       answer:
// //         "We provide top-quality resources, expert guidance, and AI-driven tools to significantly enhance your chances of securing a job. However, placement ultimately depends on your dedication, skill development, and ability to leverage opportunities. No platform can guarantee 100% placement—this is a marketing strategy often used by edtech companies. Your success is determined by your efforts, adaptability, and strategic career planning.",
// //     },
// //     {
// //       question: "Are the learning materials credible and regularly updated?",
// //       answer:
// //         "Yes, all our learning materials, roadmaps, and career guidance resources are carefully curated by industry experts. We ensure that our content is regularly updated to reflect the latest industry trends, best practices, and job market requirements. Whether it's mastering a technology, preparing for interviews, or refining your resume, our platform offers the most relevant and up-to-date insights.",
// //     },
// //     {
// //       question: "Does this platform provide free learning resources?",
// //       answer:
// //         "Yes, we curate and provide access to the best free learning resources available online, ensuring students can learn effectively without financial constraints. Additionally, we recommend high-value, budget-friendly premium courses and materials for those seeking structured learning paths. Our goal is to make high-quality education accessible to all, without unnecessary expenses.",
// //     },
// //     {
// //       question: "How can I get started with this platform?",
// //       answer:
// //         "You can begin by exploring our structured roadmaps, designed to guide you through the essential skills and technologies for various career paths. Our resume section offers expert insights and references to help you craft ATS-friendly resumes. Additionally, our AI-powered tools support interview preparation, coding practice, and overall skill enhancement. Whether you're a beginner or an experienced learner, our platform is tailored to help you achieve your career goals.",
// //     },
// //     {
// //       question: "Who can use this platform?",
// //       answer:
// //         "This platform is designed for everyone, including students, freshers, and working professionals. Whether you are pursuing B.Tech, BE, BCA, MCA, or any technical degree, our structured roadmaps, AI tools, and resume references will help you in your career journey.",
// //     },
// //     {
// //       question: "Who designs the content on this platform?",
// //       answer:
// //         "The content on our platform is carefully curated and structured by Software Development Engineers (SDEs) and experienced industry professionals. This ensures that students get real-world, practical knowledge that aligns with current industry trends.",
// //     },
// //     {
// //       question: "Is this platform new?",
// //       answer:
// //         "Before Inskillify, we operated various technological websites focusing on different aspects of learning and career growth. Now, we have integrated all those resources into a single hub—Inskillify—making it a one-stop destination for structured roadmaps, AI tools, and resume references to help students excel in their careers.",
// //     },
// //   ];

// //   const toggleFAQ = (index) => {
// //     setActiveIndex(activeIndex === index ? null : index);
// //   };

// //   return (
// //     <div className="faq-container">
// //       <div className="decorative-shape shape-1"></div>
// //       <div className="decorative-shape shape-2"></div>

// //       <FaQuestionCircle className="floating-icon icon-1" />
// //       <FaLightbulb className="floating-icon icon-2" />
// //       <FaComments className="floating-icon icon-3" />

// //       <header className="faq-header">
// //         <h1 className="faq-h1">Frequently Asked Questions</h1>
// //         <p className="allparagraph">
// //           Find answers to common questions about our platform, resources, and
// //           how we can help you achieve your career goals.
// //         </p>
// //       </header>

// //       <div className="faq-container">
// //         {faqs.map((faq, index) => (
// //           <div
// //             key={index}
// //             className={`faq-item ${activeIndex === index ? "active" : ""}`}
// //             style={{ animationDelay: `${index * 0.1}s` }}
// //           >
// //             <div className="faq-question" onClick={() => toggleFAQ(index)}>
// //               <span>{faq.question}</span>
// //               <FaChevronDown
// //                 className={`chevron ${activeIndex === index ? "rotated" : ""}`}
// //               />
// //             </div>
// //             <div className="faq-answer">
// //               <p>{faq.answer}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default FAQ;

// import "./css/Faq.css";
// import React, { useState } from "react";
// import {
//   FaChevronDown,
//   FaQuestionCircle,
//   FaLightbulb,
//   FaComments,
// } from "react-icons/fa";

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const faqs = [
//     {
//       question: "Does this platform guarantee job placement?",
//       answer:
//         "We provide top-quality resources, expert guidance, and AI-driven tools to significantly enhance your chances of securing a job. However, placement ultimately depends on your dedication, skill development, and ability to leverage opportunities. No platform can guarantee 100% placement—this is a marketing strategy often used by edtech companies. Your success is determined by your efforts, adaptability, and strategic career planning.",
//     },
//     {
//       question: "Are the learning materials credible and regularly updated?",
//       answer:
//         "Yes, all our learning materials, roadmaps, and career guidance resources are carefully curated by industry experts. We ensure that our content is regularly updated to reflect the latest industry trends, best practices, and job market requirements. Whether it's mastering a technology, preparing for interviews, or refining your resume, our platform offers the most relevant and up-to-date insights.",
//     },
//     {
//       question: "Does this platform provide free learning resources?",
//       answer:
//         "Yes, we curate and provide access to the best free learning resources available online, ensuring students can learn effectively without financial constraints. Additionally, we recommend high-value, budget-friendly premium courses and materials for those seeking structured learning paths. Our goal is to make high-quality education accessible to all, without unnecessary expenses.",
//     },
//     {
//       question: "How can I get started with this platform?",
//       answer:
//         "You can begin by exploring our structured roadmaps, designed to guide you through the essential skills and technologies for various career paths. Our resume section offers expert insights and references to help you craft ATS-friendly resumes. Additionally, our AI-powered tools support interview preparation, coding practice, and overall skill enhancement. Whether you're a beginner or an experienced learner, our platform is tailored to help you achieve your career goals.",
//     },
//     {
//       question: "Who can use this platform?",
//       answer:
//         "This platform is designed for everyone, including students, freshers, and working professionals. Whether you are pursuing B.Tech, BE, BCA, MCA, or any technical degree, our structured roadmaps, AI tools, and resume references will help you in your career journey.",
//     },
//     {
//       question: "Who designs the content on this platform?",
//       answer:
//         "The content on our platform is carefully curated and structured by Software Development Engineers (SDEs) and experienced industry professionals. This ensures that students get real-world, practical knowledge that aligns with current industry trends.",
//     },
//     {
//       question: "Is this platform new?",
//       answer:
//         "Before Inskillify, we operated various technological websites focusing on different aspects of learning and career growth. Now, we have integrated all those resources into a single hub—Inskillify—making it a one-stop destination for structured roadmaps, AI tools, and resume references to help students excel in their careers.",
//     },
//   ];

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="faq-container">
//       <div className="decorative-shape shape-1"></div>
//       <div className="decorative-shape shape-2"></div>

//       <FaQuestionCircle className="floating-icon icon-1" />
//       <FaLightbulb className="floating-icon icon-2" />
//       <FaComments className="floating-icon icon-3" />

//       <header className="faq-header">
//         <h1 className="faq-h1">Frequently Asked Questions</h1>
//         <p className="allparagraph">
//           Find answers to common questions about our platform, resources, and
//           how we can help you achieve your career goals.
//         </p>
//       </header>

//       <div className="faq-container">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className={`faq-item ${activeIndex === index ? "active" : ""}`}
//           >
//             <div className="faq-question" onClick={() => toggleFAQ(index)}>
//               <span>{faq.question}</span>
//               <FaChevronDown
//                 className={`chevron ${activeIndex === index ? "rotated" : ""}`}
//               />
//             </div>
//             <div className="faq-answer">
//               <p>{faq.answer}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FAQ;

import "./css/Faq.css";
import React, { useState } from "react";
import { FaChevronDown, FaLightbulb } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

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
        "We have integrated all our resources into a single hub—Inskillify—making it a one-stop destination for structured learning.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="decorative-shape shape-1"></div>
      <div className="decorative-shape shape-2"></div>

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
            <div className="faq-answer">
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
