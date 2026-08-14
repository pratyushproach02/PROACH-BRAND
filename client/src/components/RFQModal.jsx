import React, { useState } from 'react';
import { X, Trash2, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { api } from '../services/api';

export default function RFQModal({ isOpen, onClose, items, onRemoveItem, onClearRFQ }) {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    location: '',
    tender_ref: '',
    delivery_timeline: 'Immediate / Within 30 Days',
    notes: ''
  });

  const [itemQuantities, setItemQuantities] = useState({});
  const [loading, setLoading] = useState(false);
  const [submittedResponse, setSubmittedResponse] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleQuantityChange = (id, val) => {
    setItemQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, parseInt(val) || 1)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (items.length === 0) {
      setErrorMsg('Please add at least one piece of equipment to your RFQ package.');
      return;
    }
    if (!formData.name || !formData.phone || !formData.email) {
      setErrorMsg('Please fill in your Name, Phone, and Email.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    const payload = {
      ...formData,
      items: items.map(item => ({
        product_id: item.id,
        product_name: item.name,
        model: item.model,
        quantity: itemQuantities[item.id] || 1,
        voltage_rating: item.voltage,
        capacity: item.capacity
      }))
    };

    try {
      const res = await api.submitRFQ(payload);
      setSubmittedResponse(res);
      onClearRFQ();
    } catch (err) {
      setErrorMsg(err.message || 'An error occurred while submitting your quotation.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '780px' }} onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div style={{
          padding: '24px 28px',
          background: 'var(--primary-navy)',
          color: '#ffffff',
          borderTopLeftRadius: 'var(--radius-lg)',
          borderTopRightRadius: 'var(--radius-lg)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--gold-primary)',
              marginBottom: '4px'
            }}>
              Military Engineer Services & Institutional Procurement
            </div>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              fontWeight: 700
            }}>
              Request for Quotation (RFQ) Tender Desk
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'grid',
              placeItems: 'center',
              cursor: 'pointer',
              color: '#ffffff'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '28px', maxHeight: '70vh', overflowY: 'auto' }}>
          
          {submittedResponse ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.12)',
                color: '#10b981',
                display: 'grid',
                placeItems: 'center',
                margin: '0 auto 20px'
              }}>
                <CheckCircle2 size={36} />
              </div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-navy)', marginBottom: '8px' }}>
                Tender Quotation Request Received!
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '16px', maxWidth: '520px', margin: '0 auto 20px' }}>
                Reference Code: <strong style={{ color: 'var(--gold-dark)' }}>{submittedResponse.reference_no}</strong>. 
                Our senior engineering estimation team will review your bill of materials and provide formal schedule rates shortly.
              </p>
              <div style={{
                background: 'var(--surface-alt)',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                display: 'inline-block',
                textAlign: 'left',
                fontSize: '0.88rem',
                marginBottom: '24px'
              }}>
                <div><strong>Direct Inquiries Desk:</strong> +91-97976-81768</div>
                <div><strong>Email:</strong> dkumar2711@rediffmail.com</div>
              </div>
              <div>
                <button onClick={onClose} className="btn btn-primary">
                  Done & Back to Catalog
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Selected Equipment Items Table */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-navy)' }}>
                    Selected Electrical Equipment ({items.length})
                  </h4>
                  {items.length > 0 && (
                    <button
                      type="button"
                      onClick={onClearRFQ}
                      style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '0.8rem', cursor: 'pointer', fontWeight: 600 }}
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {items.length === 0 ? (
                  <div style={{
                    padding: '24px',
                    border: '1.5px dashed var(--border-light)',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'center',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem'
                  }}>
                    Your quote list is empty. Click "+ Add to RFQ" on any transformer, DG set, or switchgear in the catalog to generate a quote package.
                  </div>
                ) : (
                  <div style={{
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden'
                  }}>
                    {items.map((item) => (
                      <div
                        key={item.id}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '12px 16px',
                          borderBottom: '1px solid var(--border-light)',
                          background: '#ffffff',
                          gap: '16px'
                        }}
                      >
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-dark)' }}>
                            {item.name}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                            {item.model} • {item.voltage}
                          </div>
                        </div>

                        {/* Quantity input */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Qty:</label>
                          <input
                            type="number"
                            min="1"
                            value={itemQuantities[item.id] || 1}
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            style={{
                              width: '56px',
                              padding: '6px 8px',
                              borderRadius: '6px',
                              border: '1px solid var(--border-light)',
                              textAlign: 'center',
                              fontSize: '0.88rem',
                              fontWeight: 700
                            }}
                          />
                        </div>

                        {/* Remove button */}
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#94a3b8',
                            cursor: 'pointer',
                            padding: '4px'
                          }}
                          title="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tender / Client Information Fields */}
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary-navy)', marginBottom: '14px' }}>
                  Project & Contact Details
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--border-light)',
                        fontSize: '0.88rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                      Organization / MES Garrison / Department
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. GE Udhampur / PDD J&K / Private EPC"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--border-light)',
                        fontSize: '0.88rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--border-light)',
                        fontSize: '0.88rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                      Phone / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91-98765-43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--border-light)',
                        fontSize: '0.88rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                      Project Site Location
                    </label>
                    <input
                      type="text"
                      placeholder="Enter project site location (e.g. Leh, Tangste, Jammu...)"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--border-light)',
                        fontSize: '0.88rem',
                        background: '#ffffff'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                      Tender Reference / CA Number (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. CA NO: CE(A)/UDH/08/2026"
                      value={formData.tender_ref}
                      onChange={(e) => setFormData({ ...formData, tender_ref: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--border-light)',
                        fontSize: '0.88rem'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginTop: '14px' }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                    Custom Technical Requirements & Special Instructions
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Provide details such as primary/secondary voltage requirements, copper/aluminum conductor preference, specific brand approvals (e.g. Cummins, Schneider, Havells, ABB), delivery schedule..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-light)',
                      fontSize: '0.88rem',
                      resize: 'vertical'
                    }}
                  />
                </div>
              </div>

              {errorMsg && (
                <div style={{
                  padding: '12px 16px',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: 'var(--radius-sm)',
                  color: '#ef4444',
                  fontSize: '0.88rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <AlertCircle size={16} />
                  {errorMsg}
                </div>
              )}

              {/* Submit Button */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', paddingTop: '10px' }}>
                <button type="button" onClick={onClose} className="btn btn-outline-dark">
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading || items.length === 0}
                  className="btn btn-primary"
                  style={{ minWidth: '180px' }}
                >
                  {loading ? 'Submitting...' : (
                    <>
                      <Send size={16} /> Submit Tender RFQ
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
