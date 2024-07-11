// pages/Resources.js
import React from 'react';
import ResourceList from '../components/dashboard/ResourceList.js';

const Resources = () => {
    const resources = [
        {
            title: 'Resource 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac luctus ultrices.'
        },
        {
            title: 'Resource 2',
            description: 'Sed nec augue a dui vehicula ullamcorper. Vivamus non mauris sit amet urna rutrum tristique.'
        },
        {
            title: 'Resource 3',
            description: 'Pellentesque ac tortor vitae dui rhoncus scelerisque. Integer volutpat nisl nec nulla ultrices.'
        }
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Resources</h1>
            <p className="mb-4">Explore useful resources to enhance your knowledge:</p>
            <ResourceList resources={resources} />
        </div>
    );
};

export default Resources;
