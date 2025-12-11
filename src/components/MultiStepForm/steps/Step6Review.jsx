import { useFormContext } from 'react-hook-form';
import { useState } from 'react';

const ReviewSection = ({ title, children, onEdit }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div style={{ border: '1px solid #dee2e6', borderRadius: '4px', marginBottom: '15px', overflow: 'hidden' }}>
            <div
                style={{
                    background: 'var(--primary-blue)',
                    color: 'white',
                    padding: '10px 15px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>{isOpen ? '▼' : '▶'}</span>
                    <span style={{ fontWeight: 600 }}>{title}</span>
                </div>
                <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); onEdit(); }}
                    style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '0.8rem', textDecoration: 'underline', cursor: 'pointer' }}
                >
                    Edit
                </button>
            </div>
            {isOpen && (
                <div style={{ padding: '20px', background: '#f8f9fa' }}>
                    {children}
                </div>
            )}
        </div>
    );
};

const Row = ({ label, value }) => (
    <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', marginBottom: '8px', fontSize: '0.9rem' }}>
        <div style={{ fontWeight: 600, color: '#444' }}>{label}</div>
        <div>{value || '-'}</div>
    </div>
);

export const Step6Review = ({ goToStep }) => {
    const { getValues } = useFormContext();
    const values = getValues();

    return (
        <div>
            <h2 className="form-section-title">Hospital Information</h2>

            <ReviewSection title="Basic Information" onEdit={() => goToStep(1)}>
                <Row label="Legal Entity Name" value={values.legalEntityName || "Sample Hospital Corporation"} />
                <Row label="DBA Name" value={values.dbaName || "Sample Hospital"} />
                <div style={{ marginTop: '10px', padding: '10px', background: '#fff', borderRadius: '4px' }}>
                    <div style={{ fontWeight: 'bold' }}>{values.firstName} {values.lastName}</div>
                    <div>Chief Executive Officer</div>
                    <div>Work: {values.workPhone}</div>
                    <div>Email: {values.email} <span style={{ background: '#d1e7dd', color: '#0f5132', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px' }}>Verified</span></div>
                    <div>Address: 123 Healthcare Way, Medical City, ST 12345</div>
                </div>
            </ReviewSection>

            <ReviewSection title="Facility Details" onEdit={() => goToStep(2)}>
                <Row label="Facility Type" value={values.facilityType || "Short-Term Acute Care"} />
            </ReviewSection>

            <ReviewSection title="Leadership Contacts" onEdit={() => goToStep(3)}>
                <div style={{ marginBottom: '15px' }}>
                    <div style={{ fontWeight: 600, marginBottom: '5px' }}>CEO</div>
                    <div style={{ background: 'white', padding: '10px' }}>
                        <div><strong>John Doe</strong></div>
                        <div>Phone: (555) 123-4567</div>
                        <div>Email: john.doe@hospital.com</div>
                    </div>
                </div>
                <div>
                    <div style={{ fontWeight: 600, marginBottom: '5px' }}>Director of Quality</div>
                    <div style={{ background: 'white', padding: '10px' }}>
                        <div><strong>Jane Smith</strong></div>
                        <div>Phone: (555) 234-5678</div>
                        <div>Email: jane.smith@hospital.com</div>
                    </div>
                </div>
            </ReviewSection>

            <ReviewSection title="Site Information" onEdit={() => goToStep(4)}>
                <Row label="Site Configuration" value={values.locationType === 'multiple' ? 'Multiple Locations' : 'Single Location'} />
                <Row label="Input Method" value="File Upload" />

                {/* Mock data for the review table view */}
                <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[1, 2, 3].map(i => (
                        <div key={i} style={{ background: 'white', padding: '10px', borderLeft: '3px solid var(--primary-blue)' }}>
                            <div style={{ fontWeight: 600 }}>Practice Location {i}</div>
                            <div style={{ fontSize: '0.85rem', color: '#555' }}>456 Medical Plaza, Suite 100, Healthcare City, ST 12345</div>
                            <div style={{ fontSize: '0.8rem', color: '#777' }}>FTEs: 45 | Shifts: 2 | Miles to Main: 5</div>
                        </div>
                    ))}
                </div>
            </ReviewSection>

            <ReviewSection title="Services & Certifications" onEdit={() => goToStep(5)}>
                <Row label="Services Provided" value="Emergency Department, Cardiac Catheterization Lab, Open Heart Surgery, MRI" />
                <Row label="Standards to Apply" value="Emergency Department, Inpatient Acute Care, General Anesthesiology Location" />
                <Row label="Date of Application" value="05/20/2021" />
                <Row label="Expiration Date" value="05/16/2025" />
            </ReviewSection>

            <div style={{ marginTop: '30px', padding: '20px', background: 'white', border: '1px solid #dee2e6', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>Ready to Submit?</h3>
                <label className="checkbox-label" style={{ alignItems: 'flex-start' }}>
                    <input type="checkbox" style={{ marginTop: '3px' }} />
                    <span style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.4' }}>
                        I certify that all information provided is accurate and complete to the best of my knowledge. By submitting this form, you agree to our terms and conditions. DNV will review your application and contact you within 2-3 business days.
                    </span>
                </label>

                <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                    <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>📄</span> Download as PDF
                    </button>
                    <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>📊</span> Export to CSV
                    </button>
                </div>
            </div>
        </div>
    );
};
