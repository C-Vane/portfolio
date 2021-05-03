import React from "react";
import { SkillsContainer } from "./StyledComponents/componenets";

function Skills() {
  return (
    <SkillsContainer id='skills'>
      <h2>Skills</h2>
      <h3>Things I have learned</h3>
      <div>
        <ul>
          <li>
            <i className='devicon-javascript-plain colored'></i>{" "}
          </li>
          <li>
            <i className='devicon-python-plain '></i>
          </li>
          <li>
            <i className='devicon-html5-plain colored'></i>
          </li>
          <li>
            <i className='devicon-css3-plain colored'></i>
          </li>
          <li>
            <i className='devicon-react-original colored'></i>
          </li>
          <li>
            <i className='devicon-express-original'></i>
          </li>
          <li>
            <i className='devicon-nodejs-plain colored'></i>
          </li>
          <li>
            <i className='devicon-materialui-plain colored'></i>
          </li>
          <li>
            <i className='devicon-typescript-plain colored'></i>
          </li>
          <li>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xlink='http://www.w3.org/1999/xlink'
              aria-hidden='true'
              focusable='false'
              width='100%'
              height='100%'
              preserveAspectRatio='xMidYMid meet'
              viewBox='0 0 32 32'
            >
              <path d='M24 21V9h-2v14h8v-2h-6z' fill='blue' />
              <path d='M18 9h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1v2a2 2 0 0 0 2 2h2v-2h-2v-2h1a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2zm-4 12V11h4v10z' fill='blue' />
              <path d='M8 23H2v-2h6v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6v2H4v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z' fill='blue' />
            </svg>
          </li>
          <li>
            <span>SCRUM</span> Agile scrum methodology
          </li>
          <li>
            <span> UML </span>design
          </li>
          <li>
            <span> CI/CD </span>Continuous integration
          </li>
          <li>
            <span> RWD </span> responsive web design
          </li>
          <li>
            <span> UI/UX </span>design
          </li>
        </ul>
      </div>

      <h3>Tools I use</h3>
      <div>
        <ul>
          <li>
            <i className='devicon-visualstudio-plain colored'></i>
          </li>
          <li>
            <i className='devicon-github-original '></i>
          </li>
          <li>
            <i className='devicon-npm-original-wordmark colored'></i>
          </li>
          <li>
            <i className='devicon-git-plain '></i>
          </li>
          <li>
            <i className='devicon-bootstrap-plain colored'></i>
          </li>

          <li>
            <i className='devicon-heroku-original colored'></i>
          </li>

          <li>
            <i className='devicon-postgresql-plain colored'></i>
          </li>
          <li>
            <i className='devicon-mongodb-plain-wordmark colored'></i>
          </li>

          <li>
            <i className='devicon-trello-plain-wordmark colored'></i>
          </li>
          <li>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xlink='http://www.w3.org/1999/xlink'
              aria-hidden='true'
              focusable='false'
              width='100%'
              height='100%'
              preserveAspectRatio='xMidYMid meet'
              viewBox='0 0 256 199'
            >
              <path
                d='M118.432 187.698c32.89-5.81 60.055-10.618 60.367-10.684l.568-.12l-31.052-36.935c-17.078-20.314-31.051-37.014-31.051-37.11c0-.182 32.063-88.477 32.243-88.792c.06-.105 21.88 37.567 52.893 91.32c29.035 50.323 52.973 91.815 53.195 92.203l.405.707l-98.684-.012l-98.684-.013l59.8-10.564zM0 176.435c0-.052 14.631-25.451 32.514-56.442l32.514-56.347l37.891-31.799C123.76 14.358 140.867.027 140.935.001c.069-.026-.205.664-.609 1.534s-18.919 40.582-41.145 88.25l-40.41 86.67l-29.386.037c-16.162.02-29.385-.005-29.385-.057z'
                fill='#0089D6'
                fillRule='nonzero'
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xlink='http://www.w3.org/1999/xlink'
              aria-hidden='true'
              focusable='false'
              width='100%'
              height='100%'
              preserveAspectRatio='xMidYMid meet'
              viewBox='0 0 24 24'
            >
              <path d='M24 22.525H0l12-21.05l12 21.05z' fill='white' />
            </svg>
          </li>
          <li>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xlink='http://www.w3.org/1999/xlink'
              aria-hidden='true'
              focusable='false'
              width='100%'
              height='100%'
              preserveAspectRatio='xMidYMid meet'
              viewBox='0 0 24 24'
            >
              <path
                d='M11.936.014a12.17 12.17 0 0 0-2.975.378C4.281 1.555.568 5.794.091 10.602c-.59 4.548 1.709 9.285 5.644 11.634c3.861 2.418 9.093 2.32 12.874-.223c3.397-2.206 5.512-6.228 5.386-10.285c-.058-4.016-2.31-7.916-5.76-9.98C16.355.589 14.144.006 11.937.015zm-.063 1.696c4.945-.007 9.789 3.813 10.282 8.924c.945 5.66-3.753 11.413-9.488 11.58c-5.454.544-10.724-4.08-10.88-9.557c-.406-4.434 2.517-8.835 6.698-10.3a9.113 9.113 0 0 1 3.388-.646zm5.091 3.224c-2.687 2.085-5.26 4.308-7.889 6.457c1.203.017 2.412.016 3.621.01c1.41-2.165 2.86-4.3 4.268-6.467zm-5.665 7.654c-1.41 2.166-2.86 4.309-4.27 6.474c2.693-2.08 5.255-4.32 7.902-6.456a255.413 255.413 0 0 0-3.632-.018z'
                fill='#626262'
              />
            </svg>
          </li>
        </ul>
      </div>
    </SkillsContainer>
  );
}

export default Skills;
