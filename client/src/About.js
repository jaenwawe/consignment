import React from "react";
import { username, password, image} from "./Mock"
  
function About() {
    return (
      <div  class="inline-flex">
        <h2>About</h2>

        <h2>About Me</h2>
      <p>{username} + {password}</p>
        <img src={image} alt="I made this" />
      </div>
    );
  }
  
  export default About;