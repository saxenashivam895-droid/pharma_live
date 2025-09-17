import React, { useState } from "react";
import empowering from "../assets/empowering.jpg";

function KnowledgeSummit() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile] = useState(false);

  const fullText = `The Knowledge Summit presents an unparalleled opportunity for innovative startups in the pharmaceutical industry to showcase their cutting-edge technologies, products, and services at the Pharma Live Expo 2026. This premier platform is designed to empower emerging entrepreneurs with visibility, networking opportunities, and growth prospects in the ever-evolving pharmaceutical sector. For the next generation of visionaries, this is more than an expo; it’s a gateway to innovation, collaboration, and industry transformation. 

Join us to connect with global leaders, investors, and pioneers, and take your revolutionary ideas to the world stage. 
We are continuously growing, and this year's new features include more exhibitor categories, interactive zones, live demos, and a dedicated pavilion for small and medium-sized businesses.`;

  const previewText = fullText.slice(0, 280) + "...";

  return (
    <section
      className="container-fluid p-5 text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.84), rgba(0, 0, 0, 0.84)), url(${empowering})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p
        style={{
          letterSpacing: "8%",
          fontSize: "24px",
          color: "rgba(216, 216, 216, 1)",
        }}
        className="fw-bold text-uppercase mt-5"
      >
        Knowledge Summit
      </p>

      <p style={{ color: "rgba(255, 255, 255, 0.5)", textAlign: "justify" }}>
        {isMobile ? (isExpanded ? fullText : previewText) : fullText}
      </p>

      {isMobile && (
        <p
          className="text-white"
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </p>
      )}
      {/* Register Button */}
      <button
        type="button"
        className="px-4 py-3 text-uppercase mt-5 text-white mb-5"
        style={{
          background: "linear-gradient(90deg, #2EAF4A 0%, #0E7F41 100%)",
          borderRadius: "100px",
          border: "none",
        }}
      >
        Register Now
      </button>
    </section>
  );
}

export default KnowledgeSummit;
