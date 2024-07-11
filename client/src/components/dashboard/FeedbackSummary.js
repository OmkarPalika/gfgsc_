import React from 'react';

const FeedbackSummary = ({ feedback }) => {
    return (
        <div className="feedback-summary">
            <h2 className="text-2xl font-bold mb-4">Feedback Summary</h2>
            <ul className="space-y-4">
                {feedback.map((item, index) => (
                    <li key={index} className="feedback-item p-4 bg-white rounded shadow">
                        <p>{item}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeedbackSummary;
