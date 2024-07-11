import React from 'react';

const ResourceList = ({ resources }) => {
    return (
        <div className="resource-list">
            <h2 className="text-2xl font-bold mb-4">Resources</h2>
            <ul className="space-y-4">
                {resources.map(resource => (
                    <li key={resource._id} className="resource-item p-4 bg-white rounded shadow">
                        <h3 className="text-xl font-semibold">{resource.title}</h3>
                        <p className="text-gray-600">{resource.description}</p>
                        {/* Add download or view link for resources */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ResourceList;
