'use client';

import { useState } from 'react';
import { orders } from '@/components/products';

const statusColors: Record<string, string> = {
  confirmed: '#007600',
  shipped: '#c45500',
  delivered: '#007600',
  cancelled: '#b12704',
};

export default function OrdersPage() {
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const totalPages = Math.ceil(orders.length / pageSize);
  const paged = orders.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div>
      <div className="breadcrumb-list">
        <a href="/">Home</a><span className="sep">›</span>
        <span>Your Orders</span>
      </div>

      <h1 style={{ fontSize: 24, fontWeight: 600, margin: '0 0 16px' }}>Your Orders</h1>

      <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
        <input
          placeholder="Search all orders..."
          style={{
            padding: '8px 12px', border: '1px solid #ddd', borderRadius: 4, fontSize: 14,
            flex: 1, minWidth: 200, fontFamily: 'inherit',
          }}
        />
        <select style={{
          padding: '8px 12px', border: '1px solid #ddd', borderRadius: 4,
          fontSize: 14, background: '#fff', fontFamily: 'inherit',
        }}>
          <option>All Orders</option>
          <option>Last 30 days</option>
          <option>Last 6 months</option>
        </select>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {paged.map((order) => (
          <div key={order.id} style={{
            background: '#fff', border: '1px solid #ddd', borderRadius: 8, padding: 16,
          }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              flexWrap: 'wrap', gap: 8, marginBottom: 8,
              fontSize: 13, color: '#565959',
            }}>
              <span><strong style={{ color: '#0f1111' }}>Order #{order.id}</strong></span>
              <span>Placed on {order.date}</span>
              <span style={{ color: statusColors[order.status], fontWeight: 600, textTransform: 'capitalize' }}>
                {order.status}
              </span>
              <span><strong style={{ color: '#0f1111' }}>${order.total.toFixed(2)}</strong></span>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <button className="btn-amazon secondary" style={{ fontSize: 12, height: 28, padding: '0 10px' }}>
                View Order
              </button>
              <button className="btn-amazon secondary" style={{ fontSize: 12, height: 28, padding: '0 10px' }}>
                Track Package
              </button>
              <button className="btn-amazon secondary" style={{ fontSize: 12, height: 28, padding: '0 10px' }}>
                Return or Replace
              </button>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 24 }}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              style={{
                padding: '6px 12px', border: `1px solid ${p === page ? '#007185' : '#ddd'}`,
                borderRadius: 4, background: '#fff',
                color: p === page ? '#007185' : '#0f1111',
                fontWeight: p === page ? 700 : 400,
                cursor: 'pointer', fontSize: 13, fontFamily: 'inherit',
              }}
            >
              {p}
            </button>
          ))}
        </div>
      )}

      <div style={{
        background: '#fff', border: '1px solid #ddd', borderRadius: 8, padding: 20, marginTop: 24,
      }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, margin: '0 0 12px' }}>Order #1043 — In Transit</h2>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', fontSize: 14, marginBottom: 12 }}>
          <div><span style={{ color: '#565959' }}>Arriving</span><br /><strong>Tuesday, July 1</strong></div>
          <div><span style={{ color: '#565959' }}>Shipped via</span><br /><strong>UPS Ground</strong></div>
          <div><span style={{ color: '#565959' }}>Tracking</span><br /><strong>1Z999AA10123456784</strong></div>
        </div>
        <button className="btn-amazon orange" style={{ fontSize: 13, height: 32 }}>
          Track Package
        </button>
      </div>
    </div>
  );
}
