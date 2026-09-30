import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock, Globe } from 'lucide-react';
import { studioData } from '../data/team';

export default function ContactFlow() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'residential',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: '5.5rem 0 5rem',
        background: 'var(--bg-primary)',
      }}
    >
      <div className="ambient-glow-2" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Minimal Header */}
        <div style={{ maxWidth: '600px', marginBottom: '2.5rem' }}>
          <div className="section-tag">DIRECT ATELIER INQUIRY</div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4.6vw, 3.8rem)',
              lineHeight: 1.1,
              color: '#ffffff',
              fontWeight: 300,
            }}
          >
            Get In <span className="text-gold-italic">Touch</span>
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '0.98rem',
              marginTop: '0.5rem',
            }}
          >
            Connect directly with Kaushik Banerjee to discuss your residence or schedule an atelier visit.
          </p>
        </div>

        {/* 2-Column Compact Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.25rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Contacts */}
          <div
            className="glass-panel"
            style={{
              padding: '2.25rem',
              borderRadius: '20px',
              background: 'rgba(14, 27, 22, 0.85)',
              border: '1px solid rgba(212, 178, 103, 0.22)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.4rem',
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
                  marginBottom: '0.35rem',
                }}
              >
                Principal Contact
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.85rem',
                  color: '#ffffff',
                  marginBottom: '0.2rem',
                }}
              >
                Kaushik Banerjee
              </h3>
              <span style={{ fontSize: '0.84rem', color: 'var(--gold-light)' }}>
                Antar Shobha Interior
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={16} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                <a
                  href={`tel:${studioData.contact.rawPhone}`}
                  style={{ color: 'var(--gold-light)', textDecoration: 'none', fontWeight: '500' }}
                >
                  {studioData.contact.phone}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={16} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                <a
                  href={`mailto:${studioData.contact.email}`}
                  style={{ color: '#ffffff', textDecoration: 'none' }}
                >
                  {studioData.contact.email}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Globe size={16} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                <span style={{ color: 'var(--text-secondary)' }}>
                  {studioData.contact.website}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={16} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  {studioData.contact.address}
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <a
                href={`tel:${studioData.contact.rawPhone}`}
                className="btn-secondary"
                style={{ flex: 1, padding: '0.75rem', fontSize: '0.85rem' }}
              >
                <Phone size={14} color="var(--gold-primary)" />
                <span>Call Now</span>
              </a>

              <a
                href={studioData.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ flex: 1, padding: '0.75rem', fontSize: '0.85rem' }}
              >
                <MessageSquare size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Short Consultation Form */}
          <div
            className="glass-panel"
            style={{
              padding: '2.25rem',
              borderRadius: '20px',
              background: 'rgba(14, 27, 22, 0.88)',
              border: '1px solid rgba(212, 178, 103, 0.28)',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: 'rgba(212, 178, 103, 0.15)',
                    border: '1px solid var(--gold-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                  }}
                >
                  <CheckCircle2 size={28} color="var(--gold-primary)" />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.8rem',
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                  }}
                >
                  Inquiry Received
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                  Kaushik Banerjee will personally connect with you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                  style={{ padding: '0.65rem 1.4rem', fontSize: '0.82rem' }}
                >
                  Submit Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.65rem',
                      color: '#ffffff',
                      marginBottom: '0.25rem',
                    }}
                  >
                    Quick Consultation Form
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                    Share your residence location and project requirements.
                  </p>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.74rem',
                      color: 'var(--gold-light)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '0.35rem',
                      fontWeight: '600',
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kaushik Banerjee"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(212, 178, 103, 0.2)',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.74rem',
                      color: 'var(--gold-light)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '0.35rem',
                      fontWeight: '600',
                    }}
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 70031 09728"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(212, 178, 103, 0.2)',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.74rem',
                      color: 'var(--gold-light)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '0.35rem',
                      fontWeight: '600',
                    }}
                  >
                    Project Type
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      background: '#0d1c17',
                      border: '1px solid rgba(212, 178, 103, 0.2)',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  >
                    <option value="residential">Complete Residential Suite</option>
                    <option value="mandir">Sacred Mandir & Custom Joinery</option>
                    <option value="renovation">Renovation & Turnkey Execution</option>
                    <option value="consultation">Design Consultation Only</option>
                  </select>
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.74rem',
                      color: 'var(--gold-light)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '0.35rem',
                      fontWeight: '600',
                    }}
                  >
                    Brief Note
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Location in Kolkata, timeline, or specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(212, 178, 103, 0.2)',
                      color: '#ffffff',
                      fontSize: '0.88rem',
                      outline: 'none',
                      resize: 'none',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.85rem',
                    fontSize: '0.85rem',
                    cursor: loading ? 'wait' : 'pointer',
                  }}
                >
                  <Send size={14} />
                  <span>{loading ? 'Submitting...' : 'Send Inquiry to Kaushik Banerjee'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
