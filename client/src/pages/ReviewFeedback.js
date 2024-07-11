import React from 'react';
import FeedbackForm from '../components/feedback/FeedbackForm';

const ReviewFeedback = () => {
    const handleSubmitFeedback = (feedback) => {
        // Implement feedback submission logic (e.g., API call to submit feedback)
        console.log('Submitting feedback:', feedback);
        // You can add API call or further logic here to submit the feedback
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Review and Feedback</h1>
            <p className="mb-4">Share your thoughts with us:</p>
            <FeedbackForm onSubmitFeedback={handleSubmitFeedback} />
        </div>
    );
};

export default ReviewFeedback;
