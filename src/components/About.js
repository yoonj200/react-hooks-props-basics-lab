import React from "react";
import Links from './Links'


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>Put the bio in here</p> */}
      {/* (condition ? ifTrue : ifFalse) */}
      { props.bio ? <p>{props.bio}</p> : null }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.Links} linkedin={props.Links} />
    </div>
  );
}

export default About;
