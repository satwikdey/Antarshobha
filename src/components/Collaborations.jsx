import React from 'react';
import { ArrowUpRight, Sparkles, Building2, Layers, Award, Handshake } from 'lucide-react';
import { collaborationsData } from '../data/collaborations';

export default function Collaborations({ onContactClick }) {
  return (
    <section
      id="collaborations"
      style={{
        position: 'relative',
        padding: '6.5rem 0',
        background: 'var(--bg-primary)',
      }}
    >
      <div className="ambient-glow-2" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag">MATERIALS & ATELIER PARTNERSHIPS</div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
              lineHeight: 1.1,
              color: '#ffffff',
              fontWeight: 300,
            }}
          >
            Material <span className="text-gold-italic">Craftsmanship</span>
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              maxWidth: '620px',
              marginTop: '0.75rem',
            }}
          >
            Fine natural stones, master woodcarving guilds, and tailored acoustic fabrics curated by Kaushik Banerjee for lasting architectural grace.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            marginBottom: '4.5rem',
          }}
        >
          {collaborationsData.map((collab) => (
            <div
              key={collab.id}
              className="glass-panel glass-card-hover"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'rgba(14, 27, 22, 0.85)',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid rgba(212, 178, 103, 0.22)',
              }}
            >
              <div
                style={{
                  height: '240px',
                  backgroundImage: `url('${collab.image}')`,
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
                      'linear-gradient(180deg, transparent 40%, rgba(10, 20, 17, 0.95) 100%)',
                  }}
                />
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span
                  style={{
                    color: 'var(--gold-primary)',
                    fontSize: '0.74rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    fontWeight: '600',
                    marginBottom: '0.35rem',
                  }}
                >
                  {collab.category}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.55rem',
                    color: '#ffffff',
                    marginBottom: '0.65rem',
                  }}
                >
                  {collab.name}
                </h3>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.88rem',
                    lineHeight: 1.55,
                    marginBottom: '1.25rem',
                    flex: 1,
                  }}
                >
                  {collab.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {collab.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.72rem',
                        color: 'var(--gold-light)',
                        background: 'rgba(212, 178, 103, 0.1)',
                        border: '1px solid rgba(212, 178, 103, 0.2)',
                        padding: '0.2rem 0.65rem',
                        borderRadius: '9999px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Call to Action Card */}
        <div
          className="glass-panel"
          style={{
            padding: '2.5rem 3rem',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(14, 28, 23, 0.9) 0%, rgba(18, 38, 30, 0.85) 100%)',
            border: '1px solid rgba(212, 178, 103, 0.3)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
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
              Consultations & Suppliers
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                color: '#ffffff',
                lineHeight: 1.2,
              }}
            >
              Interested in a <span className="text-gold-italic">collaboration?</span>
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                maxWidth: '560px',
                marginTop: '0.5rem',
              }}
            >
              We welcome partnerships with bespoke stone quarries, lighting engineers, fabric ateliers, and master millwork suppliers.
            </p>
          </div>

          <button
            onClick={onContactClick}
            className="btn-outline-gold"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.85rem 2rem',
              fontSize: '0.88rem',
            }}
          >
            <span>Initiate Dialogue</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
