import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhotoGallery from './components/PhotoGallery';
import VideoSection from './components/VideoSection';
import AboutStudio from './components/AboutStudio';
import ContactFlow from './components/ContactFlow';
import Footer from './components/Footer';
import ImageLightbox from './components/ImageLightbox';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { studioData } from './data/team';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['home', 'photos', 'videos', 'about', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Floating Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={scrollToSection} />

      {/* Main Streamlined Experience */}
      <main style={{ flex: 1 }}>
        {/* 1. Hero Section (Photo as Background Only) */}
        <Hero
          onPhotosClick={() => scrollToSection('photos')}
          onVideosClick={() => scrollToSection('videos')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 2. Photo Section (The ONLY section with project photos) */}
        <PhotoGallery onSelectPhoto={(photo) => setSelectedPhoto(photo)} />

        {/* 3. Video Section (The ONLY section with videos - every thumbnail is a screenshot from that video) */}
        <VideoSection />

        {/* 4. About & Services Section (NO photos, NO videos - Visiting Card & Core Pillars) */}
        <AboutStudio onContactClick={() => scrollToSection('contact')} />

        {/* 5. Contact Section (NO photos, NO videos - Direct Contacts & Consultation Form) */}
        <ContactFlow />
      </main>

      {/* 6. Footer */}
      <Footer onNavClick={scrollToSection} />

      {/* Fullscreen Photo Lightbox Modal */}
      {selectedPhoto && (
        <ImageLightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}

      {/* Direct WhatsApp Floating Button */}
      <a
        href={studioData.contact.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Direct WhatsApp Chat with Kaushik Banerjee"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 90,
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
          border: '2px solid rgba(255, 255, 255, 0.25)',
          transition: 'transform 0.2s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <MessageCircle size={25} />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          aria-label="Scroll to Top"
          style={{
            position: 'fixed',
            bottom: '2rem',
            left: '2rem',
            zIndex: 90,
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'rgba(14, 28, 23, 0.9)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(212, 178, 103, 0.35)',
            color: 'var(--gold-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.6)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--gold-primary)';
            e.currentTarget.style.color = '#08120f';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(14, 28, 23, 0.9)';
            e.currentTarget.style.color = 'var(--gold-light)';
          }}
        >
          <ArrowUp size={16} />
        </button>
      )}
    </div>
  );
}
