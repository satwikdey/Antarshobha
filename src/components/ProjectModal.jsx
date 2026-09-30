import React, { useState, useRef } from 'react';
import { X, Play, Pause, Volume2, VolumeX, MapPin, Calendar, Maximize2, Sparkles, ArrowUpRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onInquire }) {
  const [isVideoMode, setIsVideoMode] = useState(Boolean(project?.video));
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  if (!project) return null;

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

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
        background: 'rgba(6, 14, 11, 0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        animation: 'fadeIn 0.25s ease',
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '1020px',
          maxHeight: '92vh',
          overflowY: 'auto',
          borderRadius: '24px',
          background: 'rgba(14, 27, 22, 0.96)',
          border: '1px solid rgba(212, 178, 103, 0.35)',
          boxShadow: '0 25px 65px rgba(0, 0, 0, 0.9), 0 0 25px rgba(212, 178, 103, 0.1)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            zIndex: 10,
            background: 'rgba(10, 20, 16, 0.8)',
            border: '1px solid rgba(212, 178, 103, 0.3)',
            color: 'var(--gold-light)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(212, 178, 103, 0.25)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(10, 20, 16, 0.8)')}
        >
          <X size={20} />
        </button>

        {/* Media Frame */}
        <div style={{ position: 'relative', width: '100%', height: '480px', background: '#070f0c' }}>
          {isVideoMode && project.video ? (
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <video
                ref={videoRef}
                src={project.video}
                poster={project.image}
                muted={isMuted}
                loop
                playsInline
                autoPlay
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Video control buttons */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  display: 'flex',
                  gap: '0.6rem',
                  zIndex: 5,
                }}
              >
                <button
                  onClick={handlePlayToggle}
                  style={{
                    background: 'rgba(212, 178, 103, 0.95)',
                    border: 'none',
                    color: '#08120f',
                    padding: '0.4rem 0.95rem',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    cursor: 'pointer',
                  }}
                >
                  {isPlaying ? <Pause size={13} /> : <Play size={13} fill="#08120f" />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>

                <button
                  onClick={handleMuteToggle}
                  style={{
                    background: 'rgba(10, 20, 16, 0.8)',
                    border: '1px solid rgba(212, 178, 103, 0.3)',
                    color: '#ffffff',
                    padding: '0.4rem 0.95rem',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    cursor: 'pointer',
                  }}
                >
                  {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                  <span>{isMuted ? 'Muted' : 'Sound On'}</span>
                </button>
              </div>
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#060d0a' }}
            />
          )}

          {/* Toggle between Video & Photo if video exists */}
          {project.video && (
            <div
              style={{
                position: 'absolute',
                top: '1.25rem',
                left: '1.25rem',
                display: 'flex',
                gap: '0.5rem',
                zIndex: 5,
              }}
            >
              <button
                onClick={() => setIsVideoMode(true)}
                style={{
                  padding: '0.4rem 0.95rem',
                  borderRadius: '9999px',
                  fontSize: '0.76rem',
                  fontWeight: '600',
                  background: isVideoMode ? 'var(--gold-primary)' : 'rgba(10, 20, 16, 0.8)',
                  color: isVideoMode ? '#08120f' : '#ffffff',
                  border: '1px solid rgba(212, 178, 103, 0.35)',
                  cursor: 'pointer',
                }}
              >
                Video Walkthrough
              </button>

              <button
                onClick={() => setIsVideoMode(false)}
                style={{
                  padding: '0.4rem 0.95rem',
                  borderRadius: '9999px',
                  fontSize: '0.76rem',
                  fontWeight: '600',
                  background: !isVideoMode ? 'var(--gold-primary)' : 'rgba(10, 20, 16, 0.8)',
                  color: !isVideoMode ? '#08120f' : '#ffffff',
                  border: '1px solid rgba(212, 178, 103, 0.35)',
                  cursor: 'pointer',
                }}
              >
                High-Res Photo
              </button>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div style={{ padding: '2rem 2.5rem' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '1rem',
              marginBottom: '1rem',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--gold-primary)',
                  fontSize: '0.85rem',
                  marginBottom: '0.3rem',
                }}
              >
                <MapPin size={15} />
                <span>{project.location} • {project.area} • Completed {project.year}</span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.4rem',
                  color: '#ffffff',
                  lineHeight: 1.15,
                }}
              >
                {project.title}
              </h2>
            </div>

            <button
              onClick={() => {
                onClose();
                onInquire(project);
              }}
              className="btn-primary"
              style={{ padding: '0.75rem 1.6rem', fontSize: '0.85rem' }}
            >
              <span>Inquire This Aesthetic</span>
              <ArrowUpRight size={16} />
            </button>
          </div>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.02rem',
              lineHeight: 1.65,
              marginBottom: '1.75rem',
            }}
          >
            {project.description}
          </p>

          <div>
            <h4
              style={{
                fontSize: '0.82rem',
                color: 'var(--gold-light)',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '0.65rem',
                fontWeight: '600',
              }}
            >
              Architectural & Material Specifications
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.highlights.map((item, idx) => (
                <span
                  key={idx}
                  style={{
                    background: 'rgba(212, 178, 103, 0.08)',
                    border: '1px solid rgba(212, 178, 103, 0.2)',
                    color: 'var(--gold-light)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.82rem',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
