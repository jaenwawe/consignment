import React from "react";
import { Link,NavLink, Router, Switch, BrowserRouter} from "react-router-dom";
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
const history = createBrowserHistory();

function AuthBar(title,setTitle, setCurrentUser, currentUser,handleLogout) {
// function AuthBar(title,setTitle, setCurrentUser, currentUser,handleLogout, isLoggedIn) {
  return (
    
    <BrowserRouter>
    <Button variant="info"> <img src={logo} className="App-logo" alt="logo" /></Button>{' '}
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
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
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}>
            About
        </NavLink>

        {/* <NavLink
          to="/register"
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}>
            Sign Up
        </NavLink> */}
    
        <NavLink
          to="/sale"
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}>
          Sale2
        </NavLink>

        <NavLink
          to="/logout"
          style={linkStyles}
          onClick={handleLogout}
          activeStyle={{
            background: "darkblue",
          }}>
          Logout
        </NavLink>

        <Link to="/logout" onClick={handleLogout}>Logout</Link> 

      {/* <NavLink to="/logout" onClick={() => handleLogout}>Logout     </NavLink> */}

      <>
      {/* <button variant="info" className="btn btn-link" onClick={handleLogout}> Sign out </button>
      <Button variant="info"> <img src={logo} className="App-logo" alt="logo" /></Button> */}
      {/* <Link to="/logout" onClick={() => this.logout()}>Logout</Link> */}
      {/* */}
      </>
   
      </BrowserRouter>
     


  );
}

export default AuthBar;