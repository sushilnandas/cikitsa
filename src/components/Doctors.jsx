import { useRef, useState } from 'react';
import '../CSS/Doctors.css';

const doctors = [
  {
    name: 'Dr. Srinivasa B J',
    specialty: 'Medical Oncology',
    experience: '25+ YEARS OF EXPERIENCE',
    img: 'https://cdn.pixabay.com/photo/2023/12/21/06/23/doctor-8461303_1280.jpg'
  },
  {
    name: 'Dr. Sireesh Kumar C H',
    specialty: 'Medical Oncologist',
    experience: '10+ YEARS OF EXPERIENCE',
    img: 'https://static.vecteezy.com/system/resources/previews/028/287/384/non_2x/a-mature-indian-male-doctor-on-a-white-background-ai-generated-photo.jpg'
  },
  {
    name: 'Dr. Mohamad Hafeez',
    specialty: 'Medical Oncologist',
    experience: '13+ YEARS OF EXPERIENCE',
    img: 'https://png.pngtree.com/png-clipart/20240220/original/pngtree-portrait-of-a-smiling-handsome-male-doctor-man-png-image_14366794.png'
  },
  {
    name: 'Dr. Ramesh Kumar',
    specialty: 'Surgical Oncology',
    experience: '15+ YEARS OF EXPERIENCE',
    img: 'https://cdn.apollohospitals.com/hyderabad/2024/05/Dr.-Ramesh-Srinivasan.jpg'
  },
  {
    name: 'Dr. Anita Reddy',
    specialty: 'Radiation Oncology',
    experience: '20+ YEARS OF EXPERIENCE',
    img:'https://sevanahospital.com/wp-content/uploads/2025/07/SEVANA-IMAGE-1-2-1.png'
  }
];

const Doctors = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = 330; // 300px width + 30px gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index) => {
    if (scrollRef.current) {
      const cardWidth = 330;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <section className="doctors">
      <div className="container">
        <div className="section-header">
          <span className="badge">OUR DOCTORS</span>
          <h2>Meet Our Specialists in Bengaluru</h2>
          <p>Expert oncologists trained at AIIMS & TMH - specialising in cancer treatment in Bengaluru</p>
        </div>
        <div className="doctors-grid" ref={scrollRef} onScroll={handleScroll}>
          {doctors.map((doc, index) => (
            <div className="doctor-card" key={index}>
              <img src={doc.img} alt={doc.name} className="doctor-img" />
              <div className="doctor-info">
                <h4>{doc.name}</h4>
                <p className="specialty">{doc.specialty}</p>
                <p className="experience">{doc.experience}</p>
                <button className="btn-outline">Book Consultation</button>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-dots">
          {doctors.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${activeIndex === index ? 'active' : ''}`}
              onClick={() => scrollTo(index)}
              style={{ cursor: 'pointer' }}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
