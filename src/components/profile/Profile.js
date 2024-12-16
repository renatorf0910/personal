import { Avatar, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import WorkIcon from '@mui/icons-material/Work';
import DraftsIcon from '@mui/icons-material/Drafts';

export default function Profile() {
  return (
    <>
      <Typography variant="h6" component="h6" sx={{ textAlign: "center" }}>
        <Avatar
          alt="Renato"
          src="https://github.com/renatorf0910.png"
          sx={{ width: 56, height: 56 }}
        />
        Renato Rocha Ferreira
      </Typography>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', justifyItems: "center" }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>

              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="renatorf0910@gmail.com" />

            </ListItem>
            <ListItem disablePadding>

              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Python | Django | React" />

            </ListItem>
          </List>
        </nav>
      </Box>
    </>
  )
}