import React from 'react';
import RegistrationList from './RegistrationList.js';
import EventManagement from './EventManagement.js';
import FeedbackModeration from './FeedbackModeration.js';
import MediaManagement from './MediaManagement.js';

const AdminDashboard = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="col-span-1">
                    <RegistrationList />
                </div>
                <div className="col-span-1">
                    <EventManagement />
                </div>
                <div className="col-span-2">
                    <FeedbackModeration />
                </div>
                <div className="col-span-2">
                    <MediaManagement />
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
