import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';


const MeetingPage = () => {
    const [meetingLink, setMeetingLink] = useState('');
    const [meetingDetails, setMeetingDetails] = useState('');
    
    const [participantEmails, setParticipantEmails] = useState('');

    const handleMeetingCreation = () => {
        // Logic to store the meeting record
        console.log('Meeting Details:', meetingDetails, 'Meeting Link:', meetingLink, 'Date:', 'Participants:', participantEmails);
        // Implement the logic to send invitations and store meeting details
    };

    return (
        <Container style={{ marginTop: '20px' }}>
            <Typography variant="h4" gutterBottom>Create Meeting</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Meeting Details"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        value={meetingDetails}
                        onChange={(e) => setMeetingDetails(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Zoom or Google Meet Link"
                        variant="outlined"
                        fullWidth
                        value={meetingLink}
                        onChange={(e) => setMeetingLink(e.target.value)}
                    />
                </Grid>
            
                <Grid item xs={12}>
                    <TextField
                        label="Participant Emails (comma-separated)"
                        variant="outlined"
                        fullWidth
                        value={participantEmails}
                        onChange={(e) => setParticipantEmails(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={handleMeetingCreation}
                        fullWidth
                    >
                        Create Meeting
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MeetingPage;
