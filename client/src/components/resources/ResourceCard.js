import React from 'react';

const ResourceCard = ({ resource }) => {
    return (
        <div className="resource-card bg-white rounded shadow p-4">
            <h2 className="text-xl font-bold">{resource.title}</h2>
            <p className="mt-2">{resource.description}</p>
            {/* Add download or view link for resources */}
        </div>
    );
};

export default ResourceCard;
