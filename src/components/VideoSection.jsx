import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Film } from 'lucide-react';
import { videoGallery } from '../data/media';

export default function VideoSection() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const currentVideo = videoGallery[activeVideoIndex] || videoGallery[0];

  // Enforce all videos are muted by default
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, [activeVideoIndex]);

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.muted = true; // Always muted
      setIsMuted(true);
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMuteToggle = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleSelectVideo = (index) => {
    setActiveVideoIndex(index);
    setIsPlaying(false);
    setIsMuted(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = true;
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
      id="videos"
      style={{
        position: 'relative',
        padding: '5.5rem 0 4.5rem',
        background: 'var(--bg-primary)',
      }}
    >
      <div className="ambient-glow-2" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Minimal Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">SITE VERIFICATION & FINISHING</div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4.6vw, 3.8rem)',
              lineHeight: 1.1,
              color: '#ffffff',
              fontWeight: 300,
            }}
          >
            Walkthrough <span className="text-gold-italic">Videos</span>
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.98rem',
              maxWidth: '580px',
              marginTop: '0.5rem',
            }}
          >
            On-site video documentation from recent handover projects in Kolkata. 
            All videos play muted by default. Every thumbnail is a screenshot from that specific video.
          </p>
        </div>

        {/* Video Player & Playlist Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Main Video Frame */}
          <div
            className="glass-panel"
            style={{
              borderRadius: '22px',
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
                maxHeight: '520px',
                margin: '0 auto',
                background: '#070f0c',
              }}
            >
              <video
                ref={videoRef}
                src={currentVideo.videoUrl}
                poster={currentVideo.thumbnail}
                preload="none"
                muted
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

              {/* Top Badge & Fullscreen */}
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  right: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  zIndex: 3,
                }}
              >
                <span
                  style={{
                    background: 'rgba(11, 23, 19, 0.9)',
                    backdropFilter: 'blur(10px)',
                    color: 'var(--gold-light)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    fontWeight: '600',
                    border: '1px solid rgba(212, 178, 103, 0.35)',
                  }}
                >
                  {currentVideo.category} • Muted Walkthrough
                </span>

                <button
                  onClick={handleFullscreen}
                  style={{
                    background: 'rgba(11, 23, 19, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(212, 178, 103, 0.3)',
                    color: 'var(--gold-light)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  title="Fullscreen"
                >
                  <Maximize size={14} />
                </button>
              </div>

              {/* Center Play Overlay when paused */}
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
                      width: '62px',
                      height: '62px',
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
                    <Play size={26} fill="#08120f" color="#08120f" style={{ marginLeft: '4px' }} />
                  </div>
                </div>
              )}

              {/* Bottom Controls Bar */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '0.85rem',
                  left: '0.85rem',
                  right: '0.85rem',
                  padding: '0.65rem 1rem',
                  borderRadius: '14px',
                  background: 'rgba(11, 23, 19, 0.9)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(212, 178, 103, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  zIndex: 3,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', overflow: 'hidden' }}>
                  <button
                    onClick={handlePlayToggle}
                    style={{
                      background: 'rgba(212, 178, 103, 0.2)',
                      border: '1px solid var(--gold-primary)',
                      color: 'var(--gold-light)',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      flexShrink: 0,
                    }}
                  >
                    {isPlaying ? <Pause size={13} /> : <Play size={13} fill="var(--gold-light)" />}
                  </button>

                  <button
                    onClick={handleMuteToggle}
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: isMuted ? 'var(--gold-light)' : '#ffffff',
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      flexShrink: 0,
                    }}
                    title={isMuted ? 'Muted' : 'Unmuted'}
                  >
                    {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                  </button>

                  <span
                    style={{
                      fontSize: '0.8rem',
                      color: '#ffffff',
                      fontWeight: '500',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                    }}
                  >
                    {currentVideo.title}
                  </span>
                </div>

                <span style={{ fontSize: '0.74rem', color: 'var(--gold-light)', flexShrink: 0, marginLeft: '0.5rem' }}>
                  {currentVideo.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Playlist with Video Screenshot Thumbnails (6 Videos) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                color: 'var(--gold-primary)',
                fontFamily: 'var(--font-display)',
                fontSize: '0.74rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0.25rem',
              }}
            >
              <Film size={14} />
              <span>Select Walkthrough ({videoGallery.length} Videos)</span>
            </div>

            {videoGallery.map((video, index) => {
              const isSelected = index === activeVideoIndex;
              return (
                <div
                  key={video.id}
                  onClick={() => handleSelectVideo(index)}
                  className="glass-panel"
                  style={{
                    padding: '0.65rem 0.85rem',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    cursor: 'pointer',
                    background: isSelected
                      ? 'rgba(17, 38, 32, 0.95)'
                      : 'rgba(13, 25, 20, 0.65)',
                    border: isSelected
                      ? '1px solid var(--gold-primary)'
                      : '1px solid rgba(212, 178, 103, 0.15)',
                    boxShadow: isSelected ? '0 6px 20px rgba(212, 178, 103, 0.15)' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {/* Screenshot Thumbnail extracted directly from video */}
                  <div
                    style={{
                      width: '64px',
                      height: '46px',
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
                      src={video.thumbnail}
                      alt={video.title}
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
                        size={13}
                        fill={isSelected ? 'var(--gold-primary)' : '#ffffff'}
                        color={isSelected ? 'var(--gold-primary)' : '#ffffff'}
                      />
                    </div>
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: '0.68rem',
                        color: isSelected ? 'var(--gold-light)' : 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontWeight: '600',
                      }}
                    >
                      {video.category}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1rem',
                        color: '#ffffff',
                        lineHeight: 1.2,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {video.title}
                    </div>
                  </div>

                  <div
                    style={{
                      fontSize: '0.72rem',
                      color: isSelected ? 'var(--gold-light)' : 'var(--text-muted)',
                      flexShrink: 0,
                    }}
                  >
                    {video.duration}
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
