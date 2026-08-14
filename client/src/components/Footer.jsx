import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#040b15',
      color: '#94a3b8',
      padding: '70px 0 30px',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div className="container">
        
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          paddingBottom: '50px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          
          {/* Column 1: Company Profile with Clean Framed Logo */}
          <div>
            <div 
              onClick={() => onNavigate && onNavigate('home')}
              style={{
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                background: '#ffffff',
                padding: '6px 14px',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
                marginBottom: '20px'
              }}
            >
              <img
                src="/images/logo.png"
                alt="Proach Associates Builders & Engineers"
                style={{ height: '58px', width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </div>

            <p style={{ fontSize: '0.88rem', lineHeight: 1.65, color: '#cbd5e1', marginBottom: '20px' }}>
              Specialized electrical engineering, turnkey sub-station erection, and high-voltage equipment distribution across Jammu, Udhampur, Srinagar, and Northern Command.
            </p>
          </div>

          {/* Column 2: Equipment Catalog */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '18px' }}>
              Equipment Catalog
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <button onClick={() => onNavigate && onNavigate('products')} style={{ textAlign: 'left', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0 }}>Power & Distribution Transformers</button>
              <button onClick={() => onNavigate && onNavigate('products')} style={{ textAlign: 'left', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0 }}>Industrial Silent DG Sets (15kVA - 2000kVA)</button>
              <button onClick={() => onNavigate && onNavigate('products')} style={{ textAlign: 'left', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0 }}>HT 11kV/33kV Vacuum Circuit Breakers</button>
              <button onClick={() => onNavigate && onNavigate('products')} style={{ textAlign: 'left', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0 }}>LT Power Control & APFC Panels</button>
              <button onClick={() => onNavigate && onNavigate('products')} style={{ textAlign: 'left', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0 }}>Octagonal High-Mast Lighting (16m - 30m)</button>
              <button onClick={() => onNavigate && onNavigate('products')} style={{ textAlign: 'left', background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', padding: 0 }}>Armored HT XLPE & LT Power Cables</button>
            </div>
          </div>

          {/* Column 3: Solutions & Services */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', marginBottom: '18px' }}>
              Turnkey Solutions
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <a href="#services" style={{ color: '#94a3b8' }}>Substation Erection (11kV / 33kV / 66kV)</a>
              <a href="#services" style={{ color: '#94a3b8' }}>Military Cantonment Electrification</a>
              <a href="#services" style={{ color: '#94a3b8' }}>High-Altitude Resilient Power Systems</a>
              <a href="#services" style={{ color: '#94a3b8' }}>Underground HT Trench Cabling</a>
              <a href="#services" style={{ color: '#94a3b8' }}>Transformer Oil Filtration & Testing</a>
              <a href="#services" style={{ color: '#94a3b8' }}>Annual Maintenance Contracts (AMC)</a>
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
                  Jammu • Udhampur • Srinagar • Kashmir Valley
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
            © {new Date().getFullYear()} <strong>Proach Associates Builders & Engineers</strong>. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ color: 'var(--gold-light)' }}>
              Electrical • Infrastructure • Turnkey Engineering
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
