import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css"
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import InsideExpoSection from "./component/InsideExpoSection";
import ExpoShowcaseSection from "./component/ExpoShowcaseSection";
import CountryList from "./component/CountryList";
import GlobalImpact from "./component/GlobalImpact";
import KnowledgeSummit from "./component/KnowledgeSummit";
import NewFeatures from "./component/NewFeatures";
import PricingSection from "./component/PricingSection";
import SecureSpot from "./component/SecureSpot";
import PieChart from "./component/Patner";
import ContactDetails from "./component/ContactDetails";
import KnowledgeChart from "./component/KnowledgeChart";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <InsideExpoSection />
      <KnowledgeChart />
      <ExpoShowcaseSection />

       <GlobalImpact />
      <NewFeatures />
      <CountryList />
      <KnowledgeSummit />
      <PricingSection />
      <SecureSpot />
      <PieChart />
      <ContactDetails />

      <footer id="about" className="container-fluid p-4" style={{ backgroundColor: 'rgba(5, 33, 47, 1)' }}>
        <div className="row text-white text-center g-3 g-md-5 justify-content-center">
          <div className="col-4 col-md-auto">About</div>
          <div className="col-4 col-md-auto">Insights</div>
          <div className="col-4 col-md-auto">Events</div>
          <div className="col-4 col-md-auto">Discover</div>
          <div className="col-4 col-md-auto">Other Events</div>
        </div>

        <div className="mt-4 px-5 mb-0">
          <span style={{borderBottom: "0.9px solid rgba(255, 255, 255, 0.13)", display: 'block'}}></span>
          <p className="text-center mt-3 mb-0 copyright-text" style={{color: "rgba(255, 255, 255, 0.5)"}}>copyright@2025 ICEXPO. All rights reserved.</p>
        </div>

      </footer>
    </>
  );
}
export default App;
