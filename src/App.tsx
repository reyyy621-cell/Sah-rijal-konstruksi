import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import DesignToReality from './components/DesignToReality';
import InteriorMepCalculator from './components/InteriorMepCalculator';
import Testimonial from './components/Testimonial';
import ContactSurvey from './components/ContactSurvey';

// Pages
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Faq from './components/Faq';

function HomePage() {
  return (
    <>
      <Hero />
      <DesignToReality />
      <div id="middle-calculators-container" className="relative">
        <InteriorMepCalculator />
      </div>
      <Testimonial />
      <ContactSurvey />
    </>
  );
}

// Wrappers for pages to ensure they have top padding for the fixed navbar
function PageWrapper({ children }: { children: React.ReactNode }) {
  return <div className="pt-24 min-h-screen bg-gray-50">{children}</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <div id="root-app-layout" className="bg-white min-h-screen text-gray-800 selection:bg-[#C89A2B] selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang-kami" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/layanan" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/portofolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
          <Route path="/proses-kerja" element={<PageWrapper><Process /></PageWrapper>} />
          <Route path="/faq" element={<PageWrapper><Faq /></PageWrapper>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
