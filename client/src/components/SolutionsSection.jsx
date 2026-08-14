import React from 'react';
import { turnkeyServices } from '../data/projectsData';
import { Zap, ShieldCheck, Cpu, Activity, ArrowRight } from 'lucide-react';

const iconMap = {
  Zap,
  ShieldCheck,
  Cpu,
  Activity
};

export default function SolutionsSection() {
  return (
    <section id="services" style={{ padding: '100px 0', background: '#ffffff' }}>
      <div className="container">
        
        <div className="section-header center">
          <div className="eyebrow">End-to-End Project Execution</div>
          <h2 className="section-title">Turnkey Engineering, Procurement & Commissioning</h2>
          <p className="section-desc center">
            Beyond product supply, we take end-to-end responsibility for electrical design, fabrication, 
            erection, testing, and statutory approvals.
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
                  background: 'var(--surface-light)',
                  border: '1.5px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'var(--gold-primary)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'var(--primary-navy)',
                    color: 'var(--gold-primary)',
                    display: 'grid',
                    placeItems: 'center',
                    marginBottom: '24px'
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
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6
                  }}>
                    {service.description}
                  </p>
                </div>

                <div style={{
                  paddingTop: '20px',
                  marginTop: '20px',
                  borderTop: '1px solid var(--border-light)'
                }}>
                  <a
                    href="#contact"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.88rem',
                      fontWeight: 700,
                      color: 'var(--gold-dark)'
                    }}
                  >
                    Consult on this Solution <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
