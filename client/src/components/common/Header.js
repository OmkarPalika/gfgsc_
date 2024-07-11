import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <img src="/logo.png" alt="Logo" className="h-12" />
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
