// src/components/LoginComponent.js
import React, { useState } from 'react';
import { loginUser } from '../services/authService';

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await loginUser(username, password);
            // we should do something here like render UI components based off the logins
        } catch (error) {
            setError("Login failed: Invalid credentials.");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginComponent;
