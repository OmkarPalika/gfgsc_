// src/components/contact/FAQs.js
import React from 'react';

const FAQs = () => {
    const faqs = [
        {
            question: 'How can I become a member?',
            answer: 'You can become a member by registering on our website with a valid email address from our institution.'
        },
        {
            question: 'What kind of events do you organize?',
            answer: 'We organize a variety of events including workshops, seminars, hackathons, and coding competitions.'
        },
        {
            question: 'How can I contact support?',
            answer: 'You can contact our support team via email at support@example.com or through our social media channels.'
        },
        // Add more FAQs as needed
    ];

    return (
        <div className="faqs bg-white rounded shadow p-4 mb-8">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions (FAQs)</h2>
            <ul className="space-y-4">
                {faqs.map((faq, index) => (
                    <li key={index} className="faq-item">
                        <h3 className="text-xl font-semibold">{faq.question}</h3>
                        <p className="text-gray-600">{faq.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQs;
