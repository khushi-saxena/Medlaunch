import { useFormContext } from 'react-hook-form';

export const Step4Review = ({ goToStep }) => {
    const { getValues } = useFormContext();
    const values = getValues();

    return (
        <div className="step-content">
            <h2 className="form-title">Review & Submit</h2>

            <div className="review-section" style={{ background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '12px', marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-color)' }}>Personal Info</h3>
                    <button type="button" onClick={() => goToStep(1)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', textDecoration: 'underline', fontSize: '0.8rem' }}>Edit</button>
                </div>
                <p><strong>Name:</strong> {values.fullName}</p>
                <p><strong>Email:</strong> {values.email}</p>
            </div>

            <div className="review-section" style={{ background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '12px', marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-color)' }}>Address Info</h3>
                    <button type="button" onClick={() => goToStep(2)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', textDecoration: 'underline', fontSize: '0.8rem' }}>Edit</button>
                </div>
                <p><strong>Address:</strong> {values.streetAddress}</p>
                <p><strong>City:</strong> {values.city}, {values.zipCode}</p>
            </div>

            <div className="review-section" style={{ background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-color)' }}>Preferences</h3>
                    <button type="button" onClick={() => goToStep(3)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', textDecoration: 'underline', fontSize: '0.8rem' }}>Edit</button>
                </div>
                <p><strong>Marketing:</strong> {values.marketingEmails ? 'Yes' : 'No'}</p>
                <p><strong>Theme:</strong> {values.theme}</p>
            </div>
        </div>
    );
};
