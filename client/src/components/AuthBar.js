import React from "react";
import { NavLink} from "react-router-dom";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { useHistory } from 'react-router-dom'


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







function AuthBar(title,setTitle, setCurrentUser, currentUser,handleLogOut) {
// function AuthBar(title,setTitle, setCurrentUser, currentUser,handleLogout, isLoggedIn) {
  
const history = useHistory()


   
   
  return (
    <div>
      <Button variant="info"> <img src={logo} className="App-logo" alt="logo" /></Button>{' '}
                  
        <NavLink
          to="/me"
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
      
          <NavLink
            to="/products/add"
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}>
            Sale2
          </NavLink>


          <NavLink
            to="/logout"
            style={linkStyles}
            onClick= {handleLogOut}
            activeStyle={{
              background: "darkblue",
            }}>
            Logout
          </NavLink>



          {/* <NavLink
            to="/logout"
            style={linkStyles}
            onClick= {handleLogOut}
            activeStyle={{
              background: "darkblue",
            }}>
            Logout
          </NavLink> */}


   

{/* 
        // <Link to="/" onClick={handleLogOut}> Logout </Link> 
          <button onClick= {handleLogOut}>Logout</button> */}

        {/* <a href=“#Logout” data-method=“delete” rel=“nofollow”/> */}
          


      </div>
     


  );
}

export default AuthBar;