import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function Education() {
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
        <Typography>Education</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ borderBottom: 2, borderColor: '#A39493' }}>
        <Typography>
          <img src={require('../../../images/HR.jpeg')} style={{width: 250}}alt='HR' />
          Hack Reactor <br />
          Immersive Software Engineer <br />
          February 2022 - May 2022
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
