import React, { useState } from 'react';

const FeedbackForm = ({ onSubmitFeedback }) => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitFeedback(feedback);
        setFeedback('');
    };

    return (
        <form onSubmit={handleSubmit} className="review-form mt-4">
            <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter your feedback..."
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                required
                rows="4"
            ></textarea>
            <button type="submit" className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;
