import {
  FaLightbulb,
  FaHandshake,
  FaBullhorn,
  FaFileContract,
  FaChalkboardTeacher,
  FaPercent,
} from "react-icons/fa";
import bgImage from "../assets/blending-3.png"; // your background

function WhyExhibitSection() {
  const reasons = [
    {
      icon: <FaLightbulb className="text-warning fs-2" />,
      title: "Showcase Innovations",
      text: "Display your products to 15,000+ attendees, 200+ exhibitors, and 100+ international delegates from 50+ countries.",
    },
    {
      icon: <FaHandshake className="text-primary fs-2" />,
      title: "Unmatched Networking",
      text: "Connect with regulators, industry leaders, and decision-makers from CIS, Africa, Latin America, and Asia.",
    },
    {
      icon: <FaBullhorn className="text-danger fs-2" />,
      title: "Boost Brand Visibility",
      text: "Gain exposure in front of pharma manufacturers, CMOs, CDMOs, API producers, and logistics experts.",
    },
    {
      icon: <FaFileContract className="text-success fs-2" />,
      title: "Seal Business Deals",
      text: "Engage in exclusive buyer-seller meets and explore new export opportunities.",
    },
    {
      icon: <FaChalkboardTeacher className="text-info fs-2" />,
      title: "Knowledge & Growth",
      text: "Attend specialized workshops, roundtables, and the Knowledge Summit on Empowering MSMEs for Exports.",
    },
    {
      icon: <FaPercent className="text-success fs-2" />,
      title: "80% MSME Subsidy",
      text: "Avail financial benefits under the MSME-PMS Scheme to maximize ROI.",
    },
  ];

  return (
    <section
      className="py-5"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="exbihit"
    >
      <div className="container">
        <div className="text-center mb-5 text-dark">
          <p
            className="fw-bold text-uppercase mb-2"
            style={{ letterSpacing: "2px",fontSize:"30px" }}
          >
            Why Exhibit at
          </p>
          <h1 className="fw-bold text-uppercase" style={{fontSize:"40px" }}>Pharma Live Expo 2026</h1>
        </div>

        <div className="row g-4">
          {reasons.map((reason, idx) => (
            <div className="col-12 col-md-6 col-lg-4" key={idx}>
              <div className="card shadow-sm border-0 rounded-4 h-100 text-center p-4">
                <div className="mb-3">{reason.icon}</div>
                <h6 className="fw-bold mb-2">{reason.title}</h6>
                <p className="mb-0 small text-muted">{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyExhibitSection;
