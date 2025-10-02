// // // import React, { useState, useEffect, useRef } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import confetti from "canvas-confetti";
// // // import resources from "../pages/data/tilestemp.json";
// // // import "./css/Tiles.css";

// // // const ConfirmationModal = ({ isOpen, onConfirm, onCancel, message }) => {
// // //   const yesButtonRef = useRef(null);
// // //   const noButtonRef = useRef(null);
// // //   const modalRef = useRef(null);
// // //   const [focusedButton, setFocusedButton] = useState("yes");

// // //   useEffect(() => {
// // //     if (isOpen) {
// // //       modalRef.current.focus();
// // //       setFocusedButton("yes");
// // //     }
// // //   }, [isOpen]);

// // //   useEffect(() => {
// // //     if (focusedButton === "yes" && yesButtonRef.current) {
// // //       yesButtonRef.current.focus();
// // //     } else if (noButtonRef.current) {
// // //       noButtonRef.current.focus();
// // //     }
// // //   }, [focusedButton]);

// // //   const handleKeyDown = (e) => {
// // //     switch (e.key) {
// // //       case "ArrowLeft":
// // //         e.preventDefault();
// // //         setFocusedButton("no");
// // //         break;
// // //       case "ArrowRight":
// // //         e.preventDefault();
// // //         setFocusedButton("yes");
// // //         break;
// // //       case "Enter":
// // //         e.preventDefault();
// // //         if (focusedButton === "yes") {
// // //           onConfirm();
// // //         } else {
// // //           onCancel();
// // //         }
// // //         break;
// // //       case "Escape":
// // //         e.preventDefault();
// // //         onCancel();
// // //         break;
// // //       case "Tab":
// // //         e.preventDefault();
// // //         setFocusedButton((prev) => (prev === "yes" ? "no" : "yes"));
// // //         break;
// // //       default:
// // //         break;
// // //     }
// // //   };

// // //   if (!isOpen) return null;

// // //   return (
// // //     <div
// // //       className="modal-overlay"
// // //       ref={modalRef}
// // //       tabIndex="-1"
// // //       onKeyDown={handleKeyDown}
// // //     >
// // //       <div
// // //         style={{
// // //           position: "fixed",
// // //           top: "50%",
// // //           left: "50%",
// // //           transform: "translate(-50%, -50%)",
// // //           zIndex: 1000,
// // //           width: "100%",
// // //           maxWidth: "400px",
// // //           padding: "0 20px",
// // //         }}
// // //       >
// // //         <div
// // //           style={{
// // //             backgroundColor: "white",
// // //             padding: "25px 20px 20px",
// // //             borderRadius: "8px",
// // //             boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
// // //             position: "relative",
// // //             display: "flex",
// // //             flexDirection: "column",
// // //             gap: "10px",
// // //           }}
// // //         >
// // //           <button
// // //             onClick={onCancel}
// // //             style={{
// // //               background: "none",
// // //               border: "none",
// // //               fontSize: "30px",
// // //               cursor: "pointer",
// // //               color: "#666",
// // //               width: "30px",
// // //               height: "30px",
// // //               display: "flex",
// // //               alignItems: "center",
// // //               justifyContent: "center",
// // //               borderRadius: "50%",
// // //               transition: "all 0.2s",
// // //               alignSelf: "flex-end",
// // //             }}
// // //             onMouseEnter={(e) => (e.target.style.backgroundColor = "#f5f5f5")}
// // //             onMouseLeave={(e) =>
// // //               (e.target.style.backgroundColor = "transparent")
// // //             }
// // //           >
// // //             ×
// // //           </button>
// // //           <h3
// // //             style={{
// // //               marginTop: "0",
// // //               marginBottom: "20px",
// // //               fontSize: "18px",
// // //               color: "#333",
// // //             }}
// // //           >
// // //             {message || "Are you sure you've completed this resource?"}
// // //           </h3>
// // //           <div
// // //             style={{
// // //               display: "flex",
// // //               justifyContent: "flex-end",
// // //               gap: "12px",
// // //             }}
// // //           >
// // //             <button
// // //               ref={noButtonRef}
// // //               onClick={onCancel}
// // //               style={{
// // //                 padding: "8px 16px",
// // //                 backgroundColor: focusedButton === "no" ? "#e0e0e0" : "#f0f0f0",
// // //                 border: "none",
// // //                 borderRadius: "4px",
// // //                 cursor: "pointer",
// // //                 fontSize: "14px",
// // //                 fontWeight: "500",
// // //                 transition: "all 0.2s",
// // //                 outline: "none",
// // //                 boxShadow:
// // //                   focusedButton === "no" ? "0 0 0 2px #4caf50" : "none",
// // //               }}
// // //               onMouseEnter={(e) => (e.target.style.backgroundColor = "#e0e0e0")}
// // //               onMouseLeave={(e) =>
// // //                 (e.target.style.backgroundColor =
// // //                   focusedButton === "no" ? "#e0e0e0" : "#f0f0f0")
// // //               }
// // //             >
// // //               No
// // //             </button>
// // //             <button
// // //               ref={yesButtonRef}
// // //               onClick={onConfirm}
// // //               style={{
// // //                 padding: "8px 16px",
// // //                 backgroundColor:
// // //                   focusedButton === "yes" ? "#3d8b40" : "#4caf50",
// // //                 color: "white",
// // //                 border: "none",
// // //                 borderRadius: "4px",
// // //                 cursor: "pointer",
// // //                 fontSize: "14px",
// // //                 fontWeight: "500",
// // //                 transition: "all 0.2s",
// // //                 outline: "none",
// // //                 boxShadow: focusedButton === "yes" ? "0 0 0 2px white" : "none",
// // //               }}
// // //               onMouseEnter={(e) => (e.target.style.backgroundColor = "#3d8b40")}
// // //               onMouseLeave={(e) =>
// // //                 (e.target.style.backgroundColor =
// // //                   focusedButton === "yes" ? "#3d8b40" : "#4caf50")
// // //               }
// // //             >
// // //               Yes
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const Tiles = () => {
// // //   const navigate = useNavigate();
// // //   const [checkedResources, setCheckedResources] = useState([]);
// // //   const [expandedPlaylist, setExpandedPlaylist] = useState(null);
// // //   const [trackedPlaylists, setTrackedPlaylists] = useState(
// // //     resources[0].object.playlists?.resources
// // //       ?.map((playlist, index) =>
// // //         playlist.type === "non-optional" ? index : null
// // //       )
// // //       .filter((index) => index !== null) || []
// // //   );
// // //   const [modalState, setModalState] = useState({
// // //     isOpen: false,
// // //     resourceId: null,
// // //     action: null,
// // //   });

// // //   // Check if projects have categories or simple array structure
// // //   const hasProjectCategories =
// // //     resources[0].object.projects?.resources &&
// // //     !Array.isArray(resources[0].object.projects.resources);

// // //   const getAvailableTabs = () => {
// // //     const availableTabs = [];

// // //     if (resources[0].object.documentation?.resources?.length > 0) {
// // //       availableTabs.push({
// // //         id: "documentation",
// // //         label: "Documentation",
// // //         tabNumber: "1",
// // //       });
// // //     }

// // //     if (resources[0].object.crashCourses?.resources?.length > 0) {
// // //       availableTabs.push({
// // //         id: "crashCourses",
// // //         label: "Crash Courses",
// // //         tabNumber: "2",
// // //       });
// // //     }

// // //     if (resources[0].object.playlists?.resources?.length > 0) {
// // //       availableTabs.push({
// // //         id: "playlists",
// // //         label: "Playlists",
// // //         tabNumber: "3",
// // //       });
// // //     }

// // //     if (
// // //       (hasProjectCategories &&
// // //         (resources[0].object.projects.resources.basic?.length > 0 ||
// // //           resources[0].object.projects.resources.intermediate?.length > 0 ||
// // //           resources[0].object.projects.resources.advanced?.length > 0)) ||
// // //       (!hasProjectCategories &&
// // //         resources[0].object.projects?.resources?.length > 0)
// // //     ) {
// // //       availableTabs.push({ id: "projects", label: "Projects", tabNumber: "4" });
// // //     }

// // //     return availableTabs;
// // //   };

// // //   const availableTabs = getAvailableTabs();
// // //   const [activeTab, setActiveTab] = useState(
// // //     availableTabs.length > 0 ? availableTabs[0].id : ""
// // //   );

// // //   const togglePlaylist = (playlistIndex) => {
// // //     setExpandedPlaylist((prev) =>
// // //       prev === playlistIndex ? null : playlistIndex
// // //     );
// // //   };

// // //   const toggleTrackedPlaylist = (playlistIndex) => {
// // //     setTrackedPlaylists((prev) => {
// // //       if (prev.includes(playlistIndex)) {
// // //         return prev.filter((index) => index !== playlistIndex);
// // //       } else {
// // //         return [...prev, playlistIndex];
// // //       }
// // //     });
// // //   };

// // //   const handleCheckboxChange = (id) => {
// // //     const isChecked = checkedResources.includes(id);

// // //     if (isChecked) {
// // //       setCheckedResources((prevChecked) =>
// // //         prevChecked.filter((resourceId) => resourceId !== id)
// // //       );
// // //     } else {
// // //       setModalState({
// // //         isOpen: true,
// // //         resourceId: id,
// // //         action: "check",
// // //       });
// // //     }
// // //   };

// // //   const handleConfirm = () => {
// // //     if (modalState.action === "check") {
// // //       setCheckedResources((prevChecked) => [
// // //         ...prevChecked,
// // //         modalState.resourceId,
// // //       ]);
// // //       launchConfetti();
// // //     }
// // //     setModalState({ isOpen: false, resourceId: null, action: null });
// // //   };

// // //   const handleCancel = () => {
// // //     setModalState({ isOpen: false, resourceId: null, action: null });
// // //   };

// // //   const launchConfetti = () => {
// // //     confetti({
// // //       particleCount: 100,
// // //       spread: 160,
// // //       origin: { y: 0.6 },
// // //     });
// // //   };

// // //   const calculateProgress = (category) => {
// // //     let total = 0;
// // //     let checked = 0;

// // //     switch (category) {
// // //       case "documentation":
// // //         total = resources[0].object.documentation?.resources?.length || 0;
// // //         checked = checkedResources.filter((id) => id.startsWith("doc-")).length;
// // //         break;

// // //       case "crashCourses":
// // //         total = resources[0].object.crashCourses?.resources?.length || 0;
// // //         checked = checkedResources.filter((id) =>
// // //           id.startsWith("course-")
// // //         ).length;
// // //         break;

// // //       case "playlists":
// // //         resources[0].object.playlists?.resources?.forEach((playlist, index) => {
// // //           if (trackedPlaylists.includes(index)) {
// // //             total += playlist.videos.length;
// // //             checked += playlist.videos.filter((_, videoIndex) =>
// // //               checkedResources.includes(`video-${index}-${videoIndex}`)
// // //             ).length;
// // //           }
// // //         });
// // //         break;

// // //       case "projects":
// // //         if (hasProjectCategories) {
// // //           total =
// // //             (resources[0].object.projects.resources.basic?.length || 0) +
// // //             (resources[0].object.projects.resources.intermediate?.length || 0) +
// // //             (resources[0].object.projects.resources.advanced?.length || 0);
// // //           checked =
// // //             checkedResources.filter((id) => id.startsWith("project-basic-"))
// // //               .length +
// // //             checkedResources.filter((id) =>
// // //               id.startsWith("project-intermediate-")
// // //             ).length +
// // //             checkedResources.filter((id) => id.startsWith("project-advanced-"))
// // //               .length;
// // //         } else {
// // //           total = resources[0].object.projects?.resources?.length || 0;
// // //           checked = checkedResources.filter((id) =>
// // //             id.startsWith("project-")
// // //           ).length;
// // //         }
// // //         break;

// // //       case "projects-basic":
// // //         total = resources[0].object.projects.resources.basic?.length || 0;
// // //         checked = checkedResources.filter((id) =>
// // //           id.startsWith("project-basic-")
// // //         ).length;
// // //         break;

// // //       case "projects-intermediate":
// // //         total =
// // //           resources[0].object.projects.resources.intermediate?.length || 0;
// // //         checked = checkedResources.filter((id) =>
// // //           id.startsWith("project-intermediate-")
// // //         ).length;
// // //         break;

// // //       case "projects-advanced":
// // //         total = resources[0].object.projects.resources.advanced?.length || 0;
// // //         checked = checkedResources.filter((id) =>
// // //           id.startsWith("project-advanced-")
// // //         ).length;
// // //         break;

// // //       default:
// // //         break;
// // //     }

// // //     return total > 0 ? (checked / total) * 100 : 0;
// // //   };

// // //   const calculateOverallProgress = () => {
// // //     // Get which tabs are actually available
// // //     const availableTabs = getAvailableTabs();
// // //     const tabCount = availableTabs.length;

// // //     // Calculate completion for each possible section
// // //     const docTotal = resources[0].object.documentation?.resources?.length || 0;
// // //     const docChecked = checkedResources.filter((id) =>
// // //       id.startsWith("doc-")
// // //     ).length;
// // //     const docProgress = docTotal > 0 ? (docChecked / docTotal) * 100 : 0;

// // //     const courseTotal =
// // //       resources[0].object.crashCourses?.resources?.length || 0;
// // //     const courseChecked = checkedResources.filter((id) =>
// // //       id.startsWith("course-")
// // //     ).length;
// // //     const courseProgress =
// // //       courseTotal > 0 ? (courseChecked / courseTotal) * 100 : 0;

// // //     let playlistTotal = 0;
// // //     let playlistChecked = 0;
// // //     resources[0].object.playlists?.resources?.forEach((playlist, index) => {
// // //       if (trackedPlaylists.includes(index)) {
// // //         playlistTotal += playlist.videos.length;
// // //         playlistChecked += playlist.videos.filter((_, videoIndex) =>
// // //           checkedResources.includes(`video-${index}-${videoIndex}`)
// // //         ).length;
// // //       }
// // //     });
// // //     const playlistProgress =
// // //       playlistTotal > 0 ? (playlistChecked / playlistTotal) * 100 : 0;

// // //     let projectTotal = 0;
// // //     let projectChecked = 0;
// // //     if (hasProjectCategories) {
// // //       projectTotal =
// // //         (resources[0].object.projects.resources.basic?.length || 0) +
// // //         (resources[0].object.projects.resources.intermediate?.length || 0) +
// // //         (resources[0].object.projects.resources.advanced?.length || 0);
// // //       projectChecked =
// // //         checkedResources.filter((id) => id.startsWith("project-basic-"))
// // //           .length +
// // //         checkedResources.filter((id) => id.startsWith("project-intermediate-"))
// // //           .length +
// // //         checkedResources.filter((id) => id.startsWith("project-advanced-"))
// // //           .length;
// // //     } else {
// // //       projectTotal = resources[0].object.projects?.resources?.length || 0;
// // //       projectChecked = checkedResources.filter((id) =>
// // //         id.startsWith("project-")
// // //       ).length;
// // //     }
// // //     const projectProgress =
// // //       projectTotal > 0 ? (projectChecked / projectTotal) * 100 : 0;

// // //     // Determine weights based on available tabs
// // //     const weights = {};
// // //     if (tabCount === 4) {
// // //       // Original weights when all tabs are present
// // //       weights.playlists = 0.4;
// // //       weights.documentation = 0.25;
// // //       weights.projects = 0.25;
// // //       weights.crashCourses = 0.1;
// // //     } else {
// // //       // Equal distribution for fewer tabs
// // //       const equalWeight = 1 / tabCount;
// // //       availableTabs.forEach((tab) => {
// // //         weights[tab.id] = equalWeight;
// // //       });
// // //     }

// // //     // Calculate weighted sum
// // //     let weightedSum = 0;
// // //     if (weights.playlists) weightedSum += playlistProgress * weights.playlists;
// // //     if (weights.documentation)
// // //       weightedSum += docProgress * weights.documentation;
// // //     if (weights.projects) weightedSum += projectProgress * weights.projects;
// // //     if (weights.crashCourses)
// // //       weightedSum += courseProgress * weights.crashCourses;

// // //     return weightedSum;
// // //   };

// // //   const handleTabChange = (tab) => {
// // //     setActiveTab(tab);
// // //   };

// // //   const renderProgressBar = (category, label) => {
// // //     const progress = calculateProgress(category);
// // //     return (
// // //       <div style={{ marginBottom: "15px" }}>
// // //         <div>
// // //           <div className="progress-bar-white">
// // //             <div
// // //               style={{
// // //                 height: "100%",
// // //                 width: `${progress}%`,
// // //                 backgroundColor: "#4caf50",
// // //                 borderRadius: "5px",
// // //               }}
// // //             />
// // //           </div>
// // //         </div>
// // //         <div className="progress-bar-percentage">
// // //           {label}: {Math.round(progress)}%
// // //         </div>
// // //       </div>
// // //     );
// // //   };

// // //   const ResourceTable = ({ items, resourcePrefix, category }) => {
// // //     return (
// // //       <table className="view-resources-table">
// // //         <thead>
// // //           <tr>
// // //             <th>Done</th>
// // //             <th>Sr. No.</th>
// // //             <th>Name</th>
// // //             <th>Link</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {items.map((item, index) => {
// // //             const resourceId = `${resourcePrefix}-${index}`;
// // //             return (
// // //               <tr key={index}>
// // //                 <td>
// // //                   <input
// // //                     type="checkbox"
// // //                     checked={checkedResources.includes(resourceId)}
// // //                     onChange={() => handleCheckboxChange(resourceId)}
// // //                     style={{
// // //                       transform: "scale(1.5)",
// // //                       cursor: "pointer",
// // //                     }}
// // //                   />
// // //                 </td>
// // //                 <td>{index + 1}</td>
// // //                 <td>{item.title}</td>
// // //                 <td>
// // //                   <a
// // //                     href={item.link}
// // //                     target="_blank"
// // //                     rel="noopener noreferrer"
// // //                     style={{
// // //                       color: "blue",
// // //                       textDecoration: "underline",
// // //                     }}
// // //                   >
// // //                     Visit Link
// // //                   </a>
// // //                 </td>
// // //               </tr>
// // //             );
// // //           })}
// // //         </tbody>
// // //       </table>
// // //     );
// // //   };

// // //   const PlaylistTrackingSelector = () => {
// // //     const [showTracking, setShowTracking] = useState(false);

// // //     return (
// // //       <div
// // //         className="playlist-tracking-selector"
// // //         style={{
// // //           backgroundColor: "#f8f9fa",
// // //           padding: "15px",
// // //           borderRadius: "8px",
// // //           marginBottom: "20px",
// // //           border: "1px solid #dee2e6",
// // //           transition: "all 0.3s ease",
// // //         }}
// // //       >
// // //         <div
// // //           onClick={() => setShowTracking(!showTracking)}
// // //           style={{
// // //             display: "flex",
// // //             justifyContent: "space-between",
// // //             alignItems: "center",
// // //             cursor: "pointer",
// // //           }}
// // //         >
// // //           <h4 style={{ margin: 0 }}>Select Playlists to Track Progress</h4>
// // //           <span
// // //             style={{
// // //               fontSize: "24px",
// // //               fontWeight: "bold",
// // //               transform: showTracking ? "rotate(0deg)" : "rotate(90deg)",
// // //               transition: "transform 0.2s ease",
// // //             }}
// // //           >
// // //             {showTracking ? "−" : "+"}
// // //           </span>
// // //         </div>

// // //         {showTracking && (
// // //           <div
// // //             style={{
// // //               marginTop: "10px",
// // //               padding: "10px",
// // //               borderTop: "1px rgb(222, 226, 230) solid",
// // //             }}
// // //           >
// // //             <div
// // //               style={{
// // //                 display: "flex",
// // //                 flexWrap: "wrap",
// // //                 gap: "15px",
// // //                 flexDirection: "column",
// // //               }}
// // //             >
// // //               {resources[0].object.playlists.resources.map(
// // //                 (playlist, index) => (
// // //                   <div
// // //                     key={index}
// // //                     style={{
// // //                       display: "flex",
// // //                       alignItems: "center",
// // //                       justifyContent: "space-between",
// // //                     }}
// // //                   >
// // //                     <div className="playlist-tracking-main">
// // //                       <input
// // //                         type="checkbox"
// // //                         id={`track-playlist-${index}`}
// // //                         checked={trackedPlaylists.includes(index)}
// // //                         onChange={() => toggleTrackedPlaylist(index)}
// // //                         style={{
// // //                           transform: "scale(1.3)",
// // //                           marginRight: "8px",
// // //                           cursor: "pointer",
// // //                         }}
// // //                       />
// // //                       <label
// // //                         htmlFor={`track-playlist-${index}`}
// // //                         style={{ cursor: "pointer", fontWeight: "500" }}
// // //                       >
// // //                         {playlist.title} ({playlist.type})
// // //                       </label>
// // //                     </div>
// // //                   </div>
// // //                 )
// // //               )}
// // //             </div>
// // //             <div
// // //               style={{
// // //                 marginTop: "10px",
// // //                 fontStyle: "italic",
// // //                 color: "#6c757d",
// // //               }}
// // //             >
// // //               Currently tracking: {trackedPlaylists.length} playlists
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     );
// // //   };

// // //   const ResourceDescription = ({ paragraph, pointsHeading, points }) => {
// // //     const [isExpanded, setIsExpanded] = useState(false);
// // //     const [needsReadMore, setNeedsReadMore] = useState(false);
// // //     const containerRef = useRef(null);

// // //     useEffect(() => {
// // //       if (containerRef.current) {
// // //         const paragraphElement =
// // //           containerRef.current.querySelector(".icon-paragraph");
// // //         if (paragraphElement) {
// // //           const lineHeight = parseInt(
// // //             getComputedStyle(paragraphElement).lineHeight
// // //           );
// // //           const maxHeight = lineHeight * 2;
// // //           setNeedsReadMore(paragraphElement.scrollHeight > maxHeight);
// // //         }
// // //       }
// // //     }, [paragraph, pointsHeading, points]);

// // //     return (
// // //       <div ref={containerRef}>
// // //         <div
// // //           className="icon-paragraph"
// // //           style={{
// // //             overflow: "hidden",
// // //             display: "-webkit-box",
// // //             WebkitLineClamp: isExpanded ? "unset" : 2,
// // //             WebkitBoxOrient: "vertical",
// // //             textOverflow: "ellipsis",
// // //             whiteSpace: "normal",
// // //           }}
// // //         >
// // //           {paragraph}
// // //         </div>

// // //         <div style={{ display: isExpanded ? "block" : "none" }}>
// // //           <h5 className="career-requirements">{pointsHeading}</h5>
// // //           <ul>
// // //             {points.map((point, index) => (
// // //               <li key={index} className="icon-paragraph">
// // //                 {point}
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </div>

// // //         {needsReadMore && (
// // //           <button
// // //             onClick={() => setIsExpanded(!isExpanded)}
// // //             style={{
// // //               background: "none",
// // //               border: "none",
// // //               color: "blue",
// // //               cursor: "pointer",
// // //               padding: "5px 0",
// // //               fontSize: "14px",
// // //               fontWeight: "500",
// // //               marginBottom: "15px",
// // //             }}
// // //           >
// // //             {isExpanded ? "Read Less" : "Read More"}
// // //           </button>
// // //         )}
// // //       </div>
// // //     );
// // //   };

// // //   const PlaylistAccordion = ({ playlist, index }) => {
// // //     const isExpanded = expandedPlaylist === index;
// // //     const isTracked = trackedPlaylists.includes(index);
// // //     const isSinglePlaylist =
// // //       resources[0].object.playlists.resources.length === 1;
// // //     const playlistRef = useRef(null);

// // //     useEffect(() => {
// // //       if (isExpanded && playlistRef.current) {
// // //         const navbarHeight = 80;
// // //         const elementPosition = playlistRef.current.getBoundingClientRect().top;
// // //         const offsetPosition =
// // //           elementPosition + window.pageYOffset - navbarHeight;

// // //         window.scrollTo({
// // //           top: offsetPosition,
// // //           behavior: "smooth",
// // //         });
// // //       }
// // //     }, [isExpanded]);

// // //     if (isSinglePlaylist) {
// // //       return (
// // //         <div
// // //           className="playlist-accordion"
// // //           style={{
// // //             marginBottom: "20px",
// // //             border: "1px solid #e0e0e0",
// // //             borderRadius: "8px",
// // //             overflow: "hidden",
// // //           }}
// // //         >
// // //           <div
// // //             className="playlist-header"
// // //             style={{
// // //               padding: "15px",
// // //               backgroundColor: "#f8f8f8",
// // //             }}
// // //           >
// // //             <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
// // //               <h3 className="progress-bar-percentage" style={{ margin: 0 }}>
// // //                 {playlist.title} ({playlist.type})
// // //               </h3>
// // //               {isTracked && (
// // //                 <span
// // //                   style={{
// // //                     fontSize: "0.8em",
// // //                     backgroundColor: "#4caf50",
// // //                     color: "white",
// // //                     padding: "2px 8px",
// // //                     borderRadius: "10px",
// // //                   }}
// // //                 >
// // //                   Tracking
// // //                 </span>
// // //               )}
// // //             </div>
// // //           </div>
// // //           <div
// // //             className="playlist-content"
// // //             style={{
// // //               padding: "15px",
// // //               backgroundColor: "#fff",
// // //             }}
// // //           >
// // //             <ResourceTable
// // //               items={playlist.videos}
// // //               resourcePrefix={`video-${index}`}
// // //               category="playlists"
// // //             />
// // //           </div>
// // //         </div>
// // //       );
// // //     }

// // //     return (
// // //       <div
// // //         ref={playlistRef}
// // //         className="playlist-accordion"
// // //         style={{
// // //           marginBottom: "20px",
// // //           border: "1px solid #e0e0e0",
// // //           borderRadius: "8px",
// // //           overflow: "hidden",
// // //           transition: "all 0.3s ease",
// // //         }}
// // //       >
// // //         <div
// // //           className="playlist-header"
// // //           style={{
// // //             display: "flex",
// // //             justifyContent: "space-between",
// // //             alignItems: "center",
// // //             padding: "15px",
// // //             backgroundColor: isExpanded ? "#f0f0f0" : "#f8f8f8",
// // //             cursor: "pointer",
// // //             transition: "background-color 0.2s ease",
// // //           }}
// // //           onClick={() => togglePlaylist(index)}
// // //         >
// // //           <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
// // //             <h3
// // //               className="progress-bar-percentage"
// // //               style={{
// // //                 margin: 0,
// // //                 color: isExpanded ? "#2c3e50" : "#34495e",
// // //               }}
// // //             >
// // //               {playlist.title} ({playlist.type})
// // //             </h3>
// // //             {isTracked && (
// // //               <span
// // //                 style={{
// // //                   fontSize: "0.8em",
// // //                   backgroundColor: "#4caf50",
// // //                   color: "white",
// // //                   padding: "2px 8px",
// // //                   borderRadius: "10px",
// // //                 }}
// // //               >
// // //                 Tracking
// // //               </span>
// // //             )}
// // //           </div>
// // //           <span
// // //             style={{
// // //               fontSize: "20px",
// // //               transition: "transform 0.2s ease",
// // //               transform: isExpanded ? "rotate(0deg)" : "rotate(90deg)",
// // //             }}
// // //           >
// // //             {isExpanded ? "−" : "+"}
// // //           </span>
// // //         </div>

// // //         {isExpanded && (
// // //           <div
// // //             className="playlist-content"
// // //             style={{
// // //               padding: "15px",
// // //               backgroundColor: "#fff",
// // //               borderTop: "1px solid #e0e0e0",
// // //             }}
// // //           >
// // //             <ResourceTable
// // //               items={playlist.videos}
// // //               resourcePrefix={`video-${index}`}
// // //               category="playlists"
// // //             />
// // //           </div>
// // //         )}
// // //       </div>
// // //     );
// // //   };

// // //   const TabButton = ({ tab }) => (
// // //     <div
// // //       className={`tab-item tab-item-tile tab-item-1 tab-item-1-tile ${
// // //         activeTab === tab.id ? "active-tab" : ""
// // //       }`}
// // //       onClick={() => handleTabChange(tab.id)}
// // //     >
// // //       {tab.label}
// // //     </div>
// // //   );

// // //   if (availableTabs.length === 0) {
// // //     return (
// // //       <div className="detailcard-container detailcard-container-tiles">
// // //         <div className="apply-form-container">
// // //           <h2 className="heading-secondary marginbottom">
// // //             {resources[0].name}
// // //           </h2>
// // //           <p className="paragraph-primary">
// // //             No resources available for this course.
// // //           </p>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="detailcard-container detailcard-container-tiles">
// // //       <ConfirmationModal
// // //         isOpen={modalState.isOpen}
// // //         onConfirm={handleConfirm}
// // //         onCancel={handleCancel}
// // //         message="Are you sure you've completed this resource?"
// // //       />

// // //       <div className="apply-form-container">
// // //         <div
// // //           style={{
// // //             display: "flex",
// // //             flexDirection: "row",
// // //             alignItems: "center",
// // //             justifyContent: "space-between",
// // //             marginBottom: "12px",
// // //           }}
// // //         >
// // //           <h2 className="heading-secondary marginbottom">
// // //             {resources[0].name}
// // //           </h2>

// // //           <div
// // //             style={{
// // //               position: "relative",
// // //               width: "50px",
// // //               height: "50px",
// // //             }}
// // //           >
// // //             <svg width="50" height="50">
// // //               <circle
// // //                 cx="25"
// // //                 cy="25"
// // //                 r="20"
// // //                 stroke="#e6e6e6"
// // //                 strokeWidth="5"
// // //                 fill="none"
// // //               />
// // //               <circle
// // //                 cx="25"
// // //                 cy="25"
// // //                 r="20"
// // //                 stroke="#4caf50"
// // //                 strokeWidth="5"
// // //                 fill="none"
// // //                 strokeDasharray={2 * Math.PI * 20}
// // //                 strokeDashoffset={
// // //                   2 * Math.PI * 20 * (1 - calculateOverallProgress() / 100)
// // //                 }
// // //                 transform="rotate(-90 25 25)"
// // //                 strokeLinecap="round"
// // //               />
// // //               <text
// // //                 x="50%"
// // //                 y="50%"
// // //                 dominantBaseline="middle"
// // //                 textAnchor="middle"
// // //                 fontSize="14"
// // //                 fill="#333"
// // //               >
// // //                 {Math.round(calculateOverallProgress())}%
// // //               </text>
// // //             </svg>
// // //           </div>
// // //         </div>

// // //         <p
// // //           className="paragraph-primary"
// // //           style={{
// // //             marginBottom: "20px",
// // //           }}
// // //         >
// // //           {resources[0].paragraph}
// // //         </p>

// // //         <div className="tab-buttons tab-buttons-tiles">
// // //           {availableTabs.map((tab) => (
// // //             <TabButton key={tab.id} tab={tab} />
// // //           ))}
// // //         </div>

// // //         <div style={{ marginTop: "20px" }}>
// // //           {activeTab === "documentation" && (
// // //             <div>
// // //               <h4 className="tab-heading-first">Documentation</h4>
// // //               <ResourceDescription
// // //                 paragraph={resources[0].object.documentation.paragraph}
// // //                 pointsHeading={
// // //                   resources[0].object.documentation["points-heading"]
// // //                 }
// // //                 points={resources[0].object.documentation.points}
// // //               />
// // //               {renderProgressBar("documentation", "Documentation Progress")}
// // //               <ResourceTable
// // //                 items={resources[0].object.documentation.resources}
// // //                 resourcePrefix="doc"
// // //                 category="documentation"
// // //               />
// // //             </div>
// // //           )}

// // //           {activeTab === "crashCourses" && (
// // //             <div>
// // //               <h4 className="tab-heading-first">Crash Courses</h4>
// // //               <ResourceDescription
// // //                 paragraph={resources[0].object.crashCourses.paragraph}
// // //                 pointsHeading={
// // //                   resources[0].object.crashCourses["points-heading"]
// // //                 }
// // //                 points={resources[0].object.crashCourses.points}
// // //               />
// // //               {renderProgressBar("crashCourses", "Crash Courses Progress")}
// // //               <ResourceTable
// // //                 items={resources[0].object.crashCourses.resources}
// // //                 resourcePrefix="course"
// // //                 category="crashCourses"
// // //               />
// // //             </div>
// // //           )}

// // //           {activeTab === "playlists" && (
// // //             <div>
// // //               <h4 className="tab-heading-first">Playlists</h4>
// // //               <ResourceDescription
// // //                 paragraph={resources[0].object.playlists.paragraph}
// // //                 pointsHeading={resources[0].object.playlists["points-heading"]}
// // //                 points={resources[0].object.playlists.points}
// // //               />
// // //               {resources[0].object.playlists.resources.length > 1 && (
// // //                 <PlaylistTrackingSelector />
// // //               )}
// // //               {renderProgressBar("playlists", "Playlist Videos Progress")}

// // //               {resources[0].object.playlists.resources.map(
// // //                 (playlist, index) => (
// // //                   <PlaylistAccordion
// // //                     key={index}
// // //                     playlist={playlist}
// // //                     index={index}
// // //                   />
// // //                 )
// // //               )}
// // //             </div>
// // //           )}

// // //           {activeTab === "projects" && (
// // //             <div>
// // //               <h4 className="tab-heading-first">Projects</h4>
// // //               <ResourceDescription
// // //                 paragraph={resources[0].object.projects.paragraph}
// // //                 pointsHeading={resources[0].object.projects["points-heading"]}
// // //                 points={resources[0].object.projects.points}
// // //               />

// // //               {hasProjectCategories ? (
// // //                 // Original structure with categories
// // //                 <>
// // //                   <div className="projects-progressor">
// // //                     <div style={{ flex: 1 }}>
// // //                       {renderProgressBar("projects-basic", "Basic Projects")}
// // //                     </div>
// // //                     <div style={{ flex: 1 }}>
// // //                       {renderProgressBar(
// // //                         "projects-intermediate",
// // //                         "Intermediate Projects"
// // //                       )}
// // //                     </div>
// // //                     <div style={{ flex: 1 }}>
// // //                       {renderProgressBar(
// // //                         "projects-advanced",
// // //                         "Advanced Projects"
// // //                       )}
// // //                     </div>
// // //                   </div>

// // //                   <h3 className="project-heading">Basic</h3>
// // //                   <ResourceTable
// // //                     items={resources[0].object.projects.resources.basic}
// // //                     resourcePrefix="project-basic"
// // //                     category="projects"
// // //                   />

// // //                   <h3 className="project-heading" style={{ marginTop: "30px" }}>
// // //                     Intermediate
// // //                   </h3>
// // //                   <ResourceTable
// // //                     items={resources[0].object.projects.resources.intermediate}
// // //                     resourcePrefix="project-intermediate"
// // //                     category="projects"
// // //                   />

// // //                   <h3 className="project-heading" style={{ marginTop: "30px" }}>
// // //                     Advanced
// // //                   </h3>
// // //                   <ResourceTable
// // //                     items={resources[0].object.projects.resources.advanced}
// // //                     resourcePrefix="project-advanced"
// // //                     category="projects"
// // //                   />
// // //                 </>
// // //               ) : (
// // //                 // Simple structure (single array)
// // //                 <>
// // //                   {renderProgressBar("projects", "Projects Progress")}
// // //                   <ResourceTable
// // //                     items={resources[0].object.projects.resources}
// // //                     resourcePrefix="project"
// // //                     category="projects"
// // //                   />
// // //                 </>
// // //               )}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Tiles;

// // import React, { useState, useEffect, useRef } from "react";
// // import { useNavigate, useParams } from "react-router-dom";
// // import confetti from "canvas-confetti";
// // import resources from "../pages/data/tilestemp.json";
// // import "./css/Tiles.css";

// // const ConfirmationModal = ({ isOpen, onConfirm, onCancel, message }) => {
// //   const yesButtonRef = useRef(null);
// //   const noButtonRef = useRef(null);
// //   const modalRef = useRef(null);
// //   const [focusedButton, setFocusedButton] = useState("yes");

// //   useEffect(() => {
// //     if (isOpen) {
// //       modalRef.current.focus();
// //       setFocusedButton("yes");
// //     }
// //   }, [isOpen]);

// //   useEffect(() => {
// //     if (focusedButton === "yes" && yesButtonRef.current) {
// //       yesButtonRef.current.focus();
// //     } else if (noButtonRef.current) {
// //       noButtonRef.current.focus();
// //     }
// //   }, [focusedButton]);

// //   const handleKeyDown = (e) => {
// //     switch (e.key) {
// //       case "ArrowLeft":
// //         e.preventDefault();
// //         setFocusedButton("no");
// //         break;
// //       case "ArrowRight":
// //         e.preventDefault();
// //         setFocusedButton("yes");
// //         break;
// //       case "Enter":
// //         e.preventDefault();
// //         if (focusedButton === "yes") {
// //           onConfirm();
// //         } else {
// //           onCancel();
// //         }
// //         break;
// //       case "Escape":
// //         e.preventDefault();
// //         onCancel();
// //         break;
// //       case "Tab":
// //         e.preventDefault();
// //         setFocusedButton((prev) => (prev === "yes" ? "no" : "yes"));
// //         break;
// //       default:
// //         break;
// //     }
// //   };

// //   if (!isOpen) return null;

// //   return (
// //     <div
// //       className="modal-overlay"
// //       ref={modalRef}
// //       tabIndex="-1"
// //       onKeyDown={handleKeyDown}
// //     >
// //       <div
// //         style={{
// //           position: "fixed",
// //           top: "50%",
// //           left: "50%",
// //           transform: "translate(-50%, -50%)",
// //           zIndex: 1000,
// //           width: "100%",
// //           maxWidth: "400px",
// //           padding: "0 20px",
// //         }}
// //       >
// //         <div
// //           style={{
// //             backgroundColor: "white",
// //             padding: "25px 20px 20px",
// //             borderRadius: "8px",
// //             boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
// //             position: "relative",
// //             display: "flex",
// //             flexDirection: "column",
// //             gap: "10px",
// //           }}
// //         >
// //           <button
// //             onClick={onCancel}
// //             style={{
// //               background: "none",
// //               border: "none",
// //               fontSize: "30px",
// //               cursor: "pointer",
// //               color: "#666",
// //               width: "30px",
// //               height: "30px",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //               borderRadius: "50%",
// //               transition: "all 0.2s",
// //               alignSelf: "flex-end",
// //             }}
// //             onMouseEnter={(e) => (e.target.style.backgroundColor = "#f5f5f5")}
// //             onMouseLeave={(e) =>
// //               (e.target.style.backgroundColor = "transparent")
// //             }
// //           >
// //             ×
// //           </button>
// //           <h3
// //             style={{
// //               marginTop: "0",
// //               marginBottom: "20px",
// //               fontSize: "18px",
// //               color: "#333",
// //             }}
// //           >
// //             {message || "Are you sure you've completed this resource?"}
// //           </h3>
// //           <div
// //             style={{
// //               display: "flex",
// //               justifyContent: "flex-end",
// //               gap: "12px",
// //             }}
// //           >
// //             <button
// //               ref={noButtonRef}
// //               onClick={onCancel}
// //               style={{
// //                 padding: "8px 16px",
// //                 backgroundColor: focusedButton === "no" ? "#e0e0e0" : "#f0f0f0",
// //                 border: "none",
// //                 borderRadius: "4px",
// //                 cursor: "pointer",
// //                 fontSize: "14px",
// //                 fontWeight: "500",
// //                 transition: "all 0.2s",
// //                 outline: "none",
// //                 boxShadow:
// //                   focusedButton === "no" ? "0 0 0 2px #4caf50" : "none",
// //               }}
// //               onMouseEnter={(e) => (e.target.style.backgroundColor = "#e0e0e0")}
// //               onMouseLeave={(e) =>
// //                 (e.target.style.backgroundColor =
// //                   focusedButton === "no" ? "#e0e0e0" : "#f0f0f0")
// //               }
// //             >
// //               No
// //             </button>
// //             <button
// //               ref={yesButtonRef}
// //               onClick={onConfirm}
// //               style={{
// //                 padding: "8px 16px",
// //                 backgroundColor:
// //                   focusedButton === "yes" ? "#3d8b40" : "#4caf50",
// //                 color: "white",
// //                 border: "none",
// //                 borderRadius: "4px",
// //                 cursor: "pointer",
// //                 fontSize: "14px",
// //                 fontWeight: "500",
// //                 transition: "all 0.2s",
// //                 outline: "none",
// //                 boxShadow: focusedButton === "yes" ? "0 0 0 2px white" : "none",
// //               }}
// //               onMouseEnter={(e) => (e.target.style.backgroundColor = "#3d8b40")}
// //               onMouseLeave={(e) =>
// //                 (e.target.style.backgroundColor =
// //                   focusedButton === "yes" ? "#3d8b40" : "#4caf50")
// //               }
// //             >
// //               Yes
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const Tiles = () => {
// //   const navigate = useNavigate();
// //   const { id, step } = useParams();
// //   const [checkedResources, setCheckedResources] = useState([]);
// //   const [expandedPlaylist, setExpandedPlaylist] = useState(null);
// //   const [trackedPlaylists, setTrackedPlaylists] = useState([]);
// //   const [modalState, setModalState] = useState({
// //     isOpen: false,
// //     resourceId: null,
// //     action: null,
// //   });

// //   // Find the course by id and get the step data
// //   const course = resources.find((course) => course.id === parseInt(id));
// //   const stepData = course?.steps?.[step];

// //   // Initialize tracked playlists
// //   useEffect(() => {
// //     if (stepData?.playlists?.resources) {
// //       const initialTracked = stepData.playlists.resources
// //         .map((playlist, index) =>
// //           playlist.type === "non-optional" ? index : null
// //         )
// //         .filter((index) => index !== null);
// //       setTrackedPlaylists(initialTracked);
// //     }
// //   }, [stepData]);

// //   // Check if projects have categories or simple array structure
// //   const hasProjectCategories =
// //     stepData?.projects?.resources &&
// //     !Array.isArray(stepData.projects.resources);

// //   const getAvailableTabs = () => {
// //     const availableTabs = [];

// //     if (stepData?.documentation?.resources?.length > 0) {
// //       availableTabs.push({
// //         id: "documentation",
// //         label: "Documentation",
// //         tabNumber: "1",
// //       });
// //     }

// //     if (stepData?.crashCourses?.resources?.length > 0) {
// //       availableTabs.push({
// //         id: "crashCourses",
// //         label: "Crash Courses",
// //         tabNumber: "2",
// //       });
// //     }

// //     if (stepData?.playlists?.resources?.length > 0) {
// //       availableTabs.push({
// //         id: "playlists",
// //         label: "Playlists",
// //         tabNumber: "3",
// //       });
// //     }

// //     if (
// //       (hasProjectCategories &&
// //         (stepData.projects.resources.basic?.length > 0 ||
// //           stepData.projects.resources.intermediate?.length > 0 ||
// //           stepData.projects.resources.advanced?.length > 0)) ||
// //       (!hasProjectCategories && stepData?.projects?.resources?.length > 0)
// //     ) {
// //       availableTabs.push({ id: "projects", label: "Projects", tabNumber: "4" });
// //     }

// //     return availableTabs;
// //   };

// //   const availableTabs = getAvailableTabs();
// //   const [activeTab, setActiveTab] = useState(
// //     availableTabs.length > 0 ? availableTabs[0].id : ""
// //   );

// //   const togglePlaylist = (playlistIndex) => {
// //     setExpandedPlaylist((prev) =>
// //       prev === playlistIndex ? null : playlistIndex
// //     );
// //   };

// //   const toggleTrackedPlaylist = (playlistIndex) => {
// //     setTrackedPlaylists((prev) => {
// //       if (prev.includes(playlistIndex)) {
// //         return prev.filter((index) => index !== playlistIndex);
// //       } else {
// //         return [...prev, playlistIndex];
// //       }
// //     });
// //   };

// //   const handleCheckboxChange = (id) => {
// //     const isChecked = checkedResources.includes(id);

// //     if (isChecked) {
// //       setCheckedResources((prevChecked) =>
// //         prevChecked.filter((resourceId) => resourceId !== id)
// //       );
// //     } else {
// //       setModalState({
// //         isOpen: true,
// //         resourceId: id,
// //         action: "check",
// //       });
// //     }
// //   };

// //   const handleConfirm = () => {
// //     if (modalState.action === "check") {
// //       setCheckedResources((prevChecked) => [
// //         ...prevChecked,
// //         modalState.resourceId,
// //       ]);
// //       launchConfetti();
// //     }
// //     setModalState({ isOpen: false, resourceId: null, action: null });
// //   };

// //   const handleCancel = () => {
// //     setModalState({ isOpen: false, resourceId: null, action: null });
// //   };

// //   const launchConfetti = () => {
// //     confetti({
// //       particleCount: 100,
// //       spread: 160,
// //       origin: { y: 0.6 },
// //     });
// //   };

// //   const calculateProgress = (category) => {
// //     let total = 0;
// //     let checked = 0;

// //     switch (category) {
// //       case "documentation":
// //         total = stepData?.documentation?.resources?.length || 0;
// //         checked = checkedResources.filter((id) => id.startsWith("doc-")).length;
// //         break;

// //       case "crashCourses":
// //         total = stepData?.crashCourses?.resources?.length || 0;
// //         checked = checkedResources.filter((id) =>
// //           id.startsWith("course-")
// //         ).length;
// //         break;

// //       case "playlists":
// //         stepData?.playlists?.resources?.forEach((playlist, index) => {
// //           if (trackedPlaylists.includes(index)) {
// //             total += playlist.videos.length;
// //             checked += playlist.videos.filter((_, videoIndex) =>
// //               checkedResources.includes(`video-${index}-${videoIndex}`)
// //             ).length;
// //           }
// //         });
// //         break;

// //       case "projects":
// //         if (hasProjectCategories) {
// //           total =
// //             (stepData.projects.resources.basic?.length || 0) +
// //             (stepData.projects.resources.intermediate?.length || 0) +
// //             (stepData.projects.resources.advanced?.length || 0);
// //           checked =
// //             checkedResources.filter((id) => id.startsWith("project-basic-"))
// //               .length +
// //             checkedResources.filter((id) =>
// //               id.startsWith("project-intermediate-")
// //             ).length +
// //             checkedResources.filter((id) => id.startsWith("project-advanced-"))
// //               .length;
// //         } else {
// //           total = stepData?.projects?.resources?.length || 0;
// //           checked = checkedResources.filter((id) =>
// //             id.startsWith("project-")
// //           ).length;
// //         }
// //         break;

// //       case "projects-basic":
// //         total = stepData.projects.resources.basic?.length || 0;
// //         checked = checkedResources.filter((id) =>
// //           id.startsWith("project-basic-")
// //         ).length;
// //         break;

// //       case "projects-intermediate":
// //         total = stepData.projects.resources.intermediate?.length || 0;
// //         checked = checkedResources.filter((id) =>
// //           id.startsWith("project-intermediate-")
// //         ).length;
// //         break;

// //       case "projects-advanced":
// //         total = stepData.projects.resources.advanced?.length || 0;
// //         checked = checkedResources.filter((id) =>
// //           id.startsWith("project-advanced-")
// //         ).length;
// //         break;

// //       default:
// //         break;
// //     }

// //     return total > 0 ? (checked / total) * 100 : 0;
// //   };

// //   const calculateOverallProgress = () => {
// //     const availableTabs = getAvailableTabs();
// //     const tabCount = availableTabs.length;

// //     const docTotal = stepData?.documentation?.resources?.length || 0;
// //     const docChecked = checkedResources.filter((id) =>
// //       id.startsWith("doc-")
// //     ).length;
// //     const docProgress = docTotal > 0 ? (docChecked / docTotal) * 100 : 0;

// //     const courseTotal = stepData?.crashCourses?.resources?.length || 0;
// //     const courseChecked = checkedResources.filter((id) =>
// //       id.startsWith("course-")
// //     ).length;
// //     const courseProgress =
// //       courseTotal > 0 ? (courseChecked / courseTotal) * 100 : 0;

// //     let playlistTotal = 0;
// //     let playlistChecked = 0;
// //     stepData?.playlists?.resources?.forEach((playlist, index) => {
// //       if (trackedPlaylists.includes(index)) {
// //         playlistTotal += playlist.videos.length;
// //         playlistChecked += playlist.videos.filter((_, videoIndex) =>
// //           checkedResources.includes(`video-${index}-${videoIndex}`)
// //         ).length;
// //       }
// //     });
// //     const playlistProgress =
// //       playlistTotal > 0 ? (playlistChecked / playlistTotal) * 100 : 0;

// //     let projectTotal = 0;
// //     let projectChecked = 0;
// //     if (hasProjectCategories) {
// //       projectTotal =
// //         (stepData.projects.resources.basic?.length || 0) +
// //         (stepData.projects.resources.intermediate?.length || 0) +
// //         (stepData.projects.resources.advanced?.length || 0);
// //       projectChecked =
// //         checkedResources.filter((id) => id.startsWith("project-basic-"))
// //           .length +
// //         checkedResources.filter((id) => id.startsWith("project-intermediate-"))
// //           .length +
// //         checkedResources.filter((id) => id.startsWith("project-advanced-"))
// //           .length;
// //     } else {
// //       projectTotal = stepData?.projects?.resources?.length || 0;
// //       projectChecked = checkedResources.filter((id) =>
// //         id.startsWith("project-")
// //       ).length;
// //     }
// //     const projectProgress =
// //       projectTotal > 0 ? (projectChecked / projectTotal) * 100 : 0;

// //     const weights = {};
// //     if (tabCount === 4) {
// //       weights.playlists = 0.4;
// //       weights.documentation = 0.25;
// //       weights.projects = 0.25;
// //       weights.crashCourses = 0.1;
// //     } else {
// //       const equalWeight = 1 / tabCount;
// //       availableTabs.forEach((tab) => {
// //         weights[tab.id] = equalWeight;
// //       });
// //     }

// //     let weightedSum = 0;
// //     if (weights.playlists) weightedSum += playlistProgress * weights.playlists;
// //     if (weights.documentation)
// //       weightedSum += docProgress * weights.documentation;
// //     if (weights.projects) weightedSum += projectProgress * weights.projects;
// //     if (weights.crashCourses)
// //       weightedSum += courseProgress * weights.crashCourses;

// //     return weightedSum;
// //   };

// //   const handleTabChange = (tab) => {
// //     setActiveTab(tab);
// //   };

// //   const renderProgressBar = (category, label) => {
// //     const progress = calculateProgress(category);
// //     return (
// //       <div style={{ marginBottom: "15px" }}>
// //         <div>
// //           <div className="progress-bar-white">
// //             <div
// //               style={{
// //                 height: "100%",
// //                 width: `${progress}%`,
// //                 backgroundColor: "#4caf50",
// //                 borderRadius: "5px",
// //               }}
// //             />
// //           </div>
// //         </div>
// //         <div className="progress-bar-percentage">
// //           {label}: {Math.round(progress)}%
// //         </div>
// //       </div>
// //     );
// //   };

// //   const ResourceTable = ({ items, resourcePrefix, category }) => {
// //     return (
// //       <table className="view-resources-table">
// //         <thead>
// //           <tr>
// //             <th>Done</th>
// //             <th>Sr. No.</th>
// //             <th>Name</th>
// //             <th>Link</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {items.map((item, index) => {
// //             const resourceId = `${resourcePrefix}-${index}`;
// //             return (
// //               <tr key={index}>
// //                 <td>
// //                   <input
// //                     type="checkbox"
// //                     checked={checkedResources.includes(resourceId)}
// //                     onChange={() => handleCheckboxChange(resourceId)}
// //                     style={{
// //                       transform: "scale(1.5)",
// //                       cursor: "pointer",
// //                     }}
// //                   />
// //                 </td>
// //                 <td>{index + 1}</td>
// //                 <td>{item.title}</td>
// //                 <td>
// //                   <a
// //                     href={item.link}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     style={{
// //                       color: "blue",
// //                       textDecoration: "underline",
// //                     }}
// //                   >
// //                     Visit Link
// //                   </a>
// //                 </td>
// //               </tr>
// //             );
// //           })}
// //         </tbody>
// //       </table>
// //     );
// //   };

// //   const PlaylistTrackingSelector = () => {
// //     const [showTracking, setShowTracking] = useState(false);

// //     return (
// //       <div
// //         className="playlist-tracking-selector"
// //         style={{
// //           backgroundColor: "#f8f9fa",
// //           padding: "15px",
// //           borderRadius: "8px",
// //           marginBottom: "20px",
// //           border: "1px solid #dee2e6",
// //           transition: "all 0.3s ease",
// //         }}
// //       >
// //         <div
// //           onClick={() => setShowTracking(!showTracking)}
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //             cursor: "pointer",
// //           }}
// //         >
// //           <h4 style={{ margin: 0 }}>Select Playlists to Track Progress</h4>
// //           <span
// //             style={{
// //               fontSize: "24px",
// //               fontWeight: "bold",
// //               transform: showTracking ? "rotate(0deg)" : "rotate(90deg)",
// //               transition: "transform 0.2s ease",
// //             }}
// //           >
// //             {showTracking ? "−" : "+"}
// //           </span>
// //         </div>

// //         {showTracking && (
// //           <div
// //             style={{
// //               marginTop: "10px",
// //               padding: "10px",
// //               borderTop: "1px rgb(222, 226, 230) solid",
// //             }}
// //           >
// //             <div
// //               style={{
// //                 display: "flex",
// //                 flexWrap: "wrap",
// //                 gap: "15px",
// //                 flexDirection: "column",
// //               }}
// //             >
// //               {stepData.playlists.resources.map((playlist, index) => (
// //                 <div
// //                   key={index}
// //                   style={{
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "space-between",
// //                   }}
// //                 >
// //                   <div className="playlist-tracking-main">
// //                     <input
// //                       type="checkbox"
// //                       id={`track-playlist-${index}`}
// //                       checked={trackedPlaylists.includes(index)}
// //                       onChange={() => toggleTrackedPlaylist(index)}
// //                       style={{
// //                         transform: "scale(1.3)",
// //                         marginRight: "8px",
// //                         cursor: "pointer",
// //                       }}
// //                     />
// //                     <label
// //                       htmlFor={`track-playlist-${index}`}
// //                       style={{ cursor: "pointer", fontWeight: "500" }}
// //                     >
// //                       {playlist.title} ({playlist.type})
// //                     </label>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //             <div
// //               style={{
// //                 marginTop: "10px",
// //                 fontStyle: "italic",
// //                 color: "#6c757d",
// //               }}
// //             >
// //               Currently tracking: {trackedPlaylists.length} playlists
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     );
// //   };

// //   const ResourceDescription = ({ paragraph, pointsHeading, points }) => {
// //     const [isExpanded, setIsExpanded] = useState(false);
// //     const [needsReadMore, setNeedsReadMore] = useState(false);
// //     const containerRef = useRef(null);

// //     useEffect(() => {
// //       if (containerRef.current) {
// //         const paragraphElement =
// //           containerRef.current.querySelector(".icon-paragraph");
// //         if (paragraphElement) {
// //           const lineHeight = parseInt(
// //             getComputedStyle(paragraphElement).lineHeight
// //           );
// //           const maxHeight = lineHeight * 2;
// //           setNeedsReadMore(paragraphElement.scrollHeight > maxHeight);
// //         }
// //       }
// //     }, [paragraph, pointsHeading, points]);

// //     return (
// //       <div ref={containerRef}>
// //         <div
// //           className="icon-paragraph"
// //           style={{
// //             overflow: "hidden",
// //             display: "-webkit-box",
// //             WebkitLineClamp: isExpanded ? "unset" : 2,
// //             WebkitBoxOrient: "vertical",
// //             textOverflow: "ellipsis",
// //             whiteSpace: "normal",
// //           }}
// //         >
// //           {paragraph}
// //         </div>

// //         <div style={{ display: isExpanded ? "block" : "none" }}>
// //           <h5 className="career-requirements">{pointsHeading}</h5>
// //           <ul>
// //             {points.map((point, index) => (
// //               <li key={index} className="icon-paragraph">
// //                 {point}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {needsReadMore && (
// //           <button
// //             onClick={() => setIsExpanded(!isExpanded)}
// //             style={{
// //               background: "none",
// //               border: "none",
// //               color: "blue",
// //               cursor: "pointer",
// //               padding: "5px 0",
// //               fontSize: "14px",
// //               fontWeight: "500",
// //               marginBottom: "15px",
// //             }}
// //           >
// //             {isExpanded ? "Read Less" : "Read More"}
// //           </button>
// //         )}
// //       </div>
// //     );
// //   };

// //   const PlaylistAccordion = ({ playlist, index }) => {
// //     const isExpanded = expandedPlaylist === index;
// //     const isTracked = trackedPlaylists.includes(index);
// //     const isSinglePlaylist = stepData.playlists.resources.length === 1;
// //     const playlistRef = useRef(null);

// //     useEffect(() => {
// //       if (isExpanded && playlistRef.current) {
// //         const navbarHeight = 80;
// //         const elementPosition = playlistRef.current.getBoundingClientRect().top;
// //         const offsetPosition =
// //           elementPosition + window.pageYOffset - navbarHeight;

// //         window.scrollTo({
// //           top: offsetPosition,
// //           behavior: "smooth",
// //         });
// //       }
// //     }, [isExpanded]);

// //     if (isSinglePlaylist) {
// //       return (
// //         <div
// //           className="playlist-accordion"
// //           style={{
// //             marginBottom: "20px",
// //             border: "1px solid #e0e0e0",
// //             borderRadius: "8px",
// //             overflow: "hidden",
// //           }}
// //         >
// //           <div
// //             className="playlist-header"
// //             style={{
// //               padding: "15px",
// //               backgroundColor: "#f8f8f8",
// //             }}
// //           >
// //             <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
// //               <h3 className="progress-bar-percentage" style={{ margin: 0 }}>
// //                 {playlist.title} ({playlist.type})
// //               </h3>
// //               {isTracked && (
// //                 <span
// //                   style={{
// //                     fontSize: "0.8em",
// //                     backgroundColor: "#4caf50",
// //                     color: "white",
// //                     padding: "2px 8px",
// //                     borderRadius: "10px",
// //                   }}
// //                 >
// //                   Tracking
// //                 </span>
// //               )}
// //             </div>
// //           </div>
// //           <div
// //             className="playlist-content"
// //             style={{
// //               padding: "15px",
// //               backgroundColor: "#fff",
// //             }}
// //           >
// //             <ResourceTable
// //               items={playlist.videos}
// //               resourcePrefix={`video-${index}`}
// //               category="playlists"
// //             />
// //           </div>
// //         </div>
// //       );
// //     }

// //     return (
// //       <div
// //         ref={playlistRef}
// //         className="playlist-accordion"
// //         style={{
// //           marginBottom: "20px",
// //           border: "1px solid #e0e0e0",
// //           borderRadius: "8px",
// //           overflow: "hidden",
// //           transition: "all 0.3s ease",
// //         }}
// //       >
// //         <div
// //           className="playlist-header"
// //           style={{
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //             padding: "15px",
// //             backgroundColor: isExpanded ? "#f0f0f0" : "#f8f8f8",
// //             cursor: "pointer",
// //             transition: "background-color 0.2s ease",
// //           }}
// //           onClick={() => togglePlaylist(index)}
// //         >
// //           <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
// //             <h3
// //               className="progress-bar-percentage"
// //               style={{
// //                 margin: 0,
// //                 color: isExpanded ? "#2c3e50" : "#34495e",
// //               }}
// //             >
// //               {playlist.title} ({playlist.type})
// //             </h3>
// //             {isTracked && (
// //               <span
// //                 style={{
// //                   fontSize: "0.8em",
// //                   backgroundColor: "#4caf50",
// //                   color: "white",
// //                   padding: "2px 8px",
// //                   borderRadius: "10px",
// //                 }}
// //               >
// //                 Tracking
// //               </span>
// //             )}
// //           </div>
// //           <span
// //             style={{
// //               fontSize: "20px",
// //               transition: "transform 0.2s ease",
// //               transform: isExpanded ? "rotate(0deg)" : "rotate(90deg)",
// //             }}
// //           >
// //             {isExpanded ? "−" : "+"}
// //           </span>
// //         </div>

// //         {isExpanded && (
// //           <div
// //             className="playlist-content"
// //             style={{
// //               padding: "15px",
// //               backgroundColor: "#fff",
// //               borderTop: "1px solid #e0e0e0",
// //             }}
// //           >
// //             <ResourceTable
// //               items={playlist.videos}
// //               resourcePrefix={`video-${index}`}
// //               category="playlists"
// //             />
// //           </div>
// //         )}
// //       </div>
// //     );
// //   };

// //   const TabButton = ({ tab }) => (
// //     <div
// //       className={`tab-item tab-item-tile tab-item-1 tab-item-1-tile ${
// //         activeTab === tab.id ? "active-tab" : ""
// //       }`}
// //       onClick={() => handleTabChange(tab.id)}
// //     >
// //       {tab.label}
// //     </div>
// //   );

// //   if (!course || !stepData) {
// //     return (
// //       <div className="detailcard-container detailcard-container-tiles">
// //         <div className="apply-form-container">
// //           <h2 className="heading-secondary marginbottom">Resource Not Found</h2>
// //           <p className="paragraph-primary">
// //             The requested course or step could not be found.
// //           </p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (availableTabs.length === 0) {
// //     return (
// //       <div className="detailcard-container detailcard-container-tiles">
// //         <div className="apply-form-container">
// //           <h2 className="heading-secondary marginbottom">{stepData.name}</h2>
// //           <p className="paragraph-primary">
// //             No resources available for this step.
// //           </p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="detailcard-container detailcard-container-tiles">
// //       <ConfirmationModal
// //         isOpen={modalState.isOpen}
// //         onConfirm={handleConfirm}
// //         onCancel={handleCancel}
// //         message="Are you sure you've completed this resource?"
// //       />

// //       <div className="apply-form-container">
// //         <div
// //           style={{
// //             display: "flex",
// //             flexDirection: "row",
// //             alignItems: "center",
// //             justifyContent: "space-between",
// //             marginBottom: "12px",
// //           }}
// //         >
// //           <h2 className="heading-secondary marginbottom">{stepData.name}</h2>

// //           <div
// //             style={{
// //               position: "relative",
// //               width: "50px",
// //               height: "50px",
// //             }}
// //           >
// //             <svg width="50" height="50">
// //               <circle
// //                 cx="25"
// //                 cy="25"
// //                 r="20"
// //                 stroke="#e6e6e6"
// //                 strokeWidth="5"
// //                 fill="none"
// //               />
// //               <circle
// //                 cx="25"
// //                 cy="25"
// //                 r="20"
// //                 stroke="#4caf50"
// //                 strokeWidth="5"
// //                 fill="none"
// //                 strokeDasharray={2 * Math.PI * 20}
// //                 strokeDashoffset={
// //                   2 * Math.PI * 20 * (1 - calculateOverallProgress() / 100)
// //                 }
// //                 transform="rotate(-90 25 25)"
// //                 strokeLinecap="round"
// //               />
// //               <text
// //                 x="50%"
// //                 y="50%"
// //                 dominantBaseline="middle"
// //                 textAnchor="middle"
// //                 fontSize="14"
// //                 fill="#333"
// //               >
// //                 {Math.round(calculateOverallProgress())}%
// //               </text>
// //             </svg>
// //           </div>
// //         </div>

// //         <p
// //           className="paragraph-primary"
// //           style={{
// //             marginBottom: "20px",
// //           }}
// //         >
// //           {stepData.description}
// //         </p>

// //         <div className="tab-buttons tab-buttons-tiles">
// //           {availableTabs.map((tab) => (
// //             <TabButton key={tab.id} tab={tab} />
// //           ))}
// //         </div>

// //         <div style={{ marginTop: "20px" }}>
// //           {activeTab === "documentation" && (
// //             <div>
// //               <h4 className="tab-heading-first">Documentation</h4>
// //               <ResourceDescription
// //                 paragraph={stepData.documentation.paragraph}
// //                 pointsHeading={stepData.documentation["points-heading"]}
// //                 points={stepData.documentation.points}
// //               />
// //               {renderProgressBar("documentation", "Documentation Progress")}
// //               <ResourceTable
// //                 items={stepData.documentation.resources}
// //                 resourcePrefix="doc"
// //                 category="documentation"
// //               />
// //             </div>
// //           )}

// //           {activeTab === "crashCourses" && (
// //             <div>
// //               <h4 className="tab-heading-first">Crash Courses</h4>
// //               <ResourceDescription
// //                 paragraph={stepData.crashCourses.paragraph}
// //                 pointsHeading={stepData.crashCourses["points-heading"]}
// //                 points={stepData.crashCourses.points}
// //               />
// //               {renderProgressBar("crashCourses", "Crash Courses Progress")}
// //               <ResourceTable
// //                 items={stepData.crashCourses.resources}
// //                 resourcePrefix="course"
// //                 category="crashCourses"
// //               />
// //             </div>
// //           )}

// //           {activeTab === "playlists" && (
// //             <div>
// //               <h4 className="tab-heading-first">Playlists</h4>
// //               <ResourceDescription
// //                 paragraph={stepData.playlists.paragraph}
// //                 pointsHeading={stepData.playlists["points-heading"]}
// //                 points={stepData.playlists.points}
// //               />
// //               {stepData.playlists.resources.length > 1 && (
// //                 <PlaylistTrackingSelector />
// //               )}
// //               {renderProgressBar("playlists", "Playlist Videos Progress")}

// //               {stepData.playlists.resources.map((playlist, index) => (
// //                 <PlaylistAccordion
// //                   key={index}
// //                   playlist={playlist}
// //                   index={index}
// //                 />
// //               ))}
// //             </div>
// //           )}

// //           {activeTab === "projects" && (
// //             <div>
// //               <h4 className="tab-heading-first">Projects</h4>
// //               <ResourceDescription
// //                 paragraph={stepData.projects.paragraph}
// //                 pointsHeading={stepData.projects["points-heading"]}
// //                 points={stepData.projects.points}
// //               />

// //               {hasProjectCategories ? (
// //                 <>
// //                   <div className="projects-progressor">
// //                     <div style={{ flex: 1 }}>
// //                       {renderProgressBar("projects-basic", "Basic Projects")}
// //                     </div>
// //                     <div style={{ flex: 1 }}>
// //                       {renderProgressBar(
// //                         "projects-intermediate",
// //                         "Intermediate Projects"
// //                       )}
// //                     </div>
// //                     <div style={{ flex: 1 }}>
// //                       {renderProgressBar(
// //                         "projects-advanced",
// //                         "Advanced Projects"
// //                       )}
// //                     </div>
// //                   </div>

// //                   <h3 className="project-heading">Basic</h3>
// //                   <ResourceTable
// //                     items={stepData.projects.resources.basic}
// //                     resourcePrefix="project-basic"
// //                     category="projects"
// //                   />

// //                   <h3 className="project-heading" style={{ marginTop: "30px" }}>
// //                     Intermediate
// //                   </h3>
// //                   <ResourceTable
// //                     items={stepData.projects.resources.intermediate}
// //                     resourcePrefix="project-intermediate"
// //                     category="projects"
// //                   />

// //                   <h3 className="project-heading" style={{ marginTop: "30px" }}>
// //                     Advanced
// //                   </h3>
// //                   <ResourceTable
// //                     items={stepData.projects.resources.advanced}
// //                     resourcePrefix="project-advanced"
// //                     category="projects"
// //                   />
// //                 </>
// //               ) : (
// //                 <>
// //                   {renderProgressBar("projects", "Projects Progress")}
// //                   <ResourceTable
// //                     items={stepData.projects.resources}
// //                     resourcePrefix="project"
// //                     category="projects"
// //                   />
// //                 </>
// //               )}
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Tiles;
// import React, {
//   useState,
//   useEffect,
//   useRef,
//   useMemo,
//   useCallback,
// } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import confetti from "canvas-confetti";
// import resources from "../pages/data/tilestemp.json";
// import "./css/Tiles.css";

// const ConfirmationModal = ({ isOpen, onConfirm, onCancel, message }) => {
//   const yesButtonRef = useRef(null);
//   const noButtonRef = useRef(null);
//   const modalRef = useRef(null);
//   const [focusedButton, setFocusedButton] = useState("yes");

//   useEffect(() => {
//     if (isOpen) {
//       modalRef.current?.focus();
//       setFocusedButton("yes");
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     const buttonRef = focusedButton === "yes" ? yesButtonRef : noButtonRef;
//     buttonRef.current?.focus();
//   }, [focusedButton]);

//   const handleKeyDown = useCallback(
//     (e) => {
//       const keyActions = {
//         ArrowLeft: () => setFocusedButton("no"),
//         ArrowRight: () => setFocusedButton("yes"),
//         Enter: () => (focusedButton === "yes" ? onConfirm() : onCancel()),
//         Escape: () => onCancel(),
//         Tab: () => setFocusedButton((prev) => (prev === "yes" ? "no" : "yes")),
//       };

//       if (keyActions[e.key]) {
//         e.preventDefault();
//         keyActions[e.key]();
//       }
//     },
//     [focusedButton, onConfirm, onCancel]
//   );

//   if (!isOpen) return null;

//   const buttonStyle = (isActive) => ({
//     padding: "8px 16px",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     fontSize: "14px",
//     fontWeight: "500",
//     transition: "all 0.2s",
//     outline: "none",
//     ...(isActive
//       ? {
//           backgroundColor: "#3d8b40",
//           color: "white",
//           boxShadow: "0 0 0 2px white",
//         }
//       : {
//           backgroundColor: "#f0f0f0",
//           color: "#333",
//         }),
//   });

//   return (
//     <div
//       className="modal-overlay"
//       ref={modalRef}
//       tabIndex="-1"
//       onKeyDown={handleKeyDown}
//     >
//       <div
//         style={{
//           position: "fixed",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           zIndex: 1000,
//           width: "100%",
//           maxWidth: "400px",
//           padding: "0 20px",
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: "white",
//             padding: "25px 20px 20px",
//             borderRadius: "8px",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
//             display: "flex",
//             flexDirection: "column",
//             gap: "10px",
//           }}
//         >
//           <button
//             onClick={onCancel}
//             style={{
//               background: "none",
//               border: "none",
//               fontSize: "30px",
//               cursor: "pointer",
//               color: "#666",
//               width: "30px",
//               height: "30px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               borderRadius: "50%",
//               alignSelf: "flex-end",
//             }}
//           >
//             ×
//           </button>
//           <h3
//             style={{
//               marginTop: "0",
//               marginBottom: "20px",
//               fontSize: "18px",
//               color: "#333",
//             }}
//           >
//             {message || "Are you sure you've completed this resource?"}
//           </h3>
//           <div
//             style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}
//           >
//             <button
//               ref={noButtonRef}
//               onClick={onCancel}
//               style={buttonStyle(focusedButton === "no")}
//             >
//               No
//             </button>
//             <button
//               ref={yesButtonRef}
//               onClick={onConfirm}
//               style={buttonStyle(focusedButton === "yes")}
//             >
//               Yes
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Tiles = () => {
//   const navigate = useNavigate();
//   const { id, step } = useParams();
//   const [checkedResources, setCheckedResources] = useState([]);
//   const [expandedPlaylist, setExpandedPlaylist] = useState(null);
//   const [trackedPlaylists, setTrackedPlaylists] = useState([]);
//   const [modalState, setModalState] = useState({
//     isOpen: false,
//     resourceId: null,
//     action: null,
//   });

//   // Memoized course and step data
//   const { course, stepData } = useMemo(() => {
//     const foundCourse = resources.find((course) => course.id === parseInt(id));
//     return {
//       course: foundCourse,
//       stepData: foundCourse?.steps?.[step],
//     };
//   }, [id, step]);

//   // Memoized available tabs
//   const availableTabs = useMemo(() => {
//     if (!stepData) return [];

//     const tabs = [];
//     const tabConfigs = [
//       { id: "documentation", label: "Documentation", tabNumber: "1" },
//       { id: "crashCourses", label: "Crash Courses", tabNumber: "2" },
//       { id: "playlists", label: "Playlists", tabNumber: "3" },
//       { id: "projects", label: "Projects", tabNumber: "4" },
//     ];

//     tabConfigs.forEach((tab) => {
//       const hasResources =
//         stepData[tab.id]?.resources?.length > 0 ||
//         (tab.id === "projects" &&
//           stepData.projects?.resources &&
//           (Array.isArray(stepData.projects.resources) ||
//             Object.values(stepData.projects.resources).some(
//               (arr) => arr?.length > 0
//             )));

//       if (hasResources) tabs.push(tab);
//     });

//     return tabs;
//   }, [stepData]);

//   const [activeTab, setActiveTab] = useState(availableTabs[0]?.id || "");

//   // Initialize tracked playlists
//   useEffect(() => {
//     if (stepData?.playlists?.resources) {
//       const initialTracked = stepData.playlists.resources
//         .map((playlist, index) =>
//           playlist.type === "non-optional" ? index : null
//         )
//         .filter((index) => index !== null);
//       setTrackedPlaylists(initialTracked);
//     }
//   }, [stepData]);

//   // Update active tab when available tabs change
//   useEffect(() => {
//     if (
//       availableTabs.length > 0 &&
//       !availableTabs.find((tab) => tab.id === activeTab)
//     ) {
//       setActiveTab(availableTabs[0].id);
//     }
//   }, [availableTabs, activeTab]);

//   // Memoized project structure check
//   const hasProjectCategories = useMemo(() => {
//     return (
//       stepData?.projects?.resources &&
//       !Array.isArray(stepData.projects.resources)
//     );
//   }, [stepData]);

//   // Optimized progress calculation
//   const calculateProgress = useCallback(
//     (category) => {
//       if (!stepData) return 0;

//       const getCheckedCount = (prefix) =>
//         checkedResources.filter((id) => id.startsWith(prefix)).length;

//       const progressCalculators = {
//         documentation: () => {
//           const total = stepData.documentation?.resources?.length || 0;
//           const checked = getCheckedCount("doc-");
//           return total > 0 ? (checked / total) * 100 : 0;
//         },
//         crashCourses: () => {
//           const total = stepData.crashCourses?.resources?.length || 0;
//           const checked = getCheckedCount("course-");
//           return total > 0 ? (checked / total) * 100 : 0;
//         },
//         playlists: () => {
//           let total = 0;
//           let checked = 0;
//           stepData.playlists?.resources?.forEach((playlist, index) => {
//             if (trackedPlaylists.includes(index)) {
//               total += playlist.videos.length;
//               checked += playlist.videos.filter((_, videoIndex) =>
//                 checkedResources.includes(`video-${index}-${videoIndex}`)
//               ).length;
//             }
//           });
//           return total > 0 ? (checked / total) * 100 : 0;
//         },
//         projects: () => {
//           let total = 0;
//           let checked = 0;

//           if (hasProjectCategories) {
//             const categories = ["basic", "intermediate", "advanced"];
//             categories.forEach((category) => {
//               const categoryResources =
//                 stepData.projects.resources[category] || [];
//               total += categoryResources.length;
//               checked += getCheckedCount(`project-${category}-`);
//             });
//           } else {
//             total = stepData.projects?.resources?.length || 0;
//             checked = getCheckedCount("project-");
//           }

//           return total > 0 ? (checked / total) * 100 : 0;
//         },
//       };

//       return progressCalculators[category]?.() || 0;
//     },
//     [stepData, checkedResources, trackedPlaylists, hasProjectCategories]
//   );

//   // Optimized overall progress calculation
//   const overallProgress = useMemo(() => {
//     const tabCount = availableTabs.length;
//     if (tabCount === 0) return 0;

//     const progressValues = availableTabs.map((tab) =>
//       calculateProgress(tab.id)
//     );

//     // Use weighted calculation for 4 tabs, equal weight otherwise
//     if (tabCount === 4) {
//       const weights = {
//         playlists: 0.4,
//         documentation: 0.25,
//         projects: 0.25,
//         crashCourses: 0.1,
//       };
//       return availableTabs.reduce(
//         (sum, tab, index) =>
//           sum + progressValues[index] * (weights[tab.id] || 0),
//         0
//       );
//     }

//     return (
//       progressValues.reduce((sum, progress) => sum + progress, 0) / tabCount
//     );
//   }, [availableTabs, calculateProgress]);

//   const handleCheckboxChange = useCallback(
//     (id) => {
//       const isChecked = checkedResources.includes(id);

//       if (isChecked) {
//         setCheckedResources((prev) =>
//           prev.filter((resourceId) => resourceId !== id)
//         );
//       } else {
//         setModalState({ isOpen: true, resourceId: id, action: "check" });
//       }
//     },
//     [checkedResources]
//   );

//   const handleConfirm = useCallback(() => {
//     if (modalState.action === "check") {
//       setCheckedResources((prev) => [...prev, modalState.resourceId]);
//       confetti({
//         particleCount: 100,
//         spread: 160,
//         origin: { y: 0.6 },
//       });
//     }
//     setModalState({ isOpen: false, resourceId: null, action: null });
//   }, [modalState]);

//   const handleCancel = useCallback(() => {
//     setModalState({ isOpen: false, resourceId: null, action: null });
//   }, []);

//   const togglePlaylist = useCallback((playlistIndex) => {
//     setExpandedPlaylist((prev) =>
//       prev === playlistIndex ? null : playlistIndex
//     );
//   }, []);

//   const toggleTrackedPlaylist = useCallback((playlistIndex) => {
//     setTrackedPlaylists((prev) =>
//       prev.includes(playlistIndex)
//         ? prev.filter((index) => index !== playlistIndex)
//         : [...prev, playlistIndex]
//     );
//   }, []);

//   // Reusable components
//   const ProgressBar = ({ category, label }) => {
//     const progress = calculateProgress(category);
//     return (
//       <div style={{ marginBottom: "15px" }}>
//         <div className="progress-bar-white">
//           <div
//             style={{
//               height: "100%",
//               width: `${progress}%`,
//               backgroundColor: "#4caf50",
//               borderRadius: "5px",
//             }}
//           />
//         </div>
//         <div className="progress-bar-percentage">
//           {label}: {Math.round(progress)}%
//         </div>
//       </div>
//     );
//   };

//   const ResourceTable = ({ items, resourcePrefix }) => (
//     <table className="view-resources-table">
//       <thead>
//         <tr>
//           <th>Done</th>
//           <th>Sr. No.</th>
//           <th>Name</th>
//           <th>Link</th>
//         </tr>
//       </thead>
//       <tbody>
//         {items.map((item, index) => {
//           const resourceId = `${resourcePrefix}-${index}`;
//           return (
//             <tr key={index}>
//               <td>
//                 <input
//                   type="checkbox"
//                   checked={checkedResources.includes(resourceId)}
//                   onChange={() => handleCheckboxChange(resourceId)}
//                   style={{ transform: "scale(1.5)", cursor: "pointer" }}
//                 />
//               </td>
//               <td>{index + 1}</td>
//               <td>{item.title}</td>
//               <td>
//                 <a
//                   href={item.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{ color: "blue", textDecoration: "underline" }}
//                 >
//                   Visit Link
//                 </a>
//               </td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );

//   const ResourceDescription = ({ paragraph, pointsHeading, points }) => {
//     const [isExpanded, setIsExpanded] = useState(false);
//     const [needsReadMore, setNeedsReadMore] = useState(false);
//     const containerRef = useRef(null);

//     useEffect(() => {
//       const paragraphElement =
//         containerRef.current?.querySelector(".icon-paragraph");
//       if (paragraphElement) {
//         const lineHeight = parseInt(
//           getComputedStyle(paragraphElement).lineHeight
//         );
//         const maxHeight = lineHeight * 2;
//         setNeedsReadMore(paragraphElement.scrollHeight > maxHeight);
//       }
//     }, [paragraph]);

//     return (
//       <div ref={containerRef}>
//         <div
//           className="icon-paragraph"
//           style={{
//             overflow: "hidden",
//             display: "-webkit-box",
//             WebkitLineClamp: isExpanded ? "unset" : 2,
//             WebkitBoxOrient: "vertical",
//             textOverflow: "ellipsis",
//             whiteSpace: "normal",
//           }}
//         >
//           {paragraph}
//         </div>

//         {isExpanded && (
//           <div>
//             <h5 className="career-requirements">{pointsHeading}</h5>
//             <ul>
//               {points.map((point, index) => (
//                 <li key={index} className="icon-paragraph">
//                   {point}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {needsReadMore && (
//           <button
//             onClick={() => setIsExpanded(!isExpanded)}
//             style={{
//               background: "none",
//               border: "none",
//               color: "blue",
//               cursor: "pointer",
//               padding: "5px 0",
//               fontSize: "14px",
//               fontWeight: "500",
//               marginBottom: "15px",
//             }}
//           >
//             {isExpanded ? "Read Less" : "Read More"}
//           </button>
//         )}
//       </div>
//     );
//   };

//   const PlaylistTrackingSelector = () => {
//     const [showTracking, setShowTracking] = useState(false);

//     return (
//       <div
//         className="playlist-tracking-selector"
//         style={{
//           backgroundColor: "#f8f9fa",
//           padding: "15px",
//           borderRadius: "8px",
//           marginBottom: "20px",
//           border: "1px solid #dee2e6",
//         }}
//       >
//         <div
//           onClick={() => setShowTracking(!showTracking)}
//           style={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             cursor: "pointer",
//           }}
//         >
//           <h4 style={{ margin: 0 }}>Select Playlists to Track Progress</h4>
//           <span
//             style={{
//               fontSize: "24px",
//               fontWeight: "bold",
//               transform: showTracking ? "rotate(0deg)" : "rotate(90deg)",
//               transition: "transform 0.2s ease",
//             }}
//           >
//             {showTracking ? "−" : "+"}
//           </span>
//         </div>

//         {showTracking && (
//           <div
//             style={{
//               marginTop: "10px",
//               padding: "10px",
//               borderTop: "1px rgb(222, 226, 230) solid",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "15px",
//                 flexDirection: "column",
//               }}
//             >
//               {stepData.playlists.resources.map((playlist, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                   }}
//                 >
//                   <div className="playlist-tracking-main">
//                     <input
//                       type="checkbox"
//                       id={`track-playlist-${index}`}
//                       checked={trackedPlaylists.includes(index)}
//                       onChange={() => toggleTrackedPlaylist(index)}
//                       style={{
//                         transform: "scale(1.3)",
//                         marginRight: "8px",
//                         cursor: "pointer",
//                       }}
//                     />
//                     <label
//                       htmlFor={`track-playlist-${index}`}
//                       style={{ cursor: "pointer", fontWeight: "500" }}
//                     >
//                       {playlist.title} ({playlist.type})
//                     </label>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div
//               style={{
//                 marginTop: "10px",
//                 fontStyle: "italic",
//                 color: "#6c757d",
//               }}
//             >
//               Currently tracking: {trackedPlaylists.length} playlists
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };

//   const PlaylistAccordion = ({ playlist, index }) => {
//     const isExpanded = expandedPlaylist === index;
//     const isTracked = trackedPlaylists.includes(index);
//     const isSinglePlaylist = stepData.playlists.resources.length === 1;
//     const playlistRef = useRef(null);

//     useEffect(() => {
//       if (isExpanded && playlistRef.current) {
//         const navbarHeight = 80;
//         const elementPosition = playlistRef.current.getBoundingClientRect().top;
//         const offsetPosition =
//           elementPosition + window.pageYOffset - navbarHeight;

//         window.scrollTo({
//           top: offsetPosition,
//           behavior: "smooth",
//         });
//       }
//     }, [isExpanded]);

//     const playlistContent = (
//       <div
//         className="playlist-content"
//         style={{
//           padding: "15px",
//           backgroundColor: "#fff",
//           ...(isSinglePlaylist ? {} : { borderTop: "1px solid #e0e0e0" }),
//         }}
//       >
//         <ResourceTable
//           items={playlist.videos}
//           resourcePrefix={`video-${index}`}
//         />
//       </div>
//     );

//     const playlistHeader = (
//       <div
//         className="playlist-header"
//         style={{
//           display: isSinglePlaylist ? "block" : "flex",
//           justifyContent: isSinglePlaylist ? "flex-start" : "space-between",
//           alignItems: "center",
//           padding: "15px",
//           backgroundColor: isSinglePlaylist
//             ? "#f8f8f8"
//             : isExpanded
//             ? "#f0f0f0"
//             : "#f8f8f8",
//           cursor: isSinglePlaylist ? "default" : "pointer",
//         }}
//       >
//         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//           <h3
//             className="progress-bar-percentage"
//             style={{
//               margin: 0,
//               color: isExpanded ? "#2c3e50" : "#34495e",
//             }}
//           >
//             {playlist.title} ({playlist.type})
//           </h3>
//           {isTracked && (
//             <span
//               style={{
//                 fontSize: "0.8em",
//                 backgroundColor: "#4caf50",
//                 color: "white",
//                 padding: "2px 8px",
//                 borderRadius: "10px",
//               }}
//             >
//               Tracking
//             </span>
//           )}
//         </div>
//         {!isSinglePlaylist && (
//           <span
//             style={{
//               fontSize: "20px",
//               transition: "transform 0.2s ease",
//               transform: isExpanded ? "rotate(0deg)" : "rotate(90deg)",
//             }}
//           >
//             {isExpanded ? "−" : "+"}
//           </span>
//         )}
//       </div>
//     );

//     return (
//       <div
//         ref={playlistRef}
//         className="playlist-accordion"
//         style={{
//           marginBottom: "20px",
//           border: "1px solid #e0e0e0",
//           borderRadius: "8px",
//           overflow: "hidden",
//         }}
//       >
//         <div
//           onClick={isSinglePlaylist ? undefined : () => togglePlaylist(index)}
//         >
//           {playlistHeader}
//         </div>
//         {(isSinglePlaylist || isExpanded) && playlistContent}
//       </div>
//     );
//   };

//   // Render tab content
//   const renderTabContent = () => {
//     const tabData = stepData[activeTab];
//     if (!tabData) return null;

//     const commonProps = {
//       paragraph: tabData.paragraph,
//       pointsHeading: tabData["points-heading"],
//       points: tabData.points,
//     };

//     switch (activeTab) {
//       case "documentation":
//         return (
//           <div>
//             <h4 className="tab-heading-first">Documentation</h4>
//             <ResourceDescription {...commonProps} />
//             <ProgressBar
//               category="documentation"
//               label="Documentation Progress"
//             />
//             <ResourceTable items={tabData.resources} resourcePrefix="doc" />
//           </div>
//         );

//       case "crashCourses":
//         return (
//           <div>
//             <h4 className="tab-heading-first">Crash Courses</h4>
//             <ResourceDescription {...commonProps} />
//             <ProgressBar
//               category="crashCourses"
//               label="Crash Courses Progress"
//             />
//             <ResourceTable items={tabData.resources} resourcePrefix="course" />
//           </div>
//         );

//       case "playlists":
//         return (
//           <div>
//             <h4 className="tab-heading-first">Playlists</h4>
//             <ResourceDescription {...commonProps} />
//             {tabData.resources.length > 1 && <PlaylistTrackingSelector />}
//             <ProgressBar
//               category="playlists"
//               label="Playlist Videos Progress"
//             />
//             {tabData.resources.map((playlist, index) => (
//               <PlaylistAccordion
//                 key={index}
//                 playlist={playlist}
//                 index={index}
//               />
//             ))}
//           </div>
//         );

//       case "projects":
//         return (
//           <div>
//             <h4 className="tab-heading-first">Projects</h4>
//             <ResourceDescription {...commonProps} />
//             <ProgressBar category="projects" label="Projects Progress" />

//             {hasProjectCategories ? (
//               <>
//                 {["basic", "intermediate", "advanced"].map((level) => {
//                   const resources = tabData.resources[level];
//                   if (!resources?.length) return null;

//                   return (
//                     <div key={level}>
//                       <h3
//                         className="project-heading"
//                         style={{
//                           marginTop: level === "basic" ? "0" : "30px",
//                           textTransform: "capitalize",
//                         }}
//                       >
//                         {level}
//                       </h3>
//                       <ResourceTable
//                         items={resources}
//                         resourcePrefix={`project-${level}`}
//                       />
//                     </div>
//                   );
//                 })}
//               </>
//             ) : (
//               <ResourceTable
//                 items={tabData.resources}
//                 resourcePrefix="project"
//               />
//             )}
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   // Error states
//   if (!course || !stepData) {
//     return (
//       <div className="detailcard-container detailcard-container-tiles">
//         <div className="apply-form-container">
//           <h2 className="heading-secondary marginbottom">Resource Not Found</h2>
//           <p className="paragraph-primary">
//             The requested course or step could not be found.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (availableTabs.length === 0) {
//     return (
//       <div className="detailcard-container detailcard-container-tiles">
//         <div className="apply-form-container">
//           <h2 className="heading-secondary marginbottom">{stepData.name}</h2>
//           <p className="paragraph-primary">
//             No resources available for this step.
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="detailcard-container detailcard-container-tiles">
//       <ConfirmationModal
//         isOpen={modalState.isOpen}
//         onConfirm={handleConfirm}
//         onCancel={handleCancel}
//         message="Are you sure you've completed this resource?"
//       />

//       <div className="apply-form-container">
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//             marginBottom: "12px",
//           }}
//         >
//           <h2 className="heading-secondary marginbottom">{stepData.name}</h2>

//           <div style={{ position: "relative", width: "50px", height: "50px" }}>
//             <svg width="50" height="50">
//               <circle
//                 cx="25"
//                 cy="25"
//                 r="20"
//                 stroke="#e6e6e6"
//                 strokeWidth="5"
//                 fill="none"
//               />
//               <circle
//                 cx="25"
//                 cy="25"
//                 r="20"
//                 stroke="#4caf50"
//                 strokeWidth="5"
//                 fill="none"
//                 strokeDasharray={2 * Math.PI * 20}
//                 strokeDashoffset={
//                   2 * Math.PI * 20 * (1 - overallProgress / 100)
//                 }
//                 transform="rotate(-90 25 25)"
//                 strokeLinecap="round"
//               />
//               <text
//                 x="50%"
//                 y="50%"
//                 dominantBaseline="middle"
//                 textAnchor="middle"
//                 fontSize="14"
//                 fill="#333"
//               >
//                 {Math.round(overallProgress)}%
//               </text>
//             </svg>
//           </div>
//         </div>

//         <p className="paragraph-primary" style={{ marginBottom: "20px" }}>
//           {stepData.description}
//         </p>

//         <div className="tab-buttons tab-buttons-tiles">
//           {availableTabs.map((tab) => (
//             <div
//               key={tab.id}
//               className={`tab-item tab-item-tile tab-item-1 tab-item-1-tile ${
//                 activeTab === tab.id ? "active-tab" : ""
//               }`}
//               onClick={() => setActiveTab(tab.id)}
//             >
//               {tab.label}
//             </div>
//           ))}
//         </div>

//         <div style={{ marginTop: "20px" }}>{renderTabContent()}</div>
//       </div>
//     </div>
//   );
// };

// export default Tiles;

import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { useNavigate, useParams } from "react-router-dom";
import confetti from "canvas-confetti";
import resources from "../pages/data/tilestemp.json";
import "./css/Tiles.css";

const ConfirmationModal = ({ isOpen, onConfirm, onCancel, message }) => {
  const yesButtonRef = useRef(null);
  const noButtonRef = useRef(null);
  const [focusedButton, setFocusedButton] = useState("yes");

  useEffect(() => {
    if (isOpen) {
      yesButtonRef.current?.focus(); // Focus "Yes" button instead of modal
    }
  }, [isOpen]);

  useEffect(() => {
    const buttonRef = focusedButton === "yes" ? yesButtonRef : noButtonRef;
    buttonRef.current?.focus();
  }, [focusedButton]);

  const handleKeyDown = useCallback(
    (e) => {
      const keyActions = {
        ArrowLeft: () => setFocusedButton("no"),
        ArrowRight: () => setFocusedButton("yes"),
        Enter: () => (focusedButton === "yes" ? onConfirm() : onCancel()),
        Escape: () => onCancel(),
        Tab: () => setFocusedButton((prev) => (prev === "yes" ? "no" : "yes")),
      };

      if (keyActions[e.key]) {
        e.preventDefault();
        keyActions[e.key]();
      }
    },
    [focusedButton, onConfirm, onCancel]
  );

  if (!isOpen) return null;

  const buttonStyle = (isActive) => ({
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "all 0.2s",
    outline: "none",
    ...(isActive
      ? {
          backgroundColor: "#3d8b40",
          color: "white",
          boxShadow: "0 0 0 2px white",
        }
      : {
          backgroundColor: "#f0f0f0",
          color: "#333",
        }),
  });

  return (
    <div
      className="modal-overlay"
      tabIndex="-1"
      onKeyDown={handleKeyDown}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
          width: "100%",
          maxWidth: "400px",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "25px 20px 20px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <button
            onClick={onCancel}
            style={{
              background: "none",
              border: "none",
              fontSize: "30px",
              cursor: "pointer",
              color: "#666",
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              alignSelf: "flex-end",
            }}
          >
            ×
          </button>
          <h3
            style={{
              marginTop: "0",
              marginBottom: "20px",
              fontSize: "18px",
              color: "#333",
            }}
          >
            {message || "Are you sure you've completed this resource?"}
          </h3>
          <div
            style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}
          >
            <button
              ref={noButtonRef}
              onClick={onCancel}
              style={buttonStyle(focusedButton === "no")}
            >
              No
            </button>
            <button
              ref={yesButtonRef}
              onClick={onConfirm}
              style={buttonStyle(focusedButton === "yes")}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tiles = () => {
  const navigate = useNavigate();
  const { id, step } = useParams();
  const [checkedResources, setCheckedResources] = useState([]);
  const [expandedPlaylist, setExpandedPlaylist] = useState(null);
  const [trackedPlaylists, setTrackedPlaylists] = useState([]);
  const [modalState, setModalState] = useState({
    isOpen: false,
    resourceId: null,
    action: null,
  });
  const [scrollPosition, setScrollPosition] = useState(0); // State to track scroll position

  // Memoized course and step data
  const { course, stepData } = useMemo(() => {
    const foundCourse = resources.find((course) => course.id === parseInt(id));
    return {
      course: foundCourse,
      stepData: foundCourse?.steps?.[step],
    };
  }, [id, step]);

  // Memoized available tabs
  const availableTabs = useMemo(() => {
    if (!stepData) return [];

    const tabs = [];
    const tabConfigs = [
      { id: "documentation", label: "Documentation", tabNumber: "1" },
      { id: "crashCourses", label: "Crash Courses", tabNumber: "2" },
      { id: "playlists", label: "Playlists", tabNumber: "3" },
      { id: "projects", label: "Projects", tabNumber: "4" },
    ];

    tabConfigs.forEach((tab) => {
      const hasResources =
        stepData[tab.id]?.resources?.length > 0 ||
        (tab.id === "projects" &&
          stepData.projects?.resources &&
          (Array.isArray(stepData.projects.resources) ||
            Object.values(stepData.projects.resources).some(
              (arr) => arr?.length > 0
            )));

      if (hasResources) tabs.push(tab);
    });

    return tabs;
  }, [stepData]);

  const [activeTab, setActiveTab] = useState(availableTabs[0]?.id || "");

  // Initialize tracked playlists
  useEffect(() => {
    if (stepData?.playlists?.resources) {
      const initialTracked = stepData.playlists.resources
        .map((playlist, index) =>
          playlist.type === "non-optional" ? index : null
        )
        .filter((index) => index !== null);
      setTrackedPlaylists(initialTracked);
    }
  }, [stepData]);

  // Update active tab when available tabs change
  useEffect(() => {
    if (
      availableTabs.length > 0 &&
      !availableTabs.find((tab) => tab.id === activeTab)
    ) {
      setActiveTab(availableTabs[0].id);
    }
  }, [availableTabs, activeTab]);

  // Restore scroll position after modal state changes
  useEffect(() => {
    if (!modalState.isOpen) {
      window.scrollTo({
        top: scrollPosition,
        behavior: "auto", // Use 'auto' to avoid smooth scrolling flicker
      });
    }
  }, [modalState.isOpen, scrollPosition]);

  // Memoized project structure check
  const hasProjectCategories = useMemo(() => {
    return (
      stepData?.projects?.resources &&
      !Array.isArray(stepData.projects.resources)
    );
  }, [stepData]);

  // Optimized progress calculation
  const calculateProgress = useCallback(
    (category) => {
      if (!stepData) return 0;

      const getCheckedCount = (prefix) =>
        checkedResources.filter((id) => id.startsWith(prefix)).length;

      const progressCalculators = {
        documentation: () => {
          const total = stepData.documentation?.resources?.length || 0;
          const checked = getCheckedCount("doc-");
          return total > 0 ? (checked / total) * 100 : 0;
        },
        crashCourses: () => {
          const total = stepData.crashCourses?.resources?.length || 0;
          const checked = getCheckedCount("course-");
          return total > 0 ? (checked / total) * 100 : 0;
        },
        playlists: () => {
          let total = 0;
          let checked = 0;
          stepData.playlists?.resources?.forEach((playlist, index) => {
            if (trackedPlaylists.includes(index)) {
              total += playlist.videos.length;
              checked += playlist.videos.filter((_, videoIndex) =>
                checkedResources.includes(`video-${index}-${videoIndex}`)
              ).length;
            }
          });
          return total > 0 ? (checked / total) * 100 : 0;
        },
        projects: () => {
          let total = 0;
          let checked = 0;

          if (hasProjectCategories) {
            const categories = ["basic", "intermediate", "advanced"];
            categories.forEach((category) => {
              const categoryResources =
                stepData.projects.resources[category] || [];
              total += categoryResources.length;
              checked += getCheckedCount(`project-${category}-`);
            });
          } else {
            total = stepData.projects?.resources?.length || 0;
            checked = getCheckedCount("project-");
          }

          return total > 0 ? (checked / total) * 100 : 0;
        },
      };

      return progressCalculators[category]?.() || 0;
    },
    [stepData, checkedResources, trackedPlaylists, hasProjectCategories]
  );

  // Optimized overall progress calculation
  const overallProgress = useMemo(() => {
    const tabCount = availableTabs.length;
    if (tabCount === 0) return 0;

    const progressValues = availableTabs.map((tab) =>
      calculateProgress(tab.id)
    );

    // Use weighted calculation for 4 tabs, equal weight otherwise
    if (tabCount === 4) {
      const weights = {
        playlists: 0.4,
        documentation: 0.25,
        projects: 0.25,
        crashCourses: 0.1,
      };
      return availableTabs.reduce(
        (sum, tab, index) =>
          sum + progressValues[index] * (weights[tab.id] || 0),
        0
      );
    }

    return (
      progressValues.reduce((sum, progress) => sum + progress, 0) / tabCount
    );
  }, [availableTabs, calculateProgress]);

  const handleCheckboxChange = useCallback(
    (id) => (e) => {
      e.preventDefault(); // Prevent default behavior to stop scrolling
      const isChecked = checkedResources.includes(id);

      if (isChecked) {
        setCheckedResources((prev) =>
          prev.filter((resourceId) => resourceId !== id)
        );
      } else {
        setScrollPosition(window.scrollY); // Save current scroll position
        setModalState({ isOpen: true, resourceId: id, action: "check" });
      }
    },
    [checkedResources]
  );

  const handleConfirm = useCallback(() => {
    if (modalState.action === "check") {
      setCheckedResources((prev) => [...prev, modalState.resourceId]);
      confetti({
        particleCount: 100,
        spread: 160,
        origin: { y: 0.6 },
      });
    }
    setModalState({ isOpen: false, resourceId: null, action: null });
  }, [modalState]);

  const handleCancel = useCallback(() => {
    setModalState({ isOpen: false, resourceId: null, action: null });
  }, []);

  const togglePlaylist = useCallback((playlistIndex) => {
    setExpandedPlaylist((prev) =>
      prev === playlistIndex ? null : playlistIndex
    );
  }, []);

  const toggleTrackedPlaylist = useCallback((playlistIndex) => {
    setTrackedPlaylists((prev) =>
      prev.includes(playlistIndex)
        ? prev.filter((index) => index !== playlistIndex)
        : [...prev, playlistIndex]
    );
  }, []);

  // Reusable components
  const ProgressBar = ({ category, label }) => {
    const progress = calculateProgress(category);
    return (
      <div style={{ marginBottom: "15px" }}>
        <div className="progress-bar-white">
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              backgroundColor: "#4caf50",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="progress-bar-percentage">
          {label}: {Math.round(progress)}%
        </div>
      </div>
    );
  };

  const ResourceTable = ({ items, resourcePrefix }) => (
    <table className="view-resources-table">
      <thead>
        <tr>
          <th>Done</th>
          <th>Sr. No.</th>
          <th>Name</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          const resourceId = `${resourcePrefix}-${index}`;
          return (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  checked={checkedResources.includes(resourceId)}
                  onChange={handleCheckboxChange(resourceId)}
                  style={{ transform: "scale(1.5)", cursor: "pointer" }}
                />
              </td>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  Visit Link
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  const ResourceDescription = ({ paragraph, pointsHeading, points }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [needsReadMore, setNeedsReadMore] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
      const paragraphElement =
        containerRef.current?.querySelector(".icon-paragraph");
      if (paragraphElement) {
        const lineHeight = parseInt(
          getComputedStyle(paragraphElement).lineHeight
        );
        const maxHeight = lineHeight * 2;
        setNeedsReadMore(paragraphElement.scrollHeight > maxHeight);
      }
    }, [paragraph]);

    return (
      <div ref={containerRef}>
        <div
          className="icon-paragraph"
          style={{
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: isExpanded ? "unset" : 2,
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
            whiteSpace: "normal",
          }}
        >
          {paragraph}
        </div>

        {isExpanded && (
          <div>
            <h5 className="career-requirements">{pointsHeading}</h5>
            <ul>
              {points.map((point, index) => (
                <li key={index} className="icon-paragraph">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        )}

        {needsReadMore && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              background: "none",
              border: "none",
              color: "blue",
              cursor: "pointer",
              padding: "5px 0",
              fontSize: "14px",
              fontWeight: "500",
              marginBottom: "15px",
            }}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    );
  };

  const PlaylistTrackingSelector = () => {
    const [showTracking, setShowTracking] = useState(false);

    return (
      <div
        className="playlist-tracking-selector"
        style={{
          backgroundColor: "#f8f9fa",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
          border: "1px solid #dee2e6",
        }}
      >
        <div
          onClick={() => setShowTracking(!showTracking)}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <h4 style={{ margin: 0 }}>Select Playlists to Track Progress</h4>
          <span
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              transform: showTracking ? "rotate(0deg)" : "rotate(90deg)",
              transition: "transform 0.2s ease",
            }}
          >
            {showTracking ? "−" : "+"}
          </span>
        </div>

        {showTracking && (
          <div
            style={{
              marginTop: "10px",
              padding: "10px",
              borderTop: "1px rgb(222, 226, 230) solid",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "15px",
                flexDirection: "column",
              }}
            >
              {stepData.playlists.resources.map((playlist, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="playlist-tracking-main">
                    <input
                      type="checkbox"
                      id={`track-playlist-${index}`}
                      checked={trackedPlaylists.includes(index)}
                      onChange={() => toggleTrackedPlaylist(index)}
                      style={{
                        transform: "scale(1.3)",
                        marginRight: "8px",
                        cursor: "pointer",
                      }}
                    />
                    <label
                      htmlFor={`track-playlist-${index}`}
                      style={{ cursor: "pointer", fontWeight: "500" }}
                    >
                      {playlist.title} ({playlist.type})
                    </label>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: "10px",
                fontStyle: "italic",
                color: "#6c757d",
              }}
            >
              Currently tracking: {trackedPlaylists.length} playlists
            </div>
          </div>
        )}
      </div>
    );
  };

  const PlaylistAccordion = ({ playlist, index }) => {
    const isExpanded = expandedPlaylist === index;
    const isTracked = trackedPlaylists.includes(index);
    const isSinglePlaylist = stepData.playlists.resources.length === 1;
    const playlistRef = useRef(null);

    useEffect(() => {
      if (isExpanded && playlistRef.current) {
        const navbarHeight = 80;
        const elementPosition = playlistRef.current.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, [isExpanded]);

    const playlistContent = (
      <div
        className="playlist-content"
        style={{
          padding: "15px",
          backgroundColor: "#fff",
          ...(isSinglePlaylist ? {} : { borderTop: "1px solid #e0e0e0" }),
        }}
      >
        <ResourceTable
          items={playlist.videos}
          resourcePrefix={`video-${index}`}
        />
      </div>
    );

    const playlistHeader = (
      <div
        className="playlist-header"
        style={{
          display: isSinglePlaylist ? "block" : "flex",
          justifyContent: isSinglePlaylist ? "flex-start" : "space-between",
          alignItems: "center",
          padding: "15px",
          backgroundColor: isSinglePlaylist
            ? "#f8f8f8"
            : isExpanded
            ? "#f0f0f0"
            : "#f8f8f8",
          cursor: isSinglePlaylist ? "default" : "pointer",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <h3
            className="progress-bar-percentage"
            style={{
              margin: 0,
              color: isExpanded ? "#2c3e50" : "#34495e",
            }}
          >
            {playlist.title} ({playlist.type})
          </h3>
          {isTracked && (
            <span
              style={{
                fontSize: "0.8em",
                backgroundColor: "#4caf50",
                color: "white",
                padding: "2px 8px",
                borderRadius: "10px",
              }}
            >
              Tracking
            </span>
          )}
        </div>
        {!isSinglePlaylist && (
          <span
            style={{
              fontSize: "20px",
              transition: "transform 0.2s ease",
              transform: isExpanded ? "rotate(0deg)" : "rotate(90deg)",
            }}
          >
            {isExpanded ? "−" : "+"}
          </span>
        )}
      </div>
    );

    return (
      <div
        ref={playlistRef}
        className="playlist-accordion"
        style={{
          marginBottom: "20px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <div
          onClick={isSinglePlaylist ? undefined : () => togglePlaylist(index)}
        >
          {playlistHeader}
        </div>
        {(isSinglePlaylist || isExpanded) && playlistContent}
      </div>
    );
  };

  // Render tab content
  const renderTabContent = () => {
    const tabData = stepData[activeTab];
    if (!tabData) return null;

    const commonProps = {
      paragraph: tabData.paragraph,
      pointsHeading: tabData["points-heading"],
      points: tabData.points,
    };

    switch (activeTab) {
      case "documentation":
        return (
          <div>
            <h4 className="tab-heading-first">Documentation</h4>
            <ResourceDescription {...commonProps} />
            <ProgressBar
              category="documentation"
              label="Documentation Progress"
            />
            <ResourceTable items={tabData.resources} resourcePrefix="doc" />
          </div>
        );

      case "crashCourses":
        return (
          <div>
            <h4 className="tab-heading-first">Crash Courses</h4>
            <ResourceDescription {...commonProps} />
            <ProgressBar
              category="crashCourses"
              label="Crash Courses Progress"
            />
            <ResourceTable items={tabData.resources} resourcePrefix="course" />
          </div>
        );

      case "playlists":
        return (
          <div>
            <h4 className="tab-heading-first">Playlists</h4>
            <ResourceDescription {...commonProps} />
            {tabData.resources.length > 1 && <PlaylistTrackingSelector />}
            <ProgressBar
              category="playlists"
              label="Playlist Videos Progress"
            />
            {tabData.resources.map((playlist, index) => (
              <PlaylistAccordion
                key={index}
                playlist={playlist}
                index={index}
              />
            ))}
          </div>
        );

      case "projects":
        return (
          <div>
            <h4 className="tab-heading-first">Projects</h4>
            <ResourceDescription {...commonProps} />
            <ProgressBar category="projects" label="Projects Progress" />

            {hasProjectCategories ? (
              <>
                {["basic", "intermediate", "advanced"].map((level) => {
                  const resources = tabData.resources[level];
                  if (!resources?.length) return null;

                  return (
                    <div key={level}>
                      <h3
                        className="project-heading"
                        style={{
                          marginTop: level === "basic" ? "0" : "30px",
                          textTransform: "capitalize",
                        }}
                      >
                        {level}
                      </h3>
                      <ResourceTable
                        items={resources}
                        resourcePrefix={`project-${level}`}
                      />
                    </div>
                  );
                })}
              </>
            ) : (
              <ResourceTable
                items={tabData.resources}
                resourcePrefix="project"
              />
            )}
          </div>
        );

      default:
        return null;
    }
  };

  // Error states
  if (!course || !stepData) {
    return (
      <div className="detailcard-container detailcard-container-tiles">
        <div className="apply-form-container">
          <h2 className="heading-secondary marginbottom">Resource Not Found</h2>
          <p className="paragraph-primary">
            The requested course or step could not be found.
          </p>
        </div>
      </div>
    );
  }

  if (availableTabs.length === 0) {
    return (
      <div className="detailcard-container detailcard-container-tiles">
        <div className="apply-form-container">
          <h2 className="heading-secondary marginbottom">{stepData.name}</h2>
          <p className="paragraph-primary">
            No resources available for this step.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="detailcard-container detailcard-container-tiles">
      <ConfirmationModal
        isOpen={modalState.isOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        message="Are you sure you've completed this resource?"
      />

      <div className="apply-form-container">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "12px",
          }}
        >
          <h2 className="heading-secondary marginbottom">{stepData.name}</h2>

          <div style={{ position: "relative", width: "50px", height: "50px" }}>
            <svg width="50" height="50">
              <circle
                cx="25"
                cy="25"
                r="20"
                stroke="#e6e6e6"
                strokeWidth="5"
                fill="none"
              />
              <circle
                cx="25"
                cy="25"
                r="20"
                stroke="#4caf50"
                strokeWidth="5"
                fill="none"
                strokeDasharray={2 * Math.PI * 20}
                strokeDashoffset={
                  2 * Math.PI * 20 * (1 - overallProgress / 100)
                }
                transform="rotate(-90 25 25)"
                strokeLinecap="round"
              />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="14"
                fill="#333"
              >
                {Math.round(overallProgress)}%
              </text>
            </svg>
          </div>
        </div>

        <p className="paragraph-primary" style={{ marginBottom: "20px" }}>
          {stepData.description}
        </p>

        <div className="tab-buttons tab-buttons-tiles">
          {availableTabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-item tab-item-tile tab-item-1 tab-item-1-tile ${
                activeTab === tab.id ? "active-tab" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </div>

        <div style={{ marginTop: "20px" }}>{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default Tiles;
