import React, { useState } from 'react'

const StatsAndFAQ = () => {

   const [openFaq, setOpenFaq] = useState(0)

  const faqs = [
    { question: 'What is LASIK?', answer: 'LASIK surgery (Laser-Assisted In Situ Keratomileusis) is a popular laser eye surgery designed to correct refractive errors such as nearsightedness, farsightedness, and astigmatism. This laser surgery reshapes the cornea, allowing light to focus correctly on the retina, leading to improved vision without the need for glasses or contact lenses.' },
    { question: 'Who is not suitable for the LASIK?', answer: 'Not everyone is a suitable candidate for LASIK. Pregnant or nursing women, individuals with certain autoimmune diseases, uncontrolled diabetes, or very thin corneas may not be eligible. A comprehensive eye exam is required to determine suitability.' },
    { question: 'Is LASIK painful?', answer: 'The procedure itself is typically painless because numbing eye drops are used. Some patients may experience mild discomfort or a gritty sensation for a few hours after the surgery.' },
    { question: 'Is laser eye surgery costly?', answer: 'The cost varies depending on the technology used and the clinic, but it is generally considered an investment in your long-term vision, often saving money on glasses and contacts over time.' },
    { question: 'What other treatments and services are provided at your eye hospital near me?', answer: 'We offer comprehensive eye care, including cataract surgery, glaucoma treatment, pediatric ophthalmology, and retina services.' },
    { question: 'Do you provide cashless insurance for treatments?', answer: 'Yes, we are empaneled with major health insurance providers and offer cashless facilities for covered treatments.' },
    { question: 'How much do treatments like cataract surgery, LASIK, or other eye procedures cost?', answer: 'Costs vary based on the specific procedure and technology chosen. We offer consultations to provide detailed pricing tailored to your needs.' },
    { question: 'How can I find the nearest clinic/hospital?', answer: 'You can use the clinic locator on our website to find the Dr Agarwals Eye Hospital closest to you.' },
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index)
  }
  
  return (
    <div>
           <section className="faq-section">
        <div className="faq-left">
          <h2 className="faq-title">
            Frequently<br />
            Asked Questions
          </h2>
        </div> 
        <div className="faq-right">
           <div className="accordion">



            {faqs.map((faq, index) => (

              <div key={index} className={`accordion-item ${openFaq === index ? 'active' : ''}`}>

                <div className="accordion-header" onClick={() => toggleFaq(index)}>
                  <h4>{faq.question}</h4>
                  <span className="accordion-icon">{openFaq === index ? '−' : '+'}</span>
                </div>
                {openFaq === index && (
                  <div className="accordion-body">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div> 

        </div>
      </section> 
      
</div>
  )
}

export default StatsAndFAQ