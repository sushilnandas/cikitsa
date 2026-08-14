import { useState } from 'react';
import '../CSS/FAQ.css'

const faqs = [
  {
    q: '1. I have already started my cancer treatment, how can Oncare help me still?',
    a: "If you've begun treatment, Oncare can provide a second opinion to ensure you're on the right track. We offer guidance, support, and access to cutting-edge therapies to optimize your care."
  },
  {
    q: '2. How do I get an appointment?',
    a: 'You can get an appointment by calling us or booking through our website.'
  },
  {
    q: "3. How is Oncare's second opinion different?",
    a: 'Our second opinions are comprehensive and reviewed by a multidisciplinary board.'
  },
  {
    q: '4. I want a second opinion from Oncare but I want to continue my treatment with my present medical team. Is that possible?',
    a: 'Yes, you can absolutely continue with your current team while leveraging our expert advice.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section">
      <div className="faq-cta">
        <h2>Worried About the Cost of Treatment?</h2>
        <button className="btn-primary">Get the Cost Estimate →</button>
      </div>
      
      <div className="faq-content">
        {/* <div className="faq-image">
          <img src="https://images1-fabric.practo.com/practices/1611884/oncare-cancer-care-centre-delhi-67c8a695ceb64.jpg" alt="Nurse helping patient" />
        </div> */}
        <div className="faq-accordion-container">
          <h2>Frequently asked questions</h2>
          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <div 
                  className="faq-question"
                  onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                >
                  <h4>{faq.q}</h4>
                  <span className="icon">{openIndex === index ? '^' : 'v'}</span>
                </div>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
