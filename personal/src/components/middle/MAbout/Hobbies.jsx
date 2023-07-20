import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function Hobbies() {
  return (
    <Accordion
      sx={{
        fontFamily: 'Amatic SC',
        color: '#EDECEA',
        bgcolor: '#514A49',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        // aria-controls="panel1a-content"
        // id="panel1a-header"
        sx={{ borderBottom: 2, borderColor: '#A39493' }}
      >
        <Typography>Hobbies</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ borderBottom: 2, borderColor: '#A39493' }}>
        <Typography>
        <iframe
            style={{borderRadius: '12px'}}
            title='Eurovision playlist'
            src="https://open.spotify.com/embed/playlist/6yUp9EJsf0IeerrfUmHWTS?utm_source=generator" width="100%"
            height="380"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </Typography>
        <Typography>
          <img src={require('../../../images/apsu_logo.jpeg')} style={{width: 250}} alt='MTSU' />
          Austin Peay State University <br />
          MS Computer Science and Quantitative Methods <br />
          January 2018 - August 2020
        </Typography>
        <Typography>
          <img src={require('../../../images/mtsu_logo.jpg')} style={{width: 250}} alt='MTSU' />
          Middle Tennessee State University <br />
          BS Sociology <br />
          August 2012 - December 2014
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}