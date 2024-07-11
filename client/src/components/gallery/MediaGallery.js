import React from 'react';

const MediaGallery = ({ images }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map(image => (
                <div key={image.id} className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
                    <img src={image.src} alt={`${image.id}`} className="w-full h-auto" />
                </div>
            ))}
        </div>
    );
};

export default MediaGallery;
