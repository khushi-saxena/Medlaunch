import { MultiStepForm } from './components/MultiStepForm/MultiStepForm';
import './index.css';

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header" style={{
        background: 'var(--header-bg)',
        color: 'white',
        padding: '0 40px',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 500 }}>DNV Healthcare</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'white',
            color: 'var(--header-bg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '12px'
          }}>KM</div>
          <span style={{ fontSize: '0.9rem' }}>Katherine Martinez</span>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '40px 20px', display: 'flex', justifyContent: 'center' }}>
        <MultiStepForm />
      </main>

      {/* Footer / Support FAB */}
      <button style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        background: 'var(--primary-blue)',
        color: 'white',
        border: 'none',
        borderRadius: '30px',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        fontWeight: 600
      }}>
        <span>Support Chat</span>
      </button>
    </div>
  );
}

export default App;
