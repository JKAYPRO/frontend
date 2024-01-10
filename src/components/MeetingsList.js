import React from 'react';
import { List, ListItem, ListItemText, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const MeetingsList = ({ meetings }) => {
  return (
    <div>
      <Typography variant="h4" style={{ margin: '20px 0' }}>Upcoming Meetings</Typography>
      <List>
  {meetings.map((meeting) => (
    <ListItem key={meeting.id} divider>
      <ListItemText 
        primary={<Link component={RouterLink} to={`/meeting/${meeting.id}`}>{meeting.subject}</Link>}
        secondary={`${meeting.date} at ${meeting.time}`} 
      />
            <Link href={meeting.link} target="_blank" rel="noopener noreferrer" color="primary">
              Join Meeting
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MeetingsList;
