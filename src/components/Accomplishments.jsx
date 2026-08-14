import '../CSS/Accomplishments.css'




const Accomplishments = () => {
  return (
    <section className="accomplishments">
      <div className="container">
        <p className="subtitle text-center">Making a Difference</p>
        <h2 className="text-center">Our Accomplishments Speak For Us</h2>
        <div className="divider"></div>
        
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">🤝</div>
            <h3>15+</h3>
            <p>Years of experience</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <h3>5000+</h3>
            <p>Successful Treatments by our Doctors</p>
          </div>
        </div>

        <div className="cta-buttons text-center mt-30">
          <button className="btn-secondary">Call Us: 8448832028 →</button>
          <button className="btn-primary" style={{marginLeft: '15px'}}>Book Consultation →</button>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
