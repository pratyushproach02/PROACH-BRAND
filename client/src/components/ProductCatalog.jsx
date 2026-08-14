import React, { useState } from 'react';
import { categories, products } from '../data/productsData';
import { Search, Eye, Plus, Check, ArrowLeft, Zap } from 'lucide-react';

export default function ProductCatalog({ onSelectProduct, onAddToRFQ, rfqItems, onNavigateHome }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.voltage.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" style={{ padding: '70px 0 110px', background: 'var(--surface-light)', minHeight: '85vh' }}>
      <div className="container">
        
        {/* Navigation Breadcrumb / Back to Home */}
        {onNavigateHome && (
          <div style={{ marginBottom: '24px' }}>
            <button
              onClick={onNavigateHome}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ffffff',
                border: '1.5px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '8px 16px',
                fontSize: '0.88rem',
                fontWeight: 700,
                color: 'var(--primary-navy)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <ArrowLeft size={16} /> Back to Overview
            </button>
          </div>
        )}

        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">Defense & Industrial Equipment Catalog</div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div>
              <h2 className="section-title">
                High-Voltage Electrical Infrastructure Products
              </h2>
              <p className="section-desc">
                Certified heavy power equipment, transformers, generators, switchgear, and lighting 
                tested for Northern Command, Military Engineer Services (MES), and regional power corporations.
              </p>
            </div>

            {/* Search Input Bar */}
            <div style={{
              position: 'relative',
              minWidth: '280px',
              maxWidth: '380px',
              width: '100%'
            }}>
              <Search size={18} style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }} />
              <input
                type="text"
                placeholder="Search transformers, DG sets, VCB..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 42px',
                  borderRadius: 'var(--radius-md)',
                  border: '1.5px solid var(--border-light)',
                  background: '#ffffff',
                  fontSize: '0.92rem',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxShadow: 'var(--shadow-sm)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div style={{
          display: 'flex',
          gap: '10px',
          overflowX: 'auto',
          paddingBottom: '16px',
          marginBottom: '36px',
          scrollbarWidth: 'none'
        }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.88rem',
                fontWeight: 700,
                border: activeCategory === cat.id ? '1.5px solid var(--primary-navy)' : '1.5px solid var(--border-light)',
                background: activeCategory === cat.id ? 'var(--primary-navy)' : '#ffffff',
                color: activeCategory === cat.id ? '#ffffff' : 'var(--text-dark)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                boxShadow: activeCategory === cat.id ? 'var(--shadow-md)' : 'none'
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{
            background: '#ffffff',
            padding: '60px 20px',
            borderRadius: 'var(--radius-lg)',
            textAlign: 'center',
            border: '1px solid var(--border-light)'
          }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              No products found matching your search query.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="btn btn-outline-dark btn-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '24px'
          }}>
            {filteredProducts.map((item) => {
              const inRFQ = rfqItems.some(r => r.id === item.id);
              return (
                <div
                  key={item.id}
                  style={{
                    background: '#ffffff',
                    border: '1.5px solid var(--border-light)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.25s ease',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = 'var(--gold-primary)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  <div>
                    {/* Tags Bar */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span className="badge badge-gold">
                        {item.tag}
                      </span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                        {item.model}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.28rem',
                      fontWeight: 700,
                      lineHeight: 1.3,
                      marginBottom: '10px',
                      color: 'var(--primary-navy)'
                    }}>
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.55,
                      marginBottom: '20px'
                    }}>
                      {item.description}
                    </p>

                    {/* Specification Highlights Box */}
                    <div style={{
                      background: 'var(--surface-alt)',
                      borderRadius: 'var(--radius-md)',
                      padding: '14px',
                      marginBottom: '20px',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '10px',
                      fontSize: '0.82rem'
                    }}>
                      <div>
                        <span style={{ color: 'var(--text-muted)', display: 'block' }}>Rating / Voltage:</span>
                        <strong style={{ color: 'var(--text-dark)' }}>{item.voltage}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-muted)', display: 'block' }}>Capacity Range:</span>
                        <strong style={{ color: 'var(--text-dark)' }}>{item.capacity}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-light)'
                  }}>
                    <button
                      onClick={() => onSelectProduct(item)}
                      className="btn btn-outline-dark btn-sm"
                      style={{ flex: 1 }}
                    >
                      <Eye size={15} /> Tech Specs
                    </button>

                    <button
                      onClick={() => onAddToRFQ(item)}
                      className={`btn btn-sm ${inRFQ ? 'btn-navy' : 'btn-primary'}`}
                      style={{ flex: 1.3 }}
                    >
                      {inRFQ ? (
                        <>
                          <Check size={15} /> Added to RFQ
                        </>
                      ) : (
                        <>
                          <Plus size={15} /> Add to RFQ
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
