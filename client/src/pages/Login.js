import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext.js';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(email, password);
            setLoading(false);
            navigate('/');
        } catch (err) {
            setLoading(false);
            setError('Failed to log in. Please check your email and password.');
        }
    };

    return (
        <div className="login-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="login-box w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
                {error && <p className="mb-4 text-red-600">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="form-group">
                        <label htmlFor="email" className="block text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="block text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div className="form-group">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                                }`}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-center">
                    Don't have an account?{' '}
                    <Link to="/register" className="text-blue-600 hover:underline">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
