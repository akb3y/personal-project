import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Experience from './Experience'
import Education from './Education'
import Hobbies from './Hobbies'

export default function MAbout() {
  return (
    <Box height="100vh">
    <h2>About Me</h2>
    <Typography flex={1} textAlign="center" fontFamily= "Amatic SC">
    Welcome to my page. I am Alisha and I am a frontend engineer in the Boulder, CO area.
    </Typography>
    <img
    className="me"
    src={require('../../../images/alisha Copy Copy Copy.jpg')}
    style={{width: 350, height: 300, position: 'absolute', paddingLeft: 50 }}
    alt='Me' />
      <Experience />
      <Education />
      <Hobbies />
  </Box>
  );
}