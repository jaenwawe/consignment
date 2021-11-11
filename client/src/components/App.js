import { useState , useEffect} from "react";
import '../style/App.css';
import "../style/index.css";
import MainRoutes from "./MainRoutes"


import {
  BrowserRouter,
  ReactDOM,
  Link,
  Route,
  Switch,
  useHistory 
} from "react-router-dom";

import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnAuthenticatedApp";








function App() {
  
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  useEffect(() => {
    fetch("/me")
      .then((resp) => {
        if (resp.ok) {
          resp.json().then(user => {
            setCurrentUser(user)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, []);

  if(!authChecked) { return <div></div> }
  return (
    <MainRoutes currentUser={currentUser} setCurrentUser = {setCurrentUser} />
    );
  }
export default App;


