import React, { useState } from 'react';

const BlogCreation = ({ onCreate }) => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        tags: ''
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
        const newBlog = {
            ...formData,
            tags: formData.tags.split(',').map(tag => tag.trim())
        };
        onCreate(newBlog);
        setFormData({ title: '', content: '', tags: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded shadow p-4 mb-8">
            <h2 className="text-2xl font-bold mb-4">Create a New Blog Post</h2>
            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="mt-2 p-2 border rounded w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="content" className="block text-gray-700">Content</label>
                <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    className="mt-2 p-2 border rounded w-full"
                    rows="6"
                    required
                ></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="tags" className="block text-gray-700">Tags (comma separated)</label>
                <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    className="mt-2 p-2 border rounded w-full"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Blog Post</button>
        </form>
    );
};

export default BlogCreation;
