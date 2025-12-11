import { useFormContext } from 'react-hook-form';

const LeadershipSection = ({ title, prefix, showAddress = false }) => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '15px' }}>{title}</h3>

            <div className="form-group">
                <label className="checkbox-label">
                    <input type="checkbox" {...register(`${prefix}SameAsPrimary`)} />
                    Same as Primary Contact entered in Step 1
                </label>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-group">
                    <label className="form-label">First Name {prefix !== 'quality' && <span className="required">*</span>}</label>
                    <input {...register(`${prefix}FirstName`, { required: prefix !== 'quality' ? "Required" : false })} className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label">Last Name {prefix !== 'quality' && <span className="required">*</span>}</label>
                    <input {...register(`${prefix}LastName`, { required: prefix !== 'quality' ? "Required" : false })} className="form-input" />
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">Phone {prefix !== 'quality' && <span className="required">*</span>}</label>
                <input {...register(`${prefix}Phone`, { required: prefix !== 'quality' ? "Required" : false })} className="form-input" />
            </div>

            <div className="form-group">
                <label className="form-label">Email {prefix !== 'quality' && <span className="required">*</span>}</label>
                <input {...register(`${prefix}Email`, { required: prefix !== 'quality' ? "Required" : false })} className="form-input" />
            </div>

            {showAddress && (
                <>
                    <h4 style={{ marginTop: '15px', marginBottom: '10px', fontSize: '0.95rem' }}>Billing Address</h4>
                    <div className="form-group">
                        <label className="form-label">Street Address <span className="required">*</span></label>
                        <input {...register(`${prefix}Address`, { required: "Required" })} className="form-input" />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '20px' }}>
                        <div className="form-group">
                            <label className="form-label">City <span className="required">*</span></label>
                            <input {...register(`${prefix}City`, { required: "Required" })} className="form-input" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">State <span className="required">*</span></label>
                            <select {...register(`${prefix}State`, { required: "Required" })} className="form-input">
                                <option value="">Select State</option>
                                <option value="CA">California</option>
                                <option value="NY">New York</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Zip Code <span className="required">*</span></label>
                            <input {...register(`${prefix}Zip`, { required: "Required" })} className="form-input" />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export const Step3Leadership = () => {
    return (
        <div>
            <h2 className="form-section-title">Contact Information</h2>
            <LeadershipSection title="Chief Executive Officer (CEO)" prefix="ceo" />
            <LeadershipSection title="Director of Quality" prefix="quality" />
            <LeadershipSection title="Invoicing Contact" prefix="invoice" showAddress={true} />
        </div>
    );
};
