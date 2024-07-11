import React from 'react';

const Home = () => {
    return (
        <div className="home-container">
            <section className="landing-section bg-blue-800 text-white p-8">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold">Welcome to the GeeksforGeeks Student Chapter at ANITS</h1>
                    <p className="mt-4 text-lg">Empowering students with the skills and knowledge to excel in the tech industry.</p>
                </div>
            </section>

            <section className="mission-vision-section p-8">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                    <p className="mt-2 text-lg">
                        To provide a platform for students to learn, share, and grow their technical skills through workshops, events, and collaboration.
                    </p>

                    <h2 className="text-3xl font-bold mt-8">Our Vision</h2>
                    <p className="mt-2 text-lg">
                        To create a community of tech enthusiasts who are prepared to tackle real-world problems and contribute to the tech industry.
                    </p>
                </div>
            </section>

            <section className="about-anits-section bg-gray-100 p-8">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold">About ANITS</h2>
                    <p className="mt-2 text-lg">
                        ANITS (Anil Neerukonda Institute of Technology and Sciences) is a premier engineering institute focused on providing quality education and fostering innovation.
                    </p>
                </div>
            </section>

            <section className="upcoming-events-section p-8">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold">Upcoming Events</h2>
                    <ul className="mt-4 space-y-4">
                        <li className="event-item p-4 bg-white rounded shadow">
                            <h3 className="text-2xl font-bold">Hackathon 2024</h3>
                            <p className="mt-2 text-lg">Join us for a 24-hour coding marathon where you'll solve real-world problems and win exciting prizes.</p>
                            <p className="mt-1 text-gray-500">Date: 25th July 2024</p>
                        </li>
                        <li className="event-item p-4 bg-white rounded shadow">
                            <h3 className="text-2xl font-bold">Web Development Workshop</h3>
                            <p className="mt-2 text-lg">Learn the basics of web development and build your first website from scratch.</p>
                            <p className="mt-1 text-gray-500">Date: 1st August 2024</p>
                        </li>
                        <li className="event-item p-4 bg-white rounded shadow">
                            <h3 className="text-2xl font-bold">AI & Machine Learning Seminar</h3>
                            <p className="mt-2 text-lg">Attend a seminar on the latest trends and advancements in AI and Machine Learning.</p>
                            <p className="mt-1 text-gray-500">Date: 15th August 2024</p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Home;
