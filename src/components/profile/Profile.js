import React from 'react';
import { Avatar, Typography, Box, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Divider, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material/styles';
import Experience from '../experience/Experience';
import Copyright from './Copyright';

const ProfileCard = styled(Card)(({ theme }) => ({
  maxWidth: 1000,
  margin: '20px auto',
  padding: theme.spacing(2),
  borderRadius: '61px',
  boxShadow: theme.shadows[10],
  color: "grey"
}));


const Profile = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <ProfileCard>
          <CardContent sx={{ textAlign: 'center' }}>
            <Avatar
              alt="Renato"
              src="https://github.com/renatorf0910.png"
              sx={{ width: 120, height: 120, margin: '0 auto 16px' }}
            />
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
              Renato Rocha Ferreira
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '20px' }}>
              Full Stack Developer - Python | Django | ReactJS
            </Typography>

            <List>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="renatorf0910@gmail.com" />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary={<Link
                  href="https://wa.me/5512991752296?text="
                  target="_blank"
                  rel="noopener"
                  sx={{
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  +55 (12) 991752296
                </Link>}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <LinkedInIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Link
                      href="https://linkedin.com/in/renatorf0910"
                      target="_blank"
                      rel="noopener"
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit'
                      }}
                    >
                      LinkedIn
                    </Link>
                  }
                  secondary="https://linkedin.com/in/renatorf0910"
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Link
                      href="https://github.com/renatorf0910"
                      target="_blank"
                      rel="noopener"
                      sx={{
                        textDecoration: 'none',
                        color: 'inherit'
                      }}
                    >
                      GitHub
                    </Link>
                  }
                  secondary="https://github.com/renatorf0910"
                />
              </ListItem>
            </List>
          </CardContent>
        </ProfileCard>
      </Box>
      <Experience />
      <Copyright />
    </>
  );
};

export default Profile;
