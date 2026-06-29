'use client';

const cartRows = [
  { id: '1', name: 'Minimalist Watch', price: 199, quantity: 1, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop' },
  { id: '3', name: 'Wireless Headphones', price: 249, quantity: 2, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop' },
  { id: '2', name: 'Canvas Backpack', price: 89, quantity: 1, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop' },
];

export default function CartPage() {
  const subtotal = cartRows.reduce((sum, row) => sum + row.price * row.quantity, 0);

  return (
    <div>
      <div className="breadcrumb-list">
        <a href="/">Home</a><span className="sep">›</span>
        <span>Shopping Cart</span>
      </div>

      <h1 style={{ fontSize: 24, fontWeight: 600, margin: '0 0 4px' }}>
        Shopping Cart
      </h1>
      <p style={{ fontSize: 14, color: '#565959', margin: '0 0 16px' }}>
        {cartRows.length} item(s)
        <span style={{ marginLeft: 12 }}>
          Subtotal: <strong style={{ fontSize: 16 }}>${subtotal.toFixed(2)}</strong>
        </span>
      </p>

      <div className="cart-layout">
        <div className="cart-items">
          {cartRows.map((row) => {
            const total = row.price * row.quantity;
            return (
              <div key={row.id} style={{
                display: 'flex', gap: 16, padding: '16px 0',
                borderBottom: '1px solid #ddd', background: '#fff',
                paddingLeft: 16, marginBottom: 4,
              }}>
                <img src={row.image} alt={row.name} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: 4 }} />
                <div style={{ flex: 1 }}>
                  <a href={`/products/${row.id}`} style={{ fontSize: 16, fontWeight: 500, color: '#007185', textDecoration: 'none' }}>
                    {row.name}
                  </a>
                  <p style={{ fontSize: 13, color: '#007600', margin: '4px 0' }}>In Stock</p>
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 8 }}>
                    <select
                      defaultValue={row.quantity}
                      style={{ padding: '4px 6px', border: '1px solid #ddd', borderRadius: 4, background: '#f7f7f7', fontSize: 13 }}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                        <option key={n}>{n}</option>
                      ))}
                    </select>
                    <span style={{ color: '#ddd' }}>|</span>
                    <button style={{ background: 'none', border: 'none', color: '#007185', cursor: 'pointer', fontSize: 13, fontFamily: 'inherit' }}>
                      Delete
                    </button>
                    <span style={{ color: '#ddd' }}>|</span>
                    <button style={{ background: 'none', border: 'none', color: '#007185', cursor: 'pointer', fontSize: 13, fontFamily: 'inherit' }}>
                      Save for later
                    </button>
                  </div>
                </div>
                <div style={{ fontSize: 18, fontWeight: 600, whiteSpace: 'nowrap', paddingRight: 16 }}>
                  ${total.toFixed(2)}
                </div>
              </div>
            );
          })}

          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <a href="/products" className="btn-amazon secondary">Continue Shopping</a>
            <button className="btn-amazon secondary">Update Cart</button>
          </div>
        </div>

        <div className="cart-summary">
          <h3 style={{ margin: '0 0 12px', fontSize: 18, fontWeight: 600 }}>
            Subtotal ({cartRows.length} item(s)): <strong>${subtotal.toFixed(2)}</strong>
          </h3>
          <div style={{ fontSize: 13, color: '#007600', marginBottom: 12 }}>
            <input type="checkbox" defaultChecked /> This order contains a gift
          </div>
          <button className="btn-amazon orange full" style={{ marginBottom: 8 }}>
            Proceed to Checkout
          </button>
          <button className="btn-amazon primary full">
            Pay with PayPal
          </button>
          <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '16px 0' }} />
          <div style={{ fontSize: 13, color: '#565959' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <tbody>
                {[
                  ['Items', cartRows.length],
                  ['Subtotal', `$${subtotal.toFixed(2)}`],
                  ['Shipping', '$12.00'],
                  ['Tax', `$${(subtotal * 0.08).toFixed(2)}`],
                ].map(([label, value]) => (
                  <tr key={label}>
                    <td style={{ padding: '3px 0' }}>{label}</td>
                    <td style={{ textAlign: 'right', padding: '3px 0' }}>{value}</td>
                  </tr>
                ))}
                <tr>
                  <td style={{ padding: '6px 0', fontWeight: 700, fontSize: 18, borderTop: '1px solid #ddd' }}>Total</td>
                  <td style={{ textAlign: 'right', padding: '6px 0', fontWeight: 700, fontSize: 18, borderTop: '1px solid #ddd' }}>
                    ${(subtotal + 12 + subtotal * 0.08).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
