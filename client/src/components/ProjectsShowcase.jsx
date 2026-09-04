import React from 'react';
import { caseStudies } from '../data/projectsData';
import { MapPin, CheckCircle, ArrowRight } from 'lucide-react';

export default function ProjectsShowcase({ onNavigate }) {
  return (
    <section id="projects" style={{ padding: '100px 0', background: 'var(--secondary-navy)', color: '#ffffff' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="eyebrow" style={{ color: 'var(--gold-primary)' }}>Selected Milestones & Field Execution</div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <h2 className="section-title light">Proven Execution Where Failure is Not an Option</h2>
              <p className="section-desc light">
                A glimpse into our milestone power installations, high-voltage substations, and critical facility projects.
              </p>
            </div>
            {onNavigate && (
              <button 
                onClick={() => {
                  onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
                className="btn btn-primary btn-sm"
              >
                Book Technical Consultation <ArrowRight size={15} />
              </button>
            )}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '28px'
        }}>
          {caseStudies.map((project) => (
            <div
              key={project.id}
              style={{
                background: 'var(--card-navy)',
                border: '1.5px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'var(--gold-primary)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(229, 169, 16, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
              }}
            >
              {/* Clean On-Site Project Photo */}
              {project.image && (
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '235px',
                  overflow: 'hidden',
                  background: '#07111e',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
              )}

              <div style={{ padding: '30px' }}>
                {/* Badges */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                  <span className="badge badge-gold">{project.sector}</span>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.78rem',
                    color: 'var(--text-light-muted)'
                  }}>
                    <MapPin size={13} style={{ color: 'var(--gold-primary)' }} /> {project.location}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  lineHeight: 1.3,
                  marginBottom: '14px',
                  color: '#ffffff'
                }}>
                  {project.title}
                </h3>

                {/* Scope Box */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px',
                  marginBottom: '16px',
                  fontSize: '0.85rem'
                }}>
                  <strong style={{ color: 'var(--gold-light)', display: 'block', marginBottom: '4px' }}>
                    Scope of Supply & Works:
                  </strong>
                  <span style={{ color: '#cbd5e1', lineHeight: 1.5 }}>{project.scope}</span>
                </div>

                {/* Summary */}
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '16px' }}>
                  {project.summary}
                </p>
              </div>

              {/* Highlight & Consultation Trigger */}
              <div style={{
                padding: '16px 30px 24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.82rem',
                  color: 'var(--gold-primary)',
                  fontWeight: 600
                }}>
                  <CheckCircle size={16} style={{ flexShrink: 0 }} />
                  <span>{project.highlight}</span>
                </div>

                {onNavigate && (
                  <div style={{ marginTop: '6px' }}>
                    <button
                      onClick={() => {
                        onNavigate('products');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.16)',
                        borderRadius: 'var(--radius-sm)',
                        color: '#ffffff',
                        fontSize: '0.84rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(229, 169, 16, 0.15)';
                        e.currentTarget.style.borderColor = 'var(--gold-primary)';
                        e.currentTarget.style.color = 'var(--gold-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                    >
                      View Related Equipment <ArrowRight size={14} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
