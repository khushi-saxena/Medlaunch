import { useFormContext } from 'react-hook-form';

export const Step1Personal = () => {
    const { register, formState: { errors }, watch } = useFormContext();
    const password = watch("password");

    return (
        <div className="step-content">
            <h2 className="form-title">Personal Info</h2>

            <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                    {...register("fullName", { required: "Full name is required" })}
                    className="form-input"
                    placeholder="e.g. Jane Doe"
                />
                {errors.fullName && <span className="error-msg">{errors.fullName.message}</span>}
            </div>

            <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        }
                    })}
                    className="form-input"
                    placeholder="e.g. jane@example.com"
                />
                {errors.email && <span className="error-msg">{errors.email.message}</span>}
            </div>

            <div className="form-group">
                <label className="form-label">Password</label>
                <input
                    type="password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters"
                        }
                    })}
                    className="form-input"
                    placeholder="********"
                />
                {errors.password && <span className="error-msg">{errors.password.message}</span>}
            </div>

            <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input
                    type="password"
                    {...register("confirmPassword", {
                        required: "Please confirm your password",
                        validate: value => value === password || "Passwords do not match"
                    })}
                    className="form-input"
                    placeholder="********"
                />
                {errors.confirmPassword && <span className="error-msg">{errors.confirmPassword.message}</span>}
            </div>
        </div>
    );
};
