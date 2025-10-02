import React from "react";
import HeroIcons from "./sections/MainPage/HeroIcons";
import HeroUpper from "./sections/MainPage/HeroUpper";
import HeroMainContent from "./sections/MainPage/HeroMainContent";
import HeroTestimonials from "./sections/MainPage/HeroTestimonials";
import HeroCompanyLogo from "./sections/MainPage/HeroCompanyLogo";
import HeroNote from "./sections/MainPage/HeroNote";
import HeroCollegeLogo from "./sections/MainPage/HeroCollegeLogo";
import ComparisonSection from "./sections/MainPage/ComparisonSection";
import FAQSection from "./sections/MainPage/FAQSection";
import JoinJourney from "./sections/MainPage/JoinJourney";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <main className="main">
        <HeroUpper></HeroUpper>
        <HeroCollegeLogo></HeroCollegeLogo>
        <HeroIcons></HeroIcons>
        <ComparisonSection></ComparisonSection>
        <HeroMainContent></HeroMainContent>
        <HeroCompanyLogo></HeroCompanyLogo>
        <HeroTestimonials></HeroTestimonials>
        <FAQSection></FAQSection>
        <HeroNote></HeroNote>
        <JoinJourney></JoinJourney>
      </main>
    </>
  );
};

export default Home;
