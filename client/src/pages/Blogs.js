import React, { useState } from 'react';
import BlogsList from '../components/blogs/BlogsList';
import BlogCreation from '../components/blogs/BlogCreation';

const Blogs = () => {
    const [blogs, setBlogs] = useState([
        {
            _id: '1',
            title: 'Understanding React Hooks',
            excerpt: 'A deep dive into React Hooks and how to use them effectively.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac luctus ultrices.',
            tags: ['React', 'JavaScript', 'Hooks']
        },
        {
            _id: '2',
            title: 'Getting Started with Node.js',
            excerpt: 'Learn the basics of Node.js and how to set up your first server.',
            content: 'Sed nec augue a dui vehicula ullamcorper. Vivamus non mauris sit amet urna rutrum tristique.',
            tags: ['Node.js', 'JavaScript', 'Backend']
        }
        // Add more blog posts as needed
    ]);

    const handleCreateBlog = (newBlog) => {
        setBlogs([...blogs, { ...newBlog, _id: `${blogs.length + 1}` }]);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Blogs & Articles</h1>
            <p className="mb-4">Explore our latest blog posts and articles:</p>

            <BlogCreation onCreate={handleCreateBlog} />
            <BlogsList blogs={blogs} />
        </div>
    );
};

export default Blogs;
