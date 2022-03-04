import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      {/* 'App' passes down data from 'user' object as props to 'Home' component */}
      <Home 
        color={user.color}
        name={user.name}
        city={user.city}
      />
      {/* App passes down data from 'user' object as props to 'About' component  */}
      <About 
        bio={user.bio}
        github={user.links.github}
        linkedin={user.links.linkedin}
      />
    </div>
  );
}

export default App;
