import React from "react"
import {made_image} from "../data/Mock"


function About() {
    return (
<div> 
              <h2>About</h2>
              <h4>First Class clothes  Resold at great prices</h4>
              <img src={made_image} alt="girl looking up" />
  </div>    
    );
  }



  //index.js or index.html on in public folder  index.css
  
  export default About;