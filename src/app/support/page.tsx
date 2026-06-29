'use client';

import { useState } from 'react';

const faqs = [
  { q: 'How long does shipping take?', a: 'Standard shipping takes 5-7 business days. Express shipping is available for 1-2 business days. Free shipping on orders over $50.' },
  { q: 'What is your return policy?', a: 'We offer free returns within 30 days of delivery. Items must be in original condition and packaging. Start a return from Your Orders page.' },
  { q: 'How do I track my order?', a: 'Go to Your Orders, find your order, and click Track Package. You\'ll receive email updates with tracking information.' },
  { q: 'Can I change or cancel my order?', a: 'Orders can be cancelled within 1 hour of placing. After that, the order enters processing and cannot be modified.' },
  { q: 'What payment methods do you accept?', a: 'We accept Visa, Mastercard, American Express, Discover, and PayPal. Your payment info is encrypted and secure.' },
];

export default function SupportPage() {
  const [tab, setTab] = useState('faqs');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <div className="breadcrumb-list">
        <a href="/">Home</a><span className="sep">›</span>
        <span>Help Center</span>
      </div>

      <h1 style={{ fontSize: 24, fontWeight: 600, margin: '0 0 4px' }}>Help Center</h1>
      <p style={{ fontSize: 14, color: '#565959', margin: '0 0 20px' }}>How can we help you today?</p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
        {[
          { icon: '📦', title: 'Track Order', desc: 'See where your package is' },
          { icon: '↩️', title: 'Cancel Order', desc: 'Change or cancel an order' },
          { icon: '🔄', title: 'Returns', desc: 'Start a return or exchange' },
          { icon: '💬', title: 'Contact Us', desc: 'Talk to customer service' },
        ].map((item) => (
          <div key={item.title} style={{
            flex: '1 1 160px', background: '#fff', border: '1px solid #ddd',
            borderRadius: 8, padding: 16, cursor: 'pointer', textAlign: 'center',
          }}>
            <div style={{ fontSize: 28, marginBottom: 4 }}>{item.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 600 }}>{item.title}</div>
            <div style={{ fontSize: 13, color: '#565959' }}>{item.desc}</div>
          </div>
        ))}
      </div>

      <div className="tab-bar">
        <button className={tab === 'faqs' ? 'active' : ''} onClick={() => setTab('faqs')}>FAQs</button>
        <button className={tab === 'contact' ? 'active' : ''} onClick={() => setTab('contact')}>Contact Us</button>
      </div>

      {tab === 'faqs' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              background: '#fff', border: '1px solid #ddd', borderRadius: 6, overflow: 'hidden',
            }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%', padding: '14px 16px', textAlign: 'left', cursor: 'pointer',
                  background: 'none', border: 'none', fontFamily: 'inherit',
                  fontSize: 14, fontWeight: 600, color: '#0f1111',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}
              >
                {faq.q}
                <span style={{ transition: 'transform 0.15s', transform: openFaq === i ? 'rotate(180deg)' : 'none' }}>
                  ▼
                </span>
              </button>
              {openFaq === i && (
                <div style={{ padding: '0 16px 14px', fontSize: 14, color: '#565959', lineHeight: 1.5 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {tab === 'contact' && (
        <div className="page-with-sidebar">
          <div style={{ flex: 1, minWidth: 300, background: '#fff', border: '1px solid #ddd', borderRadius: 8, padding: 20 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, margin: '0 0 16px' }}>Send us a message</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input placeholder="Your name" style={inputStyle} />
              <input placeholder="Email" type="email" style={inputStyle} />
              <input placeholder="Order ID (optional)" style={inputStyle} />
              <input placeholder="Subject" style={inputStyle} />
              <textarea
                placeholder="Describe your issue..."
                rows={5}
                style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
              />
              <button className="btn-amazon orange" style={{ alignSelf: 'flex-start' }}>
                Submit
              </button>
            </div>
          </div>
          <div style={{ width: 300, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: '#fff', border: '1px solid #ddd', borderRadius: 8, padding: 16 }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, margin: '0 0 6px' }}>📞 Phone Support</h3>
              <p style={{ fontSize: 14, margin: 0 }}>1-800-ASTRYX</p>
              <p style={{ fontSize: 13, color: '#565959', margin: '4px 0 0' }}>Mon-Fri, 9 AM - 6 PM EST</p>
            </div>
            <div style={{ background: '#fff', border: '1px solid #ddd', borderRadius: 8, padding: 16 }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, margin: '0 0 6px' }}>💬 Live Chat</h3>
              <p style={{ fontSize: 14, margin: '0 0 8px', color: '#565959' }}>Chat with a representative</p>
              <button className="btn-amazon orange">Start Chat</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: '8px 10px',
  border: '1px solid #ddd',
  borderRadius: 4,
  fontSize: 14,
  fontFamily: 'inherit',
  width: '100%',
  boxSizing: 'border-box',
};
