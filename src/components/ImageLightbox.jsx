import React from 'react';
import { X, MapPin } from 'lucide-react';

export default function ImageLightbox({ photo, onClose }) {
  if (!photo) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(6, 14, 11, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '960px',
          maxHeight: '90vh',
          overflow: 'hidden',
          borderRadius: '22px',
          background: 'rgba(14, 27, 22, 0.98)',
          border: '1px solid rgba(212, 178, 103, 0.35)',
          boxShadow: '0 25px 65px rgba(0, 0, 0, 0.9)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            background: 'rgba(10, 20, 16, 0.85)',
            border: '1px solid rgba(212, 178, 103, 0.35)',
            color: 'var(--gold-light)',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
          }}
          aria-label="Close photo view"
        >
          <X size={18} />
        </button>

        {/* Image Container */}
        <div
          style={{
            width: '100%',
            height: '70vh',
            maxHeight: '580px',
            background: '#060d0a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <img
            src={photo.image}
            alt={photo.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Minimal Caption Footer */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderTop: '1px solid rgba(212, 178, 103, 0.15)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                color: '#ffffff',
                marginBottom: '0.2rem',
              }}
            >
              {photo.title}
            </h3>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--gold-primary)',
                fontSize: '0.8rem',
              }}
            >
              <MapPin size={12} />
              <span>{photo.location}</span>
            </div>
          </div>

          <span
            style={{
              background: 'rgba(212, 178, 103, 0.12)',
              color: 'var(--gold-light)',
              border: '1px solid rgba(212, 178, 103, 0.25)',
              padding: '0.3rem 0.8rem',
              borderRadius: '9999px',
              fontSize: '0.74rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            {photo.categoryLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
