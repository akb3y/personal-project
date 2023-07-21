import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Experience() {
  const listItemStyle = { color: '#EDECEA', fontFamily: "'Amatic SC', cursive" };
  return (
    <Accordion
    sx={{
      fontFamily: "Amatic SC",
      color: "#EDECEA",
      bgcolor: "#514A49",
    }}
    >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      // aria-controls="panel1a-content"
      // id="panel1a-header"
      sx={{ borderBottom: 2, borderColor: '#A39493' }}
    >
      <Typography
              sx={{
              fontFamily: "'Amatic SC', cursive",
              color: '#EDECEA',
              bgcolor: '#514A49',
              fontSize: 30
            }}>Experience</Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ borderBottom: 2, borderColor: '#A39493' }}>
    <Typography style={listItemStyle}>
        West Coast Code Consultant <br />
        Software Engineer <br />
        April 2023 - June 2023
      </Typography>
      <br />
      <Typography style={listItemStyle}>
        Kratos <br />
        Software Engineer II <br />
        November 2022 - April 2023
      </Typography>
      <br />
      <Typography style={listItemStyle}>
        7Eagle <br />
        Cybersecurity Apprentice<br />
        April 2021 - October 2021
      </Typography>
      <br />
      <Typography style={listItemStyle}>
        Dollar General <br />
        Data Analyst <br />
        July 2020- April 2021
      </Typography>
    </AccordionDetails>
  </Accordion>
  );
}