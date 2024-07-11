import React from 'react';
import CertificationValidationForm from '../components/certificates/CertificationValidationForm';

const CertificationValidation = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Certification Validation</h1>
            <CertificationValidationForm />
        </div>
    );
};

export default CertificationValidation;
