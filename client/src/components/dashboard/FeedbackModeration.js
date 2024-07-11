// components/dashboard/FeedbackModeration.js
import React from 'react';

const FeedbackModeration = ({ feedback }) => {
    return (
        <div className="feedback-moderation">
            <h2 className="text-2xl font-bold mb-4">Feedback Moderation</h2>
            <ul className="space-y-4">
                {feedback.map((item, index) => (
                    <li key={index} className="feedback-item p-4 bg-white rounded shadow">
                        <p>{item}</p>
                        {/* Add moderation actions */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeedbackModeration;
