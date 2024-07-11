import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext.js';
import firebase from '../../config/firebaseConfig.js';

const Navbar = () => {
    const { currentUser } = useAuth();

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <ul className="flex space-x-4">
                    <li><Link to="/" className="text-white">Home</Link></li>
                    <li><Link to="/events" className="text-white">Events</Link></li>
                    <li><Link to="/gallery" className="text-white">Gallery</Link></li>
                    <li><Link to="/resources" className="text-white">Resources</Link></li>
                    <li><Link to="/contact" className="text-white">Contact</Link></li>
                    {currentUser ? (
                        <>
                            <li><Link to="/dashboard" className="text-white">Dashboard</Link></li>
                            <li><button className="text-white" onClick={() => firebase.auth().signOut()}>Logout</button></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/login" className="text-white">Login</Link></li>
                            <li><Link to="/register" className="text-white">Register</Link></li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
