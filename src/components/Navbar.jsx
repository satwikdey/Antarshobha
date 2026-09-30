import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare, Camera, Film, UserCheck } from 'lucide-react';
import { studioData } from '../data/team';

export default function Navbar({ activeTab, setActiveTab }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'photos', label: 'Portfolio Photos' },
    { id: 'videos', label: 'Walkthrough Videos' },
    { id: 'about', label: 'Adviser & About' },
    { id: 'contact', label: 'Contact Atelier' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: isScrolled ? '0.65rem 0' : '1.1rem 0',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1620px', margin: '0 auto', padding: '0 0.85rem' }}>
          <nav
            className="navbar-capsule"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.6rem 1.6rem',
              borderRadius: '9999px',
              background: isScrolled
                ? 'rgba(10, 20, 16, 0.95)'
                : 'rgba(12, 24, 20, 0.88)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(212, 178, 103, 0.3)',
              boxShadow: isScrolled
                ? '0 16px 40px rgba(0, 0, 0, 0.65)'
                : '0 8px 30px rgba(0, 0, 0, 0.45)',
              transition: 'all 0.3s ease',
            }}
          >
            {/* Brand Logo & Name */}
            <div
              onClick={() => handleNavClick('home')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: 'pointer',
                userSelect: 'none',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(212, 178, 103, 0.4)',
                  padding: '2px',
                  boxShadow: '0 0 12px rgba(212, 178, 103, 0.2)',
                }}
              >
                <img
                  src="/images/logo/new logo.jpeg"
                  alt="Antar Shobha Interior Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-script)',
                    fontSize: '1.45rem',
                    fontWeight: '400',
                    color: 'var(--gold-primary)',
                    lineHeight: 1,
                  }}
                >
                  Antar Shobha
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.55rem',
                    fontWeight: '700',
                    letterSpacing: '0.34em',
                    color: 'var(--gold-light)',
                    textTransform: 'uppercase',
                    marginTop: '2px',
                  }}
                >
                  I N T E R I O R
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links / Quick Jump Points */}
            <div
              className="desktop-nav"
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                flex: 1,
                margin: '0 1.5rem',
              }}
            >
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: isActive ? 'rgba(212, 178, 103, 0.18)' : 'transparent',
                      color: isActive ? 'var(--gold-light)' : 'var(--text-secondary)',
                      border: isActive
                        ? '1px solid rgba(212, 178, 103, 0.4)'
                        : '1px solid transparent',
                      padding: '0.48rem 1.15rem',
                      borderRadius: '9999px',
                      fontSize: '0.84rem',
                      fontWeight: isActive ? '600' : '400',
                      letterSpacing: '0.03em',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      whiteSpace: 'nowrap',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Right Action: Consultation CTA (Desktop only) & Mobile Hamburger */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
              <button
                onClick={() => handleNavClick('contact')}
                className="desktop-nav btn-primary"
                style={{
                  padding: '0.55rem 1.45rem',
                  fontSize: '0.82rem',
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                }}
              >
                <span>Consultation</span>
                <ArrowUpRight size={14} />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(212, 178, 103, 0.35)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-light)',
                  cursor: 'pointer',
                }}
                className="mobile-menu-btn"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            background: 'rgba(10, 20, 16, 0.98)',
            backdropFilter: 'blur(25px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem 1.5rem',
          }}
        >
          {/* Close button in top-right */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(212, 178, 103, 0.3)',
              borderRadius: '50%',
              width: '42px',
              height: '42px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-light)',
              cursor: 'pointer',
            }}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-script)',
                fontSize: '2.3rem',
                color: 'var(--gold-primary)',
                display: 'block',
              }}
            >
              Antar Shobha
            </span>
            <span
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.3em',
                color: 'var(--gold-light)',
                textTransform: 'uppercase',
              }}
            >
              I N T E R I O R
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.15rem',
              textAlign: 'center',
              width: '100%',
              maxWidth: '320px',
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeTab === item.id ? 'var(--gold-primary)' : '#ffffff',
                  fontSize: '1.2rem',
                  fontFamily: 'var(--font-serif)',
                  padding: '0.45rem',
                  cursor: 'pointer',
                  borderBottom: '1px solid rgba(212, 178, 103, 0.15)',
                }}
              >
                {item.label}
              </button>
            ))}

            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={`tel:${studioData.founder.rawPhone}`}
                className="btn-secondary"
                style={{ padding: '0.8rem', fontSize: '0.85rem' }}
              >
                <Phone size={14} color="var(--gold-primary)" />
                <span>Call Principal: {studioData.founder.displayPhone}</span>
              </a>

              <a
                href={`tel:${studioData.adviser.rawPhone}`}
                className="btn-secondary"
                style={{ padding: '0.8rem', fontSize: '0.85rem' }}
              >
                <UserCheck size={14} color="var(--gold-primary)" />
                <span>Call Adviser: {studioData.adviser.displayPhone}</span>
              </a>

              <a
                href={studioData.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ padding: '0.8rem', fontSize: '0.85rem' }}
              >
                <MessageSquare size={14} />
                <span>WhatsApp Atelier</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
