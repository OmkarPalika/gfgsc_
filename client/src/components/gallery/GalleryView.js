import React from 'react';

const GalleryView = ({ image }) => {
    return (
        <div className="gallery-view bg-gray-200 rounded-lg overflow-hidden shadow-md">
            <img src={image.src} alt={`Image ${image.id}`} className="w-full h-auto" />
            <div className="p-4">
                <h2 className="text-lg font-semibold">{image.title}</h2>
                <p className="text-sm text-gray-600 mt-1">ID: {image.id}</p>
                {/* Add more details or actions as needed */}
            </div>
        </div>
    );
};

export default GalleryView;
