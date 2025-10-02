import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import data from "../../data/dataaitools.json";
import "../../css/AiContainer.css";

const AiContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const toolsPerPage = 5;

  const filteredTools = data.filter((tool) =>
    tool.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTools.length / toolsPerPage);
  const indexOfLastTool = currentPage * toolsPerPage;
  const indexOfFirstTool = indexOfLastTool - toolsPerPage;
  const currentTools = filteredTools.slice(indexOfFirstTool, indexOfLastTool);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage !== currentPage) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="ai-container" style={{ gap: "20px", alignItems: "center" }}>
      <p className="paragraph-primary center" style={{ marginBottom: "0px" }}>
        AI Tools That Supercharge Your Learning Journey{" "}
        <span
          style={{
            color: "blue",
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={() => navigate("/resources/ai-tools/ai-tools-explanation")}
        >
          Read More
        </span>
        .
      </p>

      <div
        className="ai-searchbar"
        style={{
          borderRadius: "100px",
          padding: "7px 20px",
          marginBottom: "35px",
        }}
      >
        <input
          type="text"
          placeholder="Search AI Tools..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
        <span className="ai-search-icon">
          <FaSearch />
        </span>
      </div>

      <div className="ai-upper-section">
        {currentTools.length > 0 && (
          <div
            style={{
              height: "0.2px",
              backgroundColor: "#6a737d",
              width: "100%",
              margin: "10px 0",
            }}
          />
        )}

        <section className="ai-cards">
          {currentTools.length > 0 ? (
            currentTools.map((tool, idx) => (
              <div
                key={idx}
                className="ai-card"
                style={{ cursor: "default" }} // card not clickable now
              >
                <img src={tool.image} alt={tool.title} />
                <div className="ai-right-info">
                  <div className="course-info mantain-size">
                    <h2 className="margin-bottom text-align aiheading">
                      {tool.title}
                    </h2>
                  </div>
                  <div className="ai-info">
                    <ul className="icon-paragraph fontsmall">
                      {tool.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className="btn hero-button1 ai-link-button"
                    onClick={() => window.open(tool.link, "_blank")}
                  >
                    Website Link
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-tools-found">
              <h3>No AI tools found</h3>
              <p>
                {searchTerm
                  ? `No AI tools match your search for "${searchTerm}". Try adjusting your search terms.`
                  : "No AI tools are currently available. Please check back later."}
              </p>
            </div>
          )}
        </section>

        {currentTools.length > 0 && (
          <div
            style={{
              height: "0.2px",
              backgroundColor: "#6a737d",
              width: "100%",
              margin: "10px 0",
            }}
          />
        )}
      </div>

      {currentTools.length > 0 && (
        <div className="pagination-controls">
          <button
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
          >
            «
          </button>
          <span>
            {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              handlePageChange(Math.min(currentPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      )}
    </div>
  );
};

export default AiContainer;
