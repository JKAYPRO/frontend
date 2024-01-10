// src/components/DocumentRepository.js
import React, { useState } from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

const DocumentRepository = () => {
    const [documents, setDocuments] = useState([]);

    const handleUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // In a real app, you would upload the file here
            setDocuments([...documents, file.name]);
        }
    };

    return (
        <Container style={{ marginTop: '20px' }}>
            <Typography variant="h5" gutterBottom>Document Repository</Typography>
            <Button
                variant="contained"
                component="label"
                style={{ marginBottom: '20px' }}
            >
                Upload File
                <input
                    type="file"
                    hidden
                    onChange={handleUpload}
                />
            </Button>
            <List>
                {documents.map((doc, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={doc} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default DocumentRepository;
