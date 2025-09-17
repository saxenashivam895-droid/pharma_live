import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactDetails = () => {
  const contacts = [
    {
      title: "SPACE BOOKING",
      name: "Lalit Kaushal",
      phone: "+91 8679103393",
      email: "lalit@icexpoindia.com",
    },
    {
      title: "DELEGATE ENQUIRY",
      name: "Abhishek Sharma",
      phone: "+91 9958097807",
      email: "abhishek@icexpoindia.com",
    },
    {
      title: "SPONSORSHIP & ASSOCIATION OPPORTUNITIES",
      name: "Raj",
      phone: "+91 8860258188",
      email: "marketing@icexpoindia.com",
    },
  ];

  return (
    <div className="py-5" style={{ backgroundColor: "#1e3565" }}>
      <div className="container">
        <h2 className="text-start mb-4 fw-bold text-white">Contact Us</h2>
        <div className="row g-4">
          {contacts.map((contact, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12">
              <div
                className="card h-100 border-0 shadow-lg text-white"
                style={{
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #11233e, #164b83, #1e3565)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="card-header fw-bold text-center"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    border: "none",
                    color: "#fff",
                  }}
                >
                  {contact.title}
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title mb-2">{contact.name}</h5>
                  <p className="mb-1">
                    <FaPhoneAlt className="me-2 text-white " />
                    {contact.phone}
                  </p>
                  <p className="mb-0">
                    <FaEnvelope className="me-2 text-white" />
                    {contact.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
