import React from 'react';

const RegistrationList = ({ registrations }) => {
    return (
        <div className="registration-list">
            <h2 className="text-2xl font-bold mb-4">Registration Requests</h2>
            <ul className="space-y-4">
                {registrations.map(registration => (
                    <li key={registration._id} className="registration-item p-4 bg-white rounded shadow">
                        <h3 className="text-xl font-semibold">{registration.name}</h3>
                        <p>Email: {registration.email}</p>
                        {/* Add approval buttons or actions */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RegistrationList;
