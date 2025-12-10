import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import ScrollToTop from './components/ScrollToTop';
import WeddingPlanning from './pages/services/WeddingPlanning';
import CorporateEvents from './pages/services/CorporateEvents';
import BirthdayParties from './pages/services/BirthdayParties';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/services/wedding-planning" element={<WeddingPlanning />} />
        <Route path="/services/beach-weddings" element={<WeddingPlanning />} />
        <Route path="/services/corporate-events" element={<CorporateEvents />} />
        <Route path="/services/birthday-parties" element={<BirthdayParties />} />
        <Route path="/services/:type" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
