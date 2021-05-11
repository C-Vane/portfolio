import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React from "react";
import { ProjectsContainer } from "./StyledComponents/componenets";

function Projects() {
  return (
    <ProjectsContainer className='container' id='projects'>
      <div>
        <h2>Solo Projects</h2>
        <div>
          <ul className='main-container'>
            <li>
              <h3>Current Project</h3>
              <div>
                <img></img>
              </div>
              <div className='details'>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='first-project'>
                    <Typography>About the project</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>
                      This a new project I recently started working on. It's a vacination certification app with diffrent platfroms where the public, hospitals, businesses and governments can access
                      respective data about the numbers and status of vacination.
                    </p>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='first-project-details'>
                    <Typography>Details & Tecnologies</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className='d-flex flex-column'>
                      <div>
                        <h4>Project Details</h4>
                      </div>
                      <div>
                        <h4>Tecnologies Used</h4>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='first-project-links'>
                    <Typography>Links</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className='d-flex flex-column'>
                      <Button target='_blank' href='#'>
                        CODE:not public
                      </Button>
                      <Button target='_blank' href='#'>
                        DEMO:not deployed
                      </Button>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </li>
            <li>
              <h3>Signdacity</h3>
              <div className='details'>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='second-project'>
                    <Typography>About the project</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p>Signdacity is a video chat app that uses real time voice and sign language recognition to facilitate communication with people with hearing or speaking inpairments.</p>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='second-project-details'>
                    <Typography>Details & Tecnologies</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className='d-flex flex-column'>
                      <div>
                        <h4>Project Details</h4>
                      </div>
                      <div>
                        <h4>Tecnologies Used</h4>
                        <ul>
                          <li>
                            <b>Node.js:</b> runtime environment to run the project.
                          </li>
                          <li>
                            <b>Redux:</b> library to managing application state
                          </li>
                          <li>
                            <b>React: </b>library use to design the UI, also used React-hooks and styled componenets.
                          </li>
                          <li>
                            <b>Material-UI:</b> material library used to style some components
                          </li>
                          <li>
                            <b>Socket.io:</b> library used for realtime, bi-directional communication between web clients and servers.
                          </li>
                          <li>
                            <b>WebRTC:</b> api used to capture and optionally stream audio and/or video media
                          </li>
                          <li>
                            <b>Express:</b> framework used to create APIs
                          </li>
                          <li>
                            <b>Tensorflow.js:</b> is a library for machine learning in JavaScript used for object and person recognition in the app
                          </li>
                          <li>
                            <b>Tensorflow:</b> used in conjuction with python to teach the model to recognize gestures
                          </li>
                          <li>
                            <b>Passport.js:</b> authentication middleware for Node.js used for Facebook and google OAuth
                          </li>
                          <li>
                            <b>MongoDB:</b> document-oriented database program used to save user and chat data
                          </li>
                        </ul>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='second-project-links'>
                    <Typography>Links</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className='d-flex flex-column'>
                        <Button target='_blank' href='https://github.com/C-Vane/solo-capstone'>
                          CODE
                        </Button>
                        <Button target='_blank' href=' https://signdacity.vercel.app'>
                          DEMO
                        </Button>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
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
