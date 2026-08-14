import '../CSS/Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-text">
          <h1>Consult with the Best Cancer Doctors/ Oncologists in Bengaluru</h1>
          <p className="subtitle">Book Your Consultation for Personalized Cancer Care Today.</p>
          <ul>
            <li>High success rate</li>
            <li>Expert team of oncologists dedicated for different organ types</li>
            <li>Highly experienced oncologists</li>
            <li>All Insurances covered - Minimal Copayment</li>
            <li>No cost EMI option available</li>
            <li>Upto 50% less expensive than other centres</li>
          </ul>
        </div>
        <div className="hero-form">
          <div className="form-card">
            <h3>Know Your Treatment Cost</h3>
            <input type="text" placeholder="Enter Name" />
            <input type="tel" placeholder="Enter Phone" />
            <button className="btn-primary">Get the Cost Estimate →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
