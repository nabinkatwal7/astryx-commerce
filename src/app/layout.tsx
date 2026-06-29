import './globals.css';

const navItems = [
  { label: 'Today\'s Deals', href: '/products' },
  { label: 'Products', href: '/products' },
  { label: 'Cart', href: '/cart' },
  { label: 'Orders', href: '/orders' },
  { label: 'Support', href: '/support' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-astryx-theme="neutral" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Astryx Store</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <header className="site-header">
          <a href="/" className="site-logo">
            astryx<span>.store</span>
          </a>
          <div className="header-search">
            <input type="text" placeholder="Search Astryx Store" />
            <button aria-label="Search">🔍</button>
          </div>
          <div className="header-links">
            <a href="/">
              <span className="link-sub">Hello, Sign in</span>
              <span className="link-main">Account &amp; Lists</span>
            </a>
            <a href="/orders">
              <span className="link-sub">Returns</span>
              <span className="link-main">&amp; Orders</span>
            </a>
            <a href="/cart" className="cart-link">
              🛒
              <span className="cart-count">3</span>
              <span style={{ marginTop: 14, fontSize: 13, fontWeight: 700 }}>Cart</span>
            </a>
          </div>
        </header>
        <nav className="sub-nav">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <main style={{ maxWidth: 1280, margin: '0 auto', padding: '20px 20px 0' }}>
          {children}
        </main>
        <footer className="site-footer">
          <div className="site-footer-top">
            <a href="#">Back to top</a>
          </div>
          <div className="footer-links">
            <div>
              <h4>Get to Know Us</h4>
              <a href="/">About Us</a>
              <a href="/">Careers</a>
              <a href="/">Press Center</a>
            </div>
            <div>
              <h4>Make Money with Us</h4>
              <a href="/">Sell products</a>
              <a href="/">Affiliate Program</a>
              <a href="/">Advertise</a>
            </div>
            <div>
              <h4>Let Us Help You</h4>
              <a href="/">Your Account</a>
              <a href="/orders">Your Orders</a>
              <a href="/support">Help Center</a>
            </div>
          </div>
          <hr className="footer-divider" />
          <div className="footer-copy">
            &copy; 2026 Astryx Store. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
