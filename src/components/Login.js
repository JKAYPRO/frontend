// src/components/LoginPage.js
import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

// src/components/LoginPage.js
// ... imports remain the same ...

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(email, password);
    };

    return (
        <Container maxWidth="xs" style={{ marginTop: '100px' }}>
            {/* ... Typography remains the same ... */}
            <form onSubmit={handleSubmit}>
                <TextField 
                  label="Email" 
                  variant="outlined" 
                  fullWidth 
                  margin="normal" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField 
                  label="Password" 
                  type="password" 
                  variant="outlined" 
                  fullWidth 
                  margin="normal" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  style={{ marginTop: '20px' }}
                >
                    Log In
                </Button>
            </form>
        </Container>
    );
};

export default LoginPage;


