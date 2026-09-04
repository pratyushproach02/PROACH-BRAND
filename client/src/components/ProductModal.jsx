import React from 'react';
import { X, CheckCircle, ShieldCheck, Zap, Plus, Check } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToRFQ, inRFQ }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div style={{
          padding: '24px 28px',
          borderBottom: '1px solid var(--border-light)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '16px'
        }}>
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <span className="badge badge-gold">{product.tag}</span>
              <span className="badge badge-defense">{product.badge}</span>
            </div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.45rem',
              fontWeight: 800,
              color: 'var(--primary-navy)'
            }}>
              {product.name}
            </h3>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Model Code: <strong style={{ color: 'var(--text-dark)' }}>{product.model}</strong>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'var(--surface-alt)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'grid',
              placeItems: 'center',
              cursor: 'pointer',
              color: 'var(--text-muted)'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Body Content */}
        <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Overview */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px' }}>Equipment Overview</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              {product.description}
            </p>
          </div>

          {/* Authentic Material & Field Inspection Photographs */}
          {(product.image || product.detailImage) && (
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px' }}>
                Authentic Material & Field Inspection
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: product.detailImage ? 'repeat(auto-fit, minmax(240px, 1fr))' : '1fr',
                gap: '14px'
              }}>
                {product.image && (
                  <div style={{
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-light)',
                    background: '#f8fafc'
                  }}>
                    <img
                      src={product.image}
                      alt={`${product.name} Reel`}
                      style={{ width: '100%', height: '190px', objectFit: 'cover', display: 'block' }}
                    />
                    <div style={{ padding: '8px 12px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-dark)', background: '#ffffff', borderTop: '1px solid var(--border-light)' }}>
                      Heavy-Duty Cable Coils & Bundles
                    </div>
                  </div>
                )}
                {product.detailImage && (
                  <div style={{
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    border: '1px solid var(--border-light)',
                    background: '#f8fafc'
                  }}>
                    <img
                      src={product.detailImage}
                      alt={`${product.name} Embossed Marking`}
                      style={{ width: '100%', height: '190px', objectFit: 'cover', display: 'block' }}
                    />
                    <div style={{ padding: '8px 12px', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-dark)', background: '#ffffff', borderTop: '1px solid var(--border-light)' }}>
                      Embossed IS 7098 (Part - II) & ISI Certification Mark
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Technical Specifications Table */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px' }}>
              Technical Specifications & Electrical Parameters
            </h4>
            <div style={{
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                <tbody>
                  {product.specs?.map((spec, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'var(--surface-light)' : '#ffffff' }}>
                      <td style={{ padding: '10px 16px', fontWeight: 600, color: 'var(--text-muted)', width: '40%' }}>
                        {spec.label}
                      </td>
                      <td style={{ padding: '10px 16px', fontWeight: 700, color: 'var(--text-dark)' }}>
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                  <tr style={{ background: '#ffffff', borderTop: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '10px 16px', fontWeight: 600, color: 'var(--text-muted)' }}>
                      Applicable Standards
                    </td>
                    <td style={{ padding: '10px 16px', fontWeight: 700, color: 'var(--gold-dark)' }}>
                      {product.standards}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Engineering Features */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '12px' }}>
              Engineering & Operational Features
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {product.features?.map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.9rem' }}>
                  <CheckCircle size={17} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: 'var(--text-dark)' }}>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div style={{
          padding: '20px 28px',
          background: 'var(--surface-light)',
          borderTop: '1px solid var(--border-light)',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '12px'
        }}>
          <button onClick={onClose} className="btn btn-outline-dark btn-sm">
            Close
          </button>
          <button
            onClick={() => {
              onAddToRFQ(product);
            }}
            className={`btn btn-sm ${inRFQ ? 'btn-navy' : 'btn-primary'}`}
          >
            {inRFQ ? (
              <>
                <Check size={16} /> Added to Tender RFQ
              </>
            ) : (
              <>
                <Plus size={16} /> Add to Tender RFQ
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
