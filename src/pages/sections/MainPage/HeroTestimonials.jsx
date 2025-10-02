// import React, { useEffect, useState } from "react";
// import image1 from "../../../assests/faces/download (1).jpeg";
// import image2 from "../../../assests/faces/jh (1).jpeg";
// import image3 from "../../../assests/faces/images (2).jpeg";
// import image4 from "../../../assests/faces/images (1) (1).jpeg";
// import image5 from "../../../assests/faces/hj (1).jpeg";
// import image6 from "../../../assests/faces/third.jpeg";
// import image7 from "../../../assests/faces/photo-1520810627419-35e362c5dc07.jfif";
// import image8 from "../../../assests/faces/fourth.jpeg";
// import image9 from "../../../assests/faces/33.jpg";
// // import image10 from "../../../assests/faces/35.jpg";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// const HeroTestimonials = () => {
//   const testimonials = [
//     {
//       id: 1,
//       image: image1,
//       name: "Meera Joshi",
//       role: "College Student",
//       text: "As a student, finding structured and relevant learning resources was always a challenge. I wasted hours searching until I found Unisire! Their step-by-step roadmap covered everything from career guidance to skill development. They also provide real-world resume references of students placed in top companies, which helped me build my own and land my dream job. After subscribing with my email, I started receiving updates on beneficial workshops and events. Unisire is truly heaven for tech students!",
//     },
//     {
//       id: 2,
//       image: image2,
//       name: "Rohan Sharma",
//       role: "Founder & CTO",
//       text: "Starting my own company was a dream, but navigating the tech world alone felt overwhelming. There were countless technologies, tools, and frameworks, and I had no clear path. Unisire helped me choose the right technology stack, understand industry best practices, and learn everything step by step. Instead of spending months figuring things out, I had a structured approach that made my startup journey much faster and easier. Thanks to Unisire, I saved valuable time and effort, and my business is now running smoothly!",
//     },
//     {
//       id: 3,
//       image: image3,
//       name: "Amit Kumar",
//       role: "Tech Entrepreneur",
//       text: "When I started my own business, I quickly realized that learning new technologies was a must. Without technical skills, I would struggle to build and deploy my product. But finding the right learning path was confusing. Unisire provided the best roadmap and real-world guidance. Their structured courses helped me learn efficiently, and I was able to deploy my product without any unnecessary confusion. I can confidently say that this platform is a game-changer for entrepreneurs!",
//     },
//     {
//       id: 4,
//       image: image4,
//       name: "Siddharth Verma",
//       role: "College Student",
//       text: "The job market is highly competitive, and standing out requires a strong and professional resume. At first, I had no idea how to write a resume that would actually get noticed by recruiters. But then I found Unisire, and it changed my life! They provide real-world resume examples of students who have already been placed in top companies. I followed their resume format, applied for jobs, and finally landed my dream placement! If you're a student looking for a job, trust me, this platform is a goldmine!",
//     },
//     // {
//     //   id: 5,
//     //   image: image5,
//     //   name: "Aarav Nair",
//     //   role: "Senior Software Developer",
//     //   text: "As a developer, keeping up with new technologies and frameworks is crucial. But finding the best learning materials takes a lot of time. That's when I discovered Unisire, and it was a total game-changer. They provide well-structured learning paths, focusing on the latest trends in software development. I was able to sharpen my skills, work on real-world projects, and become more confident in my role as a senior developer. If you want to level up your career, this is the platform for you!",
//     // },
//     {
//       id: 6,
//       image: image6,
//       name: "Nishant Gupta",
//       role: "Frontend Developer",
//       text: "I always wanted to master frontend development, but most online courses lacked real-world applications. Unisire changed that completely! They provided structured learning, practical examples, and coding challenges that helped me gain confidence. Now, I can build stunning and responsive web apps with ease! This platform gave me the exact knowledge I needed to land my first job as a frontend developer!",
//     },
//     // {
//     //   id: 7,
//     //   image: image7,
//     //   name: "Manish Yadav",
//     //   role: "App Developer",
//     //   text: "Developing mobile apps requires mastering multiple frameworks, UI design, and performance optimization. I always struggled with where to start and how to structure my learning. Then I found Unisire, and everything changed! They provided a clear and well-structured learning path that covered everything from basic to advanced app development. Thanks to their resources, I can now develop high-performance apps for top companies!",
//     // },
//     {
//       id: 8,
//       image: image8,
//       name: "Sourav Mishra",
//       role: "Chrome Extension Developer",
//       text: "At first, building Chrome extensions felt too complicated. I spent hours searching for tutorials but never found a proper roadmap. Then I discovered Unisire, and it made the process super simple! They provided a step-by-step learning path, covering everything from creating a basic extension to publishing it on the Chrome Web Store. Now, I've successfully built and launched my own extensions, and companies have started noticing my work!",
//     },
//     {
//       id: 9,
//       image: image1,
//       name: "Priya Rajput",
//       role: "Teacher",
//       text: "I have been guiding students for placements and career development for years, and I always struggled to find the best learning resources to recommend. But since I discovered Unisire, my work has become so much easier! Now, instead of searching for content, I simply guide students to this platform, where they get well-structured roadmaps, real-world resume examples, and the best AI tools. It has completely transformed the way I help students, making their job preparation much more efficient!",
//     },
//   ];

//   const [visibleTestimonials, setVisibleTestimonials] = useState(3);
//   // const [isModalOpen, setIsModalOpen] = useState(false);
//   // const [formData, setFormData] = useState({
//   //   name: "",
//   //   email: "",
//   //   position: "",
//   //   rating: "",
//   //   message: "",
//   // });

//   useEffect(() => {
//     const sections = document.querySelectorAll(".rate-section");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     sections.forEach((section) => observer.observe(section));

//     return () => sections.forEach((section) => observer.unobserve(section));
//   }, [visibleTestimonials]);

//   // const handleChange = (e) => {
//   //   setFormData({ ...formData, [e.target.name]: e.target.value });
//   // };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log("Review Submitted:", formData);
//   //   alert("Thank you for your feedback!");
//   //   setIsModalOpen(false);
//   // };

//   const loadMoreTestimonials = () => {
//     setVisibleTestimonials((prev) => Math.min(prev + 3, testimonials.length));
//   };

//   const showLessTestimonials = () => {
//     setVisibleTestimonials(3);
//   };

//   return (
//     <section id="new" className="section-student container">
//       <div className="student-heading">
//         <div className="student-heading1">
//           <h2 className="heading-secondary marginbottom">
//             What our students have to say
//           </h2>
//           <p className="allparagraph">
//             See what our students have to say about their experience with
//             Unisire!
//           </p>
//         </div>
//         <button
//           className="rater-button cent"
//           style={{ display: "none" }}
//           onClick={() => setVisibleTestimonials(testimonials.length)}
//         >
//           Read all Testimonials
//         </button>
//       </div>
//       <div className="student-testimonial grid3">
//         {testimonials.slice(0, visibleTestimonials).map((testimonial) => (
//           <div key={testimonial.id} className="rate-section padder">
//             <div className="flexlower">
//               <div>
//                 <img
//                   className="faces"
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                 />
//               </div>
//               <div className="cases">
//                 <p className="upper">{testimonial.name}</p>
//                 <p className="lower">{testimonial.role}</p>
//               </div>
//             </div>
//             <div className="rater">
//               <div>
//                 {[...Array(5)].map((_, i) => (
//                   <ion-icon
//                     key={i}
//                     className="rater-icon"
//                     name="star-outline"
//                   ></ion-icon>
//                 ))}
//               </div>
//               <span className="h kya">
//                 <ion-icon name="checkmark-circle-outline"></ion-icon>VERIFIED
//               </span>
//             </div>
//             <div>
//               <p className="miniallparagraph">{testimonial.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="testimonial-buttons">
//         {visibleTestimonials < testimonials.length ? (
//           <button
//             // className="btn hero-button2 testimonial-button"
//             // style={{ border: "0.5px solid grey", padding: "0.7rem 1.2rem" }}
//             style={{
//               border: "none",
//               backgroundColor: "transparent",
//               fontSize: "17px",
//               color: "#6A737D",
//               cursor: "pointer",
//             }}
//             onClick={loadMoreTestimonials}
//           >
//             View More
//             <FaChevronDown
//               className="button-icon"
//               style={{ marginLeft: "8px" }}
//             />
//           </button>
//         ) : (
//           visibleTestimonials > 3 && (
//             <button
//               style={{
//                 border: "none",
//                 backgroundColor: "transparent",
//                 fontSize: "17px",
//                 color: "#6A737D",
//                 cursor: "pointer",
//               }}
//               onClick={showLessTestimonials}
//             >
//               View Less
//               <FaChevronUp
//                 className="button-icon"
//                 style={{ marginLeft: "8px" }}
//               />
//             </button>
//           )
//         )}
//       </div>
//     </section>
//   );
// };

// export default HeroTestimonials;

import React, { useEffect, useState } from "react";
import image1 from "../../../assests/faces/download (1).jpeg";
import image2 from "../../../assests/faces/jh (1).jpeg";
import image3 from "../../../assests/faces/images (2).jpeg";
import image4 from "../../../assests/faces/images (1) (1).jpeg";
import image6 from "../../../assests/faces/third.jpeg";
import image8 from "../../../assests/faces/fourth.jpeg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const HeroTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: image1,
      name: "Meera Joshi",
      role: "College Student",
      rating: 5,
      text: "Finding structured resources was always tough. I wasted hours searching until I discovered Unisire. Their step-by-step roadmap, resume examples, and practical workshops made learning simple and focused. Unlike random tutorials, this platform gave me real guidance and confidence. Subscribing also kept me updated with useful events. For students like me, Unisire feels like the one platform built with us in mind.",
    },
    {
      id: 2,
      image: image2,
      name: "Rohan Sharma",
      role: "Founder & CTO",
      rating: 4,
      text: "Launching my company was exciting yet overwhelming. With too many tools and no direction, progress was slow. Unisire helped me select the right stack, follow structured learning, and avoid wasting time. Some roadmaps could use more advanced case studies, but overall the guidance saved months of confusion. Thanks to Unisire, I finally had clarity and my startup now runs smoothly.",
    },
    {
      id: 3,
      image: image3,
      name: "Amit Kumar",
      role: "Tech Entrepreneur",
      rating: 5,
      text: "When I began my business, learning technology felt like a maze. Free tutorials were scattered and incomplete, leaving me frustrated. Unisire’s roadmap solved this by breaking concepts into clear, progressive steps. I quickly gained confidence, built my MVP, and pitched it to investors. The platform bridged theory with real practice, making it far more effective than random resources online.",
    },
    {
      id: 4,
      image: image4,
      name: "Siddharth Verma",
      role: "College Student",
      rating: 5,
      text: "Writing a professional resume was my biggest struggle. Online templates looked generic and failed to impress. Unisire changed everything by providing real examples of resumes that actually landed jobs. I followed their guidance, built my own, and soon started getting recruiter responses. It felt like learning from seniors who already cracked placements. Unisire turned resume making into a confident process.",
    },
    {
      id: 6,
      image: image6,
      name: "Nishant Gupta",
      role: "Frontend Developer",
      rating: 5,
      text: "I always wanted to master frontend development, but most courses I tried felt too basic or didn’t connect with real projects. Unisire changed that completely! Their roadmap had practical challenges and examples that built my confidence step by step. Now, I can create responsive web apps with ease, and this platform directly helped me land my first job as a frontend developer!",
    },
    {
      id: 8,
      image: image8,
      name: "Sourav Mishra",
      role: "Chrome Extension Developer",
      rating: 4,
      text: "Building Chrome extensions seemed too complicated until I found Unisire. Their learning path explained everything from basics to publishing on the Chrome Web Store. It gave me the confidence to finish and launch my first extension. More advanced projects would make it even stronger, but the roadmap was enough to get started and attract real opportunities for my work.",
    },
    {
      id: 9,
      image: image1,
      name: "Priya Rajput",
      role: "Teacher",
      rating: 5,
      text: "Guiding students for placements has always been challenging because most platforms provide scattered or outdated content. Unisire solved this by offering clear, updated roadmaps, real resume references, and effective AI tools. My students now learn faster, and I save hours searching for resources. It feels designed for students’ actual needs. For teachers and mentors, this platform is truly a blessing.",
    },
  ];

  const [visibleTestimonials, setVisibleTestimonials] = useState(3);

  useEffect(() => {
    const sections = document.querySelectorAll(".rate-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [visibleTestimonials]);

  const loadMoreTestimonials = () => {
    setVisibleTestimonials((prev) => Math.min(prev + 3, testimonials.length));
  };

  const showLessTestimonials = () => {
    setVisibleTestimonials(3);
  };

  return (
    <section id="new" className="section-student container">
      <div className="student-heading">
        <div className="student-heading1">
          <h2 className="heading-secondary marginbottom">
            What our students have to say
          </h2>
          <p className="allparagraph">
            See what our students have to say about their experience with
            Unisire!
          </p>
        </div>
        <button
          className="rater-button cent"
          style={{ display: "none" }}
          onClick={() => setVisibleTestimonials(testimonials.length)}
        >
          Read all Testimonials
        </button>
      </div>
      <div className="student-testimonial grid3">
        {testimonials.slice(0, visibleTestimonials).map((testimonial) => (
          <div key={testimonial.id} className="rate-section padder">
            <div className="flexlower">
              <div>
                <img
                  className="faces"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
              </div>
              <div className="cases">
                <p className="upper">{testimonial.name}</p>
                <p className="lower">{testimonial.role}</p>
              </div>
            </div>
            <div className="rater">
              <div>
                {[...Array(5)].map((_, i) => (
                  <ion-icon
                    key={i}
                    className="rater-icon"
                    name={i < testimonial.rating ? "star" : "star-outline"}
                  ></ion-icon>
                ))}
              </div>
              <span className="h kya">
                <ion-icon name="checkmark-circle-outline"></ion-icon>VERIFIED
              </span>
            </div>
            <div>
              <p className="miniallparagraph">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial-buttons">
        {visibleTestimonials < testimonials.length ? (
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              fontSize: "17px",
              color: "#6A737D",
              cursor: "pointer",
            }}
            onClick={loadMoreTestimonials}
          >
            View More
            <FaChevronDown
              className="button-icon"
              style={{ marginLeft: "8px" }}
            />
          </button>
        ) : (
          visibleTestimonials > 3 && (
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                fontSize: "17px",
                color: "#6A737D",
                cursor: "pointer",
              }}
              onClick={showLessTestimonials}
            >
              View Less
              <FaChevronUp
                className="button-icon"
                style={{ marginLeft: "8px" }}
              />
            </button>
          )
        )}
      </div>
    </section>
  );
};

export default HeroTestimonials;
