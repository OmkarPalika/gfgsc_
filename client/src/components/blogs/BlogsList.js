import React from 'react';

const BlogsList = ({ blogs }) => {
    return (
        <div className="blogs-list">
            <h2 className="text-2xl font-bold mb-4">Blogs & Articles</h2>
            <ul className="space-y-4">
                {blogs.map(blog => (
                    <li key={blog._id} className="blog-item p-4 bg-white rounded shadow">
                        <h3 className="text-xl font-semibold">{blog.title}</h3>
                        <p className="text-gray-600">{blog.excerpt}</p>
                        <a href={`/blog/${blog._id}`} className="text-blue-600 hover:underline">Read more</a>
                        <div className="tags mt-2">
                            {blog.tags.map(tag => (
                                <span key={tag} className="tag bg-gray-200 text-gray-700 rounded px-2 py-1 mr-2">{tag}</span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogsList;
