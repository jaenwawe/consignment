import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState , useEffect} from "react";
import '../style/App.css';
import "../style/index.css";

import AuthenticatedApp from "./AuthenticatedApp"
import UnauthenticatedApp from "./UnAuthenticatedApp";




import Bar from "./Bar"
import Profile from "./Profile"
import OrdersPage from "./OrdersPage"

function App() {

  const [currentUser, setCurrentUser] = useState("")
  const [authChecked, setAuthChecked] = useState(false)
  const [title, setTitle] = useState(null)

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

  if(!authChecked) { return <></> }
  return (
  
        // <Bar currentUser={currentUser}  setCurrentUser={setCurrentUser}/>

        
        <BrowserRouter>
            <Route path="/">
            {currentUser ? 
              (<AuthenticatedApp setCurrentUser={setCurrentUser} currentUser={currentUser}/>) 
              : 
              (<UnauthenticatedApp title={title}  setTitle={setTitle}  setCurrentUser={setCurrentUser}/>)
            }
              </Route>
      </BrowserRouter>

    );
  }
  export default App;

  // ReactDOM.render(
  //   <BrowserRouter>
  //     <Route path="/">
  //       <UnauthenticatedApp/>
  //     </Route>
  //   </BrowserRouter>,
  //   document.getElementById("root")
  // );

  // ReactDOM.render(
  // <BrowserRouter>
  // {/* <Switch> */}
  // <Route path="/">
  //   {currentUser ? 
  //     (<AuthenticatedApp setCurrentUser={setCurrentUser} currentUser={currentUser}/>) 
  //     : 
  //     (<UnauthenticatedApp setCurrentUser={setCurrentUser}/>)
  //   }
  // </Route>
  // {/* </Switch> */}
  // </BrowserRouter>,
  //  document.getElementById("root")
  // );