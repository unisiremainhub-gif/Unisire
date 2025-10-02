// // // import React, { useState } from "react";
// // // import "./css/Login.css";
// // // import "@fortawesome/fontawesome-free/css/all.min.css";

// // // const Login = ({ openSignUp, openForgotPassword }) => {
// // //   const [formData, setFormData] = useState({
// // //     email: "",
// // //     password: "",
// // //   });

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.id]: e.target.value });
// // //   };

// // //   return (
// // //     <div className="logincontainer">
// // //       {/* Left Side - Gradient Background */}
// // //       <div className="left-section">
// // //         <h1 className="heading-primary center white">InSkillify</h1>
// // //       </div>

// // //       {/* Right Side - Login Form */}
// // //       <div className="right-section">
// // //         <div className="form-container">
// // //           <div className="text-center">
// // //             <h3 className="heading-secondary font">Welcome Back</h3>
// // //             <p className="icon-paragraph fontsmall">
// // //               Please sign in to your account
// // //             </p>
// // //           </div>

// // //           <form className="login-form">
// // //             <div className="logininputspacing">
// // //               <div className="input-group">
// // //                 <label htmlFor="email">Email</label>
// // //                 <input
// // //                   type="email"
// // //                   id="email"
// // //                   placeholder="Enter your email"
// // //                   value={formData.email}
// // //                   onChange={handleChange}
// // //                 />
// // //               </div>

// // //               <div className="input-group">
// // //                 <label htmlFor="password">Password</label>
// // //                 <input
// // //                   type="password"
// // //                   id="password"
// // //                   placeholder="Enter your password"
// // //                   value={formData.password}
// // //                   onChange={handleChange}
// // //                 />
// // //               </div>
// // //               <div className="options">
// // //                 <div className="remember-me">
// // //                   <input type="checkbox" id="remember" />
// // //                   <label htmlFor="remember">Remember me</label>
// // //                 </div>
// // //                 <div
// // //                   type="button"
// // //                   className="forgot-password"
// // //                   onClick={openForgotPassword}
// // //                 >
// // //                   Forgot password?
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <button className="btnlogin login-btn">Log In</button>
// // //             <button
// // //               type="button"
// // //               className="btnlogin signup-btn"
// // //               onClick={openSignUp}
// // //             >
// // //               Sign Up
// // //             </button>

// // //             <div className="separator">
// // //               <div className="line"></div>
// // //               <span>Or continue with</span>
// // //               <div className="line"></div>
// // //             </div>

// // //             <div className="social-login">
// // //               <button className="btnlogin signup-btn loginfunc">
// // //                 <i className="fab fa-google"></i>
// // //                 <p>Continue With Google</p>
// // //               </button>
// // //             </div>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Login;

// // import React, { useState } from "react";
// // import "./css/Login.css";
// // import "@fortawesome/fontawesome-free/css/all.min.css";
// // import { useNavigate } from "react-router-dom";

// // const Login = ({ openForgotPassword }) => {
// //   const [formData, setFormData] = useState({
// //     email: "",
// //     password: "",
// //   });

// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.id]: e.target.value });
// //   };

// //   const handleSignUpRedirect = () => {
// //     navigate("/signup");
// //   };

// //   return (
// //     <div className="logincontainer">
// //       <div className="left-section">
// //         <h1 className="heading-primary center white">InSkillify</h1>
// //       </div>

// //       <div className="right-section">
// //         <div className="form-container">
// //           <div className="text-center">
// //             <h3 className="heading-secondary font">Welcome Back</h3>
// //             <p className="icon-paragraph fontsmall">
// //               Please sign in to your account
// //             </p>
// //           </div>

// //           <form className="login-form">
// //             <div className="logininputspacing">
// //               <div className="input-group">
// //                 <label htmlFor="email">Email</label>
// //                 <input
// //                   type="email"
// //                   id="email"
// //                   placeholder="Enter your email"
// //                   value={formData.email}
// //                   onChange={handleChange}
// //                 />
// //               </div>

// //               <div className="input-group">
// //                 <label htmlFor="password">Password</label>
// //                 <input
// //                   type="password"
// //                   id="password"
// //                   placeholder="Enter your password"
// //                   value={formData.password}
// //                   onChange={handleChange}
// //                 />
// //               </div>

// //               <div className="options">
// //                 <div className="remember-me">
// //                   <input type="checkbox" id="remember" />
// //                   <label htmlFor="remember">Remember me</label>
// //                 </div>
// //                 <div
// //                   type="button"
// //                   className="forgot-password"
// //                   onClick={openForgotPassword}
// //                 >
// //                   Forgot password?
// //                 </div>
// //               </div>
// //             </div>

// //             <button className="btnlogin login-btn">Log In</button>
// //             <button
// //               type="button"
// //               className="btnlogin signup-btn"
// //               onClick={handleSignUpRedirect}
// //             >
// //               Sign Up
// //             </button>

// //             <div className="separator">
// //               <div className="line"></div>
// //               <span>Or continue with</span>
// //               <div className="line"></div>
// //             </div>

// //             <div className="social-login">
// //               <button className="btnlogin signup-btn loginfunc">
// //                 <i className="fab fa-google"></i>
// //                 <p>Continue With Google</p>
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

// /**/ /* */

// import React, { useState } from "react";
// import "./css/Login.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { useNavigate } from "react-router-dom";
// import google from "./google.jpg";
// const Login = ({ openForgotPassword }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSignUpRedirect = () => {
//     navigate("/signup");
//   };

//   return (
//     <div className="logincontainer">
//       <div className="left-section">
//         <h1 className="heading-primary center white">InSkillify</h1>
//       </div>

//       <div className="right-section">
//         <div className="form-container">
//           <div className="login-form-container">
//             <h3 className="heading-secondary font">Hey! 👋</h3>
//             <h3 className="heading-secondary font">
//               Welcome to{" "}
//               <span style={{ color: "#4361ee", fontSize: "3.5rem" }}>
//                 Inskillify
//               </span>
//             </h3>
//             <p className="icon-paragraph fontsmall">
//               Please sign in to your account
//             </p>
//           </div>

//           <form className="login-form">
//             <div className="separator">
//               {/* <div className="line"></div> */}
//               <div className="line"></div>
//               <span>Login With</span>
//               <div className="line"></div>
//             </div>

//             <div className="social-login">
//               <button className="btnlogin signup-btn loginfunc">
//                 {/* <i className="fab fa-google"></i> */}
//                 <img
//                   src={google}
//                   alt=""
//                   style={{ borderRadius: "50px", width: "30px" }}
//                 />{" "}
//                 <p>Continue With Google</p>
//               </button>
//             </div>

//             <div className="separator">
//               {/* <div className="line"></div> */}
//               <div className="line"></div>
//             </div>

//             <p
//               className="icon-paragraph fontsmall"
//               style={{ textAlign: "center" }}
//             >
//               Don't Have Account ?{" "}
//               <span style={{ color: "#4361ee" }}>Sign Up</span>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from "react";
import "./css/Login.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";
import google from "./google.jpg";

const Login = ({ openForgotPassword }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Slider images and content
  const sliderImages = [
    "https://www.propeers.in/_next/static/media/onboarding-slider-2.af4d6eed.png",
    "https://www.propeers.in/_next/static/media/onboarding-slider-2.af4d6eed.png",
    "https://www.propeers.in/_next/static/media/onboarding-slider-2.af4d6eed.png",
    "https://www.propeers.in/_next/static/media/onboarding-slider-2.af4d6eed.png",
  ];

  const sliderContent = [
    "Connect with the Right Mentors",
    "Personalized Learning Experience",
    "Join Our Growing Community",
    "Achieve Your Career Goals",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSignUpRedirect = () => {
    navigate("/signup");
  };

  return (
    <div className="logincontainer">
      <div className="left-section">
        {/* Slider added here */}
        <div className="slider-wrapper">
          <div
            className="slider"
            style={{ transform: `translateX(-${currentSlide * 25}%)` }}
          >
            {sliderImages.map((image, index) => (
              <div key={index} className="slide">
                <img src={image} alt={`Slide ${index + 1}`} />
                <p className="slide-text">{sliderContent[index]}</p>
              </div>
            ))}
          </div>
          <div className="slider-dots">
            {sliderImages.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
        {/* <h1 className="heading-primary center white">InSkillify</h1> */}
      </div>

      {/* Right section remains exactly the same */}
      <div className="right-section">
        <div className="form-container">
          <div className="login-form-container">
            <h3 className="heading-secondary font">Hey! 👋</h3>
            <h3 className="heading-secondary font">
              Welcome to{" "}
              <span style={{ color: "#4361ee", fontSize: "3.5rem" }}>
                Inskillify
              </span>
            </h3>
            <p className="icon-paragraph fontsmall">
              Please sign in to your account
            </p>
          </div>

          <form className="login-form">
            <div className="separator">
              <div className="line"></div>
              <span>Login With</span>
              <div className="line"></div>
            </div>

            <div className="social-login">
              <button className="btnlogin signup-btn loginfunc">
                <img
                  src={google}
                  alt=""
                  style={{ borderRadius: "50px", width: "30px" }}
                />{" "}
                <p>Continue With Google</p>
              </button>
            </div>

            <div className="separator">
              <div className="line"></div>
            </div>

            <p
              className="icon-paragraph fontsmall"
              style={{ textAlign: "center" }}
            >
              Don't Have Account ?{" "}
              <span
                style={{ color: "#4361ee", cursor: "pointer" }}
                onClick={handleSignUpRedirect}
              >
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
