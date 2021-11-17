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

// const history = createBrowserHistory();







function AuthBar(title,setTitle, setCurrentUser, currentUser,handleLogout) {
// function AuthBar(title,setTitle, setCurrentUser, currentUser,handleLogout, isLoggedIn) {
  
const history = useHistory()




  function handleLogOut(event) 
  {
      console.log(currentUser.id)
       event.preventDefault()
      let user_id = currentUser.id
  
      fetch('/logout/:user_id', {
       method: 'DELETE',
       headers: {
       'Content-Type': 'application/json'
       },
       body: JSON.stringify(user_id)
   })
     .then(res => {
       if (res.ok) {
         res.json().then(user => {
           console.log(`${user_id}` + ' ' + "logged out")
           setCurrentUser(null)
            history.push("/");
         })
       }else {
           res.json().then(errors => {
           console.error(errors)
           })
       }
     })
   }

   
   
  return (
    <div>
      <Button variant="info"> <img src={logo} className="App-logo" alt="logo" /></Button>{' '}
                  
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
      
          <NavLink
            to="/products/add"
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}>
            Sale2
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

        <Link to="/logout" onClick={handleLogOut}> Logout </Link> 

      </div>
     


  );
}

export default AuthBar;