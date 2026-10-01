import React from 'react';
import { Sparkles, Phone, MessageSquare, CheckCircle2, ArrowUpRight, UserCheck, ShieldCheck } from 'lucide-react';
import { studioData } from '../data/team';

export default function AboutStudio({ onContactClick }) {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        padding: '5.5rem 0 4.5rem',
        background: 'var(--bg-secondary)',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Minimal Section Header */}
        <div style={{ maxWidth: '680px', marginBottom: '3rem' }}>
          <div className="section-tag">ABOUT & EXPERTISE</div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4.6vw, 3.8rem)',
              lineHeight: 1.1,
              color: '#ffffff',
              fontWeight: 300,
            }}
          >
            Atelier Direction & <span className="text-gold-italic">Advisory</span>
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              lineHeight: 1.6,
              marginTop: '0.65rem',
            }}
          >
            Derived from the Sanskrit <em>"অন্তর শোভা"</em> (Inner Radiance), Antar Shobha creates 
            deeply personal sanctuaries guided by Principal Designer <strong>Mr. Kaushik Banerjee</strong> and 
            Strategic Adviser <strong>Mr. Alapan Chakravorty</strong>.
          </p>
        </div>

        {/* 2-Column Layout: Left (Both Cards for Principal & Adviser), Right (Atelier Scope & Services) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Leadership & Visiting Cards (Principal & Adviser) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* Card 1: Mr. Kaushik Banerjee (Principal) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div
                className="visiting-card-replica"
                style={{
                  borderRadius: '16px',
                  border: '1px solid rgba(212, 178, 103, 0.35)',
                }}
              >
                <div className="visiting-card-inner">
                  {/* Brand Logo & Name */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-script)',
                        fontSize: '2.05rem',
                        color: 'var(--gold-primary)',
                        lineHeight: 1.1,
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
                        marginTop: '4px',
                        textTransform: 'uppercase',
                      }}
                    >
                      I N T E R I O R
                    </span>
                  </div>

                  {/* Vertical / Horizontal Divider */}
                  <div className="visiting-card-divider" />

                  {/* Principal Details */}
                  <div className="visiting-card-details">
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.15rem',
                        fontWeight: '600',
                        color: 'var(--gold-light)',
                      }}
                    >
                      Mr. Kaushik Banerjee
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Principal Interior Designer
                    </span>
                    <span
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        color: 'var(--gold-primary)',
                        marginTop: '0.15rem',
                      }}
                    >
                      M : {studioData.founder.displayPhone}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                      antarshobha@gmail.com
                    </span>
                    <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                      P-118/1, Kailash Ghosh Road, Kolkata - 700 008
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions for Mr. Kaushik Banerjee */}
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <a
                  href={`tel:${studioData.founder.rawPhone}`}
                  className="btn-secondary"
                  style={{ flex: 1, padding: '0.65rem', fontSize: '0.82rem' }}
                >
                  <Phone size={13} color="var(--gold-primary)" />
                  <span>Call Mr. Kaushik</span>
                </a>

                <a
                  href={studioData.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ flex: 1, padding: '0.65rem', fontSize: '0.82rem' }}
                >
                  <MessageSquare size={13} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Card 2: Mr. Alapan Chakravorty (Adviser) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div
                className="visiting-card-replica"
                style={{
                  borderRadius: '16px',
                  border: '1px solid rgba(212, 178, 103, 0.35)',
                  background: 'linear-gradient(135deg, rgba(17, 38, 32, 0.95) 0%, rgba(10, 22, 18, 0.98) 100%)',
                }}
              >
                <div className="visiting-card-inner">
                  {/* Brand Logo & Name */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-script)',
                        fontSize: '2.05rem',
                        color: 'var(--gold-primary)',
                        lineHeight: 1.1,
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
                        marginTop: '4px',
                        textTransform: 'uppercase',
                      }}
                    >
                      A D V I S E R
                    </span>
                  </div>

                  {/* Vertical / Horizontal Divider */}
                  <div className="visiting-card-divider" />

                  {/* Adviser Details */}
                  <div className="visiting-card-details">
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1.15rem',
                        fontWeight: '600',
                        color: 'var(--gold-light)',
                      }}
                    >
                      {studioData.adviser.name}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Strategic Adviser
                    </span>
                    <span
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        color: 'var(--gold-primary)',
                        marginTop: '0.15rem',
                      }}
                    >
                      M : {studioData.adviser.displayPhone}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                      Senior Advisory & Consultations
                    </span>
                    <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                      Kolkata, West Bengal
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions for Mr. Alapan Chakravorty */}
              <div style={{ display: 'flex', gap: '0.65rem' }}>
                <a
                  href={`tel:${studioData.adviser.rawPhone}`}
                  className="btn-secondary"
                  style={{ flex: 1, padding: '0.65rem', fontSize: '0.82rem' }}
                >
                  <Phone size={13} color="var(--gold-primary)" />
                  <span>Call Adviser</span>
                </a>

                <a
                  href={studioData.adviser.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{ flex: 1, padding: '0.65rem', fontSize: '0.82rem' }}
                >
                  <MessageSquare size={13} />
                  <span>WhatsApp Adviser</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Concise Atelier Scope & Services (Zero Images/Videos) */}
          <div
            className="glass-panel"
            style={{
              padding: '2.25rem 2.5rem',
              borderRadius: '20px',
              background: 'rgba(14, 27, 22, 0.85)',
              border: '1px solid rgba(212, 178, 103, 0.22)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.18em',
                  color: 'var(--gold-primary)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '0.3rem',
                }}
              >
                Comprehensive Expertise
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.85rem',
                  color: '#ffffff',
                }}
              >
                Atelier Scope & Services
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <h4 style={{ color: 'var(--gold-light)', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                  01. Private Residences & Luxury Penthouses
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.55 }}>
                  Comprehensive space planning, architectural zoning, acoustic wall panelling, and customized 2700K low-glare ambient lighting.
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem' }}>
                <h4 style={{ color: 'var(--gold-light)', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                  02. Sacred Mandirs & Custom Joinery
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.55 }}>
                  Handcrafted teakwood shrines, backlit lotus motifs, bespoke credenzas, and floor-to-ceiling wardrobe joinery.
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1rem' }}>
                <h4 style={{ color: 'var(--gold-light)', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                  03. Turnkey Execution & Site Oversight
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.55 }}>
                  End-to-end site management by Principal Mr. Kaushik Banerjee, fixed budgets, material procurement, and white-glove handover.
                </p>
              </div>
            </div>

            <button
              onClick={onContactClick}
              className="btn-outline-gold"
              style={{
                marginTop: '0.75rem',
                alignSelf: 'flex-start',
                padding: '0.75rem 1.6rem',
                fontSize: '0.84rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>Schedule Consultation</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
