import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import Experience from './components/experience/Experience';
import Profile from './components/profile/Profile';

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      <Typography>
        {`Copyright © Renato Rocha Ferreira ${new Date().getFullYear()}`}
      </Typography>{' '}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        
        <Profile />
        <Experience />
        <ProTip />
        
        <Copyright />
      </Box>
    </Container>
  );
}