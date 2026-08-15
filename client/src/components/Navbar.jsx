import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar({ currentView, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view, anchorId) => {
    setMobileMenuOpen(false);
    if (view === 'products') {
      onNavigate('products');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (view === 'contact') {
      onNavigate('contact');
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
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : '0 2px 8px rgba(0, 0, 0, 0.04)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '102px'
      }}>
        {/* Brand Logo - Enlarged Crisp Text Blending Flawlessly on White Header */}
        <div 
          onClick={() => handleNavClick('home')}
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            background: 'transparent',
            padding: '4px 0',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img 
            src="/images/logo_enlarged.png" 
            alt="Proach Associates Builders & Engineers"
            style={{
              height: '84px',
              width: 'auto',
              maxHeight: '84px',
              objectFit: 'contain',
              display: 'block'
            }}
            onError={(e) => {
              e.target.src = '/images/logo.png';
            }}
          />
        </div>

        {/* Desktop Nav Links */}
        <div style={{
          display: 'none',
          gap: '36px',
          alignItems: 'center',
          fontSize: '1.02rem',
          fontWeight: 700,
          color: '#1e293b'
        }} className="desktop-links">
          <button
            onClick={() => handleNavClick('home')}
            style={{
              background: 'none',
              border: 'none',
              color: currentView === 'home' ? '#b88307' : '#1e293b',
              fontWeight: currentView === 'home' ? 800 : 650,
              fontSize: 'inherit',
              cursor: 'pointer',
              padding: '6px 0',
              borderBottom: currentView === 'home' ? '2.5px solid #b88307' : '2.5px solid transparent',
              transition: 'all 0.2s'
            }}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick('products')}
            style={{
              background: 'none',
              border: 'none',
              color: currentView === 'products' ? '#b88307' : '#1e293b',
              fontWeight: currentView === 'products' ? 800 : 650,
              fontSize: 'inherit',
              cursor: 'pointer',
              padding: '6px 0',
              borderBottom: currentView === 'products' ? '2.5px solid #b88307' : '2.5px solid transparent',
              transition: 'all 0.2s'
            }}
          >
            Products
          </button>

          <button
            onClick={() => handleNavClick('home', 'about-company')}
            style={{
              background: 'none',
              border: 'none',
              color: '#1e293b',
              fontSize: 'inherit',
              fontWeight: 650,
              cursor: 'pointer',
              padding: '6px 0',
              borderBottom: '2.5px solid transparent',
              transition: 'all 0.2s'
            }}
          >
            About
          </button>

          <button
            onClick={() => handleNavClick('home', 'services')}
            style={{
              background: 'none',
              border: 'none',
              color: '#1e293b',
              fontSize: 'inherit',
              fontWeight: 650,
              cursor: 'pointer',
              padding: '6px 0',
              borderBottom: '2.5px solid transparent',
              transition: 'all 0.2s'
            }}
          >
            Turnkey EPC
          </button>

          <button
            onClick={() => handleNavClick('home', 'projects')}
            style={{
              background: 'none',
              border: 'none',
              color: '#1e293b',
              fontSize: 'inherit',
              fontWeight: 650,
              cursor: 'pointer',
              padding: '6px 0',
              borderBottom: '2.5px solid transparent',
              transition: 'all 0.2s'
            }}
          >
            Projects
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            style={{
              background: 'none',
              border: 'none',
              color: currentView === 'contact' ? '#b88307' : '#1e293b',
              fontWeight: currentView === 'contact' ? 800 : 650,
              fontSize: 'inherit',
              cursor: 'pointer',
              padding: '6px 0',
              borderBottom: currentView === 'contact' ? '2.5px solid #b88307' : '2.5px solid transparent',
              transition: 'all 0.2s'
            }}
          >
            Contact
          </button>
        </div>

        {/* Right Action Hotline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href="tel:+919797681768"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#07111e',
              fontSize: '0.95rem',
              fontWeight: 800,
              padding: '10px 18px',
              borderRadius: 'var(--radius-md)',
              background: '#f8fafc',
              border: '1.5px solid #e2e8f0',
              boxShadow: '0 2px 5px rgba(0,0,0,0.04)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#07111e';
              e.currentTarget.style.background = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.background = '#f8fafc';
            }}
          >
            <Phone size={16} style={{ color: '#b88307' }} /> +91-97976-81768
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'inline-flex',
              background: '#f8fafc',
              border: '1.5px solid #e2e8f0',
              borderRadius: '8px',
              padding: '8px',
              color: '#0f172a',
              cursor: 'pointer'
            }}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: '#ffffff',
          borderTop: '1px solid #e2e8f0',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.08)'
        }}>
          <button
            onClick={() => handleNavClick('home')}
            style={{ textAlign: 'left', background: 'none', border: 'none', color: '#0f172a', fontSize: '1.05rem', fontWeight: 700, padding: '8px 0', cursor: 'pointer' }}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('products')}
            style={{ textAlign: 'left', background: 'none', border: 'none', color: '#0f172a', fontSize: '1.05rem', fontWeight: 700, padding: '8px 0', cursor: 'pointer' }}
          >
            Products
          </button>
          <button
            onClick={() => handleNavClick('home', 'about-company')}
            style={{ textAlign: 'left', background: 'none', border: 'none', color: '#0f172a', fontSize: '1.05rem', fontWeight: 700, padding: '8px 0', cursor: 'pointer' }}
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('home', 'services')}
            style={{ textAlign: 'left', background: 'none', border: 'none', color: '#0f172a', fontSize: '1.05rem', fontWeight: 700, padding: '8px 0', cursor: 'pointer' }}
          >
            Turnkey EPC
          </button>
          <button
            onClick={() => handleNavClick('home', 'projects')}
            style={{ textAlign: 'left', background: 'none', border: 'none', color: '#0f172a', fontSize: '1.05rem', fontWeight: 700, padding: '8px 0', cursor: 'pointer' }}
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            style={{ textAlign: 'left', background: 'none', border: 'none', color: '#0f172a', fontSize: '1.05rem', fontWeight: 700, padding: '8px 0', cursor: 'pointer' }}
          >
            Contact
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-links { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
