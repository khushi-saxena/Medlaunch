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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <path d="M12 2C6.48 2 2 6.48 2 12C2 16.97 5.69 21.09 10.41 21.88V21.88C10.42 21.88 10.43 21.88 10.44 21.88H13.56C13.57 21.88 13.58 21.88 13.59 21.88C18.31 21.09 22 16.97 22 12C22 6.48 17.52 2 12 2ZM12 4C14.21 4 16 5.79 16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4ZM7.5 18C7.5 16.14 10.63 15 12 15C13.37 15 16.5 16.14 16.5 18H7.5Z" fill="white" />
        </svg>
        <span>Support Chat</span>
      </button>
    </div>
  );
}

export default App;
