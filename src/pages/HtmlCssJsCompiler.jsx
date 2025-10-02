// // // import React from "react";
// // // import Editor from "@monaco-editor/react";
// // // import useLocalStorage from "../hooks/useLocalStorage";
// // // import "./css/HtmlCssJsCompiler.css";

// // // function HtmlCssJsCompiler() {
// // //   const [HTML, setHTML] = useLocalStorage("HTML", "");
// // //   const [CSS, setCSS] = useLocalStorage("CSS", "");
// // //   const [JS, setJS] = useLocalStorage("JS", "");
// // //   const [active, setActive] = React.useState("HTML");
// // //   const [darkMode, setDarkMode] = useLocalStorage("darkMode", true);

// // //   const IFRAMECODE = `
// // //   <html>
// // //     <head>
// // //       <style>
// // //         ${CSS}
// // //       </style>
// // //     </head>
// // //     <body>
// // //       ${HTML}
// // //       <script>
// // //         ${JS}
// // //       </script>
// // //     </body>
// // //   </html>
// // //   `;

// // //   // Function to handle editor mounting
// // //   function handleEditorDidMount(editor, monaco) {
// // //     // Update the theme when the editor mounts
// // //     monaco.editor.setTheme(darkMode ? "vs-dark" : "light");
// // //   }

// // //   // Effect to update editor theme when darkMode changes
// // //   React.useEffect(() => {
// // //     if (window.monaco) {
// // //       window.monaco.editor.setTheme(darkMode ? "vs-dark" : "light");
// // //     }
// // //   }, [darkMode]);

// // //   const handleReset = () => {
// // //     setHTML("");
// // //     setCSS("");
// // //     setJS("");
// // //     localStorage.removeItem("HTML");
// // //     localStorage.removeItem("CSS");
// // //     localStorage.removeItem("JS");
// // //   };

// // //   const editorOptions = {
// // //     automaticLayout: true,
// // //     fontSize: 16,
// // //     minimap: { enabled: false },
// // //     scrollBeyondLastLine: false,
// // //     theme: darkMode ? "vs-dark" : "light",
// // //     roundedSelection: true,
// // //     autoIndent: "full",
// // //     bracketPairColorization: {
// // //       enabled: true,
// // //       independentColorPoolPerBracketType: true,
// // //     },
// // //   };

// // //   const buttonStyle = (language) => ({
// // //     padding: "8px 16px",
// // //     margin: "0 5px",
// // //     border: "none",
// // //     borderRadius: "4px",
// // //     background:
// // //       active === language
// // //         ? darkMode
// // //           ? "#1e1e1e"
// // //           : "#f0f0f0"
// // //         : darkMode
// // //         ? "#333"
// // //         : "#ddd",
// // //     color: active === language ? "#ec4899" : darkMode ? "#fff" : "#333",
// // //     cursor: "pointer",
// // //     fontWeight: "bold",
// // //     transition: "all 0.3s ease",
// // //   });

// // //   const actionButtonStyle = {
// // //     padding: "8px 16px",
// // //     margin: "0 5px",
// // //     border: "none",
// // //     borderRadius: "4px",
// // //     background: darkMode ? "#de3f33" : "#de3f33",
// // //     color: "#fff",
// // //     cursor: "pointer",
// // //     fontWeight: "bold",
// // //     transition: "all 0.3s ease",
// // //   };

// // //   const appContainerStyle = {
// // //     padding: "20px",
// // //     backgroundColor: darkMode ? "#1e1e1e" : "#f5f5f5",
// // //     color: darkMode ? "#fff" : "#333",
// // //     minHeight: "100vh",
// // //     position: "relative",
// // //   };

// // //   const editorContainerStyle = {
// // //     display: "flex",
// // //     border: darkMode ? "1px solid #333" : "1px solid #ddd",
// // //     borderRadius: "8px",
// // //     overflow: "hidden",
// // //     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
// // //   };

// // //   const editorWrapperStyle = {
// // //     width: "100%",
// // //     backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
// // //   };

// // //   return (
// // //     <div style={appContainerStyle}>
// // //       <div className="compiler-heading">
// // //         <h2 className="courseheading">
// // //           HTML, CSS & Javascript Compiler &rarr;
// // //         </h2>
// // //         <button onClick={() => setDarkMode(!darkMode)}>
// // //           {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
// // //         </button>
// // //       </div>

// // //       <div style={editorContainerStyle} className="compiler-container">
// // //         <div style={editorWrapperStyle} className="compiler-blue-border">
// // //           <div
// // //             style={{
// // //               padding: "10px",
// // //               backgroundColor: darkMode ? "#252526" : "#f0f0f0",
// // //               borderBottom: darkMode ? "1px solid #333" : "1px solid #ddd",
// // //               display: "flex",
// // //               justifyContent: "space-between",
// // //             }}
// // //           >
// // //             <div>
// // //               <button
// // //                 onClick={() => setActive("HTML")}
// // //                 style={buttonStyle("HTML")}
// // //               >
// // //                 HTML
// // //               </button>
// // //               <button
// // //                 onClick={() => setActive("CSS")}
// // //                 style={buttonStyle("CSS")}
// // //               >
// // //                 CSS
// // //               </button>
// // //               <button onClick={() => setActive("JS")} style={buttonStyle("JS")}>
// // //                 JavaScript
// // //               </button>
// // //             </div>
// // //             <button onClick={handleReset} style={actionButtonStyle}>
// // //               Reset All
// // //             </button>
// // //           </div>

// // //           {active === "HTML" && (
// // //             <Editor
// // //               height="60vh"
// // //               language="html"
// // //               value={HTML}
// // //               onChange={(value) => setHTML(value)}
// // //               options={editorOptions}
// // //               onMount={handleEditorDidMount}
// // //               theme={darkMode ? "vs-dark" : "light"}
// // //             />
// // //           )}
// // //           {active === "CSS" && (
// // //             <Editor
// // //               height="60vh"
// // //               language="css"
// // //               value={CSS}
// // //               onChange={(value) => setCSS(value)}
// // //               options={editorOptions}
// // //               onMount={handleEditorDidMount}
// // //               theme={darkMode ? "vs-dark" : "light"}
// // //             />
// // //           )}
// // //           {active === "JS" && (
// // //             <Editor
// // //               height="60vh"
// // //               language="javascript"
// // //               value={JS}
// // //               onChange={(value) => setJS(value)}
// // //               options={editorOptions}
// // //               onMount={handleEditorDidMount}
// // //               theme={darkMode ? "vs-dark" : "light"}
// // //             />
// // //           )}
// // //         </div>

// // //         <div
// // //           className="compiler-blue-border"
// // //           style={{
// // //             width: "100%",
// // //             backgroundColor: "white",
// // //           }}
// // //         >
// // //           <iframe
// // //             title="result"
// // //             height={"100%"}
// // //             width={"100%"}
// // //             srcDoc={IFRAMECODE}
// // //             style={{ border: "none" }}
// // //           />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default HtmlCssJsCompiler;

// // import React from "react";
// // import Editor from "@monaco-editor/react";
// // import useLocalStorage from "../hooks/useLocalStorage";
// // import "./css/HtmlCssJsCompiler.css";

// // function HtmlCssJsCompiler() {
// //   const [HTML, setHTML] = useLocalStorage("HTML", "");
// //   const [CSS, setCSS] = useLocalStorage("CSS", "");
// //   const [JS, setJS] = useLocalStorage("JS", "");
// //   const [active, setActive] = React.useState("HTML");
// //   const [darkMode, setDarkMode] = useLocalStorage("darkMode", true);
// //   const [isMobile, setIsMobile] = React.useState(false);

// //   const IFRAMECODE = `
// //   <html>
// //     <head>
// //       <style>
// //         ${CSS}
// //       </style>
// //     </head>
// //     <body>
// //       ${HTML}
// //       <script>
// //         ${JS}
// //       </script>
// //     </body>
// //   </html>
// //   `;

// //   // Function to handle editor mounting
// //   function handleEditorDidMount(editor, monaco) {
// //     // Update the theme when the editor mounts
// //     monaco.editor.setTheme(darkMode ? "vs-dark" : "light");
// //   }

// //   // Effect to update editor theme when darkMode changes
// //   React.useEffect(() => {
// //     if (window.monaco) {
// //       window.monaco.editor.setTheme(darkMode ? "vs-dark" : "light");
// //     }
// //   }, [darkMode]);

// //   // Check if window width is less than or equal to 900px
// //   React.useEffect(() => {
// //     const handleResize = () => {
// //       setIsMobile(window.innerWidth >= 1000);
// //     };

// //     window.addEventListener("resize", handleResize);
// //     handleResize(); // Call on component mount

// //     return () => {
// //       window.removeEventListener("resize", handleResize);
// //     };
// //   }, []);

// //   const handleReset = () => {
// //     setHTML("");
// //     setCSS("");
// //     setJS("");
// //     localStorage.removeItem("HTML");
// //     localStorage.removeItem("CSS");
// //     localStorage.removeItem("JS");
// //   };

// //   const editorOptions = {
// //     automaticLayout: true,
// //     fontSize: 16,
// //     minimap: { enabled: false },
// //     scrollBeyondLastLine: false,
// //     theme: darkMode ? "vs-dark" : "light",
// //     roundedSelection: true,
// //     autoIndent: "full",
// //     bracketPairColorization: {
// //       enabled: true,
// //       independentColorPoolPerBracketType: true,
// //     },
// //   };

// //   const buttonStyle = (language) => ({
// //     padding: "8px 16px",
// //     margin: "0 5px",
// //     border: "none",
// //     borderRadius: "4px",
// //     background:
// //       active === language
// //         ? darkMode
// //           ? "#1e1e1e"
// //           : "#f0f0f0"
// //         : darkMode
// //         ? "#333"
// //         : "#ddd",
// //     color: active === language ? "#ec4899" : darkMode ? "#fff" : "#333",
// //     cursor: "pointer",
// //     fontWeight: "bold",
// //     transition: "all 0.3s ease",
// //   });

// //   const actionButtonStyle = {
// //     padding: "8px 16px",
// //     margin: "0 5px",
// //     border: "none",
// //     borderRadius: "4px",
// //     background: darkMode ? "#de3f33" : "#de3f33",
// //     color: "#fff",
// //     cursor: "pointer",
// //     fontWeight: "bold",
// //     transition: "all 0.3s ease",
// //   };

// //   const appContainerStyle = {
// //     padding: "20px",
// //     backgroundColor: darkMode ? "#1e1e1e" : "#f5f5f5",
// //     color: darkMode ? "#fff" : "#333",
// //     minHeight: "100vh",
// //     position: "relative",
// //   };

// //   const editorContainerStyle = {
// //     display: "flex",
// //     border: darkMode ? "1px solid #333" : "1px solid #ddd",
// //     borderRadius: "8px",
// //     overflow: "hidden",
// //     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
// //   };

// //   const editorWrapperStyle = {
// //     width: "100%",
// //     backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
// //   };

// //   if (!isMobile) {
// //     return (
// //       <div style={appContainerStyle}>
// //         <h2 style={{ fontSize: "25px", margin: "40px", textAlign: "center" }}>
// //           Your device is not compatible with the compiler
// //         </h2>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div style={appContainerStyle}>
// //       <div className="compiler-heading">
// //         <h2 className="courseheading">
// //           HTML, CSS & Javascript Compiler &rarr;
// //         </h2>
// //         <button onClick={() => setDarkMode(!darkMode)}>
// //           {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
// //         </button>
// //       </div>

// //       <div style={editorContainerStyle} className="compiler-container">
// //         <div style={editorWrapperStyle} className="compiler-blue-border">
// //           <div
// //             style={{
// //               padding: "10px",
// //               backgroundColor: darkMode ? "#252526" : "#f0f0f0",
// //               borderBottom: darkMode ? "1px solid #333" : "1px solid #ddd",
// //               display: "flex",
// //               justifyContent: "space-between",
// //             }}
// //           >
// //             <div>
// //               <button
// //                 onClick={() => setActive("HTML")}
// //                 style={buttonStyle("HTML")}
// //               >
// //                 HTML
// //               </button>
// //               <button
// //                 onClick={() => setActive("CSS")}
// //                 style={buttonStyle("CSS")}
// //               >
// //                 CSS
// //               </button>
// //               <button onClick={() => setActive("JS")} style={buttonStyle("JS")}>
// //                 JavaScript
// //               </button>
// //             </div>
// //             <button onClick={handleReset} style={actionButtonStyle}>
// //               Reset All
// //             </button>
// //           </div>

// //           {active === "HTML" && (
// //             <Editor
// //               height="60vh"
// //               language="html"
// //               value={HTML}
// //               onChange={(value) => setHTML(value)}
// //               options={editorOptions}
// //               onMount={handleEditorDidMount}
// //               theme={darkMode ? "vs-dark" : "light"}
// //             />
// //           )}
// //           {active === "CSS" && (
// //             <Editor
// //               height="60vh"
// //               language="css"
// //               value={CSS}
// //               onChange={(value) => setCSS(value)}
// //               options={editorOptions}
// //               onMount={handleEditorDidMount}
// //               theme={darkMode ? "vs-dark" : "light"}
// //             />
// //           )}
// //           {active === "JS" && (
// //             <Editor
// //               height="60vh"
// //               language="javascript"
// //               value={JS}
// //               onChange={(value) => setJS(value)}
// //               options={editorOptions}
// //               onMount={handleEditorDidMount}
// //               theme={darkMode ? "vs-dark" : "light"}
// //             />
// //           )}
// //         </div>

// //         <div
// //           className="compiler-blue-border"
// //           style={{
// //             width: "100%",
// //             backgroundColor: "white",
// //           }}
// //         >
// //           <iframe
// //             title="result"
// //             height={"100%"}
// //             width={"100%"}
// //             srcDoc={IFRAMECODE}
// //             style={{ border: "none" }}
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default HtmlCssJsCompiler;

// /* */

// import React from "react";
// import Editor from "@monaco-editor/react";
// import useLocalStorage from "../hooks/useLocalStorage";
// import "./css/HtmlCssJsCompiler.css";

// function HtmlCssJsCompiler() {
//   const [HTML, setHTML] = useLocalStorage("HTML", "");
//   const [CSS, setCSS] = useLocalStorage("CSS", "");
//   const [JS, setJS] = useLocalStorage("JS", "");
//   const [active, setActive] = React.useState("HTML");
//   const [darkMode, setDarkMode] = useLocalStorage("darkMode", true);
//   const [isMobile, setIsMobile] = React.useState(false);
//   const [htmlErrors, setHtmlErrors] = React.useState([]);

//   const IFRAMECODE = `
//   <html>
//     <head>
//       <style>
//         ${CSS}
//         .error-display {
//           position: fixed;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           background: ${darkMode ? "#2a0d0d" : "#ffebee"};
//           color: ${darkMode ? "#ff8a8a" : "#d32f2f"};
//           padding: 10px;
//           border-top: 2px solid ${darkMode ? "#ff8a8a" : "#d32f2f"};
//           max-height: 30%;
//           overflow-y: auto;
//           z-index: 1000;
//           font-family: Arial, sans-serif;
//         }
//         .error-display h4 {
//           margin: 0 0 8px 0;
//         }
//         .error-display ul {
//           margin: 0;
//           padding-left: 20px;
//         }
//         .error-display li {
//           margin-bottom: 4px;
//         }
//       </style>
//     </head>
//     <body>
//       ${HTML}
//       ${
//         htmlErrors.length > 0
//           ? `
//         <div class="error-display">
//           <h4>HTML Errors:</h4>
//           <ul>
//             ${htmlErrors
//               .map(
//                 (error) => `
//               <li>Line ${error.startLineNumber}: ${error.message}</li>
//             `
//               )
//               .join("")}
//           </ul>
//         </div>
//       `
//           : ""
//       }
//       <script>
//         window.onerror = function(message, source, lineno, colno, error) {
//           const errorDiv = document.createElement('div');
//           errorDiv.style.cssText = 'color: red; padding: 10px; border: 1px solid red; margin: 10px; background: #ffeeee;';
//           errorDiv.textContent = 'JavaScript Runtime Error: ' + message + ' (line ' + lineno + ')';
//           document.body.appendChild(errorDiv);
//           return true;
//         };
//         try {
//           ${JS}
//         } catch (error) {
//           const errorDiv = document.createElement('div');
//           errorDiv.style.cssText = 'color: red; padding: 10px; border: 1px solid red; margin: 10px; background: #ffeeee;';
//           errorDiv.textContent = 'JavaScript Error: ' + error.message;
//           document.body.appendChild(errorDiv);
//           console.error(error);
//         }
//       </script>
//     </body>
//   </html>
//   `;

//   function handleEditorDidMount(editor, monaco) {
//     monaco.editor.setTheme(darkMode ? "vs-dark" : "light");

//     monaco.languages.html.htmlDefaults.setOptions({
//       validate: true,
//       suggest: { html5: true },
//     });

//     monaco.languages.css.cssDefaults.setOptions({
//       validate: true,
//     });

//     monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
//       noSemanticValidation: false,
//       noSyntaxValidation: false,
//     });
//   }

//   React.useEffect(() => {
//     if (window.monaco) {
//       window.monaco.editor.setTheme(darkMode ? "vs-dark" : "light");
//     }
//   }, [darkMode]);

//   React.useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth >= 1000);
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handleReset = () => {
//     setHTML("");
//     setCSS("");
//     setJS("");
//     setHtmlErrors([]);
//     localStorage.removeItem("HTML");
//     localStorage.removeItem("CSS");
//     localStorage.removeItem("JS");
//   };

//   const editorOptions = {
//     automaticLayout: true,
//     fontSize: 16,
//     minimap: { enabled: false },
//     scrollBeyondLastLine: false,
//     theme: darkMode ? "vs-dark" : "light",
//     roundedSelection: true,
//     autoIndent: "full",
//     bracketPairColorization: {
//       enabled: true,
//       independentColorPoolPerBracketType: true,
//     },
//   };

//   const buttonStyle = (language) => ({
//     padding: "8px 16px",
//     margin: "0 5px",
//     border: "none",
//     borderRadius: "4px",
//     background:
//       active === language
//         ? darkMode
//           ? "#1e1e1e"
//           : "#f0f0f0"
//         : darkMode
//         ? "#333"
//         : "#ddd",
//     color: active === language ? "#ec4899" : darkMode ? "#fff" : "#333",
//     cursor: "pointer",
//     fontWeight: "bold",
//     transition: "all 0.3s ease",
//   });

//   const actionButtonStyle = {
//     padding: "8px 16px",
//     margin: "0 5px",
//     border: "none",
//     borderRadius: "4px",
//     background: darkMode ? "#de3f33" : "#de3f33",
//     color: "#fff",
//     cursor: "pointer",
//     fontWeight: "bold",
//     transition: "all 0.3s ease",
//   };

//   const appContainerStyle = {
//     padding: "20px",
//     backgroundColor: darkMode ? "#1e1e1e" : "#f5f5f5",
//     color: darkMode ? "#fff" : "#333",
//     minHeight: "100vh",
//     position: "relative",
//   };

//   const editorContainerStyle = {
//     display: "flex",
//     border: darkMode ? "1px solid #333" : "1px solid #ddd",
//     borderRadius: "8px",
//     overflow: "hidden",
//     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//   };

//   const editorWrapperStyle = {
//     width: "100%",
//     backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
//   };

//   if (!isMobile) {
//     return (
//       <div style={appContainerStyle}>
//         <h2 style={{ fontSize: "25px", margin: "40px", textAlign: "center" }}>
//           Your device is not compatible with the compiler
//         </h2>
//       </div>
//     );
//   }

//   return (
//     <div style={appContainerStyle}>
//       <div className="compiler-heading">
//         <h2 className="courseheading">
//           HTML, CSS & Javascript Compiler &rarr;
//         </h2>
//         <button onClick={() => setDarkMode(!darkMode)}>
//           {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
//         </button>
//       </div>

//       <div style={editorContainerStyle} className="compiler-container">
//         <div style={editorWrapperStyle} className="compiler-blue-border">
//           <div
//             style={{
//               padding: "10px",
//               backgroundColor: darkMode ? "#252526" : "#f0f0f0",
//               borderBottom: darkMode ? "1px solid #333" : "1px solid #ddd",
//               display: "flex",
//               justifyContent: "space-between",
//             }}
//           >
//             <div>
//               <button
//                 onClick={() => setActive("HTML")}
//                 style={buttonStyle("HTML")}
//               >
//                 HTML
//               </button>
//               <button
//                 onClick={() => setActive("CSS")}
//                 style={buttonStyle("CSS")}
//               >
//                 CSS
//               </button>
//               <button onClick={() => setActive("JS")} style={buttonStyle("JS")}>
//                 JavaScript
//               </button>
//             </div>
//             <button onClick={handleReset} style={actionButtonStyle}>
//               Reset All
//             </button>
//           </div>

//           {active === "HTML" && (
//             <Editor
//               height="60vh"
//               language="html"
//               value={HTML}
//               onChange={(value) => setHTML(value)}
//               options={editorOptions}
//               onMount={handleEditorDidMount}
//               theme={darkMode ? "vs-dark" : "light"}
//               onValidate={(markers) => {
//                 setHtmlErrors(markers);
//               }}
//             />
//           )}
//           {active === "CSS" && (
//             <Editor
//               height="60vh"
//               language="css"
//               value={CSS}
//               onChange={(value) => setCSS(value)}
//               options={editorOptions}
//               onMount={handleEditorDidMount}
//               theme={darkMode ? "vs-dark" : "light"}
//             />
//           )}
//           {active === "JS" && (
//             <Editor
//               height="60vh"
//               language="javascript"
//               value={JS}
//               onChange={(value) => setJS(value)}
//               options={editorOptions}
//               onMount={handleEditorDidMount}
//               theme={darkMode ? "vs-dark" : "light"}
//             />
//           )}
//         </div>

//         <div
//           className="compiler-blue-border"
//           style={{
//             width: "100%",
//             backgroundColor: darkMode ? "#1e1e1e" : "white",
//             position: "relative",
//           }}
//         >
//           <iframe
//             title="result"
//             height={"100%"}
//             width={"100%"}
//             srcDoc={IFRAMECODE}
//             style={{ border: "none" }}
//             sandbox="allow-scripts allow-same-origin"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HtmlCssJsCompiler;

import React from "react";
import Editor from "@monaco-editor/react";
import useLocalStorage from "../hooks/useLocalStorage";
import "./css/HtmlCssJsCompiler.css";

function HtmlCssJsCompiler() {
  const [HTML, setHTML] = useLocalStorage("HTML", "");
  const [CSS, setCSS] = useLocalStorage("CSS", "");
  const [JS, setJS] = useLocalStorage("JS", "");
  const [active, setActive] = React.useState("HTML");
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", true);
  const [isMobile, setIsMobile] = React.useState(false);
  const [htmlErrors, setHtmlErrors] = React.useState([]);
  const [cssErrors, setCssErrors] = React.useState([]);
  const [jsErrors, setJsErrors] = React.useState([]);
  const [showOutput, setShowOutput] = React.useState(false);
  const [compiledCode, setCompiledCode] = React.useState("");

  const hasErrors =
    htmlErrors.length > 0 || cssErrors.length > 0 || jsErrors.length > 0;

  const generateIframeCode = () => {
    return `
      <html>
        <head>
          <style>
            ${CSS}
            .error-display {
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
              background: ${darkMode ? "#2a0d0d" : "#ffebee"};
              color: ${darkMode ? "#ff8a8a" : "#d32f2f"};
              padding: 10px;
              border-top: 2px solid ${darkMode ? "#ff8a8a" : "#d32f2f"};
              max-height: 30%;
              overflow-y: auto;
              z-index: 1000;
              font-family: Arial, sans-serif;
            }
            .error-display h4 {
              margin: 0 0 8px 0;
            }
            .error-display ul {
              margin: 0;
              padding-left: 20px;
            }
            .error-display li {
              margin-bottom: 4px;
            }
          </style>
        </head>
        <body>
          ${HTML}
          ${
            htmlErrors.length > 0
              ? `
            <div class="error-display">
              <h4>HTML Errors:</h4>
              <ul>
                ${htmlErrors
                  .map(
                    (error) => `
                  <li>Line ${error.startLineNumber}: ${error.message}</li>
                `
                  )
                  .join("")}
              </ul>
            </div>
          `
              : ""
          }
          <script>
            window.onerror = function(message, source, lineno, colno, error) {
              const errorDiv = document.createElement('div');
              errorDiv.style.cssText = 'color: red; padding: 10px; border: 1px solid red; margin: 10px; background: #ffeeee;';
              errorDiv.textContent = 'JavaScript Runtime Error: ' + message + ' (line ' + lineno + ')';
              document.body.appendChild(errorDiv);
              return true;
            };
            try {
              ${JS}
            } catch (error) {
              const errorDiv = document.createElement('div');
              errorDiv.style.cssText = 'color: red; padding: 10px; border: 1px solid red; margin: 10px; background: #ffeeee;';
              errorDiv.textContent = 'JavaScript Error: ' + error.message;
              document.body.appendChild(errorDiv);
              console.error(error);
            }
          </script>
        </body>
      </html>
    `;
  };

  function handleEditorDidMount(editor, monaco) {
    monaco.editor.setTheme(darkMode ? "vs-dark" : "light");

    monaco.languages.html.htmlDefaults.setOptions({
      format: {
        tabSize: 2,
        insertSpaces: true,
        wrapLineLength: 80,
        unformatted: '""',
        contentUnformatted: "pre,code,textarea",
        indentInnerHtml: true,
        preserveNewLines: true,
        maxPreserveNewLines: null,
        indentHandlebars: true,
        endWithNewline: false,
        extraLiners: "head, body, /html",
        wrapAttributes: "auto",
      },
      suggest: {
        html5: true,
      },
    });

    monaco.languages.css.cssDefaults.setOptions({
      validate: true,
      lint: {
        compatibleVendorPrefixes: "ignore",
        vendorPrefix: "warning",
        duplicateProperties: "warning",
        emptyRules: "warning",
        importStatement: "ignore",
        boxModel: "ignore",
        universalSelector: "ignore",
        zeroUnits: "ignore",
        fontFaceProperties: "warning",
        hexColorLength: "error",
        argumentsInColorFunction: "error",
        unknownProperties: "warning",
        ieHack: "ignore",
        unknownVendorSpecificProperties: "ignore",
        propertyIgnoredDueToDisplay: "warning",
        important: "ignore",
        float: "ignore",
        idSelector: "ignore",
      },
    });

    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false,
      diagnosticCodesToIgnore: [2792, 2304, 2588, 2584],
    });
  }

  React.useEffect(() => {
    if (window.monaco) {
      window.monaco.editor.setTheme(darkMode ? "vs-dark" : "light");
    }
  }, [darkMode]);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 1000);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleReset = () => {
    setHTML("");
    setCSS("");
    setJS("");
    setHtmlErrors([]);
    setCssErrors([]);
    setJsErrors([]);
    setShowOutput(false);
    setCompiledCode("");
    localStorage.removeItem("HTML");
    localStorage.removeItem("CSS");
    localStorage.removeItem("JS");
  };

  const handleCompile = () => {
    const newCode = generateIframeCode();
    setCompiledCode(newCode);
    setShowOutput(!hasErrors);
  };

  const editorOptions = {
    automaticLayout: true,
    fontSize: 16,
    minimap: { enabled: false },
    scrollBeyondLastLine: false,
    theme: darkMode ? "vs-dark" : "light",
    roundedSelection: true,
    autoIndent: "full",
    bracketPairColorization: {
      enabled: true,
      independentColorPoolPerBracketType: true,
    },
  };

  const buttonStyle = (language) => ({
    padding: "8px 16px",
    margin: "0 5px",
    border: "none",
    borderRadius: "4px",
    background:
      active === language
        ? darkMode
          ? "#1e1e1e"
          : "#f0f0f0"
        : darkMode
        ? "#333"
        : "#ddd",
    color: active === language ? "#ec4899" : darkMode ? "#fff" : "#333",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  });

  const actionButtonStyle = {
    padding: "8px 16px",
    margin: "0 5px",
    border: "none",
    borderRadius: "4px",
    background: darkMode ? "#de3f33" : "#de3f33",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  };

  const compileButtonStyle = {
    padding: "8px 16px",
    margin: "0 5px",
    border: "none",
    borderRadius: "4px",
    background: darkMode ? "#4CAF50" : "#4CAF50",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  };

  const errorButtonStyle = {
    padding: "8px 16px",
    margin: "0 5px",
    border: "none",
    borderRadius: "4px",
    background: darkMode ? "#f44336" : "#f44336",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.3s ease",
  };

  const appContainerStyle = {
    padding: "20px",
    backgroundColor: darkMode ? "#1e1e1e" : "#f5f5f5",
    color: darkMode ? "#fff" : "#333",
    minHeight: "100vh",
    position: "relative",
  };

  const editorContainerStyle = {
    display: "flex",
    border: darkMode ? "1px solid #333" : "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const editorWrapperStyle = {
    width: "100%",
    backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
  };

  if (!isMobile) {
    return (
      <div style={appContainerStyle}>
        <h2 style={{ fontSize: "25px", margin: "40px", textAlign: "center" }}>
          Your device is not compatible with the compiler
        </h2>
      </div>
    );
  }

  return (
    <div style={appContainerStyle}>
      <div className="compiler-heading">
        <h2 className="courseheading">
          HTML, CSS & Javascript Compiler &rarr;
        </h2>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <div style={editorContainerStyle} className="compiler-container">
        <div style={editorWrapperStyle} className="compiler-blue-border">
          <div
            style={{
              padding: "10px",
              backgroundColor: darkMode ? "#252526" : "#f0f0f0",
              borderBottom: darkMode ? "1px solid #333" : "1px solid #ddd",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <button
                onClick={() => setActive("HTML")}
                style={buttonStyle("HTML")}
              >
                HTML
              </button>
              <button
                onClick={() => setActive("CSS")}
                style={buttonStyle("CSS")}
              >
                CSS
              </button>
              <button onClick={() => setActive("JS")} style={buttonStyle("JS")}>
                JavaScript
              </button>
            </div>
            <div>
              <button onClick={handleCompile} style={compileButtonStyle}>
                Compile
              </button>
              <button onClick={handleReset} style={actionButtonStyle}>
                Reset All
              </button>
            </div>
          </div>

          {active === "HTML" && (
            <Editor
              height="60vh"
              language="html"
              value={HTML}
              onChange={(value) => setHTML(value)}
              options={editorOptions}
              onMount={handleEditorDidMount}
              theme={darkMode ? "vs-dark" : "light"}
              onValidate={(markers) => {
                setHtmlErrors(markers);
              }}
            />
          )}
          {active === "CSS" && (
            <Editor
              height="60vh"
              language="css"
              value={CSS}
              onChange={(value) => setCSS(value)}
              options={editorOptions}
              onMount={handleEditorDidMount}
              theme={darkMode ? "vs-dark" : "light"}
              onValidate={(markers) => {
                setCssErrors(markers);
              }}
            />
          )}
          {active === "JS" && (
            <Editor
              height="60vh"
              language="javascript"
              value={JS}
              onChange={(value) => setJS(value)}
              options={editorOptions}
              onMount={handleEditorDidMount}
              theme={darkMode ? "vs-dark" : "light"}
              onValidate={(markers) => {
                setJsErrors(markers);
              }}
            />
          )}
        </div>

        {showOutput && compiledCode ? (
          <div
            className="compiler-blue-border"
            style={{
              width: "100%",
              backgroundColor: darkMode ? "#1e1e1e" : "white",
              position: "relative",
            }}
          >
            <iframe
              title="result"
              height={"100%"}
              width={"100%"}
              srcDoc={compiledCode}
              style={{ border: "none" }}
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        ) : (
          <div
            className="compiler-blue-border"
            style={{
              width: "100%",
              backgroundColor: darkMode ? "#1e1e1e" : "white",
              color: darkMode ? "#fff" : "#333",
              padding: "20px",
              overflow: "auto",
            }}
          >
            {hasErrors ? (
              <>
                <h3>Errors:</h3>
                {htmlErrors.length > 0 && (
                  <div>
                    <h4>HTML Errors:</h4>
                    <ul>
                      {htmlErrors.map((error, index) => (
                        <li key={index}>
                          Line {error.startLineNumber}: {error.message}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {cssErrors.length > 0 && (
                  <div>
                    <h4>CSS Errors:</h4>
                    <ul>
                      {cssErrors.map((error, index) => (
                        <li key={index}>
                          Line {error.startLineNumber}: {error.message}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {jsErrors.length > 0 && (
                  <div>
                    <h4>JavaScript Errors:</h4>
                    <ul>
                      {jsErrors.map((error, index) => (
                        <li key={index}>
                          Line {error.startLineNumber}: {error.message}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <h3>Click "Compile" to see your output</h3>
                <p>
                  Your compiled code will appear here after you click the
                  Compile button
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default HtmlCssJsCompiler;
