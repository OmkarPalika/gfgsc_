import React from 'react';

const Profile = ({ user }) => {
    return (
        <div className="profile">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <div className="p-4 bg-white rounded shadow">
                <h3 className="text-xl font-semibold">{user.name}</h3>
                <p>Email: {user.email}</p>
                {/* Add more profile details as needed */}
            </div>
        </div>
    );
};

export default Profile;
