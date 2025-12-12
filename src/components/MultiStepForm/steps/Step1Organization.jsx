import { useFormContext } from 'react-hook-form';
import { useState } from 'react';

export const Step1Organization = () => {
    const { register, formState: { errors }, getValues } = useFormContext();
    const [verificationStatus, setVerificationStatus] = useState('Not verified');

    const handleVerify = () => {
        const email = getValues("email");
        if (email) {
            alert(`Verification email sent to: ${email}`);
            setVerificationStatus('Verified');
        } else {
            alert('Please enter an email address first.');
        }
    };

    return (
        <div>
            <h2 className="form-section-title">Identify Healthcare Organization</h2>

            <div className="form-group">
                <label className="form-label">Legal Entity Name <span className="required">*</span></label>
                <input
                    {...register("legalEntityName", { required: "Legal Entity Name is required" })}
                    className="form-input"
                />
                {errors.legalEntityName && <span className="error-msg">{errors.legalEntityName.message}</span>}
            </div>

            <div className="form-group">
                <label className="form-label">Doing Business As (d/b/a) Name <span className="required">*</span></label>
                <input
                    {...register("dbaName", { required: "DBA Name is required" })}
                    className="form-input"
                />
                {errors.dbaName && <span className="error-msg">{errors.dbaName.message}</span>}
            </div>

            <div className="form-group">
                <label className="checkbox-label">
                    <input type="checkbox" {...register("sameAsLegal")} />
                    Same as Legal Entity Name
                </label>
            </div>

            <h2 className="form-section-title" style={{ marginTop: '40px' }}>Primary Contact Information</h2>
            <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '20px' }}>
                Primary contact receives all DNV Healthcare official communications
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-group">
                    <label className="form-label">First Name <span className="required">*</span></label>
                    <input {...register("firstName", { required: "First Name is required" })} className="form-input" />
                    {errors.firstName && <span className="error-msg">{errors.firstName.message}</span>}
                </div>
                <div className="form-group">
                    <label className="form-label">Last Name <span className="required">*</span></label>
                    <input {...register("lastName", { required: "Last Name is required" })} className="form-input" />
                    {errors.lastName && <span className="error-msg">{errors.lastName.message}</span>}
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Title <span className="required">*</span></label>
                <input {...register("title", { required: "Title is required" })} className="form-input" />
                {errors.title && <span className="error-msg">{errors.title.message}</span>}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-group">
                    <label className="form-label">Work Phone <span className="required">*</span></label>
                    <input {...register("workPhone", { required: "Work Phone is required" })} className="form-input" />
                    {errors.workPhone && <span className="error-msg">{errors.workPhone.message}</span>}
                </div>
                <div className="form-group">
                    <label className="form-label">Cell Phone</label>
                    <input {...register("cellPhone")} className="form-input" />
                </div>
            </div>

            <div className="form-group">
                <label className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Email <span className="required">*</span></span>
                    <span style={{ cursor: 'pointer' }}>↻</span>
                </label>
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/, message: "Invalid email" }
                    })}
                    className="form-input"
                    placeholder="example@email.com"
                />
                {errors.email && <span className="error-msg">{errors.email.message}</span>}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                    type="button"
                    className="btn btn-outline"
                    style={{ fontSize: '0.85rem', padding: '8px 16px' }}
                    onClick={handleVerify}
                >
                    Send Verification Email
                </button>
                <span style={{
                    background: verificationStatus === 'Verified' ? '#d4edda' : '#fff3cd',
                    color: verificationStatus === 'Verified' ? '#155724' : '#856404',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.8rem'
                }}>
                    {verificationStatus}
                </span>
            </div>
        </div>
    );
};
