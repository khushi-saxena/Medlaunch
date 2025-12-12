import { useFormContext } from 'react-hook-form';
import { useState } from 'react';

const ReviewSection = ({ title, children, onEdit }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div style={{ border: '1px solid #dee2e6', borderRadius: '4px', marginBottom: '15px', overflow: 'hidden' }}>
            <div
                style={{
                    background: 'var(--primary-blue)', // Ensure this var is defined or use hex
                    backgroundColor: '#0072CE', // Fallback/Explict
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
                <div style={{ padding: '20px', background: 'white' }}> {/* Changed bg to white to match screenshot clean look or keeping light gray? Screenshot looks white/light. */}
                    {children}
                </div>
            )}
        </div>
    );
};

const Row = ({ label, value }) => (
    <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', marginBottom: '8px', fontSize: '0.9rem' }}>
        <div style={{ fontWeight: 600, color: '#444' }}>{label}</div>
        <div style={{ wordBreak: 'break-word' }}>{value || '-'}</div>
    </div>
);

const ContactDisplay = ({ role, firstName, lastName, phone, email }) => (
    <div style={{ marginBottom: '15px' }}>
        <div style={{ fontWeight: 600, marginBottom: '5px' }}>{role}</div>
        <div style={{ background: '#f8f9fa', padding: '10px', borderRadius: '4px' }}>
            <div><strong>{firstName} {lastName}</strong></div>
            {phone && <div>Phone: {phone}</div>}
            {email && <div>Email: {email}</div>}
        </div>
    </div>
);

export const Step6Review = ({ goToStep }) => {
    const { getValues } = useFormContext();
    const values = getValues();

    // Aggregate services
    const getAllServices = () => {
        const categories = values.services || {};
        let all = [];
        Object.values(categories).forEach(catArray => {
            if (Array.isArray(catArray)) {
                all = [...all, ...catArray];
            }
        });
        return all.length > 0 ? all.join(", ") : "No services selected";
    };

    return (
        <div>
            <h2 className="form-section-title">Review & Submit</h2>

            {/* Basic Information */}
            <ReviewSection title="Basic Information" onEdit={() => goToStep(1)}>
                <Row label="Legal Entity Name" value={values.legalEntityName} />
                <Row label="d/b/a Name" value={values.dbaName} />

                <div style={{ marginTop: '15px' }}>
                    <div style={{ fontWeight: 600, marginBottom: '5px', color: '#444' }}>Primary Contact</div>
                    <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '4px' }}>
                        <div style={{ fontWeight: 'bold' }}>{values.firstName} {values.lastName}</div>
                        <div style={{ color: '#666', fontStyle: 'italic', marginBottom: '5px' }}>{values.title}</div>
                        <div>Work: {values.workPhone} {(values.cellPhone) && `| Cell: ${values.cellPhone}`}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            Email: {values.email}
                            {/* Note: Verification status is internal state of Step 1. Unless valid flag moved to context, we just show email. */}
                        </div>
                    </div>
                </div>
            </ReviewSection>

            {/* Facility Details */}
            <ReviewSection title="Facility Details" onEdit={() => goToStep(2)}>
                <Row label="Facility Type" value={values.facilityType} />
            </ReviewSection>

            {/* Leadership Contacts */}
            <ReviewSection title="Leadership Contacts" onEdit={() => goToStep(3)}>
                <ContactDisplay
                    role="Chief Executive Officer"
                    firstName={values.ceoFirstName}
                    lastName={values.ceoLastName}
                    phone={values.ceoPhone}
                    email={values.ceoEmail}
                />
                <ContactDisplay
                    role="Director of Quality"
                    firstName={values.qualityFirstName}
                    lastName={values.qualityLastName}
                    phone={values.qualityPhone}
                    email={values.qualityEmail}
                />
                <ContactDisplay
                    role="Invoicing Contact"
                    firstName={values.invoiceFirstName}
                    lastName={values.invoiceLastName}
                    phone={values.invoicePhone}
                    email={values.invoiceEmail}
                />
            </ReviewSection>

            {/* Site Information */}
            <ReviewSection title="Site Information" onEdit={() => goToStep(4)}>
                <Row label="Location Configuration" value={values.locationType === 'multiple' ? 'Multiple Locations' : 'Single Location'} />
                {values.locationType === 'multiple' && (
                    <div style={{ fontSize: '0.9rem', color: '#666', marginTop: '5px' }}>
                        Site information uploaded via file.
                    </div>
                )}
            </ReviewSection>

            {/* Services & Certifications */}
            <ReviewSection title="Services & Certifications" onEdit={() => goToStep(5)}>
                <div style={{ marginBottom: '10px' }}>
                    <div style={{ fontWeight: 600, color: '#444', marginBottom: '5px' }}>Services Provided</div>
                    <div style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{getAllServices()}</div>
                </div>
                {values.services?.other && (
                    <Row label="Other Services" value={values.services.other} />
                )}
            </ReviewSection>

            <div style={{ marginTop: '30px', padding: '20px', background: 'white', border: '1px solid #dee2e6', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '15px' }}>Ready to Submit?</h3>
                <label className="checkbox-label" style={{ alignItems: 'flex-start' }}>
                    <input type="checkbox" style={{ marginTop: '3px' }} required />
                    <span style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.4' }}>
                        I certify that all information provided is accurate and complete to the best of my knowledge. By submitting this form, you agree to our terms and conditions. DNV will review your application and contact you within 2-3 business days.
                    </span>
                </label>

                <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
                    <button type="button" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>📄</span> Download as PDF
                    </button>
                    <button type="button" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>📊</span> Export to CSV
                    </button>
                    {/* Submit is handled by the main form Next/Submit button, but we can have it here too if needed, though usually main form actions handle it. */}
                </div>
            </div>
        </div>
    );
};
