import React from 'react';
import { stats } from '../data/projectsData';
import { Award, Zap, Shield, CheckCircle2 } from 'lucide-react';

const icons = [Award, Zap, Shield, CheckCircle2];

export default function StatsBadge() {
  return (
    <section style={{
      background: 'var(--secondary-navy)',
      padding: '40px 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px'
        }}>
          {stats.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(229, 169, 16, 0.12)',
                  display: 'grid',
                  placeItems: 'center',
                  color: 'var(--gold-primary)',
                  flexShrink: 0
                }}>
                  <Icon size={24} />
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    color: 'var(--gold-primary)',
                    lineHeight: 1.1
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginTop: '2px'
                  }}>
                    {stat.label}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-light-muted)'
                  }}>
                    {stat.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
