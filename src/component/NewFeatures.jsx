import { PiShootingStar } from "react-icons/pi";
import photo1 from "../assets/photo-1.jpg";
import blending2 from "../assets/blending-2.png";

function NewFeatures() {
  const featuresLeft = [
    "Startup Kiosk",
    "Global Buyer Delegations",
    "FPME Marketplace",
  ];
  const featuresRight = ["Expert-Led Sessions", "Amplified Networking"];

  return (
    <section
      className="container-fluid p-5"
      style={{
        backgroundColor: "#fff",
        backgroundImage: `url(${blending2})`,
        backgroundPosition: "left bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="row align-items-center g-4">
        {/* Left Column */}
        <div className="col-lg-6">
          {/* Tagline inside left column */}
          <div className="d-inline-block px-3 py-1 rounded-pill bg-light shadow-sm mb-3">
            <span
              className="fw-bold text-uppercase "
              style={{ letterSpacing: "2px", fontSize: "1rem" }}
            >
              Bigger, Bolder, Better
            </span>
          </div>

          <h1 className="fw-normal mb-4 h2 h-lg-1" style={{fontSize:"60px"}}>
            All-<span className="fw-semibold ">New Features</span>{" "}
            <br /> You Can't Miss
          </h1>

          <div className="row">
            <div className="col-md-6">
              {featuresLeft.map((item, i) => (
                <p
                  key={i}
                  className="fw-bold small py-2 d-flex align-items-center mb-1"
                >
                  <PiShootingStar className="text-warning me-2 fs-5" /> {item}
                </p>
              ))}
            </div>
            <div className="col-md-6">
              {featuresRight.map((item, i) => (
                <p
                  key={i}
                  className="fw-bold small py-2 d-flex align-items-center mb-1"
                >
                  <PiShootingStar className="text-warning me-2 fs-5" /> {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-6 text-center">
          <h1 className="fw-bold text-uppercase gradient-text mb-4 h3 h-lg-1">
            Bigger & Better
          </h1>
          <img
            src={photo1}
            alt="event"
            className="img-fluid rounded-3 shadow-sm"
            style={{ maxHeight: "350px", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}

export default NewFeatures;
