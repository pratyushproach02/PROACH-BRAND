import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero({ onOpenRFQ, onNavigate }) {
  return (
    <header style={{
      position: 'relative',
      minHeight: '80vh',
      background: 'radial-gradient(ellipse at 50% 30%, #152b45 0%, #0c1c2e 45%, #06111e 90%)',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      padding: '70px 0 90px'
    }}>
      {/* Animated Electrical Power Grid Layer */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.38,
        pointerEvents: 'none',
        zIndex: 1
      }}>
        {/* Animated Scanning Bar */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(229, 169, 16, 0.2), #e5a910, rgba(229, 169, 16, 0.2), transparent)',
          boxShadow: '0 0 20px #e5a910',
          animation: 'scannerSweep 9s ease-in-out infinite'
        }} />

        {/* SVG Power Transmission Network */}
        <svg
          style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <line x1="0" y1="180" x2="1600" y2="180" stroke="rgba(229, 169, 16, 0.08)" strokeWidth="1" />
          <line x1="0" y1="360" x2="1600" y2="360" stroke="rgba(229, 169, 16, 0.08)" strokeWidth="1" />
          <line x1="0" y1="540" x2="1600" y2="540" stroke="rgba(229, 169, 16, 0.08)" strokeWidth="1" />
          <line x1="0" y1="720" x2="1600" y2="720" stroke="rgba(229, 169, 16, 0.08)" strokeWidth="1" />

          {/* High Voltage Bus Trunk */}
          <line
            x1="800" y1="60" x2="800" y2="840"
            stroke="#e5a910" strokeWidth="2.5" opacity="0.65"
            style={{ filter: 'drop-shadow(0 0 8px #e5a910)', animation: 'energyPulse 3s ease-in-out infinite' }}
          />

          <path
            d="M800 280 L480 280 L480 440 L160 440"
            fill="none" stroke="rgba(229, 169, 16, 0.6)" strokeWidth="1.5" strokeDasharray="8 12"
          />
          <path
            d="M800 280 L1120 280 L1120 180 L1440 180"
            fill="none" stroke="rgba(229, 169, 16, 0.6)" strokeWidth="1.5" strokeDasharray="8 12"
          />
          <path
            d="M800 580 L560 580 L560 700 L240 700"
            fill="none" stroke="rgba(229, 169, 16, 0.6)" strokeWidth="1.5" strokeDasharray="8 12"
          />
          <path
            d="M800 580 L1040 580 L1040 700 L1360 700"
            fill="none" stroke="rgba(229, 169, 16, 0.6)" strokeWidth="1.5" strokeDasharray="8 12"
          />

          <circle cx="800" cy="280" r="14" fill="#07111e" stroke="#e5a910" strokeWidth="2" />
          <circle cx="800" cy="280" r="5" fill="#e5a910" />

          <circle cx="160" cy="440" r="9" fill="#07111e" stroke="#e5a910" strokeWidth="2" />
          <circle cx="160" cy="440" r="3.5" fill="#e5a910" />

          <circle cx="1440" cy="180" r="9" fill="#07111e" stroke="#e5a910" strokeWidth="2" />
          <circle cx="1440" cy="180" r="3.5" fill="#e5a910" />

          <circle cx="800" cy="580" r="14" fill="#07111e" stroke="#e5a910" strokeWidth="2" />
          <circle cx="800" cy="580" r="5" fill="#e5a910" />

          <circle cx="240" cy="700" r="9" fill="#07111e" stroke="#e5a910" strokeWidth="2" />
          <circle cx="1360" cy="700" r="9" fill="#07111e" stroke="#e5a910" strokeWidth="2" />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div style={{ maxWidth: '880px' }}>

          {/* Main Headline */}
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.035em',
            marginBottom: '24px',
            color: '#ffffff'
          }}>
            Powering Strategic Defense & Industrial Grids with Uncompromising Reliability.
          </h1>

          {/* Subheading */}
          <p style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            color: '#cbd5e1',
            lineHeight: 1.6,
            marginBottom: '36px',
            maxWidth: '740px'
          }}>
            Class MES approved contractors & industrial distributors. Supplying heavy-duty transformers, 
            DG sets, HT/LT switchgear, high-mast illumination, and turnkey electrical sub-stations across 
            <strong style={{ color: '#ffffff' }}> Jammu & Kashmir, Leh, Durbuk, Tangste,</strong> and surrounding strategic sectors.
          </p>

          {/* CTA Group */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => {
                onNavigate('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="btn btn-primary"
            >
              Browse Equipment Catalog <ArrowRight size={18} />
            </button>
            <button onClick={onOpenRFQ} className="btn btn-outline-light">
              <Zap size={18} style={{ color: 'var(--gold-primary)' }} />
              Request Institutional RFQ
            </button>
            <button 
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="btn btn-outline-light"
            >
              Get In Touch
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
