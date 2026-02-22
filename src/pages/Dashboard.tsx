export default function Dashboard() {
  return (
    <div style={{ padding: '1.5rem 2rem', background: '#0a0a0a', minHeight: '100vh' }}>
      <h1 style={{ margin: '0 0 1rem', fontSize: '1.5rem', color: '#e2e8f0' }}>Dashboard</h1>
      <p style={{ color: '#64748b' }}>
        Overview of your subscription metrics and revenue. Connect the backend API to load real data.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
        <Card title="Active Subscriptions" value="—" />
        <Card title="MRR" value="—" />
        <Card title="Pending Charges" value="—" />
      </div>
    </div>
  )
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div style={{ background: '#1a1a1a', padding: '1.25rem', borderRadius: 8, border: '1px solid #2a2a2a' }}>
      <div style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.25rem' }}>{title}</div>
      <div style={{ fontSize: '1.5rem', fontWeight: 600, color: '#e2e8f0' }}>{value}</div>
    </div>
  )
}
