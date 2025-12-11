import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Step1Organization } from './steps/Step1Organization';
import { Step2Facility } from './steps/Step2Facility';
import { Step3Leadership } from './steps/Step3Leadership';
import { Step4SiteInfo } from './steps/Step4SiteInfo';
import { Step5Services } from './steps/Step5Services';
import { Step6Review } from './steps/Step6Review';
import { Success } from './steps/Success';
import './MultiStepForm.css';

const STEPS = [
    "DNV Quote Request",
    "Facility Details",
    "Leadership Contacts",
    "Site Information",
    "Services & Certifications",
    "Review & Submit"
];

export const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [complete, setComplete] = useState(false);
    const methods = useForm({
        mode: 'onBlur',
        defaultValues: {
            // locationType: 'single' - removed to ensure no default selection
        }
    });

    const onSubmit = (data) => {
        console.log('Final Payload:', data);
        setComplete(true);
    };

    const nextStep = async () => {
        // Basic validation trigger per step can be added here
        setStep(prev => Math.min(prev + 1, 6));
    };

    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 1: return <Step1Organization />;
            case 2: return <Step2Facility />;
            case 3: return <Step3Leadership />;
            case 4: return <Step4SiteInfo />;
            case 5: return <Step5Services />;
            case 6: return <Step6Review goToStep={setStep} />;
            default: return <Step1Organization />;
        }
    };

    if (complete) {
        return <Success />;
    }

    return (
        <div className="form-wrapper">
            <div className="form-header">
                <h1 className="page-title">
                    {step === 1 ? "New DNV Quote Request" : STEPS[step - 1]}
                    <span className="step-counter">Step {step} of 6</span>
                </h1>

                <div className="progress-bar-container">
                    {STEPS.map((label, index) => {
                        const stepNum = index + 1;
                        return (
                            <div
                                key={index}
                                className={`progress-step ${step === stepNum ? 'active' : ''} ${step > stepNum ? 'completed' : ''}`}
                            >
                                {label}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="form-card">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        {getStepContent(step)}

                        <div className="form-actions">
                            {/* Left Action: Exit or Previous */}
                            {step === 1 || (step === 4 && methods.watch("locationType")) ? (
                                <button type="button" className="btn btn-exit">Exit</button>
                            ) : (
                                <button type="button" className="btn btn-outline" onClick={prevStep}>Previous</button>
                            )}

                            <div style={{ display: 'flex', gap: '15px' }}>
                                <button type="button" className="btn btn-primary" style={{ opacity: 0.9 }}>Save</button>

                                {step < 6 ? (
                                    <button type="button" className="btn btn-primary" onClick={nextStep}>Continue</button>
                                ) : (
                                    <button type="submit" className="btn btn-primary">Submit Request</button>
                                )}
                            </div>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
};
