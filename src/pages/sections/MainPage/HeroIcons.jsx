import React, { useEffect } from "react";

const HeroIcons = () => {
  const features = [
    {
      icon: "people-outline",
      title: "Trusted Industry Experts",
      description:
        "Learn from professionals with 5+ years of real-world experience in their fields.",
    },
    {
      icon: "star-outline",
      title: "Rated 4.5/5 by Students",
      description:
        "Praised for practical, engaging, and results-driven learning experiences.",
    },
    {
      icon: "trending-up-outline",
      title: "Real-world Learning",
      description:
        "Skills and knowledge you can apply directly to your career or business.",
    },
    {
      icon: "pricetag-outline",
      title: "Free & Affordable Resources",
      description:
        "Premium-quality materials at a cost that works for students and professionals.",
    },
    {
      icon: "chatbubbles-outline",
      title: "Supportive & Active Community",
      description:
        "Get answers, share ideas, and grow with like-minded learners. (Coming Soon)",
    },
    {
      icon: "book-outline",
      title: "Blogs & Career Insights",
      description:
        "Expert-written content and guidance to help you navigate your career. (Coming Soon)",
    },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".my");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((item) => observer.observe(item));
    return () => items.forEach((item) => observer.unobserve(item));
  }, []);

  return (
    <section id="new" className="section-icon container">
      <div className="gridicons3-3">
        <div className="zero">
          <h2 className="heading-secondary marginbottom">
            Why Choose Unisire?
          </h2>
          <p className="allparagraph">
            Unisire is more than just learning—we're your partner in growth. Our
            platform blends trusted resources with hands-on tools so you can
            learn, practice, and achieve with confidence.
          </p>
        </div>
        <div className="unknown"></div>
        {features.map((feature, index) => (
          <div key={index} className={`my item-${index + 1}`}>
            <ion-icon className="ionicon" name={feature.icon}></ion-icon>
            <h4>{feature.title}</h4>
            <p className="icon-paragraph">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroIcons;
