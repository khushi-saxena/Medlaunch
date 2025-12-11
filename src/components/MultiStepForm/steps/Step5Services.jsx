import { useFormContext, useFieldArray } from 'react-hook-form';
import { useState } from 'react';

const CheckboxGroup = ({ title, options, registerName, items }) => (
    <div className="service-card">
        <div style={{ fontWeight: 600, marginBottom: '15px' }}>{title}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {items.map((item, idx) => (
                <label key={idx} className="checkbox-label" style={{ fontSize: '0.9rem' }}>
                    <input type="checkbox" value={item} {...registerName} />
                    {item}
                </label>
            ))}
        </div>
    </div>
);

const DateChipInput = ({ label, name }) => {
    const [dates, setDates] = useState(['05/16/2025', '05/18/2025', '05/19/2025', '05/31/2025']);
    const [inputValue, setInputValue] = useState('');

    const removeDate = (dateToRemove) => {
        setDates(dates.filter(d => d !== dateToRemove));
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue) {
            e.preventDefault();
            setDates([...dates, inputValue]);
            setInputValue('');
        }
    };

    return (
        <div className="form-group">
            <label className="form-label">{label}</label>
            <div style={{ position: 'relative' }}>
                <input
                    type="text"
                    placeholder="mm/dd/yyyy"
                    className="form-input"
                    style={{ width: '100%' }}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <span style={{ position: 'absolute', right: '10px', top: '10px', fontSize: '1.2rem', cursor: 'pointer' }}>📅</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
                {dates.map((date, idx) => (
                    <div key={idx} style={{
                        background: 'var(--primary-blue)',
                        color: 'white',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        {date}
                        <span
                            style={{ cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem', lineHeight: 0.5 }}
                            onClick={() => removeDate(date)}
                        >
                            ×
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const Step5Services = () => {
    const { register } = useFormContext();
    const [activeTab, setActiveTab] = useState('All Services');
    const [showOther, setShowOther] = useState(false);

    const tabs = ['All Services', 'Clinical', 'Surgical', 'Diagnostic', 'Rehabilitation', 'Specialty'];

    return (
        <div>
            <h2 className="form-section-title">Service Offering</h2>
            <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '20px' }}>Primary Site Service offering</p>

            {/* Tabs */}
            <div style={{ borderBottom: '1px solid #dee2e6', marginBottom: '20px', display: 'flex', gap: '20px' }}>
                {tabs.map(tab => (
                    <div
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            padding: '10px 0',
                            cursor: 'pointer',
                            color: activeTab === tab ? 'var(--primary-blue)' : '#666',
                            borderBottom: activeTab === tab ? '2px solid var(--primary-blue)' : '2px solid transparent',
                            fontWeight: activeTab === tab ? 600 : 400
                        }}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            {/* Search */}
            <div style={{ marginBottom: '20px' }}>
                <input className="form-input" placeholder="Search services..." style={{ width: '100%' }} />
            </div>

            {/* Services Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                <CheckboxGroup
                    title="Emergency & Critical Care"
                    registerName={register("services.emergency")}
                    items={['Emergency Department', 'Neonatal Intensive Care Services', 'Pediatric Intensive Care Services', 'Pediatric Intensive Care Services']} // Duplicate in screenshot?
                />

                <CheckboxGroup
                    title="Cardiac Services"
                    registerName={register("services.cardiac")}
                    items={['Cardiac Catheterization Laboratory', 'Open Heart']}
                />

                <CheckboxGroup
                    title="Diagnostic Services"
                    registerName={register("services.diagnostic")}
                    items={['Magnetic Resonance Imaging (MRI)', 'Diagnostic Radioisotope Facility', 'Lithotripsy']}
                />

                <CheckboxGroup
                    title="Rehabilitation Services"
                    registerName={register("services.rehab")}
                    items={['Physical Rehabilitation Services', 'Physical Therapy', 'Occupational Therapy', 'Speech/Language Therapy', 'Audiology']}
                />
            </div>

            {/* Add Other Service */}
            <div style={{ marginTop: '20px' }}>
                {!showOther ? (
                    <button type="button" className="btn btn-outline" onClick={() => setShowOther(true)}>
                        + Add Other Service
                    </button>
                ) : (
                    <div style={{ border: '1px solid #dee2e6', padding: '15px', borderRadius: '8px' }}>
                        <div style={{ fontWeight: 600, marginBottom: '10px' }}>Other Service</div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <input className="form-input" placeholder="Specify other service" style={{ flex: 1 }} />
                            <button type="button" onClick={() => setShowOther(false)} style={{ border: 'none', background: 'none', color: 'red', fontSize: '1.2rem', cursor: 'pointer' }}>×</button>
                        </div>
                    </div>
                )}
            </div>

            {/* Standards Section */}
            <h2 className="form-section-title" style={{ marginTop: '40px' }}>Standards to Apply</h2>
            <div className="form-group">
                <select className="form-input">
                    <option>Select Standard(s)</option>
                    <option>Action1</option>
                </select>
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <span style={{
                        border: '1px solid var(--primary-blue)',
                        color: 'var(--primary-blue)',
                        padding: '4px 12px',
                        borderRadius: '15px',
                        fontSize: '0.85rem'
                    }}>Action1 ×</span>
                    <span style={{
                        border: '1px solid var(--primary-blue)',
                        color: 'var(--primary-blue)',
                        padding: '4px 12px',
                        borderRadius: '15px',
                        fontSize: '0.85rem'
                    }}>Action2 ×</span>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-group">
                    <label className="form-label">Expiration Date of Current Stroke Certification</label>
                    <input type="date" className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label">Date of Application</label>
                    <input type="date" className="form-input" />
                </div>
            </div>

            <DateChipInput label="Dates of last twenty-five thrombolytic administrations" name="thrombolytic" />
            <DateChipInput label="Dates of last fifteen thrombectomies" name="thrombectomy" />

        </div>
    );
};
