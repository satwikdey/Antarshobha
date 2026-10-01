import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Phone, Video, Camera } from 'lucide-react';
import { studioData } from '../data/team';

export default function Hero({ onPhotosClick, onVideosClick, onContactClick }) {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '94vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6.5rem',
        paddingBottom: '4rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Photo clearly visible (opacity 0.82) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('/images/Sample/Liv1a.JPG')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          opacity: 0.82,
          transform: 'scale(1.02)',
        }}
      />

      {/* Balanced Atmospheric Vignette so background is vibrant while text has high contrast */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(180deg, rgba(10, 20, 17, 0.22) 0%, rgba(10, 20, 17, 0.45) 50%, rgba(10, 20, 17, 0.95) 100%),
            radial-gradient(circle at 30% 40%, rgba(10, 20, 17, 0.45) 0%, transparent 70%),
            radial-gradient(circle at 75% 20%, rgba(212, 178, 103, 0.1) 0%, transparent 55%)
          `,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '840px' }}>
          {/* Subtle Tagline Badge */}
          <div
            className="glass-panel"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.45rem 1.15rem',
              borderRadius: '9999px',
              marginBottom: '1.5rem',
              borderColor: 'rgba(212, 178, 103, 0.4)',
              background: 'rgba(12, 24, 20, 0.82)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <Sparkles size={13} color="var(--gold-primary)" />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.74rem',
                fontWeight: '600',
                letterSpacing: '0.2em',
                color: 'var(--gold-light)',
                textTransform: 'uppercase',
              }}
            >
              Antar Shobha Interior • Mr. Kaushik Banerjee
            </span>
          </div>

          {/* Minimal, Punchy Headline with Crisp Text Shadow */}
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.1rem, 5.8vw, 4.8rem)',
              lineHeight: 1.1,
              fontWeight: 400,
              color: '#ffffff',
              marginBottom: '1.25rem',
              letterSpacing: '-0.02em',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.75), 0 1px 3px rgba(0, 0, 0, 0.9)',
            }}
          >
            Refined Spaces. <br />
            <span className="text-gold-italic" style={{ textShadow: '0 4px 25px rgba(0, 0, 0, 0.8)' }}>
              Quiet Luxury.
            </span>
          </h1>

          {/* Concise Subtitle */}
          <p
            style={{
              fontSize: 'clamp(0.98rem, 1.6vw, 1.25rem)',
              lineHeight: 1.6,
              color: '#f0f5f2',
              maxWidth: '640px',
              marginBottom: '2.5rem',
              fontWeight: 400,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.85)',
            }}
          >
            Bespoke residential architecture, handcrafted teak joinery, and turnkey site supervision across Kolkata by Principal Mr. Kaushik Banerjee.
          </p>

          {/* Call to Actions */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.85rem',
              marginBottom: '2.5rem',
            }}
          >
            <button
              onClick={onPhotosClick}
              className="btn-primary"
              style={{ padding: '0.85rem 1.8rem', fontSize: '0.88rem' }}
            >
              <Camera size={16} />
              <span>View Photos</span>
            </button>

            <button
              onClick={onVideosClick}
              className="btn-secondary"
              style={{ padding: '0.85rem 1.8rem', fontSize: '0.88rem', background: 'rgba(10, 20, 16, 0.75)' }}
            >
              <Video size={16} color="var(--gold-primary)" />
              <span>Watch Videos</span>
            </button>

            <a
              href={`tel:${studioData.contact.rawPhone}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.35rem',
                color: 'var(--gold-light)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: '500',
                background: 'rgba(10, 20, 16, 0.8)',
                border: '1px solid rgba(212, 178, 103, 0.35)',
                borderRadius: '9999px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Phone size={14} color="var(--gold-primary)" />
              <span>{studioData.contact.displayPhone}</span>
            </a>
          </div>

          {/* Compact 3-Stat Strip */}
          <div
            className="glass-panel hero-stats-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              padding: '1.1rem 1.6rem',
              borderRadius: '16px',
              maxWidth: '560px',
              background: 'rgba(10, 20, 16, 0.82)',
              borderColor: 'rgba(212, 178, 103, 0.3)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: '600',
                  color: 'var(--gold-primary)',
                  display: 'block',
                  lineHeight: 1,
                  marginBottom: '0.2rem',
                }}
              >
                150+
              </span>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                Residences
              </span>
            </div>

            <div>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: '600',
                  color: 'var(--gold-primary)',
                  display: 'block',
                  lineHeight: 1,
                  marginBottom: '0.2rem',
                }}
              >
                12+
              </span>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                Years Experience
              </span>
            </div>

            <div>
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.75rem',
                  fontWeight: '600',
                  color: 'var(--gold-primary)',
                  display: 'block',
                  lineHeight: 1,
                  marginBottom: '0.2rem',
                }}
              >
                100%
              </span>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                Turnkey Delivery
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
