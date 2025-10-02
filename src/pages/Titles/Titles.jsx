// // // import React, { useState } from "react";
// // // import { Book, Video, PlayCircle, Code, Dot } from "lucide-react";
// // // import styles from "./Titles.module.css";
// // // import Modal from "./Modal";
// // // import confetti from "canvas-confetti";
// // // import data from "../data/tilestemp.json";

// // // const Section = ({
// // //   icon: Icon,
// // //   title,
// // //   paragraph,
// // //   points,
// // //   resources,
// // //   checkedResources,
// // //   setPendingResource,
// // //   setModalOpen,
// // // }) => {
// // //   const [showAll, setShowAll] = useState(false);

// // //   // total resource count
// // //   const totalResources = Array.isArray(resources)
// // //     ? resources.length
// // //     : Object.values(resources).flat().length;

// // //   const completedCount = checkedResources.filter((r) => {
// // //     if (Array.isArray(resources)) {
// // //       return resources.some((res) => res.title === r);
// // //     } else {
// // //       return Object.values(resources)
// // //         .flat()
// // //         .some((res) => r.includes(res.title));
// // //     }
// // //   }).length;

// // //   const progressPercent =
// // //     totalResources > 0 ? (completedCount / totalResources) * 100 : 0;

// // //   const handleCheckboxClick = (res) => {
// // //     setPendingResource(res);
// // //     setModalOpen(true);
// // //   };

// // //   const visiblePoints = showAll ? points : points.slice(0, 3);

// // //   return (
// // //     <div className={styles.section}>
// // //       {/* Section Header with Progress Bar */}
// // //       <div className={styles.sectionHeader}>
// // //         <div style={{ display: "flex", alignItems: "center" }}>
// // //           {/* <Icon className={styles.icon} /> */}
// // //           <h3 className={styles.sectionTitle}>{title}</h3>
// // //         </div>
// // //         <div className={styles.circularWrapper}>
// // //           <svg className={styles.circularSvg} viewBox="0 0 36 36">
// // //             <path
// // //               className={styles.bgCircle}
// // //               d="M18 2.0845
// // //          a 15.9155 15.9155 0 0 1 0 31.831
// // //          a 15.9155 15.9155 0 0 1 0 -31.831"
// // //             />
// // //             <path
// // //               className={styles.progressCircle}
// // //               strokeDasharray={`${progressPercent.toFixed(0)}, 100`}
// // //               stroke={
// // //                 progressPercent < 40
// // //                   ? "#f87171" // red
// // //                   : progressPercent < 70
// // //                   ? "#facc15" // yellow
// // //                   : "#4caf50" // green
// // //               }
// // //               d="M18 2.0845
// // //      a 15.9155 15.9155 0 0 1 0 31.831
// // //      a 15.9155 15.9155 0 0 1 0 -31.831"
// // //             />
// // //           </svg>
// // //           <div className={styles.progressText}>
// // //             {progressPercent.toFixed(0)}%
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <p className={styles.sectionParagraph}>{paragraph}</p>

// // //       {points && (
// // //         <>
// // //           <h2
// // //             style={{
// // //               textAlign: "left",
// // //               fontSize: "18px",
// // //               marginBottom: "6px",
// // //             }}
// // //           >
// // //             Key Features:
// // //           </h2>

// // //           <ul className={styles.points}>
// // //             {visiblePoints.map((pt, i) => (
// // //               <li key={i} style={{ display: "flex", alignItems: "center" }}>
// // //                 <Dot
// // //                   size={26}
// // //                   style={{ marginRight: "6px", color: "#6A737D" }}
// // //                 />
// // //                 {pt}
// // //               </li>
// // //             ))}
// // //           </ul>

// // //           {points.length > 3 && (
// // //             <button
// // //               onClick={() => setShowAll(!showAll)}
// // //               className={styles.readMoreBtn}
// // //             >
// // //               {showAll ? "Read Less" : "Read More"}
// // //             </button>
// // //           )}
// // //         </>
// // //       )}

// // //       {/* Global Progress */}
// // //       <div className={styles.globalProgressWrapper}>
// // //         <span className={styles.globalProgressText}>
// // //           {title} Progress: {`${progressPercent.toFixed(0)}%`}
// // //         </span>
// // //         <div className={styles.globalProgressBar}>
// // //           <div
// // //             className={styles.globalProgressFill}
// // //             style={{ width: `${progressPercent}%` }}
// // //           ></div>
// // //         </div>
// // //       </div>

// // //       {/* Resources (supports both array & categories) */}
// // //       {resources && (
// // //         <div className={styles.tableWrapper}>
// // //           {Array.isArray(resources) ? (
// // //             <table className={styles.resourceTable}>
// // //               <thead>
// // //                 <tr>
// // //                   <th style={{ width: "100px" }}>Done</th>
// // //                   <th>Title</th>
// // //                   <th style={{ width: "100px" }}>Link</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {resources.map((res, i) => (
// // //                   <tr key={i}>
// // //                     <td>
// // //                       <input
// // //                         type="checkbox"
// // //                         checked={checkedResources.includes(res.title)}
// // //                         onChange={() => handleCheckboxClick(res.title)}
// // //                         className={styles.checkbox}
// // //                       />
// // //                     </td>
// // //                     <td>{res.title}</td>
// // //                     <td>
// // //                       <a href={res.link} target="_blank" rel="noreferrer">
// // //                         Visit →
// // //                       </a>
// // //                     </td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           ) : (
// // //             Object.keys(resources).map((category, idx) => (
// // //               <div key={idx} className={styles.categoryBlock}>
// // //                 <h4 className={styles.categoryTitle}>
// // //                   {category.toUpperCase()}
// // //                 </h4>
// // //                 <table className={styles.resourceTable}>
// // //                   <thead>
// // //                     <tr>
// // //                       <th style={{ width: "100px" }}>Check</th>
// // //                       <th>Title</th>
// // //                       <th style={{ width: "100px" }}>Link</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {resources[category].map((res, i) => (
// // //                       <tr key={`${category}-${i}`}>
// // //                         <td>
// // //                           <input
// // //                             type="checkbox"
// // //                             checked={checkedResources.includes(
// // //                               `${category}-${res.title}`
// // //                             )}
// // //                             onChange={() =>
// // //                               handleCheckboxClick(`${category}-${res.title}`)
// // //                             }
// // //                             className={styles.checkbox}
// // //                           />
// // //                         </td>
// // //                         <td>{res.title}</td>
// // //                         <td>
// // //                           <a href={res.link} target="_blank" rel="noreferrer">
// // //                             Visit →
// // //                           </a>
// // //                         </td>
// // //                       </tr>
// // //                     ))}
// // //                   </tbody>
// // //                 </table>
// // //               </div>
// // //             ))
// // //           )}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // const Titles = () => {
// // //   const [modalOpen, setModalOpen] = useState(false);
// // //   const [pendingResource, setPendingResource] = useState(null);
// // //   const [checkedResources, setCheckedResources] = useState([]);
// // //   const [activeTab, setActiveTab] = useState("Documentation");

// // //   const handleConfirm = () => {
// // //     if (pendingResource) {
// // //       setCheckedResources((prev) => [...prev, pendingResource]);
// // //       confetti({
// // //         particleCount: 100,
// // //         spread: 160,
// // //         origin: { y: 0.6 },
// // //       });
// // //     }
// // //     setPendingResource(null);
// // //     setModalOpen(false);
// // //   };

// // //   const handleCancel = () => {
// // //     setPendingResource(null);
// // //     setModalOpen(false);
// // //   };

// // //   const tabs = [
// // //     {
// // //       key: "Documentation",
// // //       icon: Book,
// // //       title: "Documentation",
// // //       paragraph:
// // //         "Official documentation is essential for mastering HTML & CSS. MDN Web Docs and W3Schools offer in-depth guides, references, and interactive examples.",
// // //       points: [
// // //         " Complete reference for all HTML elements & CSS properties",
// // //         " Live code editors for hands-on practice",
// // //         " Detailed browser support tables",
// // //         " Beginner-friendly tutorials and expert-level guides",
// // //       ],
// // //       resources: [
// // //         {
// // //           title: "HTML Documentation - W3Schools",
// // //           link: "https://www.w3schools.com/Html/",
// // //         },
// // //         {
// // //           title: "CSS Documentation - W3Schools",
// // //           link: "https://www.w3schools.com/CSSref/index.php",
// // //         },
// // //       ],
// // //     },
// // //     {
// // //       key: "Crash Courses",
// // //       icon: Video,
// // //       title: "Crash Courses",
// // //       paragraph:
// // //         "Crash courses provide a fast-paced introduction to HTML & CSS, covering fundamentals in just a few hours.",
// // //       points: [
// // //         " Covers HTML structure, tags, and semantic elements",
// // //         " Teaches CSS selectors, flexbox, and grid",
// // //         " Builds mini-projects for practical learning",
// // //         " Free, high-quality YouTube tutorials",
// // //       ],
// // //       resources: [
// // //         {
// // //           title: "HTML Crash Course",
// // //           link: "https://www.youtube.com/watch?v=2u4q2vDLiU0",
// // //         },
// // //         {
// // //           title: "CSS Crash Course",
// // //           link: "https://www.youtube.com/watch?v=c26O1N3x6ug",
// // //         },
// // //         {
// // //           title: "Combined Crash Course",
// // //           link: "https://www.youtube.com/watch?v=D-h8L5hgW-w&t=1366s",
// // //         },
// // //       ],
// // //     },
// // //     {
// // //       key: "Playlists",
// // //       icon: PlayCircle,
// // //       title: "Playlists",
// // //       paragraph:
// // //         "Full-length playlists offer structured learning paths for HTML & CSS, from basics to advanced topics like animations and responsive design.",
// // //       points: [
// // //         " Step-by-step tutorials for systematic learning",
// // //         " Real-world examples and best practices",
// // //         " Covers modern CSS (flexbox, grid, variables)",
// // //         " Includes accessibility and SEO tips",
// // //       ],
// // //       resources: [
// // //         {
// // //           title: "HTML Full Course",
// // //           link: "https://www.youtube.com/watch?v=k7ELO356Npo",
// // //         },
// // //         {
// // //           title: "CSS Full Course",
// // //           link: "https://www.youtube.com/watch?v=dSJM4Gyh8jE",
// // //         },
// // //         {
// // //           title: "Project Hosting (Netlify)",
// // //           link: "https://www.youtube.com/watch?v=9srnyNC1e_o",
// // //         },
// // //       ],
// // //     },
// // //     {
// // //       key: "Projects",
// // //       icon: Code,
// // //       title: "Projects",
// // //       paragraph:
// // //         "Building projects is the best way to solidify HTML & CSS skills.",
// // //       points: [
// // //         " From beginner to advanced project ideas",
// // //         " Teaches responsive design (mobile-first)",
// // //         " Integrates CSS animations and transitions",
// // //         " GitHub-friendly code repositories",
// // //       ],
// // //       resources: {
// // //         basic: [
// // //           {
// // //             title: "Small Projects Playlist",
// // //             link: "https://www.youtube.com/playlist?list=PLImJ3umGjxdD3ov2lwg0SM5rxz5v9FjOf",
// // //           },
// // //         ],
// // //         intermediate: [
// // //           {
// // //             title: "Portfolio Project",
// // //             link: "https://www.youtube.com/watch?v=ldwlOzRvYOU",
// // //           },
// // //         ],
// // //         advanced: [
// // //           {
// // //             title: "Blinkit Clone Project",
// // //             link: "https://www.youtube.com/watch?v=NhgcuSmw1u8",
// // //           },
// // //         ],
// // //       },
// // //     },
// // //   ];

// // //   return (
// // //     <>
// // //       <div className={styles.container}>
// // //         {/* Title Section */}
// // //         <h2 className={styles.mainHeading}>HTML & CSS Learning Path</h2>

// // //         {/* Course Description */}
// // //         <p className={styles.courseDescription}>
// // //           HTML (HyperText Markup Language) is used to structure web content,
// // //           while CSS (Cascading Style Sheets) is used to style and visually
// // //           present that content. Mastering both is the first step toward becoming
// // //           a front-end developer.
// // //         </p>

// // //         {/* Tabs */}
// // //         <div className={styles.tabs}>
// // //           {tabs.map((tab) => (
// // //             <button
// // //               key={tab.key}
// // //               className={`${styles.tabButton} ${
// // //                 activeTab === tab.key ? styles.activeTab : ""
// // //               }`}
// // //               onClick={() => setActiveTab(tab.key)}
// // //             >
// // //               <tab.icon className={styles.tabIcon} />
// // //               {tab.key}
// // //             </button>
// // //           ))}
// // //         </div>

// // //         {/* Active Tab Content */}
// // //         <div className={styles.tabContent}>
// // //           {tabs
// // //             .filter((tab) => tab.key === activeTab)
// // //             .map((tab) => (
// // //               <Section
// // //                 key={tab.key}
// // //                 icon={tab.icon}
// // //                 title={tab.title}
// // //                 paragraph={tab.paragraph}
// // //                 points={tab.points}
// // //                 resources={tab.resources}
// // //                 checkedResources={checkedResources}
// // //                 setPendingResource={setPendingResource}
// // //                 setModalOpen={setModalOpen}
// // //               />
// // //             ))}
// // //         </div>
// // //       </div>

// // //       {/* Modal */}
// // //       <Modal
// // //         isOpen={modalOpen}
// // //         onClose={handleCancel}
// // //         onConfirm={handleConfirm}
// // //         title="Confirm Completion"
// // //         message={`Mark "${pendingResource}" as completed?`}
// // //       />
// // //     </>
// // //   );
// // // };

// // // export default Titles;

// // /* */

// import React, { useState, useEffect } from "react";
// import {
//   Book,
//   Video,
//   PlayCircle,
//   Code,
//   Dot,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";
// import styles from "./Titles.module.css";
// import Modal from "./Modal";
// import confetti from "canvas-confetti";
// import { useParams } from "react-router-dom";
// import data from "../data/tilestemp.json";

// const Section = ({
//   icon: Icon,
//   title,
//   paragraph,
//   points,
//   resources,
//   checkedResources,
//   setPendingResource,
//   setModalOpen,
// }) => {
//   const [showAll, setShowAll] = useState(false);
//   const [openCategories, setOpenCategories] = useState({});

//   // Toggle FAQ dropdown
//   const toggleCategory = (category) => {
//     setOpenCategories((prev) => ({
//       ...prev,
//       [category]: !prev[category],
//     }));
//   };

//   // total resource count
//   const totalResources = Array.isArray(resources)
//     ? resources.length
//     : resources && typeof resources === "object"
//     ? Object.values(resources).flat().length
//     : 0;

//   const completedCount = checkedResources.filter((r) => {
//     if (Array.isArray(resources)) {
//       return resources.some((res) => res.title === r);
//     } else if (resources && typeof resources === "object") {
//       return Object.values(resources)
//         .flat()
//         .some((res) => r.includes(res.title));
//     }
//     return false;
//   }).length;

//   const progressPercent =
//     totalResources > 0 ? (completedCount / totalResources) * 100 : 0;

//   const handleCheckboxClick = (res) => {
//     setPendingResource(res);
//     setModalOpen(true);
//   };

//   const visiblePoints = showAll ? points : points?.slice(0, 3) || [];

//   return (
//     <div className={styles.section}>
//       {/* Section Header with Completed Count */}
//       <div className={styles.sectionHeader}>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "12px",
//           }}
//         >
//           <h3 className={styles.sectionTitle}>{title}</h3>
//           <span className={styles.completedBadge}>
//             Completed {completedCount}/{totalResources}
//           </span>
//         </div>
//       </div>

//       <p className={styles.sectionParagraph}>{paragraph}</p>

//       {points && points.length > 0 && (
//         <>
//           <h2
//             style={{
//               textAlign: "left",
//               fontSize: "18px",
//               marginBottom: "6px",
//             }}
//           >
//             Key Features:
//           </h2>

//           <ul className={styles.points}>
//             {visiblePoints.map((pt, i) => (
//               <li key={i} style={{ display: "flex", alignItems: "center" }}>
//                 <Dot
//                   size={26}
//                   style={{ marginRight: "6px", color: "#6A737D" }}
//                 />
//                 {pt}
//               </li>
//             ))}
//           </ul>

//           {points.length > 3 && (
//             <button
//               onClick={() => setShowAll(!showAll)}
//               className={styles.readMoreBtn}
//             >
//               {showAll ? "Read Less" : "Read More"}
//             </button>
//           )}
//         </>
//       )}

//       {/* Global Progress */}
//       <div className={styles.globalProgressWrapper}>
//         <span className={styles.globalProgressText}>
//           {title} Progress: {`${progressPercent.toFixed(0)}%`}
//         </span>
//         <div className={styles.globalProgressBar}>
//           <div
//             className={styles.globalProgressFill}
//             style={{ width: `${progressPercent}%` }}
//           ></div>
//         </div>
//       </div>

//       {/* Resources (supports both array & categories) */}
//       {resources && (
//         <div className={styles.tableWrapper}>
//           {Array.isArray(resources) ? (
//             <table className={styles.resourceTable}>
//               <thead>
//                 <tr>
//                   <th style={{ width: "100px" }}>Done</th>
//                   <th>Title</th>
//                   <th style={{ width: "100px" }}>Link</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {resources.map((res, i) => (
//                   <tr key={i}>
//                     <td>
//                       <input
//                         type="checkbox"
//                         checked={checkedResources.includes(res.title)}
//                         onChange={() => handleCheckboxClick(res.title)}
//                         className={styles.checkbox}
//                       />
//                     </td>
//                     <td>{res.title}</td>
//                     <td>
//                       <a href={res.link} target="_blank" rel="noreferrer">
//                         Visit →
//                       </a>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             Object.keys(resources).map((category, idx) => (
//               <div key={idx} className={styles.categoryBlock}>
//                 {/* FAQ-style dropdown header */}
//                 <div
//                   className={styles.faqHeader}
//                   onClick={() => toggleCategory(category)}
//                 >
//                   <h4 className={styles.categoryTitle}>
//                     {category.toUpperCase()}
//                   </h4>
//                   <div className={styles.faqToggle}>
//                     {openCategories[category] ? (
//                       <ChevronUp size={20} />
//                     ) : (
//                       <ChevronDown size={20} />
//                     )}
//                   </div>
//                 </div>

//                 {/* Dropdown content */}
//                 {openCategories[category] && (
//                   <table className={styles.resourceTable}>
//                     <thead>
//                       <tr>
//                         <th style={{ width: "100px" }}>Check</th>
//                         <th>Title</th>
//                         <th style={{ width: "100px" }}>Link</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {resources[category].map((res, i) => (
//                         <tr key={`${category}-${i}`}>
//                           <td>
//                             <input
//                               type="checkbox"
//                               checked={checkedResources.includes(
//                                 `${category}-${res.title}`
//                               )}
//                               onChange={() =>
//                                 handleCheckboxClick(`${category}-${res.title}`)
//                               }
//                               className={styles.checkbox}
//                             />
//                           </td>
//                           <td>{res.title}</td>
//                           <td>
//                             <a href={res.link} target="_blank" rel="noreferrer">
//                               Visit →
//                             </a>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 )}
//               </div>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// // Special Playlist Section with FAQ dropdowns
// const PlaylistSection = ({
//   title,
//   paragraph,
//   points,
//   resources,
//   checkedResources,
//   setPendingResource,
//   setModalOpen,
// }) => {
//   const [showAll, setShowAll] = useState(false);
//   const [openPlaylists, setOpenPlaylists] = useState({});

//   // Toggle FAQ dropdown for playlists
//   const togglePlaylist = (playlistTitle) => {
//     setOpenPlaylists((prev) => ({
//       ...prev,
//       [playlistTitle]: !prev[playlistTitle],
//     }));
//   };

//   // Calculate progress for playlists
//   const totalVideos =
//     resources?.reduce(
//       (total, playlist) => total + (playlist.videos?.length || 0),
//       0
//     ) || 0;

//   const completedCount = checkedResources.filter((r) =>
//     resources?.some((playlist) =>
//       playlist.videos?.some((video) => r.includes(video.title))
//     )
//   ).length;

//   const progressPercent =
//     totalVideos > 0 ? (completedCount / totalVideos) * 100 : 0;

//   const handleCheckboxClick = (res) => {
//     setPendingResource(res);
//     setModalOpen(true);
//   };

//   const visiblePoints = showAll ? points : points?.slice(0, 3) || [];

//   return (
//     <div className={styles.section}>
//       {/* Section Header with Completed Count */}
//       <div className={styles.sectionHeader}>
//         <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//           <h3 className={styles.sectionTitle}>{title}</h3>
//           <span className={styles.completedBadge}>
//             Completed {completedCount}/{totalVideos}
//           </span>
//         </div>
//       </div>

//       <p className={styles.sectionParagraph}>{paragraph}</p>

//       {points && points.length > 0 && (
//         <>
//           <h2
//             style={{
//               textAlign: "left",
//               fontSize: "18px",
//               marginBottom: "6px",
//             }}
//           >
//             Key Features:
//           </h2>

//           <ul className={styles.points}>
//             {visiblePoints.map((pt, i) => (
//               <li key={i} style={{ display: "flex", alignItems: "center" }}>
//                 <Dot
//                   size={26}
//                   style={{ marginRight: "6px", color: "#6A737D" }}
//                 />
//                 {pt}
//               </li>
//             ))}
//           </ul>

//           {points.length > 3 && (
//             <button
//               onClick={() => setShowAll(!showAll)}
//               className={styles.readMoreBtn}
//             >
//               {showAll ? "Read Less" : "Read More"}
//             </button>
//           )}
//         </>
//       )}

//       {/* Global Progress */}
//       <div className={styles.globalProgressWrapper}>
//         <span className={styles.globalProgressText}>
//           {title} Progress: {`${progressPercent.toFixed(0)}%`}
//         </span>
//         <div className={styles.globalProgressBar}>
//           <div
//             className={styles.globalProgressFill}
//             style={{ width: `${progressPercent}%` }}
//           ></div>
//         </div>
//       </div>

//       {/* Playlist Resources with FAQ dropdowns */}
//       {resources && (
//         <div className={styles.tableWrapper}>
//           {resources.map((playlist, idx) => (
//             <div key={idx} className={styles.categoryBlock}>
//               {/* FAQ-style dropdown header for playlist */}
//               <div
//                 className={styles.faqHeader}
//                 onClick={() => togglePlaylist(playlist.title)}
//               >
//                 <h4 className={styles.categoryTitle}>
//                   {playlist.title} {playlist.type && `(${playlist.type})`}
//                 </h4>
//                 <div className={styles.faqToggle}>
//                   {openPlaylists[playlist.title] ? (
//                     <ChevronUp size={20} />
//                   ) : (
//                     <ChevronDown size={20} />
//                   )}
//                 </div>
//               </div>

//               {/* Dropdown content */}
//               {openPlaylists[playlist.title] && playlist.videos && (
//                 <table className={styles.resourceTable}>
//                   <thead>
//                     <tr>
//                       <th style={{ width: "100px" }}>Check</th>
//                       <th>Video Title</th>
//                       <th style={{ width: "100px" }}>Link</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {playlist.videos.map((video, i) => (
//                       <tr key={`${playlist.title}-${i}`}>
//                         <td>
//                           <input
//                             type="checkbox"
//                             checked={checkedResources.includes(
//                               `${playlist.title}-${video.title}`
//                             )}
//                             onChange={() =>
//                               handleCheckboxClick(
//                                 `${playlist.title}-${video.title}`
//                               )
//                             }
//                             className={styles.checkbox}
//                           />
//                         </td>
//                         <td>{video.title}</td>
//                         <td>
//                           <a href={video.link} target="_blank" rel="noreferrer">
//                             Watch →
//                           </a>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const Titles = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [pendingResource, setPendingResource] = useState(null);
//   const [checkedResources, setCheckedResources] = useState([]);
//   const [activeTab, setActiveTab] = useState("");
//   const [currentStepData, setCurrentStepData] = useState(null);

//   const { id, step } = useParams();

//   useEffect(() => {
//     // Find the roadmap by ID and step
//     const roadmap = data.find((item) => item.id === parseInt(id));
//     if (roadmap && roadmap.steps && roadmap.steps[step]) {
//       setCurrentStepData(roadmap.steps[step]);
//     }
//   }, [id, step]);

//   useEffect(() => {
//     // Set active tab to first available tab with data
//     if (currentStepData) {
//       const availableTabs = getAvailableTabs();
//       if (availableTabs.length > 0 && !activeTab) {
//         setActiveTab(availableTabs[0].key);
//       }
//     }
//   }, [currentStepData]);

//   const handleConfirm = () => {
//     if (pendingResource) {
//       setCheckedResources((prev) => [...prev, pendingResource]);
//       confetti({
//         particleCount: 100,
//         spread: 160,
//         origin: { y: 0.6 },
//       });
//     }
//     setPendingResource(null);
//     setModalOpen(false);
//   };

//   const handleCancel = () => {
//     setPendingResource(null);
//     setModalOpen(false);
//   };

//   // Helper function to check if a tab has data
//   const hasTabData = (tabKey) => {
//     if (!currentStepData) return false;

//     switch (tabKey) {
//       case "Documentation":
//         return (
//           currentStepData.documentation?.resources ||
//           currentStepData.documentation?.paragraph ||
//           currentStepData.documentation?.points
//         );
//       case "Crash Courses":
//         return (
//           currentStepData.crashCourses?.resources ||
//           currentStepData.crashCourses?.paragraph ||
//           currentStepData.crashCourses?.points
//         );
//       case "Playlists":
//         return (
//           currentStepData.playlists?.resources ||
//           currentStepData.playlists?.paragraph ||
//           currentStepData.playlists?.points
//         );
//       case "Projects":
//         return (
//           currentStepData.projects?.resources ||
//           currentStepData.projects?.paragraph ||
//           currentStepData.projects?.points
//         );
//       default:
//         return false;
//     }
//   };

//   // Get only tabs that have data
//   const getAvailableTabs = () => {
//     const allTabs = [
//       {
//         key: "Documentation",
//         icon: Book,
//         title: "Documentation",
//         paragraph: currentStepData?.documentation?.paragraph,
//         points: currentStepData?.documentation?.points,
//         resources: currentStepData?.documentation?.resources,
//       },
//       {
//         key: "Crash Courses",
//         icon: Video,
//         title: "Crash Courses",
//         paragraph: currentStepData?.crashCourses?.paragraph,
//         points: currentStepData?.crashCourses?.points,
//         resources: currentStepData?.crashCourses?.resources,
//       },
//       {
//         key: "Playlists",
//         icon: PlayCircle,
//         title: "Playlists",
//         paragraph: currentStepData?.playlists?.paragraph,
//         points: currentStepData?.playlists?.points,
//         resources: currentStepData?.playlists?.resources,
//       },
//       {
//         key: "Projects",
//         icon: Code,
//         title: "Projects",
//         paragraph: currentStepData?.projects?.paragraph,
//         points: currentStepData?.projects?.points,
//         resources: currentStepData?.projects?.resources,
//       },
//     ];

//     return allTabs.filter((tab) => hasTabData(tab.key));
//   };

//   if (!currentStepData) {
//     return (
//       <div className={styles.container}>
//         <h2 className={styles.mainHeading}>Loading...</h2>
//         <p>
//           Step data not found for ID: {id}, Step: {step}
//         </p>
//       </div>
//     );
//   }

//   const availableTabs = getAvailableTabs();

//   return (
//     <>
//       <div className={styles.container}>
//         {/* Title Section */}
//         <h2 className={styles.mainHeading}>{currentStepData.name}</h2>

//         {/* Course Description */}
//         <p className={styles.courseDescription}>
//           {currentStepData.description}
//         </p>

//         {/* Tabs - Only show tabs with data */}
//         {availableTabs.length > 0 && (
//           <div className={styles.tabs}>
//             {availableTabs.map((tab) => (
//               <button
//                 key={tab.key}
//                 className={`${styles.tabButton} ${
//                   activeTab === tab.key ? styles.activeTab : ""
//                 }`}
//                 onClick={() => setActiveTab(tab.key)}
//               >
//                 <tab.icon className={styles.tabIcon} />
//                 {tab.key}
//               </button>
//             ))}
//           </div>
//         )}

//         {/* Active Tab Content */}
//         <div className={styles.tabContent}>
//           {availableTabs
//             .filter((tab) => tab.key === activeTab)
//             .map((tab) =>
//               tab.key === "Playlists" ? (
//                 <PlaylistSection
//                   key={tab.key}
//                   icon={tab.icon}
//                   title={tab.title}
//                   paragraph={tab.paragraph}
//                   points={tab.points}
//                   resources={tab.resources}
//                   checkedResources={checkedResources}
//                   setPendingResource={setPendingResource}
//                   setModalOpen={setModalOpen}
//                 />
//               ) : (
//                 <Section
//                   key={tab.key}
//                   icon={tab.icon}
//                   title={tab.title}
//                   paragraph={tab.paragraph}
//                   points={tab.points}
//                   resources={tab.resources}
//                   checkedResources={checkedResources}
//                   setPendingResource={setPendingResource}
//                   setModalOpen={setModalOpen}
//                 />
//               )
//             )}
//         </div>
//       </div>

//       {/* Modal */}
//       <Modal
//         isOpen={modalOpen}
//         onClose={handleCancel}
//         onConfirm={handleConfirm}
//         title="Confirm Completion"
//         message={`Mark "${pendingResource}" as completed?`}
//       />
//     </>
//   );
// };

// export default Titles;

/****** */
// from thsi code disable the and commmnet the. rigress bar, checkboxes from tables and completed tag.
// int hsi table also add teh sr. numer colum.

import React, { useState, useEffect } from "react";
import {
  Book,
  Video,
  PlayCircle,
  Code,
  Dot,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import styles from "./Titles.module.css";
import Modal from "./Modal";
import confetti from "canvas-confetti";
import { useParams } from "react-router-dom";
import data from "../data/tilestemp.json";

const Section = ({
  icon: Icon,
  title,
  paragraph,
  points,
  resources,
  checkedResources,
  setPendingResource,
  setModalOpen,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [openCategories, setOpenCategories] = useState({});

  // Toggle FAQ dropdown
  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // total resource count
  const totalResources = Array.isArray(resources)
    ? resources.length
    : resources && typeof resources === "object"
    ? Object.values(resources).flat().length
    : 0;

  const completedCount = checkedResources.filter((r) => {
    if (Array.isArray(resources)) {
      return resources.some((res) => res.title === r);
    } else if (resources && typeof resources === "object") {
      return Object.values(resources)
        .flat()
        .some((res) => r.includes(res.title));
    }
    return false;
  }).length;

  const progressPercent =
    totalResources > 0 ? (completedCount / totalResources) * 100 : 0;

  const handleCheckboxClick = (res) => {
    setPendingResource(res);
    setModalOpen(true);
  };

  const visiblePoints = showAll ? points : points?.slice(0, 3) || [];

  return (
    <div className={styles.sectioncontainer}>
      <div className={styles.section}>
        {/* Section Header with Completed Count - COMMENTED OUT */}
        {/* <div className={styles.sectionHeader}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <h3 className={styles.sectionTitle}>{title}</h3>
          <span className={styles.completedBadge}>
            Completed {completedCount}/{totalResources}
          </span>
        </div>
      </div> */}

        {/* Simplified Section Header without completed badge */}
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>{title}</h3>
        </div>

        <p className={styles.sectionParagraph}>{paragraph}</p>

        {points && points.length > 0 && (
          <>
            <h2
              style={{
                textAlign: "left",
                fontSize: "18px",
                marginBottom: "6px",
              }}
            >
              Key Features:
            </h2>

            <ul className={styles.points}>
              {visiblePoints.map((pt, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center" }}>
                  <Dot
                    size={26}
                    style={{ marginRight: "6px", color: "#6A737D" }}
                  />
                  {pt}
                </li>
              ))}
            </ul>

            {points.length > 3 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className={styles.readMoreBtn}
              >
                {showAll ? "Read Less" : "Read More"}
              </button>
            )}
          </>
        )}

        {/* Global Progress - COMMENTED OUT */}
        {/* <div className={styles.globalProgressWrapper}>
        <span className={styles.globalProgressText}>
          {title} Progress: {`${progressPercent.toFixed(0)}%`}
        </span>
        <div className={styles.globalProgressBar}>
          <div
            className={styles.globalProgressFill}
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div> */}

        {/* Resources (supports both array & categories) */}
        {resources && (
          <div className={styles.tableWrapper}>
            {Array.isArray(resources) ? (
              <table className={styles.resourceTable}>
                <thead>
                  <tr>
                    <th style={{ width: "60px" }}>Sr. No.</th>
                    {/* <th style={{ width: "100px" }}>Done</th> */}
                    <th>Title</th>
                    <th style={{ width: "100px" }}>Link</th>
                  </tr>
                </thead>
                <tbody>
                  {resources.map((res, i) => (
                    <tr key={i}>
                      <td style={{ textAlign: "center" }}>{i + 1}</td>
                      {/* <td>
                      <input
                        type="checkbox"
                        checked={checkedResources.includes(res.title)}
                        onChange={() => handleCheckboxClick(res.title)}
                        className={styles.checkbox}
                      />
                    </td> */}
                      <td>{res.title}</td>
                      <td>
                        <a href={res.link} target="_blank" rel="noreferrer">
                          Visit →
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              Object.keys(resources).map((category, idx) => (
                <div key={idx} className={styles.categoryBlock}>
                  {/* FAQ-style dropdown header */}
                  <div
                    className={styles.faqHeader}
                    onClick={() => toggleCategory(category)}
                  >
                    <h4 className={styles.categoryTitle}>
                      {category.toUpperCase()}
                    </h4>
                    <div className={styles.faqToggle}>
                      {openCategories[category] ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </div>
                  </div>

                  {/* Dropdown content */}
                  {openCategories[category] && (
                    <table className={styles.resourceTable}>
                      <thead>
                        <tr>
                          <th style={{ width: "60px" }}>Sr. No.</th>
                          {/* <th style={{ width: "100px" }}>Check</th> */}
                          <th>Title</th>
                          <th style={{ width: "100px" }}>Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        {resources[category].map((res, i) => (
                          <tr key={`${category}-${i}`}>
                            <td style={{ textAlign: "center" }}>{i + 1}</td>
                            {/* <td>
                            <input
                              type="checkbox"
                              checked={checkedResources.includes(
                                `${category}-${res.title}`
                              )}
                              onChange={() =>
                                handleCheckboxClick(`${category}-${res.title}`)
                              }
                              className={styles.checkbox}
                            />
                          </td> */}
                            <td>{res.title}</td>
                            <td>
                              <a
                                href={res.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Visit →
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Special Playlist Section with FAQ dropdowns
const PlaylistSection = ({
  title,
  paragraph,
  points,
  resources,
  checkedResources,
  setPendingResource,
  setModalOpen,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [openPlaylists, setOpenPlaylists] = useState({});

  // Toggle FAQ dropdown for playlists
  const togglePlaylist = (playlistTitle) => {
    setOpenPlaylists((prev) => ({
      ...prev,
      [playlistTitle]: !prev[playlistTitle],
    }));
  };

  // Calculate progress for playlists - COMMENTED OUT
  // const totalVideos =
  //   resources?.reduce(
  //     (total, playlist) => total + (playlist.videos?.length || 0),
  //     0
  //   ) || 0;

  // const completedCount = checkedResources.filter((r) =>
  //   resources?.some((playlist) =>
  //     playlist.videos?.some((video) => r.includes(video.title))
  //   )
  // ).length;

  // const progressPercent =
  //   totalVideos > 0 ? (completedCount / totalVideos) * 100 : 0;

  const handleCheckboxClick = (res) => {
    setPendingResource(res);
    setModalOpen(true);
  };

  const visiblePoints = showAll ? points : points?.slice(0, 3) || [];

  return (
    <div className={styles.section}>
      {/* Section Header with Completed Count - COMMENTED OUT */}
      {/* <div className={styles.sectionHeader}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <h3 className={styles.sectionTitle}>{title}</h3>
          <span className={styles.completedBadge}>
            Completed {completedCount}/{totalVideos}
          </span>
        </div>
      </div> */}

      {/* Simplified Section Header without completed badge */}
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>{title}</h3>
      </div>

      <p className={styles.sectionParagraph}>{paragraph}</p>

      {points && points.length > 0 && (
        <>
          <h2
            style={{
              textAlign: "left",
              fontSize: "18px",
              marginBottom: "6px",
            }}
          >
            Key Features:
          </h2>

          <ul className={styles.points}>
            {visiblePoints.map((pt, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center" }}>
                <Dot
                  size={26}
                  style={{ marginRight: "6px", color: "#6A737D" }}
                />
                {pt}
              </li>
            ))}
          </ul>

          {points.length > 3 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className={styles.readMoreBtn}
            >
              {showAll ? "Read Less" : "Read More"}
            </button>
          )}
        </>
      )}

      {/* Global Progress - COMMENTED OUT */}
      {/* <div className={styles.globalProgressWrapper}>
        <span className={styles.globalProgressText}>
          {title} Progress: {`${progressPercent.toFixed(0)}%`}
        </span>
        <div className={styles.globalProgressBar}>
          <div
            className={styles.globalProgressFill}
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div> */}

      {/* Playlist Resources with FAQ dropdowns */}
      {resources && (
        <div className={styles.tableWrapper}>
          {resources.map((playlist, idx) => (
            <div key={idx} className={styles.categoryBlock}>
              {/* FAQ-style dropdown header for playlist */}
              <div
                className={styles.faqHeader}
                onClick={() => togglePlaylist(playlist.title)}
              >
                <h4 className={styles.categoryTitle}>
                  {playlist.title} {playlist.type && `(${playlist.type})`}
                </h4>
                <div className={styles.faqToggle}>
                  {openPlaylists[playlist.title] ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>
              </div>

              {/* Dropdown content */}
              {openPlaylists[playlist.title] && playlist.videos && (
                <table className={styles.resourceTable}>
                  <thead>
                    <tr>
                      <th style={{ width: "60px" }}>Sr. No.</th>
                      {/* <th style={{ width: "100px" }}>Check</th> */}
                      <th>Video Title</th>
                      <th style={{ width: "100px" }}>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {playlist.videos.map((video, i) => (
                      <tr key={`${playlist.title}-${i}`}>
                        <td style={{ textAlign: "center" }}>{i + 1}</td>
                        {/* <td>
                          <input
                            type="checkbox"
                            checked={checkedResources.includes(
                              `${playlist.title}-${video.title}`
                            )}
                            onChange={() =>
                              handleCheckboxClick(
                                `${playlist.title}-${video.title}`
                              )
                            }
                            className={styles.checkbox}
                          />
                        </td> */}
                        <td>{video.title}</td>
                        <td>
                          <a href={video.link} target="_blank" rel="noreferrer">
                            Watch →
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Titles = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingResource, setPendingResource] = useState(null);
  const [checkedResources, setCheckedResources] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [currentStepData, setCurrentStepData] = useState(null);

  const { id, step } = useParams();

  useEffect(() => {
    // Find the roadmap by ID and step
    const roadmap = data.find((item) => item.id === parseInt(id));
    if (roadmap && roadmap.steps && roadmap.steps[step]) {
      setCurrentStepData(roadmap.steps[step]);
    }
  }, [id, step]);

  useEffect(() => {
    // Set active tab to first available tab with data
    if (currentStepData) {
      const availableTabs = getAvailableTabs();
      if (availableTabs.length > 0 && !activeTab) {
        setActiveTab(availableTabs[0].key);
      }
    }
  }, [currentStepData]);

  const handleConfirm = () => {
    if (pendingResource) {
      setCheckedResources((prev) => [...prev, pendingResource]);
      confetti({
        particleCount: 100,
        spread: 160,
        origin: { y: 0.6 },
      });
    }
    setPendingResource(null);
    setModalOpen(false);
  };

  const handleCancel = () => {
    setPendingResource(null);
    setModalOpen(false);
  };

  // Helper function to check if a tab has data
  const hasTabData = (tabKey) => {
    if (!currentStepData) return false;

    switch (tabKey) {
      case "Documentation":
        return (
          currentStepData.documentation?.resources ||
          currentStepData.documentation?.paragraph ||
          currentStepData.documentation?.points
        );
      case "Crash Courses":
        return (
          currentStepData.crashCourses?.resources ||
          currentStepData.crashCourses?.paragraph ||
          currentStepData.crashCourses?.points
        );
      case "Playlists":
        return (
          currentStepData.playlists?.resources ||
          currentStepData.playlists?.paragraph ||
          currentStepData.playlists?.points
        );
      case "Projects":
        return (
          currentStepData.projects?.resources ||
          currentStepData.projects?.paragraph ||
          currentStepData.projects?.points
        );
      default:
        return false;
    }
  };

  // Get only tabs that have data
  const getAvailableTabs = () => {
    const allTabs = [
      {
        key: "Documentation",
        icon: Book,
        title: "Documentation",
        paragraph: currentStepData?.documentation?.paragraph,
        points: currentStepData?.documentation?.points,
        resources: currentStepData?.documentation?.resources,
      },
      {
        key: "Crash Courses",
        icon: Video,
        title: "Crash Courses",
        paragraph: currentStepData?.crashCourses?.paragraph,
        points: currentStepData?.crashCourses?.points,
        resources: currentStepData?.crashCourses?.resources,
      },
      {
        key: "Playlists",
        icon: PlayCircle,
        title: "Playlists",
        paragraph: currentStepData?.playlists?.paragraph,
        points: currentStepData?.playlists?.points,
        resources: currentStepData?.playlists?.resources,
      },
      {
        key: "Projects",
        icon: Code,
        title: "Projects",
        paragraph: currentStepData?.projects?.paragraph,
        points: currentStepData?.projects?.points,
        resources: currentStepData?.projects?.resources,
      },
    ];

    return allTabs.filter((tab) => hasTabData(tab.key));
  };

  if (!currentStepData) {
    return (
      <div className={styles.container}>
        <h2 className={styles.mainHeading}>Loading...</h2>
        <p>
          Step data not found for ID: {id}, Step: {step}
        </p>
      </div>
    );
  }

  const availableTabs = getAvailableTabs();

  return (
    <>
      <div style={{ backgroundColor: "rgb(245, 247, 255)" }}>
        <div className={styles.container}>
          {/* Title Section */}
          <h2 className={styles.mainHeading}>{currentStepData.name}</h2>

          {/* Course Description */}
          <p className={styles.courseDescription}>
            {currentStepData.description}
          </p>

          {/* Tabs - Only show tabs with data */}
          {availableTabs.length > 0 && (
            <div className={styles.tabs}>
              {availableTabs.map((tab) => (
                <button
                  key={tab.key}
                  className={`${styles.tabButton} ${
                    activeTab === tab.key ? styles.activeTab : ""
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  <tab.icon className={styles.tabIcon} />
                  {tab.key}
                </button>
              ))}
            </div>
          )}

          {/* Active Tab Content */}
          <div className={styles.tabContent}>
            {availableTabs
              .filter((tab) => tab.key === activeTab)
              .map((tab) =>
                tab.key === "Playlists" ? (
                  <PlaylistSection
                    key={tab.key}
                    icon={tab.icon}
                    title={tab.title}
                    paragraph={tab.paragraph}
                    points={tab.points}
                    resources={tab.resources}
                    checkedResources={checkedResources}
                    setPendingResource={setPendingResource}
                    setModalOpen={setModalOpen}
                  />
                ) : (
                  <Section
                    key={tab.key}
                    icon={tab.icon}
                    title={tab.title}
                    paragraph={tab.paragraph}
                    points={tab.points}
                    resources={tab.resources}
                    checkedResources={checkedResources}
                    setPendingResource={setPendingResource}
                    setModalOpen={setModalOpen}
                  />
                )
              )}
          </div>
        </div>
      </div>

      {/* Modal - COMMENTED OUT since checkboxes are removed */}
      {/* <Modal
        isOpen={modalOpen}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        title="Confirm Completion"
        message={`Mark "${pendingResource}" as completed?`}
      /> */}
    </>
  );
};

export default Titles;
