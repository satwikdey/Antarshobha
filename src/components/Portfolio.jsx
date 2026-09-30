import React, { useState } from 'react';
import { Play, Eye, ArrowUpRight, Sparkles, MapPin, Maximize2 } from 'lucide-react';
import { projectsData } from '../data/projects';

export default function Portfolio({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Private Residential' },
    { id: 'custom', label: 'Custom Joinery & Mandir' },
    { id: 'commercial', label: 'Executive Den & Study' },
    { id: 'video', label: 'Walkthroughs' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'video') return Boolean(project.video);
    return project.category === activeCategory;
  });

  const featuredProject = projectsData[0]; // The Alipore Contemporary Living Suite with Liv1a.JPG

  return (
    <section
      id="portfolio"
      style={{
        position: 'relative',
        padding: '6.5rem 0',
        background: 'var(--bg-secondary)',
      }}
    >
      <div className="ambient-glow-1" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-tag">REALIZED WORKS & CRAFTSMANSHIP</div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
              lineHeight: 1.1,
              color: '#ffffff',
              fontWeight: 300,
            }}
          >
            Curated <span className="text-gold-italic">Portfolio</span>
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.05rem',
              maxWidth: '620px',
              marginTop: '0.75rem',
            }}
          >
            Authentic residential suites, handcrafted sacred mandirs, and bespoke joinery realized across Kolkata by Antar Shobha Interior.
          </p>
        </div>

        {/* Featured Full-Extended Project Showcase */}
        {featuredProject && (
          <div
            onClick={() => onSelectProject(featuredProject)}
            className="glass-panel glass-card-hover"
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              marginBottom: '3.5rem',
              cursor: 'pointer',
              border: '1px solid rgba(212, 178, 103, 0.35)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.75)',
            }}
          >
            <div
              style={{
                position: 'relative',
                height: '460px',
                backgroundImage: `url('${featuredProject.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center 42%',
              }}
            >
              {/* Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(10, 20, 17, 0.25) 0%, rgba(10, 20, 17, 0.6) 50%, rgba(10, 20, 17, 0.96) 100%)',
                }}
              />

              {/* Top Banner Tag */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '1.5rem',
                  display: 'flex',
                  gap: '0.6rem',
                }}
              >
                <span
                  style={{
                    background: 'rgba(17, 38, 32, 0.9)',
                    color: 'var(--gold-light)',
                    padding: '0.4rem 1.1rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(212, 178, 103, 0.3)',
                  }}
                >
                  Featured Signature Residence
                </span>
                {featuredProject.video && (
                  <span
                    style={{
                      background: 'rgba(212, 178, 103, 0.9)',
                      color: '#08120f',
                      padding: '0.4rem 0.95rem',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      letterSpacing: '0.04em',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <Play size={12} fill="#08120f" />
                    <span>Watch Site Walkthrough</span>
                  </span>
                )}
              </div>

              {/* Bottom Card Content */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.75rem',
                  left: '2rem',
                  right: '2rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  gap: '1.5rem',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: 'var(--gold-primary)',
                      fontSize: '0.82rem',
                      marginBottom: '0.35rem',
                    }}
                  >
                    <MapPin size={14} />
                    <span>{featuredProject.location}</span>
                    <span>•</span>
                    <span>{featuredProject.area}</span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
                      color: '#ffffff',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {featuredProject.title}
                  </h3>

                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.92rem',
                      maxWidth: '680px',
                      lineHeight: 1.5,
                    }}
                  >
                    {featuredProject.description}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    background: 'rgba(212, 178, 103, 0.15)',
                    border: '1px solid rgba(212, 178, 103, 0.35)',
                    padding: '0.75rem 1.4rem',
                    borderRadius: '9999px',
                    color: 'var(--gold-light)',
                    fontSize: '0.84rem',
                    fontWeight: '600',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Eye size={16} />
                  <span>Inspect Project Details</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Navigation */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '2.5rem',
            alignItems: 'center',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="glass-panel glass-card-hover"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'rgba(14, 27, 22, 0.85)',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                border: '1px solid rgba(212, 178, 103, 0.22)',
              }}
            >
              {/* Thumbnail Container */}
              <div
                style={{
                  position: 'relative',
                  height: '260px',
                  backgroundImage: `url('${project.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
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

                {/* Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    display: 'flex',
                    gap: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      background: 'rgba(11, 23, 19, 0.85)',
                      color: 'var(--gold-light)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      border: '1px solid rgba(212, 178, 103, 0.25)',
                    }}
                  >
                    {project.tag}
                  </span>

                  {project.video && (
                    <span
                      style={{
                        background: 'rgba(212, 178, 103, 0.9)',
                        color: '#08120f',
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      title="Includes Video Walkthrough"
                    >
                      <Play size={11} fill="#08120f" />
                    </span>
                  )}
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    background: 'rgba(10, 20, 17, 0.75)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '50%',
                    width: '34px',
                    height: '34px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-light)',
                  }}
                >
                  <Maximize2 size={14} />
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--gold-primary)',
                    fontSize: '0.78rem',
                    marginBottom: '0.35rem',
                  }}
                >
                  <MapPin size={12} />
                  <span>{project.location}</span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.45rem',
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    lineHeight: 1.25,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.86rem',
                    lineHeight: 1.55,
                    marginBottom: '1.25rem',
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                {/* Highlights tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.highlights.map((hl, i) => (
                    <span
                      key={i}
                      style={{
                        background: 'rgba(212, 178, 103, 0.08)',
                        color: 'var(--gold-light)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '6px',
                        fontSize: '0.72rem',
                        border: '1px solid rgba(212, 178, 103, 0.15)',
                      }}
                    >
                      {hl}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
