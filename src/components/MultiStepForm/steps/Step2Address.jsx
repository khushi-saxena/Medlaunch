import { useFormContext } from 'react-hook-form';

export const Step2Address = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="step-content">
            <h2 className="form-title">Address & Details</h2>

            <div className="form-group">
                <label className="form-label">Date of Birth</label>
                <input
                    type="date"
                    {...register("birthDate", { required: "Date of birth is required" })}
                    className="form-input"
                />
                {errors.birthDate && <span className="error-msg">{errors.birthDate.message}</span>}
            </div>

            <div className="form-group">
                <label className="form-label">Street Address</label>
                <input
                    {...register("streetAddress", { required: "Address is required" })}
                    className="form-input"
                    placeholder="e.g. 123 Main St"
                />
                {errors.streetAddress && <span className="error-msg">{errors.streetAddress.message}</span>}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-group">
                    <label className="form-label">City</label>
                    <input
                        {...register("city", { required: "City is required" })}
                        className="form-input"
                        placeholder="New York"
                    />
                    {errors.city && <span className="error-msg">{errors.city.message}</span>}
                </div>

                <div className="form-group">
                    <label className="form-label">Zip Code</label>
                    <input
                        {...register("zipCode", {
                            required: "Zip Code is required",
                            pattern: {
                                value: /^\d{5}(-\d{4})?$/,
                                message: "Invalid Zip Code"
                            }
                        })}
                        className="form-input"
                        placeholder="10001"
                    />
                    {errors.zipCode && <span className="error-msg">{errors.zipCode.message}</span>}
                </div>
            </div>
        </div>
    );
};
