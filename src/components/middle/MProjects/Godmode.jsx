import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

import Video from '../../../images/Projects/GODMODEVideo.mp4';

const Godmode = () => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        borderRadius: 4,
        bgcolor: '#514A49',
        color: '#EDECEA'
      }}
    >
      <Typography variant="h4" sx={{ fontFamily: 'Amatic SC, cursive' }}>
        GODMODE
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, fontFamily: 'Amatic SC, cursive'  }}>
        GODMODE is a game recommendation app that allows the user to refine results based on parameters such as the number of players and minimum age of players. Filtered results are returned in order of the highest-rated game first.
      </Typography>
      <Box mt={2}>
        <video controls autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </Box>
    </Paper>
  );
};

export default Godmode;