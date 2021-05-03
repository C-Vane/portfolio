import { Button } from "@material-ui/core";
import React from "react";
import { ProjectsContainer } from "./StyledComponents/componenets";

function Projects() {
  return (
    <ProjectsContainer className='container' id='projects'>
      <div>
        <h2>Solo Projects</h2>
        <div>
          <ul>
            <li>
              <h3>First Web app</h3>
              <div className='details'>
                <div>About Project</div>
                <Button>CODE</Button>
                <Button>DEMO</Button>
              </div>
            </li>
            <li>
              <h3>Signdacity</h3>
              <div className='details'>
                <div>About Project</div>
                <Button>CODE</Button>
                <Button>DEMO</Button>
              </div>
            </li>
            <li>
              <h3>Weather App</h3>
              <div className='details'>
                <div>About Project</div>
                <Button>CODE</Button>
                <Button>DEMO</Button>
              </div>
            </li>
            <li>
              <h3>Assesment Platform</h3>
              <div className='details'>
                <div>About Project</div>
                <Button>CODE</Button>
                <Button>DEMO</Button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2>Team projects</h2>
        <div>
          <ul>
            <li>
              <h3>Linkedin Clone</h3>
              <div className='details'>
                <div>About Project</div>
                <Button>CODE</Button>
                <Button>DEMO</Button>
              </div>
            </li>
            <li>
              <h3>Spotify Clone</h3>
              <div className='details'>
                <div>About Project</div>
                <Button>CODE</Button>
                <Button>DEMO</Button>
              </div>
            </li>
            <li>
              <h3>Netflix Clone</h3>
              <div className='details'>
                <div>About Project</div>
                <Button>CODE</Button>
                <Button>DEMO</Button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </ProjectsContainer>
  );
}

export default Projects;
