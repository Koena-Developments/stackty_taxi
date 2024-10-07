import React, { useState } from 'react';
import { signUpUser } from '../services/authServices';
import { TextField, Button, Container, Typography, Box, MenuItem } from '@mui/material';

const SignUpComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [role, setRole] = useState('user');  // role can be 'user' or 'taxi_driver'
    const [password, setPassword] = useState(''); // Assuming you'll add password support
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const data = { name, email, phone_number: phoneNumber, role, password };
            await signUpUser(data); // This sends the data to the backend.
            setSuccess('Account created successfully! You can now log in.');
        } catch (error) {
            setError('Sign-up failed: Please try again.');
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
                    Sign Up
                </Typography>
                <form onSubmit={handleSignUp} style={{ width: '100%' }}>
                    {error && <Typography color="error" variant="body1">{error}</Typography>}
                    {success && <Typography color="primary" variant="body1">{success}</Typography>}
                    <TextField
                        label="Name"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        margin="normal"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        label="Phone Number"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
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
                    <TextField
                        select
                        label="Role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        required
                    >
                        <MenuItem value="user">User</MenuItem>
                        <MenuItem value="taxi_driver">Taxi Driver</MenuItem>
                    </TextField>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        style={{ marginTop: '20px' }}
                    >
                        Sign Up
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default SignUpComponent;
