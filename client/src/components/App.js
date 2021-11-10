import {useState, useEffect } from "react";
import '../style/App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Bar from './Bar';
import ProductList from './ProductList';
import Register from "./Register";
import Profile from "./Profile";
import "../style/index.css";


// Data
// import Profile from './Profile';
// import Register from "../Register";
// import {ProductCard} from './ProductCard';
// import Home from './Home';
// import About from './About';
// import AuthenticatedApp from "./components/AuthenticatedApp";
// import UnauthenticatedApp from "./components/UnauthenticatedApp";
 


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)
  const [title, setTitle] = useState("Welcome to styles")


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

  var loggedin = (currentUser) => {
    if (currentUser.isAuthenticated())
      return (
          <div>
          <Route path="/orders">
          <h1>View Orders</h1>
          </Route>
  
          <Route path="/me">
            <Profile/>
          </Route>
          </div>
          )
        else
        return (
          <>
            <Route path="/signup">
              <h1>Join</h1>
              <Register/>
            </Route>
          </>)
    }



  return (
    <div className="App">  
    <div className="app-body">
      <header className="App-header">
      <Bar title={title} setTitle={setTitle}/>
      </header>

      <BrowserRouter>
        <Switch>
        <Route exact path="/">
            <ProductList title={title} setTitle={setTitle}/>
        </Route>
        <Route path="/products">
            <ProductList title={"Deals on Styles"} setTitle={setTitle}/>
        </Route>
          {loggedin}
          <Route path="/wholesale">
            <h1>Wholesale</h1>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>

          <Route path="/deals">
            <h1>Deals</h1>
          </Route>

        </Switch>
    </BrowserRouter>
    
     
 </div>
 </div>
   );
}

export default App;

