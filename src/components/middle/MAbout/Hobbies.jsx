import * as React from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function Hobbies() {
  const listItemStyle = { color: '#EDECEA', fontFamily: "'Amatic SC', cursive" }

  return (
    <Accordion
      sx={{
        fontFamily: "'Amatic SC', cursive",
        color: '#EDECEA',
        bgcolor: '#514A49',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ borderBottom: 2, borderColor: '#A39493' }}
      >
        <Typography
          sx={{
            fontFamily: "'Amatic SC', cursive",
            color: '#EDECEA',
            bgcolor: '#514A49',
            fontSize: 30,
          }}
        >
          Hobbies
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ borderBottom: 2, borderColor: '#A39493' }}>
        <iframe
          style={{ borderRadius: '12px' }}
          title='Eurovision playlist'
          src='https://open.spotify.com/embed/playlist/6yUp9EJsf0IeerrfUmHWTS?utm_source=generator'
          width='100%'
          height='380'
          frameBorder='0'
          allowFullScreen=''
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        ></iframe>
        <Grid>
          <Grid item xs={12}>
            <Typography variant='h6' style={listItemStyle}>
              Listening to music
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <List>
              <ListItem>
                <ListItemText primary='80s' style={listItemStyle} />
              </ListItem>
              <ListItem>
                <ListItemText primary='Punk' style={listItemStyle} />
              </ListItem>
              <ListItem>
                <ListItemText primary='00s Pop' style={listItemStyle} />
              </ListItem>
              <ListItem>
                <ListItemText primary='Eurovision' style={listItemStyle} />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6' style={listItemStyle}>
              Playing with my dogs, Max & Ari
            </Typography>
            <Avatar
              src={require('../../../images/Max-on-doggy-bed.jpg')}
              alt='Maximus'
              sx={{ width: 150, height: 150, marginRight: 2 }}
            />
            <Avatar
              src={require('../../../images/Ari-with-tongue-out.jpg')}
              alt='Ari'
              sx={{ width: 150, height: 150, marginRight: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6' style={listItemStyle}>
              Playing video games
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <List>
              <ListItem>
                <ListItemText primary='Skyrim' style={listItemStyle} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='anything Super Mario or Donkey Kong'
                  style={listItemStyle}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary='Horizon' style={listItemStyle} />
              </ListItem>
              <ListItem>
                <ListItemText primary='The Last of Us' style={listItemStyle} />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}
