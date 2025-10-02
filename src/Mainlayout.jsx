import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// =========================
// Layout Components
// =========================
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// =========================
// General Pages
// =========================
import Home from "./pages/Home";
import Guidance from "./pages/Guidance";
import Careers from "./pages/Careers";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import UpComing from "./pages/UpComing";
import Faq from "./pages/Faq";

// =========================
// Auth Pages
// =========================
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CompleteProfile from "./pages/CompleteProfile";
import MyProfile from "./pages/MyProfile";
import MyDashBoard from "./pages/MyDashBoard";

// =========================
// Resource Pages
// =========================
import Resources from "./pages/Resources";
import RoadMapsDetail from "./pages/RoadMapsDetail";
// import Titles from "./pages/Tiles";
import Titles from "./pages/Titles/Titles";

import ResumeDetail from "./pages/ResumeDetail";
import ResourcesExplanation from "./pages/ResourcesExplanation";
import RoadMapsExplanation from "./pages/sections/ResourcesPage/RoadMapsExplanation";
import AiExplanation from "./pages/sections/ResourcesPage/AiExplanation";
import ResumeExplanation from "./pages/sections/ResourcesPage/ResumeExplanation";

// =========================
// Blog Pages
// =========================
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";

// =========================
// Forms & Applications
// =========================
import ApplyForm from "./pages/ApplicationForm";

// =========================
// Legal Pages
// =========================
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// =========================
// Utilities
// =========================
import HtmlCssJsCompiler from "./pages/HtmlCssJsCompiler";
import CreateNote from "./pages/CreateNote";

// =========================
// Admin Pages
// =========================
import AdminLogin from "./admin/pages/AdminLogin";
import AdminLoginResetPassword from "./admin/pages/AdminLoginResetPassword";
import JoinWaitlist from "./pages/JoinWaitlist";
// =========================
// Community & Support Pages
// =========================
import WantToContribute from "./pages/sections/CommunityAndSupportPage/WantToContribute";
import ReportAnIssue from "./pages/sections/CommunityAndSupportPage/ReportAnIssue";
import RequestAResource from "./pages/sections/CommunityAndSupportPage/RequestAResource";
import ShareYourSuccessStory from "./pages/sections/CommunityAndSupportPage/ShareYourSuccessStory";
import ShareYourExperience from "./pages/sections/CommunityAndSupportPage/ShareYourExperience";
import JoinNewsletter from "./pages/sections/CommunityAndSupportPage/JoinNewsLetter";
import CommunityAndSupport from "./pages/CommunityAndSupport";
import SavedBlogs from "./pages/SavedBlogs";
import NotFound from "./pages/NotFound/NotFound";
// ============================================================
// Main Layout Component
// ============================================================
const MainLayout = () => {
  const location = useLocation();

  const hideLayoutRoutes = [
    "/login",
    "/signup",
    "/admin/login",
    "/admin/forgot-password",
    // "*",
  ];

  const shouldHideLayout = hideLayoutRoutes.includes(
    location.pathname.toLowerCase()
  );

  return (
    <>
      {!shouldHideLayout && <Navbar />}

      <Routes>
        {/* Core Routes */}
        <Route path="/saved-blogs" element={<SavedBlogs />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-dashboard" element={<MyDashBoard />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/forgot-password"
          element={<AdminLoginResetPassword />}
        />

        {/* Blog Routes */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />

        {/* Resources Section */}
        <Route path="/resources/roadmaps" element={<Resources />} />
        <Route path="/resources/resumes" element={<Resources />} />
        <Route path="/resources/ai-tools" element={<Resources />} />

        <Route
          path="/resources/roadmaps/roadmaps-explanation"
          element={<RoadMapsExplanation />}
        />
        <Route
          path="/resources/resumes/resumes-explanation"
          element={<ResumeExplanation />}
        />
        <Route
          path="/resources/ai-tools/ai-tools-explanation"
          element={<AiExplanation />}
        />

        <Route path="/resources/roadmaps/:id" element={<RoadMapsDetail />} />
        <Route path="/resources/roadmaps/:id/:step" element={<Titles />} />
        <Route path="/resources/resumes/:id" element={<ResumeDetail />} />
        <Route
          path="/resources/roadmaps/resources-explanation"
          element={<ResourcesExplanation />}
        />

        {/* Other Pages */}
        <Route path="/guidance" element={<Guidance />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/careers/application-form/:id" element={<ApplyForm />} />

        {/* Legal Pages */}
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        {/* Utility Pages */}
        <Route path="/upcoming" element={<UpComing />} />
        <Route
          path="/compilers/html-css-js-compiler"
          element={<HtmlCssJsCompiler />}
        />
        <Route path="/create-note" element={<CreateNote />} />
        <Route path="/Upcoming/join-waitlist/:id" element={<JoinWaitlist />} />

        {/* =========================
            Community & Support Routes
        ========================= */}

        <Route
          path="/community-support/:formId"
          element={<CommunityAndSupport />}
        />
        <Route path="/community-support" element={<CommunityAndSupport />} />
        <Route
          path="/community-support/want-to-contribute"
          element={<WantToContribute />}
        />
        <Route
          path="/community-support/share-your-success-story"
          element={<ShareYourSuccessStory />}
        />
        <Route
          path="/community-support/share-your-experience"
          element={<ShareYourExperience />}
        />
        <Route
          path="/community-support/report-an-issue"
          element={<ReportAnIssue />}
        />
        <Route
          path="/community-support/request-a-resource"
          element={<RequestAResource />}
        />
        <Route
          path="/community-support/join-news-letter"
          element={<JoinNewsletter />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!shouldHideLayout && <Footer />}
    </>
  );
};

export default MainLayout;
