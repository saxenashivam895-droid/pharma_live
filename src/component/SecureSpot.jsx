import event from "../assets/event-2.jpg"
function SecureSpot() {

    return (

        <section className="container-fluid py-5 p-md-5" style={{ backgroundColor: 'rgba(233, 239, 235, 1)' }}>
            <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center px-md-5 gap-4">
                <div>
                    <img src={event} className="img-fluid event-img" style={{ height: "319px", borderRadius: '20px' }} alt="event" />
                </div>
                <div>
                    <h1 className="fw-normal responsive-heading">Secure Your Spot at Pharma Live 2026</h1>
                    <p style={{ color: 'rgba(0, 0, 0, 0.5)', textAlign: 'justify', lineHeight: '26px', fontSize: '18px' }}>Register now to connect with global leaders, explore the latest in pharmaceutical
                        innovation, & gain insights that will shape the future of healthcare.</p>
                    <button type="button" className="px-4 py-3 text-uppercase mt-2 text-white" style={{ background: "linear-gradient(90deg, #2EAF4A 0%, #0E7F41 100%)", borderRadius: '100px', border: 'none' }}>Register Now</button>
                </div>
            </div>
        </section>
    )
}

export default SecureSpot