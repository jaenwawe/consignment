import React from "react"

import {
  BrowserRouter,
  ReactDOM,
  Link,
  Route,
  Switch,
  withRouter,
  useHistory } 
  from "react-router-dom";
  import { Navbar, Nav, Form, FormControl, Button, NavItem } from 'react-bootstrap';
// import { Route ,Link, withRouter} from 'react-router-dom';

import logo from '../data/logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from "./Login";

// import Profile from './Profile';
// import Register from "../Register";
// import {ProductCard} from './ProductCard';
// import Home from './Home';
// import About from './About';
// import AuthenticatedApp from "./components/AuthenticatedApp";
// import UnauthenticatedApp from "./components/UnauthenticatedApp";
// Data
import ProductList from './ProductList';


function Bar({ currentUser, setCurrentUser }) {
  

  // const [authorized, setAuthorized] = useState("false");
  // {authorized ? "Logout" : "Login"}


    let history = useHistory()


    function nextPath(path) {
      console.log("nextPath in Bar")
      this.props.history.push(path);
    }

      function routeChange() {
        console.log("routeHomeChange")
        history.push('/')
      }

    function routeDealsChange(){
          console.log("routeDealsChange")
          history.push('/deals')
        }


      function print(test)
      {
        console.log(test)
      }

  return (
      <Container className="center-horizontal">
            <Row >
                    <Col>    

                    {/* <a className="btn btn-danger" href="/">    Home    </a> */}
                 
                    

                      {/* <Button className="dark" type="button" onClick={routeChange} >Home</Button>{' '} */}
                      <Button variant="info"> <img src={logo} className="App-logo" alt="logo" /></Button>{' '}
                      
                      <a className="btn btn-danger"  href="/register" onClick= {print("/register")}>    Join Link  </a>
                      
                      
                      <Button variant="info" onClick={print('about us')}>About Us</Button>
                      <Button variant="success">Shop</Button>{' '}
                  
                      {/* <Button variant="danger"onClick={routeDealsChange}>Deals</Button> {' '} */}
                      <Button variant="warning">Sale2Stores2</Button>{' '}
                      <Button variant="dark">Stores</Button>{' '}
                      <Button variant="success">Customer Service</Button>
                    
                      {/* <Button variant="info" href="#">"UserName"</Button>  */}
                      {/* <Button type="submit">{authorized}</Button> */}
                
                      {/* (currentUser ? 
                      <Button variant="info" href="/me">{currentUser.first_name}</Button> 
                      :
                      <Button variant="warning" onClick={print('join')} > Join </Button>{' '}) 
               */}
                      <Button type="submit">AddState</Button>
                    </Col>
            </Row>
          </Container> 

  );
}
export default Bar;
