import React from 'react';

const ResourceDetails = ({ resource }) => {
    return (
        <div className="resource-details bg-white rounded shadow p-4">
            <h2 className="text-2xl font-bold">{resource.title}</h2>
            <p className="mt-2">{resource.description}</p>
            {/* Add more details or actions as needed */}
        </div>
    );
};

export default ResourceDetails;
