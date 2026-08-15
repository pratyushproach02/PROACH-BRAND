import React from 'react';
import { caseStudies } from '../data/projectsData';
import { MapPin, CheckCircle } from 'lucide-react';

export default function ProjectsShowcase() {
  return (
    <section id="projects" style={{ padding: '100px 0', background: 'var(--secondary-navy)', color: '#ffffff' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="eyebrow" style={{ color: 'var(--gold-primary)' }}>Selected Milestones & Case Studies</div>
          <div>
            <h2 className="section-title light">Proven Execution Where Failure is Not an Option</h2>
            <p className="section-desc light">
              A glimpse into our milestone power installations, high-voltage substations, and critical facility projects.
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px'
        }}>
          {caseStudies.map((project) => (
            <div
              key={project.id}
              style={{
                background: 'var(--card-navy)',
                border: '1.5px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-lg)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--gold-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              <div>
                {/* Badges */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
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
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px',
                  marginBottom: '16px',
                  fontSize: '0.85rem'
                }}>
                  <strong style={{ color: 'var(--gold-light)', display: 'block', marginBottom: '4px' }}>
                    Scope of Supply & Works:
                  </strong>
                  <span style={{ color: '#cbd5e1' }}>{project.scope}</span>
                </div>

                {/* Summary */}
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '16px' }}>
                  {project.summary}
                </p>
              </div>

              {/* Highlight */}
              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
