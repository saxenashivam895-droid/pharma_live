import {
  FaCapsules,
  FaTruck,
  FaBoxOpen,
  FaVials,
  FaSpa,
  FaCheckCircle,
} from "react-icons/fa";
import InsideShowCasing from "../assets/showcasing.png";

const InsideExpoSection = () => {
  const categories = [
    {
      title: "Pharmaceutical & Nutraceutical",
      icon: <FaCapsules size={30} color="#1e3565" />,
      desc: [
        "Formulations (Pharma/Nutra/Herbal)",
        "API & Excipient Manufacturers",
        "Biopharmaceuticals & Biosimilars",
        "CMOs, CDMOs, and Contract Research",
      ],
    },
    {
      title: "Packaging & Processing",
      icon: <FaBoxOpen size={30} color="#1e3565" />,
      desc: [
        "Pharma Packaging Machinery",
        "Inspection & Labeling Solutions",
        "Cleanroom Technology & Automation",
      ],
    },
    {
      title: "Logistics & Cold Chain",
      icon: <FaTruck size={30} color="#1e3565" />,
      desc: [
        "Cold Storage & Temperature Management",
        "Pharma Warehousing & IoT Solutions",
        "Last-Mile Delivery & Electric Vehicles",
      ],
    },
    {
      title: "Laboratory & Analytical",
      icon: <FaVials size={30} color="#1e3565" />,
      desc: [
        "HPLC, Chromatography, Spectroscopy",
        "Lab Equipment & Testing Solutions",
      ],
    },
    {
      title: "Cosmetics & Healthcare",
      icon: <FaSpa size={30} color="#1e3565" />,
      desc: [
        "Safety & Claims Testing Labs",
        "Personal Care & Wellness Solutions",
        "Dermatology & Aesthetic Research",
      ],
    },
  ];

  return (
    <section
      style={{
        background: `linear-gradient(to bottom, #ffffff, #f4f8fc)`,
        // ❌ removed dark bg image — clean white theme
        color: "#1e3565",
        padding: "90px 0",
      }}
      className="d-lg-flex align-items-lg-center"
      id="insights"
    >
      <div className="container-fluid p-lg-5 p-3 h-auto">
        {/* Main Heading */}
        <div
          className="mb-5 pb-3"
          style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
        >
          <h2 style={{ fontWeight: "300", color: "#333" }}>
            Inside the Expo:&nbsp;
            <span style={{ fontWeight: "700", color: "#1e3565" }}>
              Industries Participating in Pharma Live Expo 2026
            </span>
          </h2>
        </div>

        {/* Categories */}
        <div className="row justify-content-between mt-5 g-3 h-auto">
          {categories.map((cat, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4">
              <div className="h-100 text-center text-md-start">
                {cat.icon}
                <h6 className="category-title">{cat.title}</h6>
                <ul className="category-list">
                  {cat.desc.map((point, i) => (
                    <li key={i} className="category-item">
                      <FaCheckCircle className="category-icon" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .category-title {
          font-weight: 700;
          margin: 12px 0 16px 0;
          color: #1e3565;
        }

        .category-list {
          padding-left: 0;
          list-style: none;
          margin-bottom: 0;
        }

        .category-item {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 0.6rem;
          font-size: 15px;
          line-height: 1.6;
          color: #444;
          flex-wrap: nowrap;
        }

        .category-icon {
          font-size: 16px;
          color: #2eaf4a; /* ✅ green accent */
          flex-shrink: 0;
        }

        /* Small devices */
        @media (max-width: 767.98px) {
          .category-title {
            text-align: center;
          }
          .category-list {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .category-item {
            justify-content: flex-start;
            text-align: left;
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </section>
  );
};

export default InsideExpoSection;
