import React from 'react';
import { ShieldCheck, Zap } from 'lucide-react';

export default function AboutCompany({ onNavigate }) {
  return (
    <section id="about-company" style={{ padding: '95px 0', background: '#ffffff' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '56px',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Executive Corporate Narrative */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: 'var(--primary-navy)',
              marginBottom: '22px'
            }}>
              Building Critical Power Infrastructure with Solid Foundations
            </h2>

            <p style={{
              fontSize: '1.02rem',
              lineHeight: 1.7,
              color: '#334155',
              marginBottom: '18px'
            }}>
              Founded in <strong>1989</strong>, <strong>Proach Associates Builders & Engineers</strong> has grown into an established Engineering, Procurement, and Construction (EPC) leader and heavy electrical equipment distributor in Northern India. 
            </p>

            <p style={{
              fontSize: '1.02rem',
              lineHeight: 1.7,
              color: '#334155'
            }}>
              Over three decades, we have engineered and commissioned turnkey 33kV/11kV substations, heavy transformer yards, underground armored networks, and resilient micro-grids across <strong>Leh, Lamayuru, Tangste</strong>, and strategic Himalayan sectors. Our certified teams work in close coordination with prestigious agencies including the <strong>Military Engineer Services (MES), Northern Command, CPWD, and State Power Corporations</strong> to deliver uncompromised grid reliability.
            </p>
          </div>

          {/* Right Column: Visual Engineering Showcase Card with High-Impact 1M+ KM Milestone */}
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: '0 24px 50px rgba(7, 17, 30, 0.16)',
            border: '1.5px solid var(--border-light)',
            background: 'linear-gradient(150deg, #0e223a 0%, #07111e 100%)',
            padding: '44px 38px',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <div style={{
              position: 'absolute',
              top: '-30px',
              right: '-30px',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(229, 169, 16, 0.28) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />

            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(229, 169, 16, 0.15)',
                border: '1px solid rgba(229, 169, 16, 0.35)',
                color: 'var(--gold-primary)',
                fontSize: '0.82rem',
                fontWeight: 700,
                marginBottom: '20px'
              }}>
                <ShieldCheck size={16} /> Decades of Proven Field Performance
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 700,
                lineHeight: 1.28,
                marginBottom: '16px',
                color: '#ffffff'
              }}>
                Comprehensive High-Voltage Infrastructure Across All Terrains & Climates
              </h3>

              <p style={{
                fontSize: '0.98rem',
                color: '#cbd5e1',
                lineHeight: 1.7,
                marginBottom: '24px'
              }}>
                Executing electrical power projects across all operating environments—from urban centers, 
                industrial corridors, and commercial hubs to high-altitude and strategic frontier sectors 
                including Jammu & Kashmir and Ladakh.
              </p>

              {/* Premium Customer-Facing Milestone Card */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(229, 169, 16, 0.14) 0%, rgba(15, 35, 60, 0.65) 100%)',
                border: '1.5px solid rgba(229, 169, 16, 0.4)',
                borderRadius: 'var(--radius-md)',
                padding: '24px 22px',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Subtle top badge */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '10px'
                }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#f5c443'
                  }}>
                    <Zap size={14} style={{ color: '#f5c443' }} /> Verified Grid Milestone
                  </span>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#10b981',
                    background: 'rgba(16, 185, 129, 0.15)',
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    border: '1px solid rgba(16, 185, 129, 0.3)'
                  }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#10b981',
                      boxShadow: '0 0 8px #10b981'
                    }}></span>
                    Active & Expanding
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
                  <div style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f5c443 60%, #e5a910 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                  }}>
                    1,000,000+
                  </div>
                  <div style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#f5c443',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                    Kilometers
                  </div>
                </div>

                <div style={{
                  fontSize: '0.98rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  marginBottom: '6px'
                }}>
                  High-Tension Cables & Overhead Transmission Lines Laid
                </div>

                <p style={{
                  fontSize: '0.86rem',
                  color: '#cbd5e1',
                  lineHeight: 1.5,
                  margin: 0
                }}>
                  Successfully energized and sustained across rugged mountain passes, military cantonments, and key industrial belts.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
