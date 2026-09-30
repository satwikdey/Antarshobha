import React from 'react';
import { Mail, Phone, MapPin, Globe, Sparkles } from 'lucide-react';
import { studioData } from '../data/team';

export default function Footer({ onNavClick }) {
  return (
    <footer
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #0e1e19 0%, #060e0b 100%)',
        color: '#ffffff',
        paddingTop: '3.5rem',
        paddingBottom: '2rem',
        borderTop: '1px solid rgba(212, 178, 103, 0.28)',
        overflow: 'hidden',
      }}
    >
      {/* Top glowing gold accent line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(212, 178, 103, 0.8), transparent)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '2.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(212, 178, 103, 0.15)',
          }}
        >
          {/* Brand Identity */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2px',
                  border: '1px solid rgba(212, 178, 103, 0.4)',
                }}
              >
                <img
                  src="/images/logo/new logo.jpeg"
                  alt="Antar Shobha Interior Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-script)',
                    fontSize: '1.6rem',
                    color: 'var(--gold-primary)',
                    display: 'block',
                    lineHeight: 1,
                  }}
                >
                  Antar Shobha
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.58rem',
                    fontWeight: '700',
                    letterSpacing: '0.3em',
                    color: 'var(--gold-light)',
                    textTransform: 'uppercase',
                  }}
                >
                  I N T E R I O R
                </span>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', lineHeight: 1.5 }}>
              Principal <strong>Kaushik Banerjee</strong>. Shaping quiet luxury, bespoke carpentry, and turnkey residences in Kolkata.
            </p>
          </div>

          {/* Direct Visiting Card Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
              <Phone size={14} color="var(--gold-primary)" />
              <a
                href={`tel:${studioData.contact.rawPhone}`}
                style={{ color: 'var(--gold-light)', textDecoration: 'none', fontWeight: '500' }}
              >
                {studioData.contact.phone}
              </a>
            </div>

            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
              <Mail size={14} color="var(--gold-primary)" />
              <a
                href={`mailto:${studioData.contact.email}`}
                style={{ color: '#ffffff', textDecoration: 'none' }}
              >
                {studioData.contact.email}
              </a>
            </div>

            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
              <MapPin size={14} color="var(--gold-primary)" style={{ marginTop: '2px' }} />
              <span style={{ color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                {studioData.contact.address}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            {['home', 'photos', 'videos', 'about', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => onNavClick(id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '0.84rem',
                  textTransform: 'capitalize',
                  padding: 0,
                  transition: 'color 0.2s ease',
                  fontFamily: 'var(--font-sans)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-light)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {id === 'photos'
                  ? 'Photos'
                  : id === 'videos'
                  ? 'Videos'
                  : id === 'about'
                  ? 'About'
                  : id}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <div
          style={{
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            color: 'var(--text-muted)',
            fontSize: '0.78rem',
          }}
        >
          <p>© {new Date().getFullYear()} Antar Shobha Interior • Kaushik Banerjee. Kolkata.</p>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <span>Turnkey Execution</span>
            <span>Bespoke Interior Atelier</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
