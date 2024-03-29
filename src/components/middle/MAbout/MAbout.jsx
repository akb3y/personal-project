import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Experience from "./Experience";
import Education from "./Education";
import Hobbies from "./Hobbies";

export default function MAbout() {
  return (
    <Box height="100vh">
      <h2>About Me</h2>
      <Typography flex={1} textAlign="center" fontFamily="Amatic SC">
        Welcome to my page. I am Alisha and I am a full stack engineer in the
        Boulder, CO area.
      </Typography>
      <Container sx={{ justify: "center", mb: -30 }}>
        <ImageList
          sx={{ width: 500, height: 450, paddingLeft: 10 }}
          cols={2}
          rowHeight={164}
        >
          <ImageListItem>
            <img
              src={require("../../../images/alisha Copy Copy Copy.jpg")}
              alt="me"
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
      </Container>
      <ul className="mskills">
        <b>Skills</b>
        <li>
          Fronted: Javascript (ES5 and ES6), React, jQuery, HTML5, CSS3, Axios{" "}
        </li>
        <li>
          Backend: Node.js, Express, Python, MongoDB, PostgreSQL, RESTful API
        </li>
        <li>
          Testing/Deployment: Jest, Mocha, Chai, React Testing Library, AWS,
          Surge
        </li>
        <li>
          Dev Tools: Vim, Git, npm, Webpack, Babel, Postman, VSCode, Figma
        </li>
      </ul>

      <Experience />
      <Education />
      <Hobbies />
    </Box>
  );
}
