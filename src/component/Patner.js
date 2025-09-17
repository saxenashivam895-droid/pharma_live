import React, { useEffect, useRef, useState } from 'react';


// Import partner logos
import Partner1 from "../assets/zoho-logo-web.svg";
import Partner2 from "../assets/logo (1).png";
import Partner3 from "../assets/khyati-group.png";
import Partner4 from "../assets/logo (3).png";
import Partner5 from "../assets/india-phosphate-aipl-ujjain-newlogo (1).png";
import Partner6 from "../assets/logo (6).png";
import Partner7 from "../assets/collage2.png";
import Partner8 from "../assets/logo (8).png";
import Partner9 from "../assets/logo (9).png";
import Partner10 from "../assets/logo (10).png";
import Partner11 from "../assets/1505805588505.png";
import Partner12 from "../assets/jaynaLogo (1).png";
import Partner13 from "../assets/2nd 2.jpg";
import Partner14 from "../assets/503243617f1a0438572d222d14840ffc.jpeg";
import Partner15 from "../assets/63035b97a365cf00019c021c.png";
import Partner16 from "../assets/AC-Logo.png";
import Partner17 from "../assets/ACG.png";
import Partner18 from "../assets/Ami polymer 4.jpg";
import Partner19 from "../assets/Dossmegt-pvt-ltd-logo1-1-300x67.jpeg";
import Partner20 from "../assets/Doyen_HealthCare.png";
const PieChart = () => {

   const partnerLogos = [
    Partner1,
    Partner2,
    Partner3,
    Partner4,
    Partner5,
    Partner6,
    Partner7,
    Partner8,
    Partner9,
    Partner11,
    Partner10,
    Partner12,
    Partner13,
    Partner14,
    Partner15,
    Partner16,
    Partner17,
    Partner18,
    Partner19,
    Partner20,
  ];

  const scrollRef = useRef(null);
    const [, setScrollPosition] = useState(0);
    const animationRef = useRef(null);
  
    useEffect(() => {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer) return;
  
      const scrollWidth = scrollContainer.scrollWidth / 2;
      const scrollSpeed = 1;
  
      const animateScroll = () => {
        setScrollPosition((prev) => {
          const newPosition = (prev + scrollSpeed) % scrollWidth;
          scrollContainer.scrollLeft = newPosition;
          return newPosition;
        });
        animationRef.current = requestAnimationFrame(animateScroll);
      };
  
      animationRef.current = requestAnimationFrame(animateScroll);
  
      return () => {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      };
    }, []);
  
  return (
    <section>
      <div className="container-fluid p-lg-5 p-3 h-auto">


        
        {/* Partners Section */}
        <div
          className="pt-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <h3 className="text-center mb-5" style={{ fontWeight: "700" }}>
            OUR PAST PARTNERS
          </h3>

          <div
            ref={scrollRef}
            className="d-flex align-items-center overflow-hidden"
            style={{
              width: "100%",
              height: "160px", // increased container height
              position: "relative",
              margin: "20px 0",
            }}
          >
            <div
              className="d-flex"
              style={{ width: "max-content", gap: "40px" }} // little more gap between cards
            >
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div
                  key={`${index}-${logo}`}
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    width: "220px", // increased width
                    height: "130px", // increased height
                    background: "#fff",
                    borderRadius: "10px",
                    padding: "15px", // more padding
                    boxSizing: "border-box",
                  }}
                >
                  <img
                    src={logo}
                    alt={`Partner ${(index % partnerLogos.length) + 1}`}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 991.98px) {
          section {
            height: auto !important;
            padding-bottom: 40px;
          }
          .row.g-2 > div {
            margin-bottom: 1.5rem;
          }
        }

        @media (max-width: 767.98px) {
          .row.g-2 > div {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default PieChart
