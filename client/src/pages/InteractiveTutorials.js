import React, { useState } from 'react';
import TutorialList from '../components/tutorials/TutorialList';
import InteractiveTutorial from '../components/tutorials/InteractiveTutorials';

const InteractiveTutorials = () => {
    const [tutorials] = useState([
        {
            _id: '1',
            title: 'Introduction to React',
            description: 'Learn the basics of React, including components, state, and props.',
            questions: [
                {
                    question: 'What is a React component?',
                    options: ['A function', 'A class', 'Both', 'None of the above'],
                    answer: 'Both'
                },
                {
                    question: 'What is state in React?',
                    options: ['A storage', 'A data structure', 'A way to store data in a component', 'None of the above'],
                    answer: 'A way to store data in a component'
                }
            ]
        },
        {
            _id: '2',
            title: 'Getting Started with Node.js',
            description: 'Understand the basics of Node.js and how to create a simple server.',
            questions: [
                {
                    question: 'What is Node.js?',
                    options: ['A programming language', 'A JavaScript runtime', 'A framework', 'None of the above'],
                    answer: 'A JavaScript runtime'
                },
                {
                    question: 'Which module is used to create a server in Node.js?',
                    options: ['http', 'fs', 'path', 'url'],
                    answer: 'http'
                }
            ]
        }
    ]);

    const [currentTutorial, setCurrentTutorial] = useState(null);

    const handleStartTutorial = (tutorialId) => {
        const tutorial = tutorials.find(tutorial => tutorial._id === tutorialId);
        setCurrentTutorial(tutorial);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Interactive Tutorials</h1>
            {currentTutorial ? (
                <InteractiveTutorial tutorial={currentTutorial} />
            ) : (
                <TutorialList tutorials={tutorials} />
            )}
        </div>
    );
};

export default InteractiveTutorials;
