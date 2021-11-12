import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState , useEffect} from "react";
import '../style/App.css';
import "../style/index.css";
import MainRoutes from "./MainRoutes"
import AuthenticatedApp from "./AuthenticatedApp"
import UnauthenticatedApp from "./UnAuthenticatedApp";
import ProductList from "./ProductList"
import About from "./About"
import Login from "./Login"
import Register from "./Register";
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

  if(!authChecked) { return <UnauthenticatedApp setCurrentUser={setCurrentUser}/> }
  return (
    <div>
        <Bar currentUser={currentUser}  setCurrentUser={setCurrentUser}/>
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
        
        <BrowserRouter>
        <Route path="/about">
              <About />
            </Route>
          
          <Route path="/">
          {currentUser ? 
              (<AuthenticatedApp setCurrentUser={setCurrentUser} currentUser={currentUser}/>) 
              : 
              (<UnauthenticatedApp setCurrentUser={setCurrentUser}/>)
            }
          </Route>
          <Route path="/login">
              <Login />

              </Route>
                <Route path="/profile">
              <Profile />
             
              </Route>
                <Route path="/orders">
              <OrdersPage />

            </Route>

            <Route path="/register">
              <Register />

           
            </Route>
          

      </BrowserRouter>




      {/* <MainRoutes currentUser={currentUser} setCurrentUser = {setCurrentUser} /> */}
      <ProductList title={"Welcome to Styles"} setTitle={setTitle}/>
    </div>
    
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
