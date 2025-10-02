import React from "react";
import Cube from "../../Images/Logo/Cube.png";
const HeroNote = () => {
  return (
    <section id="new" className="section-author container">
      <div className="author1">
        <div className="authorfirst">
          <ion-icon
            className="star-outline increament"
            name="rocket-outline"
          ></ion-icon>
          <h3 className="heading-tertiary lh">The Journey Behind Unisire</h3>
          <p className="allparagraph lh">
            Every student faces the same challenge—where to start? The stress of
            placements and finding the right resources can be overwhelming. We
            have designed this platform in a way that eliminates uncertainty and
            provides everything you need to achieve success.
          </p>
          <div className="upper-first"></div>
          <p className="icon-paragraph lh">Dear Future Achiever,</p>
          <p className="icon-paragraph lh">
            I understand the struggles of navigating through countless
            resources, uncertain about which path to take. At Unisire, we
            believe that structured learning and the right guidance can change
            the game. That’s why we bring you curated roadmaps, resume
            references, and AI-powered tools, ensuring that your journey is
            smooth and impactful.
          </p>
          <p className="icon-paragraph lh">
            The road to success is not just about knowledge but also about
            direction. Our mission is to empower you with clarity, confidence,
            and resources that genuinely make a difference. Whether you are just
            starting or preparing for your dream job, we stand with you at every
            step.
          </p>
          <p className="icon-paragraph lh">
            We continuously work on improving this platform to serve students
            better. Our goal is to remove barriers and make high-quality
            learning accessible to everyone.
          </p>
          <p className="icon-paragraph lh">
            Unlike traditional edtech platforms and YouTubers, we do not sell
            courses for profit. Unisire is not about making money; it’s about
            making a difference. We do not focus on profits; instead, our
            mission is to ensure that students have access to the best resources
            without unnecessary financial burdens.
          </p>
          <p className="icon-paragraph lh">
            Dream big, work hard, and trust the process. I hope to see you
            somewhere, making a mark in the tech world. Your journey starts
            here, and I can't wait to witness your success!
          </p>
          <p
            className="icon-paragraph lh"
            style={{ marginTop: "4rem", color: "#444" }}
          >
            <strong>Nitin</strong>
          </p>
          <p className="icon-paragraph lh">Founder of Unisire</p>
        </div>
      </div>
      <div className="author2">
        <div className="image-first">
          <div>
            <p
              className="icon-paragraph lh"
              style={{ marginTop: "1rem", color: "#444" }}
            >
              <strong>Address</strong>
            </p>
            <p className="icon-paragraph lh" style={{ marginTop: "1rem" }}>
              Gurugram, Haryana
            </p>
          </div>
          <div>
            <img className="im1" src={Cube} alt="image" />
          </div>
        </div>
        <div className="image-second">
          <p className="icon-paragraph lh" style={{ marginTop: "1rem" }}>
            <strong>To:</strong> Future Achievers
          </p>
          <p className="icon-paragraph lh" style={{ marginTop: "1rem" }}>
            <strong>From:</strong> Nitin (Founder of Unisire)
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroNote;
