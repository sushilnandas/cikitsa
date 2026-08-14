import '../CSS/WhyChooseUs.css'

const WhyChooseUs = () => {
  return (
    <section className="why-choose">
      <div className="container">
        <h2>Why Choose Oncare</h2>
        <p className="intro-text">
          At OnCare, we understand the overwhelming & emotional journey of fighting cancer. That's why, our expert teams provide dedicated & personalized support to every case, ensuring the best treatment plan for you.
          <br /><br />
          Our specialists stay up-to-date with the latest research and advancements in cancer treatment. Our dedicated Care Experts also help you track your medical expenditure and guide you with the best insurance plans to alleviate your financial burden through these challenging times. From all kinds of therapies, tests, & surgeries to formalities & paperwork, OnCare Team specializes in the best cancer treatment approach.
        </p>

        {/* <h3>Following are the Oncare benefits</h3>
         <div className="table-responsive"> */}
        {/*  <table className="benefits-table">
            <thead>
              <tr>
                <th></th>
                <th>Oncare</th>
                <th>Other Centres</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chemotherapy Cost</td>
                <td>Rs 18000 - Rs 39000</td>
                <td>Rs 33000 - Rs 65000</td>
              </tr>
              <tr>
                <td>Surgery Cost</td>
                <td>Upto 50% Savings</td>
                <td>High Cost</td>
              </tr>
              <tr>
                <td>Long waiting time</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Insurance</td>
                <td>No Extra Charges</td>
                <td>Extra Charges</td>
              </tr>
              <tr>
                <td>Price Transparency</td>
                <td>100% transparent pricing</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>Cancer Medications</td>
                <td>Upto 20% Saving</td>
                <td>MRP</td>
              </tr>
              <tr>
                <td>24*7 Care Manager</td>
                <td>Yes</td>
                <td>No</td>
              </tr>
            </tbody>
          </table> */}
        {/* </div> */}

        <h3>Cost of Cancer Treatment?</h3>
        <p className="factors-intro">Cost of cancer depends on the following factors:</p>
        <ul className="factors-list">
          <li>The type of cancer</li>
          <li>The size of the tumour</li>
          <li>The tumour's location in the body</li>
          <li>How close the tumor is to normal tissues that are sensitive to radiation and your general health and medical history</li>
          <li>Whether you will have other types of cancer treatment</li>
          <li>Other factors, such as your age and other medical conditions.</li>
        </ul>

        <div className="text-center mt-30">
          <button className="btn-secondary">Call Us: 8448832028 →</button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
