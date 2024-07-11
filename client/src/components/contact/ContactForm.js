import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to backend or display a success message
        console.log('Form data submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded shadow p-4 mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 p-2 border rounded w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 p-2 border rounded w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 p-2 border rounded w-full"
                    rows="4"
                    required
                ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send Message</button>
        </form>
    );
};

export default ContactForm;
