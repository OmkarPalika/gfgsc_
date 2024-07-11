import React from 'react';

const TutorialList = ({ tutorials }) => {
    return (
        <div className="tutorials-list">
            <h2 className="text-2xl font-bold mb-4">Interactive Tutorials</h2>
            <ul className="space-y-4">
                {tutorials.map(tutorial => (
                    <li key={tutorial._id} className="tutorial-item p-4 bg-white rounded shadow">
                        <h3 className="text-xl font-semibold">{tutorial.title}</h3>
                        <p className="text-gray-600">{tutorial.description}</p>
                        <a href={`/tutorial/${tutorial._id}`} className="text-blue-600 hover:underline">Start Tutorial</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TutorialList;
