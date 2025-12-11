import { useFormContext } from 'react-hook-form';
import { useState, useRef } from 'react';

export const Step4SiteInfo = () => {
    const { register, watch } = useFormContext();
    const locationType = watch("locationType");
    const [files, setFiles] = useState([]);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const newFiles = Array.from(e.target.files).map(file => ({
                name: file.name,
                size: (file.size / (1024 * 1024)).toFixed(2) + 'MB',
                progress: 0,
                status: 'uploading'
            }));

            setFiles(prev => [...prev, ...newFiles]);

            // Simulate upload progress
            newFiles.forEach((file, index) => {
                const globalIndex = files.length + index;
                setTimeout(() => {
                    setFiles(current =>
                        current.map((f, i) => i === globalIndex ? { ...f, progress: 100, status: 'completed' } : f)
                    );
                }, 1500);
            });
        }
    };

    const removeFile = (indexToRemove) => {
        setFiles(prev => prev.filter((_, index) => index !== indexToRemove));
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

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
                    <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '20px', fontWeight: 600 }}>
                        How would you like to add your site information?
                    </h3>

                    <div style={{
                        border: '2px solid var(--primary-blue)',
                        background: '#e6f0fa',
                        padding: '24px',
                        borderRadius: '8px',
                        marginBottom: '30px'
                    }}>
                        <div style={{ fontWeight: 600, fontSize: '1.05rem', marginBottom: '5px' }}>Upload CSV / Excel</div>
                        <div style={{ fontSize: '0.9rem', color: '#666' }}>Upload a spreadsheet with all site information</div>
                    </div>

                    <div style={{ background: '#e6f0fa', padding: '20px', borderRadius: '8px' }}>
                        <div style={{
                            border: '2px dashed #99c2ff',
                            borderRadius: '8px',
                            padding: '40px',
                            textAlign: 'center',
                            background: 'white',
                            marginBottom: '20px'
                        }}>
                            <div style={{ fontSize: '2.5rem', color: '#999', marginBottom: '15px' }}>☁️</div>
                            <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '8px' }}>Upload Site Information</div>
                            <div style={{ fontSize: '0.85rem', color: '#666', marginBottom: '20px' }}>
                                Drag and drop your CSV or Excel file here, or click to select
                            </div>

                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                                multiple
                                accept=".csv, .xls, .xlsx"
                            />

                            <button
                                type="button"
                                className="btn btn-primary"
                                style={{ padding: '10px 30px', marginBottom: '15px' }}
                                onClick={triggerFileInput}
                            >
                                Select file
                            </button>
                            <div>
                                <a href="#" style={{ color: 'var(--primary-blue)', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 500 }}>Download CSV Template</a>
                            </div>
                        </div>

                        {files.length > 0 && (
                            <>
                                <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '10px', color: '#333' }}>Uploaded</div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {files.map((file, index) => (
                                        <div key={index} style={{
                                            background: 'white',
                                            padding: '15px',
                                            borderRadius: '6px',
                                            border: file.status === 'uploading' ? '2px solid var(--primary-blue)' : '1px solid #dee2e6',
                                            position: 'relative'
                                        }}>
                                            {file.status === 'uploading' && (
                                                <div
                                                    onClick={() => removeFile(index)}
                                                    style={{
                                                        position: 'absolute', right: '-8px', top: '-8px',
                                                        background: 'var(--primary-blue)', color: 'white',
                                                        borderRadius: '50%', width: '20px', height: '20px',
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                        fontSize: '0.8rem', cursor: 'pointer'
                                                    }}
                                                >
                                                    ×
                                                </div>
                                            )}

                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: file.status === 'uploading' ? '8px' : '0' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                    <span style={{ fontSize: '1.2rem', color: 'var(--primary-blue)' }}>📄</span>
                                                    <div>
                                                        <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>
                                                            {file.name}
                                                            {file.status === 'completed' && <span style={{ color: 'var(--primary-blue)', marginLeft: '5px', cursor: 'pointer' }}>• Preview</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <span style={{ fontSize: '0.8rem', color: '#666' }}>{file.size}</span>
                                                    {file.status === 'completed' && (
                                                        <button type="button" onClick={() => removeFile(index)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#999', lineHeight: 1 }}>×</button>
                                                    )}
                                                </div>
                                            </div>

                                            {file.status === 'uploading' && (
                                                <div style={{ height: '4px', background: '#e9ecef', borderRadius: '2px', width: '100%' }}>
                                                    <div style={{ height: '100%', background: 'var(--primary-blue)', borderRadius: '2px', width: '50%' }}></div> {/* Simulated 50% progress for visual */}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
