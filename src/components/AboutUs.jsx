import React from 'react';
import { ArrowUpRight, Compass, Heart, Gem, Sparkles, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { studioData } from '../data/team';

export default function AboutUs({ onContactClick }) {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        padding: '6.5rem 0',
        background: 'var(--bg-secondary)',
      }}
    >
      <div className="ambient-glow-1" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ maxWidth: '860px', marginBottom: '4rem' }}>
          <div className="section-tag">ABOUT ANTAR SHOBHA INTERIOR</div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.6rem, 5.2vw, 4.5rem)',
              lineHeight: 1.1,
              color: '#ffffff',
              fontWeight: 300,
            }}
          >
            Spaces crafted with <span className="text-gold-italic">intent & balance.</span>
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              lineHeight: 1.75,
              marginTop: '1.25rem',
              fontWeight: 300,
            }}
          >
            Rooted in Kolkata and guided by Principal Designer <strong style={{ color: 'var(--gold-light)' }}>Mr. Kaushik Banerjee</strong>, 
            Antar Shobha (meaning <em>"Inner Radiance"</em>) approaches interior design as an art of restraint. 
            We build enduring sanctuaries where bespoke teak joinery, honest natural stone, and gentle ambient lighting 
            create a calming sense of homecoming.
          </p>
        </div>

        {/* 3-Panel Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
            marginBottom: '4.5rem',
          }}
        >
          {/* Panel 1: Studio Principal & Atelier Identity (Featuring Visiting Card Replica) */}
          <div
            className="glass-panel glass-card-hover"
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              background: 'rgba(14, 27, 22, 0.85)',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid rgba(212, 178, 103, 0.3)',
            }}
          >
            {/* Top real project photo banner */}
            <div
              style={{
                height: '220px',
                backgroundImage: `url('/images/Sample/Liv1ab.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(10, 20, 17, 0.2) 0%, rgba(10, 20, 17, 0.95) 100%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1.5rem',
                }}
              >
                <span
                  style={{
                    background: 'rgba(17, 38, 32, 0.85)',
                    color: 'var(--gold-light)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    fontWeight: '600',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(212, 178, 103, 0.3)',
                  }}
                >
                  Principal Direction
                </span>
              </div>
            </div>

            {/* Business Card Replica Embedded inside Panel */}
            <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div
                className="visiting-card-replica"
                style={{
                  padding: '1.4rem 1.6rem',
                  marginBottom: '1.25rem',
                  borderRadius: '14px',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1px 1fr', gap: '1.2rem', alignItems: 'center' }}>
                  {/* Left Logo Side */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-script)',
                        fontSize: '1.8rem',
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
                        letterSpacing: '0.28em',
                        color: 'var(--gold-light)',
                        marginTop: '3px',
                      }}
                    >
                      I N T E R I O R
                    </span>
                  </div>

                  {/* Vertical Dividing Line */}
                  <div
                    style={{
                      width: '1px',
                      height: '75px',
                      background: 'linear-gradient(180deg, transparent, var(--gold-primary), transparent)',
                    }}
                  />

                  {/* Right Contact Side */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: 'var(--gold-light)',
                      }}
                    >
                      Mr. Kaushik Banerjee
                    </span>
                    <span style={{ fontSize: '0.74rem', color: 'var(--gold-primary)' }}>
                      M : {studioData.contact.displayPhone}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                      {studioData.contact.email}
                    </span>
                    <span style={{ fontSize: '0.66rem', color: 'var(--text-muted)' }}>
                      Kolkata - 700 008
                    </span>
                  </div>
                </div>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.6rem',
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                }}
              >
                Direct Principal Oversight
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem',
                  flex: 1,
                }}
              >
                Every project is personally curated by Mr. Kaushik Banerjee, from spatial zoning and AutoCAD joinery drawings to turnkey site execution and material handoff.
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--gold-primary)',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                }}
              >
                <Sparkles size={14} />
                <span>Atelier Kolkata • Personalized Consultations</span>
              </div>
            </div>
          </div>

          {/* Panel 2: Proven Trust & Realized Projects */}
          <div
            className="glass-panel"
            style={{
              borderRadius: '24px',
              padding: '2.25rem',
              background: 'rgba(14, 27, 22, 0.85)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(212, 178, 103, 0.22)',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.2em',
                  color: 'var(--gold-primary)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                Track Record & Craft
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.1rem',
                  color: '#ffffff',
                  marginBottom: '1.75rem',
                }}
              >
                Proven Dedication to <span className="text-gold-italic">Excellence</span>
              </h3>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.25rem',
                margin: '1rem 0 2rem',
              }}
            >
              {studioData.metrics.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1.25rem',
                    borderRadius: '16px',
                    background: 'rgba(17, 38, 32, 0.5)',
                    border: '1px solid rgba(212, 178, 103, 0.18)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2.1rem',
                      fontWeight: '600',
                      color: 'var(--gold-primary)',
                      lineHeight: 1,
                      marginBottom: '0.4rem',
                    }}
                  >
                    {item.value}
                  </div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.35,
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                padding: '1rem 1.25rem',
                borderRadius: '14px',
                background: 'rgba(17, 38, 32, 0.65)',
                border: '1px solid rgba(212, 178, 103, 0.3)',
                fontSize: '0.85rem',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <CheckCircle2 size={18} color="var(--gold-light)" />
              <span>Full turnkey execution with millimeter joinery precision</span>
            </div>
          </div>

          {/* Panel 3: Core Philosophy & Design Pillars */}
          <div
            className="glass-panel"
            style={{
              borderRadius: '24px',
              padding: '2.25rem',
              background: 'rgba(14, 27, 22, 0.85)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(212, 178, 103, 0.22)',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.2em',
                  color: 'var(--gold-primary)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                Pillars of Design
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.1rem',
                  color: '#ffffff',
                  marginBottom: '1.5rem',
                }}
              >
                The Three <span className="text-gold-italic">Harmonies</span>
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(212, 178, 103, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid rgba(212, 178, 103, 0.25)',
                  }}
                >
                  <Gem size={18} color="var(--gold-primary)" />
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '0.2rem' }}>
                    Authentic Materiality
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem' }}>
                    Seasoned teak, book-matched Italian marble, and warm brass accents that acquire character over decades.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(212, 178, 103, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid rgba(212, 178, 103, 0.25)',
                  }}
                >
                  <Compass size={18} color="var(--gold-light)" />
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '0.2rem' }}>
                    Spatial Flow & Light
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem' }}>
                    Circulation paths planned around natural cross-ventilation, complemented by 2700K indirect mood illumination.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(212, 178, 103, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1px solid rgba(212, 178, 103, 0.25)',
                  }}
                >
                  <Heart size={18} color="var(--gold-primary)" />
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '0.2rem' }}>
                    Soulful Individuality
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem' }}>
                    Crafting spaces around your family’s daily rituals, sacred shrines, and timeless comforts.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onContactClick}
              className="btn-secondary"
              style={{ width: '100%', marginTop: '1.5rem', padding: '0.75rem' }}
            >
              <span>Connect with Mr. Kaushik Banerjee</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Signature Atelier Quote */}
        <div
          className="glass-panel"
          style={{
            padding: '3rem 2rem',
            textAlign: 'center',
            borderRadius: '24px',
            background: 'linear-gradient(180deg, rgba(14, 27, 22, 0.9) 0%, rgba(9, 19, 15, 0.98) 100%)',
            border: '1px solid rgba(212, 178, 103, 0.28)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.75rem, 3.8vw, 3rem)',
              lineHeight: 1.25,
              color: '#ffffff',
              maxWidth: '900px',
              margin: '0 auto 1.5rem',
            }}
          >
            “Luxury is not about excess, <span className="text-gold-italic">it is about balance.”</span>
          </p>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              color: 'var(--gold-primary)',
              fontFamily: 'var(--font-display)',
              fontSize: '0.78rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            <span>Mr. Kaushik Banerjee • Antar Shobha Interior Philosophy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
