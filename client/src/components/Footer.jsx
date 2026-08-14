import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (targetView, anchorId) => {
    if (onNavigate) {
      if (targetView === 'products' || targetView === 'contact') {
        onNavigate(targetView);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        onNavigate('home');
        if (anchorId) {
          setTimeout(() => {
            const el = document.getElementById(anchorId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer style={{
      background: '#040b15',
      color: '#94a3b8',
      padding: '70px 0 30px',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div className="container">
        
        {/* 3-Column Clean Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '48px',
          paddingBottom: '50px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          
          {/* 1st Column: About Proach Associates Builders & Engineers */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.15rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '18px',
              lineHeight: 1.3
            }}>
              About Proach Associates Builders & Engineers
            </h4>
            <p style={{
              fontSize: '0.92rem',
              lineHeight: 1.7,
              color: '#cbd5e1'
            }}>
              Proach Associates Builders & Engineers delivers high-performance, resilient electrical infrastructure and turnkey engineering solutions across critical frontiers. Leveraging decades of operational excellence, we engineer mission-critical power networks, high-voltage substations, and industrial distribution grids built for unyielding reliability under the most demanding geopolitical and environmental conditions.
            </p>
          </div>

          {/* 2nd Column: Explore */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.15rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '18px'
            }}>
              Explore
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.92rem' }}>
              <button 
                onClick={() => handleNav('home')} 
                style={{ textAlign: 'left', background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: 0, fontSize: 'inherit', fontWeight: 500 }}
              >
                Home
              </button>
              <button 
                onClick={() => handleNav('products')} 
                style={{ textAlign: 'left', background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: 0, fontSize: 'inherit', fontWeight: 500 }}
              >
                Products
              </button>
              <button 
                onClick={() => handleNav('home', 'services')} 
                style={{ textAlign: 'left', background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: 0, fontSize: 'inherit', fontWeight: 500 }}
              >
                Turnkey EPC
              </button>
              <button 
                onClick={() => handleNav('home', 'projects')} 
                style={{ textAlign: 'left', background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: 0, fontSize: 'inherit', fontWeight: 500 }}
              >
                Projects
              </button>
              <button 
                onClick={() => handleNav('contact')} 
                style={{ textAlign: 'left', background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: 0, fontSize: 'inherit', fontWeight: 500 }}
              >
                Contact
              </button>
            </div>
          </div>

          {/* 3rd Column: Get in Touch */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.15rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '18px'
            }}>
              Get in Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1' }}>
                <MapPin size={18} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                <span>Jammu & Kashmir</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                <div>
                  <span style={{ color: '#94a3b8', fontSize: '0.8rem', display: 'block' }}>Contact No.:</span>
                  <a href="tel:+919797681768" style={{ color: '#ffffff', fontWeight: 700 }}>
                    +91-97976-81768
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                <div>
                  <span style={{ color: '#94a3b8', fontSize: '0.8rem', display: 'block' }}>Email:</span>
                  <a href="mailto:dkumar2711@rediffmail.com" style={{ color: '#ffffff', fontWeight: 600 }}>
                    dkumar2711@rediffmail.com
                  </a>
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
          fontSize: '0.84rem'
        }}>
          <div>
            © {new Date().getFullYear()} <strong>Proach Associates Builders & Engineers</strong>. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              borderRadius: '8px',
              padding: '6px 14px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              fontSize: '0.8rem'
            }}
          >
            Back to Top <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
}
