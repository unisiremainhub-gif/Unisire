import React from "react";
import { useState } from "react";
import course1 from "../../../assests/Courses/course1.png";
import course2 from "../../../assests/Courses/course2.jpeg";
import course3 from "../../../assests/Courses/course3.jpeg";

import { useEffect } from "react";
const HeroMainContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const images = document.querySelectorAll(".packageimage-box");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    images.forEach((img) => observer.observe(img));

    return () => images.forEach((img) => observer.unobserve(img));
  }, []);

  return (
    <section id="new" className="section-package container">
      <h2 class="heading-secondary marginbottom extramarginbottom">
        What Makes Unisire Your Best Learning Partner?
      </h2>
      <div className="package">
        <div className="packageimage">
          <img
            className="packageimage-box"
            src={course1}
            alt="Course cover for course 1"
          />
        </div>
        <div>
          <div className="packagetext-box">
            <h3 className="heading-secondary font">
              Empowering 1K+ Students with Expert-Crafted Content
            </h3>
            <p className="icon-paragraph">
              With over 0K+ students benefiting daily and content designed by 5+
              experienced Developers, Unisire provides the perfect platform for
              students to learn, grow, and achieve their career goals.
            </p>
            <div className="spacer">
              <div className="icon-leftside">
                <div className="icon-property">
                  <ion-icon
                    className="star-outline"
                    name="star-outline"
                  ></ion-icon>
                </div>
                <div className="icon-sidebar">
                  <h5>Expertly Rated by Students</h5>
                  <p className="icon-paragraph fontsmall">
                    Our resources are highly rated by students, ensuring
                    top-notch quality and effective learning.
                  </p>
                </div>
              </div>
              <div className="icon-leftside">
                <div className="icon-property">
                  <ion-icon
                    className="star-outline"
                    name="git-compare-outline"
                  ></ion-icon>
                </div>

                <div className="icon-sidebar">
                  <h5>Endless Learning Opportunities</h5>
                  <p className="icon-paragraph fontsmall">
                    With infinite learning possibilities, Unisire ensures
                    continuous growth for students, with a focus on practical
                    knowledge and skills.
                  </p>
                </div>
              </div>
              <div className="icon-leftside">
                <div className="icon-property">
                  <ion-icon
                    className="star-outline"
                    name="checkmark-circle-outline"
                  ></ion-icon>
                </div>

                <div className="icon-sidebar">
                  <h5>Trusted and Verified</h5>
                  <p className="icon-paragraph fontsmall">
                    Our platform is trusted by thousands of students, and the
                    content we provide is verified by industry experts and
                    educators.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="rater-button self"
              onClick={() => (window.location.href = "/resources")}
            >
              View Resources &#8594;
            </button>
          </div>
        </div>
        <div className="packageimage">
          <img
            className="packageimage-box"
            src={course2}
            alt="Course cover for course 2"
          />
        </div>
        <div>
          <div className="packagetext-box">
            <h3 className="heading-secondary font">
              Crafted by Industry Professionals with Real-World Experience
            </h3>
            <p className="icon-paragraph">
              Unisire content is carefully designed by a team of seasoned
              professionals with years of real-world experience. These experts
              ensure that every resource, guide, and lesson is aligned with
              industry standards to help students succeed in their careers.
            </p>
            <div className="spacer">
              <div className="icon-leftside">
                <div className="icon-property">
                  <ion-icon
                    className="star-outline"
                    name="locate-outline"
                  ></ion-icon>
                </div>

                <div className="icon-sidebar">
                  <h5>Explore the Best Learning Path</h5>
                  <p className="icon-paragraph fontsmall">
                    Discover the most efficient learning roadmap, tailored to
                    your career aspirations. Get clarity on where to start and
                    how to progress.
                  </p>
                </div>
              </div>

              <div className="icon-leftside">
                <div className="icon-property">
                  <ion-icon
                    className="star-outline"
                    name="clipboard-outline"
                  ></ion-icon>
                </div>

                <div className="icon-sidebar">
                  <h5>Well-Structured Learning</h5>
                  <p className="icon-paragraph fontsmall">
                    Carefully curated notes and study materials make complex
                    topics easier to grasp, helping students learn efficiently.
                  </p>
                </div>
              </div>
              <div className="icon-leftside">
                <div className="icon-property">
                  <ion-icon
                    className="star-outline"
                    name="arrow-up-circle-outline"
                  ></ion-icon>
                </div>

                <div className="icon-sidebar">
                  <h5>Constantly Evolving Resources</h5>
                  <p className="icon-paragraph fontsmall">
                    We continuously upload new content, ensuring that students
                    have access to the latest tools and resources to keep up
                    with evolving industry trends.
                  </p>
                </div>
              </div>
            </div>
            <a
              href="/community-support?form=want-to-contribute"
              rel="noopener noreferrer"
            >
              <button className="rater-button self">
                Community & Support &#8594;
              </button>
            </a>

            {/* {isModalOpen && (
              <JoinCommunity closeModal={() => setIsModalOpen(false)} />
            )} */}
          </div>
        </div>
        <div className="packageimage">
          <img
            className="packageimage-box"
            src={course3}
            alt="Course cover for course 3"
          />
        </div>
        <div>
          <div className="packagetext-box">
            <h3 className="heading-secondary font">
              Direct Guidance from Industry Experts, Anytime You Need (Coming
              Soon)
            </h3>
            <p className="icon-paragraph">
              Learning is more effective when you have the right guidance. At
              Unisire, we connect students directly with industry professionals
              for one-on-one interactions, helping them make informed career
              choices.
            </p>
            <div className="spacer">
              <div className="icon-leftside">
                <div className="icon-property">
                  <ion-icon
                    className="star-outline"
                    name="book-outline"
                  ></ion-icon>
                </div>

                <div className="icon-sidebar">
                  <h5>
                    Blogs & Career Insights{" "}
                    {/* <span className="h">
                      <ion-icon name="checkmark-circle-outline"></ion-icon>
                      Coming Soon
                    </span> */}
                  </h5>
                  <p className="icon-paragraph fontsmall">
                    Read expert-written blogs covering career tips, industry
                    trends, and skill-building strategies to stay ahead in your
                    journey.
                  </p>
                </div>
              </div>

              <div className="icon-leftside">
                <div className="icon-property">
                  <ion-icon
                    className="star-outline"
                    name="chatbox-ellipses-outline"
                  ></ion-icon>
                </div>

                <div className="icon-sidebar">
                  <h5 className="hi">
                    Real-Time Discussions{" "}
                    {/* <span className="h">
                      <ion-icon name="checkmark-circle-outline"></ion-icon>
                      Coming Soon
                    </span> */}
                  </h5>
                  <p className="icon-paragraph fontsmall">
                    Engage in live discussions with mentors, clear your doubts
                    instantly, and gain clarity on the next steps in your
                    career.
                  </p>
                </div>
              </div>

              <div className="icon-leftside">
                <div className="icon-property">
                  <ion-icon
                    className="star-outline"
                    name="create-outline"
                  ></ion-icon>
                </div>

                <div className="icon-sidebar">
                  <h5>
                    Workshops & Events{" "}
                    {/* <span className="h">
                      <ion-icon name="checkmark-circle-outline"></ion-icon>
                      Coming
                    </span> */}
                  </h5>

                  <p className="icon-paragraph fontsmall">
                    Stay updated with industry-relevant workshops and networking
                    events to enhance your skills and career opportunities.
                  </p>
                </div>
              </div>
            </div>
            <a href="/upcoming" rel="noopener noreferrer">
              <button className="rater-button self">Upcoming &#8594;</button>
            </a>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default HeroMainContent;
