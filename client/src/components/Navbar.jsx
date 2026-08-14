import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Phone, Mail, FileText, ShoppingBag } from 'lucide-react';

export default function Navbar({ rfqCount, onOpenRFQ }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner Bar */}
      <div style={{
        background: '#040c17',
        color: '#94a3b8',
        fontSize: '0.8rem',
        padding: '8px 0',
        borderBottom: '1px solid rgba(255,255,255,0.06)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#e5a910', fontWeight: 600 }}>
              <Shield size={14} /> Class MES Approved Contractor
            </span>
            <span style={{ display: 'none', md: 'inline', color: 'rgba(255,255,255,0.2)' }}>•</span>
            <span style={{ display: 'none', md: 'inline' }}>
              40+ Years Serving Jammu • Udhampur • Kashmir
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <a href="tel:+919797681768" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#f8fafc', transition: 'color 0.2s' }}>
              <Phone size={13} style={{ color: '#e5a910' }} /> +91-97976-81768
            </a>
            <a href="mailto:dkumar2711@rediffmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#cbd5e1' }}>
              <Mail size={13} style={{ color: '#e5a910' }} /> dkumar2711@rediffmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(7, 17, 30, 0.95)' : 'rgba(7, 17, 30, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '84px'
        }}>
          {/* Brand Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img 
              src="/images/logo.png" 
              alt="Proach Associates - Builders and Engineers"
              style={{
                height: '56px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'brightness(1.05) contrast(1.05)'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div style={{ color: '#ffffff' }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                lineHeight: 1.1
              }}>
                PROACH
              </div>
              <div style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                color: 'var(--gold-primary)',
                textTransform: 'uppercase'
              }}>
                Builders & Engineers
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div style={{
            display: 'none',
            gap: '32px',
            alignItems: 'center',
            fontSize: '0.92rem',
            fontWeight: 600,
            color: '#e2e8f0',
            '@media (min-width: 992px)': { display: 'flex' }
          }} className="desktop-links">
            <a href="#about" style={{ transition: 'color 0.2s', ':hover': { color: 'var(--gold-primary)' } }}>About</a>
            <a href="#products" style={{ transition: 'color 0.2s' }}>Products</a>
            <a href="#defense" style={{ transition: 'color 0.2s' }}>Defense & MES</a>
            <a href="#services" style={{ transition: 'color 0.2s' }}>Turnkey EPC</a>
            <a href="#projects" style={{ transition: 'color 0.2s' }}>Projects</a>
            <a href="#contact" style={{ transition: 'color 0.2s' }}>Contact</a>
          </div>

          {/* Nav Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* RFQ Package Button */}
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
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#f8fafc', fontSize: '1rem', fontWeight: 600, padding: '8px 0' }}
            >
              About Legacy
            </a>
            <a 
              href="#products" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#f8fafc', fontSize: '1rem', fontWeight: 600, padding: '8px 0' }}
            >
              Equipment Catalog
            </a>
            <a 
              href="#defense" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#f8fafc', fontSize: '1rem', fontWeight: 600, padding: '8px 0' }}
            >
              Defense & MES Credentials
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#f8fafc', fontSize: '1rem', fontWeight: 600, padding: '8px 0' }}
            >
              Turnkey Solutions & EPC
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#f8fafc', fontSize: '1rem', fontWeight: 600, padding: '8px 0' }}
            >
              Milestone Installations
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#f8fafc', fontSize: '1rem', fontWeight: 600, padding: '8px 0' }}
            >
              Contact Engineering Desk
            </a>
          </div>
        )}
      </nav>

      <style>{`
        @media (min-width: 992px) {
          .desktop-links { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 600px) {
          .rfq-label { display: none; }
        }
      `}</style>
    </>
  );
}
