import React, { useState } from 'react';

const InteractiveTutorial = ({ tutorial }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);

    const handleAnswer = (answer) => {
        setAnswers([...answers, answer]);
        if (currentQuestion < tutorial.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Handle end of quiz, e.g., calculate score
        }
    };

    return (
        <div className="interactive-tutorial p-4 bg-white rounded shadow">
            <h1 className="text-3xl font-bold mb-4">{tutorial.title}</h1>
            <p className="text-gray-600 mb-4">{tutorial.description}</p>
            <div className="quiz">
                {tutorial.questions.length > 0 && (
                    <div className="question mb-4">
                        <h2 className="text-xl font-semibold">{tutorial.questions[currentQuestion].question}</h2>
                        <ul className="list-disc ml-8 mt-2">
                            {tutorial.questions[currentQuestion].options.map((option, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => handleAnswer(option)}
                                        className="text-blue-600 hover:underline"
                                    >
                                        {option}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InteractiveTutorial;
