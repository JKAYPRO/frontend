// src/components/MeetingDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, List, ListItem, Link, Button } from '@mui/material';

const MeetingDetails = ({ meetings }) => {
  const { meetingId } = useParams();
  const meeting = meetings.find(m => m.id.toString() === meetingId);

  if (!meeting) {
    return <Typography>Meeting not found</Typography>;
  }

  return (
    <div>
      <Typography variant="h4">{meeting.subject}</Typography>
      <Typography>Date: {meeting.date} at {meeting.time}</Typography>
      <Typography>Agenda: {meeting.agenda}</Typography>
      <Typography>Minimum Attendees Required: {meeting.minAttendees}</Typography>
      
      <Typography variant="h6">Invitees:</Typography>
      <List>
        {meeting.invitees.map(email => (
          <ListItem key={email}>{email}</ListItem>
        ))}
      </List>

      <Typography variant="h6">Attendees:</Typography>
      <List>
        {meeting.attendees.map(email => (
          <ListItem key={email}>{email}</ListItem>
        ))}
      </List>

      <Button component={Link} href={meeting.link} target="_blank">
        Join Meeting
      </Button>

      {/* Document Upload Section (Placeholder) */}
      <Typography variant="h6">Upload Documents:</Typography>
      {/* Implement file upload logic here */}
      <input type="file" />
    </div>
  );
};

export default MeetingDetails;
