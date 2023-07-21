import * as React from 'react';
import Box from '@mui/material/Box';
import Godmode from './Godmode'
import Brick from './Brick'

export default function MProjects() {
  return (
    <Box height="100vh">
    <h2>My Projects</h2>
    <Brick />
    <Godmode />
  </Box>
  );
}