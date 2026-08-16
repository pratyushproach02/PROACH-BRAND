import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function AboutCompany() {
  return (
    <section id="about-company" style={{ padding: '95px 0', background: '#ffffff' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '56px',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Corporate Narrative */}
          <div>
            <div className="eyebrow" style={{ color: 'var(--gold-dark)' }}>
              Corporate Profile & Heritage
            </div>

            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: 'var(--primary-navy)',
              marginBottom: '24px'
            }}>
              Building Critical Power Infrastructure with Solid Foundations
            </h2>

            <p style={{
              fontSize: '1.02rem',
              lineHeight: 1.7,
              color: '#334155',
              marginBottom: '20px'
            }}>
              We are a premier integrated Engineering, Procurement, and Construction (EPC) firm and heavy equipment distributor with extensive experience in executing high-stakes electrical and power infrastructure projects. Our proven portfolio includes <strong>Air Force stations, high-voltage substations, military cantonments, and radar & defense communication grids</strong>, demonstrating our comprehensive engineering capabilities across diverse operational environments.
            </p>

            <p style={{
              fontSize: '1.02rem',
              lineHeight: 1.7,
              color: '#334155',
              marginBottom: '28px'
            }}>
              Founded in <strong>1989</strong>, our company has grown into a cornerstone engineering partner in Northern India and strategic frontier sectors. Under visionary technical leadership, we have evolved from executing foundational power distribution networks to delivering turnkey 33kV/11kV substations, high-altitude resilient micro-grids in <strong>Leh, Durbuk, and Tangste</strong>, and large-scale industrial electrification. Over the decades, we have forged enduring partnerships with prestigious agencies including the <strong>Military Engineer Services (MES), Northern Command, CPWD, and State Power Corporations</strong>, consistently delivering exceptional quality that meets both client expectations and rigorous industry standards.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              padding: '20px',
              background: 'var(--surface-light)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-light)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} style={{ color: '#b88307', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-navy)' }}>
                  Founded in 1989
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} style={{ color: '#b88307', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-navy)' }}>
                  Class MES Contractor
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} style={{ color: '#b88307', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-navy)' }}>
                  Comprehensive Turnkey EPC
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} style={{ color: '#b88307', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary-navy)' }}>
                  Global Standard Quality
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Engineering Showcase Card with 1M+ KM Milestone */}
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: '0 20px 45px rgba(7, 17, 30, 0.12)',
            border: '1.5px solid var(--border-light)',
            background: 'linear-gradient(145deg, #0d1e33, #07111e)',
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
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(229, 169, 16, 0.25) 0%, transparent 70%)',
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
                marginBottom: '22px'
              }}>
                <ShieldCheck size={16} /> Decades of Proven Field Performance
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.75rem',
                fontWeight: 700,
                lineHeight: 1.28,
                marginBottom: '18px',
                color: '#ffffff'
              }}>
                Comprehensive High-Voltage Infrastructure Across All Terrains & Climates
              </h3>

              <p style={{
                fontSize: '0.98rem',
                color: '#cbd5e1',
                lineHeight: 1.7,
                marginBottom: '20px'
              }}>
                Executing electrical power projects across all operating environments—from urban centers, 
                industrial corridors, and commercial hubs to high-altitude and strategic frontier sectors 
                including Jammu & Kashmir and Ladakh.
              </p>

              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(229, 169, 16, 0.25)',
                borderRadius: 'var(--radius-md)',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}>
                <div style={{
                  fontSize: '1.85rem',
                  fontWeight: 800,
                  color: 'var(--gold-primary)',
                  lineHeight: 1,
                  whiteSpace: 'nowrap'
                }}>
                  1M+ km
                </div>
                <div style={{ fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.4 }}>
                  High-tension cables, underground feeders, and overhead transmission lines laid and counting.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
