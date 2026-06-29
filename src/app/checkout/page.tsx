'use client';

export default function CheckoutPage() {
  return (
    <div>
      <div className="breadcrumb-list">
        <a href="/">Home</a><span className="sep">›</span>
        <a href="/cart">Cart</a><span className="sep">›</span>
        <span>Checkout</span>
      </div>

      <h1 style={{ fontSize: 24, fontWeight: 600, margin: '0 0 20px' }}>Checkout</h1>

      <div className="page-with-sidebar">
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ background: '#fff', border: '1px solid #ddd', borderRadius: 8, padding: 20, marginBottom: 16 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, margin: '0 0 16px' }}>1. Shipping Address</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <input placeholder="First Name" style={inputStyle} />
                <input placeholder="Last Name" style={inputStyle} />
              </div>
              <input placeholder="Email" type="email" style={inputStyle} />
              <input placeholder="Phone" style={inputStyle} />
              <input placeholder="Address" style={inputStyle} />
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <input placeholder="City" style={{ ...inputStyle, flex: 1 }} />
                <select style={{ ...inputStyle, flex: 1 }}>
                  <option>New York</option>
                  <option>California</option>
                  <option>Texas</option>
                </select>
                <input placeholder="ZIP Code" style={{ ...inputStyle, width: 140 }} />
              </div>
              <button className="btn-amazon orange" style={{ alignSelf: 'flex-start' }}>
                Use this address
              </button>
            </div>
          </div>

          <div style={{ background: '#fff', border: '1px solid #ddd', borderRadius: 8, padding: 20, marginBottom: 16 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, margin: '0 0 16px' }}>2. Payment Method</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 12, background: '#f7f7f7', borderRadius: 6, fontSize: 14, cursor: 'pointer' }}>
                <input type="radio" name="payment" defaultChecked />
                <strong>Credit / Debit Card</strong>
                <span style={{ color: '#565959' }}>— Visa, Mastercard, Amex</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 12, background: '#f7f7f7', borderRadius: 6, fontSize: 14, cursor: 'pointer' }}>
                <input type="radio" name="payment" />
                <strong>PayPal</strong>
                <span style={{ color: '#565959' }}>— Fast & secure</span>
              </label>
              <hr style={{ border: 'none', borderTop: '1px solid #ddd' }} />
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <input placeholder="Card Number" style={{ ...inputStyle, flex: 2 }} />
                <input placeholder="MM/YY" style={{ ...inputStyle, flex: 1 }} />
                <input placeholder="CVC" style={{ ...inputStyle, width: 100 }} />
              </div>
              <input placeholder="Name on Card" style={inputStyle} />
            </div>
          </div>

          <div style={{ background: '#fff', border: '1px solid #ddd', borderRadius: 8, padding: 20, marginBottom: 16 }}>
            <h2 style={{ fontSize: 18, fontWeight: 600, margin: '0 0 16px' }}>3. Review Your Order</h2>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', fontSize: 14, marginBottom: 16 }}>
              <div>
                <strong>Shipping Address</strong><br />
                <span style={{ color: '#565959' }}>John Doe<br />123 Main St<br />New York, NY 10001</span>
              </div>
              <div>
                <strong>Payment Method</strong><br />
                <span style={{ color: '#565959' }}>Visa ending in 3456</span>
              </div>
            </div>
            <hr style={{ border: 'none', borderTop: '1px solid #ddd' }} />
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, margin: '12px 0' }}>
              <tbody>
                <tr><td style={{ padding: '4px 0' }}>Subtotal</td><td style={{ textAlign: 'right' }}>$786.00</td></tr>
                <tr><td style={{ padding: '4px 0' }}>Shipping</td><td style={{ textAlign: 'right' }}>$12.00</td></tr>
                <tr><td style={{ padding: '4px 0' }}>Tax</td><td style={{ textAlign: 'right' }}>$62.88</td></tr>
              </tbody>
            </table>
            <hr style={{ border: 'none', borderTop: '1px solid #ddd' }} />
            <div style={{ fontSize: 22, fontWeight: 700, textAlign: 'right', margin: '12px 0' }}>Total: $860.88</div>
            <button className="btn-amazon orange full" style={{ fontSize: 16, height: 44 }}>
              Place Your Order
            </button>
          </div>
        </div>

        <div style={{ width: 280, flexShrink: 0, background: '#fff', border: '1px solid #ddd', borderRadius: 8, padding: 16 }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, margin: '0 0 12px' }}>Order Summary</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <tbody>
              <tr><td style={{ padding: '4px 0' }}>Items</td><td style={{ textAlign: 'right' }}>3</td></tr>
              <tr><td style={{ padding: '4px 0' }}>Subtotal</td><td style={{ textAlign: 'right' }}>$786.00</td></tr>
              <tr><td style={{ padding: '4px 0' }}>Shipping</td><td style={{ textAlign: 'right' }}>$12.00</td></tr>
              <tr><td style={{ padding: '4px 0' }}>Tax</td><td style={{ textAlign: 'right' }}>$62.88</td></tr>
            </tbody>
          </table>
          <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '8px 0' }} />
          <div style={{ fontSize: 20, fontWeight: 700 }}>$860.88</div>
          <p style={{ fontSize: 13, color: '#007600', margin: '6px 0 0' }}>Free Shipping on orders over $50</p>
        </div>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  padding: '8px 10px',
  border: '1px solid #ddd',
  borderRadius: 4,
  fontSize: 14,
  fontFamily: 'inherit',
  flex: 1,
  minWidth: 180,
};
