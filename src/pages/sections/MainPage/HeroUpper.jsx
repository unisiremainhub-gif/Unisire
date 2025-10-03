import React from "react";
import { useNavigate } from "react-router-dom";
import gd from "../../../assests/Button/62278b663d7e47250dfab932_img-cursor-cyan.png";
import cursorRed from "../../../assests/Button/62278b67bd0d956e2ceddb8e_img-cursor-red.png";
import cursorOrange from "../../../assests/Button/62278b6683986b1e7f8eed85_img-cursor-orange.png";
import cursorPurple from "../../../assests/Button/62278b674a1d7073643f2496_img-cursor-purple.png";
import image1 from "../../../assests/Herosection/sayo-garcia-RW32Rt7K5zI-unsplash (1).jpg";
import image2 from "../../../assests/Herosection/himanshu-dewangan-k9tUQNeOfx0-unsplash (1).jpg";
import image3 from "../../../assests/Herosection/623ad83d376b6b2ab61d3144_img-student-04.jpg";
import image4 from "../../../assests/Herosection/623ad83d38806b0348e84886_img-student-15.jpg";
import image5 from "../../../assests/Herosection/623ad83d38806b76ede84885_img-student-09.jpg";
import image6 from "../../../assests/Herosection/623ad83d41dcf08d6b586e42_img-student-08.jpg";
import image7 from "../../../assests/Herosection/623d9754f7c8aceabe8f5c17_aditya-student.jpg";
import image8 from "../../../assests/Herosection/623ad83d5c3484f70465d666_img-student-11.jpg";
import image9 from "../../../assests/Herosection/623ad83d5fd9d20f1bfe20a6_img-student-14.jpg";
import image10 from "../../../assests/Herosection/darshan-patel-QJEVpydulGs-unsplash (1).jpg";
import image11 from "../../../assests/Herosection/623ad83efaf3d79fc65b70ce_img-student-19.jpg";
import image12 from "../../../assests/Herosection/623d97533d2b8f08aac8a100_pranavi-student.jpg";
import image13 from "../../../assests/Herosection/623ad83d9c0878a93c74ab58_img-student-06.jpg";
import image14 from "../../../assests/Herosection/623ad83df9a5e08b368b4c2a_img-student-05.jpg";
import image15 from "../../../assests/Herosection/623ad83e2f3b2a7b3c29d5c4_img-student-16.jpg";
import image16 from "../../../assests/Herosection/623ad83e5c34844d2365d667_img-student-18.jpg";
import image17 from "../../../assests/Herosection/623ad83e62afb1313c7facdb_img-student-17.jpg";
import image18 from "../../../assests/Herosection/623ad83e6a9a12408f9ea3cc_img-student-21.jpg";
import image19 from "../../../assests/Herosection/623ad83d62afb1d4e87facd2_img-student-03.jpg";
import image20 from "../../../assests/Herosection/623ad83d6506220be4bd47e9_img-student-07.jpg";
import image21 from "../../../assests/Herosection/623ad83d6800ab44d49a68bd_img-student-01.jpg";
import { useEffect } from "react";

function HeroUpper() {
  useEffect(() => {
    const images = document.querySelectorAll(".mover-buttons");

    images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add("show");
      }, index * 200); // 0.2s delay between each
    });
  }, []);

  // const scrollToSection = () => {
  //   setTimeout(() => {
  //     const section = document.getElementById("company-logos");
  //     if (section) {
  //       section.scrollIntoView({ behavior: "smooth" });
  //     } else {
  //       console.error("Section with ID 'company-logos' not found.");
  //     }
  //   }, 100); // Small delay ensures DOM is ready
  // };

  const scrollToSection = () => {
    const currentSection = document.getElementById("new"); // HeroUpper section
    if (currentSection && currentSection.nextElementSibling) {
      const nextSection = currentSection.nextElementSibling;
      const yOffset = -70; // navbar height
      const y =
        nextSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const navigate = useNavigate();

  const goToResourcesPage = () => {
    navigate("/resources/"); // Navigates to the "/resources" page
  };

  return (
    <>
      <section
        id="new"
        className="hero-section"
        style={{ padding: "2rem 0 4rem" }}
      >
        <div className="container flex">
          <div className="main-subject">
            <h1
              className="heading-primary center"
              style={{ marginBottom: "2rem" }}
            >
              Unleash Your True Potential!
            </h1>
          </div>
          <div className="hero-paragraph">
            <p className="paragraph-primary center">
              At Unisire, we believe every student deserves access to the right
              tools and knowledge to succeed. Our platform provides everything
              you need for personal and professional growth—without the hassle
              of endlessly searching the internet.
            </p>
          </div>
          <div className="hero-button">
            <button className="btn hero-button1" onClick={goToResourcesPage}>
              Resources
            </button>
            <button className="btn hero-button2" onClick={scrollToSection}>
              Learn More
            </button>
          </div>
          <img
            className="mover-buttons mover-buttons1"
            src={gd}
            alt="Cyan colored cursor icon"
            style={{ top: "5%" }}
          />
          <img
            className="mover-buttons mover-buttons3"
            src={cursorRed}
            alt="Red colored cursor icon"
            style={{ top: "5%" }}
          />
          <img
            className="mover-buttons mover-buttons2"
            src={cursorOrange}
            alt="Orange colored cursor icon"
          />
          <img
            className="mover-buttons mover-buttons4"
            src={cursorPurple}
            alt="Purple colored cursor icon"
          />
        </div>
        <div className="container grid7">
          <div className="flex-images flex-images1">
            <img
              className="flex-image flex-image1"
              src={image1}
              alt="Group of students studying in a modern classroom"
            />
            <img
              className="flex-image flex-image2"
              src={image2}
              alt="Student studying on a laptop in a cozy setting"
            />
            <img
              className="flex-image flex-image3"
              src={image3}
              alt="Close-up of a student's hands writing on paper"
            />
          </div>
          <div className="flex-images flex-images2">
            <img
              className="flex-image flex-image4"
              src={image4}
              alt="Smiling student holding a book"
            />
            <img
              className="flex-image flex-image5"
              src={image5}
              alt="Student standing with arms crossed in front of a university building"
            />
            <img
              className="flex-image flex-image6"
              src={image6}
              alt="Student presenting a project in class"
            />
          </div>
          <div className="flex-images flex-images3">
            <img
              className="flex-image flex-image7"
              src={image7}
              alt="Student posing in front of a classroom board"
            />
            <img
              className="flex-image flex-image8"
              src={image8}
              alt="Student brainstorming with a notebook and pen"
            />
            <img
              className="flex-image flex-image9"
              src={image9}
              alt="Group of students working together on a project"
            />
          </div>
          <div className="flex-images flex-images4">
            <img
              className="flex-image flex-image19"
              src={image10}
              alt="Outdoor study session with students reading under a tree"
            />
            <img
              className="flex-image flex-image20"
              src={image11}
              alt="Student raising their hand in class"
            />
            <img
              className="flex-image flex-image21"
              src={image12}
              alt="Student working on a laptop in a library"
            />
            <img
              className="flex-image flex-image7"
              src={image7}
              alt="Student focused on their work"
            />
          </div>
          <div className="flex-images flex-images5">
            <img
              className="flex-image flex-image13"
              src={image13}
              alt="Student writing notes in a notebook during a lecture"
            />
            <img
              className="flex-image flex-image14"
              src={image14}
              alt="Smiling student looking at a laptop screen"
            />
            <img
              className="flex-image flex-image15"
              src={image15}
              alt="Student presenting a paper in front of a classroom"
            />
          </div>
          <div className="flex-images flex-images6">
            <img
              className="flex-image flex-image16"
              src={image16}
              alt="Student working with a group on a project"
            />
            <img
              className="flex-image flex-image17"
              src={image17}
              alt="Focused student taking notes in class"
            />
            <img
              className="flex-image flex-image18"
              src={image18}
              alt="Student reading a textbook in the library"
            />
          </div>
          <div className="flex-images flex-images7">
            <img
              className="flex-image flex-image10"
              src={image19}
              alt="Student enjoying a break while reading"
            />
            <img
              className="flex-image flex-image11"
              src={image20}
              alt="Group of students in a study session"
            />
            <img
              className="flex-image flex-image12"
              src={image21}
              alt="Student writing in a notebook in class"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroUpper;
