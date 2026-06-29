"use client";

import { products } from "@/components/products";

const categories = [
  { name: "Wearables", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop" },
  { name: "Audio", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop" },
  { name: "Bags", img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop" },
  { name: "Home", img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=200&h=200&fit=crop" },
  { name: "Food", img: "https://images.unsplash.com/photo-1555507036-ab1f4038024a?w=200&h=200&fit=crop" },
];

function Stars({ rating }: { rating: number }) {
  return (
    <span className="star-rating">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className="star">{i <= Math.round(rating) ? '\u2605' : '\u2606'}</span>
      ))}
    </span>
  );
}

function ProductCard({ p }: { p: typeof products[number] }) {
  const priceParts = p.price.toFixed(2).split('.');
  return (
    <div className="product-card">
      <a href={`/products/${p.id}`}>
        <img src={p.image} alt={p.name} loading="lazy" />
      </a>
      <div className="product-card-body">
        {p.badge && <span className={`product-card-badge ${p.badgeVariant || 'orange'}`}>{p.badge}</span>}
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
        <button className="btn-amazon primary" style={{ marginTop: 8 }}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default function HomePage() {
  const featured = products.slice(0, 8);
  const deals = products.filter(p => p.originalPrice);
  const food = products.filter(p => p.category === "Food");

  return (
    <div>
      <div className="hero-section" style={{ marginBottom: 24 }}>
        <div className="hero-text">
          <h1>Little joys, everywhere you go</h1>
          <p>We believe the smallest details are the ones that matter most. Turn an ordinary day into something worth remembering.</p>
          <div style={{ display: 'flex', gap: 10 }}>
            <a href="/products" className="btn-amazon orange">Shop Now</a>
            <a href="/products" className="btn-amazon secondary">Learn More</a>
          </div>
        </div>
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=400&fit=crop"
          alt="Featured products"
        />
      </div>

      <div style={{ marginBottom: 24 }}>
        <h2 className="section-title">Shop by Category</h2>
        <div className="product-grid">
          {categories.map((cat) => (
            <div key={cat.name} className="product-card" style={{ textAlign: 'center', padding: 20 }}>
              <img src={cat.img} alt={cat.name} style={{ width: 120, height: 120, borderRadius: '50%', margin: '0 auto', objectFit: 'cover' }} />
              <div className="product-card-body">
                <p className="product-card-title" style={{ textAlign: 'center' }}>{cat.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <h2 className="section-title">Today's Deals</h2>
        <div className="product-grid">
          {deals.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {featured.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <h2 className="section-title">Fresh from the Kitchen</h2>
        <div className="product-grid">
          {food.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 24, background: '#fff', border: '1px solid #ddd', borderRadius: 8, padding: 24 }}>
        <h2 className="section-title">What Our Customers Say</h2>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {[
            { name: 'Ami Pena', text: 'The quality exceeded my expectations. Fast shipping too! Would recommend to anyone.' },
            { name: 'John Doe', text: 'Beautifully packaged and exactly as described. Will definitely order again.' },
            { name: 'Jane Smith', text: 'Amazing customer service! They went above and beyond to help me.' },
          ].map((t) => (
            <div key={t.name} style={{ flex: '1 1 240px', background: '#f7f7f7', borderRadius: 8, padding: 16 }}>
              <Stars rating={5} />
              <p style={{ fontSize: 14, lineHeight: 1.5, margin: '6px 0' }}>&ldquo;{t.text}&rdquo;</p>
              <p style={{ fontSize: 13, fontWeight: 600, margin: 0 }}>— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
