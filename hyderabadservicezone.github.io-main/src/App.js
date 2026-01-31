import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MobileCallBar from './components/MobileCallBar';
import FloatingPhone from './components/FloatingPhone';

// Homepage Sections
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import FAQSection from './components/FAQSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import ServiceAreasSection from './components/ServiceAreasSection';

// Pages
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import FaqsPage from './pages/FaqsPage';
import DisclaimerPage from './pages/DisclaimerPage';
import PricingPage from './pages/PricingPage';
import WarrantyPage from './pages/WarrantyPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';

// Layout wrapper
const MainLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <MainLayout>
                <HeroSection />
                <ServicesSection />
                <AboutSection />
                <WhyChooseUsSection />
                <FAQSection />
                <ServiceAreasSection />
                <TestimonialsSection />
                <ContactSection />
              </MainLayout>
            }
          />

          {/* Standalone pages without layout */}
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />

          {/* Service Page */}
          <Route
            path="/service/:serviceType"
            element={
              <MainLayout>
                <ServicePage />
                <WhyChooseUsSection />
                <ContactSection />
                <FAQSection />
              </MainLayout>
            }
          />

          {/* Other content pages with layout */}
          <Route path="/faqs" element={<MainLayout><FaqsPage /></MainLayout>} />
          <Route path="/disclaimer" element={<MainLayout><DisclaimerPage /></MainLayout>} />
          <Route path="/pricing" element={<MainLayout><PricingPage /></MainLayout>} />
          <Route path="/warranty" element={<MainLayout><WarrantyPage /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
          <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
        </Routes>

        {/* WhatsApp floating icon (visible on all routes) */}
        <FloatingWhatsApp />
        <FloatingPhone />
        <MobileCallBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
