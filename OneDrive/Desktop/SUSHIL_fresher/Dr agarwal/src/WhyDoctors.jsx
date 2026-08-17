import React from 'react'

const WhyDoctors = () => {
  return (
    <div> <section className="why-section">
        <h2 className="section-title">Why Dr Agarwals?</h2>
        <div className="cards-container">
          {/* left card */}
          <div className="info-card building-card">
            <div className="ce-why-box-inner">
              <img className="d-none d-sm-block" src='https://dragarwals.co.in/wp-content/uploads/2024/08/da-health-1024x682.jpg
' alt="hospital" />
              <img className="d-sm-none no-lazyload-img" src="https://dragarwals.co.in/wp-content/uploads/2024/08/da-health-1024x682.jpg
" alt="hospital" />
            </div>
            <div className="card-content">
              <h3>250+</h3>
              <p>State of the art eye hospitals across India</p>
              <div className="badge-pill">60+ Years of Expertise</div>
            </div>
          </div>

          {/* right card */}
          <div className="info-card doctors-card">
            <div className="ce-why-box-inner">
              <img className="d-none d-sm-block" src="https://cancerhospitalgwalior.com/wp-content/uploads/2024/10/slide1-1024x640.png" alt="doctor" />
              <img className="d-sm-none no-lazyload-img" src="https://cancerhospitalgwalior.com/wp-content/uploads/2024/10/slide1-1024x640.png" alt="doctor" />
            </div>
          
            <div className="card-content">
              <h3>800+</h3>
              <p>Highly experienced ophthalmologists / eye doctors</p>
              <div className="badge-pill">2,00,000+ Surgeries Conducted Every Year</div>
            </div>
          </div>
        </div>
      </section></div>
  )
}

export default WhyDoctors