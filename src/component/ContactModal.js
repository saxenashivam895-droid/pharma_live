import React, { useEffect, useState } from "react";
import Select from "react-select";
import { State } from "country-state-city";

const ContactUsModal = ({ show, onClose, onSubmit }) => {
  const [stateOptions, setStateOptions] = useState([]);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  // Load Indian states dynamically
  useEffect(() => {
    const states = State.getStatesOfCountry("IN").map((s) => ({
      value: s.name,
      label: s.name,
    }));
    setStateOptions(states);
  }, []);

  if (!show) return null;

  return (
    <>
      <style>{`
        .contact-modal-label {
          color: #0E7F41;
          font-weight: 600;
        }
        .contact-modal-input:focus, 
        .contact-modal-textarea:focus, 
        .contact-modal-select:focus {
          border-color: #2EAF4A !important;
          box-shadow: 0 0 0 0.25rem rgba(46, 175, 74, 0.25) !important;
          outline: none !important;
        }
        .contact-modal-submit-btn {
          background: linear-gradient(90deg, #2EAF4A 0%, #0E7F41 100%);
          border: none;
          color: white;
          font-weight: 600;
          width: 100%;
        }
        .modal-footer { padding: 1rem 1rem; justify-content: flex-start; }
      `}</style>

      <div
        className="modal-backdrop fade show"
        onClick={onClose}
        style={{ zIndex: 1040 }}
      />
      <div
        className="modal fade show d-flex align-items-center justify-content-center"
        style={{ zIndex: 1050, minHeight: "100vh" }}
      >
        <div className="modal-dialog" style={{ maxWidth: "800px" }}>
          <div className="modal-content">
            <div className="modal-header flex-column align-items-start" style={{ position: "relative" }}>
              <h5 className="modal-title">Register Now</h5>
              {/* Subtitle below Register Now */}
              <small
                style={{
                  fontSize: "0.95rem",
                  fontWeight: "500",
                  color: "#2EAF4A",
                  marginLeft:"2px"
                }}
              >
                Pharma Live Expo 2026
              </small>
              <button
                type="button"
                onClick={onClose}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  cursor: "pointer",
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  backgroundImage:
                    "linear-gradient(90deg, #2EAF4A 0%, #0E7F41 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                &times;
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const data = Object.fromEntries(formData.entries());
                onSubmit(data);
              }}
            >
              <div className="modal-body">
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label contact-modal-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control contact-modal-input"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label contact-modal-label">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control contact-modal-input"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label contact-modal-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control contact-modal-input"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label contact-modal-label">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      className="form-control contact-modal-input"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label contact-modal-label">Location</label>
                    <Select
                      name="location"
                      options={stateOptions}
                      className="contact-modal-select"
                      placeholder="Select state"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label contact-modal-label">Type</label>
                    <select
                      name="type"
                      className="form-select contact-modal-select"
                      required
                    >
                      <option value="">Select type</option>
                      <option value="exhibitor">Exhibitor</option>
                      <option value="visitor">Visitor</option>
                      <option value="sponsorship">Sponsorship</option>
                      <option value="media">Media</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="submit" className="btn contact-modal-submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsModal;
