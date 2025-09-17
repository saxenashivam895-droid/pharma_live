import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import mumbai1 from "../assets/mumbai1.JPG";
import mumbai2 from "../assets/mumbai2.JPG";
import mumbai3 from "../assets/mumbai3.JPG";
import mumbai4 from "../assets/mumbai4.JPG";
import mumbai5 from "../assets/mumbai4.JPG";
import vector from "../assets/vector.png";

const ExpoShowcaseSection = () => {
  // Carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [mumbai1, mumbai2, mumbai3, mumbai4, mumbai5];

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );

 
  const [started, setStarted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    const currentRef = statsRef.current; // Capture the ref value
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef); // Use captured value
    };
  }, [started]);



  return (
    <section
      style={{
        background: "linear-gradient(to bottom right, #f4fdf6, #ffffff)",
        padding: "60px 0 30px 0",
      }}
      id="events"
    >
      <div className="container-fluid p-lg-5 p-3">
        {/* Header */}
        <div className="row align-items-start">
          <div className="col-lg-9 col-md-8 col-sm-12 mb-3">
            <h1 style={{ fontWeight: 400 }}>
              Pharma Live Expo{" "}
              <span style={{ color: "#000", fontWeight: 700 }}>
                Mumbai 2026 Exhibition
              </span>
            </h1>
            <p
              className="mt-3"
              style={{
                fontSize: "1rem",
                color: "#333",
              }}
            >
              Pharma Live Expo is the premier destination for showcasing
              innovative solutions and advancements in the pharmaceutical and
              healthcare sectors. It is the only event of its kind in India that
              focuses comprehensively on all aspects of the pharma and healthcare
              industry, bringing together professionals, innovators, and
              decision makers dedicated to advancing excellence in drug
              development, manufacturing, and healthcare delivery. Participating
              in the exhibition offers a wealth of opportunities to connect with
              industry leaders and showcase your products and services to a
              highly targeted audience.
            </p>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-12 d-flex justify-content-lg-end justify-content-md-start mt-3 mt-md-0">
            <button
              className="btn w-100 w-md-auto"
              style={{
                background: "linear-gradient(90deg, #2EAF4A 0%, #0E7F41 100%)",
                color: "#fff",
                borderRadius: "30px",
                padding: "10px 25px",
                fontWeight: "bold",
              }}
            >
              REGISTER NOW
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="row align-items-center mt-5">
          <div className="col-lg-7 col-md-12 mb-4 mb-lg-0 position-relative">
            <div
              className="carousel-container"
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "12px",
                backgroundColor: "#fff",
                height: "400px",
                boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
              }}
            >
              <div
                className="carousel-track"
                style={{
                  display: "flex",
                  height: "100%",
                  transition: "transform 0.6s ease-in-out",
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className="carousel-slide"
                    style={{ minWidth: "100%", height: "100%" }}
                  >
                    <img
                      src={image}
                      alt={`Expo ${index + 1}`}
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Arrows */}
              <button
                onClick={prevSlide}
                style={{
                  position: "absolute",
                  left: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.6)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: "42px",
                  height: "42px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  zIndex: 10,
                }}
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(0,0,0,0.6)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  width: "42px",
                  height: "42px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  zIndex: 10,
                }}
              >
                <FaChevronRight />
              </button>

              {/* Indicators */}
              <div
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "12px",
                  zIndex: 10,
                }}
              >
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    style={{
                      width: currentSlide === index ? "14px" : "12px",
                      height: currentSlide === index ? "14px" : "12px",
                      borderRadius: "50%",
                      border: currentSlide === index ? "2px solid #00B64D" : "1px solid #ccc",
                      background: currentSlide === index ? "#00B64D" : "#fff",
                      boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="col-lg-5 col-md-12 d-flex flex-column align-items-center">
            {[
              "Increase Brand Visibility",
              "Networking",
              "Get Unrivalled Knowledge",
              "Showcase Your Products",
              "Seal Valuable Contract",
            ].map((text, index) => (
              <div
                key={index}
                className="d-flex align-items-center w-100"
                style={{ marginBottom: "2rem" }}
              >
                <div className="d-flex justify-content-center align-items-center col-lg-3 gap-3">
                  <img src={vector} width={25} height={20} alt="bullet" />
                </div>
                <div className="d-flex justify-content-start col-lg-9">
                  <h6 className="mb-0 fw-bold">{text}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default ExpoShowcaseSection;
