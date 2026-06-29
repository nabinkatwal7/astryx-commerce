"use client";

import { useState } from "react";
import { products } from "@/components/products";

const categories = ["All", "Wearables", "Audio", "Bags", "Home", "Food"];

function Stars({ rating }: { rating: number }) {
  return (
    <span className="star-rating">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className="star">{i <= Math.round(rating) ? '\u2605' : '\u2606'}</span>
      ))}
    </span>
  );
}

export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const pageSize = 8;

  const filtered = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category === selectedCategory);
  const totalPages = Math.ceil(filtered.length / pageSize);
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div>
      <div className="breadcrumb-list">
        <a href="/">Home</a><span className="sep">›</span>
        <span>Products</span>
      </div>

      <div className="page-with-sidebar">
        <aside className="filter-sidebar">
          <div className="filter-group">
            <h3>Category</h3>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-link ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => { setSelectedCategory(cat); setPage(1); }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="filter-group">
            <h3>Price</h3>
            <button className="filter-link">Under $25</button>
            <button className="filter-link">$25 to $50</button>
            <button className="filter-link">$50 to $100</button>
            <button className="filter-link">$100 & above</button>
          </div>
          <div className="filter-group">
            <h3>Rating</h3>
            {[4, 3, 2, 1].map((r) => (
              <button key={r} className="filter-link">
                <Stars rating={r} /> & up
              </button>
            ))}
          </div>
        </aside>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 8, marginBottom: 16,
          }}>
            <p style={{ margin: 0, fontSize: 14, color: '#565959' }}>
              {filtered.length} results for <strong>Products</strong>
            </p>
            <select style={{
              padding: '6px 10px', fontSize: 13, border: '1px solid #ddd',
              borderRadius: 4, background: '#fff',
            }}>
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Avg. Customer Rating</option>
            </select>
          </div>

          <div className="product-grid">
            {paged.map((p) => {
              const priceParts = p.price.toFixed(2).split('.');
              return (
                <div key={p.id} className="product-card">
                  <a href={`/products/${p.id}`}>
                    <img src={p.image} alt={p.name} loading="lazy" />
                  </a>
                  <div className="product-card-body">
                    {p.badge && <span className={`product-card-badge ${p.badgeVariant || 'orange'}`}>{p.badge}</span>}
                    {!p.inStock && <span className="product-card-badge red">Out of stock</span>}
                    <a href={`/products/${p.id}`} style={{ textDecoration: 'none' }}>
                      <p className="product-card-title">{p.name}</p>
                    </a>
                    <div className="product-card-rating">
                      <Stars rating={p.rating} />
                      <span className="count">{p.rating.toFixed(1)}</span>
                    </div>
                    <div className="product-card-price">
                      ${priceParts[0]}<span className="cents">{priceParts[1]}</span>
                      {p.originalPrice && <span className="original">${p.originalPrice.toFixed(2)}</span>}
                    </div>
                    <button className="btn-amazon primary" style={{ marginTop: 8 }} disabled={!p.inStock}>
                      {p.inStock ? 'Add to cart' : 'Notify me'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 24 }}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  style={{
                    padding: '6px 12px', border: `1px solid ${p === page ? '#007185' : '#ddd'}`,
                    borderRadius: 4, background: p === page ? '#fff' : '#fff',
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
        </div>
      </div>
    </div>
  );
}
