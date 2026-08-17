import React from 'react'

const Hero = () => {
  return (
    <div> <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">
            Restore Your Vision With<br />
            Advanced LASIK Surgery
          </h1>
          <div className="trust-badge">
            <div className="trust-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" fill="#205c6d"/>
                <path d="M18 10C19.1046 10 20 9.10457 20 8C20 6.89543 19.1046 6 18 6C16.8954 6 16 6.89543 16 8C16 9.10457 16.8954 10 18 10Z" fill="#205c6d"/>
                <path d="M12 13C9.33333 13 4 14.3333 4 17V19H20V17C20 14.3333 14.6667 13 12 13Z" fill="#205c6d"/>
                <path d="M22 17.5C22 15.2909 18.4183 14 16 14C15.827 14 15.6517 14.0044 15.4746 14.0132C17.0212 14.8872 18 16.0357 18 17.5V19H22V17.5Z" fill="#205c6d"/>
              </svg>
            </div>
            <div className="trust-badge-text">
              <strong>20,00,000+</strong><br />
              <span>Happy patients every year</span>
            </div>
          </div>
          
          <div className="trust-box">
            <img width="222" height="48" src="https://assets4.mirraw.com/designers/6192/cd836e06a3cdf07ba4f0a93388a8c732_original.jpg" alt="Power of Trust" className="trust-logo" />
            <div className="trust-separator"></div>
            <div className="trust-box-text">
              <strong>India's Most Trusted Eye Hospitals</strong><br />
              <span>TRA's Brand Trust Report 2023</span>
            </div>
          </div>
        </div>

        <div className="hero-center">
          <img src="/image.png" alt="Brand Ambassador" className="sachin-img" />
        </div>

        <div className="hero-right">
          <div className="form-card">
            <h2>Book Your Eye Checkup With Our Experienced Ophthalmologists Today!</h2>
            <div className="form-group">
              <label>Phone Number *</label>
              <div className="input-with-flag">
                <input type="text" placeholder="Enter valid 10 digit phone number" />
                <span className="flag">🇮🇳</span>
              </div>
            </div>
            <button className="submit-btn">Request a Call Back</button>
          </div>
        </div>
      </section></div>
  )
}

export default Hero