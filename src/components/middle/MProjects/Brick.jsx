import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

import Video from '../../../images/Projects/BM/BMVideo.mp4';

const Godmode = () => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        bgcolor: '#514A49',
        color: '#EDECEA'
      }}
    >
      <Typography variant="h4" sx={{ fontFamily: 'Amatic SC, cursive' }}>
        Brick & Morty
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, fontFamily: 'Amatic SC, cursive'  }}>
      Brick & Morty is a modern client facing retail web-portal that improves the user experience and increase sales for the company. The website consists of four main components including the Overview section, Related Items, Questions and Answers and Ratings and Reviews.
      </Typography>
      <Typography variant="body1" sx={{ mt: 2, fontFamily: 'Amatic SC, cursive'  }}>
      My role in the front-end redesign and optimization of Brick & Morty was the Overview Widget that allows a user to select a product and view relevent information. Selections in the overview update the selected product for other widgets on the page.
      </Typography>
      <Typography sx={{ mt: 2, fontFamily: 'Amatic SC, cursive'  }}>The overview includes a Photo carousel, Photo Thumbnail selection, Product Detail, Cart. </Typography>
      <Box mt={2}>
        <video controls autoPlay loop muted style={{ width: '100%', height: 'auto' }}>
          <source src={Video} type="video/mp4" />
        </video>
      </Box>
    </Paper>
  );
};

export default Godmode;