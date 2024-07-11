import React, { useState } from 'react';

const CertificationValidationForm = () => {
    const [certificateNumber, setCertificateNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement validation logic
        console.log('Validating certificate:', certificateNumber);
        setCertificateNumber('');
    };

    return (
        <form onSubmit={handleSubmit} className="certification-validation-form bg-white rounded p-4 shadow">
            <label className="block text-lg font-semibold mb-2">Enter Certificate Number:</label>
            <input
                type="text"
                value={certificateNumber}
                onChange={(e) => setCertificateNumber(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                placeholder="Certificate Number"
                required
            />
            <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">Validate Certificate</button>
        </form>
    );
};

export default CertificationValidationForm;
