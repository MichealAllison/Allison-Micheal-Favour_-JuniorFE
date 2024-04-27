import Footer from "../components/Layout/Footer";
import HeroSection from "../components/PageSections/Hero";
import ResultsSection from "../components/PageSections/Results";
import SearchSection from "../components/PageSections/Search";

const Home = () => {
  return (
    <div className="main max-w-[1440px] mx-auto px-2">
      <HeroSection />
      <SearchSection />
      <ResultsSection />
      <Footer />
    </div>
  );
};

export default Home;
