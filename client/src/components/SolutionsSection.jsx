import React from 'react';
import { turnkeyServices } from '../data/projectsData';
import { Zap, ShieldCheck, Cpu, Activity } from 'lucide-react';

const iconMap = {
  Zap,
  ShieldCheck,
  Cpu,
  Activity
};

export default function SolutionsSection() {
  return (
    <section id="services" style={{ padding: '95px 0', background: 'var(--surface-light)' }}>
      <div className="container">
        
        <div className="section-header center">
          <div className="eyebrow">Project Capabilities</div>
          <h2 className="section-title">Turnkey Engineering & Contracting Works</h2>
          <p className="section-desc center">
            Practical on-site electrical execution, high-voltage equipment installation, and certified testing.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {turnkeyServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Zap;
            return (
              <div
                key={service.id}
                style={{
                  background: '#ffffff',
                  border: '1.5px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  transition: 'all 0.25s ease',
                  boxShadow: 'var(--shadow-sm)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'var(--gold-primary)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'var(--primary-navy)',
                  color: 'var(--gold-primary)',
                  display: 'grid',
                  placeItems: 'center',
                  marginBottom: '20px'
                }}>
                  <IconComponent size={26} />
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  marginBottom: '12px',
                  color: 'var(--primary-navy)',
                  lineHeight: 1.3
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: '0.92rem',
                  color: '#475569',
                  lineHeight: 1.65
                }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
