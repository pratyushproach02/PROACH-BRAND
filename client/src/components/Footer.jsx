import React from 'react';
import { Shield, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#040b15',
      color: '#94a3b8',
      padding: '80px 0 30px',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div className="container">
        
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          paddingBottom: '60px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          
          {/* Column 1: Company Profile */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img
                src="/images/logo.png"
                alt="Proach Associates Logo"
                style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                  PROACH
                </div>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--gold-primary)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Builders & Engineers
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', lineHeight: 1.65, color: '#cbd5e1', marginBottom: '20px' }}>
              Proach Associates — Over 40 years of pioneering electrical power distribution, 
              defense-grade infrastructure, high-voltage substations, and equipment supply across 
              Jammu, Udhampur, Srinagar, and Northern Command.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(229, 169, 16, 0.1)',
              border: '1px solid rgba(229, 169, 16, 0.25)',
              color: 'var(--gold-primary)',
              fontSize: '0.78rem',
              fontWeight: 700
            }}>
              <Shield size={14} /> Class MES Approved Contractor
            </div>
          </div>

          {/* Column 2: Equipment Catalog */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '18px' }}>
              Equipment Catalog
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <a href="#products" style={{ transition: 'color 0.2s', ':hover': { color: '#ffffff' } }}>Power & Distribution Transformers</a>
              <a href="#products" style={{ transition: 'color 0.2s' }}>Industrial Silent DG Sets (15kVA - 2000kVA)</a>
              <a href="#products" style={{ transition: 'color 0.2s' }}>HT 11kV/33kV Vacuum Circuit Breakers</a>
              <a href="#products" style={{ transition: 'color 0.2s' }}>LT Power Control & APFC Panels</a>
              <a href="#products" style={{ transition: 'color 0.2s' }}>Octagonal High-Mast Lighting (16m - 30m)</a>
              <a href="#products" style={{ transition: 'color 0.2s' }}>Armored HT XLPE & LT Power Cables</a>
              <a href="#products" style={{ transition: 'color 0.2s' }}>Chemical Earthing & Surge Arresters</a>
            </div>
          </div>

          {/* Column 3: Solutions & Services */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '18px' }}>
              Turnkey Solutions
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <a href="#services" style={{ transition: 'color 0.2s' }}>Substation Erection (11kV / 33kV / 66kV)</a>
              <a href="#services" style={{ transition: 'color 0.2s' }}>Military Cantonment Electrification</a>
              <a href="#services" style={{ transition: 'color 0.2s' }}>High-Altitude Resilient Power Systems</a>
              <a href="#services" style={{ transition: 'color 0.2s' }}>Underground HT Trench Cabling</a>
              <a href="#services" style={{ transition: 'color 0.2s' }}>Transformer Oil Filtration & Testing</a>
              <a href="#services" style={{ transition: 'color 0.2s' }}>Annual Maintenance Contracts (AMC)</a>
            </div>
          </div>

          {/* Column 4: Contact & Hotline */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '18px' }}>
              Direct Contacts
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem' }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-light-muted)', textTransform: 'uppercase' }}>
                  Direct Calling / WhatsApp:
                </div>
                <a href="tel:+919797681768" style={{ color: 'var(--gold-primary)', fontWeight: 800, fontSize: '1rem' }}>
                  +91-97976-81768
                </a>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-light-muted)', textTransform: 'uppercase' }}>
                  Official Email:
                </div>
                <a href="mailto:dkumar2711@rediffmail.com" style={{ color: '#ffffff', fontWeight: 600 }}>
                  dkumar2711@rediffmail.com
                </a>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-light-muted)', textTransform: 'uppercase' }}>
                  Locations Served:
                </div>
                <div style={{ color: '#cbd5e1' }}>
                  Jammu • Udhampur • Srinagar • Kashmir Valley • Northern Command
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div style={{
          paddingTop: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.82rem'
        }}>
          <div>
            © 1984 – {new Date().getFullYear()} <strong>Proach Builders and Engineers</strong> (Proach Associates). All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ color: 'var(--gold-light)' }}>
              Electrical • Infrastructure • Defense EPC
            </span>
            <button
              onClick={scrollToTop}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                borderRadius: '8px',
                padding: '6px 12px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                fontSize: '0.78rem'
              }}
            >
              Back to Top <ArrowUp size={13} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
