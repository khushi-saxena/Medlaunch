export const Success = () => {
    return (
        <div className="step-content" style={{ textAlign: 'center', padding: '40px 0' }}>
            <div style={{
                width: '80px',
                height: '80px',
                background: 'var(--accent-color)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                boxShadow: '0 0 20px var(--accent-color)'
            }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <h2 className="form-title">Success!</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '10px' }}>
                Your information has been submitted successfully.
            </p>
            <button
                onClick={() => window.location.reload()}
                className="btn btn-primary"
                style={{ marginTop: '30px' }}
            >
                Start Over
            </button>
        </div>
    );
};
