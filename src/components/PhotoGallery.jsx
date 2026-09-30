import React, { useState } from 'react';
import { Camera, Maximize2, MapPin } from 'lucide-react';
import { photoGallery } from '../data/media';

export default function PhotoGallery({ onSelectPhoto }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'living', label: 'Living' },
    { id: 'bedroom', label: 'Bedrooms' },
    { id: 'mandir', label: 'Mandir' },
    { id: 'dining', label: 'Dining' },
    { id: 'study', label: 'Study & Foyer' },
    { id: 'joinery', label: 'Custom Joinery' }
  ];

  const filteredPhotos = photoGallery.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'study') return item.category === 'study' || item.category === 'foyer';
    return item.category === activeFilter;
  });

  return (
    <section
      id="photos"
      style={{
        position: 'relative',
        padding: '5.5rem 0 4.5rem',
        background: 'var(--bg-secondary)',
      }}
    >
      <div className="ambient-glow-1" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Minimal Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '1.25rem',
            marginBottom: '2.5rem',
          }}
        >
          <div>
            <div className="section-tag">PORTFOLIO PHOTOGRAPHY</div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4.6vw, 3.8rem)',
                lineHeight: 1.1,
                color: '#ffffff',
                fontWeight: 300,
              }}
            >
              Realized <span className="text-gold-italic">Spaces</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`filter-pill ${activeFilter === cat.id ? 'active' : ''}`}
                style={{ padding: '0.45rem 1.15rem', fontSize: '0.8rem' }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Photography Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filteredPhotos.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectPhoto(item)}
              className="glass-panel glass-card-hover"
              style={{
                borderRadius: '18px',
                overflow: 'hidden',
                background: 'rgba(14, 27, 22, 0.85)',
                cursor: 'pointer',
                border: '1px solid rgba(212, 178, 103, 0.22)',
                position: 'relative',
              }}
            >
              {/* Photo Viewport */}
              <div
                style={{
                  position: 'relative',
                  height: '280px',
                  backgroundImage: `url('${item.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Subtle gradient scrim */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(180deg, transparent 55%, rgba(9, 18, 15, 0.95) 100%)',
                  }}
                />

                {/* Category Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.85rem',
                    left: '0.85rem',
                  }}
                >
                  <span
                    style={{
                      background: 'rgba(10, 20, 16, 0.85)',
                      color: 'var(--gold-light)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      border: '1px solid rgba(212, 178, 103, 0.25)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Expand Icon */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.85rem',
                    right: '0.85rem',
                    background: 'rgba(10, 20, 16, 0.8)',
                    border: '1px solid rgba(212, 178, 103, 0.3)',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-light)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Maximize2 size={13} />
                </div>

                {/* Bottom title & location */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1.25rem',
                    right: '1.25rem',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.3rem',
                      color: '#ffffff',
                      lineHeight: 1.2,
                      marginBottom: '0.25rem',
                    }}
                  >
                    {item.title}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--gold-primary)',
                      fontSize: '0.76rem',
                    }}
                  >
                    <MapPin size={11} />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
