import { useFormContext } from 'react-hook-form';

export const Step3Preferences = () => {
    const { register } = useFormContext();

    return (
        <div className="step-content">
            <h2 className="form-title">Preferences</h2>

            <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0' }}>
                <label className="form-label" style={{ fontSize: '1rem' }}>Receive Marketing Emails</label>
                <input
                    type="checkbox"
                    {...register("marketingEmails")}
                    style={{ width: '20px', height: '20px', accentColor: 'var(--accent-color)' }}
                />
            </div>

            <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0' }}>
                <label className="form-label" style={{ fontSize: '1rem' }}>Enable Notifications</label>
                <input
                    type="checkbox"
                    {...register("notifications")}
                    style={{ width: '20px', height: '20px', accentColor: 'var(--accent-color)' }}
                />
            </div>

            <div className="form-group" style={{ marginTop: '20px' }}>
                <label className="form-label">Preferred Theme</label>
                <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        <input
                            type="radio"
                            value="dark"
                            {...register("theme")}
                            style={{ accentColor: 'var(--accent-color)' }}
                        />
                        <span>Dark</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        <input
                            type="radio"
                            value="light"
                            {...register("theme")}
                            style={{ accentColor: 'var(--accent-color)' }}
                        />
                        <span>Light</span>
                    </label>
                </div>
            </div>
        </div>
    );
};
