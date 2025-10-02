import React from "react";
import { UserCheck, Zap } from "lucide-react";
// import "./JoinJourney.css";
import "../../css/ComparisonSection.css";

const JoinJourney = () => {
  return (
    <section className="time-comparison-section">
      {/* CTA */}

      <div className="comparison-container">
        <div className="cta-section">
          <UserCheck className="cta-icon" />
          <h3>Ready to Stop Wasting Time?</h3>
          <p>
            Join thousands of students who achieved their dream placements
            faster with Unisire
          </p>
          <button
            className="cta-button"
            onClick={() => (window.location.href = "/resources")}
          >
            Start Your Journey <Zap className="button-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinJourney;
