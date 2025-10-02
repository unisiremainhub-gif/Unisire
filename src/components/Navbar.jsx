// import React, { useState, useEffect } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
// import "./Navbar.css";
// import { Book, BookAIcon, LogOutIcon, UserCircle } from "lucide-react";
// import { FaBookOpen, FaEnvelope } from "react-icons/fa";

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileKnowOpen, setMobileKnowOpen] = useState(false);
//   const [mobileUserOpen, setMobileUserOpen] = useState(false);
//   const [desktopKnowOpen, setDesktopKnowOpen] = useState(false);
//   const [desktopUserOpen, setDesktopUserOpen] = useState(false);
//   const [knowModalOpen, setKnowModalOpen] = useState(false);
//   const [resourcesModalOpen, setResourcesModalOpen] = useState(false);
//   const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

//   const location = useLocation();

//   // Keep body from scrolling while mobile menu is open
//   useEffect(() => {
//     document.body.classList.toggle("freshnav-no-scroll", mobileOpen);
//     return () => document.body.classList.remove("freshnav-no-scroll");
//   }, [mobileOpen]);

//   // Close mobile submenus when route changes (so drawer state resets)
//   useEffect(() => {
//     setMobileKnowOpen(false);
//     setMobileUserOpen(false);
//   }, [location.pathname]);

//   const mainNav = [
//     { label: "Home", to: "/" },
//     // { label: "Resources", to: "/resources/roadmaps" },
//     { label: "UpComing", to: "/UpComing" },
//     { label: "Careers", to: "/careers" },
//     { label: "Blogs", to: "/Blogs" },
//   ];

//   const knowNav = [
//     {
//       label: "About Us",
//       to: "/about-us",
//       icon: <FaBookOpen size={16} />,
//       tagline: "Learn who we are and what we do",
//     },
//     {
//       label: "Contact Us",
//       to: "/contact-us",
//       icon: <FaEnvelope size={16} />,
//       tagline: "Reach out to our team",
//     },
//   ];
//   const resourcesNav = [
//     {
//       label: "Roadmaps",
//       to: "/resources/roadmaps",
//       icon: <FaBookOpen size={16} />,
//       tagline: "Learn from structured courses",
//     },
//     {
//       label: "Resume",
//       to: "/resources/resumes",
//       icon: <Book size={16} />,
//       tagline: "Build and improve your resume",
//     },
//     {
//       label: "AI Tools",
//       to: "/resources/ai-tools",
//       icon: <BookAIcon size={16} />,
//       tagline: "Explore AI tools for productivity",
//     },
//   ];

//   const userNav = [
//     { label: "My Dashboard", to: "/my-dashboard", icon: <Book size={20} /> },
//     { label: "My Profile", to: "/my-profile", icon: <UserCircle size={20} /> },
//     { label: "Logout", to: "/logout", icon: <LogOutIcon size={20} /> },
//   ];

//   // Know Us should be active if on About or Contact
//   const isKnowActive = null;
//   // location.pathname.startsWith("/about") ||
//   // location.pathname.startsWith("/contact") ||
//   // location.pathname === "/about-us" ||
//   // location.pathname === "/contact-us";

//   return (
//     <>
//       <div
//         className={`${
//           mobileOpen ? "freshnav-header-mobile" : "freshnav-header"
//         }`}
//       >
//         <div className="freshnav-inner">
//           <NavLink
//             to="/"
//             className="freshnav-brand"
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           >
//             <img
//               src="https://uploads-ssl.webflow.com/62259a0fd25200e36c368b9f/6226f2ce0a3889833f400b0a_designership-logo.svg"
//               alt="logo"
//               className="freshnav-brand-img"
//             />
//           </NavLink>

//           {/* Desktop nav */}
//           <nav className="freshnav-desktop" aria-label="Main navigation">
//             <ul className="freshnav-list">
//               {mainNav.map((item, index) => {
//                 // Insert Resources after Home (index === 0)
//                 if (index === 0) {
//                   return (
//                     <React.Fragment key="resources">
//                       {/* Normal Nav item */}
//                       <li key={item.to} className="freshnav-item">
//                         <NavLink
//                           to={item.to}
//                           className={({ isActive }) =>
//                             isActive
//                               ? "freshnav-link freshnav-active"
//                               : "freshnav-link"
//                           }
//                           onClick={() =>
//                             window.scrollTo({ top: 0, behavior: "smooth" })
//                           }
//                         >
//                           {item.label}
//                         </NavLink>
//                       </li>

//                       {/* Custom Resources button */}
//                       <li className="freshnav-item freshnav-dropdown">
//                         <button
//                           type="button"
//                           className="freshnav-link-know freshnav-dropdown-btn"
//                           aria-expanded={resourcesModalOpen}
//                           onClick={() => setResourcesModalOpen((s) => !s)}
//                         >
//                           Resources
//                           <span className="freshnav-caret">
//                             {resourcesModalOpen ? (
//                               <FiChevronDown size={20} />
//                             ) : (
//                               <FiChevronUp size={20} />
//                             )}
//                           </span>
//                         </button>
//                       </li>
//                     </React.Fragment>
//                   );
//                 }

//                 // Default items
//                 return (
//                   <li key={item.to} className="freshnav-item">
//                     <NavLink
//                       to={item.to}
//                       className={({ isActive }) =>
//                         isActive
//                           ? "freshnav-link freshnav-active"
//                           : "freshnav-link"
//                       }
//                       onClick={() =>
//                         window.scrollTo({ top: 0, behavior: "smooth" })
//                       }
//                     >
//                       {item.label}
//                     </NavLink>
//                   </li>
//                 );
//               })}

//               {/* Know Us stays outside */}
//               <li className="freshnav-item freshnav-dropdown">
//                 <button
//                   type="button"
//                   className="freshnav-link-know freshnav-dropdown-btn"
//                   aria-expanded={knowModalOpen}
//                   onClick={() => setKnowModalOpen((s) => !s)}
//                 >
//                   Know Us
//                   <span className="freshnav-caret">
//                     {knowModalOpen ? (
//                       <FiChevronDown size={20} />
//                     ) : (
//                       <FiChevronUp size={20} />
//                     )}
//                   </span>
//                 </button>
//               </li>
//             </ul>
//           </nav>

//           <div className="freshnav-actions">
//             {/* Desktop user menu */}
//             <div
//               className="freshnav-user-desktop"
//               onMouseEnter={() => setDesktopUserOpen(true)}
//               onMouseLeave={() => setDesktopUserOpen(false)}
//             >
//               <button className="freshnav-auth-btn">Login / SignUp</button>
//               {desktopUserOpen && (
//                 <div className="freshnav-dropdown-menu freshnav-dropdown-menu-right">
//                   {userNav.map((u) => (
//                     <NavLink
//                       key={u.to}
//                       to={u.to}
//                       className="freshnav-dropdown-item"
//                       onClick={() =>
//                         window.scrollTo({ top: 0, behavior: "smooth" })
//                       }
//                     >
//                       {u.icon} {u.label}
//                     </NavLink>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Mobile toggle */}
//             <button
//               className="freshnav-toggle"
//               aria-label={mobileOpen ? "Close menu" : "Open menu"}
//               aria-expanded={mobileOpen}
//               onClick={() => setMobileOpen((s) => !s)}
//             >
//               {mobileOpen ? null : <FiMenu />}
//             </button>
//           </div>
//         </div>

//         {/* overlay */}
//         <div
//           className={`freshnav-overlay ${mobileOpen ? "open" : ""}`}
//           onClick={() => setMobileOpen(false)}
//         />

//         {/* Mobile drawer */}
//         <aside
//           className={`freshnav-mobile ${mobileOpen ? "open" : ""}`}
//           aria-hidden={!mobileOpen}
//         >
//           <div className="freshnav-mobile-inner">
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <img
//                 src="https://uploads-ssl.webflow.com/62259a0fd25200e36c368b9f/6226f2ce0a3889833f400b0a_designership-logo.svg"
//                 alt="logo"
//               />
//               <button
//                 className="freshnav-toggle"
//                 aria-label={mobileOpen ? "Close menu" : "Open menu"}
//                 aria-expanded={mobileOpen}
//                 onClick={() => setMobileOpen((s) => !s)}
//               >
//                 {mobileOpen ? <FiX /> : <FiMenu />}
//               </button>
//             </div>
//             <ul className="freshnav-mobile-list">
//               {mainNav.map((item, index) => {
//                 // For the first item only
//                 if (index === 0) {
//                   return (
//                     <React.Fragment key={`main-${item.to}`}>
//                       {/* Normal first nav item */}
//                       <li className="freshnav-item">
//                         <NavLink
//                           to={item.to}
//                           className={({ isActive }) =>
//                             `freshnav-mobile-link ${
//                               isActive ? "freshnav-active" : ""
//                             }`
//                           }
//                           onClick={() => setMobileOpen(false)}
//                         >
//                           {item.label}
//                         </NavLink>
//                       </li>

//                       {/* Custom Resources accordion */}
//                       <li className="freshnav-item">
//                         <button
//                           type="button"
//                           className={`freshnav-mobile-accordion ${
//                             mobileResourcesOpen ? "freshnav-active" : ""
//                           }`}
//                           aria-expanded={mobileResourcesOpen}
//                           onClick={() => setMobileResourcesOpen((s) => !s)}
//                         >
//                           <span>Resources</span>
//                           <span className="freshnav-caret">
//                             {mobileResourcesOpen ? (
//                               <FiChevronUp />
//                             ) : (
//                               <FiChevronDown />
//                             )}
//                           </span>
//                         </button>

//                         <div
//                           className={`freshnav-mobile-panel ${
//                             mobileResourcesOpen ? "open" : ""
//                           }`}
//                         >
//                           {resourcesNav.map((res) => (
//                             <NavLink
//                               key={res.to}
//                               to={res.to}
//                               className={({ isActive }) =>
//                                 `freshnav-mobile-sublink ${
//                                   isActive ? "freshnav-active" : ""
//                                 }`
//                               }
//                               onClick={() => setMobileOpen(false)}
//                             >
//                               {res.label}
//                             </NavLink>
//                           ))}
//                         </div>
//                       </li>
//                     </React.Fragment>
//                   );
//                 }

//                 // For all other nav items
//                 return (
//                   <li key={item.to} className="freshnav-item">
//                     <NavLink
//                       to={item.to}
//                       className={({ isActive }) =>
//                         `freshnav-mobile-link ${
//                           isActive ? "freshnav-active" : ""
//                         }`
//                       }
//                       onClick={() => setMobileOpen(false)}
//                     >
//                       {item.label}
//                     </NavLink>
//                   </li>
//                 );
//               })}

//               <li>
//                 <button
//                   className={`freshnav-mobile-accordion ${
//                     isKnowActive ? "freshnav-active" : ""
//                   }`}
//                   onClick={() => setMobileKnowOpen((s) => !s)}
//                   aria-expanded={mobileKnowOpen}
//                 >
//                   <span>Know Us</span>
//                   <span className="freshnav-caret">
//                     {mobileKnowOpen ? <FiChevronUp /> : <FiChevronDown />}
//                   </span>
//                 </button>
//                 <div
//                   className={`freshnav-mobile-panel ${
//                     mobileKnowOpen ? "open" : ""
//                   }`}
//                 >
//                   {knowNav.map((k) => (
//                     <NavLink
//                       key={k.to}
//                       to={k.to}
//                       className={({ isActive }) =>
//                         `freshnav-mobile-sublink ${
//                           isActive ? "freshnav-active" : ""
//                         }`
//                       }
//                       onClick={() => setMobileOpen(false)}
//                     >
//                       {k.label}
//                     </NavLink>
//                   ))}
//                 </div>
//               </li>

//               <li>
//                 <button
//                   className="freshnav-mobile-accordion"
//                   onClick={() => setMobileUserOpen((s) => !s)}
//                   aria-expanded={mobileUserOpen}
//                 >
//                   <span>Account</span>
//                   <span className="freshnav-caret">
//                     {mobileUserOpen ? <FiChevronUp /> : <FiChevronDown />}
//                   </span>
//                 </button>
//                 <div
//                   className={`freshnav-mobile-panel ${
//                     mobileUserOpen ? "open" : ""
//                   }`}
//                 >
//                   {userNav.map((u) => (
//                     <NavLink
//                       key={u.to}
//                       to={u.to}
//                       className="freshnav-mobile-sublink"
//                       onClick={() => setMobileOpen(false)}
//                     >
//                       {u.label}
//                     </NavLink>
//                   ))}
//                 </div>
//               </li>

//               <li className="freshnav-mobile-cta">
//                 <NavLink
//                   to="/login"
//                   className="freshnav-cta"
//                   onClick={() => setMobileOpen(false)}
//                 >
//                   Login / SignUp
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </aside>
//       </div>

//       {/* Know US Modal */}
//       {knowModalOpen && (
//         <div
//           className="freshnav-modal-overlay"
//           onClick={() => setKnowModalOpen(false)}
//         >
//           <div className="freshnav-modal" onClick={(e) => e.stopPropagation()}>
//             {/* <button
//               className="freshnav-modal-close"
//               onClick={() => setKnowModalOpen(false)}
//               aria-label="Close"
//             >
//               <FiX size={24} />
//             </button> */}
//             <div className="freshnav-modal-content">
//               {knowNav.map((k) => (
//                 <NavLink
//                   key={k.to}
//                   to={k.to}
//                   className="freshnav-modal-link"
//                   onClick={() => setKnowModalOpen(false)}
//                 >
//                   <div
//                     style={{
//                       display: "flex",
//                       gap: "16px",
//                       // alignItems: "center",
//                     }}
//                   >
//                     {k.icon}
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "column",
//                         fontSize: "16px",
//                         fontWeight: "500",
//                       }}
//                     >
//                       {k.label}
//                       <span style={{ fontSize: "14px", fontWeight: 500 }}>
//                         {k.tagline}
//                       </span>
//                     </div>
//                   </div>
//                 </NavLink>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Resources Modal */}
//       {resourcesModalOpen && (
//         <div
//           className="freshnav-modal-overlay"
//           onClick={() => setResourcesModalOpen(false)}
//         >
//           <div className="freshnav-modal" onClick={(e) => e.stopPropagation()}>
//             <div className="freshnav-modal-content">
//               {resourcesNav.map((r) => (
//                 <NavLink
//                   key={r.to}
//                   to={r.to}
//                   className="freshnav-modal-link"
//                   onClick={() => setResourcesModalOpen(false)}
//                 >
//                   <div style={{ display: "flex", gap: "16px" }}>
//                     {r.icon}
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "column",
//                         fontSize: "16px",
//                         fontWeight: "500",
//                       }}
//                     >
//                       {r.label}
//                       <span style={{ fontSize: "14px", fontWeight: 500 }}>
//                         {r.tagline}
//                       </span>
//                     </div>
//                   </div>
//                 </NavLink>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

/* */
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiChevronRight,
} from "react-icons/fi";
import "./Navbar.css";
import { Book, BookAIcon } from "lucide-react";
import { FaBookOpen, FaEnvelope } from "react-icons/fa";
import Logo from "../pages/Images/Logo/Gemini_Generated_Image_u65uf5u65uf5u65u-removebg-preview.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileKnowOpen, setMobileKnowOpen] = useState(false);
  const [desktopKnowOpen, setDesktopKnowOpen] = useState(false);
  const [knowModalOpen, setKnowModalOpen] = useState(false);
  const [resourcesModalOpen, setResourcesModalOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const location = useLocation();

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Close all modals when one opens
  useEffect(() => {
    if (knowModalOpen) {
      setResourcesModalOpen(false);
    }
  }, [knowModalOpen]);

  useEffect(() => {
    if (resourcesModalOpen) {
      setKnowModalOpen(false);
    }
  }, [resourcesModalOpen]);

  // Keep body from scrolling while mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("freshnav-no-scroll", mobileOpen);
    return () => document.body.classList.remove("freshnav-no-scroll");
  }, [mobileOpen]);

  // Close mobile submenus when route changes (so drawer state resets)
  useEffect(() => {
    setMobileKnowOpen(false);
  }, [location.pathname]);

  const mainNav = [
    { label: "Home", to: "/" },
    { label: "UpComing", to: "/UpComing" },
    { label: "Careers", to: "/careers" },
    // { label: "Blogs", to: "/Blogs" },
  ];

  const knowNav = [
    {
      label: "About Us",
      to: "/about-us",
      icon: <FaBookOpen size={16} />,
      tagline: "Learn who we are and what we do",
    },
    {
      label: "Contact Us",
      to: "/contact-us",
      icon: <FaEnvelope size={16} />,
      tagline: "Reach out to our team",
    },
  ];

  const resourcesNav = [
    {
      label: "Roadmaps",
      to: "/resources/roadmaps",
      icon: <FaBookOpen size={16} />,
      tagline: "Learn from structured courses",
    },
    {
      label: "Resume",
      to: "/resources/resumes",
      icon: <Book size={16} />,
      tagline: "Build and improve your resume",
    },
    {
      label: "AI Tools",
      to: "/resources/ai-tools",
      icon: <BookAIcon size={16} />,
      tagline: "Explore AI tools for productivity",
    },
  ];

  // Know Us should be active if on About or Contact
  const isKnowActive = null;

  // Close all modals function
  const closeAllModals = () => {
    setKnowModalOpen(false);
    setResourcesModalOpen(false);
  };

  // Handle modal toggle with auto-close of other modals
  const handleKnowModalToggle = () => {
    setKnowModalOpen((prev) => !prev);
    if (!knowModalOpen) {
      setResourcesModalOpen(false);
    }
  };

  const handleResourcesModalToggle = () => {
    setResourcesModalOpen((prev) => !prev);
    if (!resourcesModalOpen) {
      setKnowModalOpen(false);
    }
  };

  // Enhanced close function that also scrolls to top
  const handleLinkClick = () => {
    setMobileOpen(false);
    scrollToTop();
  };

  // Enhanced modal close function that also scrolls to top
  const handleModalLinkClick = () => {
    closeAllModals();
    scrollToTop();
  };

  return (
    <>
      <div
        className={`${
          mobileOpen ? "freshnav-header-mobile" : "freshnav-header"
        }`}
      >
        <div className="freshnav-inner">
          <NavLink to="/" className="freshnav-brand" onClick={scrollToTop}>
            <img
              src={Logo}
              alt="logo"
              className="freshnav-brand-img"
              style={{ height: "47px" }}
            />
          </NavLink>

          {/* Desktop nav */}
          <nav className="freshnav-desktop" aria-label="Main navigation">
            <ul className="freshnav-list">
              {mainNav.map((item, index) => {
                // Insert Resources after Home (index === 0)
                if (index === 0) {
                  return (
                    <React.Fragment key="resources">
                      {/* Normal Nav item */}
                      <li key={item.to} className="freshnav-item">
                        <NavLink
                          to={item.to}
                          className={({ isActive }) =>
                            isActive
                              ? "freshnav-link freshnav-active"
                              : "freshnav-link"
                          }
                          onClick={scrollToTop}
                        >
                          {item.label}
                        </NavLink>
                      </li>

                      {/* Custom Resources button */}
                      <li className="freshnav-item freshnav-dropdown">
                        <button
                          type="button"
                          className="freshnav-link-know freshnav-dropdown-btn"
                          aria-expanded={resourcesModalOpen}
                          onClick={handleResourcesModalToggle}
                        >
                          Resources
                          <span className="freshnav-caret">
                            {resourcesModalOpen ? (
                              <FiChevronUp size={20} />
                            ) : (
                              <FiChevronDown size={20} />
                            )}
                          </span>
                        </button>
                      </li>
                    </React.Fragment>
                  );
                }

                // Default items
                return (
                  <li key={item.to} className="freshnav-item">
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        isActive
                          ? "freshnav-link freshnav-active"
                          : "freshnav-link"
                      }
                      onClick={scrollToTop}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                );
              })}

              {/* Know Us stays outside */}
              <li className="freshnav-item freshnav-dropdown">
                <button
                  type="button"
                  className="freshnav-link-know freshnav-dropdown-btn"
                  aria-expanded={knowModalOpen}
                  onClick={handleKnowModalToggle}
                >
                  Know Us
                  <span className="freshnav-caret">
                    {knowModalOpen ? (
                      <FiChevronUp size={20} />
                    ) : (
                      <FiChevronDown size={20} />
                    )}
                  </span>
                </button>
              </li>
            </ul>
          </nav>

          <div className="freshnav-actions">
            {/* Desktop Stay Tuned button */}
            <div className="freshnav-user-desktop">
              <button className="freshnav-auth-btn">Stay Tuned!</button>
            </div>

            {/* Mobile toggle */}
            <button
              className="freshnav-toggle"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((s) => !s)}
            >
              {mobileOpen ? null : <FiMenu />}
            </button>
          </div>
        </div>

        {/* overlay */}
        <div
          className={`freshnav-overlay ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Mobile drawer */}
        <aside
          className={`freshnav-mobile ${mobileOpen ? "open" : ""}`}
          aria-hidden={!mobileOpen}
        >
          <div className="freshnav-mobile-inner">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <img
                src="https://uploads-ssl.webflow.com/62259a0fd25200e36c368b9f/6226f2ce0a3889833f400b0a_designership-logo.svg"
                alt="logo"
              />
              <button
                className="freshnav-toggle"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((s) => !s)}
              >
                {mobileOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
            <ul className="freshnav-mobile-list">
              {mainNav.map((item, index) => {
                // For the first item only
                if (index === 0) {
                  return (
                    <React.Fragment key={`main-${item.to}`}>
                      {/* Normal first nav item */}
                      <li className="freshnav-item">
                        <NavLink
                          to={item.to}
                          className={({ isActive }) =>
                            `freshnav-mobile-link ${
                              isActive ? "freshnav-active" : ""
                            }`
                          }
                          onClick={handleLinkClick}
                        >
                          {item.label}
                        </NavLink>
                      </li>

                      {/* Custom Resources accordion */}
                      <li className="freshnav-item">
                        <button
                          type="button"
                          className={`freshnav-mobile-accordion ${
                            mobileResourcesOpen ? "freshnav-active" : ""
                          }`}
                          aria-expanded={mobileResourcesOpen}
                          onClick={() => setMobileResourcesOpen((s) => !s)}
                        >
                          <span>Resources</span>
                          <span className="freshnav-caret">
                            {mobileResourcesOpen ? (
                              <FiChevronUp />
                            ) : (
                              <FiChevronDown />
                            )}
                          </span>
                        </button>

                        <div
                          className={`freshnav-mobile-panel ${
                            mobileResourcesOpen ? "open" : ""
                          }`}
                        >
                          {resourcesNav.map((res) => (
                            <NavLink
                              key={res.to}
                              to={res.to}
                              className={({ isActive }) =>
                                `freshnav-mobile-sublink ${
                                  isActive ? "freshnav-active" : ""
                                }`
                              }
                              onClick={handleLinkClick}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  width: "100%",
                                }}
                              >
                                <span>{res.label}</span>
                                <FiChevronRight size={16} />
                              </div>
                            </NavLink>
                          ))}
                        </div>
                      </li>
                    </React.Fragment>
                  );
                }

                // For all other nav items
                return (
                  <li key={item.to} className="freshnav-item">
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `freshnav-mobile-link ${
                          isActive ? "freshnav-active" : ""
                        }`
                      }
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                );
              })}

              <li>
                <button
                  className={`freshnav-mobile-accordion ${
                    isKnowActive ? "freshnav-active" : ""
                  }`}
                  onClick={() => setMobileKnowOpen((s) => !s)}
                  aria-expanded={mobileKnowOpen}
                >
                  <span>Know Us</span>
                  <span className="freshnav-caret">
                    {mobileKnowOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </button>
                <div
                  className={`freshnav-mobile-panel ${
                    mobileKnowOpen ? "open" : ""
                  }`}
                >
                  {knowNav.map((k) => (
                    <NavLink
                      key={k.to}
                      to={k.to}
                      className={({ isActive }) =>
                        `freshnav-mobile-sublink ${
                          isActive ? "freshnav-active" : ""
                        }`
                      }
                      onClick={handleLinkClick}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <span>{k.label}</span>
                        <FiChevronRight size={16} />
                      </div>
                    </NavLink>
                  ))}
                </div>
              </li>

              {/* Stay Tuned CTA */}
              <li className="freshnav-mobile-cta">
                <div className="freshnav-cta">Stay Tuned!</div>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Know US Modal */}
      {knowModalOpen && (
        <div className="freshnav-modal-overlay" onClick={closeAllModals}>
          <div className="freshnav-modal" onClick={(e) => e.stopPropagation()}>
            <div className="freshnav-modal-content">
              {knowNav.map((k) => (
                <NavLink
                  key={k.to}
                  to={k.to}
                  className="freshnav-modal-link"
                  onClick={handleModalLinkClick}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    {k.icon}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "16px",
                        fontWeight: "500",
                        flex: 1,
                      }}
                    >
                      {k.label}
                      <span style={{ fontSize: "14px", fontWeight: 500 }}>
                        {k.tagline}
                      </span>
                    </div>
                    <FiChevronRight size={20} />
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Resources Modal */}
      {resourcesModalOpen && (
        <div className="freshnav-modal-overlay" onClick={closeAllModals}>
          <div className="freshnav-modal" onClick={(e) => e.stopPropagation()}>
            <div className="freshnav-modal-content">
              {resourcesNav.map((r) => (
                <NavLink
                  key={r.to}
                  to={r.to}
                  className="freshnav-modal-link"
                  onClick={handleModalLinkClick}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    {r.icon}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "16px",
                        fontWeight: "500",
                        flex: 1,
                      }}
                    >
                      {r.label}
                      <span style={{ fontSize: "14px", fontWeight: 500 }}>
                        {r.tagline}
                      </span>
                    </div>
                    <FiChevronRight size={20} />
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
