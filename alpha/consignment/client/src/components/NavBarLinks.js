import React from "react";
import { NavLink} from "react-router-dom";

import { createBrowserHistory } from 'history';

import Button from 'react-bootstrap/Button'

import logo from '../data/logo.png';



const linkStyles = {
    display: "inline-block",
  width: "120px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};


function NavBarLinks (isLoggedIn, setIsLoggedIn)
{
  return (
    <div>
    <Button variant="info"> <img src={logo} className="App-logo" alt="logo" /></Button>{' '}
                
     
    <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}>
          Login
      </NavLink>

      <NavLink
        to="/register"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Sign Up
      </NavLink>
      
         <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}>
        Home
      </NavLink>


<NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}>
          About
      </NavLink>



    
    </div>
  );
}

export default NavBarLinks;