import { useFormContext } from 'react-hook-form';

export const Step2Facility = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div>
            <h2 className="form-section-title">Facility and Organization Type</h2>

            <div className="form-group">
                <label className="form-label">Facility Type <span className="required">*</span></label>
                <div className="radio-group">
                    {['Short-Term Acute Care', 'Long-Term Acute Care', 'Critical Access', "Children's", 'Free-Standing Psychiatric', 'Other'].map((type) => (
                        <label key={type} className="radio-option">
                            <input
                                type="radio"
                                value={type}
                                {...register("facilityType", { required: "Please select a facility type" })}
                            />
                            {type}
                        </label>
                    ))}
                </div>
                {errors.facilityType && <span className="error-msg">{errors.facilityType.message}</span>}
            </div>
        </div>
    );
};
