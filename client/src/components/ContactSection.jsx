import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { api } from '../services/api';
import { indianStatesAndCities } from '../data/indianLocations';

export default function ContactSection({ onOpenRFQ }) {
  const statesList = Object.keys(indianStatesAndCities);
  
  const [selectedState, setSelectedState] = useState('Jammu and Kashmir');
  const [selectedCity, setSelectedCity] = useState('Jammu');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'New Tender / Electrical Infrastructure Project',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleStateChange = (e) => {
    const newState = e.target.value;
    setSelectedState(newState);
    const cities = indianStatesAndCities[newState] || [];
    setSelectedCity(cities[0] || '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      await api.submitRFQ({
        ...formData,
        state: selectedState,
        city: selectedCity,
        location: `${selectedCity}, ${selectedState}`,
        organization: 'Direct Enquiry Desk',
        items: []
      });
      setSuccessMsg('Your enquiry has been received! Our engineering desk will connect with you promptly.');
      setFormData({ name: '', phone: '', email: '', subject: 'New Tender / Electrical Infrastructure Project', message: '' });
    } catch (err) {
      setErrorMsg('Failed to send enquiry. Please call our direct hotline at +91-97976-81768.');
    } finally {
      setLoading(false);
    }
  };

  const currentCities = indianStatesAndCities[selectedState] || [];

  return (
    <section id="contact" style={{ padding: '90px 0', background: 'var(--surface-light)' }}>
      <div className="container">
        
        <div className="section-header">
          <div className="eyebrow">Connect with Engineering Desk</div>
          <h2 className="section-title">Initiate a Project or Tender Discussion</h2>
          <p className="section-desc">
            Directly connect with our senior technical team for equipment procurement, 
            turnkey sub-station tenders, or rapid site support.
          </p>
        </div>

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
            gap: '30px'
          }}>
            <div>
              <span className="badge badge-gold" style={{ marginBottom: '12px' }}>
                Direct Hotline Desk
              </span>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '8px'
              }}>
                Proach Associates Builders & Engineers
              </h3>
            </div>

            {/* Direct Contact Points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
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
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Direct Calling / WhatsApp
                  </div>
                  <a href="tel:+919797681768" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>
                    +91-97976-81768
                  </a>
                  <div style={{ fontSize: '0.78rem', color: 'var(--gold-light)' }}>
                    Immediate response for tender queries & breakdowns
                  </div>
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
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Official Tender Inquiries Email
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
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Operational Headquarters
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                    Jammu & Kashmir, India
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                    Serving Jammu, Udhampur, Srinagar, and Northern Command Sectors
                  </div>
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
                  <Clock size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-light-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Tender Desk Hours
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#ffffff' }}>
                    Monday – Saturday: 09:00 AM – 07:30 PM
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-light-muted)' }}>
                    Emergency substation breakdown support available 24/7
                  </div>
                </div>
              </div>

            </div>

            {/* RFQ Trigger Banner */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-md)',
              padding: '20px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '12px' }}>
                Need a comprehensive itemized bill of quantities (BOQ) quote?
              </div>
              <button onClick={onOpenRFQ} className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                Launch Interactive RFQ Desk →
              </button>
            </div>

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
              fontSize: '1.6rem',
              fontWeight: 700,
              color: 'var(--primary-navy)',
              marginBottom: '8px'
            }}>
              Enquiry
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Fill out this form and our engineering team will get back to you with technical specifications.
            </p>

            {successMsg ? (
              <div style={{
                padding: '24px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: 'var(--radius-md)',
                color: '#065f46',
                textAlign: 'center'
              }}>
                <CheckCircle2 size={32} style={{ color: '#10b981', margin: '0 auto 12px' }} />
                <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px' }}>Enquiry Dispatched</h4>
                <p style={{ fontSize: '0.9rem' }}>{successMsg}</p>
                <button
                  onClick={() => setSuccessMsg('')}
                  className="btn btn-outline-dark btn-sm"
                  style={{ marginTop: '16px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                    Your Name / Officer Rank *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-light)',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91-98765-43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--border-light)',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--border-light)',
                        fontSize: '0.9rem'
                      }}
                    />
                  </div>
                </div>

                {/* State & City Dropdowns */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                      State / UT *
                    </label>
                    <select
                      value={selectedState}
                      onChange={handleStateChange}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--border-light)',
                        fontSize: '0.9rem',
                        background: '#ffffff'
                      }}
                    >
                      {statesList.map((st) => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                      City / District *
                    </label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1.5px solid var(--border-light)',
                        fontSize: '0.9rem',
                        background: '#ffffff'
                      }}
                    >
                      {currentCities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                    Project Category / Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-light)',
                      fontSize: '0.9rem',
                      background: '#ffffff'
                    }}
                  >
                    <option>New Substation / Transformer Procurement</option>
                    <option>Diesel Generator Sets & Synchronizing Panels</option>
                    <option>High-Mast Lighting & Perimeter Illumination</option>
                    <option>HT/LT Cables & Switchgear Panels</option>
                    <option>MES Defense Tender Participation</option>
                    <option>Annual Maintenance / Testing Service</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                    Project Requirements / Message
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Describe capacity, site location, required timeline, tender specifics..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1.5px solid var(--border-light)',
                      fontSize: '0.9rem',
                      resize: 'vertical'
                    }}
                  />
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
                  style={{ width: '100%', marginTop: '8px' }}
                >
                  {loading ? 'Sending...' : (
                    <>
                      <Send size={16} /> Dispatch Enquiry to Engineering Team
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
