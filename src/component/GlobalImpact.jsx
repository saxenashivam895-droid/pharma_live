import CountUp from "react-countup";
import group from "../assets/Group.svg";
import group1 from "../assets/Group (1).svg";
import group2 from "../assets/Group (2).svg";
import group3 from "../assets/Group (3).svg";
import group4 from "../assets/Group-4.svg";

function GlobalImpact() {
  return (
    <section
      id="discover"
      className="container-fluid text-white p-5"
      style={{
    background:
      "linear-gradient(135deg, #0b1a2a 0%, #11233e 25%, #164b83 65%, #1e3565 100%)",
  }}
    >
      {/* Title Section */}
      <p
        style={{ letterSpacing: "8%" }}
        className="fw-bold text-uppercase mt-3 text-info"
      >
        Pharma Live 2025 in Numbers
      </p>
      <h1 className="fw-normal responsive-heading">
        A <span className="fw-semibold text-info">Global Impact</span> in Every
        Stat
      </h1>
      <p
        style={{
          color: "rgba(255, 255, 255, 0.75)",
          maxWidth: "850px",
          lineHeight: "28px",
        }}
        className="mt-3"
      >
        Last year, our exhibitors at Pharma Live Expo received an overwhelming
        response with high quality visitors and meaningful business
        interactions. Many found the event to be a valuable platform for
        networking, showcasing innovations, and exploring new opportunities,
        making it a truly worthwhile experience to attend.
      </p>

      {/* Stats Section */}
      <div
        className="d-flex flex-column flex-md-row justify-content-evenly text-center"
        style={{ paddingTop: "5rem", paddingBottom: "4rem", gap: "2rem" }}
      >
        {[
          { img: group, number: 50, label: "BUYER", sub: "Delegations from CIS, ME, FE, Latam & Africa" },
          { img: group1, number: 175, label: "EXHIBITORS", sub: "Showcased a Wide Range of Products & Services" },
          { img: group2, number: 50, label: "COUNTRIES", sub: "Represented, Reflecting the Global Appeal" },
          { img: group3, number: 9500, label: "ATTENDEES", sub: "From Diverse Backgrounds" },
          { img: group4, number: 50, label: "INDUSTRY", sub: "Renowned Speakers" },
        ].map((item, i) => (
          <div key={i}>
            <div className="d-flex justify-content-center">
              <img
                style={{ height: "62px", width: "60px" }}
                src={item.img}
                alt="icons"
              />
            </div>
            <p className="fw-bold fs-4 mt-2 mb-1">
              <CountUp end={item.number} />+ {item.label}
            </p>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.65)",
                lineHeight: "26px",
                fontSize: "0.95rem",
              }}
            >
              {item.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GlobalImpact;
