import Header from './components/Header';
import Hero from './components/Hero';
import Doctors from './components/Doctors';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Accomplishments from './components/Accomplishments';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Doctors />
        <WhyChooseUs />
        <FAQ />
        <Accomplishments />
      </main>
      <Footer />
    </div>
  );
}

export default App;
