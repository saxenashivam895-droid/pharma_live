import React, { useState } from "react";
import {
  FaUsers,
  FaGlobe,
  FaMicrophone,
  FaBuilding,
  FaFlag,
} from "react-icons/fa";
import HeroSectionImage from "../assets/hero-section.png";
import ContactUsModal from "./ContactModal";

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const sectionStyle = {
    backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(${HeroSectionImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    color: "white",
    position: "relative",
    paddingTop: "100px",
    paddingBottom: "100px",
  };

  const greenText = { color: "#2eaf4a" };

  const smallText = {
    letterSpacing: "2px",
    fontSize: "1rem",
    fontWeight: "700",
    textTransform: "uppercase",
    color: "#fff",
  };

  const handleSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Thank you for registering!");
    setModalOpen(false);
  };

  return (
    <section style={sectionStyle} id="home">
      <div className="container-fluid text-start px-3 px-lg-5">
        {/* Top Tagline */}
        <p style={smallText}>PHARMA LIVE EXPO & SUMMIT 2026</p>

        {/* Main Heading */}
        <h1
          className="fw-bold"
          style={{
            fontSize: "clamp(2.4rem, 5vw, 4.8rem)", // responsive font size
            lineHeight: "1.2",
          }}
        >
          The Premier <br />
          <span style={greenText}>Pharma & Biotech</span> <br />
          Gathering
        </h1>

        {/* Description */}
        <p className="mt-3 fs-6 fs-md-5" style={{ maxWidth: "720px" }}>
          Pharma Live Expo is the definitive gathering for the pharmaceutical and
          healthcare industries.{" "}
          <br className="d-none d-md-block" /> Leaders, innovators, and businesses
          converge to showcase the latest breakthroughs.
        </p>

        {/* CTA Button */}
        <button
          className="btn register-btn mt-4 me-3"
          onClick={() => setModalOpen(true)}
        >
          Register Now
        </button>

        {/* ✅ Small Highlights with Icons */}
        <div className="d-flex flex-wrap gap-4 mt-5">
          <div className="highlight-box d-flex align-items-center gap-2">
            <FaUsers className="text-success fs-3" />
            <span>15,000+ Attendees</span>
          </div>
          <div className="highlight-box d-flex align-items-center gap-2">
            <FaBuilding className="text-success fs-3" />
            <span>200+ Exhibitors</span>
          </div>
          <div className="highlight-box d-flex align-items-center gap-2">
            <FaGlobe className="text-success fs-3" />
            <span>100+ International Delegates</span>
          </div>
          <div className="highlight-box d-flex align-items-center gap-2">
            <FaMicrophone className="text-success fs-3" />
            <span>50+ Speakers</span>
          </div>
          {/* ✅ New Highlight */}
          <div className="highlight-box d-flex align-items-center gap-2">
            <FaFlag className="text-success fs-3" />
            <span>30+ Countries</span>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactUsModal
        show={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
      />

      {/* ✅ Extra Styles */}
      <style jsx>{`
        .register-btn {
          background: linear-gradient(90deg, #2eaf4a, #1e3565);
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          border: none;
          border-radius: 50px;
          padding: 12px 32px;
          transition: all 0.3s ease-in-out;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
        }

        .register-btn:hover {
          background: linear-gradient(90deg, #1e3565, #2eaf4a);
          transform: scale(1.05);
          box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.4);
        }

        /* ✅ Highlight Box Styling */
        .highlight-box {
          font-size: clamp(1rem, 2vw, 1.3rem);
          font-weight: 700;
          background: rgba(255, 255, 255, 0.08);
          padding: 10px 18px;
          border-radius: 12px;
          transition: all 0.3s ease-in-out;
        }

        .highlight-box:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
