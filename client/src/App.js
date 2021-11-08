import { useEffect } from "react";
import logo from './logo.png';
import './App.css';
import NavBar from './NavBar';
import {username, password,image} from "./Mock"


function App() {

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((movies) => console.log(movies));
  }, []);


 
  



  return (
    <div className="App">
 
      <header className="App-header">
      <NavBar />
    
 
     
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
  
    
      </header>
    </div>
  );
}

export default App;
