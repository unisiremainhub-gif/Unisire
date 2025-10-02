import React, { useState, useEffect, useRef } from "react";
import {
  Clock,
  Target,
  CheckCircle,
  XCircle,
  TrendingUp,
  FileText,
  Zap,
  Calendar,
  BookOpen,
  UserCheck,
} from "lucide-react";
import "../../css/ComparisonSection.css";

const ComparisonSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState([]);
  const [counted, setCounted] = useState(false);

  // State for animated numbers
  const [hoursWasted, setHoursWasted] = useState(0);
  const [monthsDelay, setMonthsDelay] = useState(0);
  const [moreEffort, setMoreEffort] = useState(0);

  const sectionRef = useRef(null);
  const barsRef = useRef([]);

  const timeWasteData = [
    { activity: "Searching Resources", hours: 15, color: "#ff6b6b" },
    { activity: "Learning Wrong Skills", hours: 12, color: "#ffa726" },
    { activity: "Resume Preparation", hours: 8, color: "#4ecdc4" },
    { activity: "Interview Prep", hours: 10, color: "#45b7d1" },
    { activity: "Waiting for Placements", hours: 20, color: "#96ceb4" },
  ];

  const solutionSteps = [
    {
      icon: <BookOpen className="step-icon" />,
      title: "Follow Structured Roadmaps",
      description: "Expert-curated learning paths based on your career goals",
      benefit: "Save 15+ hours monthly",
      color: "#667eea",
    },
    {
      icon: <FileText className="step-icon" />,
      title: "Use Resume Section",
      description:
        "Access real resumes of placed students and AI-powered resume builder",
      benefit: "Get interview-ready in days",
      color: "#764ba2",
    },
    {
      icon: <Zap className="step-icon" />,
      title: "Leverage AI Tools",
      description: "Smart recommendations and personalized guidance",
      benefit: "Accelerate learning by 3x",
      color: "#f093fb",
    },
    {
      icon: <Calendar className="step-icon" />,
      title: "Wait for Upcoming Features",
      description: "Live mentorship and real-time project collaborations",
      benefit: "Continuous growth",
      color: "#4ecdc4",
    },
  ];

  // Function to animate numbers
  const animateNumber = (setValue, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, 16);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted) {
          setIsVisible(true);
          setCounted(true);

          // Animate bars one by one
          timeWasteData.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedBars((prev) => [...prev, index]);
            }, index * 300);
          });

          // Start number animations
          const totalWastedHours = timeWasteData.reduce(
            (sum, item) => sum + item.hours,
            0
          );

          animateNumber(setHoursWasted, totalWastedHours);
          animateNumber(setMonthsDelay, 6); // Target is 3-6 months, using 6 for animation
          animateNumber(setMoreEffort, 65); // 65%
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [counted]);

  const totalWastedHours = timeWasteData.reduce(
    (sum, item) => sum + item.hours,
    0
  );

  // Calculate responsive bar height
  const getBarHeight = (hours) => {
    const maxHours = Math.max(...timeWasteData.map((item) => item.hours));
    return (hours / maxHours) * 100;
  };

  return (
    <section ref={sectionRef} className="time-comparison-section">
      <div className="comparison-container">
        {/* Header */}
        <div className="comparison-header">
          <h2 className="comparison-title">
            Stop Wasting Time, Start Achieving Dreams
          </h2>
          <p className="comparison-subtitle">
            Students waste{" "}
            <span className="highlight-text">{hoursWasted}+ hours</span> monthly
            on ineffective learning. With Unisire, achieve your dream placement
            in record time.
          </p>
        </div>

        {/* Time Waste Visualization */}
        <div className="time-waste-section">
          <div className="time-waste-header">
            <Clock className="time-icon" />
            <h3>Where Students Waste Time</h3>
          </div>

          <div className="time-waste-graph">
            {timeWasteData.map((item, index) => (
              <div key={index} className="time-bar-container">
                <div className="time-bar-wrapper">
                  <div
                    ref={(el) => (barsRef.current[index] = el)}
                    className={`time-bar ${
                      animatedBars.includes(index) ? "animated filled" : ""
                    }`}
                    style={{
                      backgroundColor: animatedBars.includes(index)
                        ? item.color
                        : "transparent",
                      height: `${getBarHeight(item.hours)}%`,
                      border: `2px solid ${item.color}`,
                      transition: `background-color 0.5s ease ${
                        index * 0.3
                      }s, transform 0.3s ease`,
                    }}
                  >
                    <span className="time-value">{item.hours}Days</span>
                  </div>
                </div>
                <div className="time-label">
                  <span>{item.activity}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="time-waste-stats">
            <div className="stat-card">
              <div className="stat-number">{hoursWasted}+</div>
              <div className="stat-label">Hours Wasted Monthly</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                {monthsDelay >= 3 ? "3-6" : monthsDelay}
              </div>
              <div className="stat-label">Months Delay</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{moreEffort}%</div>
              <div className="stat-label">More Effort</div>
            </div>
          </div>
        </div>

        {/* Solution Steps */}
        <div className="solution-section">
          <div className="solution-header">
            <Target className="solution-icon" />
            <h3>Achieve Your Dreams Faster with Unisire</h3>
            <p>
              Follow these 4 simple steps to cut through the noise and land your
              dream job
            </p>
          </div>

          <div className="solution-grid">
            {solutionSteps.map((step, index) => (
              <div
                key={index}
                className={`solution-card ${isVisible ? "fade-in" : ""}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className="solution-icon-container"
                  style={{ backgroundColor: step.color }}
                >
                  {step.icon}
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
                <div className="benefit-badge">
                  <TrendingUp className="benefit-icon" />
                  <span>{step.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
