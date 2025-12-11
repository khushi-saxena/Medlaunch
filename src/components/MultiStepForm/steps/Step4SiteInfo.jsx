import { useFormContext } from 'react-hook-form';
import { useState } from 'react';

export const Step4SiteInfo = () => {
    const { register, watch } = useFormContext();
    const locationType = watch("locationType");

    return (
        <div>
            <h2 className="form-section-title">Do you have multiple sites or locations?</h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                <label style={{
                    border: locationType === 'single' ? '2px solid var(--primary-blue)' : '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '24px',
                    cursor: 'pointer',
                    background: locationType === 'single' ? '#f0f7ff' : 'white',
                    transition: 'all 0.2s'
                }}>
                    <input
                        type="radio"
                        value="single"
                        {...register("locationType")}
                        style={{ display: 'none' }}
                    />
                    <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px' }}>Single Location</div>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>We operate from one facility only</div>
                </label>

                <label style={{
                    border: locationType === 'multiple' ? '2px solid var(--primary-blue)' : '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '24px',
                    cursor: 'pointer',
                    background: locationType === 'multiple' ? '#f0f7ff' : 'white',
                    transition: 'all 0.2s'
                }}>
                    <input
                        type="radio"
                        value="multiple"
                        {...register("locationType")}
                        style={{ display: 'none' }}
                    />
                    <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px' }}>Multiple Locations</div>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>We have multiple facilities or practice locations</div>
                </label>
            </div>

            {locationType === 'multiple' && (
                <div className="fade-in-section">
                    <h3 style={{ fontSize: '1.1rem', color: '#333', marginBottom: '15px' }}>
                        How would you like to add your site information?
                    </h3>

                    <div style={{
                        border: '2px solid var(--primary-blue)',
                        background: '#e6f0fa',
                        padding: '20px',
                        borderRadius: '8px',
                        marginBottom: '20px'
                    }}>
                        <div style={{ fontWeight: 600, marginBottom: '5px' }}>Upload CSV / Excel</div>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>Upload a spreadsheet with all site information</div>
                    </div>

                    <div style={{
                        border: '2px dashed #ccc',
                        borderRadius: '8px',
                        padding: '40px',
                        textAlign: 'center',
                        background: 'white'
                    }}>
                        <div style={{ fontSize: '2rem', color: '#ccc', marginBottom: '10px' }}>☁️</div>
                        <div style={{ fontWeight: 600, marginBottom: '5px' }}>Upload Site Information</div>
                        <div style={{ fontSize: '0.85rem', color: '#999', marginBottom: '20px' }}>
                            Drag and drop your CSV or Excel file here, or click to select
                        </div>
                        <button type="button" className="btn btn-primary" style={{ padding: '8px 20px' }}>
                            Select file
                        </button>
                        <div style={{ marginTop: '15px' }}>
                            <a href="#" style={{ color: 'var(--primary-blue)', fontSize: '0.9rem', textDecoration: 'none' }}>Download CSV Template</a>
                        </div>
                    </div>

                    {/* Simulation of an uploaded file state as per screenshots if needed, currently leaving as upload state */}
                    <div style={{ marginTop: '20px', background: '#eef6fc', padding: '15px', borderRadius: '8px', border: '1px solid #dbeafe', display: 'none' }}>
                        {/* Hidden mock for uploaded state */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.9rem', color: '#333' }}>📁 Sites_List_2024.csv</span>
                            <span style={{ cursor: 'pointer', color: '#666' }}>×</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
