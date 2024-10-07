import React, { useState } from 'react';
import { loginUser } from '../services/authServices';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'; // Add Link and useNavigate from react-router-dom

const LoginComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await loginUser(username, password);
            console.log("WELCOME TO STACKY");
            navigate('/dashboard'); // Redirect to dashboard or homepage after login
        } catch (error) {
            setError("Login failed: Invalid credentials.");
        }
    };

    return (
        <Container maxWidth="xs" style={{ marginTop: '50px' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: 3,
                    padding: '20px',
                    borderRadius: '10px',
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleLogin} style={{ width: '100%' }}>
                    {error && <Typography color="error" variant="body1">{error}</Typography>}
                    <TextField
                        label="Username"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        margin="normal"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{ marginTop: '20px' }}
                    >
                        Login
                    </Button>
                </form>
                {/* Add a link to the sign-up page */}
                <Typography variant="body2" style={{ marginTop: '15px' }}>
                    Don't have an account? <Link to="/signup">Sign up here</Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default LoginComponent;
