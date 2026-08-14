import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ShoppingBag, ArrowLeft } from 'lucide-react';

export default function Navbar({ rfqCount, onOpenRFQ, currentView, onNavigate }) {
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
      background: scrolled ? 'rgba(7, 17, 30, 0.96)' : 'rgba(7, 17, 30, 0.90)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '92px'
      }}>
        {/* Brand Logo - Crisp, Large & Perfectly Blended with White Backdrop */}
        <div 
          onClick={() => handleNavClick('home')}
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            background: '#ffffff',
            padding: '6px 14px',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img 
            src="/images/logo.png" 
            alt="Proach Associates Builders & Engineers"
            style={{
              height: '64px',
              width: 'auto',
              maxHeight: '64px',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </div>

        {/* Desktop Nav Links */}
        <div style={{
          display: 'none',
          gap: '28px',
          alignItems: 'center',
          fontSize: '0.94rem',
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
            onClick={() => handleNavClick('home', 'contact')}
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
            Contact
          </button>
        </div>

        {/* Right Action Icons & RFQ Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          
          {/* Quick Contact Links */}
          <a
            href="tel:+919797681768"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
              color: '#ffffff',
              fontSize: '0.85rem',
              fontWeight: 700
            }}
            className="contact-pill"
          >
            <Phone size={14} style={{ color: 'var(--gold-primary)' }} /> +91-97976-81768
          </a>

          {/* RFQ Cart Button */}
          <button
            onClick={onOpenRFQ}
            className="btn btn-primary btn-sm"
            style={{ position: 'relative' }}
            title="View your Request For Quotation list"
          >
            <ShoppingBag size={16} />
            <span className="rfq-label">RFQ Tender Desk</span>
            {rfqCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                background: '#ef4444',
                color: '#ffffff',
                fontSize: '0.7rem',
                fontWeight: 800,
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
              }}>
                {rfqCount}
              </span>
            )}
          </button>

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
            Products Catalog
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
            Projects & Milestones
          </button>
          <button
            onClick={() => handleNavClick('home', 'contact')}
            style={{ textAlign: 'left', background: 'none', border: 'none', color: '#f8fafc', fontSize: '1.05rem', fontWeight: 600, padding: '8px 0', cursor: 'pointer' }}
          >
            Enquiry & Contact
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-links { display: flex !important; }
          .contact-pill { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 600px) {
          .rfq-label { display: none; }
        }
      `}</style>
    </nav>
  );
}
