import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/CommunityAndSupport.css";
import JoinNewsletter from "./sections/CommunityAndSupportPage/JoinNewsLetter";
import WantToContribute from "./sections/CommunityAndSupportPage/WantToContribute";
import ReportAnIssue from "./sections/CommunityAndSupportPage/ReportAnIssue";
import RequestAResource from "./sections/CommunityAndSupportPage/RequestAResource";
import ShareYourExperience from "./sections/CommunityAndSupportPage/ShareYourExperience";
import ShareYourSuccessStory from "./sections/CommunityAndSupportPage/ShareYourSuccessStory";

// COMMUNITY tab forms
const communityForms = [
  {
    id: "want-to-contribute",
    title: "Want to Contribute?",
    component: WantToContribute,
    description: "Share your expertise and help grow our platform",
  },
  {
    id: "share-your-success-story",
    title: "Share Your Success Story",
    component: ShareYourSuccessStory,
    description: "Inspire others with your journey and achievements",
  },
  {
    id: "share-your-experience",
    title: "Share Your Experience",
    component: ShareYourExperience,
    description: "Help others learn from your insights and feedback",
  },
];

// SUPPORT tab forms
const supportForms = [
  {
    id: "report-an-issue",
    title: "Report an Issue",
    component: ReportAnIssue,
    description: "Help us improve by reporting any problems",
  },
  {
    id: "request-a-resource",
    title: "Request a Resource",
    component: RequestAResource,
    description: "Tell us what learning materials you need",
  },
  {
    id: "join-news-letter",
    title: "Join Newsletter",
    component: JoinNewsletter,
    description: "Stay updated with latest opportunities and news",
  },
];

function CommunityAndSupport() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialFormId = searchParams.get("form");

  const [activeTab, setActiveTab] = useState("community");
  const [activeForm, setActiveForm] = useState(communityForms[0]);

  useEffect(() => {
    const formFromUrl =
      communityForms.find((f) => f.id === initialFormId) ||
      supportForms.find((f) => f.id === initialFormId);

    if (formFromUrl) {
      setActiveForm(formFromUrl);
      setActiveTab(
        communityForms.some((f) => f.id === formFromUrl.id)
          ? "community"
          : "support"
      );
    } else {
      // Set default form based on active tab
      const defaultForm =
        activeTab === "community" ? communityForms[0] : supportForms[0];
      setActiveForm(defaultForm);
      navigate(`?form=${defaultForm.id}`, { replace: true });
    }
  }, [initialFormId, navigate, activeTab]);

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Set the first form of the selected tab as active
    const firstForm = tab === "community" ? communityForms[0] : supportForms[0];
    setActiveForm(firstForm);
    navigate(`?form=${firstForm.id}`);
  };

  const handleFormClick = (form, tab) => {
    setActiveForm(form);
    setActiveTab(tab);
    navigate(`?form=${form.id}`);
    window.scrollTo(0, 0);
  };

  const FormComponent = activeForm?.component;

  return (
    <div className="community-support-container-custom">
      {/* Toast Container for all notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ marginTop: "70px" }} // Add margin to avoid overlap with fixed headers
      />

      <div className="geometric-shape-custom triangle-custom"></div>
      <div className="geometric-shape-custom circle-custom"></div>
      <div className="line-structure-custom horizontal-custom"></div>
      <div className="line-structure-custom vertical-custom"></div>
      <div className="line-structure-custom diagonal-custom"></div>

      <div className="community-support-main-custom">
        <header className="community-support-header-custom">
          <h1 className="community-support-title-custom">
            Community & Support
          </h1>
          <p className="allparagraph">
            Connect with our community, share your experiences, or get help with
            any issues you're facing. We're here to support your journey!
          </p>
        </header>

        <div className="tabs-container-custom">
          <div className="tabs-custom">
            <button
              className={`tab-button-custom ${
                activeTab === "community" ? "active-custom" : ""
              }`}
              onClick={() => handleTabChange("community")}
            >
              <span className="tab-icon">👥</span>
              COMMUNITY
            </button>
            <button
              className={`tab-button-custom ${
                activeTab === "support" ? "active-custom" : ""
              }`}
              onClick={() => handleTabChange("support")}
            >
              <span className="tab-icon">🛟</span>
              SUPPORT
            </button>
          </div>

          <div className="tab-content-custom">
            {activeTab === "community" && (
              <div className="forms-grid-custom">
                {communityForms.map((form) => (
                  <div
                    key={form.id}
                    className={`form-card-custom ${
                      activeForm.id === form.id ? "active-custom" : ""
                    }`}
                    onClick={() => handleFormClick(form, "community")}
                  >
                    <div className="form-card-header">
                      <h3>{form.title}</h3>
                      <div
                        className={`form-indicator ${
                          activeForm.id === form.id ? "active" : ""
                        }`}
                      ></div>
                    </div>
                    <p className="form-card-description">{form.description}</p>
                    <div className="form-card-action">
                      {activeForm.id === form.id ? (
                        <span className="active-indicator">
                          ✓ Currently Viewing
                        </span>
                      ) : (
                        <span>Click to open form →</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "support" && (
              <div className="forms-grid-custom">
                {supportForms.map((form) => (
                  <div
                    key={form.id}
                    className={`form-card-custom ${
                      activeForm.id === form.id ? "active-custom" : ""
                    }`}
                    onClick={() => handleFormClick(form, "support")}
                  >
                    <div className="form-card-header">
                      <h3>{form.title}</h3>
                      <div
                        className={`form-indicator ${
                          activeForm.id === form.id ? "active" : ""
                        }`}
                      ></div>
                    </div>
                    <p className="form-card-description">{form.description}</p>
                    <div className="form-card-action">
                      {activeForm.id === form.id ? (
                        <span className="active-indicator">
                          ✓ Currently Viewing
                        </span>
                      ) : (
                        <span>Click to open form →</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {FormComponent && (
          <div className="active-form-container-custom">
            <div className="form-header-custom">
              <h2>{activeForm.title}</h2>
              <p>{activeForm.description}</p>
            </div>
            <FormComponent />
          </div>
        )}
      </div>
    </div>
  );
}

export default CommunityAndSupport;
