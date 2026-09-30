import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Film, Sparkles, CheckCircle2 } from 'lucide-react';
import { videoReels } from '../data/projects';

export default function VideoReel() {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const currentReel = videoReels[activeReelIndex] || videoReels[0];

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

  const handleSelectReel = (index) => {
    setActiveReelIndex(index);
    setIsPlaying(false);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }, 150);
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section
      id="reels"
      style={{
        position: 'relative',
        padding: '6.5rem 0',
        background: 'var(--bg-secondary)',
      }}
    >
      <div className="ambient-glow-1" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-tag">SITE VERIFICATION & FINISHING</div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
              lineHeight: 1.1,
              color: '#ffffff',
              fontWeight: 300,
            }}
          >
            Live Site <span className="text-gold-italic">Walkthroughs</span>
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              maxWidth: '650px',
              marginTop: '0.75rem',
            }}
          >
            Actual on-site video documentation from recent handover projects in Kolkata. 
            All preview thumbnails are captured directly from the client project footage.
          </p>
        </div>

        {/* Video Player & Reels Showcase */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Main Video Frame with Glass Controls */}
          <div
            className="glass-panel"
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              background: '#070f0c',
              border: '1px solid rgba(212, 178, 103, 0.35)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.85)',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '9/16',
                maxHeight: '560px',
                margin: '0 auto',
                background: '#070f0c',
              }}
            >
              <video
                ref={videoRef}
                src={currentReel.videoUrl}
                poster={currentReel.poster}
                muted={isMuted}
                loop
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Top Reel Info Glass Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  left: '1.25rem',
                  right: '1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  zIndex: 3,
                }}
              >
                <span
                  style={{
                    background: 'rgba(11, 23, 19, 0.88)',
                    backdropFilter: 'blur(10px)',
                    color: 'var(--gold-light)',
                    padding: '0.35rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.74rem',
                    fontWeight: '600',
                    border: '1px solid rgba(212, 178, 103, 0.35)',
                  }}
                >
                  {currentReel.category} • Authentic Walkthrough
                </span>

                <button
                  onClick={handleFullscreen}
                  style={{
                    background: 'rgba(11, 23, 19, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(212, 178, 103, 0.3)',
                    color: 'var(--gold-light)',
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  title="Fullscreen"
                >
                  <Maximize size={15} />
                </button>
              </div>

              {/* Big Center Play Overlay if paused */}
              {!isPlaying && (
                <div
                  onClick={handlePlayToggle}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(8, 18, 14, 0.45)',
                    cursor: 'pointer',
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      width: '66px',
                      height: '66px',
                      borderRadius: '50%',
                      background: 'rgba(212, 178, 103, 0.92)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 35px rgba(212, 178, 103, 0.55)',
                      transform: 'scale(1)',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    <Play size={28} fill="#08120f" color="#08120f" style={{ marginLeft: '4px' }} />
                  </div>
                </div>
              )}

              {/* Bottom Video Controls Glass Bar */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1rem',
                  right: '1rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '16px',
                  background: 'rgba(11, 23, 19, 0.9)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(212, 178, 103, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  zIndex: 3,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', overflow: 'hidden' }}>
                  <button
                    onClick={handlePlayToggle}
                    style={{
                      background: 'rgba(212, 178, 103, 0.2)',
                      border: '1px solid var(--gold-primary)',
                      color: 'var(--gold-light)',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      flexShrink: 0,
                    }}
                  >
                    {isPlaying ? <Pause size={14} /> : <Play size={14} fill="var(--gold-light)" />}
                  </button>

                  <button
                    onClick={handleMuteToggle}
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      flexShrink: 0,
                    }}
                  >
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </button>

                  <span
                    style={{
                      fontSize: '0.82rem',
                      color: '#ffffff',
                      fontWeight: '500',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                    }}
                  >
                    {currentReel.title}
                  </span>
                </div>

                <span style={{ fontSize: '0.75rem', color: 'var(--gold-light)', flexShrink: 0, marginLeft: '0.5rem' }}>
                  {currentReel.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Right Playlist Selector with Actual Video Screenshots */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--gold-primary)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.78rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0.25rem',
              }}
            >
              <Film size={15} />
              <span>Select Project Walkthrough Reel</span>
            </div>

            {videoReels.map((reel, index) => {
              const isSelected = index === activeReelIndex;
              return (
                <div
                  key={reel.id}
                  onClick={() => handleSelectReel(index)}
                  className="glass-panel"
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    cursor: 'pointer',
                    background: isSelected
                      ? 'rgba(17, 38, 32, 0.9)'
                      : 'rgba(13, 25, 20, 0.65)',
                    border: isSelected
                      ? '1px solid var(--gold-primary)'
                      : '1px solid rgba(212, 178, 103, 0.15)',
                    boxShadow: isSelected ? '0 8px 25px rgba(212, 178, 103, 0.15)' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {/* Real Video Screenshot Thumbnail */}
                  <div
                    style={{
                      width: '60px',
                      height: '48px',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      position: 'relative',
                      flexShrink: 0,
                      border: isSelected
                        ? '1px solid var(--gold-primary)'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <img
                      src={reel.poster}
                      alt={reel.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0, 0, 0, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Play
                        size={14}
                        fill={isSelected ? 'var(--gold-primary)' : '#ffffff'}
                        color={isSelected ? 'var(--gold-primary)' : '#ffffff'}
                      />
                    </div>
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: '0.72rem',
                        color: isSelected ? 'var(--gold-light)' : 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        fontWeight: '600',
                      }}
                    >
                      {reel.category}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.05rem',
                        color: '#ffffff',
                        lineHeight: 1.25,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {reel.title}
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: '0.75rem',
                      color: isSelected ? 'var(--gold-light)' : 'var(--text-muted)',
                      flexShrink: 0,
                    }}
                  >
                    {reel.duration}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
