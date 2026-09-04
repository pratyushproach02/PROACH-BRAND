import React from 'react';
import { ArrowRight, ShieldCheck, Award, Zap, Activity } from 'lucide-react';

export default function Hero({ onOpenRFQ, onNavigate }) {
  return (
    <header style={{
      position: 'relative',
      minHeight: '88vh',
      background: 'linear-gradient(135deg, rgba(6, 17, 30, 0.88) 0%, rgba(12, 28, 46, 0.82) 50%, rgba(7, 17, 30, 0.92) 100%), url("/images/projects/tangste_substation.jpg") center/cover no-repeat',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      overflow: 'hidden',
      padding: '70px 0 0'
    }}>
      {/* Animated Technical Grid & Scanner Accent */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.25,
        pointerEvents: 'none',
        zIndex: 1,
        backgroundImage: 'radial-gradient(rgba(229, 169, 16, 0.15) 1px, transparent 1px)',
        backgroundSize: '36px 36px'
      }} />

      {/* Hero Content Container */}
      <div className="container" style={{ position: 'relative', zIndex: 3, flex: 1, display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '940px', padding: '20px 0' }}>

          {/* Eyebrow Badge */}
          <div 
            className="hero-animate-title"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(229, 169, 16, 0.12)',
              border: '1px solid rgba(229, 169, 16, 0.35)',
              color: 'var(--gold-primary)',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              backdropFilter: 'blur(8px)'
            }}
          >
            <ShieldCheck size={15} /> CLASS MES APPROVED CONTRACTOR • ESTABLISHED 1989
          </div>

          {/* Main Headline */}
          <h1 
            className="hero-animate-title"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '22px',
              color: '#ffffff'
            }}
          >
            Powering <span style={{ color: 'var(--gold-primary)' }}>Strategic Defense</span> & <span style={{ color: 'var(--gold-primary)' }}>Industrial Grids</span> with Uncompromising Reliability.
          </h1>

          {/* Narrative Subtitle */}
          <p 
            className="hero-animate-sub"
            style={{
              fontSize: 'clamp(1.02rem, 1.8vw, 1.2rem)',
              color: '#e2e8f0',
              lineHeight: 1.68,
              marginBottom: '36px',
              maxWidth: '840px',
              fontWeight: 400
            }}
          >
            Founded in 1989, <strong style={{ color: '#ffffff' }}>Proach Associates Builders & Engineers</strong> is a leading integrated electrical engineering, equipment supply, and turnkey EPC contractor. With over three decades of proven execution, our portfolio encompasses <strong style={{ color: '#ffffff' }}>Air Force stations, high-voltage substations, military cantonments, radar installations, and strategic transmission grids</strong> across <strong style={{ color: 'var(--gold-primary)' }}>Jammu & Kashmir, Leh, Lamayuru, Tangste,</strong> and vital frontier sectors.
          </p>

          {/* Action Buttons */}
          <div 
            className="hero-animate-cta"
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <button 
              onClick={() => {
                onNavigate('products');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="btn btn-primary hero-pulse-cta"
              style={{ padding: '14px 28px', fontSize: '0.98rem' }}
            >
              Browse Equipment Catalog <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => {
                onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="btn btn-outline-light"
              style={{ padding: '14px 26px', fontSize: '0.98rem' }}
            >
              Get In Touch
            </button>
          </div>

        </div>
      </div>

      {/* Trust & Authority Key Stats Bar at Bottom of Hero */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        background: 'rgba(7, 17, 30, 0.85)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
        padding: '18px 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '20px',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(229, 169, 16, 0.15)',
                color: 'var(--gold-primary)',
                display: 'grid',
                placeItems: 'center',
                flexShrink: 0
              }}>
                <Award size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>35+ Years</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)' }}>Engineering Heritage</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(229, 169, 16, 0.15)',
                color: 'var(--gold-primary)',
                display: 'grid',
                placeItems: 'center',
                flexShrink: 0
              }}>
                <ShieldCheck size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>Class MES</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)' }}>Defense Certified Contractor</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(229, 169, 16, 0.15)',
                color: 'var(--gold-primary)',
                display: 'grid',
                placeItems: 'center',
                flexShrink: 0
              }}>
                <Zap size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>250+</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)' }}>Sub-stations Executed</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(229, 169, 16, 0.15)',
                color: 'var(--gold-primary)',
                display: 'grid',
                placeItems: 'center',
                flexShrink: 0
              }}>
                <Activity size={20} />
              </div>
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>1M+ km</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)' }}>Grid Lines & Cables Laid</div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </header>
  );
}
