import React from 'react';
import { ShieldCheck, MapPin, Award, Building2, CheckCircle2, FileCheck } from 'lucide-react';
import { regionalPresence } from '../data/projectsData';

export default function DefenseCredentials() {
  return (
    <section id="defense" style={{ padding: '100px 0', background: 'var(--primary-navy)', color: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow" style={{ color: 'var(--gold-primary)' }}>
            Strategic Defense Credentials & Track Record
          </div>
          <h2 className="section-title light">
            40+ Years of Unbroken Trust in High-Security Electrical Infrastructure
          </h2>
          <p className="section-desc light">
            Specialized engineering contractor for the Military Engineer Services (MES), Ministry of Defense, 
            and Northern Command. Delivering ruggedized, winter-resistant power distribution across the most 
            critical terrain in India.
          </p>
        </div>

        {/* 2-Column Grid: Left (Credentials & History), Right (Regional Footprint) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '36px',
          alignItems: 'stretch'
        }}>
          
          {/* Left Column: Legacy Card */}
          <div style={{
            background: 'var(--secondary-navy)',
            border: '1.5px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 'var(--radius-lg)',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(229, 169, 16, 0.15)',
                border: '1px solid rgba(229, 169, 16, 0.35)',
                borderRadius: 'var(--radius-full)',
                padding: '6px 14px',
                color: 'var(--gold-primary)',
                fontSize: '0.8rem',
                fontWeight: 700,
                marginBottom: '20px'
              }}>
                <ShieldCheck size={16} /> Certified Defense Contractor
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem',
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: '16px',
                color: '#ffffff'
              }}>
                Engineering Excellence Built on Field Experience
              </h3>

              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '24px' }}>
                Founded over four decades ago, Proach Builders and Engineers has pioneered high-voltage electrical installations, 
                heavy diesel generator synchronizing systems, and transformer grid networks for critical cantonments, 
                ammunition depots, and institutional campuses.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <FileCheck size={20} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>Class MES Approved:</strong>
                    <p style={{ color: 'var(--text-light-muted)', fontSize: '0.85rem' }}>
                      Qualified for high-limit electrical, power supply, and infrastructure tenders under Northern Command.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Award size={20} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>Full Bureau of Indian Standards (BIS) & IEC Compliance:</strong>
                    <p style={{ color: 'var(--text-light-muted)', fontSize: '0.85rem' }}>
                      All equipment rigorously tested to IS 2026, IS 7098, and IEEE 80 standards.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <Building2 size={20} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#ffffff', fontSize: '0.95rem' }}>Extreme Climate & High Altitude Reliability:</strong>
                    <p style={{ color: 'var(--text-light-muted)', fontSize: '0.85rem' }}>
                      Specialized transformers, cold-start DG setups, and weatherized switchgears tested for -25°C to +50°C.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              marginTop: '32px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-light-muted)' }}>Security & Clearance:</span>
              <strong style={{ color: 'var(--gold-primary)', fontSize: '0.9rem' }}>Verified Defense Vetting</strong>
            </div>
          </div>

          {/* Right Column: Regional Footprint & Presence */}
          <div style={{
            background: 'var(--card-navy)',
            border: '1.5px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 'var(--radius-lg)',
            padding: '36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div className="eyebrow" style={{ color: 'var(--gold-primary)' }}>Regional Presence</div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 700,
                marginBottom: '16px'
              }}>
                From Jammu to Udhampur, Srinagar & Beyond
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', marginBottom: '24px', lineHeight: 1.6 }}>
                Our deep logistical networks, local engineering teams, and inventory depots ensure prompt deployment, 
                spares availability, and emergency power restoration across Jammu & Kashmir.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {regionalPresence.map((loc, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: 'var(--radius-md)',
                      padding: '16px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px'
                    }}
                  >
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(229, 169, 16, 0.15)',
                      color: 'var(--gold-primary)',
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0
                    }}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '1rem', color: '#ffffff' }}>
                        {loc.city}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--gold-light)', fontWeight: 600 }}>
                        {loc.role}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)', marginTop: '2px' }}>
                        Coverage: {loc.coverage}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '28px', textAlign: 'center' }}>
              <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>
                Engage Our Defense Contracting Team →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
