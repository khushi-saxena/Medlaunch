import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Step1Personal } from './steps/Step1Personal';
import { Step2Address } from './steps/Step2Address';
import { Step3Preferences } from './steps/Step3Preferences';
import { Step4Review } from './steps/Step4Review';
import { Success } from './steps/Success';
import './MultiStepForm.css';

export const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const methods = useForm({
        mode: 'onBlur',
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
            birthDate: '',
            streetAddress: '',
            city: '',
            zipCode: '',
            marketingEmails: false,
            notifications: true,
            theme: 'dark'
        }
    });

    const onSubmit = (data) => {
        console.log('Form Submitted Payload:', data);
        setStep(5); // Success step
    };

    const nextStep = async () => {
        const isStepValid = await methods.trigger();
        // In a real app, we'd validate only the current step's fields.
        // For now, I'll validat all, but ideally we should scope triggers.
        // Let's improve this:
        let valid = false;
        if (step === 1) valid = await methods.trigger(['fullName', 'email', 'password', 'confirmPassword']);
        if (step === 2) valid = await methods.trigger(['streetAddress', 'city', 'zipCode', 'birthDate']);
        if (step === 3) valid = true; // Preferences usually optional
        if (step === 4) valid = true;

        if (valid) setStep(prev => prev + 1);
    };

    const prevStep = () => setStep(prev => prev - 1);

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 1: return <Step1Personal />;
            case 2: return <Step2Address />;
            case 3: return <Step3Preferences />;
            case 4: return <Step4Review goToStep={(s) => setStep(s)} />;
            case 5: return <Success />;
            default: return <Step1Personal />;
        }
    };

    if (step === 5) {
        return (
            <div className="form-card">
                <Success />
            </div>
        );
    }

    return (
        <div className="form-card">
            <div className="step-indicator">
                {[1, 2, 3, 4].map(num => (
                    <div
                        key={num}
                        className={`step-dot ${step === num ? 'active' : ''} ${step > num ? 'completed' : ''}`}
                    />
                ))}
            </div>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    {getStepContent(step)}

                    <div className="button-group">
                        {step > 1 && (
                            <button type="button" className="btn btn-secondary" onClick={prevStep}>
                                Back
                            </button>
                        )}

                        {step < 4 && (
                            <button type="button" className="btn btn-primary" onClick={nextStep}>
                                Next Step
                            </button>
                        )}

                        {step === 4 && (
                            <button type="submit" className="btn btn-primary">
                                Confirm & Submit
                            </button>
                        )}
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};
