import React from 'react';
import MediaGallery from '../components/gallery/MediaGallery.js';

const Gallery = () => {
    const images = [
        { id: 1, src: 'https://via.placeholder.com/300', title: 'Image 1' },
        { id: 2, src: 'https://via.placeholder.com/300', title: 'Image 2' },
        { id: 3, src: 'https://via.placeholder.com/300', title: 'Image 3' },
        { id: 4, src: 'https://via.placeholder.com/300', title: 'Image 4' },
        { id: 5, src: 'https://via.placeholder.com/300', title: 'Image 5' },
        { id: 6, src: 'https://via.placeholder.com/300', title: 'Image 6' }
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Gallery</h1>
            <p className="mb-4">Explore our photo gallery:</p>
            <MediaGallery images={images} />
        </div>
    );
};

export default Gallery;
