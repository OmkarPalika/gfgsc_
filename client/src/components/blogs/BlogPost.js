import React from 'react';

const BlogPost = ({ blog }) => {
    return (
        <div className="blog-post p-4 bg-white rounded shadow">
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-600 mb-4">{blog.content}</p>
            <div className="tags mt-4">
                {blog.tags.map(tag => (
                    <span key={tag} className="tag bg-gray-200 text-gray-700 rounded px-2 py-1 mr-2">{tag}</span>
                ))}
            </div>
        </div>
    );
};

export default BlogPost;
