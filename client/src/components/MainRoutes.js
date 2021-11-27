// import React from "react";
// // import ReactDOM from "react-dom";
// // import { BrowserRouter, Route } from "react-router-dom";


// import {
//     BrowserRouter,
//     ReactDOM,
//     Link,
//     Route,
//     Switch,
//     useHistory 
//   } from "react-router-dom";
// import AuthenticatedApp from "./AuthenticatedApp";
// import UnauthenticatedApp from "./UnAuthenticatedApp";

// function MainRoutes({currentUser, setCurrentUser}){
 
//     return(
//     <BrowserRouter>
//       <Switch>
//       <Route>
//         {currentUser ? 
//           (<AuthenticatedApp setCurrentUser={setCurrentUser} currentUser={currentUser}/>) 
//           : 
//           (<UnauthenticatedApp setCurrentUser={setCurrentUser}/>)
//         }
//       </Route>
//       </Switch>
//       </BrowserRouter>
//     );
//     }

//   export default MainRoutes;