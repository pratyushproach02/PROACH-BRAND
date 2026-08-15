import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';
import { api } from '../services/api';

const titlesList = [
  'Mr.',
  'Ms.',
  'Mrs.',
  'Er.',
  'Dr.',
  'Col.',
  'Maj.',
  'Brig.',
  'Lt. Col.',
  'Capt.',
  'Shri'
];

export default function ContactSection({ onOpenRFQ, onNavigateHome }) {
  const [formData, setFormData] = useState({
    title: 'Mr.',
    name: '',
    phone: '',
    email: '',
    message: '',
    agreed: false
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      setErrorMsg('Please check the agreement box before submitting.');
      return;
    }

    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      await api.submitRFQ({
        name: `${formData.title} ${formData.name}`,
        phone: formData.phone,
        email: formData.email,
        notes: formData.message,
        location: 'Jammu & Kashmir / Northern Sector',
        organization: 'Direct Enquiry Desk',
        items: []
      });
      setSuccessMsg('Your enquiry has been received! Our engineering desk will connect with you promptly.');
      setFormData({
        title: 'Mr.',
        name: '',
        phone: '',
        email: '',
        message: '',
        agreed: false
      });
    } catch (err) {
      setErrorMsg('Failed to send enquiry. Please call our direct hotline at +91-97976-81768.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ padding: '60px 0 110px', background: 'var(--surface-light)', minHeight: '85vh' }}>
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '36px',
          alignItems: 'start'
        }}>
          
          {/* Left: Contact Info & Hotline Details */}
          <div style={{
            background: 'var(--primary-navy)',
            color: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '28px'
          }}>
            <div>
              <span className="badge badge-gold" style={{ marginBottom: '12px' }}>
                DIRECT HOTLINE DESK
              </span>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.55rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '8px'
              }}>
                Proach Associates Builders & Engineers
              </h3>
            </div>

            {/* Direct Contact Points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(229, 169, 16, 0.15)',
                  color: 'var(--gold-primary)',
                  display: 'grid',
                  placeItems: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-light-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    DIRECT CALLING / WHATSAPP
                  </div>
                  <a href="tel:+919797681768" style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--gold-primary)' }}>
                    +91-97976-81768
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(229, 169, 16, 0.15)',
                  color: 'var(--gold-primary)',
                  display: 'grid',
                  placeItems: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-light-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    OFFICIAL EMAIL
                  </div>
                  <a href="mailto:dkumar2711@rediffmail.com" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                    dkumar2711@rediffmail.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(229, 169, 16, 0.15)',
                  color: 'var(--gold-primary)',
                  display: 'grid',
                  placeItems: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-light-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    OPERATIONAL HEADQUARTERS
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
                    Jammu & Kashmir, India
                  </div>
                </div>
              </div>

            </div>

            {/* RFQ Trigger Banner */}
            {onOpenRFQ && (
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                textAlign: 'center',
                marginTop: '12px'
              }}>
                <div style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
                  Need a comprehensive itemized bill of quantities (BOQ) quote?
                </div>
                <button onClick={onOpenRFQ} className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                  Launch Interactive RFQ Desk →
                </button>
              </div>
            )}

          </div>

          {/* Right: Enquiry Form */}
          <div style={{
            background: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            border: '1.5px solid var(--border-light)',
            padding: '40px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.75rem',
              fontWeight: 700,
              color: 'var(--primary-navy)',
              marginBottom: '6px'
            }}>
              Enquiry
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Fill out this form and our engineering team will get back to you with technical specifications.
            </p>

            {successMsg ? (
              <div style={{
                padding: '28px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: 'var(--radius-md)',
                color: '#065f46',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={36} style={{ color: '#10b981', margin: '0 auto 12px' }} />
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '6px' }}>Enquiry Dispatched</h4>
                <p style={{ fontSize: '0.92rem' }}>{successMsg}</p>
                <button
                  onClick={() => setSuccessMsg('')}
                  className="btn btn-outline-dark btn-sm"
                  style={{ marginTop: '16px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                
                {/* Title and Name side-by-side */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, marginBottom: '6px' }}>
                    Title & Name *
                  </label>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <select
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      style={{
                        width: '110px',
                        padding: '12px 10px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--border-light)',
                        fontSize: '0.92rem',
                        background: '#ffffff',
                        fontWeight: 600
                      }}
                    >
                      {titlesList.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>

                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        flex: 1,
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--border-light)',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>
                </div>

                {/* Mobile & Email */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, marginBottom: '6px' }}>
                      Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--border-light)',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, marginBottom: '6px' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--border-light)',
                        fontSize: '0.92rem'
                      }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, marginBottom: '6px' }}>
                    Message *
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-light)',
                      fontSize: '0.92rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                {/* Agreement Checkbox */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '2px' }}>
                  <input
                    type="checkbox"
                    id="agreeCheck"
                    required
                    checked={formData.agreed}
                    onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                    style={{
                      width: '18px',
                      height: '18px',
                      cursor: 'pointer',
                      marginTop: '3px'
                    }}
                  />
                  <label
                    htmlFor="agreeCheck"
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-dark)',
                      cursor: 'pointer',
                      lineHeight: 1.4
                    }}
                  >
                    I agree to receive information regarding my enquiry.
                  </label>
                </div>

                {errorMsg && (
                  <div style={{
                    padding: '10px 14px',
                    background: 'rgba(239, 68, 68, 0.1)',
                    color: '#ef4444',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.85rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <AlertCircle size={16} />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-navy"
                  style={{ width: '100%', marginTop: '6px', fontSize: '1rem', padding: '14px' }}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
