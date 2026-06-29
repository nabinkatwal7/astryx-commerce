'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { products } from '@/components/products';

function Stars({ rating }: { rating: number }) {
  return (
    <span className="star-rating">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className="star">{i <= Math.round(rating) ? '\u2605' : '\u2606'}</span>
      ))}
    </span>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id) || products[0];
  const [tab, setTab] = useState('details');

  const priceParts = product.price.toFixed(2).split('.');

  return (
    <div>
      <div className="breadcrumb-list">
        <a href="/">Home</a><span className="sep">›</span>
        <a href="/products">Products</a><span className="sep">›</span>
        <span>{product.name}</span>
      </div>

      <div className="detail-layout">
        <img className="detail-image" src={product.image} alt={product.name} />

        <div className="detail-info">
          <h1>{product.name}</h1>
          <div className="product-card-rating">
            <Stars rating={product.rating} />
            <span className="count">{product.rating.toFixed(1)} ({Math.floor(Math.random() * 500) + 50} ratings)</span>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '12px 0' }} />
          <div className="detail-price">
            ${priceParts[0]}<span className="cents">{priceParts[1]}</span>
            {product.originalPrice && (
              <>
                <span className="original">${product.originalPrice.toFixed(2)}</span>
                <span className="save">Save ${(product.originalPrice - product.price).toFixed(2)}</span>
              </>
            )}
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.5, color: '#565959', margin: '8px 0 16px' }}>
            {product.description}
          </p>
          <p style={{ fontSize: 14 }}><strong>Category:</strong> {product.category}</p>
          <p style={{ fontSize: 14 }}>
            <span style={{ color: product.inStock ? '#007600' : '#b12704', fontWeight: 600 }}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </p>

          <div className="detail-buy-box">
            <div className="detail-price" style={{ fontSize: 22 }}>
              ${priceParts[0]}<span className="cents">{priceParts[1]}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 14 }}>
                <label>Qty:</label>
                <select style={{ padding: '4px 8px', border: '1px solid #ddd', borderRadius: 4, background: '#fff' }}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>
              <button className="btn-amazon orange full">
                Add to Cart
              </button>
              <button className="btn-amazon primary full">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '24px 0' }} />

      <div className="tab-bar">
        <button className={tab === 'details' ? 'active' : ''} onClick={() => setTab('details')}>Details</button>
        <button className={tab === 'shipping' ? 'active' : ''} onClick={() => setTab('shipping')}>Shipping</button>
        <button className={tab === 'reviews' ? 'active' : ''} onClick={() => setTab('reviews')}>Reviews</button>
      </div>

      {tab === 'details' && (
        <div style={{ background: '#fff', border: '1px solid #ddd', borderRadius: 8, padding: 20 }}>
          <table style={{ width: '100%', fontSize: 14, borderCollapse: 'collapse' }}>
            <tbody>
              {[
                ['SKU', `AST-${product.id}-001`],
                ['Category', product.category],
                ['Material', 'Premium quality'],
                ['Weight', '0.5 kg'],
                ['Dimensions', '20 x 15 x 5 cm'],
                ['Warranty', '1 year limited'],
              ].map(([label, value]) => (
                <tr key={label}>
                  <td style={{ padding: '8px 12px', color: '#565959', width: 140, borderBottom: '1px solid #eee' }}>{label}</td>
                  <td style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'shipping' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: '#fff', border: '1px solid #ddd', borderRadius: 8, padding: 20 }}>
            <h3 style={{ margin: '0 0 8px', fontSize: 16 }}>Delivery Options</h3>
            <div style={{ fontSize: 14, lineHeight: 1.8 }}>
              <strong>Free Shipping</strong><br />
              <span style={{ color: '#565959' }}>On orders over $50 — estimated 5-7 business days</span><br /><br />
              <strong>Express Delivery</strong><br />
              <span style={{ color: '#565959' }}>$12.99 — estimated 1-2 business days</span><br /><br />
              <strong>Same-Day Delivery</strong><br />
              <span style={{ color: '#565959' }}>Available in select areas — order before 2 PM</span>
            </div>
          </div>
          <div style={{ background: '#fff', border: '1px solid #ddd', borderRadius: 8, padding: 20 }}>
            <h3 style={{ margin: '0 0 8px', fontSize: 16 }}>Return Policy</h3>
            <p style={{ fontSize: 14, color: '#565959', margin: 0 }}>
              Free returns within 30 days of delivery. Items must be in original condition.
            </p>
          </div>
        </div>
      )}

      {tab === 'reviews' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: '#fff', border: '1px solid #ddd', borderRadius: 8, padding: 20, display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, fontWeight: 700 }}>{product.rating}</div>
              <Stars rating={product.rating} />
              <div style={{ fontSize: 13, color: '#565959' }}>out of 5</div>
            </div>
            <button className="btn-amazon secondary">Write a Review</button>
          </div>
          {[
            { name: 'Ami Pena', date: '2 days ago', rating: 5, text: 'Absolutely love this product! The quality exceeds expectations. Fast shipping and beautiful packaging.' },
            { name: 'John Doe', date: '1 week ago', rating: 4, text: 'Great product for the price. The design is minimalist and elegant.' },
          ].map((r) => (
            <div key={r.name} style={{ background: '#fff', border: '1px solid #ddd', borderRadius: 8, padding: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 14, marginBottom: 6 }}>
                <strong>{r.name}</strong>
                <span style={{ color: '#565959', fontSize: 13 }}>{r.date}</span>
              </div>
              <Stars rating={r.rating} />
              <p style={{ fontSize: 14, margin: '6px 0 0', lineHeight: 1.5, color: '#565959' }}>{r.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
