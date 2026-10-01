import React from 'react';
import { ArrowUpRight, Check, Sparkles, Home, Building, Palette, Wrench } from 'lucide-react';
import { servicesData, processSteps } from '../data/services';

export default function Services({ onContactClick }) {
  const getIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Home size={22} color="var(--gold-primary)" />;
      case 1:
        return <Building size={22} color="var(--gold-primary)" />;
      case 2:
        return <Palette size={22} color="var(--gold-primary)" />;
      case 3:
      default:
        return <Wrench size={22} color="var(--gold-primary)" />;
    }
  };

  return (
    <section
      id="services"
      style={{
        position: 'relative',
        padding: '6.5rem 0',
        background: 'var(--bg-primary)',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}
        >
          <div>
            <div className="section-tag">COMPREHENSIVE ATELIER EXPERTISE</div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
                lineHeight: 1.1,
                color: '#ffffff',
                fontWeight: 300,
              }}
            >
              Our <span className="text-gold-italic">Services</span>
            </h2>
          </div>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.02rem',
              maxWidth: '480px',
            }}
          >
            End-to-end architectural interior services curated by Mr. Kaushik Banerjee, from spatial AutoCAD drafting to on-site handover.
          </p>
        </div>

        {/* 4 Clean Glassmorphic Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginBottom: '5rem',
          }}
        >
          {servicesData.map((service, index) => (
            <div
              key={service.number}
              className="glass-panel glass-card-hover"
              style={{
                padding: '2.25rem 1.75rem',
                borderRadius: '22px',
                background: 'rgba(14, 27, 22, 0.85)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                border: '1px solid rgba(212, 178, 103, 0.22)',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(212, 178, 103, 0.12)',
                      border: '1px solid rgba(212, 178, 103, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getIcon(index)}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.6rem',
                      fontWeight: '600',
                      color: 'var(--gold-muted)',
                      opacity: 0.65,
                    }}
                  >
                    {service.number}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.6rem',
                    color: '#ffffff',
                    marginBottom: '0.75rem',
                    lineHeight: 1.25,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {service.summary}
                </p>

                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.55rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {service.bullets.map((b, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.55rem',
                        fontSize: '0.82rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      <Check size={14} color="var(--gold-primary)" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  borderTop: '1px solid rgba(212, 178, 103, 0.15)',
                  paddingTop: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--gold-light)',
                    fontStyle: 'italic',
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  {service.accent}
                </span>

                <button
                  onClick={onContactClick}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold-light)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  <span>Inquire</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Design Process Flow */}
        <div
          className="glass-panel"
          style={{
            padding: '3rem 2.5rem',
            borderRadius: '24px',
            background: 'rgba(14, 27, 22, 0.88)',
            border: '1px solid rgba(212, 178, 103, 0.25)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-tag" style={{ justifyContent: 'center' }}>
              PROVEN ARCHITECTURAL METHODOLOGY
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#ffffff',
              }}
            >
              Our Design <span className="text-gold-italic">Process</span>
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {processSteps.map((step) => (
              <div
                key={step.step}
                style={{
                  padding: '1.5rem',
                  borderRadius: '16px',
                  background: 'rgba(17, 38, 32, 0.55)',
                  border: '1px solid rgba(212, 178, 103, 0.18)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: 'var(--gold-primary)',
                    lineHeight: 1,
                    marginBottom: '0.75rem',
                    opacity: 0.85,
                  }}
                >
                  {step.step}
                </div>
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.35rem',
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                  }}
                >
                  {step.title}
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.55 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
