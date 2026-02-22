import { Link } from 'react-router-dom'

export default function Subscriptions() {
  return (
    <div style={{ padding: '1.5rem 2rem', background: '#0a0a0a', minHeight: '100vh' }}>
      <h1 style={{ margin: '0 0 1rem', fontSize: '1.5rem', color: '#e2e8f0' }}>Subscriptions</h1>
      <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
        List and manage customer subscriptions. Data will come from the Stellarbill backend.
      </p>
      <div style={{ background: '#1a1a1a', borderRadius: 8, border: '1px solid #2a2a2a', padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#f8fafc' }}>Developer Pro</div>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>sub_123456789</div>
          </div>
          <Link
            to="/subscriptions/sub_123456789/usage"
            style={{
              fontSize: '0.875rem',
              color: '#3b82f6',
              fontWeight: 500,
              textDecoration: 'none'
            }}
          >
            View usage
          </Link>
        </div>
      </div>
    </div>
  )
}
