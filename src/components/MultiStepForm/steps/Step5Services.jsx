import { useFormContext } from 'react-hook-form';
import { useState } from 'react';

const CheckboxGroup = ({ title, options, registerName }) => (
    <div className="service-card" style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '20px',
        paddingBottom: '30px',
        height: '100%',
        background: 'white'
    }}>
        <div style={{
            fontWeight: 700,
            fontSize: '1rem',
            marginBottom: '20px',
            color: '#333'
        }}>
            {title}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {options.map((item, idx) => (
                <label key={idx} className="checkbox-label" style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    fontSize: '0.95rem',
                    color: '#333',
                    cursor: 'pointer'
                }}>
                    <input
                        type="checkbox"
                        value={item}
                        {...registerName}
                        style={{
                            marginTop: '3px',
                            width: '18px',
                            height: '18px',
                            accentColor: 'var(--primary-blue)'
                        }}
                    />
                    {item}
                </label>
            ))}
        </div>
    </div>
);

const DateChipInput = ({ label, value = [], onChange }) => {
    const handleDateChange = (e) => {
        if (e.target.value) {
            // Format date from YYYY-MM-DD to MM/DD/YYYY for display/storage
            const [y, m, d] = e.target.value.split('-');
            const formattedDate = `${m}/${d}/${y}`;

            // Prevent duplicates if desired, or just add
            if (!value.includes(formattedDate)) {
                onChange([...value, formattedDate]);
            }
            e.target.value = ''; // Reset input
        }
    };

    const removeDate = (dateToRemove) => {
        onChange(value.filter(d => d !== dateToRemove));
    };

    return (
        <div className="form-group">
            <label className="form-label" style={{ fontWeight: 700, marginBottom: '8px', display: 'block' }}>{label}</label>
            <div style={{ position: 'relative', marginBottom: '10px' }}>
                <input
                    type="date"
                    className="form-input"
                    style={{ width: '100%', paddingRight: '40px' }}
                    onChange={handleDateChange}
                />
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {value.map((date, i) => (
                    <div key={i} style={{
                        background: '#005a9c',
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        {date}
                        <span
                            onClick={() => removeDate(date)}
                            style={{ cursor: 'pointer', fontWeight: 'bold' }}
                        >
                            ×
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const Step5Services = () => {
    const { register, watch, setValue } = useFormContext();
    const [activeTab, setActiveTab] = useState('All Services');
    const [showOther, setShowOther] = useState(false);

    const tabs = ['All Services', 'Clinical', 'Surgical', 'Diagnostic', 'Rehabilitation', 'Specialty'];

    return (
        <div>
            <h2 className="form-section-title" style={{ marginBottom: '10px' }}>Primary Contact Information</h2>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '30px' }}>
                Primary contact receives all DNV Healthcare official communications
            </p>

            {/* Tabs */}
            <div style={{
                borderBottom: '1px solid #e0e0e0',
                marginBottom: '25px',
                display: 'flex',
                gap: '30px',
                overflowX: 'auto'
            }}>
                {tabs.map(tab => (
                    <div
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            padding: '12px 0',
                            cursor: 'pointer',
                            color: activeTab === tab ? '#0072CE' : '#555',
                            borderBottom: activeTab === tab ? '3px solid #0072CE' : '3px solid transparent',
                            fontWeight: activeTab === tab ? 600 : 400,
                            fontSize: '0.95rem',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            {/* Search */}
            <div style={{ marginBottom: '30px', position: 'relative' }}>
                <input
                    className="form-input"
                    placeholder="Search services..."
                    style={{
                        width: '100%',
                        padding: '12px 15px',
                        paddingRight: '40px', // Space for icon
                        fontSize: '1rem',
                        borderColor: '#e0e0e0'
                    }}
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#999"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        position: 'absolute',
                        right: '15px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none'
                    }}
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>

            {/* Services Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '20px'
            }}>
                <CheckboxGroup
                    title="Emergency & Critical Care"
                    registerName={register("services.emergency")}
                    options={[
                        'Emergency Department',
                        'Neonatal Intensive Care Services',
                        'Pediatric Intensive Care Services'
                    ]}
                />

                <CheckboxGroup
                    title="Cardiac Services"
                    registerName={register("services.cardiac")}
                    options={[
                        'Cardiac Catheterization Laboratory',
                        'Open Heart'
                    ]}
                />

                <CheckboxGroup
                    title="Diagnostic Services"
                    registerName={register("services.diagnostic")}
                    options={[
                        'Magnetic Resonance Imaging (MRI)',
                        'Diagnostic Radioisotope Facility',
                        'Lithotripsy'
                    ]}
                />

                <CheckboxGroup
                    title="Rehabilitation Services"
                    registerName={register("services.rehab")}
                    options={[
                        'Physical Rehabilitation Services',
                        'Physical Therapy',
                        'Occupational Therapy',
                        'Speech/Language Therapy',
                        'Audiology'
                    ]}
                />
            </div>

            {/* Other Service Section */}
            <div style={{ marginTop: '30px' }}>
                <button
                    type="button"
                    onClick={() => setShowOther(true)}
                    style={{
                        background: 'white',
                        color: '#0072CE',
                        border: '1px solid #0072CE',
                        padding: '10px 20px',
                        borderRadius: '4px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontSize: '0.95rem'
                    }}
                >
                    + Add Other Service
                </button>

                {showOther && (
                    <div style={{
                        marginTop: '20px',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        padding: '24px',
                        background: 'white',
                        position: 'relative'
                    }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 16px 0', color: '#333' }}>
                            Other Service
                        </h3>
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <input
                                {...register("services.other")}
                                className="form-input"
                                placeholder="Specify other service"
                                style={{
                                    flex: 1,
                                    borderColor: '#e0e0e0',
                                    padding: '12px',
                                    borderRadius: '4px'
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => setShowOther(false)}
                                style={{
                                    border: 'none',
                                    background: 'none',
                                    color: '#dc3545',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer',
                                    padding: '0 10px',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <span style={{ fontSize: '24px', lineHeight: '24px' }}>×</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Standards Section */}
            <div style={{ marginTop: '40px' }}>
                <h3 className="form-section-title" style={{ fontSize: '1.25rem', marginBottom: '20px' }}>Standards to Apply</h3>

                <div className="form-group" style={{ marginBottom: '30px' }}>
                    <select className="form-input" style={{ width: '100%', padding: '12px', color: '#666' }}>
                        <option>Select Standard(s)</option>
                        <option>Action1</option>
                        <option>Action2</option>
                    </select>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                        {['Action1', 'Action2'].map(action => (
                            <span key={action} style={{
                                border: '1px solid var(--primary-blue)',
                                color: 'var(--primary-blue)',
                                padding: '6px 12px',
                                borderRadius: '4px',
                                fontSize: '0.9rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'white'
                            }}>
                                {action}
                                <span style={{ cursor: 'pointer', fontSize: '1.1rem', lineHeight: 0.5 }}>×</span>
                            </span>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '30px' }}>
                    <div className="form-group">
                        <label className="form-label" style={{ fontWeight: 700, marginBottom: '8px', display: 'block' }}>Expiration Date of Current Stroke Certification</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="date"
                                {...register("services.strokeExpirationDate")}
                                className="form-input"
                                style={{ width: '100%' }}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label" style={{ fontWeight: 700, marginBottom: '8px', display: 'block' }}>Date of Application</label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="date"
                                {...register("services.dateOfApplication")}
                                className="form-input"
                                style={{ width: '100%' }}
                            />
                        </div>
                    </div>
                </div>

                <DateChipInput
                    label="Dates of last twenty-five thrombolytic administrations"
                    value={watch("services.thromboDates") || []}
                    onChange={(val) => setValue("services.thromboDates", val)}
                />
                <div style={{ height: '20px' }}></div>
                <DateChipInput
                    label="Dates of last fifteen thrombectomies"
                    value={watch("services.thrombecDates") || []}
                    onChange={(val) => setValue("services.thrombecDates", val)}
                />
            </div>
        </div>
    );
};
