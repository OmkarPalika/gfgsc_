import React from 'react';
import EventList from './EventList.js';
import FeedbackSummary from './FeedbackSummary.js';
import ResourceList from './ResourceList.js';
import Profile from './Profile.js';

const MemberDashboard = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Member Dashboard</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="col-span-1">
                    <EventList />
                </div>
                <div className="col-span-1">
                    <FeedbackSummary />
                </div>
                <div className="col-span-2">
                    <ResourceList />
                </div>
                <div className="col-span-2">
                    <Profile />
                </div>
            </div>
        </div>
    );
}

export default MemberDashboard;
