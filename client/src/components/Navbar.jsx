import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar({ currentView, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
      background: scrolled ? 'rgba(7, 17, 30, 0.97)' : 'rgba(7, 17, 30, 0.92)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '96px'
      }}>
        {/* Brand Logo - Extra Big, Clear & 100% Blended with Header Background */}
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
            src="/images/logo_dark_theme.png" 
            alt="Proach Associates Builders & Engineers"
            style={{
              height: '76px',
              width: 'auto',
              maxHeight: '76px',
              objectFit: 'contain',
              display: 'block'
            }}
            onError={(e) => {
              // Fallback to standard logo if needed
              e.target.src = '/images/logo.png';
            }}
          />
        </div>

        {/* Desktop Nav Links */}
        <div style={{
          display: 'none',
          gap: '32px',
          alignItems: 'center',
          fontSize: '1rem',
          fontWeight: 600,
          color: '#e2e8f0'
        }} className="desktop-links">
          <button
            onClick={() => handleNavClick('home')}
            style={{
              background: 'none',
              border: 'none',
              color: currentView === 'home' ? 'var(--gold-primary)' : '#e2e8f0',
              fontWeight: currentView === 'home' ? 700 : 600,
              fontSize: 'inherit',
              cursor: 'pointer',
              padding: '6px 0',
              transition: 'color 0.2s'
            }}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick('products')}
            style={{
              background: 'none',
              border: 'none',
              color: currentView === 'products' ? 'var(--gold-primary)' : '#e2e8f0',
              fontWeight: currentView === 'products' ? 700 : 600,
              fontSize: 'inherit',
              cursor: 'pointer',
              padding: '6px 0',
              transition: 'color 0.2s'
            }}
          >
            Products
          </button>

          <button
            onClick={() => handleNavClick('home', 'services')}
            style={{
              background: 'none',
              border: 'none',
              color: '#e2e8f0',
              fontSize: 'inherit',
              cursor: 'pointer',
              padding: '6px 0',
              transition: 'color 0.2s'
            }}
          >
            Turnkey EPC
          </button>

          <button
            onClick={() => handleNavClick('home', 'projects')}
            style={{
              background: 'none',
              border: 'none',
              color: '#e2e8f0',
              fontSize: 'inherit',
              cursor: 'pointer',
              padding: '6px 0',
              transition: 'color 0.2s'
            }}
          >
            Projects
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            style={{
              background: 'none',
              border: 'none',
              color: currentView === 'contact' ? 'var(--gold-primary)' : '#e2e8f0',
              fontWeight: currentView === 'contact' ? 700 : 600,
              fontSize: 'inherit',
              cursor: 'pointer',
              padding: '6px 0',
              transition: 'color 0.2s'
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
              color: '#ffffff',
              fontSize: '0.95rem',
              fontWeight: 700,
              padding: '8px 16px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <Phone size={16} style={{ color: 'var(--gold-primary)' }} /> +91-97976-81768
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'inline-flex',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '8px',
              padding: '8px',
              color: '#ffffff',
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
          background: 'var(--primary-navy)',
          borderTop: '1px solid var(--border-navy)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <button
            onClick={() => handleNavClick('home')}
            style={{ textAlign: 'left', background: 'none', border: 'none', color: '#f8fafc', fontSize: '1.05rem', fontWeight: 600, padding: '8px 0', cursor: 'pointer' }}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('products')}
            style={{ textAlign: 'left', background: 'none', border: 'none', color: '#f8fafc', fontSize: '1.05rem', fontWeight: 600, padding: '8px 0', cursor: 'pointer' }}
          >
            Products
          </button>
          <button
            onClick={() => handleNavClick('home', 'services')}
            style={{ textAlign: 'left', background: 'none', border: 'none', color: '#f8fafc', fontSize: '1.05rem', fontWeight: 600, padding: '8px 0', cursor: 'pointer' }}
          >
            Turnkey EPC
          </button>
          <button
            onClick={() => handleNavClick('home', 'projects')}
            style={{ textAlign: 'left', background: 'none', border: 'none', color: '#f8fafc', fontSize: '1.05rem', fontWeight: 600, padding: '8px 0', cursor: 'pointer' }}
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            style={{ textAlign: 'left', background: 'none', border: 'none', color: '#f8fafc', fontSize: '1.05rem', fontWeight: 600, padding: '8px 0', cursor: 'pointer' }}
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
