import styled, { keyframes } from "styled-components";
import profilePic from "../../assets/ProfileImage.png";

const glow = keyframes`
0%{
    box-shadow:0 0 15px 7px #fff,  
    border-width: 2px;
}

100%{
    box-shadow: 0 0 15px 7px #fff,  
    0 0 30px 20px #f0f,
    0 0 40px 30px #0ff;
}
`;
const glowSmall = keyframes`
0%{
    box-shadow:0 0 5px 3px #fff,  
100%{

    box-shadow: 0 0 5px 3px #fff,  
    0 0 10px 7px #f0f,
    0 0 20px 15px #0ff;
}
}
`;

export const ProfileImage = styled.div`
  width: 25vmax;
  height: 30vmax;
  display: inline-block;
  background: url(${profilePic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: -1vmax 0.0001vmax;
  margin-top: calc(100vh - 25vmax);
`;

export const BigStar = styled.div`
  width: 3vmin;
  height: 3vmin;
  border-radius: 50%;
  background: white;
  position: absolute;
  box-shadow: 0 0 10px 5px #fff;
  animation: ${glow} ${(props) => props.num}s ease infinite;
  &:hover {
    box-shadow: 0 0 15px 7px #fff, 0 0 30px 20px #f0f, 0 0 40px 30px #0ff;
  }
  &:hover + .links {
    text-shadow: 3px 1px 15px #fff;
  }
  cursor: pointer;
`;

export const SmallStar = styled.div`
  width: 2vmin;
  height: 2vmin;
  border-radius: 50%;
  background: white;
  position: absolute;
  box-shadow: 0 0 5px 3px #fff;
  animation: ${glowSmall} ${(props) => props.num}s ease infinite;
`;

export const SmallBearContainer = styled.div`
  background-color: red;
  position: relative;
  top: 30vh;
  .links {
    font-family: "Stardos Stencil", cursive;
    color: white;
    size: 6vmax;
    letter-spacing: 0.2em;
  }
  div {
    position: absolute;
  }
  .tail-3 {
    width: 15vmin;
    border-top: 0.5vmin solid white;
    transform: rotate(20deg);
    top: 3vmin;
  }
  .tail-3 + div {
    top: 5.2vmin;
    left: 14vmin;
  }
  .tail-2 {
    top: 5.7vmin;
    left: 16vmin;
    border-right: 0.5vmin solid white;
    transform: rotate(-20deg);
    height: 10vmin;
  }
  .tail-2 + div {
    top: 15vmin;
    left: 17.2vmin;
  }
  .tail-2 ~ .links {
    top: 15vmin;
    left: 21vmin;
  }

  .tail-1 {
    height: 13vmin;
    top: 16vmin;
    left: 21vmin;
    border-right: 0.5vmin solid white;
    transform: rotate(-26deg);
  }
  .tail-1 + div {
    top: 27vmin;
    left: 23vmin;
  }
  .small-back {
    height: 10vmin;
    top: 27vmin;
    left: 21vmin;
    border-right: 0.5vmin solid white;
    transform: rotate(30deg);
  }
  .small-back + div {
    top: 35vmin;
    left: 17vmin;
  }

  .small-back ~ .links {
    top: 35vmin;
    left: -4vmin;
  }

  .big-back {
    height: 20vmin;
    top: 23vmin;
    left: 33vmin;
    border-right: 0.5vmin solid white;
    transform: rotate(-60deg);
  }
  .big-back + div {
    top: 36.5vmin;
    left: 41vmin;
  }
  .big-back ~ .links {
    top: 36.5vmin;
    left: 47vmin;
  }
  .lower-part {
    height: 17vmin;
    top: 34vmin;
    left: 26vmin;
    border-right: 0.5vmin solid white;
    transform: rotate(-50deg);
  }
  .head {
    height: 12vmin;
    top: 37.5vmin;
    left: 37.5vmin;
    border-right: 0.5vmin solid white;
    transform: rotate(40deg);
  }

  .head + div {
    top: 47vmin;
    left: 32vmin;
  }
  .head ~ .links {
    top: 47vmin;
    left: 38vmin;
  }
`;

export const WelcomeContainer = styled.div`
  position: absolute;
  width: 50vw;
  margin-top: 5vh;
  color: white;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  h3 {
    padding-top: 10vh;
    font-size: 1.5vmax;
    max-width: 30vw;
    margin: auto;
  }
`;
